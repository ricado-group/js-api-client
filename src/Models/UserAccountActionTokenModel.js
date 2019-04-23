import BaseModel from '../Models/BaseModel';
import UserAccountActionTokenController from '../Controllers/UserAccountActionTokenController';

/**
 * Model Class for a User Account Action Token
 * @extends BaseModel
 */
class UserAccountActionTokenModel extends BaseModel {
    /**
     * UserAccountActionTokenModel Constructor
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
     * @type {Date}
     */
    get activityTimestamp()
    {
        return this._json.activityTimestamp;
    }

    set activityTimestamp(activityTimestamp)
    {
        this._json.activityTimestamp = activityTimestamp;
        this._updateJson.activityTimestamp = activityTimestamp;
    }

    /**
     * When the Action was Completed
     * 
     * @public
     * @type {Date}
     */
    get completedTimestamp()
    {
        return this._json.completedTimestamp;
    }

    set completedTimestamp(completedTimestamp)
    {
        this._json.completedTimestamp = completedTimestamp;
        this._updateJson.completedTimestamp = completedTimestamp;
    }

    /**
     * When the Action Email was Sent
     * 
     * @public
     * @type {Date}
     */
    get emailTimestamp()
    {
        return this._json.emailTimestamp;
    }

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
     * Methods
     */


    /**
     * Update this User Account Action Token
     * 
     * @public
     * @return {Promise<UserAccountActionTokenModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || UserAccountActionTokenController;
        return super.update(controllerClass);
    }

    /**
     * Delete this User Account Action Token
     * 
     * @public
     * @return {Promise<UserAccountActionTokenModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || UserAccountActionTokenController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The UserAccountActionTokenModel cannot be Replaced");
    }
}

export default UserAccountActionTokenModel;