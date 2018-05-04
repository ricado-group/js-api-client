import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import GrowingMethodModel from '../../../Models/Packhouse/Site/GrowingMethodModel';
/**
 * Controller Class for Growing Methods
 * @extends BaseSiteModelController
 */
class GrowingMethodController extends BaseSiteModelController {

    /**
     * Growing Method Actions [/packhouse/sites/{siteId}/growing-methods/{id}]
     */

    /**
     * Retrieve a Single Growing Method
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @return {Promise<GrowingMethodModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/growing-methods/${id}`)
        	.then((data) => {
        		resolve(new GrowingMethodModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Growing Method
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @param {Object} json - The JSON Data to update a Growing Method
     * @return {Promise<GrowingMethodModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/growing-methods/${id}`, json)
        	.then((data) => {
        		resolve(new GrowingMethodModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Growing Method
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Growing Method ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/growing-methods/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Growing Method Collection Actions [/packhouse/sites/{siteId}/growing-methods]
     */

    /**
     * Retrieve a Collection of Growing Methods
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<GrowingMethodModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/growing-methods`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new GrowingMethodModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Growing Method
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Growing Method
     * @return {Promise<GrowingMethodModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/growing-methods`, json)
        	.then((data) => {
        		resolve(new GrowingMethodModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default GrowingMethodController;