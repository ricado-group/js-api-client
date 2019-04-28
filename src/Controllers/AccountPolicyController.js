import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import AccountPolicyModel from '../Models/AccountPolicyModel';
/**
 * Controller Class for Account Policies
 * @extends BaseGlobalModelController
 */
class AccountPolicyController extends BaseGlobalModelController {

    /**
     * Account Policy Actions [/account-policies/{id}]
     */

    /**
     * Retrieve a Single Account Policy
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @return {Promise<AccountPolicyModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/account-policies/${id}`)
        	.then((data) => {
        		resolve(new AccountPolicyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Account Policy
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @param {Object} json - The JSON Data to update a Account Policy
     * @return {Promise<AccountPolicyModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/account-policies/${id}`, json)
        	.then((data) => {
        		resolve(new AccountPolicyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Account Policy
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/account-policies/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Account Policy Collection Actions [/account-policies]
     */

    /**
     * Retrieve a Collection of Account Policies
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<AccountPolicyModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/account-policies`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new AccountPolicyModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Account Policy
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Account Policy
     * @return {Promise<AccountPolicyModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/account-policies`, json)
        	.then((data) => {
        		resolve(new AccountPolicyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default AccountPolicyController;