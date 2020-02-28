import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import RejectBinController from '../../../Controllers/Packhouse/Site/RejectBinController';

/**
 * Model Class for a Reject Bin
 * @extends PermanentObjectDataModel
 */
class RejectBinModel extends PermanentObjectDataModel {
    /**
     * RejectBinModel Constructor
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
     * The Name of the Reject Bin Scale where this Bin was Created
     * 
     * @public
     * @type {string}
     */
    get rejectBinScaleName()
    {
        return this._json.rejectBinScaleName;
    }

    set rejectBinScaleName(rejectBinScaleName)
    {
        this._json.rejectBinScaleName = rejectBinScaleName;
        this._updateJson.rejectBinScaleName = rejectBinScaleName;
    }

    /**
     * The Tare Weight Captured by the Reject Bin Scale
     * 
     * @public
     * @type {number}
     */
    get tareWeight()
    {
        return this._json.tareWeight;
    }

    set tareWeight(tareWeight)
    {
        this._json.tareWeight = tareWeight;
        this._updateJson.tareWeight = tareWeight;
    }

    /**
     * When this Reject Bin was Finalized (No new Weights)
     * 
     * @public
     * @type {Date}
     */
    get finalizedTimestamp()
    {
        return this._json.finalizedTimestamp;
    }

    set finalizedTimestamp(finalizedTimestamp)
    {
        this._json.finalizedTimestamp = finalizedTimestamp;
        this._updateJson.finalizedTimestamp = finalizedTimestamp;
    }

    /**
     * The Multi-Grower Bins that will be submitted to FreshPack
     * 
     * @public
     * @type {Array}
     */
    get freshPackMultiGrowerBins()
    {
        return this._json.freshPackMultiGrowerBins;
    }

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
     * Methods
     */


    /**
     * Update this Reject Bin
     * 
     * @public
     * @return {Promise<RejectBinModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || RejectBinController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Reject Bin
     * 
     * @public
     * @return {Promise<RejectBinModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || RejectBinController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RejectBinModel cannot be Replaced");
    }
}

export default RejectBinModel;