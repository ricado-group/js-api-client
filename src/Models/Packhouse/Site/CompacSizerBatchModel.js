import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import CompacSizerBatchController from '../../../Controllers/Packhouse/Site/CompacSizerBatchController';

/**
 * Model Class for a Reject Bin Weight
 * @extends PermanentObjectDataModel
 */
class CompacSizerBatchModel extends PermanentObjectDataModel {
    /**
     * CompacSizerBatchModel Constructor
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
    get batchId()
    {
        return this._json.batchId;
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
     * The Packrun ID associated with this Batch
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
     * The Compac Sizer Batch Data
     * 
     * @public
     * @type {Object}
     */
    get batch()
    {
        return this._json.batch;
    }

    set batch(batch)
    {
        this._json.batch = batch;
        this._updateJson.batch = batch;
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
     * @return {Promise<CompacSizerBatchModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || CompacSizerBatchController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Reject Bin Weight
     * 
     * @public
     * @return {Promise<CompacSizerBatchModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || CompacSizerBatchController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The CompacSizerBatchModel cannot be Replaced");
    }
}

export default CompacSizerBatchModel;