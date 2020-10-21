import RequestHelper from '../RequestHelper';
import SiteModel from '../Models/SiteModel';

/**
 * Controller Class for Sites
 */
class SiteController
{
    // Site Actions [/sites/{id}]

    /**
     * Retrieve a Site [GET /sites/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @return {Promise<SiteModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${id}`)
            .then((result) => {
                resolve(new SiteModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Site [PATCH /sites/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @param {Object} updateData - The Site Update Data
     * @param {string} [updateData.name] - The Site Name
     * @param {string} [updateData.companyId] - The Company this Site belongs to
     * @param {boolean} [updateData.enabled] - Whether the Site is Enabled
     * @return {Promise<SiteModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${id}`, updateData)
            .then((result) => {
                resolve(new SiteModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Site [DELETE /sites/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${id}`)
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

    // Site Collection Actions [/sites]

    /**
     * List all Sites [GET /sites]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.name] - The Site Name
     * @param {string} [queryParameters.companyId] - The Company this Site belongs to
     * @param {boolean} [queryParameters.enabled] - Whether the Site is Enabled
     * @return {Promise<SiteModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new SiteModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Site [POST /sites]
     * 
     * @static
     * @public
     * @param {Object} createData - The Site Create Data
     * @param {string} createData.name - The Site Name
     * @param {string} createData.companyId - The Company this Site belongs to
     * @param {boolean} [createData.enabled] - Whether the Site is Enabled
     * @return {Promise<SiteModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites`, createData)
            .then((result) => {
                resolve(new SiteModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default SiteController;