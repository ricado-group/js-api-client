import RequestHelper from '../../RequestHelper';
import BaseRTUController from '../../Controllers/RTU/BaseRTUController';
/**
 * The GlobalSettingsController Class. A part of the RTU Global Settings Group
 * @extends BaseRTUController
 */
class GlobalSettingsController extends BaseRTUController
{
    /**
     * Global Settings Collection Actions [/sites/{siteId}/global-settings]
     */

    /**
     * Retrieve all Global Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @return {Promise<Object>}
     */
    static getAll(rtuId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/global-settings`)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * Create / Update Global Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {Object} settings - The Settings to Create / Update
     * @return {Promise<boolean>}
     */
    static create(rtuId, settings)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtus/${rtuId}/global-settings`, settings)
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }

    /**
     * Global Setting Actions [/sites/{siteId}/global-settings/{key}]
     */

    /**
     * Retrieve Global Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {string} key - The Global Setting Key
     * @return {Promise<Object>}
     */
    static getOne(rtuId, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/global-settings/${key}`)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * Delete Global Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {string} key - The Global Setting Key
     * @return {Promise<boolean>}
     */
    static delete(rtuId, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtus/${rtuId}/global-settings/${key}`)
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }
}

export default GlobalSettingsController