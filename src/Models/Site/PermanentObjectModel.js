/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Permanent Object
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PermanentObjectModel extends BaseSiteModel
{
    /**
     * PermanentObjectModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Permanent Object
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Permanent Object ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Permanent Object belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Permanent Object Key Index
         * 
         * @type {string}
         * @private
         */
        this._keyIndex = undefined;
        
        /**
         * The Permanent Object Type
         * 
         * @type {string}
         * @private
         */
        this._type = undefined;
        
        /**
         * The Permanent Object Definition
         * 
         * @type {Object}
         * @private
         */
        this._definition = undefined;
        
        /**
         * Whether the Permanent Object has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Permanent Object was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Permanent Object
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Permanent Object ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Permanent Object belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Permanent Object Key Index
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._keyIndex;
    }

    /**
     * The Permanent Object Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._type;
    }

    /**
     * The Permanent Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._definition;
    }

    /**
     * Whether the Permanent Object has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Permanent Object was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Permanent Object
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **PermanentObjectModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            rtuId: this._rtuId,
            keyIndex: this._keyIndex,
            type: this._type,
            definition: this._definition,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **PermanentObjectModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Permanent Object
     * @return {PermanentObjectModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PermanentObjectModel(siteId);
        
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
        
        if('definition' in jsonObject)
        {
            model._definition = (function(){
                if(typeof jsonObject['definition'] !== 'object')
                {
                    return Object(jsonObject['definition']);
                }
        
                return jsonObject['definition'];
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

export default PermanentObjectModel;