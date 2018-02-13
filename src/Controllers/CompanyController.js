import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import Company from '../Models/Company';
/**
 * Controller Class for Company Models. A part of the Companies Group
 * @extends GlobalModelController
 */
class CompanyController extends GlobalModelController
{

    /**
     * Company Actions [/companies/{id}]
     */

    /**
     * Retrieve a Single Company
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @return {Promise<Company>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/companies/' + id + '')
        	.then((data) => {
        		resolve(new Company(data));
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
     * @return {Promise<Company>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/companies/' + id + '', json)
        	.then((data) => {
        		resolve(new Company(data));
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
        	super.delete('/companies/' + id + '')
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
     * @return {Promise<Array[Company]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/companies')
        	.then((data) => {
        		resolve(data.map(item => new Company(item)));
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
     * @return {Promise<Company>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/companies', json)
        	.then((data) => {
        		resolve(new Company(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompanyController