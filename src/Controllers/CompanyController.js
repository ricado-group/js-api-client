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
     * @param {number} id - The Company ID
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Company}
     */
    static update()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Company}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Company Collection Actions [/companies]
     */

    /**
     * Retrieve a Collection of Companys
     * 
     * @static
     * @public
     * @return {Promise<Company>}
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Company}
     */
    static create()
    {
        // Code Here
    }
}

export default CompanyController