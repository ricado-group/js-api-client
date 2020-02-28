import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import RejectBinModel from '../../../Models/Packhouse/Site/RejectBinModel';
/**
 * Controller Class for Reject Bins
 * @extends BaseSiteModelController
 */
class RejectBinController extends BaseSiteModelController {

    /**
     * Reject Bin Actions [/packhouse/sites/{siteId}/reject-bins/{id}]
     */

    /**
     * Retrieve a Single Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @return {Promise<RejectBinModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {Object} json - The JSON Data to update a Reject Bin
     * @return {Promise<RejectBinModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`, json)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Reject Bin Collection Actions [/packhouse/sites/{siteId}/reject-bins]
     */

    /**
     * Retrieve a Collection of Reject Bins
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<RejectBinModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/reject-bins`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new RejectBinModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Reject Bin
     * @return {Promise<RejectBinModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/reject-bins`, json)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RejectBinController;