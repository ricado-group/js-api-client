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
     * @param {object} json - The User Account JSON
     */
    constructor(json)
    {
        super(json);
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
     * The User's Password Hash
     * 
     * @public
     * @type {string}
     */
    get passwordHash()
    {
        return this._json.passwordHash;
    }

    /**
     * The User's Pin Code Hash
     * 
     * @public
     * @type {string}
     */
    get pinCodeHash()
    {
        return this._json.pinCodeHash;
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
}

export default UserAccount