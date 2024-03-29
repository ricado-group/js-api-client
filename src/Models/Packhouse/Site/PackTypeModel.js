/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Pack Type
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class PackTypeModel extends BaseModel
{
    /**
     * PackTypeModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Pack Type
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Pack Type ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Code for this Pack Type
         * 
         * @type {string}
         * @public
         */
        this.code = "";
        
        /**
         * The Name for this Pack Type
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * An Optional Description for this Pack Type
         * 
         * @type {string}
         * @public
         */
        this.description = "";
        
        /**
         * The Physical Form of this Pack Type
         * 
         * @type {string}
         * @public
         */
        this.form = "";
        
        /**
         * An Array of Fruit Sizes Defined for this Pack Type
         * 
         * @type {Array<{size: string, count: number}>}
         * @public
         */
        this.fruitSizes = [];
        
        /**
         * Whether the Pack Type has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Pack Type was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Pack Type
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **PackTypeModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Pack Type
     * @return {PackTypeModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PackTypeModel(siteId);
        
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
        
        if('form' in jsonObject)
        {
            model.form = (function(){
                if(typeof jsonObject['form'] !== 'string')
                {
                    return String(jsonObject['form']);
                }
        
                return jsonObject['form'];
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
                        
                        if(typeof fruitSizesItem === 'object' && 'count' in fruitSizesItem)
                        {
                            fruitSizesItemObject.count = (function(){
                                if(typeof fruitSizesItem.count !== 'number')
                                {
                                    return Number.isInteger(Number(fruitSizesItem.count)) ? Number(fruitSizesItem.count) : Math.floor(Number(fruitSizesItem.count));
                                }
        
                                return Number.isInteger(fruitSizesItem.count) ? fruitSizesItem.count : Math.floor(fruitSizesItem.count);
                            }());
                        }
                        else
                        {
                            fruitSizesItemObject.count = 0;
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

export default PackTypeModel;