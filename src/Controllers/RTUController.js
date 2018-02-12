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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\RTU}
     */
    static update()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\RTU}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * RTU Collection Actions [/rtus]
     */

    /**
     * Retrieve a Collection of RTUs
     * 
     * @static
     * @public
     * @return {Promise<RTU>}
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\RTU}
     */
    static create()
    {
        // Code Here
    }
}

export default RTUController