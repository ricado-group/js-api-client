import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import CompacSizerPackrunSummaryModel from '../../../Models/Packhouse/Site/CompacSizerPackrunSummaryModel';
/**
 * Controller Class for Compac Sizer Packrun Summaries
 * @extends BaseSiteModelController
 */
class CompacSizerPackrunSummaryController extends BaseSiteModelController {

    /**
     * Compac Sizer Packrun Summary Actions [/packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}]
     */

    /**
     * Retrieve a Single Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`)
        	.then((data) => {
        		resolve(new CompacSizerPackrunSummaryModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {Object} json - The JSON Data to update a Compac Sizer Packrun Summary
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`, json)
        	.then((data) => {
        		resolve(new CompacSizerPackrunSummaryModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`)
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
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getComments(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments`, queryParameters)
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
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static createComment(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments`, json)
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
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getOneComment(siteId, id, commentId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`, queryParameters)
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
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @param {Object} json - The JSON Data to PATCH
     * @return {Promise}
     */
    static updateOneComment(siteId, id, commentId, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`, json)
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
     * @param {string} id - The Compac Sizer Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Compac Sizer Packrun Summary Collection Actions [/packhouse/sites/{siteId}/compac-sizer-packrun-summaries]
     */

    /**
     * Retrieve a Collection of Compac Sizer Packrun Summaries
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<CompacSizerPackrunSummaryModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/compac-sizer-packrun-summaries`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new CompacSizerPackrunSummaryModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Compac Sizer Packrun Summary
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/compac-sizer-packrun-summaries`, json)
        	.then((data) => {
        		resolve(new CompacSizerPackrunSummaryModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default CompacSizerPackrunSummaryController;