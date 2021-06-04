/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Permanent Object Data
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PermanentObjectDataModel extends BaseSiteModel
{
    /**
     * PermanentObjectDataModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Permanent Object Data
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Permanent Object Data ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * An Optional Key Index for this Data
         * 
         * @type {string}
         * @private
         */
        this._keyIndex = undefined;
        
        /**
         * The Permanent Object this Data is related to
         * 
         * @type {string}
         * @private
         */
        this._permanentObjectId = undefined;
        
        /**
         * The Permanent Object Data Type
         * 
         * @type {string}
         * @private
         */
        this._type = undefined;
        
        /**
         * The Timestamp when this Data was Created
         * 
         * @type {Date}
         * @private
         */
        this._timestamp = undefined;
        
        /**
         * The Data Object specific to this Permanent Object Data Type
         * 
         * @type {Object}
         * @private
         */
        this._data = undefined;
        
        /**
         * Whether the Permanent Object Data has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Permanent Object Data was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Permanent Object Data
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Permanent Object Data ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * An Optional Key Index for this Data
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._keyIndex;
    }

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
    get permanentObjectId()
    {
        return this._permanentObjectId;
    }

    /**
     * The Permanent Object Data Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._type;
    }

    /**
     * The Timestamp when this Data was Created
     * 
     * @public
     * @type {Date}
     */
    get timestamp()
    {
        return this._timestamp;
    }

    /**
     * The Data Object specific to this Permanent Object Data Type
     * 
     * @public
     * @type {Object}
     */
    get data()
    {
        return this._data;
    }

    /**
     * Whether the Permanent Object Data has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Permanent Object Data was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Permanent Object Data
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **PermanentObjectDataModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            keyIndex: this._keyIndex,
            permanentObjectId: this._permanentObjectId,
            type: this._type,
            timestamp: this._timestamp,
            data: this._data,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **PermanentObjectDataModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Permanent Object Data
     * @return {PermanentObjectDataModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PermanentObjectDataModel(siteId);
        
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
        
        if('keyIndex' in jsonObject)
        {
            model._keyIndex = (function(){
                if(typeof jsonObject['keyIndex'] !== 'string')
                {
                    return String(jsonObject['keyIndex']);
                }
        
                return jsonObject['keyIndex'];
            }());
        }
        
        if('permanentObjectId' in jsonObject)
        {
            model._permanentObjectId = (function(){
                if(typeof jsonObject['permanentObjectId'] !== 'string')
                {
                    return String(jsonObject['permanentObjectId']);
                }
        
                return jsonObject['permanentObjectId'];
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
        
        if('timestamp' in jsonObject)
        {
            model._timestamp = (function(){
                if(typeof jsonObject['timestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['timestamp']));
                }
        
                return new Date(jsonObject['timestamp']);
            }());
        }
        
        if('data' in jsonObject)
        {
            model._data = (function(){
                if(typeof jsonObject['data'] !== 'object')
                {
                    return Object(jsonObject['data']);
                }
        
                return jsonObject['data'];
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

export default PermanentObjectDataModel;