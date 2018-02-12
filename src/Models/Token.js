import Model from '../Models/Model';
import TokenController from '../Controllers/TokenController';

/**
 * Model Class for a Token
 * @extends Model
 */
class Token extends Model
{
    /**
     * Token Constructor
     * 
     * @package
     * @param {object} json - The Token JSON
     */
    constructor(json)
    {
        super(json);
    }

    /**
     * Properties
     */


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
     * @type {Date}
     */
    get activityTimestamp()
    {
        return this._json.activityTimestamp;
    }

    /**
     * When the Token was unlocked
     * 
     * @public
     * @type {Date}
     */
    get unlockTimestamp()
    {
        return this._json.unlockTimestamp;
    }

    /**
     * When the Token was locked
     * 
     * @public
     * @type {Date}
     */
    get lockTimestamp()
    {
        return this._json.lockTimestamp;
    }

    /**
     * Whether the Token has been deleted
     * 
     * @abstract
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
     * @abstract
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }
}

export default Token