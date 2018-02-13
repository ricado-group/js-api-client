import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import PointModel from '../../Models/Site/PointModel';
/**
 * Controller Class for Points
 * @extends BaseSiteModelController
 */
class PointController extends BaseSiteModelController
{

    /**
     * Point Actions [/sites/{siteId}/points/{id}]
     */

    /**
     * Retrieve a Single Point
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @return {Promise<PointModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/sites/' + siteId + '/points/' + id + '')
        	.then((data) => {
        		resolve(new PointModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Point
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @param {Object} json - The JSON Data to update a Point
     * @return {Promise<PointModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/sites/' + siteId + '/points/' + id + '', json)
        	.then((data) => {
        		resolve(new PointModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Point
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} id - The Point ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/sites/' + siteId + '/points/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Point Collection Actions [/sites/{siteId}/points]
     */

    /**
     * Retrieve a Collection of Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<PointModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/sites/' + siteId + '/points')
        	.then((data) => {
        		resolve(data.map(item => new PointModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Point
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Point
     * @return {Promise<PointModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/sites/' + siteId + '/points', json)
        	.then((data) => {
        		resolve(new PointModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PointController