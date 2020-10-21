import RequestHelper from '../../RequestHelper';
import PermanentObjectModel from '../../Models/Site/PermanentObjectModel';

/**
 * Controller Class for Permanent Objects
 */
class PermanentObjectController
{
    // Permanent Object Actions [/sites/{siteId}/permanent-objects/{id}]

    /**
     * Retrieve a Permanent Object [GET /sites/{siteId}/permanent-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @return {Promise<PermanentObjectModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-objects/${id}`)
            .then((result) => {
                resolve(new PermanentObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Permanent Object [PATCH /sites/{siteId}/permanent-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @param {Object} updateData - The Permanent Object Update Data
     * @param {string} [updateData.type] - The Permanent Object Type
     * @param {Object} [updateData.definition] - The Permanent Object Definition
     * @return {Promise<PermanentObjectModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/permanent-objects/${id}`, updateData)
            .then((result) => {
                resolve(new PermanentObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Permanent Object [DELETE /sites/{siteId}/permanent-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/permanent-objects/${id}`)
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

    // Permanent Object Collection Actions [/sites/{siteId}/permanent-objects]

    /**
     * List all Permanent Objects [GET /sites/{siteId}/permanent-objects]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Permanent Object belongs to
     * @param {string} [queryParameters.keyIndex] - The Permanent Object Key Index
     * @param {string} [queryParameters.type] - The Permanent Object Type
     * @return {Promise<PermanentObjectModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-objects`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new PermanentObjectModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Permanent Object [POST /sites/{siteId}/permanent-objects]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Permanent Object Create Data
     * @param {?number} createData.rtuId - The RTU this Permanent Object belongs to
     * @param {string} [createData.keyIndex] - The Permanent Object Key Index
     * @param {string} createData.type - The Permanent Object Type
     * @param {Object} [createData.definition] - The Permanent Object Definition
     * @return {Promise<PermanentObjectModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/permanent-objects`, createData)
            .then((result) => {
                resolve(new PermanentObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default PermanentObjectController;