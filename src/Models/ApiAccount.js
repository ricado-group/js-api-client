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
     * API Key
     * 
     * @public
     * @type {string}
     */
    set key(key)
    {
        this._json.key = key;
        this._updateJson.key = key;
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
     * The API Account Name
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
     * The Company this API Account belongs to
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

    /**
     * Methods
     */


    /**
     * Update this API Account
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<ApiAccount>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : ApiAccountController;
        return super.update(controller);
    }

    /**
     * Delete this API Account
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<ApiAccount>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : ApiAccountController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The ApiAccount cannot be Replaced");
    }
}

export default ApiAccount