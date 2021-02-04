/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a FreshPack Packrun Summary
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class FreshPackPackrunSummaryModel extends BaseSiteModel
{
    /**
     * FreshPackPackrunSummaryModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this FreshPack Packrun Summary
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The FreshPack Packrun Summary ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Packing Line ID this Summary is associated with
         * 
         * @type {string}
         * @private
         */
        this._packingLineId = undefined;
        
        /**
         * The Packrun ID this Summary is associated with
         * 
         * @type {string}
         * @private
         */
        this._packrunId = undefined;
        
        /**
         * When this Summary was Created
         * 
         * @type {Date}
         * @private
         */
        this._createdTimestamp = undefined;
        
        /**
         * The Time Batch this Summary is associated with
         * 
         * @type {?string}
         * @private
         */
        this._timeBatchId = undefined;
        
        /**
         * An Array of Tray Summary Data Objects for all Sizes and Class Types
         * 
         * @type {Object[]}
         * @private
         */
        this._traySummaries = undefined;
        
        /**
         * Whether the FreshPack Packrun Summary has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the FreshPack Packrun Summary was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this FreshPack Packrun Summary
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The FreshPack Packrun Summary ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Packing Line ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._packingLineId;
    }

    /**
     * The Packrun ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._packrunId;
    }

    /**
     * When this Summary was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._createdTimestamp;
    }

    /**
     * The Time Batch this Summary is associated with
     * 
     * @public
     * @type {?string}
     */
    get timeBatchId()
    {
        return this._timeBatchId;
    }

    /**
     * An Array of Tray Summary Data Objects for all Sizes and Class Types
     * 
     * @public
     * @type {Object[]}
     */
    get traySummaries()
    {
        return this._traySummaries;
    }

    /**
     * Whether the FreshPack Packrun Summary has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the FreshPack Packrun Summary was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this FreshPack Packrun Summary
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Create a new **FreshPackPackrunSummaryModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this FreshPack Packrun Summary
     * @return {FreshPackPackrunSummaryModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new FreshPackPackrunSummaryModel(siteId);
        
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
        
        if('packingLineId' in jsonObject)
        {
            model._packingLineId = (function(){
                if(typeof jsonObject['packingLineId'] !== 'string')
                {
                    return String(jsonObject['packingLineId']);
                }
        
                return jsonObject['packingLineId'];
            }());
        }
        
        if('packrunId' in jsonObject)
        {
            model._packrunId = (function(){
                if(typeof jsonObject['packrunId'] !== 'string')
                {
                    return String(jsonObject['packrunId']);
                }
        
                return jsonObject['packrunId'];
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
        
        if('timeBatchId' in jsonObject)
        {
            model._timeBatchId = (function(){
                if(jsonObject['timeBatchId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['timeBatchId'] !== 'string')
                {
                    return String(jsonObject['timeBatchId']);
                }
        
                return jsonObject['timeBatchId'];
            }());
        }
        
        if('traySummaries' in jsonObject)
        {
            model._traySummaries = (function(){
                if(Array.isArray(jsonObject['traySummaries']) !== true)
                {
                    return [];
                }
        
                return jsonObject['traySummaries'].map((traySummariesItem) => {
                    return (function(){
                        if(typeof traySummariesItem !== 'object')
                        {
                            return Object(traySummariesItem);
                        }
        
                        return traySummariesItem;
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

export default FreshPackPackrunSummaryModel;