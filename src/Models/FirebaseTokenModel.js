import BaseModel from '../Models/BaseModel';
import FirebaseTokenController from '../Controllers/FirebaseTokenController';

/**
 * Model Class for a Firebase Token
 * @hideconstructor
 * @extends BaseModel
 */
class FirebaseTokenModel extends BaseModel
{
    /**
     * FirebaseTokenModel Constructor
     * 
     * @public
     * @param {Object} json - The Firebase Token Properties
     * @param {string} json.accountId - The Account this Firebase Token belongs to
     * @param {string} json.token - The Firebase Token
     * @param {boolean} json.enabled - Whether the Firebase Token should receive Notifications
     * @param {string} json.deviceName - The Device Name
     * @param {string} json.devicePlatform - The Device Platform
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a Firebase Token
         * @private
         */
        this._updateJson = {};
    }

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

    /**
     * The Account this Firebase Token belongs to
     * 
     * @public
     * @type {string}
     */
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

    /**
     * Whether the Firebase Token should receive Notifications
     * 
     * @public
     * @type {boolean}
     */
    set enabled(enabled)
    {
        this._json.enabled = enabled;
        this._updateJson.enabled = enabled;
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
     * Update this **Firebase Token**
     * 
     * @public
     * @return {Promise<FirebaseTokenModel>}
     */
    update()
    {
        return FirebaseTokenController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **Firebase Token**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return FirebaseTokenController.delete(this._json.id);
    }
}

export default FirebaseTokenModel;