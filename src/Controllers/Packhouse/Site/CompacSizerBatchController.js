import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import CompacSizerBatchModel from '../../../Models/Packhouse/Site/CompacSizerBatchModel';
/**
 * Controller Class for Compac Sizer Batches
 * @extends BaseSiteModelController
 */
class CompacSizerBatchController extends BaseSiteModelController {

    /**
     * Compac Sizer Batch Actions [/packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     */

    /**
     * Retrieve a Single Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @return {Promise<CompacSizerBatchModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @param {Object} json - The JSON Data to update a Compac Sizer Batch
     * @return {Promise<CompacSizerBatchModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`, json)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Compac Sizer Batch Collection Actions [/packhouse/sites/{siteId}/compac-sizer-batches]
     */

    /**
     * Retrieve a Collection of Compac Sizer Batches
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<CompacSizerBatchModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new CompacSizerBatchModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Compac Sizer Batch
     * @return {Promise<CompacSizerBatchModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches`, json)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompacSizerBatchController;