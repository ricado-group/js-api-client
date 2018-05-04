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
     * The Reject Bin Class Type
     * 
     * @public
     * @type {string}
     */
    get classType()
    {
        return this._json.classType;
    }

    set classType(classType)
    {
        this._json.classType = classType;
        this._updateJson.classType = classType;
    }

    /**
     * The Reject Bin Weight
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
     * The Radfords Scale ID for this Reject Bin
     * 
     * @public
     * @type {number}
     */
    get radfordsScaleId()
    {
        return this._json.radfordsScaleId;
    }

    set radfordsScaleId(radfordsScaleId)
    {
        this._json.radfordsScaleId = radfordsScaleId;
        this._updateJson.radfordsScaleId = radfordsScaleId;
    }

    /**
     * The Combined Packrun Bin ID
     * 
     * @public
     * @type {string}
     */
    get combinedPackrunBinId()
    {
        return this._json.combinedPackrunBinId;
    }

    set combinedPackrunBinId(combinedPackrunBinId)
    {
        this._json.combinedPackrunBinId = combinedPackrunBinId;
        this._updateJson.combinedPackrunBinId = combinedPackrunBinId;
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