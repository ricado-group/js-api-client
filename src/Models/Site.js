import Model from '../Models/Model';
import SiteController from '../Controllers/SiteController';

/**
 * Model Class for a Site
 * @extends Model
 */
class Site extends Model
{
    /**
     * Site Constructor
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
     * The Site ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Site Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Site Name
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
     * The Company this Site belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * The Company this Site belongs to
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
     * Whether the Site is Enabled
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._json.enabled;
    }

    /**
     * Whether the Site is Enabled
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
     * Whether the Site has been deleted
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
     * When the Site was last updated
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
     * Update this Site
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<Site>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : SiteController;
        return super.update(controller);
    }

    /**
     * Delete this Site
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<Site>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : SiteController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The Site cannot be Replaced");
    }
}

export default Site