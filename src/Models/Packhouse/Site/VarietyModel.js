/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Variety
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class VarietyModel extends BaseModel
{
    /**
     * VarietyModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Variety
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Variety ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Variety Code
         * 
         * @type {string}
         * @public
         */
        this.code = "";
        
        /**
         * The Variety Name
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Variety Description
         * 
         * @type {string}
         * @public
         */
        this.description = "";
        
        /**
         * The Variety Image Source
         * 
         * @type {string}
         * @public
         */
        this.image = "";
        
        /**
         * An Array of Fruit Sizes Defined for this Variety
         * 
         * @type {Array<{size: string}>}
         * @public
         */
        this.fruitSizes = [];
        
        /**
         * Whether the Variety has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Variety was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Variety
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **VarietyModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Variety
     * @return {VarietyModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new VarietyModel(siteId);
        
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
        
        if('code' in jsonObject)
        {
            model.code = (function(){
                if(typeof jsonObject['code'] !== 'string')
                {
                    return String(jsonObject['code']);
                }
        
                return jsonObject['code'];
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
        
        if('image' in jsonObject)
        {
            model.image = (function(){
                if(typeof jsonObject['image'] !== 'string')
                {
                    return String(jsonObject['image']);
                }
        
                return jsonObject['image'];
            }());
        }
        
        if('fruitSizes' in jsonObject)
        {
            model.fruitSizes = (function(){
                if(Array.isArray(jsonObject['fruitSizes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['fruitSizes'].map((fruitSizesItem) => {
                    return (function(){
                        let fruitSizesItemObject = {};
                        
                        if(typeof fruitSizesItem === 'object' && 'size' in fruitSizesItem)
                        {
                            fruitSizesItemObject.size = (function(){
                                if(typeof fruitSizesItem.size !== 'string')
                                {
                                    return String(fruitSizesItem.size);
                                }
        
                                return fruitSizesItem.size;
                            }());
                        }
                        else
                        {
                            fruitSizesItemObject.size = "";
                        }
        
                        return fruitSizesItemObject;
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

export default VarietyModel;