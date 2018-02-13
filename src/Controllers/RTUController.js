import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import RTU from '../Models/RTU';
/**
 * Controller Class for RTU Models. A part of the RTUs Group
 * @extends GlobalModelController
 */
class RTUController extends GlobalModelController
{

    /**
     * RTU Actions [/rtus/{id}]
     */

    /**
     * Retrieve a Single RTU
     * 
     * @static
     * @public
     * @param {number} id - The RTU ID
     * @return {Promise<RTU>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/rtus/' + id + '')
        	.then((data) => {
        		resolve(new RTU(data));
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
     * @return {Promise<RTU>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/rtus/' + id + '', json)
        	.then((data) => {
        		resolve(new RTU(data));
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
        	super.delete('/rtus/' + id + '')
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
     * @return {Promise<Array[RTU]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/rtus')
        	.then((data) => {
        		resolve(data.map(item => new RTU(item)));
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
     * @return {Promise<RTU>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/rtus', json)
        	.then((data) => {
        		resolve(new RTU(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RTUController