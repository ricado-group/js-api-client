import Model from '../Models/Model';
import CompanyController from '../Controllers/CompanyController';

/**
 * Model Class for a Company
 * @extends Model
 */
class Company extends Model
{
    /**
     * Company Constructor
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
     * The Company ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Company Display Name
     * 
     * @public
     * @type {string}
     */
    get displayName()
    {
        return this._json.displayName;
    }

    /**
     * The Company Display Name
     * 
     * @public
     * @type {string}
     */
    set displayName(displayName)
    {
        this._json.displayName = displayName;
        this._updateJson.displayName = displayName;
    }

    /**
     * The Company Legal Name
     * 
     * @public
     * @type {string}
     */
    get legalName()
    {
        return this._json.legalName;
    }

    /**
     * The Company Legal Name
     * 
     * @public
     * @type {string}
     */
    set legalName(legalName)
    {
        this._json.legalName = legalName;
        this._updateJson.legalName = legalName;
    }

    /**
     * Whether the Company has been deleted
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
     * When the Company was last updated
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
     * Update this Company
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<Company>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : CompanyController;
        return super.update(controller);
    }

    /**
     * Delete this Company
     * 
     * @public
     * @param {ModelController} {controller} - The Model Controller
     * @return {Promise<Company>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : CompanyController;
        return super.delete(controller);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The Company cannot be Replaced");
    }
}

export default Company