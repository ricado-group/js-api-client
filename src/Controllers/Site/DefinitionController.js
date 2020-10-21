import RequestHelper from '../../RequestHelper';
import DefinitionModel from '../../Models/Site/DefinitionModel';

/**
 * Controller Class for Definitions
 */
class DefinitionController
{
    // Definition Actions [/sites/{siteId}/definitions/{id}]

    /**
     * Retrieve a Definition [GET /sites/{siteId}/definitions/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @return {Promise<DefinitionModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/definitions/${id}`)
            .then((result) => {
                resolve(new DefinitionModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Definition [PATCH /sites/{siteId}/definitions/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @param {Object} updateData - The Definition Update Data
     * @param {string} [updateData.type] - The Definition Type
     * @param {Object} [updateData.data] - The Definition Data
     * @return {Promise<DefinitionModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/definitions/${id}`, updateData)
            .then((result) => {
                resolve(new DefinitionModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Definition [DELETE /sites/{siteId}/definitions/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/definitions/${id}`)
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

    // Definition Collection Actions [/sites/{siteId}/definitions]

    /**
     * List all Definitions [GET /sites/{siteId}/definitions]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.keyIndex] - The Definition Key Index
     * @param {string} [queryParameters.type] - The Definition Type
     * @return {Promise<DefinitionModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/definitions`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new DefinitionModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Definition [POST /sites/{siteId}/definitions]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Definition Create Data
     * @param {string} [createData.keyIndex] - The Definition Key Index
     * @param {string} createData.type - The Definition Type
     * @param {Object} [createData.data] - The Definition Data
     * @return {Promise<DefinitionModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/definitions`, createData)
            .then((result) => {
                resolve(new DefinitionModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default DefinitionController;