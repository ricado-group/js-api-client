import BaseModel from '../Models/BaseModel';
import AccountPolicyController from '../Controllers/AccountPolicyController';

/**
 * Model Class for a Account Policy
 * @extends BaseModel
 */
class AccountPolicyModel extends BaseModel {
    /**
     * AccountPolicyModel Constructor
     * 
     * @private
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

    set companyId(companyId)
    {
        this._json.companyId = companyId;
        this._updateJson.companyId = companyId;
    }

    /**
     * The Resources this Policy provides
     * 
     * @public
     * @type {Array}
     */
    get resources()
    {
        return this._json.resources;
    }

    set resources(resources)
    {
        this._json.resources = resources;
        this._updateJson.resources = resources;
    }

    /**
     * The Rules this Policy provides
     * 
     * @public
     * @type {Array}
     */
    get rules()
    {
        return this._json.rules;
    }

    set rules(rules)
    {
        this._json.rules = rules;
        this._updateJson.rules = rules;
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
     * Methods
     */


    /**
     * Update this Account Policy
     * 
     * @public
     * @return {Promise<AccountPolicyModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || AccountPolicyController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Account Policy
     * 
     * @public
     * @return {Promise<AccountPolicyModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || AccountPolicyController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The AccountPolicyModel cannot be Replaced");
    }
}

export default AccountPolicyModel;