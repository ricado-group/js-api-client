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
     * @param {object} json - The Model JSON
     */
    constructor(json)
    {
        super(json);
    }
}

export default Account