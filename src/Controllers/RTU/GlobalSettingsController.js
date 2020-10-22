/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../RequestHelper';
/**
 * The RTU Global Settings Controller Class
 */
class GlobalSettingsController
{
    // Global Settings Collection Actions [/rtus/{rtuId}/global-settings]

    /**
     * Retrieve all Global Settings [GET /rtus/{rtuId}/global-settings]
     * 
     * Retrieves all Global Settings
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
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create or Update Global Settings [POST /rtus/{rtuId}/global-settings]
     * 
     * Creates or Updates Global Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {Object} objectData - The Object Properties
     * @return {Promise<boolean>}
     */
    static create(rtuId, objectData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtus/${rtuId}/global-settings`, objectData)
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

    // Global Setting Actions [/rtus/{rtuId}/global-settings/{key}]

    /**
     * Retrieve Global Setting [GET /rtus/{rtuId}/global-settings/{key}]
     * 
     * Retrieves a specific Global Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {string} key - The Global Settings Key
     * @return {Promise<Object>}
     */
    static getOne(rtuId, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/global-settings/${key}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete Global Setting [DELETE /rtus/{rtuId}/global-settings/{key}]
     * 
     * Deletes a specific Global Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {string} key - The Global Settings Key
     * @return {Promise<boolean>}
     */
    static delete(rtuId, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtus/${rtuId}/global-settings/${key}`)
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
}

export default GlobalSettingsController;