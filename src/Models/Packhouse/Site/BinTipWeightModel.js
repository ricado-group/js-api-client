import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import BinTipWeightController from '../../../Controllers/Packhouse/Site/BinTipWeightController';

/**
 * Model Class for a Bin Tip Weight
 * @extends PermanentObjectDataModel
 */
class BinTipWeightModel extends PermanentObjectDataModel {
    /**
     * BinTipWeightModel Constructor
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
    get binTipId()
    {
        return this._json.binTipId;
    }

    set binTipId(binTipId)
    {
        this._json.binTipId = binTipId;
        this._updateJson.binTipId = binTipId;
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
     * The Bin Weight Type
     * 
     * @public
     * @type {string}
     */
    get weightType()
    {
        return this._json.weightType;
    }

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

    set weight(weight)
    {
        this._json.weight = weight;
        this._updateJson.weight = weight;
    }

    /**
     * The Bin Scale ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    get binScaleId()
    {
        return this._json.binScaleId;
    }

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
     * Methods
     */


    /**
     * Update this Bin Tip Weight
     * 
     * @public
     * @return {Promise<BinTipWeightModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || BinTipWeightController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Bin Tip Weight
     * 
     * @public
     * @return {Promise<BinTipWeightModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || BinTipWeightController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The BinTipWeightModel cannot be Replaced");
    }
}

export default BinTipWeightModel;