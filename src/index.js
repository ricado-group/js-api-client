/**
 * The RICADO Gen 4 API Client for NodeJS and Browsers
 *
 */

import RequestHelper from './RequestHelper';
import WebSocketHelper from './WebSocketHelper';
import Points from './Points';
import { version as PackageVersion} from './PackageVersion';
import NoAuthPaths from './NoAuthPaths';
import Controllers from './Controllers';
import Errors from './Errors';
import Models from './Models';

/**
 * The JSON Web Token for all Authenticated API Calls
 *
 * @private
 * @type {string}
 */
export var JWT = undefined;

/**
 * Determines if a Variable has been Defined
 *
 * @param {any} variable
 * @api public
 * @returns {boolean}
 */
export function isDefined(variable) { return typeof variable !== 'undefined' && variable !== null; }

/**
 * Initialized Status
 * 
 * @type {boolean}
 */
var initialized = false;

/**
 * Returns the Initialized Status
 *
 * @api public
 * @returns {boolean}
 */
export function isInitialized() { return initialized == true; }

/**
 * Debugging Mode
 * 
 * @type {boolean}
 */
var debugging = false;

/**
 * Returns the Debugging Mode
 *
 * @api public
 * @returns {boolean}
 */
export function isDebugMode() { return debugging == true; }

/**
 * Enable Debugging Mode
 *
 * @api public
 */
export function enableDebugMode() { debugging = true; }

/**
 * Disable Debugging Mode
 *
 * @api public
 */
export function disableDebugMode() { debugging = false; }

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, no further Authentication steps are required.
 * If no JWT is provided, a User Account or API Account Login must be completed next.
 *
 * @static
 * @public
 * @param {string} [token] - An optional JSON Web Token to Initialize the API with.
 */
export function initialize(token = null) {
    if(initialized == false)
    {
        Points.initialize();
        
        // TODO: We should probably include a JWT NPM Package and verify the provided token was legit!

        if (isDefined(token)) // If the JWT is Valid and good to go
        {
            JWT = token;

            WebSocketHelper.initialize();
        }

        initialized = true;
    }
    else
    {
        if(isDebugMode() == true)
        {
            console.warn("API Client Initialize should not be called more than once");
        }
    }
}

/**
 * Returns whether a valid JSON Web Token exists
 *
 * @static
 * @public
 * @returns {boolean}
 */
export function hasToken() {
    // TODO: Also check the JWT is valid using a JWT Library.
    return isDefined(JWT);
}

/**
 * Generates a new JWT for a User Account
 *
 * @static
 * @public
 * @param {string} email - The User's Email Address
 * @param {string} password - The User's Password
 * @param {string} [providerId] - The Service Provider ID
 * @return {Promise<string>}
 */
export function userAccountLogin(email, password, providerId = "a2a2a813-bbeb-11e8-99a9-b8ca3a64dc30") {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.create({email, password, providerId})
        .then((data) => {
            JWT = data.token;
            WebSocketHelper.initialize();
            resolve(data.token);
        })
        .catch(error => reject(error));
    });
}

/**
 * Generates a new JWT for an API Account
 *
 * @static
 * @public
 * @param {string} key - The API Key
 * @param {string} secret - The API Secret
 * @param {string} [providerId] - The Service Provider ID
 * @return {Promise<string>}
 */
export function apiAccountLogin(key, secret, providerId = "a2a2a813-bbeb-11e8-99a9-b8ca3a64dc30") {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.create({key, secret, providerId})
        .then((data) => {
            JWT = data.token;
            WebSocketHelper.initialize();
            resolve(data.token);
        })
        .catch(error => reject(error));
    });
}

/**
 * Unlocks an existing JWT using a Pin Code
 *
 * @static
 * @public
 * @param {string} pinCode - The User's Pin Code
 * @return {Promise<boolean>}
 */
export function pinCodeUnlock(pinCode) {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.unlock({pinCode})
        .then((result) => {
            // TODO: Resume the WebSocket?
            resolve(result);
        })
        .catch(error => reject(error));
    });
}

/**
 * Unlocks an existing JWT using a Password
 *
 * @static
 * @public
 * @param {string} password - The User's Password
 * @return {Promise<boolean>}
 */
export function passwordUnlock(password) {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.unlock({password})
        .then((result) => {
            // TODO: Resume the WebSocket?
            resolve(result);
        })
        .catch(error => reject(error));
    });
}

/**
 * Locks an existing JWT
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function lock() {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.lock()
        .then((result) => {
            // TODO: Suspend the WebSocket?
            resolve(result);
        })
        .catch(error => reject(error));
    });
}

/**
 * Destroys an existing JWT
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function logout() {
    return new Promise((resolve, reject) => {
        Controllers.TokenController.destroy()
        .then((result) => {
            JWT = undefined;
            // TODO: Destroy the WebSocket
            resolve(result);
        })
        .catch(error => reject(error));
    });
}

/**
 * "Pings" the API
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function ping() {
    return new Promise((resolve, reject) => {
        Controllers.ToolsController.ping()
        .then(result => result === "pong" ? resolve(true) : resolve(false))
        .catch(error => reject(error));
    });
}

/**
 * The Base URL for the RICADO Gen 4 API
 *
 * @type {string}
 */
export var BaseURL = "https://api.ricado.co.nz/api/4.0";

/**
 * The WebSocket Server
 * 
 * @type {string}
 */
export var WebSocketServer = "https://websocket.ricado.co.nz";

/**
 * The WebSocket Port
 * 
 * @type {number}
 */
export var WebSocketPort = 443;

/**
 * The Library Version
 * 
 * @type {string}
 */
export const Version = PackageVersion;

/**
 * Export Top Level Classes
 */
export { RequestHelper, WebSocketHelper, Points, NoAuthPaths };

/**
 * Export Lower Level Classes
 */
export { Controllers, Errors, Models };
