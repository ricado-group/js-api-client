import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import CompacSizerPackrunSummaryController from '../../../Controllers/Packhouse/Site/CompacSizerPackrunSummaryController';

/**
 * Model Class for a Compac Sizer Packrun Summary
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerPackrunSummaryModel extends BaseSiteModel
{
    /**
     * CompacSizerPackrunSummaryModel Constructor
     * 
     * @public
     * @param {Object} json - The Compac Sizer Packrun Summary Properties
     * @param {string} json.compacSizerId - The Compac Sizer ID this Summary is associated with
     * @param {string} json.packrunId - The Packrun ID this Summary is associated with
     * @param {Date} json.createdTimestamp - When this Summary was Created
     * @param {?string} json.timeBatchId - The Time Batch this Summary is associated with
     * @param {Object[]} json.outletSummaries - An Array of Packrun Summary Data Objects for each Outlet
     * @param {number} siteId - The Site ID associated with this Compac Sizer Packrun Summary
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Compac Sizer Packrun Summary
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Compac Sizer Packrun Summary ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Compac Sizer ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._json.compacSizerId;
    }

    /**
     * The Compac Sizer ID this Summary is associated with
     * 
     * @public
     * @type {string}
     */
    set compacSizerId(compacSizerId)
    {
        this._json.compacSizerId = compacSizerId;
        this._updateJson.compacSizerId = compacSizerId;
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
     * An Array of Packrun Summary Data Objects for each Outlet
     * 
     * @public
     * @type {Object[]}
     */
    get outletSummaries()
    {
        return this._json.outletSummaries;
    }

    /**
     * An Array of Packrun Summary Data Objects for each Outlet
     * 
     * @public
     * @type {Object[]}
     */
    set outletSummaries(outletSummaries)
    {
        this._json.outletSummaries = outletSummaries;
        this._updateJson.outletSummaries = outletSummaries;
    }

    /**
     * Whether the Compac Sizer Packrun Summary has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Compac Sizer Packrun Summary was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Compac Sizer Packrun Summary**
     * 
     * @public
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    update()
    {
        return CompacSizerPackrunSummaryController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Compac Sizer Packrun Summary**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return CompacSizerPackrunSummaryController.delete(this._siteId, this._json.id);
    }
}

export default CompacSizerPackrunSummaryModel;