import BaseModel from '../Models/BaseModel';
import ApiAccountController from '../Controllers/ApiAccountController';

/**
 * Model Class for a API Account
 * @hideconstructor
 * @extends BaseModel
 */
class ApiAccountModel extends BaseModel
{
    /**
     * ApiAccountModel Constructor
     * 
     * @public
     * @param {Object} json - The API Account Properties
     * @param {?string} json.key - API Key
     * @param {string} json.name - The API Account Name
     * @param {string} json.companyId - The Company this API Account belongs to
     * @param {string[]} json.policies - The Policies that apply to this API Account
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a API Account
         * @private
         */
        this._updateJson = {};
    }

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
     * @type {?string}
     */
    get key()
    {
        return this._json.key;
    }

    /**
     * API Key
     * 
     * @public
     * @type {?string}
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
     * Update this **API Account**
     * 
     * @public
     * @return {Promise<ApiAccountModel>}
     */
    update()
    {
        return ApiAccountController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **API Account**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return ApiAccountController.delete(this._json.id);
    }
}

export default ApiAccountModel;