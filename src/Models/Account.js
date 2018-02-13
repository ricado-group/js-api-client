import Model from '../Models/Model';
/**
 * Abstract Model Class Account
 * @abstract
 * @extends Model
 */
class Account extends Model
{
    /**
     * Account Constructor
     * 
     * @package
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);

        // TODO: Try and figure out what the Account Type is and store that as _accountType
        //this._accountType;
    }

    /**
     * The Account Type
     * 
     * @public
     * @type {number}
     */
    get accountType()
    {
        return this._accountType;
    }
}

export default Account