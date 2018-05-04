import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import RTUModel from '../Models/RTUModel';
/**
 * Controller Class for RTUs
 * @extends BaseGlobalModelController
 */
class RTUController extends BaseGlobalModelController {

    /**
     * RTU Actions [/rtus/{id}]
     */

    /**
     * Retrieve a Single RTU
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @return {Promise<RTUModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/rtus/${id}`)
        	.then((data) => {
        		resolve(new RTUModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a RTU
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @param {Object} json - The JSON Data to update a RTU
     * @return {Promise<RTUModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/rtus/${id}`, json)
        	.then((data) => {
        		resolve(new RTUModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a RTU
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/rtus/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * RTU Collection Actions [/rtus]
     */

    /**
     * Retrieve a Collection of RTUs
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<RTUModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/rtus`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new RTUModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a RTU
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new RTU
     * @return {Promise<RTUModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/rtus`, json)
        	.then((data) => {
        		resolve(new RTUModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RTUController;