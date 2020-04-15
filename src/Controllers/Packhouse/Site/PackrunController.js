import RequestHelper from '../../../RequestHelper';
import BaseSiteModelController from '../../../Controllers/Site/BaseSiteModelController';
import PackrunModel from '../../../Models/Packhouse/Site/PackrunModel';
/**
 * Controller Class for Packruns
 * @extends BaseSiteModelController
 */
class PackrunController extends BaseSiteModelController {

    /**
     * Packrun Actions [/packhouse/sites/{siteId}/packruns/{id}]
     */

    /**
     * Retrieve a Single Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @return {Promise<PackrunModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, `/packhouse/sites/${siteId}/packruns/${id}`)
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @param {Object} json - The JSON Data to update a Packrun
     * @return {Promise<PackrunModel>}
     */
    static update(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, `/packhouse/sites/${siteId}/packruns/${id}`, json)
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, `/packhouse/sites/${siteId}/packruns/${id}`)
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
     * @param {string} id - The Packrun ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getComments(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments`, queryParameters)
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
     * @param {string} id - The Packrun ID
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static createComment(siteId, id, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments`, json)
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
     * @param {string} id - The Packrun ID
     * @param {string} commentId - The Comment ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getOneComment(siteId, id, commentId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`, queryParameters)
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
     * @param {string} id - The Packrun ID
     * @param {string} commentId - The Comment ID
     * @param {Object} json - The JSON Data to PATCH
     * @return {Promise}
     */
    static updateOneComment(siteId, id, commentId, json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`, json)
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
     * @param {string} id - The Packrun ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Retrieve a Packrun Summary Report
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packrun ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise}
     */
    static getSummaryReport(siteId, id, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/summaryReport`, queryParameters)
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Packrun Collection Actions [/packhouse/sites/{siteId}/packruns]
     */

    /**
     * Retrieve a Collection of Packruns
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<PackrunModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, `/packhouse/sites/${siteId}/packruns`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new PackrunModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Packrun
     * @return {Promise<PackrunModel>}
     */
    static create(siteId, json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, `/packhouse/sites/${siteId}/packruns`, json)
        	.then((data) => {
        		resolve(new PackrunModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default PackrunController;