import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import CompacSizerOutletProductChangeController from '../../../Controllers/Packhouse/Site/CompacSizerOutletProductChangeController';

/**
 * Model Class for a Compac Sizer Outlet Product Change
 * @extends PermanentObjectDataModel
 */
class CompacSizerOutletProductChangeModel extends PermanentObjectDataModel {
    /**
     * CompacSizerOutletProductChangeModel Constructor
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
     * Key Index
     * 
     * @public
     * @type {string}
     */
    get outletNumber()
    {
        return this._json.outletNumber;
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
     * The ID of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {string}
     */
    get previousProductId()
    {
        return this._json.previousProductId;
    }

    set previousProductId(previousProductId)
    {
        this._json.previousProductId = previousProductId;
        this._updateJson.previousProductId = previousProductId;
    }

    /**
     * The Name of the Previous Product that was active on the Outlet
     * 
     * @public
     * @type {string}
     */
    get previousProductName()
    {
        return this._json.previousProductName;
    }

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
     * Methods
     */


    /**
     * Update this Compac Sizer Outlet Product Change
     * 
     * @public
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || CompacSizerOutletProductChangeController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Compac Sizer Outlet Product Change
     * 
     * @public
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || CompacSizerOutletProductChangeController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The CompacSizerOutletProductChangeModel cannot be Replaced");
    }
}

export default CompacSizerOutletProductChangeModel;