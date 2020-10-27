/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import SiteModel from '../Models/SiteModel';

/**
 * Controller Class for Sites
 */
class SiteController
{
    /**
     * Retrieve a Site [GET /sites/{id}]
     * 
     * @static
     * @public
     * @param {number} id The Site ID
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
     * @param {number} id The Site ID
     * @param {SiteController.UpdateData} updateData The Site Update Data
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
     * @param {number} id The Site ID
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

    /**
     * List all Sites [GET /sites]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.name] The Site Name
     * @param {string} [queryParameters.companyId] The Company this Site belongs to
     * @param {boolean} [queryParameters.enabled] Whether the Site is Enabled
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
     * @param {SiteController.CreateData} createData The Site Create Data
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

/**
 * The Create Data for a Site
 * 
 * @typedef {Object} SiteController.CreateData
 * @property {string} name The Site Name
 * @property {string} companyId The Company this Site belongs to
 * @property {boolean} [enabled] Whether the Site is Enabled
 */

/**
 * The Update Data for a Site
 * 
 * @typedef {Object} SiteController.UpdateData
 * @property {string} [name] The Site Name
 * @property {string} [companyId] The Company this Site belongs to
 * @property {boolean} [enabled] Whether the Site is Enabled
 */