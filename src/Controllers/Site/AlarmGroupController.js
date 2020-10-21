import RequestHelper from '../../RequestHelper';
import AlarmGroupModel from '../../Models/Site/AlarmGroupModel';

/**
 * Controller Class for Alarm Groups
 */
class AlarmGroupController
{
    // Alarm Group Actions [/sites/{siteId}/alarm-groups/{id}]

    /**
     * Retrieve a Alarm Group [GET /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @return {Promise<AlarmGroupModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarm-groups/${id}`)
            .then((result) => {
                resolve(new AlarmGroupModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Alarm Group [PATCH /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @param {Object} updateData - The Alarm Group Update Data
     * @param {string} [updateData.name] - The Alarm Group Name
     * @param {number} [updateData.resetPoint] - The Boolean Point used to Reset this Alarm Group
     * @param {{point: number, value: boolean}[]} [updateData.externalResetPoints] - An Array of Points and the States to be Written when this Alarm Group is Reset
     * @return {Promise<AlarmGroupModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/alarm-groups/${id}`, updateData)
            .then((result) => {
                resolve(new AlarmGroupModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Alarm Group [DELETE /sites/{siteId}/alarm-groups/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/alarm-groups/${id}`)
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

    // Alarm Group Collection Actions [/sites/{siteId}/alarm-groups]

    /**
     * List all Alarm Groups [GET /sites/{siteId}/alarm-groups]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Alarm Group belongs to
     * @param {string} [queryParameters.name] - The Alarm Group Name
     * @param {number} [queryParameters.resetPoint] - The Boolean Point used to Reset this Alarm Group
     * @return {Promise<AlarmGroupModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/alarm-groups`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new AlarmGroupModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Alarm Group [POST /sites/{siteId}/alarm-groups]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Alarm Group Create Data
     * @param {?number} createData.rtuId - The RTU this Alarm Group belongs to
     * @param {string} createData.name - The Alarm Group Name
     * @param {number} createData.resetPoint - The Boolean Point used to Reset this Alarm Group
     * @param {{point: number, value: boolean}[]} [createData.externalResetPoints] - An Array of Points and the States to be Written when this Alarm Group is Reset
     * @return {Promise<AlarmGroupModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/alarm-groups`, createData)
            .then((result) => {
                resolve(new AlarmGroupModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default AlarmGroupController;