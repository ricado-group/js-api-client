import RequestHelper from '../../RequestHelper';
import TemporaryObjectModel from '../../Models/Site/TemporaryObjectModel';

/**
 * Controller Class for Temporary Objects
 */
class TemporaryObjectController
{
    // Temporary Object Actions [/sites/{siteId}/temporary-objects/{id}]

    /**
     * Retrieve a Temporary Object [GET /sites/{siteId}/temporary-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @return {Promise<TemporaryObjectModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/temporary-objects/${id}`)
            .then((result) => {
                resolve(new TemporaryObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Temporary Object [PATCH /sites/{siteId}/temporary-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @param {Object} updateData - The Temporary Object Update Data
     * @param {string} [updateData.type] - The Temporary Object Type
     * @param {Object} [updateData.definition] - The Temporary Object Definition
     * @return {Promise<TemporaryObjectModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/temporary-objects/${id}`, updateData)
            .then((result) => {
                resolve(new TemporaryObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Temporary Object [DELETE /sites/{siteId}/temporary-objects/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/temporary-objects/${id}`)
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

    // Temporary Object Collection Actions [/sites/{siteId}/temporary-objects]

    /**
     * List all Temporary Objects [GET /sites/{siteId}/temporary-objects]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.keyIndex] - The Temporary Object Key Index
     * @param {string} [queryParameters.type] - The Temporary Object Type
     * @return {Promise<TemporaryObjectModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/temporary-objects`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new TemporaryObjectModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Temporary Object [POST /sites/{siteId}/temporary-objects]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Temporary Object Create Data
     * @param {string} [createData.keyIndex] - The Temporary Object Key Index
     * @param {string} createData.type - The Temporary Object Type
     * @param {Object} [createData.definition] - The Temporary Object Definition
     * @return {Promise<TemporaryObjectModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/temporary-objects`, createData)
            .then((result) => {
                resolve(new TemporaryObjectModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default TemporaryObjectController;