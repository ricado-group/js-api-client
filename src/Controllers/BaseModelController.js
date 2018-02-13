import RequestHelper from '../RequestHelper';
import BaseController from '../Controllers/BaseController';

/**
 * Abstract BaseModelController Class
 * @abstract
 * @extends BaseController
 * @hideconstructor
 */
class BaseModelController extends BaseController {
  /**
     * Single Model Object Actions
     */

  /**
     * Retrieve a Single Model Object
     *
     * @static
     * @public
     * @param {string} path - The Path to the Single Model
     * @returns {Promise<Model>}
     */
  static getOne(path) {
    return new Promise((resolve, reject) => {
      RequestHelper.getRequest(path)
        .then((data) => {
          resolve({ json: data });
        })
        .catch(error => reject(error));
    });
  }

  /**
     * Update a Single Model Object
     *
     * @static
     * @public
     * @param {string} path - The Path to the Single Model
     * @param {Object} json - The JSON Data to update a Model Object
     * @returns {Promise<Model>}
     */
  static update(path, json) {
    return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(path, json)
        	.then((data) => {
        		resolve({ json: data });
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Delete a Single Model Object
     *
     * @static
     * @public
     * @param {string} path - The Path to the Single Model
     * @returns {Promise<boolean>}
     */
  static delete(path) {
    return new Promise((resolve, reject) => {
        	RequestHelper.deleteRequest(path)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Model Object Collection Actions
     */

  /**
     * Retrieve a Collection of Model Objects
     *
     * @static
     * @public
     * @param {string} path - The Path to the Model Collection
     * @returns {Promise<Model[]>}
     */
  static getAll(path) {
    return new Promise((resolve, reject) => {
      RequestHelper.getRequest(path)
        .then((data) => {
          resolve(data.map(item => ({ json: item })));
        })
        .catch(error => reject(error));
    });
  }

  /**
     * Create a new Model Object
     *
     * @static
     * @public
     * @param {string} path - The Path to the Model Collection
     * @param {Object} json - The JSON Data for a new Model Object
     * @returns {Promise<Model>}
     */
  static create(path, json) {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(path, json)
        	.then((data) => {
        		resolve({ json: data });
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }
}

export default BaseModelController;
