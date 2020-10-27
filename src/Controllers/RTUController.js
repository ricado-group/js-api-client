/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import RTUModel from '../Models/RTUModel';

/**
 * Controller Class for RTUs
 */
class RTUController
{
    /**
     * Retrieve a RTU [GET /rtus/{id}]
     * 
     * @static
     * @public
     * @param {number} id The RTU ID
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
     * @param {number} id The RTU ID
     * @param {RTUController.UpdateData} updateData The RTU Update Data
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
     * @param {number} id The RTU ID
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

    /**
     * List all RTUs [GET /rtus]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {number} [queryParameters.siteId] The Site this RTU belongs to
     * @param {string} [queryParameters.name] The RTU Name
     * @param {boolean} [queryParameters.enabled] Whether the RTU is Enabled
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
     * @param {RTUController.CreateData} createData The RTU Create Data
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

/**
 * The Create Data for a RTU
 * 
 * @typedef {Object} RTUController.CreateData
 * @property {number} siteId The Site this RTU belongs to
 * @property {string} name The RTU Name
 * @property {boolean} [enabled] Whether the RTU is Enabled
 */

/**
 * The Update Data for a RTU
 * 
 * @typedef {Object} RTUController.UpdateData
 * @property {string} [name] The RTU Name
 * @property {boolean} [enabled] Whether the RTU is Enabled
 */