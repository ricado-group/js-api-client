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
 * @returns {boolean}
 */
export function isDefined(variable) { return typeof variable !== 'undefined' && variable !== null; }

/**
 * Initialized Status
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
 * Returns the Debugging Mode
 *
 * @api public
 * @returns {boolean}
 */
export function enableDebugMode() { debugging = true; }

/**
 * Returns the Debugging Mode
 *
 * @api public
 * @returns {boolean}
 */
export function disableDebugMode() { debugging = false; }

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
            console.warn("API Client Initialize has already been called!");
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
 * @param {string} providerId - The Service Provider ID
 * @return {Promise<string>}
 */
export function userAccountLogin(email, password, providerId = "a2a2a813-bbeb-11e8-99a9-b8ca3a64dc30") {
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/new', {
        email,
        password,
        providerId,
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
 * @param {string} providerId - The Service Provider ID
 * @return {Promise<string>}
 */
export function apiAccountLogin(key, secret, providerId = "a2a2a813-bbeb-11e8-99a9-b8ca3a64dc30") {
    return new Promise((resolve, reject) => {
        RequestHelper.postRequest('/token/new', {
        key,
        secret,
        providerId,
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
export var BaseURL = "https://api.ricado.co.nz/api/4.0";

/**
 * A List of Paths (Relative URLs) that do not require Authentication
 *
 * @type {Array}
 */
export const NoAuthPaths = ['/ping', '/token/new', '/user-action-tokens/new', '/user-action-tokens/verify', '/user-action-tokens/actions/*']; // TODO: This should really be generated by our PHP API script since this could change without us knowing!!

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
export const Version = '0.1.29'; // TODO: Ensure that the package.json Version and this Version always remain the same!

/**
 * Export Top Level Classes
 */

export { RequestHelper, WebSocketHelper, Points };

/**
 * Export Controllers
 */

import AccountPolicyController from './Controllers/AccountPolicyController';
import ApiAccountController from './Controllers/ApiAccountController';
import CompanyController from './Controllers/CompanyController';
import FirebaseTokenController from './Controllers/FirebaseTokenController';
import RTUController from './Controllers/RTUController';
import RTUPluginController from './Controllers/RTUPluginController';
import SiteController from './Controllers/SiteController';
import TokenController from './Controllers/TokenController';
import ToolsController from './Controllers/ToolsController';
import UserAccountActionTokenController from './Controllers/UserAccountActionTokenController';
import UserAccountController from './Controllers/UserAccountController';

import Site_AlarmGroupController from './Controllers/Site/AlarmGroupController';
import Site_AlarmController from './Controllers/Site/AlarmController';
import Site_DefinitionController from './Controllers/Site/DefinitionController';
import Site_PermanentObjectDataController from './Controllers/Site/PermanentObjectDataController';
import Site_PermanentObjectController from './Controllers/Site/PermanentObjectController';
import Site_PointController from './Controllers/Site/PointController';
import Site_TemporaryObjectController from './Controllers/Site/TemporaryObjectController';

import RTU_GlobalSettingsController from './Controllers/RTU/GlobalSettingsController';
import RTU_PluginSettingsController from './Controllers/RTU/PluginSettingsController';

import Packhouse_Site_BinTipWeightController from './Controllers/Packhouse/Site/BinTipWeightController';
import Packhouse_Site_CompacSizerBatchController from './Controllers/Packhouse/Site/CompacSizerBatchController';
import Packhouse_Site_CompacSizerOutletProductChangeController from './Controllers/Packhouse/Site/CompacSizerOutletProductChangeController';
import Packhouse_Site_CompacSizerPackrunSummaryController from './Controllers/Packhouse/Site/CompacSizerPackrunSummaryController';
import Packhouse_Site_GrowingMethodController from './Controllers/Packhouse/Site/GrowingMethodController';
import Packhouse_Site_PackingLineController from './Controllers/Packhouse/Site/PackingLineController';
import Packhouse_Site_PackrunController from './Controllers/Packhouse/Site/PackrunController';
import Packhouse_Site_RejectBinController from './Controllers/Packhouse/Site/RejectBinController';
import Packhouse_Site_RejectBinScaleController from './Controllers/Packhouse/Site/RejectBinScaleController';
import Packhouse_Site_RejectBinWeightController from './Controllers/Packhouse/Site/RejectBinWeightController';
import Packhouse_Site_VarietyController from './Controllers/Packhouse/Site/VarietyController';

export const Controllers = {
    AccountPolicyController: AccountPolicyController,
    ApiAccountController: ApiAccountController,
    CompanyController: CompanyController,
    FirebaseTokenController: FirebaseTokenController,
    RTUController: RTUController,
    RTUPluginController: RTUPluginController,
    SiteController: SiteController,
    TokenController: TokenController,
    ToolsController: ToolsController,
    UserAccountActionTokenController: UserAccountActionTokenController,
    UserAccountController: UserAccountController,

    Site: {
        AlarmGroupController: Site_AlarmGroupController,
        AlarmController: Site_AlarmController,
        DefinitionController: Site_DefinitionController,
        PermanentObjectController: Site_PermanentObjectController,
        PermanentObjectDataController: Site_PermanentObjectDataController,
        PointController: Site_PointController,
        TemporaryObjectController: Site_TemporaryObjectController,
    },

    RTU: {
        GlobalSettingsController: RTU_GlobalSettingsController,
        PluginSettingsController: RTU_PluginSettingsController,
    },

    Packhouse: {
        Site: {
            BinTipWeightController: Packhouse_Site_BinTipWeightController,
            CompacSizerBatchController: Packhouse_Site_CompacSizerBatchController,
            CompacSizerOutletProductChangeController: Packhouse_Site_CompacSizerOutletProductChangeController,
            CompacSizerPackrunSummaryController: Packhouse_Site_CompacSizerPackrunSummaryController,
            GrowingMethodController: Packhouse_Site_GrowingMethodController,
            PackingLineController: Packhouse_Site_PackingLineController,
            PackrunController: Packhouse_Site_PackrunController,
            RejectBinController: Packhouse_Site_RejectBinController,
            RejectBinScaleController: Packhouse_Site_RejectBinScaleController,
            RejectBinWeightController: Packhouse_Site_RejectBinWeightController,
            VarietyController: Packhouse_Site_VarietyController,
        },
    },
};

/**
 * Export Models
 */

import AccountPolicyModel from './Models/AccountPolicyModel';
import ApiAccountModel from './Models/ApiAccountModel';
import CompanyModel from './Models/CompanyModel';
import FirebaseTokenModel from './Models/FirebaseTokenModel';
import RTUModel from './Models/RTUModel';
import RTUPluginModel from './Models/RTUPluginModel';
import SiteModel from './Models/SiteModel';
import TokenModel from './Models/TokenModel';
import UserAccountActionTokenModel from './Models/UserAccountActionTokenModel'
import UserAccountModel from './Models/UserAccountModel'

import Site_AlarmGroupModel from './Models/Site/AlarmGroupModel';
import Site_AlarmModel from './Models/Site/AlarmModel';
import Site_DefinitionModel from './Models/Site/DefinitionModel';
import Site_PermanentObjectDataModel from './Models/Site/PermanentObjectDataModel';
import Site_PermanentObjectModel from './Models/Site/PermanentObjectModel';
import Site_PointModel from './Models/Site/PointModel';
import Site_TemporaryObjectModel from './Models/Site/TemporaryObjectModel';

import Packhouse_Site_BinTipWeightModel from './Models/Packhouse/Site/BinTipWeightModel';
import Packhouse_Site_CompacSizerBatchModel from './Models/Packhouse/Site/CompacSizerBatchModel';
import Packhouse_Site_CompacSizerOutletProductChangeModel from './Models/Packhouse/Site/CompacSizerOutletProductChangeModel';
import Packhouse_Site_CompacSizerPackrunSummaryModel from './Models/Packhouse/Site/CompacSizerPackrunSummaryModel';
import Packhouse_Site_GrowingMethodModel from './Models/Packhouse/Site/GrowingMethodModel';
import Packhouse_Site_PackingLineModel from './Models/Packhouse/Site/PackingLineModel';
import Packhouse_Site_PackrunModel from './Models/Packhouse/Site/PackrunModel';
import Packhouse_Site_RejectBinModel from './Models/Packhouse/Site/RejectBinModel';
import Packhouse_Site_RejectBinScaleModel from './Models/Packhouse/Site/RejectBinScaleModel';
import Packhouse_Site_RejectBinWeightModel from './Models/Packhouse/Site/RejectBinWeightModel';
import Packhouse_Site_VarietyModel from './Models/Packhouse/Site/VarietyModel';

export const Models = {
    AccountPolicyModel: AccountPolicyModel,
    ApiAccountModel: ApiAccountModel,
    CompanyModel: CompanyModel,
    FirebaseTokenModel: FirebaseTokenModel,
    RTUModel: RTUModel,
    RTUPluginModel: RTUPluginModel,
    SiteModel: SiteModel,
    TokenModel: TokenModel,
    UserAccountActionTokenModel: UserAccountActionTokenModel,
    UserAccountModel: UserAccountModel,

    Site: {
        AlarmGroupModel: Site_AlarmGroupModel,
        AlarmModel: Site_AlarmModel,
        DefinitionModel: Site_DefinitionModel,
        PermanentObjectDataModel: Site_PermanentObjectDataModel,
        PermanentObjectModel: Site_PermanentObjectModel,
        PointModel: Site_PointModel,
        TemporaryObjectModel: Site_TemporaryObjectModel,
    },

    Packhouse: {
        Site: {
            BinTipWeightModel: Packhouse_Site_BinTipWeightModel,
            CompacSizerBatchModel: Packhouse_Site_CompacSizerBatchModel,
            CompacSizerOutletProductChangeModel: Packhouse_Site_CompacSizerOutletProductChangeModel,
            CompacSizerPackrunSummaryModel: Packhouse_Site_CompacSizerPackrunSummaryModel,
            GrowingMethodModel: Packhouse_Site_GrowingMethodModel,
            PackingLineModel: Packhouse_Site_PackingLineModel,
            PackrunModel: Packhouse_Site_PackrunModel,
            RejectBinModel: Packhouse_Site_RejectBinModel,
            RejectBinScaleModel: Packhouse_Site_RejectBinScaleModel,
            RejectBinWeightModel: Packhouse_Site_RejectBinWeightModel,
            VarietyModel: Packhouse_Site_VarietyModel,
        }
    }
};