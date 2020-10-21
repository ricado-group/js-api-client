import BaseModel from '../Models/BaseModel';
import RTUController from '../Controllers/RTUController';

/**
 * Model Class for a RTU
 * @hideconstructor
 * @extends BaseModel
 */
class RTUModel extends BaseModel
{
    /**
     * RTUModel Constructor
     * 
     * @public
     * @param {Object} json - The RTU Properties
     * @param {number} json.siteId - The Site this RTU belongs to
     * @param {string} json.name - The RTU Name
     * @param {boolean} json.enabled - Whether the RTU is Enabled
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a RTU
         * @private
         */
        this._updateJson = {};
    }

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
     * Update this **RTU**
     * 
     * @public
     * @return {Promise<RTUModel>}
     */
    update()
    {
        return RTUController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **RTU**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return RTUController.delete(this._json.id);
    }
}

export default RTUModel;