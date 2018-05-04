import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import CompanyModel from '../Models/CompanyModel';
/**
 * Controller Class for Companys
 * @extends BaseGlobalModelController
 */
class CompanyController extends BaseGlobalModelController {

    /**
     * Company Actions [/companies/{id}]
     */

    /**
     * Retrieve a Single Company
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @return {Promise<CompanyModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/companies/${id}`)
        	.then((data) => {
        		resolve(new CompanyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Company
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @param {Object} json - The JSON Data to update a Company
     * @return {Promise<CompanyModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/companies/${id}`, json)
        	.then((data) => {
        		resolve(new CompanyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Company
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/companies/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Company Collection Actions [/companies]
     */

    /**
     * Retrieve a Collection of Companys
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<CompanyModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/companies`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new CompanyModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Company
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Company
     * @return {Promise<CompanyModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/companies`, json)
        	.then((data) => {
        		resolve(new CompanyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompanyController;