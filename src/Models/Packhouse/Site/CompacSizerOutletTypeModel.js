/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Compac Sizer Outlet Type
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerOutletTypeModel extends BaseSiteModel
{
    /**
     * CompacSizerOutletTypeModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Compac Sizer Outlet Type
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Compac Sizer Outlet Type ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Name for this Dynamic Outlet Type
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Generic Outlet Type
         * 
         * @type {string}
         * @private
         */
        this._type = undefined;
        
        /**
         * An Optional Description for this Dynamic Outlet Type
         * 
         * @type {string}
         * @private
         */
        this._description = undefined;
        
        /**
         * Whether the Compac Sizer Outlet Type has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Compac Sizer Outlet Type was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Compac Sizer Outlet Type
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Compac Sizer Outlet Type ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Name for this Dynamic Outlet Type
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Generic Outlet Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._type;
    }

    /**
     * An Optional Description for this Dynamic Outlet Type
     * 
     * @public
     * @type {string}
     */
    get description()
    {
        return this._description;
    }

    /**
     * Whether the Compac Sizer Outlet Type has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Compac Sizer Outlet Type was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Compac Sizer Outlet Type
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **CompacSizerOutletTypeModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            name: this._name,
            type: this._type,
            description: this._description,
            deleted: this._deleted,
            updateTimestamp: this.updateTimestamp
        };
    }

    /**
     * Create a new **CompacSizerOutletTypeModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Compac Sizer Outlet Type
     * @return {CompacSizerOutletTypeModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new CompacSizerOutletTypeModel(siteId);
        
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
        
        if('type' in jsonObject)
        {
            model._type = (function(){
                if(typeof jsonObject['type'] !== 'string')
                {
                    return String(jsonObject['type']);
                }
        
                return jsonObject['type'];
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

export default CompacSizerOutletTypeModel;