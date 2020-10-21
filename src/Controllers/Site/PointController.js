import RequestHelper from '../../RequestHelper';
import PointModel from '../../Models/Site/PointModel';

/**
 * Controller Class for Points
 */
class PointController
{
    // Point Values Actions [/sites/{siteId}/points/values]

    /**
     * Retrieve all Point Values [GET /sites/{siteId}/points/values]
     * 
     * Retrieves Values for all Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {number[]} [queryParameters.pointIds] - A List of Point IDs to Filter by
     * @return {Promise<{id: number, value: any, timestamp: Date}[]>}
     */
    static getAllValues(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/values`, queryParameters)
            .then((result) => {
                resolve(result);
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
     * @param {number} siteId - The Site ID
     * @param {Object[]} objectItems - An Array of PointValueItem Properties
     * @param {number} objectItems[].id - The Point ID
     * @param {any} objectItems[].value - The Point Value
     * @param {Date} [objectItems[].timestamp] - An Optional Timestamp of when the Point Value last changed. Defaults to Now
     * @return {Promise<boolean>}
     */
    static setValues(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/values`, objectItems)
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

    // Point History Actions [/sites/{siteId}/points/history]

    /**
     * Retrieve all Point History [GET /sites/{siteId}/points/history]
     * 
     * Retrieves History for all Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number[]} pointIds - A List of Point IDs to Filter by
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {Date} [queryParameters.timestampBegin] - The Beginning Timestamp of the Point History Results. Defaults to 24 Hours ago
     * @param {Date} [queryParameters.timestampEnd] - The End Timestamp of the Point History Results. Defaults to Now
     * @return {Promise<{id: number, value: any, timestamp: Date}[]>}
     */
    static getAllHistory(siteId, pointIds, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/history`, Object.assign(queryParameters, {pointIds}))
            .then((result) => {
                resolve(result);
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
     * @param {number} siteId - The Site ID
     * @param {Object[]} objectItems - An Array of AddPointHistoryItem Properties
     * @param {number} objectItems[].id - The Point ID
     * @param {any} objectItems[].value - The Point Value
     * @param {Date} [objectItems[].timestamp] - The Optional Timestamp for the Point Value. Defaults to Now
     * @return {Promise<boolean>}
     */
    static addPointHistory(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/history`, objectItems)
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

    // Point Events Actions [/sites/{siteId}/points/events]

    /**
     * Retrieve all Point Events [GET /sites/{siteId}/points/events]
     * 
     * Retrieves Events for all Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number[]} pointIds - A List of Point IDs to Filter by
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {Date} [queryParameters.timestampBegin] - The Beginning Timestamp of the Point Event Results. Defaults to 24 Hours ago
     * @param {Date} [queryParameters.timestampEnd] - The End Timestamp of the Point Event Results. Defaults to Now
     * @return {Promise<{id: number, oldValue: any, newValue: any, timestamp: Date}[]>}
     */
    static getAllEvents(siteId, pointIds, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/events`, Object.assign(queryParameters, {pointIds}))
            .then((result) => {
                resolve(result);
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
     * @param {number} siteId - The Site ID
     * @param {Object[]} objectItems - An Array of AddPointEventItem Properties
     * @param {number} objectItems[].id - The Point ID
     * @param {any} objectItems[].oldValue - The Previous Point Value
     * @param {any} objectItems[].newValue - The New Point Value
     * @param {Date} [objectItems[].timestamp] - The Timestamp for the Point Event. Defaults to Now
     * @return {Promise<boolean>}
     */
    static addPointEvents(siteId, objectItems)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points/events`, objectItems)
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

    // Point Actions [/sites/{siteId}/points/{id}]

    /**
     * Retrieve a Point [GET /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @return {Promise<PointModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points/${id}`)
            .then((result) => {
                resolve(new PointModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Point [PATCH /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @param {Object} updateData - The Point Update Data
     * @param {?number} [updateData.pluginId] - The Plugin ID
     * @param {string} [updateData.name] - The Point Name
     * @param {string} [updateData.type] - The Point Type
     * @param {string} [updateData.valueType] - The Point's Value Type
     * @param {string} [updateData.permissions] - The Permissions
     * @param {boolean} [updateData.enabled] - Whether the Point is Enabled
     * @param {Object} [updateData.settings] - The Point Settings
     * @return {Promise<PointModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/points/${id}`, updateData)
            .then((result) => {
                resolve(new PointModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Point [DELETE /sites/{siteId}/points/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/points/${id}`)
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

    // Point Collection Actions [/sites/{siteId}/points]

    /**
     * List all Points [GET /sites/{siteId}/points]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Point belongs to
     * @param {?number} [queryParameters.pluginId] - The Plugin ID
     * @param {string} [queryParameters.name] - The Point Name
     * @param {string} [queryParameters.type] - The Point Type
     * @param {string} [queryParameters.valueType] - The Point's Value Type
     * @param {string} [queryParameters.permissions] - The Permissions
     * @param {boolean} [queryParameters.enabled] - Whether the Point is Enabled
     * @return {Promise<PointModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/points`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new PointModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Point [POST /sites/{siteId}/points]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Point Create Data
     * @param {?number} createData.rtuId - The RTU this Point belongs to
     * @param {?number} createData.pluginId - The Plugin ID
     * @param {string} createData.name - The Point Name
     * @param {string} createData.type - The Point Type
     * @param {string} createData.valueType - The Point's Value Type
     * @param {string} [createData.permissions] - The Permissions
     * @param {boolean} [createData.enabled] - Whether the Point is Enabled
     * @param {Object} [createData.settings] - The Point Settings
     * @return {Promise<PointModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/points`, createData)
            .then((result) => {
                resolve(new PointModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default PointController;