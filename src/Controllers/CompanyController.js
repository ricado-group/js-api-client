/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import CompanyModel from '../Models/CompanyModel';

/**
 * Controller Class for Companies
 * 
 * @class
 */
class CompanyController
{
    /**
     * Retrieve a Company [GET /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Company ID
     * @return {Promise<CompanyModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/companies/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompanyModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Company [PATCH /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Company ID
     * @param {CompanyController.UpdateData} updateData The Company Update Data
     * @return {Promise<CompanyModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/companies/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompanyModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Company [DELETE /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Company ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/companies/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Companies [GET /companies]
     * 
     * @static
     * @public
     * @param {CompanyController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<CompanyModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/companies`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompanyModel.fromJSON(resultItem);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Company [POST /companies]
     * 
     * @static
     * @public
     * @param {CompanyController.CreateData} createData The Company Create Data
     * @return {Promise<CompanyModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/companies`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompanyModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompanyController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} CompanyController.GetAllQueryParameters
 * @property {string} [displayName] The Company Display Name
 * @property {string} [legalName] The Company Legal Name
 * @memberof Controllers
 */

/**
 * The Create Data for a Company
 * 
 * @typedef {Object} CompanyController.CreateData
 * @property {string} displayName The Company Display Name
 * @property {string} legalName The Company Legal Name
 * @memberof Controllers
 */

/**
 * The Update Data for a Company
 * 
 * @typedef {Object} CompanyController.UpdateData
 * @property {string} [displayName] The Company Display Name
 * @property {string} [legalName] The Company Legal Name
 * @memberof Controllers
 */