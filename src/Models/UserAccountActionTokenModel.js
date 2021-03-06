/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a User Account Action Token
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class UserAccountActionTokenModel extends BaseModel
{
    /**
     * UserAccountActionTokenModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The User Account Action Token ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Account this Action Token belongs to
         * 
         * @type {string}
         * @private
         */
        this._accountId = undefined;
        
        /**
         * The Company this Action Token belongs to
         * 
         * @type {string}
         * @private
         */
        this._companyId = undefined;
        
        /**
         * The Action that can be Performed using this Action Token
         * 
         * @type {string}
         * @private
         */
        this._action = undefined;
        
        /**
         * When the Action Token was issued
         * 
         * @type {Date}
         * @private
         */
        this._issueTimestamp = undefined;
        
        /**
         * When the Action Token will expire
         * 
         * @type {Date}
         * @private
         */
        this._expireTimestamp = undefined;
        
        /**
         * When the last API call using this Action Token was made
         * 
         * @type {?Date}
         * @private
         */
        this._activityTimestamp = undefined;
        
        /**
         * When the Action was Completed
         * 
         * @type {?Date}
         * @private
         */
        this._completedTimestamp = undefined;
        
        /**
         * When the Action Email was Sent
         * 
         * @type {?Date}
         * @private
         */
        this._emailTimestamp = undefined;
        
        /**
         * Whether the User Account Action Token has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the User Account Action Token was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
    }

    /**
     * The User Account Action Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Account this Action Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._accountId;
    }

    /**
     * The Company this Action Token belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._companyId;
    }

    /**
     * The Action that can be Performed using this Action Token
     * 
     * @public
     * @type {string}
     */
    get action()
    {
        return this._action;
    }

    /**
     * When the Action Token was issued
     * 
     * @public
     * @type {Date}
     */
    get issueTimestamp()
    {
        return this._issueTimestamp;
    }

    /**
     * When the Action Token will expire
     * 
     * @public
     * @type {Date}
     */
    get expireTimestamp()
    {
        return this._expireTimestamp;
    }

    /**
     * When the last API call using this Action Token was made
     * 
     * @public
     * @type {?Date}
     */
    get activityTimestamp()
    {
        return this._activityTimestamp;
    }

    /**
     * When the Action was Completed
     * 
     * @public
     * @type {?Date}
     */
    get completedTimestamp()
    {
        return this._completedTimestamp;
    }

    /**
     * When the Action Email was Sent
     * 
     * @public
     * @type {?Date}
     */
    get emailTimestamp()
    {
        return this._emailTimestamp;
    }

    /**
     * Whether the User Account Action Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the User Account Action Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * Convert this **UserAccountActionTokenModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            accountId: this._accountId,
            companyId: this._companyId,
            action: this._action,
            issueTimestamp: this._issueTimestamp,
            expireTimestamp: this._expireTimestamp,
            activityTimestamp: this._activityTimestamp,
            completedTimestamp: this._completedTimestamp,
            emailTimestamp: this._emailTimestamp,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **UserAccountActionTokenModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {UserAccountActionTokenModel}
     */
    static fromJSON(json)
    {
        let model = new UserAccountActionTokenModel();
        
        /**
         * The JSON Object
         * 
         * @type {Object<string, any>}
         */
        let jsonObject = {};
        
        if(typeof json === 'string')
        {
            jsonObject = JSON.parse(json);
        }
        else if(typeof json === 'object')
        {
            jsonObject = json;
        }
        
        if('id' in jsonObject)
        {
            model._id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('accountId' in jsonObject)
        {
            model._accountId = (function(){
                if(typeof jsonObject['accountId'] !== 'string')
                {
                    return String(jsonObject['accountId']);
                }
        
                return jsonObject['accountId'];
            }());
        }
        
        if('companyId' in jsonObject)
        {
            model._companyId = (function(){
                if(typeof jsonObject['companyId'] !== 'string')
                {
                    return String(jsonObject['companyId']);
                }
        
                return jsonObject['companyId'];
            }());
        }
        
        if('action' in jsonObject)
        {
            model._action = (function(){
                if(typeof jsonObject['action'] !== 'string')
                {
                    return String(jsonObject['action']);
                }
        
                return jsonObject['action'];
            }());
        }
        
        if('issueTimestamp' in jsonObject)
        {
            model._issueTimestamp = (function(){
                if(typeof jsonObject['issueTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['issueTimestamp']));
                }
        
                return new Date(jsonObject['issueTimestamp']);
            }());
        }
        
        if('expireTimestamp' in jsonObject)
        {
            model._expireTimestamp = (function(){
                if(typeof jsonObject['expireTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['expireTimestamp']));
                }
        
                return new Date(jsonObject['expireTimestamp']);
            }());
        }
        
        if('activityTimestamp' in jsonObject)
        {
            model._activityTimestamp = (function(){
                if(jsonObject['activityTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['activityTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['activityTimestamp']));
                }
        
                return new Date(jsonObject['activityTimestamp']);
            }());
        }
        
        if('completedTimestamp' in jsonObject)
        {
            model._completedTimestamp = (function(){
                if(jsonObject['completedTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['completedTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['completedTimestamp']));
                }
        
                return new Date(jsonObject['completedTimestamp']);
            }());
        }
        
        if('emailTimestamp' in jsonObject)
        {
            model._emailTimestamp = (function(){
                if(jsonObject['emailTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['emailTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['emailTimestamp']));
                }
        
                return new Date(jsonObject['emailTimestamp']);
            }());
        }
        
        if('deleted' in jsonObject)
        {
            model._deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model._updateTimestamp = (function(){
                if(typeof jsonObject['updateTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['updateTimestamp']));
                }
        
                return new Date(jsonObject['updateTimestamp']);
            }());
        }
        
        return model;
    }
}

export default UserAccountActionTokenModel;