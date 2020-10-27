import fetch, { Headers } from 'node-fetch'; // TODO: Ensure this isn't included when packing for web (handle in Webpack, Rollup or Browserify)
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
        // TODO: Consider returning the promise from performRequest?

        return new Promise((resolve, reject) => {
            RequestHelper.performRequest('GET', url, null, queryParameters)
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
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
        // TODO: Consider returning the promise from performRequest?

        return new Promise((resolve, reject) => {
            RequestHelper.performRequest('PUT', url, data)
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
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
        // TODO: Consider returning the promise from performRequest?

        return new Promise((resolve, reject) => {
            RequestHelper.performRequest('PATCH', url, data)
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
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
        // TODO: Consider returning the promise from performRequest?

        return new Promise((resolve, reject) => {
            RequestHelper.performRequest('POST', url, data)
                .then(json => resolve(json))
                .catch(error => reject(error));
        });
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
        // TODO: Consider returning the promise from performRequest?

        return new Promise((resolve, reject) => {
            RequestHelper.performRequest('DELETE', url, null, queryParameters)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    }

    /**
     * Performs a Request (fetch)
     *
     * @static
     * @public
     * @param {string} method - The Request Method (e.g. GET, POST, DELETE)
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {any} [data] - The Data to send with this Request
     * @param {Object<string, any>} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise<any>}
     */
    static performRequest(method, url, data = null, queryParameters = {})
    {
        // TODO: Sanitize / check / transform / whatever the URL
        
        if(url.length > 0 && url[0] != '/')
        {
            url = '/' + url;
        }

        if(isDebugMode() == true)
        {
            console.log('RequestHelper :: ' + method.toUpperCase() + " - " + url);
        }

        const options = {
            method,
            mode: 'cors',
            credentials: 'omit',
            headers: new Headers(),
        };

        // TODO: Change how NoAuthPaths works to handle * paths (e.g. Use .find() or .filter() and then .contains() on the string)
        if (isDefined(JWT) && NoAuthPaths.includes(url) === false)
        {
            options.headers.set('Authorization', `Bearer ${JWT}`);
        }

        if (isDefined(data))
        {
            options.headers.set('Content-Type', 'application/json');
            options.body = JSON.stringify(data);
        }

        var query = '';

        if (isDefined(queryParameters) && method == 'GET')
        {
            for(const [key, value] of Object.entries(queryParameters))
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
}

export default RequestHelper;
