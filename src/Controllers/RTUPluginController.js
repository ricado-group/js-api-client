import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import RTUPluginModel from '../Models/RTUPluginModel';
/**
 * Controller Class for RTUPlugins
 * @extends BaseGlobalModelController
 */
class RTUPluginController extends BaseGlobalModelController {

    /**
     * RTUPlugin Actions [/rtu-plugins/{id}]
     */

    /**
     * Retrieve a Single RTUPlugin
     * 
     * @static
     * @public
     * @param {string} id - The RTUPlugin ID
     * @return {Promise<RTUPluginModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/rtu-plugins/${id}`)
        	.then((data) => {
        		resolve(new RTUPluginModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a RTUPlugin
     * 
     * @static
     * @public
     * @param {string} id - The RTUPlugin ID
     * @param {Object} json - The JSON Data to update a RTUPlugin
     * @return {Promise<RTUPluginModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/rtu-plugins/${id}`, json)
        	.then((data) => {
        		resolve(new RTUPluginModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a RTUPlugin
     * 
     * @static
     * @public
     * @param {string} id - The RTUPlugin ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/rtu-plugins/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * RTUPlugin Collection Actions [/rtu-plugins]
     */

    /**
     * Retrieve a Collection of RTUPlugins
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<RTUPluginModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/rtu-plugins`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new RTUPluginModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a RTUPlugin
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new RTUPlugin
     * @return {Promise<RTUPluginModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/rtu-plugins`, json)
        	.then((data) => {
        		resolve(new RTUPluginModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RTUPluginController;