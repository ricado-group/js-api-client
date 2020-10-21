import BaseModel from '../Models/BaseModel';
import AccountPolicyController from '../Controllers/AccountPolicyController';

/**
 * Model Class for a Account Policy
 * @hideconstructor
 * @extends BaseModel
 */
class AccountPolicyModel extends BaseModel
{
    /**
     * AccountPolicyModel Constructor
     * 
     * @public
     * @param {Object} json - The Account Policy Properties
     * @param {string} json.name - The Policy Name
     * @param {string} json.companyId - The Company this Policy belongs to
     * @param {{id: any, type: string, actions: string[], permission: string}[]} json.resources - The Resources this Policy provides
     * @param {Object[]} json.rules - The Rules this Policy provides
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a Account Policy
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Account Policy ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Policy Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Policy Name
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
     * The Company this Policy belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * The Company this Policy belongs to
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
     * Whether the Account Policy has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Account Policy was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Account Policy**
     * 
     * @public
     * @return {Promise<AccountPolicyModel>}
     */
    update()
    {
        return AccountPolicyController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **Account Policy**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return AccountPolicyController.delete(this._json.id);
    }
}

export default AccountPolicyModel;