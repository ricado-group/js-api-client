import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import RejectBinModel from '../../../Models/Packhouse/Site/RejectBinModel';
/**
 * Controller Class for Reject Bins
 * @extends BaseSiteModelController
 */
class RejectBinController extends BaseSiteModelController {

    /**
     * Reject Bin Actions [/packhouse/sites/{siteId}/reject-bins/{id}]
     */

    /**
     * Retrieve a Single Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @return {Promise<RejectBinModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {Object} json - The JSON Data to update a Reject Bin
     * @return {Promise<RejectBinModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`, json)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/reject-bins/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Retrieve Comments
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getComments(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments`, queryParameters)
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Comment
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static createComment(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Retrieve a Comment
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} commentId - The Comment ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getOneComment(siteId, id, commentId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments/${commentId}`, queryParameters)
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Comment
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} commentId - The Comment ID
     * @param {Object} json - The JSON Data to PATCH
     * @return {Promise}
     */
    static updateOneComment(siteId, id, commentId, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments/${commentId}`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Comment
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments/${commentId}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Reject Bin Collection Actions [/packhouse/sites/{siteId}/reject-bins]
     */

    /**
     * Retrieve a Collection of Reject Bins
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<RejectBinModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/reject-bins`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new RejectBinModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Reject Bin
     * @return {Promise<RejectBinModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/reject-bins`, json)
        	.then((data) => {
        		resolve(new RejectBinModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default RejectBinController;