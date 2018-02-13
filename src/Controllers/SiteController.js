import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import SiteModel from '../Models/SiteModel';
/**
 * Controller Class for Sites
 * @extends BaseGlobalModelController
 */
class SiteController extends BaseGlobalModelController
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
     * @return {Promise<SiteModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/sites/' + id + '')
        	.then((data) => {
        		resolve(new SiteModel(data));
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
     * @return {Promise<SiteModel>}
     */
    static update(id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update('/sites/' + id + '', json)
        	.then((data) => {
        		resolve(new SiteModel(data));
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
     * @return {Promise<SiteModel[]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/sites')
        	.then((data) => {
        		resolve(data.map(item => new SiteModel(item)));
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
     * @return {Promise<SiteModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/sites', json)
        	.then((data) => {
        		resolve(new SiteModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default SiteController