import RequestHelper from '../../../RequestHelper';
import VarietyModel from '../../../Models/Packhouse/Site/VarietyModel';

/**
 * Controller Class for Varieties
 */
class VarietyController
{
    // Variety Actions [/packhouse/sites/{siteId}/varieties/{id}]

    /**
     * Retrieve a Variety [GET /packhouse/sites/{siteId}/varieties/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @return {Promise<VarietyModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/varieties/${id}`)
            .then((result) => {
                resolve(new VarietyModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Variety [PATCH /packhouse/sites/{siteId}/varieties/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @param {Object} updateData - The Variety Update Data
     * @param {string} [updateData.name] - The Variety Name
     * @param {string} [updateData.description] - The Variety Description
     * @param {string} [updateData.image] - The Variety Image Source
     * @return {Promise<VarietyModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/varieties/${id}`, updateData)
            .then((result) => {
                resolve(new VarietyModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Variety [DELETE /packhouse/sites/{siteId}/varieties/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/varieties/${id}`)
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

    // Variety Collection Actions [/packhouse/sites/{siteId}/varieties]

    /**
     * List all Varieties [GET /packhouse/sites/{siteId}/varieties]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.code] - The Variety Code
     * @param {string} [queryParameters.name] - The Variety Name
     * @return {Promise<VarietyModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/varieties`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new VarietyModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Variety [POST /packhouse/sites/{siteId}/varieties]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Variety Create Data
     * @param {string} [createData.code] - The Variety Code
     * @param {string} createData.name - The Variety Name
     * @param {string} createData.description - The Variety Description
     * @param {string} createData.image - The Variety Image Source
     * @return {Promise<VarietyModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/varieties`, createData)
            .then((result) => {
                resolve(new VarietyModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default VarietyController;