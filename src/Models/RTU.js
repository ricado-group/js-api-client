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
     * @param {object} json - The RTU JSON
     */
    constructor(json)
    {
        super(json);
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
}

export default RTU