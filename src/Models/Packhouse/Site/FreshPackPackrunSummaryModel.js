import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import FreshPackPackrunSummaryController from '../../../Controllers/Packhouse/Site/FreshPackPackrunSummaryController';

/**
 * Model Class for a FreshPack Packrun Summary
 * @hideconstructor
 * @extends BaseSiteModel
 */
class FreshPackPackrunSummaryModel extends BaseSiteModel
{
    /**
     * FreshPackPackrunSummaryModel Constructor
     * 
     * @public
     * @param {Object} json - The FreshPack Packrun Summary Properties
     * @param {string} json.packingLineId - The Packing Line ID this Summary is associated with
     * @param {string} json.packrunId - The Packrun ID this Summary is associated with
     * @param {Date} json.createdTimestamp - When this Summary was Created
     * @param {?string} json.timeBatchId - The Time Batch this Summary is associated with
     * @param {Object[]} json.traySummaries - An Array of Tray Summary Data Objects for all Sizes and Class Types
     * @param {number} siteId - The Site ID associated with this FreshPack Packrun Summary
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a FreshPack Packrun Summary
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The FreshPack Packrun Summary ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Packing Line ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._json.packingLineId;
    }

    /**
     * The Packing Line ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    set packingLineId(packingLineId)
    {
        this._json.packingLineId = packingLineId;
        this._updateJson.packingLineId = packingLineId;
    }

    /**
     * The Packrun ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * When this Summary was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Summary was Created
     * 
     * @public
     * @type {Date}
     */
    set createdTimestamp(createdTimestamp)
    {
        this._json.createdTimestamp = createdTimestamp;
        this._updateJson.createdTimestamp = createdTimestamp;
    }

    /**
     * The Time Batch this Summary is associated with
     * 
     * @public
     * @type {?string}
     */
    get timeBatchId()
    {
        return this._json.timeBatchId;
    }

    /**
     * The Time Batch this Summary is associated with
     * 
     * @public
     * @type {?string}
     */
    set timeBatchId(timeBatchId)
    {
        this._json.timeBatchId = timeBatchId;
        this._updateJson.timeBatchId = timeBatchId;
    }

    /**
     * An Array of Tray Summary Data Objects for all Sizes and Class Types
     * 
     * @public
     * @type {Object[]}
     */
    get traySummaries()
    {
        return this._json.traySummaries;
    }

    /**
     * An Array of Tray Summary Data Objects for all Sizes and Class Types
     * 
     * @public
     * @type {Object[]}
     */
    set traySummaries(traySummaries)
    {
        this._json.traySummaries = traySummaries;
        this._updateJson.traySummaries = traySummaries;
    }

    /**
     * Whether the FreshPack Packrun Summary has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the FreshPack Packrun Summary was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **FreshPack Packrun Summary**
     * 
     * @public
     * @return {Promise<FreshPackPackrunSummaryModel>}
     */
    update()
    {
        return FreshPackPackrunSummaryController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **FreshPack Packrun Summary**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return FreshPackPackrunSummaryController.delete(this._siteId, this._json.id);
    }
}

export default FreshPackPackrunSummaryModel;