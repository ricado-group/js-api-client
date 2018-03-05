/**
 * The RICADO Gen 4 API Client for NodeJS and Browsers
 *
 */

import RequestHelper from './RequestHelper';
import WebSocketHelper from './WebSocketHelper';
import Points from './Points';

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
 * @param {Object} variable
 * @api public
 */
export function isDefined(variable) { return typeof variable !== 'undefined' && variable !== null; }

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, the Local Storage is updated with this token.
 * If no JWT is provided, the API Client will look for an existing token in the
 * Local Storage.
 *
 * @static
 * @public
 * @param {string} [token] - An optional JSON Web Token to Initialize the API with.
 */
export function initialize(token = null) {
    Points.initialize();
    
    // TODO: We should probably include a JWT NPM Package and verify the provided token was legit!

    if (isDefined(token)) // If the JWT is Valid and good to go
    {
        JWT = token;

        WebSocketHelper.initialize();
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
 * @return {Promise<string>}
 */
export function userAccountLogin(email, password) {
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/new', {
        email,
        password,
        })
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
 * @return {Promise<string>}
 */
export function apiAccountLogin(key, secret) {
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/new', {
        key,
        secret,
        })
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
 * @param {number} pinCode - The User's Pin Code
 * @return {Promise<boolean>}
 */
export function pinCodeUnlock(pinCode) {
    // TODO: Should we just use the TokenController methods?
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/unlock', {
            pinCode,
        })
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
    // TODO: Should we just use the TokenController methods?
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/unlock', {
            password,
        })
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
    // TODO: Should we just use the TokenController methods?
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/lock')
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
export function logout(key, secret) {
    // TODO: Should we just use the TokenController methods?
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/destroy')
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
    // TODO: Should we just use the ToolsController methods?
    return new Promise((resolve, reject) => {
        RequestHelper.getRequest('/ping')
        .then(result => result === "pong" ? resolve(true) : resolve(false))
        .catch(error => reject(error));
    });
}

/**
 * The Base URL for the RICADO Gen 4 API
 *
 * @type {string}
 */
export var BaseURL = "https://api-dev.ricado.co.nz/api/4.0";

/**
 * A List of Paths (Relative URLs) that do not require Authentication
 *
 * @type {Array}
 */
export const NoAuthPaths = ['/ping', '/token/new']; // TODO: This should really be generated by our PHP API script since this could change without us knowing!!

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
 * Export Top Level Classes
 */

export { RequestHelper, WebSocketHelper, Points };

/**
 * Export Controllers
 */

import ApiAccountController from './Controllers/ApiAccountController';
import CompanyController from './Controllers/CompanyController';
import RTUController from './Controllers/RTUController';
import RTUPluginController from './Controllers/RTUPluginController';
import SiteController from './Controllers/SiteController';
import TokenController from './Controllers/TokenController';
import ToolsController from './Controllers/ToolsController';
import UserAccountController from './Controllers/UserAccountController';
import Site_AlarmGroupController from './Controllers/Site/AlarmGroupController';
import Site_AlarmController from './Controllers/Site/AlarmController';
import Site_PermanentObjectController from './Controllers/Site/PermanentObjectController';
import Site_PointController from './Controllers/Site/PointController';
import Site_TemporaryObjectController from './Controllers/Site/TemporaryObjectController';
import RTU_GlobalSettingsController from './Controllers/RTU/GlobalSettingsController';
import RTU_PluginSettingsController from './Controllers/RTU/PluginSettingsController';
import Packhouse_Site_PackingLineController from './Controllers/Packhouse/Site/PackingLineController';
import Packhouse_Site_RejectBinScaleController from './Controllers/Packhouse/Site/RejectBinScaleController';

export const Controllers = {
    ApiAccountController: ApiAccountController,
    CompanyController: CompanyController,
    RTUController: RTUController,
    RTUPluginController: RTUPluginController,
    SiteController: SiteController,
    TokenController: TokenController,
    ToolsController: ToolsController,
    UserAccountController: UserAccountController,

    Site: {
        AlarmGroupController: Site_AlarmGroupController,
        AlarmController: Site_AlarmController,
        PermanentObjectController: Site_PermanentObjectController,
        PointController: Site_PointController,
        TemporaryObjectController: Site_TemporaryObjectController,
    },

    RTU: {
        GlobalSettingsController: RTU_GlobalSettingsController,
        PluginSettingsController: RTU_PluginSettingsController,
    },

    Packhouse: {
        Site: {
            PackingLineController: Packhouse_Site_PackingLineController,
            RejectBinScaleController: Packhouse_Site_RejectBinScaleController,
        },
    },
};

/**
 * Export Models
 */
import UserAccountModel from './Models/UserAccountModel';

export const Models = {
    UserAccountModel: UserAccountModel,
};