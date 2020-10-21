import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import CompacSizerBatchController from '../../../Controllers/Packhouse/Site/CompacSizerBatchController';

/**
 * Model Class for a Compac Sizer Batch
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerBatchModel extends BaseSiteModel
{
    /**
     * CompacSizerBatchModel Constructor
     * 
     * @public
     * @param {Object} json - The Compac Sizer Batch Properties
     * @param {string} json.compacSizerId - The Compac Sizer ID this Batch is associated with
     * @param {string} json.batchId - The Numeric Compac Batch ID
     * @param {Date} json.createdTimestamp - When this Batch was Created
     * @param {?string} json.packrunId - The Packrun ID associated with this Batch
     * @param {Object} json.batch - The Compac Sizer Batch Data
     * @param {number} siteId - The Site ID associated with this Compac Sizer Batch
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Compac Sizer Batch
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Compac Sizer Batch ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Compac Sizer ID this Batch is associated with
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._json.compacSizerId;
    }

    /**
     * The Compac Sizer ID this Batch is associated with
     * 
     * @public
     * @type {string}
     */
    set compacSizerId(compacSizerId)
    {
        this._json.compacSizerId = compacSizerId;
        this._updateJson.compacSizerId = compacSizerId;
    }

    /**
     * The Numeric Compac Batch ID
     * 
     * @public
     * @type {string}
     */
    get batchId()
    {
        return this._json.batchId;
    }

    /**
     * When this Batch was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Batch was Created
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
     * The Packrun ID associated with this Batch
     * 
     * @public
     * @type {?string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * The Packrun ID associated with this Batch
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
     * The Compac Sizer Batch Data
     * 
     * @public
     * @type {Object}
     */
    get batch()
    {
        return this._json.batch;
    }

    /**
     * The Compac Sizer Batch Data
     * 
     * @public
     * @type {Object}
     */
    set batch(batch)
    {
        this._json.batch = batch;
        this._updateJson.batch = batch;
    }

    /**
     * Whether the Compac Sizer Batch has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Compac Sizer Batch was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Compac Sizer Batch**
     * 
     * @public
     * @return {Promise<CompacSizerBatchModel>}
     */
    update()
    {
        return CompacSizerBatchController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Compac Sizer Batch**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return CompacSizerBatchController.delete(this._siteId, this._json.id);
    }
}

export default CompacSizerBatchModel;