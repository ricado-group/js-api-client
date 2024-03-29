/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a Account Policy
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class AccountPolicyModel extends BaseModel
{
    /**
     * AccountPolicyModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The Account Policy ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Policy Name
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Company this Policy belongs to
         * 
         * @type {string}
         * @public
         */
        this.companyId = "";
        
        /**
         * The Resources this Policy provides
         * 
         * @type {Array<{id: any, type: string, actions: string[], permission: string}>}
         * @public
         */
        this.resources = [];
        
        /**
         * The Rules this Policy provides
         * 
         * @type {Object[]}
         * @public
         */
        this.rules = [];
        
        /**
         * Whether the Account Policy has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Account Policy was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
    }

    /**
     * Create a new **AccountPolicyModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {AccountPolicyModel}
     */
    static fromJSON(json)
    {
        let model = new AccountPolicyModel();
        
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
        
        if('name' in jsonObject)
        {
            model.name = (function(){
                if(typeof jsonObject['name'] !== 'string')
                {
                    return String(jsonObject['name']);
                }
        
                return jsonObject['name'];
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
        
        if('resources' in jsonObject)
        {
            model.resources = (function(){
                if(Array.isArray(jsonObject['resources']) !== true)
                {
                    return [];
                }
        
                return jsonObject['resources'].map((resourcesItem) => {
                    return (function(){
                        let resourcesItemObject = {};
                        
                        if(typeof resourcesItem === 'object' && 'id' in resourcesItem)
                        {
                            resourcesItemObject.id = (function(){
                                return resourcesItem.id;
                            }());
                        }
                        else
                        {
                            resourcesItemObject.id = null;
                        }
                        
                        if(typeof resourcesItem === 'object' && 'type' in resourcesItem)
                        {
                            resourcesItemObject.type = (function(){
                                if(typeof resourcesItem.type !== 'string')
                                {
                                    return String(resourcesItem.type);
                                }
        
                                return resourcesItem.type;
                            }());
                        }
                        else
                        {
                            resourcesItemObject.type = "";
                        }
                        
                        if(typeof resourcesItem === 'object' && 'actions' in resourcesItem)
                        {
                            resourcesItemObject.actions = (function(){
                                if(Array.isArray(resourcesItem.actions) !== true)
                                {
                                    return [];
                                }
        
                                return resourcesItem.actions.map((actionsItem) => {
                                    return (function(){
                                        if(typeof actionsItem !== 'string')
                                        {
                                            return String(actionsItem);
                                        }
        
                                        return actionsItem;
                                    }());
                                });
                            }());
                        }
                        else
                        {
                            resourcesItemObject.actions = [];
                        }
                        
                        if(typeof resourcesItem === 'object' && 'permission' in resourcesItem)
                        {
                            resourcesItemObject.permission = (function(){
                                if(typeof resourcesItem.permission !== 'string')
                                {
                                    return String(resourcesItem.permission);
                                }
        
                                return resourcesItem.permission;
                            }());
                        }
                        else
                        {
                            resourcesItemObject.permission = "";
                        }
        
                        return resourcesItemObject;
                    }());
                });
            }());
        }
        
        if('rules' in jsonObject)
        {
            model.rules = (function(){
                if(Array.isArray(jsonObject['rules']) !== true)
                {
                    return [];
                }
        
                return jsonObject['rules'].map((rulesItem) => {
                    return (function(){
                        if(typeof rulesItem !== 'object')
                        {
                            return Object(rulesItem);
                        }
        
                        return rulesItem;
                    }());
                });
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

export default AccountPolicyModel;