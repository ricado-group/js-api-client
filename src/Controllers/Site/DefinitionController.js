import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import DefinitionModel from '../../Models/Site/DefinitionModel';
/**
 * Controller Class for Definitions
 * @extends BaseSiteModelController
 */
class DefinitionController extends BaseSiteModelController {

    /**
     * Definition Actions [/sites/{siteId}/definitions/{id}]
     */

    /**
     * Retrieve a Single Definition
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @return {Promise<DefinitionModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/sites/${siteId}/definitions/${id}`)
        	.then((data) => {
        		resolve(new DefinitionModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Definition
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @param {Object} json - The JSON Data to update a Definition
     * @return {Promise<DefinitionModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/sites/${siteId}/definitions/${id}`, json)
        	.then((data) => {
        		resolve(new DefinitionModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Definition
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Definition ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/sites/${siteId}/definitions/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Definition Collection Actions [/sites/{siteId}/definitions]
     */

    /**
     * Retrieve a Collection of Definitions
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<DefinitionModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/sites/${siteId}/definitions`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new DefinitionModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Definition
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Definition
     * @return {Promise<DefinitionModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/sites/${siteId}/definitions`, json)
        	.then((data) => {
        		resolve(new DefinitionModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default DefinitionController;