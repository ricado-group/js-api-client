import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import PackrunController from '../../../Controllers/Packhouse/Site/PackrunController';

/**
 * Model Class for a Packrun
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PackrunModel extends BaseSiteModel
{
    /**
     * PackrunModel Constructor
     * 
     * @public
     * @param {Object} json - The Packrun Properties
     * @param {string} json.packingLineId - The Packing Line ID this Packrun is associated with
     * @param {string} json.name - The Packrun Name
     * @param {Date} json.createdTimestamp - When this Packrun was Created
     * @param {string} json.growerName - The Grower Name for this Packrun
     * @param {string} json.growerCode - The Grower Code for this Packrun
     * @param {string} json.maturityArea - The Maturity Area for this Packrun
     * @param {?Date} json.startTimestamp - When this Packrun was Started
     * @param {?Date} json.finishTimestamp - When this Packrun was Finished
     * @param {string} json.varietyId - The Variety for this Packrun
     * @param {?string} json.growingMethodId - The Growing Method for this Packrun
     * @param {number} json.allocatedBins - The Number of Allocated Bins for this Packrun
     * @param {Object[]} json.timeBatches - The Time Batches for this Packrun
     * @param {number} siteId - The Site ID associated with this Packrun
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Packrun
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Packrun ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Packing Line ID this Packrun is associated with
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._json.packingLineId;
    }

    /**
     * The Packing Line ID this Packrun is associated with
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
     * The Packrun Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * When this Packrun was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Packrun was Created
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
     * The Grower Name for this Packrun
     * 
     * @public
     * @type {string}
     */
    get growerName()
    {
        return this._json.growerName;
    }

    /**
     * The Grower Name for this Packrun
     * 
     * @public
     * @type {string}
     */
    set growerName(growerName)
    {
        this._json.growerName = growerName;
        this._updateJson.growerName = growerName;
    }

    /**
     * The Grower Code for this Packrun
     * 
     * @public
     * @type {string}
     */
    get growerCode()
    {
        return this._json.growerCode;
    }

    /**
     * The Grower Code for this Packrun
     * 
     * @public
     * @type {string}
     */
    set growerCode(growerCode)
    {
        this._json.growerCode = growerCode;
        this._updateJson.growerCode = growerCode;
    }

    /**
     * The Maturity Area for this Packrun
     * 
     * @public
     * @type {string}
     */
    get maturityArea()
    {
        return this._json.maturityArea;
    }

    /**
     * The Maturity Area for this Packrun
     * 
     * @public
     * @type {string}
     */
    set maturityArea(maturityArea)
    {
        this._json.maturityArea = maturityArea;
        this._updateJson.maturityArea = maturityArea;
    }

    /**
     * When this Packrun was Started
     * 
     * @public
     * @type {?Date}
     */
    get startTimestamp()
    {
        return this._json.startTimestamp;
    }

    /**
     * When this Packrun was Started
     * 
     * @public
     * @type {?Date}
     */
    set startTimestamp(startTimestamp)
    {
        this._json.startTimestamp = startTimestamp;
        this._updateJson.startTimestamp = startTimestamp;
    }

    /**
     * When this Packrun was Finished
     * 
     * @public
     * @type {?Date}
     */
    get finishTimestamp()
    {
        return this._json.finishTimestamp;
    }

    /**
     * When this Packrun was Finished
     * 
     * @public
     * @type {?Date}
     */
    set finishTimestamp(finishTimestamp)
    {
        this._json.finishTimestamp = finishTimestamp;
        this._updateJson.finishTimestamp = finishTimestamp;
    }

    /**
     * The Variety for this Packrun
     * 
     * @public
     * @type {string}
     */
    get varietyId()
    {
        return this._json.varietyId;
    }

    /**
     * The Variety for this Packrun
     * 
     * @public
     * @type {string}
     */
    set varietyId(varietyId)
    {
        this._json.varietyId = varietyId;
        this._updateJson.varietyId = varietyId;
    }

    /**
     * The Growing Method for this Packrun
     * 
     * @public
     * @type {?string}
     */
    get growingMethodId()
    {
        return this._json.growingMethodId;
    }

    /**
     * The Growing Method for this Packrun
     * 
     * @public
     * @type {?string}
     */
    set growingMethodId(growingMethodId)
    {
        this._json.growingMethodId = growingMethodId;
        this._updateJson.growingMethodId = growingMethodId;
    }

    /**
     * The Number of Allocated Bins for this Packrun
     * 
     * @public
     * @type {number}
     */
    get allocatedBins()
    {
        return this._json.allocatedBins;
    }

    /**
     * The Number of Allocated Bins for this Packrun
     * 
     * @public
     * @type {number}
     */
    set allocatedBins(allocatedBins)
    {
        this._json.allocatedBins = allocatedBins;
        this._updateJson.allocatedBins = allocatedBins;
    }

    /**
     * The Time Batches for this Packrun
     * 
     * @public
     * @type {Object[]}
     */
    get timeBatches()
    {
        return this._json.timeBatches;
    }

    /**
     * The Time Batches for this Packrun
     * 
     * @public
     * @type {Object[]}
     */
    set timeBatches(timeBatches)
    {
        this._json.timeBatches = timeBatches;
        this._updateJson.timeBatches = timeBatches;
    }

    /**
     * Whether the Packrun has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Packrun was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Packrun**
     * 
     * @public
     * @return {Promise<PackrunModel>}
     */
    update()
    {
        return PackrunController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Packrun**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PackrunController.delete(this._siteId, this._json.id);
    }
}

export default PackrunModel;