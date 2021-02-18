/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../RequestHelper';
import PointModel from '../../Models/Site/PointModel';

/**
 * Controller Class for Points
 * 
 * @class
 */
class PointController
{
    /**
     * Retrieve all Point Values [GET /sites/{siteId}/points/values]
     * 
     * Retrieves Values for all Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PointController.GetAllValuesQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<Array<PointController.PointValueItem>>}
     */
    static getAllValues(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/values`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            let resultItemObject = {};
                            
                            if(typeof resultItem === 'object' && 'id' in resultItem)
                            {
                                resultItemObject.id = (function(){
                                    if(typeof resultItem.id !== 'number')
                                    {
                                        return Number.isInteger(Number(resultItem.id)) ? Number(resultItem.id) : Math.floor(Number(resultItem.id));
                                    }
                
                                    return Number.isInteger(resultItem.id) ? resultItem.id : Math.floor(resultItem.id);
                                }());
                            }
                            else
                            {
                                resultItemObject.id = 0;
                            }
                            
                            if(typeof resultItem === 'object' && 'value' in resultItem)
                            {
                                resultItemObject.value = (function(){
                                    return resultItem.value;
                                }());
                            }
                            else
                            {
                                resultItemObject.value = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'timestamp' in resultItem)
                            {
                                resultItemObject.timestamp = (function(){
                                    if(typeof resultItem.timestamp !== 'string')
                                    {
                                        return new Date(String(resultItem.timestamp));
                                    }
                
                                    return new Date(resultItem.timestamp);
                                }());
                            }
                            else
                            {
                                resultItemObject.timestamp = new Date();
                            }
                
                            return resultItemObject;
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Set specific Point Values [POST /sites/{siteId}/points/values]
     * 
     * Sets Values for specified Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Array<PointController.SetPointValueItem>} objectItems An Array of Object Items
     * @return {Promise<boolean>}
     */
    static setValues(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/values`, objectItems)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve all Point History [GET /sites/{siteId}/points/history]
     * 
     * Retrieves History for all Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {number[]} pointIds A List of Point IDs to Filter by
     * @param {PointController.GetAllHistoryQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<Array<PointController.PointHistoryItem>>}
     */
    static getAllHistory(siteId, pointIds, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/history`, Object.assign(queryParameters, {pointIds}))
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            let resultItemObject = {};
                            
                            if(typeof resultItem === 'object' && 'id' in resultItem)
                            {
                                resultItemObject.id = (function(){
                                    if(typeof resultItem.id !== 'number')
                                    {
                                        return Number.isInteger(Number(resultItem.id)) ? Number(resultItem.id) : Math.floor(Number(resultItem.id));
                                    }
                
                                    return Number.isInteger(resultItem.id) ? resultItem.id : Math.floor(resultItem.id);
                                }());
                            }
                            else
                            {
                                resultItemObject.id = 0;
                            }
                            
                            if(typeof resultItem === 'object' && 'value' in resultItem)
                            {
                                resultItemObject.value = (function(){
                                    return resultItem.value;
                                }());
                            }
                            else
                            {
                                resultItemObject.value = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'timestamp' in resultItem)
                            {
                                resultItemObject.timestamp = (function(){
                                    if(typeof resultItem.timestamp !== 'string')
                                    {
                                        return new Date(String(resultItem.timestamp));
                                    }
                
                                    return new Date(resultItem.timestamp);
                                }());
                            }
                            else
                            {
                                resultItemObject.timestamp = new Date();
                            }
                
                            return resultItemObject;
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Add Point History [POST /sites/{siteId}/points/history]
     * 
     * Add Historical Values for specified Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Array<PointController.AddPointHistoryItem>} objectItems An Array of Object Items
     * @return {Promise<boolean>}
     */
    static addPointHistory(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/history`, objectItems)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve all Point Events [GET /sites/{siteId}/points/events]
     * 
     * Retrieves Events for all Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {number[]} pointIds A List of Point IDs to Filter by
     * @param {PointController.GetAllEventsQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<Array<PointController.PointEventItem>>}
     */
    static getAllEvents(siteId, pointIds, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/events`, Object.assign(queryParameters, {pointIds}))
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            let resultItemObject = {};
                            
                            if(typeof resultItem === 'object' && 'id' in resultItem)
                            {
                                resultItemObject.id = (function(){
                                    if(typeof resultItem.id !== 'number')
                                    {
                                        return Number.isInteger(Number(resultItem.id)) ? Number(resultItem.id) : Math.floor(Number(resultItem.id));
                                    }
                
                                    return Number.isInteger(resultItem.id) ? resultItem.id : Math.floor(resultItem.id);
                                }());
                            }
                            else
                            {
                                resultItemObject.id = 0;
                            }
                            
                            if(typeof resultItem === 'object' && 'oldValue' in resultItem)
                            {
                                resultItemObject.oldValue = (function(){
                                    return resultItem.oldValue;
                                }());
                            }
                            else
                            {
                                resultItemObject.oldValue = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'newValue' in resultItem)
                            {
                                resultItemObject.newValue = (function(){
                                    return resultItem.newValue;
                                }());
                            }
                            else
                            {
                                resultItemObject.newValue = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'timestamp' in resultItem)
                            {
                                resultItemObject.timestamp = (function(){
                                    if(typeof resultItem.timestamp !== 'string')
                                    {
                                        return new Date(String(resultItem.timestamp));
                                    }
                
                                    return new Date(resultItem.timestamp);
                                }());
                            }
                            else
                            {
                                resultItemObject.timestamp = new Date();
                            }
                
                            return resultItemObject;
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Add Point Events [POST /sites/{siteId}/points/events]
     * 
     * Add Value Change Events for specified Points
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Array<PointController.AddPointEventItem>} objectItems An Array of Object Items
     * @return {Promise<boolean>}
     */
    static addPointEvents(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/events`, objectItems)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Point [GET /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {number} id The Point ID
     * @return {Promise<PointModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return PointModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Point [PATCH /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {number} id The Point ID
     * @param {PointController.UpdateData} updateData The Point Update Data
     * @return {Promise<PointModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/points/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return PointModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Point [DELETE /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {number} id The Point ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/points/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Points [GET /sites/{siteId}/points]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PointController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<PointModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return PointModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Point [POST /sites/{siteId}/points]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PointController.CreateData} createData The Point Create Data
     * @return {Promise<PointModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return PointModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default PointController;

/**
 * The Optional Query Parameters for the getAllValues Function
 * 
 * @typedef {Object} PointController.GetAllValuesQueryParameters
 * @property {number[]} [pointIds] A List of Point IDs to Filter by
 * @memberof Controllers.Site
 */

/**
 * The Optional Query Parameters for the getAllHistory Function
 * 
 * @typedef {Object} PointController.GetAllHistoryQueryParameters
 * @property {Date} [timestampBegin] The Beginning Timestamp of the Point History Results. Defaults to 24 Hours ago
 * @property {Date} [timestampEnd] The End Timestamp of the Point History Results. Defaults to Now
 * @memberof Controllers.Site
 */

/**
 * The Optional Query Parameters for the getAllEvents Function
 * 
 * @typedef {Object} PointController.GetAllEventsQueryParameters
 * @property {Date} [timestampBegin] The Beginning Timestamp of the Point Event Results. Defaults to 24 Hours ago
 * @property {Date} [timestampEnd] The End Timestamp of the Point Event Results. Defaults to Now
 * @memberof Controllers.Site
 */

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} PointController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Point belongs to
 * @property {?number} [pluginId] The Plugin ID
 * @property {string} [name] The Point Name
 * @property {string} [type] The Point Type
 * @property {string} [valueType] The Point's Value Type
 * @property {string} [permissions] The Permissions
 * @property {boolean} [enabled] Whether the Point is Enabled
 * @memberof Controllers.Site
 */

/**
 * The Create Data for a Point
 * 
 * @typedef {Object} PointController.CreateData
 * @property {?number} [rtuId] The RTU this Point belongs to
 * @property {?number} [pluginId] The Plugin ID
 * @property {string} name The Point Name
 * @property {string} type The Point Type
 * @property {string} valueType The Point's Value Type
 * @property {string} [permissions] The Permissions
 * @property {boolean} [enabled] Whether the Point is Enabled
 * @property {Object} [settings] The Point Settings
 * @memberof Controllers.Site
 */

/**
 * The Update Data for a Point
 * 
 * @typedef {Object} PointController.UpdateData
 * @property {?number} [pluginId] The Plugin ID
 * @property {string} [name] The Point Name
 * @property {string} [type] The Point Type
 * @property {string} [valueType] The Point's Value Type
 * @property {string} [permissions] The Permissions
 * @property {boolean} [enabled] Whether the Point is Enabled
 * @property {Object} [settings] The Point Settings
 * @memberof Controllers.Site
 */

/**
 * A **PointValueItem** Type
 * 
 * @typedef {Object} PointController.PointValueItem
 * @property {number} id The Point ID
 * @property {any} value The Point Value
 * @property {Date} timestamp When the Point Value last changed
 * @memberof Controllers.Site
 */

/**
 * A **SetPointValueItem** Type
 * 
 * @typedef {Object} PointController.SetPointValueItem
 * @property {number} id The Point ID
 * @property {any} value The Point Value
 * @property {Date} [timestamp] An Optional Timestamp of when the Point Value last changed. Defaults to Now
 * @memberof Controllers.Site
 */

/**
 * A **PointHistoryItem** Type
 * 
 * @typedef {Object} PointController.PointHistoryItem
 * @property {number} id The Point ID
 * @property {any} value The Point Value
 * @property {Date} timestamp The Timestamp for the Point Value
 * @memberof Controllers.Site
 */

/**
 * A **AddPointHistoryItem** Type
 * 
 * @typedef {Object} PointController.AddPointHistoryItem
 * @property {number} id The Point ID
 * @property {any} value The Point Value
 * @property {Date} [timestamp] The Optional Timestamp for the Point Value. Defaults to Now
 * @memberof Controllers.Site
 */

/**
 * A **PointEventItem** Type
 * 
 * @typedef {Object} PointController.PointEventItem
 * @property {number} id The Point ID
 * @property {any} oldValue The Previous Point Value
 * @property {any} newValue The New Point Value
 * @property {Date} timestamp The Timestamp for the Point Event
 * @memberof Controllers.Site
 */

/**
 * A **AddPointEventItem** Type
 * 
 * @typedef {Object} PointController.AddPointEventItem
 * @property {number} id The Point ID
 * @property {any} oldValue The Previous Point Value
 * @property {any} newValue The New Point Value
 * @property {Date} [timestamp] The Timestamp for the Point Event. Defaults to Now
 * @memberof Controllers.Site
 */