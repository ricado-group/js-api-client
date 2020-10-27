/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerModel from '../../../Models/Packhouse/Site/CompacSizerModel';

/**
 * Controller Class for Compac Sizers
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
                resolve(new CompacSizerModel(result, siteId));
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
                resolve(new CompacSizerModel(result, siteId));
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
     * List all Compac Sizers [GET /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] The RTU this Compac Sizer belongs to
     * @param {string} [queryParameters.name] The Compac Sizer Name
     * @param {string} [queryParameters.sizerType] The Sizer Type
     * @param {string} [queryParameters.packingLineId] The Packing Line ID this Compac Sizer belongs to
     * @return {Promise<CompacSizerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new CompacSizerModel(resultItem, siteId)));
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
                resolve(new CompacSizerModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerController;

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
 */