/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a RTU Plugin
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class RTUPluginModel extends BaseModel
{
    /**
     * RTUPluginModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The RTU Plugin ID
         * 
         * @type {number}
         * @public
         */
        this.id = 0;
        
        /**
         * The Plugin Name
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Company this RTU Plugin belongs to
         * 
         * @type {string}
         * @public
         */
        this.companyId = "";
        
        /**
         * Whether the RTU Plugin has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the RTU Plugin was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
    }

    /**
     * Create a new **RTUPluginModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {RTUPluginModel}
     */
    static fromJSON(json)
    {
        let model = new RTUPluginModel();
        
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
                if(typeof jsonObject['id'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['id'])) ? Number(jsonObject['id']) : Math.floor(Number(jsonObject['id']));
                }
        
                return Number.isInteger(jsonObject['id']) ? jsonObject['id'] : Math.floor(jsonObject['id']);
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

export default RTUPluginModel;