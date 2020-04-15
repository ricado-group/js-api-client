import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import CompacSizerBatchModel from '../../../Models/Packhouse/Site/CompacSizerBatchModel';
/**
 * Controller Class for Compac Sizer Batches
 * @extends BaseSiteModelController
 */
class CompacSizerBatchController extends BaseSiteModelController {

    /**
     * Compac Sizer Batch Actions [/packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     */

    /**
     * Retrieve a Single Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @return {Promise<CompacSizerBatchModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @param {Object} json - The JSON Data to update a Compac Sizer Batch
     * @return {Promise<CompacSizerBatchModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`, json)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Batch ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
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
     * @param {string} id - The Compac Sizer Batch ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getComments(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`, queryParameters)
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
     * @param {string} id - The Compac Sizer Batch ID
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static createComment(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`, json)
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
     * @param {string} id - The Compac Sizer Batch ID
     * @param {string} commentId - The Comment ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getOneComment(siteId, id, commentId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`, queryParameters)
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
     * @param {string} id - The Compac Sizer Batch ID
     * @param {string} commentId - The Comment ID
     * @param {Object} json - The JSON Data to PATCH
     * @return {Promise}
     */
    static updateOneComment(siteId, id, commentId, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`, json)
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
     * @param {string} id - The Compac Sizer Batch ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Compac Sizer Batch Collection Actions [/packhouse/sites/{siteId}/compac-sizer-batches]
     */

    /**
     * Retrieve a Collection of Compac Sizer Batches
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<CompacSizerBatchModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new CompacSizerBatchModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Compac Sizer Batch
     * @return {Promise<CompacSizerBatchModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/compac-sizer-batches`, json)
        	.then((data) => {
        		resolve(new CompacSizerBatchModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompacSizerBatchController;