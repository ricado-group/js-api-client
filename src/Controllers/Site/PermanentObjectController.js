import RequestHelper from '../../RequestHelper';
import SiteModelController from '../../Controllers/Site/SiteModelController';
import PermanentObject from '../../Models/Site/PermanentObject';
/**
 * Controller Class for Packing Line Models. A part of the Permanent Objects Group
 * @extends SiteModelController
 */
class PermanentObjectController extends SiteModelController
{

    /**
     * Packing Line Actions [/sites/{siteId}/permanent-objects/{id}]
     */

    /**
     * Retrieve a Single Packing Line
     * 
     * @static
     * @public
     * @param {number} id - The Packing Line ID
     * @return {Promise<PermanentObject>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + siteId + '/permanent-objects/' + id + '')
        	.then((data) => {
        		resolve(new PermanentObject(data));
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
     * @return {RICADO\Models\Site\PermanentObject}
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
     * @return {RICADO\Models\Site\PermanentObject}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Packing Line Collection Actions [/sites/{siteId}/permanent-objects]
     */

    /**
     * Retrieve a Collection of Packing Lines
     * 
     * @static
     * @public
     * @return {Promise<PermanentObject>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites/' + siteId + '/permanent-objects')
        	.then((data) => {
        		resolve(data.map(item => new PermanentObject(item)));
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
     * @return {RICADO\Models\Site\PermanentObject}
     */
    static create()
    {
        // Code Here
    }
}

export default PermanentObjectController