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
     * Update a Site
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @param {Object} json - The JSON Data to update a Site
     * @return {Promise<Site>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/sites/' + id + '', json)
        	.then((data) => {
        		resolve(new Site(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Site
     * 
     * @static
     * @public
     * @param {number} id - The Site ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete('/sites/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Site Collection Actions [/sites]
     */

    /**
     * Retrieve a Collection of Sites
     * 
     * @static
     * @public
     * @return {Promise<Array[Site]>}
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
     * Create a Site
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Site
     * @return {Promise<Site>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/sites', json)
        	.then((data) => {
        		resolve(new Site(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default SiteController