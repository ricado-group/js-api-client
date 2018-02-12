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
     * @param {number} id - The RTUPlugin ID
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\RTUPlugin}
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
     * @return {RICADO\Models\RTUPlugin}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * RTUPlugin Collection Actions [/rtu-plugins]
     */

    /**
     * Retrieve a Collection of RTUPlugins
     * 
     * @static
     * @public
     * @return {Promise<RTUPlugin>}
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\RTUPlugin}
     */
    static create()
    {
        // Code Here
    }
}

export default RTUPluginController