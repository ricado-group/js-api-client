import BaseModel from '../Models/BaseModel';
import RTUPluginController from '../Controllers/RTUPluginController';

/**
 * Model Class for a RTU Plugin
 * @hideconstructor
 * @extends BaseModel
 */
class RTUPluginModel extends BaseModel
{
    /**
     * RTUPluginModel Constructor
     * 
     * @public
     * @param {Object} json - The RTU Plugin Properties
     * @param {string} json.name - The Plugin Name
     * @param {string} json.companyId - The Company this RTU Plugin belongs to
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a RTU Plugin
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The RTU Plugin ID
     * 
     * @public
     * @type {number}
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
     * Whether the RTU Plugin has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the RTU Plugin was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **RTU Plugin**
     * 
     * @public
     * @return {Promise<RTUPluginModel>}
     */
    update()
    {
        return RTUPluginController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **RTU Plugin**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return RTUPluginController.delete(this._json.id);
    }
}

export default RTUPluginModel;