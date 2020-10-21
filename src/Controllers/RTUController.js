import RequestHelper from '../RequestHelper';
import RTUModel from '../Models/RTUModel';

/**
 * Controller Class for RTUs
 */
class RTUController
{
    // RTU Actions [/rtus/{id}]

    /**
     * Retrieve a RTU [GET /rtus/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @return {Promise<RTUModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${id}`)
            .then((result) => {
                resolve(new RTUModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a RTU [PATCH /rtus/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @param {Object} updateData - The RTU Update Data
     * @param {string} [updateData.name] - The RTU Name
     * @param {boolean} [updateData.enabled] - Whether the RTU is Enabled
     * @return {Promise<RTUModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/rtus/${id}`, updateData)
            .then((result) => {
                resolve(new RTUModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a RTU [DELETE /rtus/{id}]
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtus/${id}`)
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

    // RTU Collection Actions [/rtus]

    /**
     * List all RTUs [GET /rtus]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {number} [queryParameters.siteId] - The Site this RTU belongs to
     * @param {string} [queryParameters.name] - The RTU Name
     * @param {boolean} [queryParameters.enabled] - Whether the RTU is Enabled
     * @return {Promise<RTUModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new RTUModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a RTU [POST /rtus]
     * 
     * @static
     * @public
     * @param {Object} createData - The RTU Create Data
     * @param {number} createData.siteId - The Site this RTU belongs to
     * @param {string} createData.name - The RTU Name
     * @param {boolean} [createData.enabled] - Whether the RTU is Enabled
     * @return {Promise<RTUModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtus`, createData)
            .then((result) => {
                resolve(new RTUModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default RTUController;