import RequestHelper from '../../RequestHelper';
import BaseRTUController from '../../Controllers/RTU/BaseRTUController';
/**
 * The PluginSettingsController Class. A part of the RTU Plugin Settings Group
 * @extends BaseRTUController
 */
class PluginSettingsController extends BaseRTUController {
    /**
     * All Plugin Settings Collection Actions [/sites/{siteId}/plugin-settings]
     */

    /**
     * Retrieve all Plugin Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<Object>}
     */
    static getAll(rtuId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings`, queryParameters)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * Plugin Settings Collection Actions [/sites/{siteId}/plugin-settings/{id}]
     */

    /**
     * Retrieve all Plugin Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<Object>}
     */
    static getPlugin(rtuId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings/${id}`, queryParameters)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * Create / Update Plugin Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {Object} settings - The Settings to Create / Update
     * @return {Promise<boolean>}
     */
    static create(rtuId, id, settings)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtus/${rtuId}/plugin-settings/${id}`, settings)
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }

    /**
     * Plugin Setting Actions [/sites/{siteId}/plugin-settings/{id}/{key}]
     */

    /**
     * Retrieve Plugin Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {string} key - The Plugin Setting Key
     * @return {Promise<Object>}
     */
    static getOne(rtuId, id, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings/${id}/${key}`)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * Delete Plugin Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {string} key - The Plugin Setting Key
     * @return {Promise<boolean>}
     */
    static delete(rtuId, id, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtus/${rtuId}/plugin-settings/${id}/${key}`)
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }
}

export default PluginSettingsController;