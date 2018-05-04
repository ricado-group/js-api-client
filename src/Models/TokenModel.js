import BaseModel from '../Models/BaseModel';
import TokenController from '../Controllers/TokenController';

/**
 * Model Class for a Token
 * @extends BaseModel
 */
class TokenModel extends BaseModel {
    /**
     * TokenModel Constructor
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
     * Methods
     */


    /**
     * Not Supported
     * 
     * @public
     */
    update()
    {
        throw new Error("The TokenModel cannot be Updated");
    }

    /**
     * Delete this Token
     * 
     * @public
     * @return {Promise<TokenModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || TokenController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The TokenModel cannot be Replaced");
    }
}

export default TokenModel;