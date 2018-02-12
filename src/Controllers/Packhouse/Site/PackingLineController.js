import RequestHelper from '../../../RequestHelper';
import SiteModelController from '../../../Controllers/Site/SiteModelController';
import PackingLine from '../../../Models/Packhouse/Site/PackingLine';
/**
 * Controller Class for Packing Line Models. A part of the Packing Lines Group
 * @extends SiteModelController
 */
class PackingLineController extends SiteModelController
{

    /**
     * Packing Line Actions [/sites/{siteId}/packing-lines/{id}]
     */

    /**
     * Retrieve a Single Packing Line
     * 
     * @static
     * @public
     * @param {number} id - The Packing Line ID
     * @return {Promise<PackingLine>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + siteId + '/packing-lines/' + id + '')
        	.then((data) => {
        		resolve(new PackingLine(data));
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
     * @return {RICADO\Models\Packhouse\Site\PackingLine}
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
     * @return {RICADO\Models\Packhouse\Site\PackingLine}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Packing Line Collection Actions [/sites/{siteId}/packing-lines]
     */

    /**
     * Retrieve a Collection of Packing Lines
     * 
     * @static
     * @public
     * @return {Promise<PackingLine>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites/' + siteId + '/packing-lines')
        	.then((data) => {
        		resolve(data.map(item => new PackingLine(item)));
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
     * @return {RICADO\Models\Packhouse\Site\PackingLine}
     */
    static create()
    {
        // Code Here
    }
}

export default PackingLineController