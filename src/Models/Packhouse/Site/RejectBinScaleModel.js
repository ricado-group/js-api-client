import PermanentObjectModel from '../../../Models/Site/PermanentObjectModel';
import RejectBinScaleController from '../../../Controllers/Packhouse/Site/RejectBinScaleController';

/**
 * Model Class for a Reject Bin Scale
 * @extends PermanentObjectModel
 */
class RejectBinScaleModel extends PermanentObjectModel
{
    /**
     * RejectBinScaleModel Constructor
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
     * The Reject Bin Scale ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Permanent Object belongs to
     * 
     * @public
     * @type {number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Reject Bin Scale Class Type
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
     * Whether the Reject Bin Scale has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Reject Bin Scale was last updated
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
     * Update this Reject Bin Scale
     * 
     * @public
     * @return {Promise<RejectBinScaleModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : RejectBinScaleController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Reject Bin Scale
     * 
     * @public
     * @return {Promise<RejectBinScaleModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : RejectBinScaleController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RejectBinScaleModel cannot be Replaced");
    }
}

export default RejectBinScaleModel