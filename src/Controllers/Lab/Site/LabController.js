/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import LabModel from '../../../Models/Lab/Site/LabModel';

/**
 * Controller Class for Labs
 * 
 * @class
 */
class LabController
{
    /**
     * Retrieve a Lab [GET /lab/sites/{siteId}/labs/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Lab ID
     * @return {Promise<LabModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/lab/sites/${siteId}/labs/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return LabModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Lab [PATCH /lab/sites/{siteId}/labs/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Lab ID
     * @param {LabController.UpdateData} updateData The Lab Update Data
     * @return {Promise<LabModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/lab/sites/${siteId}/labs/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return LabModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Lab [DELETE /lab/sites/{siteId}/labs/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Lab ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/lab/sites/${siteId}/labs/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Labs [GET /lab/sites/{siteId}/labs]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {LabController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<LabModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/lab/sites/${siteId}/labs`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return LabModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Lab [POST /lab/sites/{siteId}/labs]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {LabController.CreateData} createData The Lab Create Data
     * @return {Promise<LabModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/lab/sites/${siteId}/labs`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return LabModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default LabController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} LabController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Lab belongs to
 * @property {string} [name] The Lab Name
 * @memberof Controllers.Lab.Site
 */

/**
 * The Create Data for a Lab
 * 
 * @typedef {Object} LabController.CreateData
 * @property {?number} [rtuId] The RTU this Lab belongs to
 * @property {string} name The Lab Name
 * @property {string} [shortName] A Short Name for the Lab Name. Typically used in Reports and Tables showing multiple Labs
 * @property {Object} points The Points used by this Lab
 * @property {Array<LabController.RackReference>} [racks] The Rack Objects that belong to this Lab
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Lab
 * @property {?LabController.InspectIntegration} [inspectIntegration] The Inspect Integration Configuration for this Lab
 * @memberof Controllers.Lab.Site
 */

/**
 * The Update Data for a Lab
 * 
 * @typedef {Object} LabController.UpdateData
 * @property {string} [name] The Lab Name
 * @property {string} [shortName] A Short Name for the Lab Name. Typically used in Reports and Tables showing multiple Labs
 * @property {Object} [points] The Points used by this Lab
 * @property {Array<LabController.RackReference>} [racks] The Rack Objects that belong to this Lab
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Lab
 * @property {?LabController.InspectIntegration} [inspectIntegration] The Inspect Integration Configuration for this Lab
 * @memberof Controllers.Lab.Site
 */

/**
 * A **RackReference** Type
 * 
 * @typedef {Object} LabController.RackReference
 * @property {string} id ID of a Rack Object
 * @property {number} displayOrder Display Order of the Rack
 * @memberof Controllers.Lab.Site
 */

/**
 * A **InspectIntegration** Type
 * 
 * @typedef {Object} LabController.InspectIntegration
 * @property {Object} points The Points used for this Inspect Integration
 * @property {boolean} enabled Whether the Inspect Integration is Enabled on this Lab
 * @property {string} apiBaseUrl Base URL of the Inspect API
 * @memberof Controllers.Lab.Site
 */