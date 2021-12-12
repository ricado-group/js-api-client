/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Compac Sizer Outlet Type
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class CompacSizerOutletTypeModel extends BaseModel
{
    /**
     * CompacSizerOutletTypeModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The Compac Sizer Outlet Type ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Name for this Dynamic Outlet Type
         * 
         * @type {string}
         * @public
         */
        this.name = undefined;
        
        /**
         * The Generic Outlet Type
         * 
         * @type {string}
         * @public
         */
        this.type = undefined;
        
        /**
         * An Optional Description for this Dynamic Outlet Type
         * 
         * @type {string}
         * @public
         */
        this.description = undefined;
        
        /**
         * Whether the Compac Sizer Outlet Type has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Compac Sizer Outlet Type was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
    }

    /**
     * Create a new **CompacSizerOutletTypeModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {CompacSizerOutletTypeModel}
     */
    static fromJSON(json)
    {
        let model = new CompacSizerOutletTypeModel();
        
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
        
        if('type' in jsonObject)
        {
            model.type = (function(){
                if(typeof jsonObject['type'] !== 'string')
                {
                    return String(jsonObject['type']);
                }
        
                return jsonObject['type'];
            }());
        }
        
        if('description' in jsonObject)
        {
            model.description = (function(){
                if(typeof jsonObject['description'] !== 'string')
                {
                    return String(jsonObject['description']);
                }
        
                return jsonObject['description'];
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

export default CompacSizerOutletTypeModel;