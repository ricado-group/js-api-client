/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import TokenModel from '../Models/TokenModel';

/**
 * Controller Class for Tokens
 */
class TokenController
{

    /**
     * Generate a new Token [POST /token/new]
     * 
     * This method is used to generate a new JWT for User or API Key based authentication. You can think of this as the 'Login Process'.
     * 
     * **User Authentication**
     * The user must have an account that has been created on RICADO. A valid Email Address and Password will be required.
     * 
     * **API Key Authentication**
     * A valid API Key and API Secret will be required. These can be created in the RICADO Developers App at developers.ricado.co.nz.
     * 
     * @static
     * @public
     * @param {{email: string, password: string, providerId: string}|{key: string, secret: string, providerId: string}} requestData The Request Data
     * @return {Promise<{token: string, expires: number}>}
     */
    static create(requestData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/token/new`, requestData)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Unlock the current Token [POST /token/unlock]
     * 
     * This method is used to unlock an existing JWT. Tokens can be locked by the server or via an API call.
     * The user's pin code or password is used as authentication to unlock the token.
     * 
     * @static
     * @public
     * @param {{pinCode: string}|{password: string}} requestData The Request Data
     * @return {Promise<boolean>}
     */
    static unlock(requestData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/token/unlock`, requestData)
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
     * Lock the current Token [POST /token/lock]
     * 
     * This method is used to lock an existing JWT. Once the Token has been locked, any further API calls will be denied until the Token has been unlocked.
     * 
     * @static
     * @public
     * @return {Promise<boolean>}
     */
    static lock()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/token/lock`)
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
     * Destroy the current Token [POST /token/destroy]
     * 
     * This method is used to destroy an existing JWT. This method should be used to effectively 'logout' a User or API Key.
     * Once this method has been successfully called, the JWT can no longer be used for any API calls.
     * 
     * @static
     * @public
     * @return {Promise<boolean>}
     */
    static destroy()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/token/destroy`)
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
     * Retrieve the current Token [GET /token]
     * 
     * Retrieves the Token that is currently being used.
     * 
     * @static
     * @public
     * @return {Promise<TokenModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/token`)
            .then((result) => {
                resolve(new TokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Token [GET /tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Token ID
     * @return {Promise<TokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/tokens/${id}`)
            .then((result) => {
                resolve(new TokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Token [DELETE /tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id The Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/tokens/${id}`)
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
     * List all Tokens [GET /tokens]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.accountId] The Account this Token belongs to
     * @param {string} [queryParameters.accountType] The Account Type
     * @param {Date} [queryParameters.issueTimestamp] When the Token was issued
     * @param {Date} [queryParameters.expireTimestamp] When the Token will expire
     * @param {?Date} [queryParameters.activityTimestamp] When the last API call using this Token was made
     * @return {Promise<TokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/tokens`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new TokenModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }
}

export default TokenController;