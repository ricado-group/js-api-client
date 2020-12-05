import nodeFetch, { Headers as nodeHeaders, RequestInit as nodeRequestInit, Request as nodeRequest, Response as nodeResponse, Body as nodeBody } from 'node-fetch';
import { isDefined, isDebugMode, BaseURL, JWT, NoAuthPaths } from './index';
import BadRequestError from './Errors/BadRequestError';
import ForbiddenError from './Errors/ForbiddenError';
import NotAllowedError from './Errors/NotAllowedError';
import NotFoundError from './Errors/NotFoundError';
import ServerError from './Errors/ServerError';
import UnauthorizedError from './Errors/UnauthorizedError';
import NetworkError from './Errors/NetworkError';

/**
 * A Helper Class to abstract away the Lower-Level Fetch API to suit calls to the RICADO Gen 4 API
 *
 * @public
 */
class RequestHelper
{
    /**
     * Perform a GET Request
     *
     * @static
     * @public
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object<string, any>} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise<any>}
     */
    static getRequest(url, queryParameters = {})
    {
        return RequestHelper.performRequest('GET', url, null, queryParameters);
    }

    /**
     * Perform a PUT Request
     *
     * @static
     * @public
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {any} [data] - The Data to PUT
     * @returns {Promise<any>}
     */
    static putRequest(url, data = null)
    {
        return RequestHelper.performRequest('PUT', url, data);
    }

    /**
     * Perform a PATCH Request
     *
     * @static
     * @public
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {any} [data] - The Data to PATCH
     * @returns {Promise<any>}
     */
    static patchRequest(url, data = null)
    {
        return RequestHelper.performRequest('PATCH', url, data);
    }

    /**
     * Perform a POST Request
     *
     * @static
     * @public
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {any} [data] - The Data to POST
     * @returns {Promise<any>}
     */
    static postRequest(url, data = null)
    {
        return RequestHelper.performRequest('POST', url, data);
    }

    /**
     * Perform a DELETE Request
     *
     * @static
     * @public
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object<string, any>} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise<boolean>}
     */
    static deleteRequest(url, queryParameters = {})
    {
        return RequestHelper.performRequest('DELETE', url, null, queryParameters);
    }

    /**
     * Performs a Request (fetch)
     *
     * @static
     * @public
     * @param {string} method The Request Method
     * @param {string} url The Relative URL
     * @param {any} [data] The Data to send with this Request
     * @param {Object<string, any>} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise<any>}
     */
    static performRequest(method, url, data = null, queryParameters = {})
    {
        if(url.length > 0 && url[0] != '/')
        {
            url = '/' + url;
        }

        if(isDebugMode() == true)
        {
            console.log('RequestHelper :: ' + method.toUpperCase() + " - " + url);
        }

        var query = '';

        if (isDefined(queryParameters) && method.toUpperCase() == 'GET')
        {
            for(const [key, value] of Object.entries(queryParameters))
            {
                if(value !== undefined)
                {
                    let parameter = value;

                    if(Array.isArray(value))
                    {
                        parameter = value.join(',')
                    }
                    else if(value instanceof Date)
                    {
                        parameter = value.toISOString();
                    }

                    query += (query.length == 0 ? '?' : '&') + key + '=' + parameter;
                }
            }
        }

        if(RequestHelper.hasNativeFetch() === true)
        {
            return RequestHelper.performNativeFetchRequest(method, url, data, query);
        }
        else
        {
            return RequestHelper.performNodeFetchRequest(method, url, data, query);
        }
    }

