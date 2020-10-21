import BaseModel from '../Models/BaseModel';
import CompanyController from '../Controllers/CompanyController';

/**
 * Model Class for a Company
 * @hideconstructor
 * @extends BaseModel
 */
class CompanyModel extends BaseModel
{
    /**
     * CompanyModel Constructor
     * 
     * @public
     * @param {Object} json - The Company Properties
     * @param {string} json.displayName - The Company Display Name
     * @param {string} json.legalName - The Company Legal Name
     */
    constructor(json)
    {
        super(json);
        
        /**
         * @type {Object} The Properties to Update for a Company
         * @private
         */
        this._updateJson = {};
    }

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
     * Update this **Company**
     * 
     * @public
     * @return {Promise<CompanyModel>}
     */
    update()
    {
        return CompanyController.update(this._json.id, this._updateJson);
    }

    /**
     * Delete this **Company**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return CompanyController.delete(this._json.id);
    }
}

export default CompanyModel;