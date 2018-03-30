import PermanentObjectDataModel from '../../../Models/Site/PermanentObjectDataModel';
import PackrunController from '../../../Controllers/Packhouse/Site/PackrunController';

/**
 * Model Class for a Packrun
 * @extends PermanentObjectDataModel
 */
class PackrunModel extends PermanentObjectDataModel
{
    /**
     * PackrunModel Constructor
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
     * The Packrun ID
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
    get name()
    {
        return this._json.name;
    }

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._json.packingLineId;
    }

    set packingLineId(packingLineId)
    {
        this._json.packingLineId = packingLineId;
        this._updateJson.packingLineId = packingLineId;
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
     * The Grower Name for this Packrun
     * 
     * @public
     * @type {string}
     */
    get growerName()
    {
        return this._json.growerName;
    }

    set growerName(growerName)
    {
        this._json.growerName = growerName;
        this._updateJson.growerName = growerName;
    }

    /**
     * The Grower Code for this Packrun
     * 
     * @public
     * @type {string}
     */
    get growerCode()
    {
        return this._json.growerCode;
    }

    set growerCode(growerCode)
    {
        this._json.growerCode = growerCode;
        this._updateJson.growerCode = growerCode;
    }

    /**
     * When this Packrun was Started
     * 
     * @public
     * @type {Date}
     */
    get startTimestamp()
    {
        return this._json.startTimestamp;
    }

    set startTimestamp(startTimestamp)
    {
        this._json.startTimestamp = startTimestamp;
        this._updateJson.startTimestamp = startTimestamp;
    }

    /**
     * When this Packrun was Finished
     * 
     * @public
     * @type {Date}
     */
    get finishTimestamp()
    {
        return this._json.finishTimestamp;
    }

    set finishTimestamp(finishTimestamp)
    {
        this._json.finishTimestamp = finishTimestamp;
        this._updateJson.finishTimestamp = finishTimestamp;
    }

    /**
     * The Variety for this Packrun
     * 
     * @public
     * @type {string}
     */
    get varietyId()
    {
        return this._json.varietyId;
    }

    set varietyId(varietyId)
    {
        this._json.varietyId = varietyId;
        this._updateJson.varietyId = varietyId;
    }

    /**
     * The Growing Method for this Packrun
     * 
     * @public
     * @type {string}
     */
    get growingMethodId()
    {
        return this._json.growingMethodId;
    }

    set growingMethodId(growingMethodId)
    {
        this._json.growingMethodId = growingMethodId;
        this._updateJson.growingMethodId = growingMethodId;
    }

    /**
     * The Number of Allocated Bins for this Packrun
     * 
     * @public
     * @type {number}
     */
    get allocatedBins()
    {
        return this._json.allocatedBins;
    }

    set allocatedBins(allocatedBins)
    {
        this._json.allocatedBins = allocatedBins;
        this._updateJson.allocatedBins = allocatedBins;
    }

    /**
     * Whether the Packrun has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Packrun was last updated
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
     * Update this Packrun
     * 
     * @public
     * @return {Promise<PackrunModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : PackrunController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Packrun
     * 
     * @public
     * @return {Promise<PackrunModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : PackrunController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The PackrunModel cannot be Replaced");
    }
}

export default PackrunModel