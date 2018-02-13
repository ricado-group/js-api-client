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
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<PackingLine>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/sites/' + siteId + '/packing-lines/' + id + '')
        	.then((data) => {
        		resolve(new PackingLine(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @param {Object} json - The JSON Data to update a Packing Line
     * @return {Promise<PackingLine>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/sites/' + siteId + '/packing-lines/' + id + '', json)
        	.then((data) => {
        		resolve(new PackingLine(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/sites/' + siteId + '/packing-lines/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Packing Line Collection Actions [/sites/{siteId}/packing-lines]
     */

    /**
     * Retrieve a Collection of Packing Lines
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<Array[PackingLine]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/sites/' + siteId + '/packing-lines')
        	.then((data) => {
        		resolve(data.map(item => new PackingLine(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Packing Line
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Packing Line
     * @return {Promise<PackingLine>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/sites/' + siteId + '/packing-lines', json)
        	.then((data) => {
        		resolve(new PackingLine(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PackingLineController