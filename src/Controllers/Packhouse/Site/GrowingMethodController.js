/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import GrowingMethodModel from '../../../Models/Packhouse/Site/GrowingMethodModel';

/**
 * Controller Class for Growing Methods
 * 
 * @class
 */
class GrowingMethodController
{
    /**
     * Retrieve a Growing Method [GET /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Growing Method ID
     * @return {Promise<GrowingMethodModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return GrowingMethodModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Growing Method [PATCH /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Growing Method ID
     * @param {GrowingMethodController.UpdateData} updateData The Growing Method Update Data
     * @return {Promise<GrowingMethodModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return GrowingMethodModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Growing Method [DELETE /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Growing Method ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Growing Methods [GET /packhouse/sites/{siteId}/growing-methods]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string=} queryParameters.code The Growing Method Code
     * @param {string=} queryParameters.name The Growing Method Name
     * @return {Promise<GrowingMethodModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/growing-methods`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return GrowingMethodModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Growing Method [POST /packhouse/sites/{siteId}/growing-methods]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {GrowingMethodController.CreateData} createData The Growing Method Create Data
     * @return {Promise<GrowingMethodModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/growing-methods`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return GrowingMethodModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default GrowingMethodController;

/**
 * The Create Data for a Growing Method
 * 
 * @typedef {Object} GrowingMethodController.CreateData
 * @property {string} [code] The Growing Method Code
 * @property {string} name The Growing Method Name
 * @property {string} description The Growing Method Description
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Growing Method
 * 
 * @typedef {Object} GrowingMethodController.UpdateData
 * @property {string} [name] The Growing Method Name
 * @property {string} [description] The Growing Method Description
 * @memberof Controllers.Packhouse.Site
 */