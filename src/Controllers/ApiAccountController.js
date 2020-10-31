/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import ApiAccountModel from '../Models/ApiAccountModel';

/**
 * Controller Class for API Accounts
 * 
 * @class
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
                let resolveValue = (function(){
                    return ApiAccountModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
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
                let resolveValue = (function(){
                    return ApiAccountModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
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
                let resolveValue = (function(){
                    if(typeof result !== 'string')
                    {
                        return String(result);
                    }
                
                    return result;
                }());
                
                resolve(resolveValue);
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
                let resolveValue = (function(){
                    return ApiAccountModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
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
                let resolveValue = (function(){
                    return ApiAccountModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
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
                resolve(result ?? true);
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
                let resolveValue = (function(){
                    if(typeof result !== 'string')
                    {
                        return String(result);
                    }
                
                    return result;
                }());
                
                resolve(resolveValue);
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
     * @return {Promise<{policies: string[]}>}
     */
    static getPolicies(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts/${id}/policies`)
            .then((result) => {
                let resolveValue = (function(){
                    let resultObject = {};
                    
                    if(typeof result === 'object' && 'policies' in result)
                    {
                        resultObject.policies = (function(){
                            if(Array.isArray(result.policies) !== true)
                            {
                                return [];
                            }
                
                            return result.policies.map((policiesItem) => {
                                return (function(){
                                    if(typeof policiesItem !== 'string')
                                    {
                                        return String(policiesItem);
                                    }
                
                                    return policiesItem;
                                }());
                            });
                        }());
                    }
                    else
                    {
                        resultObject.policies = [];
                    }
                
                    return resultObject;
                }());
                
                resolve(resolveValue);
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
     * @param {string[]} policies An Array of Account Policy IDs
     * @return {Promise<boolean>}
     */
    static setPolicies(id, policies)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/api-accounts/${id}/policies`, {policies})
            .then((result) => {
                resolve(result ?? true);
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
     * @param {string} [queryParameters.name] The API Account Name
     * @param {string} [queryParameters.companyId] The Company this API Account belongs to
     * @return {Promise<ApiAccountModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/api-accounts`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return ApiAccountModel.fromJSON(resultItem);
                        }());
                    });
                }());
                
                resolve(resolveValue);
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
                let resolveValue = (function(){
                    return ApiAccountModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
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
 * @property {string} name The API Account Name
 * @property {string} companyId The Company this API Account belongs to
 * @property {string[]} [policies] The Policies that apply to this API Account
 * @memberof Controllers
 */

/**
 * The Update Data for a API Account
 * 
 * @typedef {Object} ApiAccountController.UpdateData
 * @property {string} [name] The API Account Name
 * @memberof Controllers
 */