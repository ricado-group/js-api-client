import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import VarietyModel from '../../../Models/Packhouse/Site/VarietyModel';
/**
 * Controller Class for Varieties
 * @extends BaseSiteModelController
 */
class VarietyController extends BaseSiteModelController
{

    /**
     * Variety Actions [/packhouse/sites/{siteId}/varieties/{id}]
     */

    /**
     * Retrieve a Single Variety
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @return {Promise<VarietyModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/packhouse/sites/' + siteId + '/varieties/' + id + '')
        	.then((data) => {
        		resolve(new VarietyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Variety
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @param {Object} json - The JSON Data to update a Variety
     * @return {Promise<VarietyModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/packhouse/sites/' + siteId + '/varieties/' + id + '', json)
        	.then((data) => {
        		resolve(new VarietyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Variety
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Variety ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/packhouse/sites/' + siteId + '/varieties/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Variety Collection Actions [/packhouse/sites/{siteId}/varieties]
     */

    /**
     * Retrieve a Collection of Varieties
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<VarietyModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/packhouse/sites/' + siteId + '/varieties')
        	.then((data) => {
        		resolve(data.map(item => new VarietyModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Variety
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Variety
     * @return {Promise<VarietyModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/packhouse/sites/' + siteId + '/varieties', json)
        	.then((data) => {
        		resolve(new VarietyModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default VarietyController