import RequestHelper from '../../RequestHelper';
import SiteModelController from '../../Controllers/Site/SiteModelController';
import TemporaryObject from '../../Models/Site/TemporaryObject';
/**
 * Controller Class for Temporary Object Models. A part of the Temporary Objects Group
 * @extends SiteModelController
 */
class TemporaryObjectController extends SiteModelController
{

    /**
     * Temporary Object Actions [/sites/{siteId}/temporary-objects/{id}]
     */

    /**
     * Retrieve a Single Temporary Object
     * 
     * @static
     * @public
     * @param {number} id - The Temporary Object ID
     * @return {Promise<TemporaryObject>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + siteId + '/temporary-objects/' + id + '')
        	.then((data) => {
        		resolve(new TemporaryObject(data));
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
     * @return {RICADO\Models\Site\TemporaryObject}
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
     * @return {RICADO\Models\Site\TemporaryObject}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Temporary Object Collection Actions [/sites/{siteId}/temporary-objects]
     */

    /**
     * Retrieve a Collection of Temporary Objects
     * 
     * @static
     * @public
     * @return {Promise<TemporaryObject>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites/' + siteId + '/temporary-objects')
        	.then((data) => {
        		resolve(data.map(item => new TemporaryObject(item)));
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
     * @return {RICADO\Models\Site\TemporaryObject}
     */
    static create()
    {
        // Code Here
    }
}

export default TemporaryObjectController