/**
 * A Helper Class to abstract away the Lower-Level Fetch API to suit calls to the RICADO Gen 4 API
 * 
 */
import fetch, { Headers } from 'node-fetch'; // TODO: Ensure this isn't included when packing for web (handle in Webpack, Rollup or Browserify)
import { BaseURL, NoAuthPaths } from './index';
import API from './API';
import { isDefined } from './Utils';

class RequestHelper
{
    /**
     * Perform a GET Request
     * 
     * @returns {Promise}
     */
    static getRequest()
    {
        return new Promise((resolve, reject) =>
        {
            
        });
    }

    /**
     * Perform a PUT Request
     * 
     * @returns {Promise}
     */
    static putRequest()
    {
        return new Promise((resolve, reject) =>
        {

        });
    }

    /**
     * Perform a PATCH Request
     * 
     * @returns {Promise}
     */
    static patchRequest()
    {
        return new Promise((resolve, reject) =>
        {

        });
    }

    /**
     * Perform a POST Request
     * 
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to POST
     * @returns {Promise}
     */
    static postRequest(url, data)
    {
        console.log("Data at first method..");

        console.log(data);
        
        return new Promise((resolve, reject) =>
        {
            RequestHelper.performRequest('POST', url, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        });
    }

    /**
     * Perform a DELETE Request
     * 
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @returns {Promise<Object>}
     */
    static deleteRequest(url)
    {
        //performRequest('GET', url, )
        fetch()
        
        // TODO: Sanitize / check / transform / whatever the URL
        url = url;
        
        return new Promise((resolve, reject) =>
        {

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
        console.log("Data at second method..");

        console.log(isDefined(data));
        
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
            options.headers.set('Authorization', "Bearer " . API.JWT);
        }

        if(isDefined(data))
        {
            options.headers.set('Content-Type', "application/json");
            options.body = JSON.stringify(data);
            console.log(options.body);
        }
        
        return new Promise((resolve, reject) =>
        {
            fetch(BaseURL + url, options)
            .then((response) => 
            {
                if(response.ok)
                {
                    return resolve(response);
                }

                // TODO: Process some form of error!
                console.log(response);
                response.json().then((json) => { console.log(json); });
                //console.log(response.json());
            })
            .catch((error) => 
            {
                reject(error);
            });
        });
    }
}

export default RequestHelper