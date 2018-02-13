/**
 * A Helper Class to abstract away the Lower-Level Fetch API to suit calls to the RICADO Gen 4 API
 * 
 */
import fetch, { Headers } from 'node-fetch'; // TODO: Ensure this isn't included when packing for web (handle in Webpack, Rollup or Browserify)
import API, { BaseURL, NoAuthPaths } from './index';
//import API from './API';
import { isDefined } from './Utils';

class RequestHelper
{
    /**
     * Perform a GET Request
     * 
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @returns {Promise}
     */
    static getRequest(url)
    {
        // TODO: Consider returning the promise from performRequest? We don't seem to do anything with it now..
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('GET', url)
            .then(json => resolve(json))
            .catch(error => reject(error));
        });
    }

    /**
     * Perform a PUT Request
     * 
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to PUT
     * @returns {Promise<object>}
     */
    static putRequest()
    {
        // TODO: Consider returning the promise from performRequest? We don't seem to do anything with it now..
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('PUT', url, data)
            .then(json => resolve(json))
            .catch(error => reject(error));
        });
    }

    /**
     * Perform a PATCH Request
     * 
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to PATCH
     * @returns {Promise<object>}
     */
    static patchRequest(url, data)
    {
        // TODO: Consider returning the promise from performRequest? We don't seem to do anything with it now..
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('PATCH', url, data)
            .then(json => resolve(json))
            .catch(error => reject(error));
        });
    }

    /**
     * Perform a POST Request
     * 
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to POST
     * @returns {Promise<object>}
     */
    static postRequest(url, data)
    {
        // TODO: Consider returning the promise from performRequest? We don't seem to do anything with it now..
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('POST', url, data)
            .then(json => resolve(json))
            .catch(error => reject(error));
        });
    }

    /**
     * Perform a DELETE Request
     * 
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @returns {Promise<boolean>}
     */
    static deleteRequest(url)
    {
        // TODO: Consider returning the promise from performRequest? We don't seem to do anything with it now..
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('DELETE', url)
            .then(result => resolve(result))
            .catch(error => reject(error));
        });
    }

    /**
     * Performs a Request (fetch)
     * 
     * @param {string} method - The Request Method (e.g. GET, POST, DELETE)
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} [data] - The Data to send with this Request
     * @param {Object} [queryParameters] - An Object of Key/Value Pair Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise}
     */
    static performRequest(method, url, data = null, queryParameters = {})
    {
        // TODO: Sanitize / check / transform / whatever the URL
        // TODO: Make sure it starts with a `/`
        url = url;
        
        let options = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: new Headers()
        };

        if(isDefined(API.JWT) && NoAuthPaths.includes(url) == false)
        {
            options.headers.set('Authorization', "Bearer " + API.JWT);
        }

        if(isDefined(data))
        {
            options.headers.set('Content-Type', "application/json");
            options.body = JSON.stringify(data);
        }
        
        return new Promise((resolve, reject) =>
        {
            fetch(BaseURL + url, options)
            .then((response) => 
            {
                if(response.ok)
                {
                    if(response.status == 200 || response.status == 201)
                    {
                        response.json()
                        .then((json) => {
                            resolve(json);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                        
                        return;
                    }
                    
                    return resolve(true);
                }

                // TODO: Process some form of error!
                console.log(response);
                response.json().then((json) => { console.log(json); });

                reject(new Error("API Error"));
            })
            .catch((error) => 
            {
                reject(error);
            });
        });
    }
}

export default RequestHelper