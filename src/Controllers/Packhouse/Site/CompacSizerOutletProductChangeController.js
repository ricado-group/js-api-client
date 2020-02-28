import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import CompacSizerOutletProductChangeModel from '../../../Models/Packhouse/Site/CompacSizerOutletProductChangeModel';
/**
 * Controller Class for Compac Sizer Outlet Product Changes
 * @extends BaseSiteModelController
 */
class CompacSizerOutletProductChangeController extends BaseSiteModelController {

    /**
     * Compac Sizer Outlet Product Change Actions [/packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}]
     */

    /**
     * Retrieve a Single Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`)
        	.then((data) => {
        		resolve(new CompacSizerOutletProductChangeModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {Object} json - The JSON Data to update a Compac Sizer Outlet Product Change
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`, json)
        	.then((data) => {
        		resolve(new CompacSizerOutletProductChangeModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Compac Sizer Outlet Product Change Collection Actions [/packhouse/sites/{siteId}/compac-sizer-outlet-product-changes]
     */

    /**
     * Retrieve a Collection of Compac Sizer Outlet Product Changes
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<CompacSizerOutletProductChangeModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new CompacSizerOutletProductChangeModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Compac Sizer Outlet Product Change
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes`, json)
        	.then((data) => {
        		resolve(new CompacSizerOutletProductChangeModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompacSizerOutletProductChangeController;