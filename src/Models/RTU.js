import Model from '../Models/Model';
import RTUController from '../Controllers/RTUController';

/**
 * Model Class for a RTU
 * @extends Model
 */
class RTU extends Model
{
    /**
     * RTU Constructor
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
     * The RTU ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Site this RTU belongs to
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._json.siteId;
    }

    /**
     * The RTU Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The RTU Name
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
     * Whether the RTU is Enabled
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._json.enabled;
    }

    /**
     * Whether the RTU is Enabled
     * 
     * @public
     * @type {boolean}
     */
    set enabled(enabled)
    {
        this._json.enabled = enabled;
        this._updateJson.enabled = enabled;
    }

    /**
     * Whether the RTU has been deleted
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
     * When the RTU was last updated
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
     * Update this RTU
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<RTU>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : RTUController;
        return super.update(controller);
    }

    /**
     * Delete this RTU
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<RTU>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : RTUController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RTU cannot be Replaced");
    }
}

export default RTU