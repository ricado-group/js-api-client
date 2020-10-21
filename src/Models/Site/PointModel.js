import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PointController from '../../Controllers/Site/PointController';

/**
 * Model Class for a Point
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PointModel extends BaseSiteModel
{
    /**
     * PointModel Constructor
     * 
     * @public
     * @param {Object} json - The Point Properties
     * @param {?number} json.rtuId - The RTU this Point belongs to
     * @param {?number} json.pluginId - The Plugin ID
     * @param {string} json.name - The Point Name
     * @param {string} json.type - The Point Type
     * @param {string} json.valueType - The Point's Value Type
     * @param {string} json.permissions - The Permissions
     * @param {boolean} json.enabled - Whether the Point is Enabled
     * @param {Object} json.settings - The Point Settings
     * @param {number} siteId - The Site ID associated with this Point
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Point
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Point ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Point belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Plugin ID
     * 
     * @public
     * @type {?number}
     */
    get pluginId()
    {
        return this._json.pluginId;
    }

    /**
     * The Plugin ID
     * 
     * @public
     * @type {?number}
     */
    set pluginId(pluginId)
    {
        this._json.pluginId = pluginId;
        this._updateJson.pluginId = pluginId;
    }

    /**
     * The Point Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Point Name
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
     * The Point Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * The Point Type
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
     * The Point's Value Type
     * 
     * @public
     * @type {string}
     */
    get valueType()
    {
        return this._json.valueType;
    }

    /**
     * The Point's Value Type
     * 
     * @public
     * @type {string}
     */
    set valueType(valueType)
    {
        this._json.valueType = valueType;
        this._updateJson.valueType = valueType;
    }

    /**
     * The Permissions
     * 
     * @public
     * @type {string}
     */
    get permissions()
    {
        return this._json.permissions;
    }

    /**
     * The Permissions
     * 
     * @public
     * @type {string}
     */
    set permissions(permissions)
    {
        this._json.permissions = permissions;
        this._updateJson.permissions = permissions;
    }

    /**
     * Whether the Point is Enabled
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._json.enabled;
    }

    /**
     * Whether the Point is Enabled
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
     * The Point Settings
     * 
     * @public
     * @type {Object}
     */
    get settings()
    {
        return this._json.settings;
    }

    /**
     * The Point Settings
     * 
     * @public
     * @type {Object}
     */
    set settings(settings)
    {
        this._json.settings = settings;
        this._updateJson.settings = settings;
    }

    /**
     * Whether the Point has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Point was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Point**
     * 
     * @public
     * @return {Promise<PointModel>}
     */
    update()
    {
        return PointController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Point**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PointController.delete(this._siteId, this._json.id);
    }
}

export default PointModel;