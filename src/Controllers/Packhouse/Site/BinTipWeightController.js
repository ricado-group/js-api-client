import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import BinTipWeightModel from '../../../Models/Packhouse/Site/BinTipWeightModel';
/**
 * Controller Class for Bin Tip Weights
 * @extends BaseSiteModelController
 */
class BinTipWeightController extends BaseSiteModelController {

    /**
     * Bin Tip Weight Actions [/packhouse/sites/{siteId}/bin-tip-weights/{id}]
     */

    /**
     * Retrieve a Single Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @return {Promise<BinTipWeightModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
        	.then((data) => {
        		resolve(new BinTipWeightModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {Object} json - The JSON Data to update a Bin Tip Weight
     * @return {Promise<BinTipWeightModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/bin-tip-weights/${id}`, json)
        	.then((data) => {
        		resolve(new BinTipWeightModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Bin Tip Weight Collection Actions [/packhouse/sites/{siteId}/bin-tip-weights]
     */

    /**
     * Retrieve a Collection of Bin Tip Weights
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<BinTipWeightModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/bin-tip-weights`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new BinTipWeightModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Bin Tip Weight
     * @return {Promise<BinTipWeightModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/bin-tip-weights`, json)
        	.then((data) => {
        		resolve(new BinTipWeightModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default BinTipWeightController;