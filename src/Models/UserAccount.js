import Account from '../Models/Account';
import UserAccountController from '../Controllers/UserAccountController';

/**
 * Model Class for a UserAccount
 * @extends Account
 */
class UserAccount extends Account
{
    /**
     * UserAccount Constructor
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
     * @type {string}
     */
    get firstName()
    {
        return this._json.firstName;
    }

    /**
     * The User's First Name
     * 
     * @public
     * @type {string}
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
     * @type {string}
     */
    get lastName()
    {
        return this._json.lastName;
    }

    /**
     * The User's Last Name
     * 
     * @public
     * @type {string}
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
     * The Company this User belongs to
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
     * Whether the User Account has been deleted
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
     * When the User Account was last updated
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
     * Update this User Account
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<UserAccount>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : UserAccountController;
        return super.update(controller);
    }

    /**
     * Delete this User Account
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<UserAccount>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : UserAccountController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The UserAccount cannot be Replaced");
    }
}

export default UserAccount