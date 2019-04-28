import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import PermanentObjectDataModel from '../../Models/Site/PermanentObjectDataModel';
/**
 * Controller Class for Permanent Object Data
 * @extends BaseSiteModelController
 */
class PermanentObjectDataController extends BaseSiteModelController {

    /**
     * Permanent Object Data Actions [/sites/{siteId}/permanent-object-data/{id}]
     */

    /**
     * Retrieve a Single Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @return {Promise<PermanentObjectDataModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/sites/${siteId}/permanent-object-data/${id}`)
        	.then((data) => {
        		resolve(new PermanentObjectDataModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {Object} json - The JSON Data to update a Permanent Object Data
     * @return {Promise<PermanentObjectDataModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/sites/${siteId}/permanent-object-data/${id}`, json)
        	.then((data) => {
        		resolve(new PermanentObjectDataModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/sites/${siteId}/permanent-object-data/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Permanent Object Data Collection Actions [/sites/{siteId}/permanent-object-data]
     */

    /**
     * Retrieve a Collection of Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<PermanentObjectDataModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/sites/${siteId}/permanent-object-data`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new PermanentObjectDataModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Permanent Object Data
     * @return {Promise<PermanentObjectDataModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/sites/${siteId}/permanent-object-data`, json)
        	.then((data) => {
        		resolve(new PermanentObjectDataModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PermanentObjectDataController;