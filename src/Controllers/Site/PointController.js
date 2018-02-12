import RequestHelper from '../../RequestHelper';
import SiteModelController from '../../Controllers/Site/SiteModelController';
import Point from '../../Models/Site/Point';
/**
 * Controller Class for Point Models. A part of the Points Group
 * @extends SiteModelController
 */
class PointController extends SiteModelController
{

    /**
     * Point Actions [/sites/{siteId}/points/{id}]
     */

    /**
     * Retrieve a Single Point
     * 
     * @static
     * @public
     * @param {number} id - The Point ID
     * @return {Promise<Point>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + siteId + '/points/' + id + '')
        	.then((data) => {
        		resolve(new Point(data));
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
     * @return {RICADO\Models\Site\Point}
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
     * @return {RICADO\Models\Site\Point}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Point Collection Actions [/sites/{siteId}/points]
     */

    /**
     * Retrieve a Collection of Points
     * 
     * @static
     * @public
     * @return {Promise<Point>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites/' + siteId + '/points')
        	.then((data) => {
        		resolve(data.map(item => new Point(item)));
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
     * @return {RICADO\Models\Site\Point}
     */
    static create()
    {
        // Code Here
    }
}

export default PointController