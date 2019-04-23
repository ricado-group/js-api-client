import fetch, { Headers } from 'node-fetch'; // TODO: Ensure this isn't included when packing for web (handle in Webpack, Rollup or Browserify)
import { isDefined, BaseURL, JWT, NoAuthPaths } from './index';
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
class RequestHelper {
  /**
     * Perform a GET Request
     *
     * @static
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise}
     */
  static getRequest(url, queryParameters = {}) {
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
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to PUT
     * @returns {Promise<object>}
     */
  static putRequest(url, data) {
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
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to PATCH
     * @returns {Promise<object>}
     */
  static patchRequest(url, data) {
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
     * @package
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @param {Object} data - The Data to POST
     * @returns {Promise<object>}
     */
  static postRequest(url, data) {
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
     * @param {string} url - The Relative URL (e.g. /sites/{siteId}/my-resource)
     * @returns {Promise<boolean>}
     */
  static deleteRequest(url) {
    // TODO: Consider returning the promise from performRequest?

    return new Promise((resolve, reject) => {
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
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @returns {Promise}
     */
  static performRequest(method, url, data = null, queryParameters = {}) {
    // TODO: Sanitize / check / transform / whatever the URL
    // TODO: Make sure it starts with a `/`
    // url = url;

    const options = {
      method,
      mode: 'cors',
      credentials: 'omit',
      headers: new Headers(),
    };

    // TODO: Change how NoAuthPaths works to handle * paths (e.g. Use .find() or .filter() and then .contains() on the string)
    if (isDefined(JWT) && NoAuthPaths.includes(url) === false) {
      options.headers.set('Authorization', `Bearer ${JWT}`);
    }

    if (isDefined(data)) {
      options.headers.set('Content-Type', 'application/json');
      options.body = JSON.stringify(data);
    }

    var query = '';

    if (isDefined(queryParameters) && method == 'GET') {
      Object.keys(queryParameters).forEach((key) => {
        if(query.length == 0)
        {
          query += '?';
        }
        else
        {
          query += '&';
        }

        query += key + '=' + queryParameters[key];
      });
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
