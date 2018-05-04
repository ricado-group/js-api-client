import BaseModel from '../Models/BaseModel';
import CompanyController from '../Controllers/CompanyController';

/**
 * Model Class for a Company
 * @extends BaseModel
 */
class CompanyModel extends BaseModel {
    /**
     * CompanyModel Constructor
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

    set legalName(legalName)
    {
        this._json.legalName = legalName;
        this._updateJson.legalName = legalName;
    }

    /**
     * Whether the Company has been deleted
     * 
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
     * @return {Promise<CompanyModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || CompanyController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Company
     * 
     * @public
     * @return {Promise<CompanyModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || CompanyController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The CompanyModel cannot be Replaced");
    }
}

export default CompanyModel;