import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import RejectBinController from '../../../Controllers/Packhouse/Site/RejectBinController';

/**
 * Model Class for a Reject Bin
 * @hideconstructor
 * @extends BaseSiteModel
 */
class RejectBinModel extends BaseSiteModel
{
    /**
     * RejectBinModel Constructor
     * 
     * @public
     * @param {Object} json - The Reject Bin Properties
     * @param {string} json.rejectBinScaleId - The Reject Bin Scale ID this Reject Bin is associated with
     * @param {Date} json.createdTimestamp - When this Reject Bin was Created
     * @param {string} json.rejectBinScaleName - The Name of the Reject Bin Scale where this Bin was Created
     * @param {?number} json.tareWeight - The Tare Weight Captured by the Reject Bin Scale
     * @param {?Date} json.finalizedTimestamp - When this Reject Bin was Finalized (No new Weights)
     * @param {Object[]} json.freshPackMultiGrowerBins - The Multi-Grower Bins that will be submitted to FreshPack
     * @param {number} siteId - The Site ID associated with this Reject Bin
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Reject Bin
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Reject Bin ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Reject Bin Scale ID this Reject Bin is associated with
     * 
     * @public
     * @type {string}
     */
    get rejectBinScaleId()
    {
        return this._json.rejectBinScaleId;
    }

    /**
     * The Reject Bin Scale ID this Reject Bin is associated with
     * 
     * @public
     * @type {string}
     */
    set rejectBinScaleId(rejectBinScaleId)
    {
        this._json.rejectBinScaleId = rejectBinScaleId;
        this._updateJson.rejectBinScaleId = rejectBinScaleId;
    }

    /**
     * When this Reject Bin was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Reject Bin was Created
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
     * The Name of the Reject Bin Scale where this Bin was Created
     * 
     * @public
     * @type {string}
     */
    get rejectBinScaleName()
    {
        return this._json.rejectBinScaleName;
    }

    /**
     * The Name of the Reject Bin Scale where this Bin was Created
     * 
     * @public
     * @type {string}
     */
    set rejectBinScaleName(rejectBinScaleName)
    {
        this._json.rejectBinScaleName = rejectBinScaleName;
        this._updateJson.rejectBinScaleName = rejectBinScaleName;
    }

    /**
     * The Tare Weight Captured by the Reject Bin Scale
     * 
     * @public
     * @type {?number}
     */
    get tareWeight()
    {
        return this._json.tareWeight;
    }

    /**
     * The Tare Weight Captured by the Reject Bin Scale
     * 
     * @public
     * @type {?number}
     */
    set tareWeight(tareWeight)
    {
        this._json.tareWeight = tareWeight;
        this._updateJson.tareWeight = tareWeight;
    }

    /**
     * When this Reject Bin was Finalized (No new Weights)
     * 
     * @public
     * @type {?Date}
     */
    get finalizedTimestamp()
    {
        return this._json.finalizedTimestamp;
    }

    /**
     * When this Reject Bin was Finalized (No new Weights)
     * 
     * @public
     * @type {?Date}
     */
    set finalizedTimestamp(finalizedTimestamp)
    {
        this._json.finalizedTimestamp = finalizedTimestamp;
        this._updateJson.finalizedTimestamp = finalizedTimestamp;
    }

    /**
     * The Multi-Grower Bins that will be submitted to FreshPack
     * 
     * @public
     * @type {Object[]}
     */
    get freshPackMultiGrowerBins()
    {
        return this._json.freshPackMultiGrowerBins;
    }

    /**
     * The Multi-Grower Bins that will be submitted to FreshPack
     * 
     * @public
     * @type {Object[]}
     */
    set freshPackMultiGrowerBins(freshPackMultiGrowerBins)
    {
        this._json.freshPackMultiGrowerBins = freshPackMultiGrowerBins;
        this._updateJson.freshPackMultiGrowerBins = freshPackMultiGrowerBins;
    }

    /**
     * Whether the Reject Bin has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Reject Bin was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Reject Bin**
     * 
     * @public
     * @return {Promise<RejectBinModel>}
     */
    update()
    {
        return RejectBinController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Reject Bin**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return RejectBinController.delete(this._siteId, this._json.id);
    }
}

export default RejectBinModel;