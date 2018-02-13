import RequestHelper from '../../RequestHelper';
import ModelController from '../../Controllers/ModelController';
/**
 * Abstract SiteModelController Class
 * @abstract
 * @extends ModelController
 */
class SiteModelController extends ModelController
{
    /**
     * Single Model Object Actions
     */

    /**
     * Retrieve a Single Model Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} path - The Path to the Single Model
     * @returns {Promise<SiteModel>}
     */
    static getOne(siteId, path)
    {
        if(path.startsWith("/sites/") !== true)
        {
            path = "/sites/" + siteId + path;
        }
        
        return new Promise((resolve, reject) => {
            super.getOne(path)
            .then((data) => {
                data.siteId = siteId;
                resolve(data);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Single Model Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} path - The Path to the Single Model
     * @param {Object} json - The JSON Data to update a Model Object
     * @returns {Promise<SiteModel>}
     */
    static update(siteId, path, json)
    {
        if(path.startsWith("/sites/") !== true)
        {
            path = "/sites/" + siteId + path;
        }
        
        return new Promise((resolve, reject) => {
        	super.update(path, json)
        	.then((data) => {
        		data.siteId = siteId;
                resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Single Model Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} path - The Path to the Single Model
     * @returns {Promise<boolean>}
     */
    static delete(siteId, path)
    {
        if(path.startsWith("/sites/") !== true)
        {
            path = "/sites/" + siteId + path;
        }
        
        return new Promise((resolve, reject) => {
        	super.delete(path)
        	.then((result) => {
                resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Model Object Collection Actions
     */

    /**
     * Retrieve a Collection of Model Objects
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} path - The Path to the Model Collection
     * @returns {Promise<Array[SiteModel]>}
     */
    static getAll(siteId, path)
    {
        if(path.startsWith("/sites/") !== true)
        {
            path = "/sites/" + siteId + path;
        }
        
        return new Promise((resolve, reject) => {
            super.getAll(path)
            .then(data => {
                resolve(data.map((item) => {
                    item.siteId = siteId;
                    return item;
                }));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a new Model Object
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} path - The Path to the Model Collection
     * @param {Object} json - The JSON Data for a new Model Object
     * @returns {Promise<SiteModel>}
     */
    static create(siteId, path, json)
    {
        if(path.startsWith("/sites/") !== true)
        {
            path = "/sites/" + siteId + path;
        }
        
        return new Promise((resolve, reject) => {
        	super.create(path, json)
        	.then((data) => {
                data.siteId = siteId;
                resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default SiteModelController