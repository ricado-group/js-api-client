/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Variety
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class VarietyModel extends BaseSiteModel
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
         * @private
         */
        this._id = undefined;
        
        /**
         * The Variety Code
         * 
         * @type {string}
         * @private
         */
        this._code = undefined;
        
        /**
         * The Variety Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Variety Description
         * 
         * @type {string}
         * @private
         */
        this._description = undefined;
        
        /**
         * The Variety Image Source
         * 
         * @type {string}
         * @private
         */
        this._image = undefined;
        
        /**
         * An Array of Fruit Sizes Defined for this Variety
         * 
         * @type {Array<{size: string}>}
         * @private
         */
        this._fruitSizes = undefined;
        
        /**
         * Whether the Variety has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Variety was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Variety
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Variety ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Variety Code
     * 
     * @public
     * @type {string}
     */
    get code()
    {
        return this._code;
    }

    /**
     * The Variety Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Variety Description
     * 
     * @public
     * @type {string}
     */
    get description()
    {
        return this._description;
    }

    /**
     * The Variety Image Source
     * 
     * @public
     * @type {string}
     */
    get image()
    {
        return this._image;
    }

    /**
     * An Array of Fruit Sizes Defined for this Variety
     * 
     * @public
     * @type {Array<{size: string}>}
     */
    get fruitSizes()
    {
        return this._fruitSizes;
    }

    /**
     * Whether the Variety has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Variety was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Variety
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **VarietyModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            code: this._code,
            name: this._name,
            description: this._description,
            image: this._image,
            fruitSizes: this._fruitSizes,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
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
            model._id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('code' in jsonObject)
        {
            model._code = (function(){
                if(typeof jsonObject['code'] !== 'string')
                {
                    return String(jsonObject['code']);
                }
        
                return jsonObject['code'];
            }());
        }
        
        if('name' in jsonObject)
        {
            model._name = (function(){
                if(typeof jsonObject['name'] !== 'string')
                {
                    return String(jsonObject['name']);
                }
        
                return jsonObject['name'];
            }());
        }
        
        if('description' in jsonObject)
        {
            model._description = (function(){
                if(typeof jsonObject['description'] !== 'string')
                {
                    return String(jsonObject['description']);
                }
        
                return jsonObject['description'];
            }());
        }
        
        if('image' in jsonObject)
        {
            model._image = (function(){
                if(typeof jsonObject['image'] !== 'string')
                {
                    return String(jsonObject['image']);
                }
        
                return jsonObject['image'];
            }());
        }
        
        if('fruitSizes' in jsonObject)
        {
            model._fruitSizes = (function(){
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

export default VarietyModel;