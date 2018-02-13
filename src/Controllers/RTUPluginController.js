import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import RTUPlugin from '../Models/RTUPlugin';
/**
 * Controller Class for RTUPlugin Models. A part of the RTU Plugins Group
 * @extends GlobalModelController
 */
class RTUPluginController extends GlobalModelController
{

    /**
     * RTUPlugin Actions [/rtu-plugins/{id}]
     */

    /**
     * Retrieve a Single RTUPlugin
     * 
     * @static
     * @public
     * @param {string} id - The RTUPlugin ID
     * @return {Promise<RTUPlugin>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/rtu-plugins/' + id + '')
        	.then((data) => {
        		resolve(new RTUPlugin(data));
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
     * @return {Promise<RTUPlugin>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/rtu-plugins/' + id + '', json)
        	.then((data) => {
        		resolve(new RTUPlugin(data));
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
        	super.delete('/rtu-plugins/' + id + '')
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
     * @return {Promise<Array[RTUPlugin]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/rtu-plugins')
        	.then((data) => {
        		resolve(data.map(item => new RTUPlugin(item)));
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
     * @return {Promise<RTUPlugin>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/rtu-plugins', json)
        	.then((data) => {
        		resolve(new RTUPlugin(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RTUPluginController