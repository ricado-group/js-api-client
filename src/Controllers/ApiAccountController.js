/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import ApiAccountModel from '../Models/ApiAccountModel';

/**
 * Controller Class for API Accounts
 */
class ApiAccountController
{
    /**
     * Retrieve the Current API Account [GET /api-account]
     * 
     * @static
     * @public
     * @return {Promise<ApiAccountModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-account`)
            .then((result) => {
                resolve(new ApiAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update the Current API Account [PATCH /api-account]
     * 
     * @static
     * @public
     * @param {ApiAccountController.UpdateData} updateData The API Account Update Data
     * @return {Promise<ApiAccountModel>}
     */
    static updateCurrent(updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/api-account`, updateData)
            .then((result) => {
                resolve(new ApiAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve the Secret for the Current API Account [GET /api-account/secret]
     * 
     * @static
     * @public
     * @return {Promise<string>}
     */
    static getCurrentSecret()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-account/secret`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a API Account [GET /api-accounts/{id}]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @return {Promise<ApiAccountModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts/${id}`)
            .then((result) => {
                resolve(new ApiAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a API Account [PATCH /api-accounts/{id}]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @param {ApiAccountController.UpdateData} updateData The API Account Update Data
     * @return {Promise<ApiAccountModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/api-accounts/${id}`, updateData)
            .then((result) => {
                resolve(new ApiAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a API Account [DELETE /api-accounts/{id}]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/api-accounts/${id}`)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve the Secret of an API Account [GET /api-accounts/{id}/secret]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @return {Promise<string>}
     */
    static getSecret(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts/${id}/secret`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve the Policies Assigned to an API Account [GET /api-accounts/{id}/policies]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @return {Promise<string[]>}
     */
    static getPolicies(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts/${id}/policies`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Set the Policies Assigned to an API Account [POST /api-accounts/{id}/policies]
     * 
     * @static
     * @public
     * @param {string} id The API Account ID
     * @param {string[]} requestData An Account Policy ID
     * @return {Promise<boolean>}
     */
    static setPolicies(id, requestData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/api-accounts/${id}/policies`, requestData)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all API Accounts [GET /api-accounts]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {?string} [queryParameters.key] API Key
     * @param {string} [queryParameters.name] The API Account Name
     * @param {string} [queryParameters.companyId] The Company this API Account belongs to
     * @return {Promise<ApiAccountModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new ApiAccountModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a API Account [POST /api-accounts]
     * 
     * @static
     * @public
     * @param {ApiAccountController.CreateData} createData The API Account Create Data
     * @return {Promise<ApiAccountModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/api-accounts`, createData)
            .then((result) => {
                resolve(new ApiAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default ApiAccountController;

/**
 * The Create Data for a API Account
 * 
 * @typedef {Object} ApiAccountController.CreateData
 * @property {?string} key API Key
 * @property {string} name The API Account Name
 * @property {string} companyId The Company this API Account belongs to
 * @property {string[]} [policies] The Policies that apply to this API Account
 */

/**
 * The Update Data for a API Account
 * 
 * @typedef {Object} ApiAccountController.UpdateData
 * @property {?string} [key] API Key
 * @property {string} [name] The API Account Name
 */