import SiteModel from '../../Models/Site/SiteModel';
import PointController from '../../Controllers/Site/PointController';

/**
 * Model Class for a Point
 * @extends SiteModel
 */
class Point extends SiteModel
{
    /**
     * Point Constructor
     * 
     * @package
     * @param {object} json - The Point JSON
     */
    constructor(json)
    {
        super(json);
    }

    /**
     * Properties
     */


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
     * @type {number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Plugin ID
     * 
     * @public
     * @type {number}
     */
    get pluginId()
    {
        return this._json.pluginId;
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
     * Whether the Point has been deleted
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
     * When the Point was last updated
     * 
     * @abstract
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }
}

export default Point