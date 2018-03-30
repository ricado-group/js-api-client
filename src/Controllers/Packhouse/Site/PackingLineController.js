import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import PackingLineModel from '../../../Models/Packhouse/Site/PackingLineModel';
/**
 * Controller Class for Packing Lines
 * @extends BaseSiteModelController
 */
class PackingLineController extends BaseSiteModelController
{

    /**
     * Packing Line Actions [/packhouse/sites/{siteId}/packing-lines/{id}]
     */

    /**
     * Retrieve a Single Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<PackingLineModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/packhouse//sites/' + siteId + '/packing-lines/' + id + '')
        	.then((data) => {
        		resolve(new PackingLineModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @param {Object} json - The JSON Data to update a Packing Line
     * @return {Promise<PackingLineModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/packhouse/sites/' + siteId + '/packing-lines/' + id + '', json)
        	.then((data) => {
        		resolve(new PackingLineModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/packhouse/sites/' + siteId + '/packing-lines/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Packing Line Collection Actions [/packhouse/sites/{siteId}/packing-lines]
     */

    /**
     * Retrieve a Collection of Packing Lines
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<PackingLineModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/packhouse/sites/' + siteId + '/packing-lines')
        	.then((data) => {
        		resolve(data.map(item => new PackingLineModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Packing Line
     * @return {Promise<PackingLineModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/packhouse/sites/' + siteId + '/packing-lines', json)
        	.then((data) => {
        		resolve(new PackingLineModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PackingLineController