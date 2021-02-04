/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../RequestHelper';
import AlarmGroupModel from '../../Models/Site/AlarmGroupModel';

/**
 * Controller Class for Alarm Groups
 * 
 * @class
 */
class AlarmGroupController
{
    /**
     * Retrieve a Alarm Group [GET /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm Group ID
     * @return {Promise<AlarmGroupModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarm-groups/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return AlarmGroupModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Alarm Group [PATCH /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm Group ID
     * @param {AlarmGroupController.UpdateData} updateData The Alarm Group Update Data
     * @return {Promise<AlarmGroupModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/alarm-groups/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return AlarmGroupModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Alarm Group [DELETE /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm Group ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/alarm-groups/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Alarm Groups [GET /sites/{siteId}/alarm-groups]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {AlarmGroupController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<AlarmGroupModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarm-groups`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return AlarmGroupModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Alarm Group [POST /sites/{siteId}/alarm-groups]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {AlarmGroupController.CreateData} createData The Alarm Group Create Data
     * @return {Promise<AlarmGroupModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/alarm-groups`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return AlarmGroupModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default AlarmGroupController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} AlarmGroupController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Alarm Group belongs to
 * @property {string} [name] The Alarm Group Name
 * @property {number} [resetPoint] The Boolean Point used to Reset this Alarm Group
 * @memberof Controllers.Site
 */

/**
 * The Create Data for a Alarm Group
 * 
 * @typedef {Object} AlarmGroupController.CreateData
 * @property {?number} rtuId The RTU this Alarm Group belongs to
 * @property {string} name The Alarm Group Name
 * @property {number} resetPoint The Boolean Point used to Reset this Alarm Group
 * @property {Array<AlarmGroupController.ExternalResetPoint>} [externalResetPoints] An Array of Points and the States to be Written when this Alarm Group is Reset
 * @memberof Controllers.Site
 */

/**
 * The Update Data for a Alarm Group
 * 
 * @typedef {Object} AlarmGroupController.UpdateData
 * @property {string} [name] The Alarm Group Name
 * @property {number} [resetPoint] The Boolean Point used to Reset this Alarm Group
 * @property {Array<AlarmGroupController.ExternalResetPoint>} [externalResetPoints] An Array of Points and the States to be Written when this Alarm Group is Reset
 * @memberof Controllers.Site
 */

/**
 * A **ExternalResetPoint** Type
 * 
 * @typedef {Object} AlarmGroupController.ExternalResetPoint
 * @property {number} point The Point ID to be Written to
 * @property {boolean} value The Value to Write
 * @memberof Controllers.Site
 */