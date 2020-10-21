import BaseModel from '../Models/BaseModel';
import UserAccountActionTokenController from '../Controllers/UserAccountActionTokenController';

/**
 * Model Class for a User Account Action Token
 * @hideconstructor
 * @extends BaseModel
 */
class UserAccountActionTokenModel extends BaseModel
{
    /**
     * UserAccountActionTokenModel Constructor
     * 
     * @public
     * @param {Object} json - The User Account Action Token Properties
     * @param {string} json.accountId - The Account this Action Token belongs to
     * @param {string} json.companyId - The Company this Action Token belongs to
     * @param {string} json.action - The Action that can be Performed using this Action Token
     * @param {Date} json.issueTimestamp - When the Action Token was issued
     * @param {Date} json.expireTimestamp - When the Action Token will expire
     * @param {?Date} json.activityTimestamp - When the last API call using this Action Token was made
     * @param {?Date} json.completedTimestamp - When the Action was Completed
     * @param {?Date} json.emailTimestamp - When the Action Email was Sent
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a User Account Action Token
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The User Account Action Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Account this Action Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._json.accountId;
    }

    /**
     * The Company this Action Token belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * The Action that can be Performed using this Action Token
     * 
     * @public
     * @type {string}
     */
    get action()
    {
        return this._json.action;
    }

    /**
     * When the Action Token was issued
     * 
     * @public
     * @type {Date}
     */
    get issueTimestamp()
    {
        return this._json.issueTimestamp;
    }

    /**
     * When the Action Token will expire
     * 
     * @public
     * @type {Date}
     */
    get expireTimestamp()
    {
        return this._json.expireTimestamp;
    }

    /**
     * When the last API call using this Action Token was made
     * 
     * @public
     * @type {?Date}
     */
    get activityTimestamp()
    {
        return this._json.activityTimestamp;
    }

    /**
     * When the last API call using this Action Token was made
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
     * When the Action was Completed
     * 
     * @public
     * @type {?Date}
     */
    get completedTimestamp()
    {
        return this._json.completedTimestamp;
    }

    /**
     * When the Action was Completed
     * 
     * @public
     * @type {?Date}
     */
    set completedTimestamp(completedTimestamp)
    {
        this._json.completedTimestamp = completedTimestamp;
        this._updateJson.completedTimestamp = completedTimestamp;
    }

    /**
     * When the Action Email was Sent
     * 
     * @public
     * @type {?Date}
     */
    get emailTimestamp()
    {
        return this._json.emailTimestamp;
    }

    /**
     * When the Action Email was Sent
     * 
     * @public
     * @type {?Date}
     */
    set emailTimestamp(emailTimestamp)
    {
        this._json.emailTimestamp = emailTimestamp;
        this._updateJson.emailTimestamp = emailTimestamp;
    }

    /**
     * Whether the User Account Action Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the User Account Action Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **User Account Action Token**
     * 
     * @public
     * @return {Promise<UserAccountActionTokenModel>}
     */
    update()
    {
        return UserAccountActionTokenController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **User Account Action Token**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return UserAccountActionTokenController.delete(this._json.id);
    }
}

export default UserAccountActionTokenModel;