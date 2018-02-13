import SiteModel from '../../Models/Site/SiteModel';
import TemporaryObjectController from '../../Controllers/Site/TemporaryObjectController';

/**
 * Model Class for a TemporaryObject
 * @extends SiteModel
 */
class TemporaryObject extends SiteModel
{
    /**
     * TemporaryObject Constructor
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
     * The Temporary Object ID
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
    get keyIndex()
    {
        return this._json.keyIndex;
    }

    /**
     * The Temporary Object Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * The Temporary Object Type
     * 
     * @public
     * @type {string}
     */
    set type(type)
    {
        this._json.type = type;
        this._updateJson.type = type;
    }

    /**
     * The Temporary Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._json.definition;
    }

    /**
     * The Temporary Object Definition
     * 
     * @public
     * @type {Object}
     */
    set definition(definition)
    {
        this._json.definition = definition;
        this._updateJson.definition = definition;
    }

    /**
     * Whether the Temporary Object has been deleted
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
     * When the Temporary Object was last updated
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
     * Update this Temporary Object
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<TemporaryObject>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : TemporaryObjectController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Temporary Object
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<TemporaryObject>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : TemporaryObjectController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The TemporaryObject cannot be Replaced");
    }
}

export default TemporaryObject