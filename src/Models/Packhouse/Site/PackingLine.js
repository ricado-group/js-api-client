import PermanentObject from '../../../Models/Site/PermanentObject';
import PackingLineController from '../../../Controllers/Packhouse/Site/PackingLineController';

/**
 * Model Class for a PackingLine
 * @extends PermanentObject
 */
class PackingLine extends PermanentObject
{
    /**
     * PackingLine Constructor
     * 
     * @package
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

    /**
     * The Packing Line Name
     * 
     * @public
     * @type {string}
     */
    set name(name)
    {
        this._json.name = name;
        this._updateJson.name = name;
    }

    /**
     * Whether the Packing Line has been deleted
     * 
     * @abstract
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
     * @abstract
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
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<PackingLine>}
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
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<PackingLine>}
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
        throw new Error("The PackingLine cannot be Replaced");
    }
}

export default PackingLine