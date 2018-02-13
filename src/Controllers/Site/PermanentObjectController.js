import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import PermanentObjectModel from '../../Models/Site/PermanentObjectModel';
/**
 * Controller Class for Permanent Objects
 * @extends BaseSiteModelController
 */
class PermanentObjectController extends BaseSiteModelController
{

    /**
     * Permanent Object Actions [/sites/{siteId}/permanent-objects/{id}]
     */

    /**
     * Retrieve a Single Permanent Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @return {Promise<PermanentObjectModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/sites/' + siteId + '/permanent-objects/' + id + '')
        	.then((data) => {
        		resolve(new PermanentObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Permanent Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @param {Object} json - The JSON Data to update a Permanent Object
     * @return {Promise<PermanentObjectModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/sites/' + siteId + '/permanent-objects/' + id + '', json)
        	.then((data) => {
        		resolve(new PermanentObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Permanent Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/sites/' + siteId + '/permanent-objects/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Permanent Object Collection Actions [/sites/{siteId}/permanent-objects]
     */

    /**
     * Retrieve a Collection of Permanent Objects
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<PermanentObjectModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/sites/' + siteId + '/permanent-objects')
        	.then((data) => {
        		resolve(data.map(item => new PermanentObjectModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Permanent Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Permanent Object
     * @return {Promise<PermanentObjectModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/sites/' + siteId + '/permanent-objects', json)
        	.then((data) => {
        		resolve(new PermanentObjectModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PermanentObjectController