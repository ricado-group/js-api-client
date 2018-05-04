import BaseModel from '../Models/BaseModel';
import RTUController from '../Controllers/RTUController';

/**
 * Model Class for a RTU
 * @extends BaseModel
 */
class RTUModel extends BaseModel {
    /**
     * RTUModel Constructor
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

    set enabled(enabled)
    {
        this._json.enabled = enabled;
        this._updateJson.enabled = enabled;
    }

    /**
     * Whether the RTU has been deleted
     * 
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
     * @return {Promise<RTUModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || RTUController;
        return super.update(controllerClass);
    }

    /**
     * Delete this RTU
     * 
     * @public
     * @return {Promise<RTUModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || RTUController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RTUModel cannot be Replaced");
    }
}

export default RTUModel;