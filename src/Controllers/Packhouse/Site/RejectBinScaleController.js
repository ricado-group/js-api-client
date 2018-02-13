import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import RejectBinScaleModel from '../../../Models/Packhouse/Site/RejectBinScaleModel';
/**
 * Controller Class for Reject Bin Scales
 * @extends BaseSiteModelController
 */
class RejectBinScaleController extends BaseSiteModelController {
  /**
     * Reject Bin Scale Actions [/sites/{siteId}/reject-bin-scales/{id}]
     */

  /**
     * Retrieve a Single Reject Bin Scale
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @return {Promise<RejectBinScaleModel>}
     */
  static getOne(siteId, id) {
    return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/sites/${siteId}/reject-bin-scales/${id}`)
        	.then((data) => {
        		resolve(new RejectBinScaleModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Update a Reject Bin Scale
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @param {Object} json - The JSON Data to update a Reject Bin Scale
     * @return {Promise<RejectBinScaleModel>}
     */
  static update(siteId, id, json) {
    return new Promise((resolve, reject) => {
        	super.update(siteId, `/sites/${siteId}/reject-bin-scales/${id}`, json)
        	.then((data) => {
        		resolve(new RejectBinScaleModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Delete a Reject Bin Scale
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @return {Promise<boolean>}
     */
  static delete(siteId, id) {
    return new Promise((resolve, reject) => {
        	super.delete(siteId, `/sites/${siteId}/reject-bin-scales/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Reject Bin Scale Collection Actions [/sites/{siteId}/reject-bin-scales]
     */

  /**
     * Retrieve a Collection of Reject Bin Scales
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<RejectBinScaleModel[]>}
     */
  static getAll(siteId) {
    return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/sites/${siteId}/reject-bin-scales`)
        	.then((data) => {
        		resolve(data.map(item => new RejectBinScaleModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Create a Reject Bin Scale
     *
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Reject Bin Scale
     * @return {Promise<RejectBinScaleModel>}
     */
  static create(siteId, json) {
    return new Promise((resolve, reject) => {
        	super.create(siteId, `/sites/${siteId}/reject-bin-scales`, json)
        	.then((data) => {
        		resolve(new RejectBinScaleModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }
}

export default RejectBinScaleController;