    /**
     * Perform a Native Fetch Request
     * 
     * @private
     * @static
     * @param {string} method The Request Method
     * @param {string} url The Relative URL
     * @param {any} data The Data to Send with this Request
     * @param {string} query The Query String
     * @returns {Promise<any>}
     */
    static performNativeFetchRequest(method, url, data, query)
    {
        /**
         * @type {RequestInit}
         */
        const options = {
            method,
            mode: 'cors',
            credentials: 'omit',
        };

        const headers = new Headers();

        if (isDefined(JWT) && NoAuthPaths.some((path) => { return new RegExp(`^${path}(/.*)?$`).test(url); }) === false)
        {
            headers.set('Authorization', `Bearer ${JWT}`);
        }

        if (isDefined(data))
        {
            headers.set('Content-Type', 'application/json');
            options.body = JSON.stringify(data);
        }

        options.headers = headers;

        return new Promise((resolve, reject) => {
            fetch(BaseURL + url + query, options)
                .then((response) => {
                    if (response.ok) {
                        if (response.status === 200 || response.status === 201) {
                            response.json()
                                .then((json) => {
                                    resolve(json);
                                })
                                .catch((error) => {
                                    reject(error);
                                });

                            return;
                        }

                        resolve(true);
                        return;
                    }

                    response.json().then((json) => {
                        switch(response.status)
                        {
                            case 400:
                                reject(new BadRequestError(json.title));
                                break;
                            
                            case 401:
                                reject(new UnauthorizedError(json.title));
                                break;
                            
                            case 403:
                                reject(new ForbiddenError(json.title));
                                break;
                            
                            case 404:
                                reject(new NotFoundError(json.title));
                                break;
                            
                            case 405:
                                reject(new NotAllowedError(json.title));
                                break;
                            
                            case 500:
                                reject(new ServerError(json.title));
                                break;
                            
                            default:
                                reject(new Error("Unknown HTTP Response Code `" + response.status + "`"));
                                break;
                        }
                    }).catch(error => reject(error));
                })
                .catch(error => reject(new NetworkError(error.message)));
        });
    }

    /**
     * Perform a Node Fetch Request
     * 
     * @private
     * @static
     * @param {string} method The Request Method
     * @param {string} url The Relative URL
     * @param {any} data The Data to Send with this Request
     * @param {string} query The Query String
     * @returns {Promise<any>}
     */
    static performNodeFetchRequest(method, url, data, query)
    {
        /**
         * @type {nodeRequestInit}
         */
        const options = {
            method,
            compress: true,
        };
        
        const headers = new nodeHeaders();

        if (isDefined(JWT) && NoAuthPaths.some((path) => { return new RegExp(`^${path}(/.*)?$`).test(url); }) === false)
        {
            headers.set('Authorization', `Bearer ${JWT}`);
        }

        if (isDefined(data))
        {
            headers.set('Content-Type', 'application/json');
            options.body = JSON.stringify(data);
        }

        options.headers = headers;

        return new Promise((resolve, reject) => {
            nodeFetch(BaseURL + url + query, options)
                .then((response) => {
                    if (response.ok) {
                        if (response.status === 200 || response.status === 201) {
                            response.json()
                                .then((json) => {
                                    resolve(json);
                                })
                                .catch((error) => {
                                    reject(error);
                                });

                            return;
                        }

                        resolve(true);
                        return;
                    }

                    response.json().then((json) => {
                        switch(response.status)
                        {
                            case 400:
                                reject(new BadRequestError(json.title));
                                break;
                            
                            case 401:
                                reject(new UnauthorizedError(json.title));
                                break;
                            
                            case 403:
                                reject(new ForbiddenError(json.title));
                                break;
                            
                            case 404:
                                reject(new NotFoundError(json.title));
                                break;
                            
                            case 405:
                                reject(new NotAllowedError(json.title));
                                break;
                            
                            case 500:
                                reject(new ServerError(json.title));
                                break;
                            
                            default:
                                reject(new Error("Unknown HTTP Response Code `" + response.status + "`"));
                                break;
                        }
                    }).catch(error => reject(error));
                })
                .catch(error => reject(new NetworkError(error.message)));
        });
    }
    
    /**
     * Checks if a Native Version of Fetch is Available
     * 
     * @private
     * @static
     * @returns {boolean}
     */
    static hasNativeFetch()
    {
        return typeof window === 'object' && typeof window.fetch === 'function';
    }
}

export default RequestHelper;
