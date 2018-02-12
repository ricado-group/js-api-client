import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import ApiAccount from '../Models/ApiAccount';
/**
 * Controller Class for API Account Models. A part of the API Accounts Group
 * @extends GlobalModelController
 */
class ApiAccountController extends GlobalModelController
{

    /**
     * API Account Actions [/api-accounts/{id}]
     */

    /**
     * Retrieve a Single API Account
     * 
     * @static
     * @public
     * @param {number} id - The API Account ID
     * @return {Promise<ApiAccount>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/api-accounts/' + id + '')
        	.then((data) => {
        		resolve(new ApiAccount(data));
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
     * @return {RICADO\Models\ApiAccount}
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
     * @return {RICADO\Models\ApiAccount}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\ApiAccount}
     */
    static getSecret()
    {
        // Code Here
    }

    /**
     * API Account Collection Actions [/api-accounts]
     */

    /**
     * Retrieve a Collection of API Accounts
     * 
     * @static
     * @public
     * @return {Promise<ApiAccount>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/api-accounts')
        	.then((data) => {
        		resolve(data.map(item => new ApiAccount(item)));
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
     * @return {RICADO\Models\ApiAccount}
     */
    static create()
    {
        // Code Here
    }

    /**
     * Current API Account Actions [/api-account]
     */

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\ApiAccount}
     */
    static getCurrent()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\ApiAccount}
     */
    static updateCurrent()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\ApiAccount}
     */
    static getCurrentSecret()
    {
        // Code Here
    }
}

export default ApiAccountController