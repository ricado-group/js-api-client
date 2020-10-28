/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

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
     * @param {Object<string, any>} json The Compac Sizer Packrun Summary Properties
     * @param {number} siteId The Site ID associated with this Compac Sizer Packrun Summary
     */
    constructor(json, siteId)
    {
        super(json, siteId);
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
     * The Site ID associated with this Compac Sizer Packrun Summary
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }
}

export default CompacSizerPackrunSummaryModel;