import RequestHelper from '../../RequestHelper';
/**
 * The RTU Plugin Settings Controller Class
 */
class PluginSettingsController
{
    // All Plugin Settings Collection Actions [/rtus/{rtuId}/plugin-settings]

    /**
     * Retrieve all Plugin Settings [GET /rtus/{rtuId}/plugin-settings]
     * 
     * Retrieves all Plugin Settings
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @return {Promise<Object>}
     */
    static getAll(rtuId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    // Plugin Settings Collection Actions [/rtus/{rtuId}/plugin-settings/{id}]

    /**
     * Retrieve Plugin Settings [GET /rtus/{rtuId}/plugin-settings/{id}]
     * 
     * Retrieves all Settings for a Plugin
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @return {Promise<Object>}
     */
    static getPlugin(rtuId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings/${id}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create or Update Plugin Settings [POST /rtus/{rtuId}/plugin-settings/{id}]
     * 
     * Creates or Updates Settings for a Plugin
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {Object} objectData - The Object Properties
     * @return {Promise<boolean>}
     */
    static create(rtuId, id, objectData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/rtus/${rtuId}/plugin-settings/${id}`, objectData)
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

    // Plugin Setting Actions [/rtus/{rtuId}/plugin-settings/{id}/{key}]

    /**
     * Retrieve a Plugin Setting [GET /rtus/{rtuId}/plugin-settings/{id}/{key}]
     * 
     * Retrieves a specific Plugin Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {string} key - The Plugin Settings Key
     * @return {Promise<Object>}
     */
    static getOne(rtuId, id, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/rtus/${rtuId}/plugin-settings/${id}/${key}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Plugin Setting [DELETE /rtus/{rtuId}/plugin-settings/{id}/{key}]
     * 
     * Deletes a specific Plugin Setting
     * 
     * @static
     * @public
     * @param {number} rtuId - The RTU ID
     * @param {number} id - The Plugin ID
     * @param {string} key - The Plugin Settings Key
     * @return {Promise<boolean>}
     */
    static delete(rtuId, id, key)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/rtus/${rtuId}/plugin-settings/${id}/${key}`)
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

export default PluginSettingsController;