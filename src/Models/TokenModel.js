import BaseModel from '../Models/BaseModel';
import TokenController from '../Controllers/TokenController';

/**
 * Model Class for a Token
 * @hideconstructor
 * @extends BaseModel
 */
class TokenModel extends BaseModel
{
    /**
     * TokenModel Constructor
     * 
     * @public
     * @param {Object} json - The Token Properties
     * @param {string} json.accountId - The Account this Token belongs to
     * @param {string} json.accountType - The Account Type
     * @param {Date} json.issueTimestamp - When the Token was issued
     * @param {Date} json.expireTimestamp - When the Token will expire
     * @param {?Date} json.activityTimestamp - When the last API call using this Token was made
     * @param {?Date} json.unlockTimestamp - When the Token was unlocked
     * @param {?Date} json.lockTimestamp - When the Token was locked
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a Token
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Account this Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._json.accountId;
    }

    /**
     * The Account Type
     * 
     * @public
     * @type {string}
     */
    get accountType()
    {
        return this._json.accountType;
    }

    /**
     * When the Token was issued
     * 
     * @public
     * @type {Date}
     */
    get issueTimestamp()
    {
        return this._json.issueTimestamp;
    }

    /**
     * When the Token will expire
     * 
     * @public
     * @type {Date}
     */
    get expireTimestamp()
    {
        return this._json.expireTimestamp;
    }

    /**
     * When the last API call using this Token was made
     * 
     * @public
     * @type {?Date}
     */
    get activityTimestamp()
    {
        return this._json.activityTimestamp;
    }

    /**
     * When the last API call using this Token was made
     * 
     * @public
     * @type {?Date}
     */
    set activityTimestamp(activityTimestamp)
    {
        this._json.activityTimestamp = activityTimestamp;
        this._updateJson.activityTimestamp = activityTimestamp;
    }

    /**
     * When the Token was unlocked
     * 
     * @public
     * @type {?Date}
     */
    get unlockTimestamp()
    {
        return this._json.unlockTimestamp;
    }

    /**
     * When the Token was unlocked
     * 
     * @public
     * @type {?Date}
     */
    set unlockTimestamp(unlockTimestamp)
    {
        this._json.unlockTimestamp = unlockTimestamp;
        this._updateJson.unlockTimestamp = unlockTimestamp;
    }

    /**
     * When the Token was locked
     * 
     * @public
     * @type {?Date}
     */
    get lockTimestamp()
    {
        return this._json.lockTimestamp;
    }

    /**
     * When the Token was locked
     * 
     * @public
     * @type {?Date}
     */
    set lockTimestamp(lockTimestamp)
    {
        this._json.lockTimestamp = lockTimestamp;
        this._updateJson.lockTimestamp = lockTimestamp;
    }

    /**
     * Whether the Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Delete this **Token**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return TokenController.delete(this._json.id);
    }
}

export default TokenModel;