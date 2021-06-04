/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Growing Method
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class GrowingMethodModel extends BaseSiteModel
{
    /**
     * GrowingMethodModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Growing Method
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Growing Method ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Growing Method Code
         * 
         * @type {string}
         * @private
         */
        this._code = undefined;
        
        /**
         * The Growing Method Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Growing Method Description
         * 
         * @type {string}
         * @private
         */
        this._description = undefined;
        
        /**
         * Whether the Growing Method has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Growing Method was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Growing Method
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Growing Method ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Growing Method Code
     * 
     * @public
     * @type {string}
     */
    get code()
    {
        return this._code;
    }

    /**
     * The Growing Method Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Growing Method Description
     * 
     * @public
     * @type {string}
     */
    get description()
    {
        return this._description;
    }

    /**
     * Whether the Growing Method has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Growing Method was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Growing Method
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **GrowingMethodModel** to a JSON Object
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
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **GrowingMethodModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Growing Method
     * @return {GrowingMethodModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new GrowingMethodModel(siteId);
        
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

export default GrowingMethodModel;