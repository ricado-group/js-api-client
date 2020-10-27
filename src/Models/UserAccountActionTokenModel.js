/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

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
     * @param {Object<string, any>} json The User Account Action Token Properties
     */
    constructor(json)
    {
        super(json);
        
        /**
         * The Properties to Update for a User Account Action Token
         * 
         * @type {Object<string, any>}
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
    set activityTimestamp(value)
    {
        this._json.activityTimestamp = value;
        this._updateJson.activityTimestamp = value;
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
    set completedTimestamp(value)
    {
        this._json.completedTimestamp = value;
        this._updateJson.completedTimestamp = value;
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
    set emailTimestamp(value)
    {
        this._json.emailTimestamp = value;
        this._updateJson.emailTimestamp = value;
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
     * @return {Promise<boolean>}
     */
    update()
    {
        return new Promise((resolve, reject) => {
            UserAccountActionTokenController.update(this._json.id, this._updateJson)
            .then((modelResult) => {
                // TODO: Validate the Model Result, Replace everything in this Model with the Model Result, Return True
                
                resolve(true);
            })
            .catch(error => reject(error));
        });
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