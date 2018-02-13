import BaseAccountModel from '../Models/BaseAccountModel';
import ApiAccountController from '../Controllers/ApiAccountController';

/**
 * Model Class for a API Account
 * @extends BaseAccountModel
 */
class ApiAccountModel extends BaseAccountModel
{
    /**
     * ApiAccountModel Constructor
     * 
     * @private
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);

        this._accountType = 'api';
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

    set companyId(companyId)
    {
        this._json.companyId = companyId;
        this._updateJson.companyId = companyId;
    }

    /**
     * Whether the API Account has been deleted
     * 
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
     * @return {Promise<ApiAccountModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : ApiAccountController;
        return super.update(controllerClass);
    }

    /**
     * Delete this API Account
     * 
     * @public
     * @return {Promise<ApiAccountModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : ApiAccountController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The ApiAccountModel cannot be Replaced");
    }
}

export default ApiAccountModel