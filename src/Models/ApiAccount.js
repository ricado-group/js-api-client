import Account from '../Models/Account';
import ApiAccountController from '../Controllers/ApiAccountController';

/**
 * Model Class for a ApiAccount
 * @extends Account
 */
class ApiAccount extends Account
{
    /**
     * ApiAccount Constructor
     * 
     * @package
     * @param {object} json - The API Account JSON
     */
    constructor(json)
    {
        super(json);
    }

    /**
     * Properties
     */


    /**
     * The API Account ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * API Key
     * 
     * @public
     * @type {string}
     */
    get key()
    {
        return this._json.key;
    }

    /**
     * API Secret
     * 
     * @public
     * @type {string}
     */
    get secret()
    {
        return this._json.secret;
    }

    /**
     * The API Account Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Company this API Account belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * Whether the API Account has been deleted
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
     * When the API Account was last updated
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

export default ApiAccount