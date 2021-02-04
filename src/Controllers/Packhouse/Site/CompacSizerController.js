/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerModel from '../../../Models/Packhouse/Site/CompacSizerModel';

/**
 * Controller Class for Compac Sizers
 * 
 * @class
 */
class CompacSizerController
{
    /**
     * Retrieve a Compac Sizer [GET /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @return {Promise<CompacSizerModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer [PATCH /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @param {CompacSizerController.UpdateData} updateData The Compac Sizer Update Data
     * @return {Promise<CompacSizerModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer [DELETE /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizers [GET /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<CompacSizerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompacSizerModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer [POST /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerController.CreateData} createData The Compac Sizer Create Data
     * @return {Promise<CompacSizerModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizers`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} CompacSizerController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Compac Sizer belongs to
 * @property {string} [name] The Compac Sizer Name
 * @property {string} [sizerType] The Sizer Type
 * @property {string} [packingLineId] The Packing Line ID this Compac Sizer belongs to
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Compac Sizer
 * 
 * @typedef {Object} CompacSizerController.CreateData
 * @property {?number} rtuId The RTU this Compac Sizer belongs to
 * @property {string} name The Compac Sizer Name
 * @property {Object[]} [lanes] The Lanes defined for this Compac Sizer
 * @property {Object} points The Points used by this Compac Sizer
 * @property {Object[]} [outlets] The Outlets defined for this Compac Sizer
 * @property {string} sizerType The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this Compac Sizer
 * @property {Object[]} [fruitSizes] The Fruit Sizes defined and handled by this Compac Sizer
 * @property {string} packingLineId The Packing Line ID this Compac Sizer belongs to
 * @property {?Object} freshPackIntegration The FreshPack Integration Configuration for this Compac Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer
 * 
 * @typedef {Object} CompacSizerController.UpdateData
 * @property {string} [name] The Compac Sizer Name
 * @property {Object[]} [lanes] The Lanes defined for this Compac Sizer
 * @property {Object} [points] The Points used by this Compac Sizer
 * @property {Object[]} [outlets] The Outlets defined for this Compac Sizer
 * @property {string} [sizerType] The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this Compac Sizer
 * @property {Object[]} [fruitSizes] The Fruit Sizes defined and handled by this Compac Sizer
 * @property {string} [packingLineId] The Packing Line ID this Compac Sizer belongs to
 * @property {?Object} [freshPackIntegration] The FreshPack Integration Configuration for this Compac Sizer
 * @memberof Controllers.Packhouse.Site
 */