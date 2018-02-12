import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import Site from '../Models/Site';
/**
 * Controller Class for Site Models. A part of the Sites Group
 * @extends GlobalModelController
 */
class SiteController extends GlobalModelController
{

    /**
     * Site Actions [/sites/{id}]
     */

    /**
     * Retrieve a Single Site
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @return {Promise<Site>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + id + '')
        	.then((data) => {
        		resolve(new Site(data));
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
     * @return {RICADO\Models\Site}
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
     * @return {RICADO\Models\Site}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Site Collection Actions [/sites]
     */

    /**
     * Retrieve a Collection of Sites
     * 
     * @static
     * @public
     * @return {Promise<Site>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites')
        	.then((data) => {
        		resolve(data.map(item => new Site(item)));
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
     * @return {RICADO\Models\Site}
     */
    static create()
    {
        // Code Here
    }
}

export default SiteController