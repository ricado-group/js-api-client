/**
 * Model Class for a Company
 * @extends Model
 */
class Company extends Model
{
    /**
     * Company Constructor
     * 
     * @package
     * @param {object} json - The Company JSON
     */
    constructor(json)
    {
        super(json);
    }

    /**
     * Properties
     */


    /**
     * The Company ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Company Display Name
     * 
     * @public
     * @type {string}
     */
    get displayName()
    {
        return this._json.displayName;
    }

    /**
     * The Company Legal Name
     * 
     * @public
     * @type {string}
     */
    get legalName()
    {
        return this._json.legalName;
    }

    /**
     * Whether the Company has been deleted
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
     * When the Company was last updated
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

export default Company