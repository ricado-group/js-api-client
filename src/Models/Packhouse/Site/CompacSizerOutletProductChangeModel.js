import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import CompacSizerOutletProductChangeController from '../../../Controllers/Packhouse/Site/CompacSizerOutletProductChangeController';

/**
 * Model Class for a Compac Sizer Outlet Product Change
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerOutletProductChangeModel extends BaseSiteModel
{
    /**
     * CompacSizerOutletProductChangeModel Constructor
     * 
     * @public
     * @param {Object} json - The Compac Sizer Outlet Product Change Properties
     * @param {string} json.compacSizerId - The Compac Sizer ID this Outlet Change is associated with
     * @param {string} json.outletNumber - The Sizer Outlet Number this Outlet Change is associated with
     * @param {Date} json.createdTimestamp - When this Outlet Change occurred
     * @param {?string} json.previousProductId - The ID of the Previous Product that was active on the Outlet
     * @param {?string} json.previousProductName - The Name of the Previous Product that was active on the Outlet
     * @param {string} json.newProductId - The ID of the New Product that is now active on the Outlet
     * @param {string} json.newProductName - The Name of the New Product that is now active on the Outlet
     * @param {number} siteId - The Site ID associated with this Compac Sizer Outlet Product Change
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Compac Sizer Outlet Product Change
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Compac Sizer Outlet Product Change ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Compac Sizer ID this Outlet Change is associated with
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._json.compacSizerId;
    }

    /**
     * The Compac Sizer ID this Outlet Change is associated with
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
     * The Sizer Outlet Number this Outlet Change is associated with
     * 
     * @public
     * @type {string}
     */
    get outletNumber()
    {
        return this._json.outletNumber;
    }

    /**
     * When this Outlet Change occurred
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Outlet Change occurred
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
     * The ID of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {?string}
     */
    get previousProductId()
    {
        return this._json.previousProductId;
    }

    /**
     * The ID of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {?string}
     */
    set previousProductId(previousProductId)
    {
        this._json.previousProductId = previousProductId;
        this._updateJson.previousProductId = previousProductId;
    }

    /**
     * The Name of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {?string}
     */
    get previousProductName()
    {
        return this._json.previousProductName;
    }

    /**
     * The Name of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {?string}
     */
    set previousProductName(previousProductName)
    {
        this._json.previousProductName = previousProductName;
        this._updateJson.previousProductName = previousProductName;
    }

    /**
     * The ID of the New Product that is now active on the Outlet
     * 
     * @public
     * @type {string}
     */
    get newProductId()
    {
        return this._json.newProductId;
    }

    /**
     * The ID of the New Product that is now active on the Outlet
     * 
     * @public
     * @type {string}
     */
    set newProductId(newProductId)
    {
        this._json.newProductId = newProductId;
        this._updateJson.newProductId = newProductId;
    }

    /**
     * The Name of the New Product that is now active on the Outlet
     * 
     * @public
     * @type {string}
     */
    get newProductName()
    {
        return this._json.newProductName;
    }

    /**
     * The Name of the New Product that is now active on the Outlet
     * 
     * @public
     * @type {string}
     */
    set newProductName(newProductName)
    {
        this._json.newProductName = newProductName;
        this._updateJson.newProductName = newProductName;
    }

    /**
     * Whether the Compac Sizer Outlet Product Change has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Compac Sizer Outlet Product Change was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Compac Sizer Outlet Product Change**
     * 
     * @public
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    update()
    {
        return CompacSizerOutletProductChangeController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Compac Sizer Outlet Product Change**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return CompacSizerOutletProductChangeController.delete(this._siteId, this._json.id);
    }
}

export default CompacSizerOutletProductChangeModel;