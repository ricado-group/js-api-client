import RequestHelper from '../RequestHelper';
import RTUPluginModel from '../Models/RTUPluginModel';

/**
 * Controller Class for RTU Plugins
 */
class RTUPluginController
{
    // RTU Plugin Actions [/rtu-plugins/{id}]

    /**
     * Retrieve a RTU Plugin [GET /rtu-plugins/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU Plugin ID
     * @return {Promise<RTUPluginModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtu-plugins/${id}`)
            .then((result) => {
                resolve(new RTUPluginModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a RTU Plugin [PATCH /rtu-plugins/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU Plugin ID
     * @param {Object} updateData - The RTU Plugin Update Data
     * @param {string} [updateData.name] - The Plugin Name
     * @param {string} [updateData.companyId] - The Company this RTU Plugin belongs to
     * @return {Promise<RTUPluginModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/rtu-plugins/${id}`, updateData)
            .then((result) => {
                resolve(new RTUPluginModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a RTU Plugin [DELETE /rtu-plugins/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU Plugin ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtu-plugins/${id}`)
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

    // RTU Plugin Collection Actions [/rtu-plugins]

    /**
     * List all RTU Plugins [GET /rtu-plugins]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.name] - The Plugin Name
     * @param {string} [queryParameters.companyId] - The Company this RTU Plugin belongs to
     * @return {Promise<RTUPluginModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtu-plugins`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new RTUPluginModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a RTU Plugin [POST /rtu-plugins]
     * 
     * @static
     * @public
     * @param {Object} createData - The RTU Plugin Create Data
     * @param {string} createData.name - The Plugin Name
     * @param {string} createData.companyId - The Company this RTU Plugin belongs to
     * @return {Promise<RTUPluginModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtu-plugins`, createData)
            .then((result) => {
                resolve(new RTUPluginModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default RTUPluginController;