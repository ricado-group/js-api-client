/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import PackingLineModel from '../../../Models/Packhouse/Site/PackingLineModel';

/**
 * Controller Class for Packing Lines
 * 
 * @class
 */
class PackingLineController
{
    /**
     * Retrieve a Packing Line [GET /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @return {Promise<PackingLineModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Packing Line [PATCH /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @param {PackingLineController.UpdateData} updateData The Packing Line Update Data
     * @return {Promise<PackingLineModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Packing Line [DELETE /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Packing Lines [GET /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] The RTU this Packing Line belongs to
     * @param {string} [queryParameters.name] The Packing Line Name
     * @return {Promise<PackingLineModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return PackingLineModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Packing Line [POST /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PackingLineController.CreateData} createData The Packing Line Create Data
     * @return {Promise<PackingLineModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/packing-lines`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default PackingLineController;

/**
 * The Create Data for a Packing Line
 * 
 * @typedef {Object} PackingLineController.CreateData
 * @property {?number} rtuId The RTU this Packing Line belongs to
 * @property {string} name The Packing Line Name
 * @property {Object} points The Points used by this Packing Line
 * @property {Object[]} [sizers] The Sizer Objects that belong to this Packing Line
 * @property {Object[]} [binTips] The Bin Tip Objects that belong to this this Packing Line
 * @property {Object[]} [rejectBinScales] The Reject Bin Scale Objects that belong to this Packing Line
 * @property {?Object} automation The Automation Object for this Packing Line
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Packing Line
 * @property {Object[]} [classTypes] The Class Types that are defined for this Packing Line
 * @property {?Object} freshPackIntegration The FreshPack Integration Configuration for this Packing Line
 * @property {?Object} freshQualityIntegration The FreshQuality Integration Configuration for this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Packing Line
 * 
 * @typedef {Object} PackingLineController.UpdateData
 * @property {string} [name] The Packing Line Name
 * @property {Object} [points] The Points used by this Packing Line
 * @property {Object[]} [sizers] The Sizer Objects that belong to this Packing Line
 * @property {Object[]} [binTips] The Bin Tip Objects that belong to this this Packing Line
 * @property {Object[]} [rejectBinScales] The Reject Bin Scale Objects that belong to this Packing Line
 * @property {?Object} [automation] The Automation Object for this Packing Line
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Packing Line
 * @property {Object[]} [classTypes] The Class Types that are defined for this Packing Line
 * @property {?Object} [freshPackIntegration] The FreshPack Integration Configuration for this Packing Line
 * @property {?Object} [freshQualityIntegration] The FreshQuality Integration Configuration for this Packing Line
 * @memberof Controllers.Packhouse.Site
 */