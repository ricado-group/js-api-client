import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import CompacSizerPackrunSummaryController from '../../../Controllers/Packhouse/Site/CompacSizerPackrunSummaryController';

/**
 * Model Class for a Compac Sizer Packrun Summary
 * @extends PermanentObjectDataModel
 */
class CompacSizerPackrunSummaryModel extends PermanentObjectDataModel {
    /**
     * CompacSizerPackrunSummaryModel Constructor
     * 
     * @private
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);
    }

    /**
     * Properties
     */


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
     * Key Index
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._json.compacSizerId;
    }

    set compacSizerId(compacSizerId)
    {
        this._json.compacSizerId = compacSizerId;
        this._updateJson.compacSizerId = compacSizerId;
    }

    /**
     * The Timestamp when this Data was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    set createdTimestamp(createdTimestamp)
    {
        this._json.createdTimestamp = createdTimestamp;
        this._updateJson.createdTimestamp = createdTimestamp;
    }

    /**
     * The Time Batch this Packrun Summary is associated with
     * 
     * @public
     * @type {string}
     */
    get timeBatchId()
    {
        return this._json.timeBatchId;
    }

    set timeBatchId(timeBatchId)
    {
        this._json.timeBatchId = timeBatchId;
        this._updateJson.timeBatchId = timeBatchId;
    }

    /**
     * An Array of Packrun Summary Data Objects for each Outlet
     * 
     * @public
     * @type {Array}
     */
    get outletSummaries()
    {
        return this._json.outletSummaries;
    }

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
     * Methods
     */


    /**
     * Update this Compac Sizer Packrun Summary
     * 
     * @public
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || CompacSizerPackrunSummaryController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Compac Sizer Packrun Summary
     * 
     * @public
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || CompacSizerPackrunSummaryController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The CompacSizerPackrunSummaryModel cannot be Replaced");
    }
}

export default CompacSizerPackrunSummaryModel;