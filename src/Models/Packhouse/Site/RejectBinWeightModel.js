import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import RejectBinWeightController from '../../../Controllers/Packhouse/Site/RejectBinWeightController';

/**
 * Model Class for a Reject Bin Weight
 * @hideconstructor
 * @extends BaseSiteModel
 */
class RejectBinWeightModel extends BaseSiteModel
{
    /**
     * RejectBinWeightModel Constructor
     * 
     * @public
     * @param {Object} json - The Reject Bin Weight Properties
     * @param {string} json.rejectBinScaleId - The Reject Bin Scale ID this Reject Weight is associated with
     * @param {string} json.rejectBinId - The Reject Bin ID this Reject Weight is associated with
     * @param {Date} json.createdTimestamp - When this Reject Bin Weight was Created
     * @param {?string} json.packrunId - The Packrun this Reject Weight is associated with
     * @param {number} json.netWeight - The Net Weight Captured by the Reject Bin Scale
     * @param {Object[]} json.sources - The Source Weights that make up the Net Weight
     * @param {Object[]} json.freshPackMultiGrowerBinWeights - The Multi-Grower Bin Weights that will be submitted to FreshPack
     * @param {number} siteId - The Site ID associated with this Reject Bin Weight
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Reject Bin Weight
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Reject Bin Weight ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Reject Bin Scale ID this Reject Weight is associated with
     * 
     * @public
     * @type {string}
     */
    get rejectBinScaleId()
    {
        return this._json.rejectBinScaleId;
    }

    /**
     * The Reject Bin Scale ID this Reject Weight is associated with
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
     * The Reject Bin ID this Reject Weight is associated with
     * 
     * @public
     * @type {string}
     */
    get rejectBinId()
    {
        return this._json.rejectBinId;
    }

    /**
     * When this Reject Bin Weight was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Reject Bin Weight was Created
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
     * The Packrun this Reject Weight is associated with
     * 
     * @public
     * @type {?string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * The Packrun this Reject Weight is associated with
     * 
     * @public
     * @type {?string}
     */
    set packrunId(packrunId)
    {
        this._json.packrunId = packrunId;
        this._updateJson.packrunId = packrunId;
    }

    /**
     * The Net Weight Captured by the Reject Bin Scale
     * 
     * @public
     * @type {number}
     */
    get netWeight()
    {
        return this._json.netWeight;
    }

    /**
     * The Net Weight Captured by the Reject Bin Scale
     * 
     * @public
     * @type {number}
     */
    set netWeight(netWeight)
    {
        this._json.netWeight = netWeight;
        this._updateJson.netWeight = netWeight;
    }

    /**
     * The Source Weights that make up the Net Weight
     * 
     * @public
     * @type {Object[]}
     */
    get sources()
    {
        return this._json.sources;
    }

    /**
     * The Source Weights that make up the Net Weight
     * 
     * @public
     * @type {Object[]}
     */
    set sources(sources)
    {
        this._json.sources = sources;
        this._updateJson.sources = sources;
    }

    /**
     * The Multi-Grower Bin Weights that will be submitted to FreshPack
     * 
     * @public
     * @type {Object[]}
     */
    get freshPackMultiGrowerBinWeights()
    {
        return this._json.freshPackMultiGrowerBinWeights;
    }

    /**
     * The Multi-Grower Bin Weights that will be submitted to FreshPack
     * 
     * @public
     * @type {Object[]}
     */
    set freshPackMultiGrowerBinWeights(freshPackMultiGrowerBinWeights)
    {
        this._json.freshPackMultiGrowerBinWeights = freshPackMultiGrowerBinWeights;
        this._updateJson.freshPackMultiGrowerBinWeights = freshPackMultiGrowerBinWeights;
    }

    /**
     * Whether the Reject Bin Weight has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Reject Bin Weight was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Reject Bin Weight**
     * 
     * @public
     * @return {Promise<RejectBinWeightModel>}
     */
    update()
    {
        return RejectBinWeightController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Reject Bin Weight**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return RejectBinWeightController.delete(this._siteId, this._json.id);
    }
}

export default RejectBinWeightModel;