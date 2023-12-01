/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import RackModel from '../../../Models/Lab/Site/RackModel';

/**
 * Controller Class for Racks
 * 
 * @class
 */
class RackController
{
    /**
     * Retrieve a Rack [GET /lab/sites/{siteId}/racks/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Rack ID
     * @return {Promise<RackModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/lab/sites/${siteId}/racks/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return RackModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Rack [PATCH /lab/sites/{siteId}/racks/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Rack ID
     * @param {RackController.UpdateData} updateData The Rack Update Data
     * @return {Promise<RackModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/lab/sites/${siteId}/racks/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return RackModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Rack [DELETE /lab/sites/{siteId}/racks/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Rack ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/lab/sites/${siteId}/racks/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Racks [GET /lab/sites/{siteId}/racks]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {RackController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<RackModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/lab/sites/${siteId}/racks`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return RackModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Rack [POST /lab/sites/{siteId}/racks]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {RackController.CreateData} createData The Rack Create Data
     * @return {Promise<RackModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/lab/sites/${siteId}/racks`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return RackModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default RackController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} RackController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Rack belongs to
 * @property {string} [name] The Name of this Rack
 * @property {string} [labId] The Lab that owns this Rack
 * @memberof Controllers.Lab.Site
 */

/**
 * The Create Data for a Rack
 * 
 * @typedef {Object} RackController.CreateData
 * @property {?number} [rtuId] The RTU this Rack belongs to
 * @property {string} name The Name of this Rack
 * @property {{disabled: number}} points The Points used by this Rack
 * @property {string} labId The Lab that owns this Rack
 * @property {Array<RackController.VerticalLevel>} [verticalLevels] The Vertical Levels Defined for this Rack
 * @property {boolean} [invertVerticalLevels] Whether the Vertical Levels for this Rack should be Inverted. By Default, Vertical Levels go from the Lowest Level upwards
 * @property {Array<RackController.HorizontalPosition>} [horizontalPositions] The Horizontal Positions defined for this Rack
 * @property {boolean} [invertHorizontalPositions] Whether the Horizontal Positions for this Rack should be Inverted. By Default, Horizontal Positions go from Left to Right
 * @memberof Controllers.Lab.Site
 */

/**
 * The Update Data for a Rack
 * 
 * @typedef {Object} RackController.UpdateData
 * @property {string} [name] The Name of this Rack
 * @property {{disabled: number}} [points] The Points used by this Rack
 * @property {string} [labId] The Lab that owns this Rack
 * @property {Array<RackController.VerticalLevel>} [verticalLevels] The Vertical Levels Defined for this Rack
 * @property {boolean} [invertVerticalLevels] Whether the Vertical Levels for this Rack should be Inverted. By Default, Vertical Levels go from the Lowest Level upwards
 * @property {Array<RackController.HorizontalPosition>} [horizontalPositions] The Horizontal Positions defined for this Rack
 * @property {boolean} [invertHorizontalPositions] Whether the Horizontal Positions for this Rack should be Inverted. By Default, Horizontal Positions go from Left to Right
 * @memberof Controllers.Lab.Site
 */

/**
 * A **VerticalLevel** Type
 * 
 * @typedef {Object} RackController.VerticalLevel
 * @property {string} name A Name for this Vertical Level
 * @memberof Controllers.Lab.Site
 */

/**
 * A **HorizontalPosition** Type
 * 
 * @typedef {Object} RackController.HorizontalPosition
 * @property {string} name A Name for this Horizontal Position
 * @memberof Controllers.Lab.Site
 */