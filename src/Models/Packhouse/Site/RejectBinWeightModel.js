import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import RejectBinWeightController from '../../../Controllers/Packhouse/Site/RejectBinWeightController';

/**
 * Model Class for a Reject Bin Weight
 * @extends PermanentObjectDataModel
 */
class RejectBinWeightModel extends PermanentObjectDataModel {
    /**
     * RejectBinWeightModel Constructor
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
     * Key Index
     * 
     * @public
     * @type {string}
     */
    get rejectBinId()
    {
        return this._json.rejectBinId;
    }

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
    get rejectBinScaleId()
    {
        return this._json.rejectBinScaleId;
    }

    set rejectBinScaleId(rejectBinScaleId)
    {
        this._json.rejectBinScaleId = rejectBinScaleId;
        this._updateJson.rejectBinScaleId = rejectBinScaleId;
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
     * The Packrun this Reject Bin Weight is associated with
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

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

    set netWeight(netWeight)
    {
        this._json.netWeight = netWeight;
        this._updateJson.netWeight = netWeight;
    }

    /**
     * The Source Weights that make up the Net Weight
     * 
     * @public
     * @type {Array}
     */
    get sources()
    {
        return this._json.sources;
    }

    set sources(sources)
    {
        this._json.sources = sources;
        this._updateJson.sources = sources;
    }

    /**
     * The Multi-Grower Bin Weights that will be submitted to FreshPack
     * 
     * @public
     * @type {Array}
     */
    get freshPackMultiGrowerBinWeights()
    {
        return this._json.freshPackMultiGrowerBinWeights;
    }

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
     * Methods
     */


    /**
     * Update this Reject Bin Weight
     * 
     * @public
     * @return {Promise<RejectBinWeightModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || RejectBinWeightController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Reject Bin Weight
     * 
     * @public
     * @return {Promise<RejectBinWeightModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || RejectBinWeightController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RejectBinWeightModel cannot be Replaced");
    }
}

export default RejectBinWeightModel;