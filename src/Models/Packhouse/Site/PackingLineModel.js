import PermanentObjectModel from '../../../Models/Site/PermanentObjectModel';
import PackingLineController from '../../../Controllers/Packhouse/Site/PackingLineController';

/**
 * Model Class for a Packing Line
 * @extends PermanentObjectModel
 */
class PackingLineModel extends PermanentObjectModel
{
    /**
     * PackingLineModel Constructor
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
     * The Packing Line ID
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
     * The Packing Line Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    set name(name)
    {
        this._json.name = name;
        this._updateJson.name = name;
    }

    /**
     * Whether the Packing Line has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Packing Line was last updated
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
     * Update this Packing Line
     * 
     * @public
     * @return {Promise<PackingLineModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : PackingLineController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Packing Line
     * 
     * @public
     * @return {Promise<PackingLineModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : PackingLineController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The PackingLineModel cannot be Replaced");
    }
}

export default PackingLineModel