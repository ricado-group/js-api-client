/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Point
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PointModel extends BaseSiteModel
{
    /**
     * PointModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Point
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Point ID
         * 
         * @type {number}
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Point belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Plugin ID
         * 
         * @type {?number}
         * @private
         */
        this._pluginId = undefined;
        
        /**
         * The Point Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Point Type
         * 
         * @type {string}
         * @private
         */
        this._type = undefined;
        
        /**
         * The Point's Value Type
         * 
         * @type {string}
         * @private
         */
        this._valueType = undefined;
        
        /**
         * The Permissions
         * 
         * @type {string}
         * @private
         */
        this._permissions = undefined;
        
        /**
         * Whether the Point is Enabled
         * 
         * @type {boolean}
         * @private
         */
        this._enabled = undefined;
        
        /**
         * The Point Settings
         * 
         * @type {Object}
         * @private
         */
        this._settings = undefined;
        
        /**
         * Whether the Point has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Point was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Point
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Point ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Point belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Plugin ID
     * 
     * @public
     * @type {?number}
     */
    get pluginId()
    {
        return this._pluginId;
    }

    /**
     * The Point Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Point Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._type;
    }

    /**
     * The Point's Value Type
     * 
     * @public
     * @type {string}
     */
    get valueType()
    {
        return this._valueType;
    }

    /**
     * The Permissions
     * 
     * @public
     * @type {string}
     */
    get permissions()
    {
        return this._permissions;
    }

    /**
     * Whether the Point is Enabled
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._enabled;
    }

    /**
     * The Point Settings
     * 
     * @public
     * @type {Object}
     */
    get settings()
    {
        return this._settings;
    }

    /**
     * Whether the Point has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Point was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Point
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Create a new **PointModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Point
     * @return {PointModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PointModel(siteId);
        
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
                if(typeof jsonObject['id'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['id'])) ? Number(jsonObject['id']) : Math.floor(Number(jsonObject['id']));
                }
        
                return Number.isInteger(jsonObject['id']) ? jsonObject['id'] : Math.floor(jsonObject['id']);
            }());
        }
        
        if('rtuId' in jsonObject)
        {
            model._rtuId = (function(){
                if(jsonObject['rtuId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['rtuId'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['rtuId'])) ? Number(jsonObject['rtuId']) : Math.floor(Number(jsonObject['rtuId']));
                }
        
                return Number.isInteger(jsonObject['rtuId']) ? jsonObject['rtuId'] : Math.floor(jsonObject['rtuId']);
            }());
        }
        
        if('pluginId' in jsonObject)
        {
            model._pluginId = (function(){
                if(jsonObject['pluginId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['pluginId'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['pluginId'])) ? Number(jsonObject['pluginId']) : Math.floor(Number(jsonObject['pluginId']));
                }
        
                return Number.isInteger(jsonObject['pluginId']) ? jsonObject['pluginId'] : Math.floor(jsonObject['pluginId']);
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
        
        if('valueType' in jsonObject)
        {
            model._valueType = (function(){
                if(typeof jsonObject['valueType'] !== 'string')
                {
                    return String(jsonObject['valueType']);
                }
        
                return jsonObject['valueType'];
            }());
        }
        
        if('permissions' in jsonObject)
        {
            model._permissions = (function(){
                if(typeof jsonObject['permissions'] !== 'string')
                {
                    return String(jsonObject['permissions']);
                }
        
                return jsonObject['permissions'];
            }());
        }
        
        if('enabled' in jsonObject)
        {
            model._enabled = (function(){
                if(typeof jsonObject['enabled'] !== 'boolean')
                {
                    return Boolean(jsonObject['enabled']);
                }
        
                return jsonObject['enabled'];
            }());
        }
        
        if('settings' in jsonObject)
        {
            model._settings = (function(){
                if(typeof jsonObject['settings'] !== 'object')
                {
                    return Object(jsonObject['settings']);
                }
        
                return jsonObject['settings'];
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

export default PointModel;