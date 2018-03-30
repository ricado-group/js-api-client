import RequestHelper from '../../../RequestHelper';
import PermanentObjectDataController from '../../../Controllers/Site/PermanentObjectDataController';
import PackrunModel from '../../../Models/Packhouse/Site/PackrunModel';
/**
 * Controller Class for Packruns
 * @extends PermanentObjectDataController
 */
class PackrunController extends PermanentObjectDataController
{

    /**
     * Packrun Actions [/packhouse/sites/{siteId}/packruns/{id}]
     */

    /**
     * Retrieve a Single Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @return {Promise<PackrunModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/packhouse/sites/' + siteId + '/packruns/' + id + '')
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @param {Object} json - The JSON Data to update a Packrun
     * @return {Promise<PackrunModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/packhouse/sites/' + siteId + '/packruns/' + id + '', json)
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/packhouse/sites/' + siteId + '/packruns/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Packrun Collection Actions [/packhouse/sites/{siteId}/packruns]
     */

    /**
     * Retrieve a Collection of Packruns
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<PackrunModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/packhouse/sites/' + siteId + '/packruns')
        	.then((data) => {
        		resolve(data.map(item => new PackrunModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Packrun
     * @return {Promise<PackrunModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/packhouse/sites/' + siteId + '/packruns', json)
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PackrunController