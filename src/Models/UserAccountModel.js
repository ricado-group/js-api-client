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
         * @public
         */
        this.id = "";
        
        /**
         * The User's Email Address
         * 
         * @type {string}
         * @public
         */
        this.email = "";
        
        /**
         * The User's First Name
         * 
         * @type {?string}
         * @public
         */
        this.firstName = null;
        
        /**
         * The User's Last Name
         * 
         * @type {?string}
         * @public
         */
        this.lastName = null;
        
        /**
         * The Company this User belongs to
         * 
         * @type {string}
         * @public
         */
        this.companyId = "";
        
        /**
         * The Policies that apply to this User Account
         * 
         * @type {string[]}
         * @public
         */
        this.policies = [];
        
        /**
         * Whether a Password has been Set for the User Account
         * 
         * @type {boolean}
         * @public
         */
        this.hasPassword = false;
        
        /**
         * Whether a Pin Code has been Set for the User Account
         * 
         * @type {boolean}
         * @public
         */
        this.hasPinCode = false;
        
        /**
         * Whether the User Account has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the User Account was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
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
            model.id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('email' in jsonObject)
        {
            model.email = (function(){
                if(typeof jsonObject['email'] !== 'string')
                {
                    return String(jsonObject['email']);
                }
        
                return jsonObject['email'];
            }());
        }
        
        if('firstName' in jsonObject)
        {
            model.firstName = (function(){
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
            model.lastName = (function(){
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
            model.companyId = (function(){
                if(typeof jsonObject['companyId'] !== 'string')
                {
                    return String(jsonObject['companyId']);
                }
        
                return jsonObject['companyId'];
            }());
        }
        
        if('policies' in jsonObject)
        {
            model.policies = (function(){
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
            model.hasPassword = (function(){
                if(typeof jsonObject['hasPassword'] !== 'boolean')
                {
                    return Boolean(jsonObject['hasPassword']);
                }
        
                return jsonObject['hasPassword'];
            }());
        }
        
        if('hasPinCode' in jsonObject)
        {
            model.hasPinCode = (function(){
                if(typeof jsonObject['hasPinCode'] !== 'boolean')
                {
                    return Boolean(jsonObject['hasPinCode']);
                }
        
                return jsonObject['hasPinCode'];
            }());
        }
        
        if('deleted' in jsonObject)
        {
            model.deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model.updateTimestamp = (function(){
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