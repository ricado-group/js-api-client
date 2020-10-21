import BaseModel from '../Models/BaseModel';
import UserAccountController from '../Controllers/UserAccountController';

/**
 * Model Class for a User Account
 * @hideconstructor
 * @extends BaseModel
 */
class UserAccountModel extends BaseModel
{
    /**
     * UserAccountModel Constructor
     * 
     * @public
     * @param {Object} json - The User Account Properties
     * @param {string} json.email - The User's Email Address
     * @param {?string} json.firstName - The User's First Name
     * @param {?string} json.lastName - The User's Last Name
     * @param {string} json.companyId - The Company this User belongs to
     * @param {string[]} json.policies - The Policies that apply to this User Account
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a User Account
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The User Account ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The User's Email Address
     * 
     * @public
     * @type {string}
     */
    get email()
    {
        return this._json.email;
    }

    /**
     * The User's Email Address
     * 
     * @public
     * @type {string}
     */
    set email(email)
    {
        this._json.email = email;
        this._updateJson.email = email;
    }

    /**
     * The User's First Name
     * 
     * @public
     * @type {?string}
     */
    get firstName()
    {
        return this._json.firstName;
    }

    /**
     * The User's First Name
     * 
     * @public
     * @type {?string}
     */
    set firstName(firstName)
    {
        this._json.firstName = firstName;
        this._updateJson.firstName = firstName;
    }

    /**
     * The User's Last Name
     * 
     * @public
     * @type {?string}
     */
    get lastName()
    {
        return this._json.lastName;
    }

    /**
     * The User's Last Name
     * 
     * @public
     * @type {?string}
     */
    set lastName(lastName)
    {
        this._json.lastName = lastName;
        this._updateJson.lastName = lastName;
    }

    /**
     * The Company this User belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * Whether the User Account has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the User Account was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **User Account**
     * 
     * @public
     * @return {Promise<UserAccountModel>}
     */
    update()
    {
        return UserAccountController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **User Account**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return UserAccountController.delete(this._json.id);
    }
}

export default UserAccountModel;