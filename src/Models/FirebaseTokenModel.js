import BaseModel from '../Models/BaseModel';
import FirebaseTokenController from '../Controllers/FirebaseTokenController';

/**
 * Model Class for a Firebase Token
 * @extends BaseModel
 */
class FirebaseTokenModel extends BaseModel {
    /**
     * FirebaseTokenModel Constructor
     * 
     * @private
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);
    }

    /**
     * Properties
     */


    /**
     * The Firebase Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Account this Firebase Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._json.accountId;
    }

    set accountId(accountId)
    {
        this._json.accountId = accountId;
        this._updateJson.accountId = accountId;
    }

    /**
     * The Firebase Token
     * 
     * @public
     * @type {string}
     */
    get token()
    {
        return this._json.token;
    }

    /**
     * Whether the Firebase Token should receive Notifications
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._json.enabled;
    }

    set enabled(enabled)
    {
        this._json.enabled = enabled;
        this._updateJson.enabled = enabled;
    }

    /**
     * The Device Name
     * 
     * @public
     * @type {string}
     */
    get deviceName()
    {
        return this._json.deviceName;
    }

    set deviceName(deviceName)
    {
        this._json.deviceName = deviceName;
        this._updateJson.deviceName = deviceName;
    }

    /**
     * The Device Platform
     * 
     * @public
     * @type {string}
     */
    get devicePlatform()
    {
        return this._json.devicePlatform;
    }

    set devicePlatform(devicePlatform)
    {
        this._json.devicePlatform = devicePlatform;
        this._updateJson.devicePlatform = devicePlatform;
    }

    /**
     * Whether the Firebase Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Firebase Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Methods
     */


    /**
     * Update this Firebase Token
     * 
     * @public
     * @return {Promise<FirebaseTokenModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || FirebaseTokenController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Firebase Token
     * 
     * @public
     * @return {Promise<FirebaseTokenModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || FirebaseTokenController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The FirebaseTokenModel cannot be Replaced");
    }
}

export default FirebaseTokenModel;