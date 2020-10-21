import RequestHelper from '../../../RequestHelper';
import GrowingMethodModel from '../../../Models/Packhouse/Site/GrowingMethodModel';

/**
 * Controller Class for Growing Methods
 */
class GrowingMethodController
{
    // Growing Method Actions [/packhouse/sites/{siteId}/growing-methods/{id}]

    /**
     * Retrieve a Growing Method [GET /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @return {Promise<GrowingMethodModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`)
            .then((result) => {
                resolve(new GrowingMethodModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Growing Method [PATCH /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @param {Object} updateData - The Growing Method Update Data
     * @param {string} [updateData.name] - The Growing Method Name
     * @param {string} [updateData.description] - The Growing Method Description
     * @return {Promise<GrowingMethodModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`, updateData)
            .then((result) => {
                resolve(new GrowingMethodModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Growing Method [DELETE /packhouse/sites/{siteId}/growing-methods/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/growing-methods/${id}`)
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

    // Growing Method Collection Actions [/packhouse/sites/{siteId}/growing-methods]

    /**
     * List all Growing Methods [GET /packhouse/sites/{siteId}/growing-methods]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.code] - The Growing Method Code
     * @param {string} [queryParameters.name] - The Growing Method Name
     * @return {Promise<GrowingMethodModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/growing-methods`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new GrowingMethodModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Growing Method [POST /packhouse/sites/{siteId}/growing-methods]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Growing Method Create Data
     * @param {string} [createData.code] - The Growing Method Code
     * @param {string} createData.name - The Growing Method Name
     * @param {string} createData.description - The Growing Method Description
     * @return {Promise<GrowingMethodModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/growing-methods`, createData)
            .then((result) => {
                resolve(new GrowingMethodModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default GrowingMethodController;