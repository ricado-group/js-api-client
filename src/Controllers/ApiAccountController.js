import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import ApiAccountModel from '../Models/ApiAccountModel';
/**
 * Controller Class for API Accounts
 * @extends BaseGlobalModelController
 */
class ApiAccountController extends BaseGlobalModelController
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
     * @return {Promise<ApiAccountModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/api-accounts/' + id + '')
        	.then((data) => {
        		resolve(new ApiAccountModel(data));
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
     * @return {Promise<ApiAccountModel>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/api-accounts/' + id + '', json)
        	.then((data) => {
        		resolve(new ApiAccountModel(data));
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
     * @return {Promise<ApiAccountModel[]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/api-accounts')
        	.then((data) => {
        		resolve(data.map(item => new ApiAccountModel(item)));
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
     * @return {Promise<ApiAccountModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/api-accounts', json)
        	.then((data) => {
        		resolve(new ApiAccountModel(data));
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
     * @return {Promise<ApiAccountModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/api-account')
        	.then((data) => {
        		resolve(new ApiAccountModel(data));
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
     * @return {Promise<ApiAccountModel>}
     */
    static updateCurrent(json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest('/api-account', json)
        	.then((data) => {
        		resolve(new ApiAccountModel(data));
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