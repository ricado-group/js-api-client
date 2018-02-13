import Model from '../Models/Model';
import RTUPluginController from '../Controllers/RTUPluginController';

/**
 * Model Class for a RTUPlugin
 * @extends Model
 */
class RTUPlugin extends Model
{
    /**
     * RTUPlugin Constructor
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
     * The RTUPlugin ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Plugin Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Plugin Name
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
     * The Company this RTU Plugin belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * The Company this RTU Plugin belongs to
     * 
     * @public
     * @type {string}
     */
    set companyId(companyId)
    {
        this._json.companyId = companyId;
        this._updateJson.companyId = companyId;
    }

    /**
     * Whether the RTUPlugin has been deleted
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
     * When the RTUPlugin was last updated
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
     * Update this RTUPlugin
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<RTUPlugin>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : RTUPluginController;
        return super.update(controller);
    }

    /**
     * Delete this RTUPlugin
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<RTUPlugin>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : RTUPluginController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RTUPlugin cannot be Replaced");
    }
}

export default RTUPlugin