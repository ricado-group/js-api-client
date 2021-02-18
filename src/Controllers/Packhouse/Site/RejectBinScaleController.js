/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import RejectBinScaleModel from '../../../Models/Packhouse/Site/RejectBinScaleModel';

/**
 * Controller Class for Reject Bin Scales
 * 
 * @class
 */
class RejectBinScaleController
{
    /**
     * Retrieve a Reject Bin Scale [GET /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Scale ID
     * @return {Promise<RejectBinScaleModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinScaleModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Reject Bin Scale [PATCH /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Scale ID
     * @param {RejectBinScaleController.UpdateData} updateData The Reject Bin Scale Update Data
     * @return {Promise<RejectBinScaleModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinScaleModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Reject Bin Scale [DELETE /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Scale ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Reject Bin Scales [GET /packhouse/sites/{siteId}/reject-bin-scales]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {RejectBinScaleController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<RejectBinScaleModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-scales`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return RejectBinScaleModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Reject Bin Scale [POST /packhouse/sites/{siteId}/reject-bin-scales]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {RejectBinScaleController.CreateData} createData The Reject Bin Scale Create Data
     * @return {Promise<RejectBinScaleModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-scales`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinScaleModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default RejectBinScaleController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} RejectBinScaleController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Reject Bin Scale belongs to
 * @property {string} [name] The Name of this Reject Bin Scale
 * @property {string} [packingLineId] The Packing Line that owns this Reject Bin Scale
 * @property {?string} [packrunSourceId] The Permanent Object that provides the Next Packrun for this Reject Bin Scale
 * @property {?number} [packrunGroup] The Packrun Group this Reject Bin Scale is a part of
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Reject Bin Scale
 * 
 * @typedef {Object} RejectBinScaleController.CreateData
 * @property {?number} [rtuId] The RTU this Reject Bin Scale belongs to
 * @property {string} name The Name of this Reject Bin Scale
 * @property {Object} points The Points used by this Reject Bin Scale
 * @property {string} packingLineId The Packing Line that owns this Reject Bin Scale
 * @property {?string} [packrunSourceId] The Permanent Object that provides the Next Packrun for this Reject Bin Scale
 * @property {?number} [packrunGroup] The Packrun Group this Reject Bin Scale is a part of
 * @property {Object[]} [sources] An Array of Sources that deliver Fruit to this Reject Bin Scale
 * @property {?number} [autoPackrunChange] The Auto Packrun Change Configuration for this Reject Bin Scale
 * @property {?Object} [freshPackIntegration] The FreshPack Integration Configuration for this Reject Bin Scale
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Reject Bin Scale
 * 
 * @typedef {Object} RejectBinScaleController.UpdateData
 * @property {string} [name] The Name of this Reject Bin Scale
 * @property {Object} [points] The Points used by this Reject Bin Scale
 * @property {string} [packingLineId] The Packing Line that owns this Reject Bin Scale
 * @property {?string} [packrunSourceId] The Permanent Object that provides the Next Packrun for this Reject Bin Scale
 * @property {?number} [packrunGroup] The Packrun Group this Reject Bin Scale is a part of
 * @property {Object[]} [sources] An Array of Sources that deliver Fruit to this Reject Bin Scale
 * @property {?number} [autoPackrunChange] The Auto Packrun Change Configuration for this Reject Bin Scale
 * @property {?Object} [freshPackIntegration] The FreshPack Integration Configuration for this Reject Bin Scale
 * @memberof Controllers.Packhouse.Site
 */