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
     * @param {string} id - The API Account ID
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
     * Update a API Account
     * 
     * @static
     * @public
     * @param {string} id - The API Account ID
     * @param {Object} json - The JSON Data to update a API Account
     * @return {Promise<ApiAccount>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/api-accounts/' + id + '', json)
        	.then((data) => {
        		resolve(new ApiAccount(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a API Account
     * 
     * @static
     * @public
     * @param {string} id - The API Account ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete('/api-accounts/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Retrieve an API Account\'s Secret
     * 
     * @static
     * @public
     * @param {string} id - The API Account ID
     * @return {Promise}
     */
    static getSecret(id)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/api-accounts/' + id + '/secret')
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * API Account Collection Actions [/api-accounts]
     */

    /**
     * Retrieve a Collection of API Accounts
     * 
     * @static
     * @public
     * @return {Promise<Array[ApiAccount]>}
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
     * Create a API Account
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new API Account
     * @return {Promise<ApiAccount>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/api-accounts', json)
        	.then((data) => {
        		resolve(new ApiAccount(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Current API Account Actions [/api-account]
     */

    /**
     * Retrieve the API Account
     * 
     * @static
     * @public
     * @return {Promise<ApiAccount>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/api-account')
        	.then((data) => {
        		resolve(new ApiAccount(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update the API Account
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data to update a API Account
     * @return {Promise<ApiAccount>}
     */
    static updateCurrent(json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest('/api-account', json)
        	.then((data) => {
        		resolve(new ApiAccount(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Retrieve the API Secret
     * 
     * @static
     * @public
     * @return {Promise}
     */
    static getCurrentSecret()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/api-account/secret')
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default ApiAccountController