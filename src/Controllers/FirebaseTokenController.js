/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import FirebaseTokenModel from '../Models/FirebaseTokenModel';

/**
 * Controller Class for Firebase Tokens
 */
class FirebaseTokenController
{
    /**
     * Retrieve a Firebase Token [GET /firebase-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Firebase Token ID
     * @return {Promise<FirebaseTokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/firebase-tokens/${id}`)
            .then((result) => {
                resolve(new FirebaseTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Firebase Token [PATCH /firebase-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Firebase Token ID
     * @param {FirebaseTokenController.UpdateData} updateData The Firebase Token Update Data
     * @return {Promise<FirebaseTokenModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/firebase-tokens/${id}`, updateData)
            .then((result) => {
                resolve(new FirebaseTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Firebase Token [DELETE /firebase-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Firebase Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/firebase-tokens/${id}`)
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
     * List all Firebase Tokens [GET /firebase-tokens]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.accountId] The Account this Firebase Token belongs to
     * @param {string} [queryParameters.token] The Firebase Token
     * @param {boolean} [queryParameters.enabled] Whether the Firebase Token should receive Notifications
     * @param {string} [queryParameters.deviceName] The Device Name
     * @param {string} [queryParameters.devicePlatform] The Device Platform
     * @return {Promise<FirebaseTokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/firebase-tokens`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new FirebaseTokenModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Firebase Token [POST /firebase-tokens]
     * 
     * @static
     * @public
     * @param {FirebaseTokenController.CreateData} createData The Firebase Token Create Data
     * @return {Promise<FirebaseTokenModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/firebase-tokens`, createData)
            .then((result) => {
                resolve(new FirebaseTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default FirebaseTokenController;

/**
 * The Create Data for a Firebase Token
 * 
 * @typedef {Object} FirebaseTokenController.CreateData
 * @property {string} accountId The Account this Firebase Token belongs to
 * @property {string} token The Firebase Token
 * @property {boolean} [enabled] Whether the Firebase Token should receive Notifications
 * @property {string} deviceName The Device Name
 * @property {string} devicePlatform The Device Platform
 * @memberof Controllers
 */

/**
 * The Update Data for a Firebase Token
 * 
 * @typedef {Object} FirebaseTokenController.UpdateData
 * @property {string} [accountId] The Account this Firebase Token belongs to
 * @property {boolean} [enabled] Whether the Firebase Token should receive Notifications
 * @property {string} [deviceName] The Device Name
 * @property {string} [devicePlatform] The Device Platform
 * @memberof Controllers
 */