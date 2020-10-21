import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import BinTipWeightController from '../../../Controllers/Packhouse/Site/BinTipWeightController';

/**
 * Model Class for a Bin Tip Weight
 * @hideconstructor
 * @extends BaseSiteModel
 */
class BinTipWeightModel extends BaseSiteModel
{
    /**
     * BinTipWeightModel Constructor
     * 
     * @public
     * @param {Object} json - The Bin Tip Weight Properties
     * @param {string} json.binTipId - The Bin Tip ID associated with this Bin Weight
     * @param {string} json.packrunId - The Packrun ID associated with this Bin Weight
     * @param {Date} json.createdTimestamp - When this Bin Weight was Created
     * @param {string} json.weightType - The Bin Weight Type
     * @param {number} json.weight - The Bin Weight
     * @param {?string} json.binScaleId - The Bin Scale ID associated with this Bin Weight
     * @param {number} siteId - The Site ID associated with this Bin Tip Weight
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Bin Tip Weight
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Bin Tip Weight ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Bin Tip ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    get binTipId()
    {
        return this._json.binTipId;
    }

    /**
     * The Bin Tip ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    set binTipId(binTipId)
    {
        this._json.binTipId = binTipId;
        this._updateJson.binTipId = binTipId;
    }

    /**
     * The Packrun ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * When this Bin Weight was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Bin Weight was Created
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
     * The Bin Weight Type
     * 
     * @public
     * @type {string}
     */
    get weightType()
    {
        return this._json.weightType;
    }

    /**
     * The Bin Weight Type
     * 
     * @public
     * @type {string}
     */
    set weightType(weightType)
    {
        this._json.weightType = weightType;
        this._updateJson.weightType = weightType;
    }

    /**
     * The Bin Weight
     * 
     * @public
     * @type {number}
     */
    get weight()
    {
        return this._json.weight;
    }

    /**
     * The Bin Weight
     * 
     * @public
     * @type {number}
     */
    set weight(weight)
    {
        this._json.weight = weight;
        this._updateJson.weight = weight;
    }

    /**
     * The Bin Scale ID associated with this Bin Weight
     * 
     * @public
     * @type {?string}
     */
    get binScaleId()
    {
        return this._json.binScaleId;
    }

    /**
     * The Bin Scale ID associated with this Bin Weight
     * 
     * @public
     * @type {?string}
     */
    set binScaleId(binScaleId)
    {
        this._json.binScaleId = binScaleId;
        this._updateJson.binScaleId = binScaleId;
    }

    /**
     * Whether the Bin Tip Weight has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Bin Tip Weight was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Bin Tip Weight**
     * 
     * @public
     * @return {Promise<BinTipWeightModel>}
     */
    update()
    {
        return BinTipWeightController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Bin Tip Weight**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return BinTipWeightController.delete(this._siteId, this._json.id);
    }
}

export default BinTipWeightModel;