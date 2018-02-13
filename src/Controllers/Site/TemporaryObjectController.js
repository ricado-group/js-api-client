import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import TemporaryObjectModel from '../../Models/Site/TemporaryObjectModel';
/**
 * Controller Class for Temporary Objects
 * @extends BaseSiteModelController
 */
class TemporaryObjectController extends BaseSiteModelController {
  /**
     * Temporary Object Actions [/sites/{siteId}/temporary-objects/{id}]
     */

  /**
     * Retrieve a Single Temporary Object
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @return {Promise<TemporaryObjectModel>}
     */
  static getOne(siteId, id) {
    return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/sites/${siteId}/temporary-objects/${id}`)
        	.then((data) => {
        		resolve(new TemporaryObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Update a Temporary Object
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @param {Object} json - The JSON Data to update a Temporary Object
     * @return {Promise<TemporaryObjectModel>}
     */
  static update(siteId, id, json) {
    return new Promise((resolve, reject) => {
        	super.update(siteId, `/sites/${siteId}/temporary-objects/${id}`, json)
        	.then((data) => {
        		resolve(new TemporaryObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Delete a Temporary Object
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Temporary Object ID
     * @return {Promise<boolean>}
     */
  static delete(siteId, id) {
    return new Promise((resolve, reject) => {
        	super.delete(siteId, `/sites/${siteId}/temporary-objects/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Temporary Object Collection Actions [/sites/{siteId}/temporary-objects]
     */

  /**
     * Retrieve a Collection of Temporary Objects
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<TemporaryObjectModel[]>}
     */
  static getAll(siteId) {
    return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/sites/${siteId}/temporary-objects`)
        	.then((data) => {
        		resolve(data.map(item => new TemporaryObjectModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Create a Temporary Object
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Temporary Object
     * @return {Promise<TemporaryObjectModel>}
     */
  static create(siteId, json) {
    return new Promise((resolve, reject) => {
        	super.create(siteId, `/sites/${siteId}/temporary-objects`, json)
        	.then((data) => {
        		resolve(new TemporaryObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }
}

export default TemporaryObjectController;
