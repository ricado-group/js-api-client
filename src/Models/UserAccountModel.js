/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a User Account
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class UserAccountModel extends BaseModel
{
    /**
     * UserAccountModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The User Account ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The User's Email Address
         * 
         * @type {string}
         * @private
         */
        this._email = undefined;
        
        /**
         * The User's First Name
         * 
         * @type {?string}
         * @private
         */
        this._firstName = undefined;
        
        /**
         * The User's Last Name
         * 
         * @type {?string}
         * @private
         */
        this._lastName = undefined;
        
        /**
         * The Company this User belongs to
         * 
         * @type {string}
         * @private
         */
        this._companyId = undefined;
        
        /**
         * The Policies that apply to this User Account
         * 
         * @type {string[]}
         * @private
         */
        this._policies = undefined;
        
        /**
         * Whether a Password has been Set for the User Account
         * 
         * @type {boolean}
         * @private
         */
        this._hasPassword = undefined;
        
        /**
         * Whether a Pin Code has been Set for the User Account
         * 
         * @type {boolean}
         * @private
         */
        this._hasPinCode = undefined;
        
        /**
         * Whether the User Account has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the User Account was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
    }

    /**
     * The User Account ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The User's Email Address
     * 
     * @public
     * @type {string}
     */
    get email()
    {
        return this._email;
    }

    /**
     * The User's First Name
     * 
     * @public
     * @type {?string}
     */
    get firstName()
    {
        return this._firstName;
    }

    /**
     * The User's Last Name
     * 
     * @public
     * @type {?string}
     */
    get lastName()
    {
        return this._lastName;
    }

    /**
     * The Company this User belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._companyId;
    }

    /**
     * The Policies that apply to this User Account
     * 
     * @public
     * @type {string[]}
     */
    get policies()
    {
        return this._policies;
    }

    /**
     * Whether a Password has been Set for the User Account
     * 
     * @public
     * @type {boolean}
     */
    get hasPassword()
    {
        return this._hasPassword;
    }

    /**
     * Whether a Pin Code has been Set for the User Account
     * 
     * @public
     * @type {boolean}
     */
    get hasPinCode()
    {
        return this._hasPinCode;
    }

    /**
     * Whether the User Account has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the User Account was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * Create a new **UserAccountModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {UserAccountModel}
     */
    static fromJSON(json)
    {
        let model = new UserAccountModel();
        
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
        
        if('email' in jsonObject)
        {
            model._email = (function(){
                if(typeof jsonObject['email'] !== 'string')
                {
                    return String(jsonObject['email']);
                }
        
                return jsonObject['email'];
            }());
        }
        
        if('firstName' in jsonObject)
        {
            model._firstName = (function(){
                if(jsonObject['firstName'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['firstName'] !== 'string')
                {
                    return String(jsonObject['firstName']);
                }
        
                return jsonObject['firstName'];
            }());
        }
        
        if('lastName' in jsonObject)
        {
            model._lastName = (function(){
                if(jsonObject['lastName'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['lastName'] !== 'string')
                {
                    return String(jsonObject['lastName']);
                }
        
                return jsonObject['lastName'];
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
        
        if('policies' in jsonObject)
        {
            model._policies = (function(){
                if(Array.isArray(jsonObject['policies']) !== true)
                {
                    return [];
                }
        
                return jsonObject['policies'].map((policiesItem) => {
                    return (function(){
                        if(typeof policiesItem !== 'string')
                        {
                            return String(policiesItem);
                        }
        
                        return policiesItem;
                    }());
                });
            }());
        }
        
        if('hasPassword' in jsonObject)
        {
            model._hasPassword = (function(){
                if(typeof jsonObject['hasPassword'] !== 'boolean')
                {
                    return Boolean(jsonObject['hasPassword']);
                }
        
                return jsonObject['hasPassword'];
            }());
        }
        
        if('hasPinCode' in jsonObject)
        {
            model._hasPinCode = (function(){
                if(typeof jsonObject['hasPinCode'] !== 'boolean')
                {
                    return Boolean(jsonObject['hasPinCode']);
                }
        
                return jsonObject['hasPinCode'];
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

export default UserAccountModel;