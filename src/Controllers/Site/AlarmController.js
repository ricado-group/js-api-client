/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../RequestHelper';
import AlarmModel from '../../Models/Site/AlarmModel';

/**
 * Controller Class for Alarms
 */
class AlarmController
{
    /**
     * Retrieve a Alarm [GET /sites/{siteId}/alarms/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm ID
     * @return {Promise<AlarmModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarms/${id}`)
            .then((result) => {
                resolve(new AlarmModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Alarm [PATCH /sites/{siteId}/alarms/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm ID
     * @param {Object} updateData The Alarm Update Data
     * @param {string} [updateData.groupId] The Alarm Group this Alarm is a part of
     * @param {string} [updateData.name] The Alarm Name
     * @param {boolean} [updateData.critical] Whether the Alarm is Critical or not
     * @param {string} [updateData.tripScript] The Python Script with the Conditions to Trip this Alarm
     * @param {?string} [updateData.resetScript] The Python Script with the Conditions to Reset this Alarm
     * @param {number} [updateData.tripDelay] The Delay before this Alarm will Trip in Milliseconds
     * @param {number} [updateData.resetDelay] The Delay before this Alarm will Reset in Milliseconds
     * @param {boolean} [updateData.autoReset] Whether the Alarm should Automatically Reset
     * @param {number} [updateData.autoResetDelay] The Delay before this Alarm should Auto Reset in Milliseconds
     * @param {number} [updateData.trippedStatePoint] The Point used to store the Alarm Tripped State
     * @param {number} [updateData.trippedTimestampPoint] The Point used to store the Alarm Tripped Timestamp
     * @param {number} [updateData.internalTripStartPoint] The Point used to store the Alarm's Internal Trip Start
     * @param {number} [updateData.internalResetStartPoint] The Point used to store the Alarm's Internal Reset Start
     * @return {Promise<AlarmModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/alarms/${id}`, updateData)
            .then((result) => {
                resolve(new AlarmModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Alarm [DELETE /sites/{siteId}/alarms/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/alarms/${id}`)
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
     * Retrieve the History of an Alarm [GET /sites/{siteId}/alarms/{id}/history]
     * 
     * Retrieves History (Logged Events) for a Single Alarm
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Alarm ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {Date} [queryParameters.timestampBegin] The Beginning Timestamp of the Alarm History Results. Defaults to 24 Hours ago
     * @param {Date} [queryParameters.timestampEnd] The End Timestamp of the Alarm History Results. Defaults to Now
     * @return {Promise<Array<{id: string, tripTimestamp: Date, resetTimestamp: ?Date, trippedDuration: number}>>}
     */
    static getOneHistory(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarms/${id}/history`, queryParameters)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Alarms [GET /sites/{siteId}/alarms]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] The RTU this Alarm belongs to
     * @param {string} [queryParameters.groupId] The Alarm Group this Alarm is a part of
     * @param {string} [queryParameters.name] The Alarm Name
     * @param {boolean} [queryParameters.critical] Whether the Alarm is Critical or not
     * @param {boolean} [queryParameters.autoReset] Whether the Alarm should Automatically Reset
     * @param {number} [queryParameters.trippedStatePoint] The Point used to store the Alarm Tripped State
     * @param {number} [queryParameters.trippedTimestampPoint] The Point used to store the Alarm Tripped Timestamp
     * @param {number} [queryParameters.internalTripStartPoint] The Point used to store the Alarm's Internal Trip Start
     * @param {number} [queryParameters.internalResetStartPoint] The Point used to store the Alarm's Internal Reset Start
     * @return {Promise<AlarmModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarms`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new AlarmModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Alarm [POST /sites/{siteId}/alarms]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} createData The Alarm Create Data
     * @param {?number} createData.rtuId The RTU this Alarm belongs to
     * @param {string} createData.groupId The Alarm Group this Alarm is a part of
     * @param {string} createData.name The Alarm Name
     * @param {boolean} createData.critical Whether the Alarm is Critical or not
     * @param {string} createData.tripScript The Python Script with the Conditions to Trip this Alarm
     * @param {?string} createData.resetScript The Python Script with the Conditions to Reset this Alarm
     * @param {number} [createData.tripDelay] The Delay before this Alarm will Trip in Milliseconds
     * @param {number} [createData.resetDelay] The Delay before this Alarm will Reset in Milliseconds
     * @param {boolean} [createData.autoReset] Whether the Alarm should Automatically Reset
     * @param {number} [createData.autoResetDelay] The Delay before this Alarm should Auto Reset in Milliseconds
     * @param {number} createData.trippedStatePoint The Point used to store the Alarm Tripped State
     * @param {number} createData.trippedTimestampPoint The Point used to store the Alarm Tripped Timestamp
     * @param {number} createData.internalTripStartPoint The Point used to store the Alarm's Internal Trip Start
     * @param {number} createData.internalResetStartPoint The Point used to store the Alarm's Internal Reset Start
     * @return {Promise<AlarmModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/alarms`, createData)
            .then((result) => {
                resolve(new AlarmModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve the History of all Alarms [GET /sites/{siteId}/alarms/history]
     * 
     * Retrieves History (Logged Events) for all Alarms
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string[]} [queryParameters.alarmIds] A List of Alarm IDs to Filter by
     * @param {string[]} [queryParameters.groupIds] A List of Alarm Group IDs to Filter by
     * @param {Date} [queryParameters.timestampBegin] The Beginning Timestamp of the Alarm History Results. Defaults to 24 Hours ago
     * @param {Date} [queryParameters.timestampEnd] The End Timestamp of the Alarm History Results. Defaults to Now
     * @return {Promise<Array<{id: string, tripTimestamp: Date, resetTimestamp: ?Date, trippedDuration: number}>>}
     */
    static getAllHistory(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarms/history`, queryParameters)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }
}

export default AlarmController;