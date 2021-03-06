/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerOutletTypeModel from '../../../Models/Packhouse/Site/CompacSizerOutletTypeModel';

/**
 * Controller Class for Compac Sizer Outlet Types
 * 
 * @class
 */
class CompacSizerOutletTypeController
{
    /**
     * Retrieve a Compac Sizer Outlet Type [GET /packhouse/sites/{siteId}/compac-sizer-outlet-types/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Outlet Type ID
     * @return {Promise<CompacSizerOutletTypeModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-types/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerOutletTypeModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer Outlet Type [PATCH /packhouse/sites/{siteId}/compac-sizer-outlet-types/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Outlet Type ID
     * @param {CompacSizerOutletTypeController.UpdateData} updateData The Compac Sizer Outlet Type Update Data
     * @return {Promise<CompacSizerOutletTypeModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-types/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerOutletTypeModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer Outlet Type [DELETE /packhouse/sites/{siteId}/compac-sizer-outlet-types/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Outlet Type ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-types/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizer Outlet Types [GET /packhouse/sites/{siteId}/compac-sizer-outlet-types]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerOutletTypeController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<CompacSizerOutletTypeModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-types`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompacSizerOutletTypeModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer Outlet Type [POST /packhouse/sites/{siteId}/compac-sizer-outlet-types]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerOutletTypeController.CreateData} createData The Compac Sizer Outlet Type Create Data
     * @return {Promise<CompacSizerOutletTypeModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-types`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerOutletTypeModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerOutletTypeController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} CompacSizerOutletTypeController.GetAllQueryParameters
 * @property {string} [name] The Name for this Dynamic Outlet Type
 * @property {string} [type] The Generic Outlet Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Compac Sizer Outlet Type
 * 
 * @typedef {Object} CompacSizerOutletTypeController.CreateData
 * @property {string} [name] The Name for this Dynamic Outlet Type
 * @property {string} type The Generic Outlet Type
 * @property {string} [description] An Optional Description for this Dynamic Outlet Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer Outlet Type
 * 
 * @typedef {Object} CompacSizerOutletTypeController.UpdateData
 * @property {string} [type] The Generic Outlet Type
 * @property {string} [description] An Optional Description for this Dynamic Outlet Type
 * @memberof Controllers.Packhouse.Site
 */