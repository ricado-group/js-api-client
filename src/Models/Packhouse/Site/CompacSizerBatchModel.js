/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Compac Sizer Batch
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerBatchModel extends BaseSiteModel
{
    /**
     * CompacSizerBatchModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Compac Sizer Batch
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Compac Sizer Batch ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Compac Sizer ID this Batch is associated with
         * 
         * @type {string}
         * @private
         */
        this._compacSizerId = undefined;
        
        /**
         * The Numeric Compac Batch ID
         * 
         * @type {string}
         * @private
         */
        this._batchId = undefined;
        
        /**
         * When this Batch was Created
         * 
         * @type {Date}
         * @private
         */
        this._createdTimestamp = undefined;
        
        /**
         * The Packrun ID associated with this Batch
         * 
         * @type {?string}
         * @private
         */
        this._packrunId = undefined;
        
        /**
         * The Compac Sizer Batch Data
         * 
         * @type {Object}
         * @private
         */
        this._batch = undefined;
        
        /**
         * Whether the Compac Sizer Batch has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Compac Sizer Batch was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Compac Sizer Batch
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Compac Sizer Batch ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Compac Sizer ID this Batch is associated with
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._compacSizerId;
    }

    /**
     * The Numeric Compac Batch ID
     * 
     * @public
     * @type {string}
     */
    get batchId()
    {
        return this._batchId;
    }

    /**
     * When this Batch was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._createdTimestamp;
    }

    /**
     * The Packrun ID associated with this Batch
     * 
     * @public
     * @type {?string}
     */
    get packrunId()
    {
        return this._packrunId;
    }

    /**
     * The Compac Sizer Batch Data
     * 
     * @public
     * @type {Object}
     */
    get batch()
    {
        return this._batch;
    }

    /**
     * Whether the Compac Sizer Batch has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Compac Sizer Batch was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Compac Sizer Batch
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **CompacSizerBatchModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            compacSizerId: this._compacSizerId,
            batchId: this._batchId,
            createdTimestamp: this._createdTimestamp,
            packrunId: this._packrunId,
            batch: this._batch,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **CompacSizerBatchModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Compac Sizer Batch
     * @return {CompacSizerBatchModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new CompacSizerBatchModel(siteId);
        
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
        
        if('compacSizerId' in jsonObject)
        {
            model._compacSizerId = (function(){
                if(typeof jsonObject['compacSizerId'] !== 'string')
                {
                    return String(jsonObject['compacSizerId']);
                }
        
                return jsonObject['compacSizerId'];
            }());
        }
        
        if('batchId' in jsonObject)
        {
            model._batchId = (function(){
                if(typeof jsonObject['batchId'] !== 'string')
                {
                    return String(jsonObject['batchId']);
                }
        
                return jsonObject['batchId'];
            }());
        }
        
        if('createdTimestamp' in jsonObject)
        {
            model._createdTimestamp = (function(){
                if(typeof jsonObject['createdTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['createdTimestamp']));
                }
        
                return new Date(jsonObject['createdTimestamp']);
            }());
        }
        
        if('packrunId' in jsonObject)
        {
            model._packrunId = (function(){
                if(jsonObject['packrunId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['packrunId'] !== 'string')
                {
                    return String(jsonObject['packrunId']);
                }
        
                return jsonObject['packrunId'];
            }());
        }
        
        if('batch' in jsonObject)
        {
            model._batch = (function(){
                if(typeof jsonObject['batch'] !== 'object')
                {
                    return Object(jsonObject['batch']);
                }
        
                return jsonObject['batch'];
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

export default CompacSizerBatchModel;