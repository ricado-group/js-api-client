/**
 * Determines if a Variable has been Defined
 *
 * @param {any} variable
 * @api public
 * @returns {boolean}
 */
export function isDefined(variable: any): boolean;
/**
 * Returns the Initialized Status
 *
 * @api public
 * @returns {boolean}
 */
export function isInitialized(): boolean;
/**
 * Returns the Debugging Mode
 *
 * @api public
 * @returns {boolean}
 */
export function isDebugMode(): boolean;
/**
 * Enable Debugging Mode
 *
 * @api public
 */
export function enableDebugMode(): void;
/**
 * Disable Debugging Mode
 *
 * @api public
 */
export function disableDebugMode(): void;
/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, no further Authentication steps are required.
 * If no JWT is provided, a User Account or API Account Login must be completed next.
 *
 * @static
 * @public
 * @param {string} [token] - An optional JSON Web Token to Initialize the API with.
 */
export function initialize(token?: string): void;
/**
 * Returns whether a valid JSON Web Token exists
 *
 * @static
 * @public
 * @returns {boolean}
 */
export function hasToken(): boolean;
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
export function userAccountLogin(email: string, password: string, providerId?: string): Promise<string>;
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
export function apiAccountLogin(key: string, secret: string, providerId?: string): Promise<string>;
/**
 * Unlocks an existing JWT using a Pin Code
 *
 * @static
 * @public
 * @param {string} pinCode - The User's Pin Code
 * @return {Promise<boolean>}
 */
export function pinCodeUnlock(pinCode: string): Promise<boolean>;
/**
 * Unlocks an existing JWT using a Password
 *
 * @static
 * @public
 * @param {string} password - The User's Password
 * @return {Promise<boolean>}
 */
export function passwordUnlock(password: string): Promise<boolean>;
/**
 * Locks an existing JWT
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function lock(): Promise<boolean>;
/**
 * Destroys an existing JWT
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function logout(): Promise<boolean>;
/**
 * "Pings" the API
 *
 * @static
 * @public
 * @return {Promise<boolean>}
 */
export function ping(): Promise<boolean>;
/**
 * The JSON Web Token for all Authenticated API Calls
 *
 * @private
 * @type {string}
 */
export var JWT: string;
/**
 * The Base URL for the RICADO Gen 4 API
 *
 * @type {string}
 */
export var BaseURL: string;
/**
 * The WebSocket Server
 *
 * @type {string}
 */
export var WebSocketServer: string;
/**
 * The WebSocket Port
 *
 * @type {number}
 */
export var WebSocketPort: number;
/**
 * The Library Version
 *
 * @type {string}
 */
export const Version: string;
import RequestHelper from "./RequestHelper";
import WebSocketHelper from "./WebSocketHelper";
import Points from "./Points";
import NoAuthPaths from "./NoAuthPaths";
import Controllers from "./Controllers/index";
import Errors from "./Errors/index";
import Models from "./Models/index";
export { RequestHelper, WebSocketHelper, Points, NoAuthPaths, Controllers, Errors, Models };
