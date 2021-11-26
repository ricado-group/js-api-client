/**
 * The RICADO Gen 4 API Client for NodeJS and Browsers
 */

import RequestHelper from './RequestHelper';
import WebSocketHelper from './WebSocketHelper';
import Points from './Points';
import { version as PackageVersion} from './PackageVersion';
import NoAuthPaths from './NoAuthPaths';
import Controllers from './Controllers/index';
import Errors from './Errors/index';
import Models from './Models/index';
import { decode as base64Decode } from 'js-base64';

/**
 * Determines if a Variable has been Defined
 * 
 * @static
 * @public
 * @param {any} variable
 * @returns {boolean}
 */
export function isDefined(variable)
{
    return typeof variable !== 'undefined' && variable !== null;
}

/**
 * The JSON Web Token for all Authenticated API Calls
 * 
 * @private
 * @type {string}
 */
export var JWT = undefined;

/**
 * Returns the JSON Web Token
 * 
 * @static
 * @public
 * @returns {string|undefined}
 */
export function getToken()
{
    return JWT;
}

/**
 * Set the JSON Web Token
 * 
 * @static
 * @public
 * @param {string|undefined} jwt The JSON Web Token
 * @throws {Error} The JSON Web Token provided was not valid
 */
export function setToken(jwt)
{
    if(isJwtValid(jwt))
    {
        JWT = jwt;
    }
    else
    {
        throw new Error("The JSON Web Token provided was not valid");
    }
}

/**
 * Returns whether a valid JSON Web Token exists
 * 
 * @static
 * @public
 * @returns {boolean}
 */
export function hasToken()
{
    return isDefined(JWT) && isJwtValid(JWT);
}

/**
 * Initialized Status
 * 
 * @private
 * @type {boolean}
 */
var initialized = false;

/**
 * Returns the Initialized Status
 * 
 * @static
 * @public
 * @returns {boolean}
 */
export function isInitialized()
{
    return initialized == true;
}

/**
 * Debugging Mode
 * 
 * @private
 * @type {boolean}
 */
var debugging = false;

/**
 * Returns the Debugging Mode
 * 
 * @static
 * @public
 * @returns {boolean}
 */
export function isDebugMode()
{
    return debugging == true;
}

/**
 * Enable Debugging Mode
 * 
 * @static
 * @public
 */
export function enableDebugMode()
{
    debugging = true;
}

/**
 * Disable Debugging Mode
 * 
 * @static
 * @public
 */
export function disableDebugMode()
{
    debugging = false;
}

/**
 * The Base URL for the RICADO Gen 4 API
 * 
 * @private
 * @type {string}
 */
export var BaseURL = "https://api.ricado.co.nz/api/4.0";

/**
 * Returns the Base URL
 * 
 * @static
 * @public
 * @return {string}
 */
export function getBaseURL()
{
    return BaseURL;
}

/**
 * Set the Base URL
 * 
 * @static
 * @public
 * @param {string} url The Base URL String
 */
export function setBaseURL(url)
{
    BaseURL = url;
}

/**
 * The WebSocket Server
 * 
 * @private
 * @type {string}
 */
export var WebSocketServer = "https://websocket.ricado.co.nz";

/**
 * Returns the WebSocket Server URL
 * 
 * @static
 * @public
 * @return {string}
 */
export function getWebSocketServer()
{
    return WebSocketServer;
}

/**
 * Set the WebSocket Server URL
 * 
 * @static
 * @public
 * @param {string} url The WebSocket Server URL
 */
export function setWebSocketServer(url)
{
    WebSocketServer = url;

    // TODO: Consider Re-Initialization of the WebSocket Helper?
}

/**
 * The WebSocket Port
 * 
 * @private
 * @type {number}
 */
export var WebSocketPort = 443;

/**
 * Returns the WebSocket Port
 * 
 * @static
 * @public
 * @return {number}
 */
export function getWebSocketPort()
{
    return WebSocketPort;
}

/**
 * Set the WebSocket Port
 * 
 * @static
 * @public
 * @param {number} port The WebSocket Port Number
 */
export function setWebSocketPort(port)
{
    WebSocketPort = port;
}

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, no further Authentication steps are required.
 * If no JWT is provided, a User Account or API Account Login must be completed next.
 * 
 * @static
 * @public
 * @param {string} [token] An optional JSON Web Token to Initialize the API with.
 * @throws {Error} The JSON Web Token provided was not valid
 */
export function initialize(token = undefined)
{
    if(initialized == false)
    {
        Points.initialize();

        if(token !== undefined)
        {
            setToken(token);
            
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
 * Generates a new JWT for a User Account
 * 
 * @static
 * @public
 * @param {string} email The User's Email Address
 * @param {string} password The User's Password
 * @param {string} [providerId] The Service Provider ID
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
            // TODO: Resume the WebSocket
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
            // TODO: Resume the WebSocket
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
            // TODO: Suspend the WebSocket
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
 * 
 * @param {string} jwt The JWT Token
 * @return {boolean}
 */
function isJwtValid(jwt)
{
    if(jwt === null || typeof jwt !== 'string')
    {
        return false;
    }

    let jwtSegments = jwt.split('.');

    if(jwtSegments.length !== 3)
    {
        return false;
    }

    try
    {
        JSON.parse(base64Decode(jwtSegments[0]));
        JSON.parse(base64Decode(jwtSegments[1]));
        
        return true;
    }
    catch
    {
        return false;
    }
}

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
