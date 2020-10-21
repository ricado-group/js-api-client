import BaseModel from '../Models/BaseModel';
import SiteController from '../Controllers/SiteController';

/**
 * Model Class for a Site
 * @hideconstructor
 * @extends BaseModel
 */
class SiteModel extends BaseModel
{
    /**
     * SiteModel Constructor
     * 
     * @public
     * @param {Object} json - The Site Properties
     * @param {string} json.name - The Site Name
     * @param {string} json.companyId - The Company this Site belongs to
     * @param {boolean} json.enabled - Whether the Site is Enabled
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a Site
         * @private
         */
        this._updateJson = {};
    }

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
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Site**
     * 
     * @public
     * @return {Promise<SiteModel>}
     */
    update()
    {
        return SiteController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **Site**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return SiteController.delete(this._json.id);
    }
}

export default SiteModel;