/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerBatchModel from '../../../Models/Packhouse/Site/CompacSizerBatchModel';

/**
 * Controller Class for Compac Sizer Batches
 */
class CompacSizerBatchController
{
    /**
     * Retrieve a Compac Sizer Batch [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<CompacSizerBatchModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
            .then((result) => {
                resolve(new CompacSizerBatchModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer Batch [PATCH /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {CompacSizerBatchController.UpdateData} updateData The Compac Sizer Batch Update Data
     * @return {Promise<CompacSizerBatchModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`, updateData)
            .then((result) => {
                resolve(new CompacSizerBatchModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer Batch [DELETE /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments]
     * 
     * Retrieves Comments for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<Array<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments]
     * 
     * Create a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizer Batches [GET /packhouse/sites/{siteId}/compac-sizer-batches]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.compacSizerId] The Compac Sizer ID this Batch is associated with
     * @param {string} [queryParameters.batchId] The Numeric Compac Batch ID
     * @param {?string} [queryParameters.packrunId] The Packrun ID associated with this Batch
     * @param {Date} [queryParameters.createdTimestampBegin] Filter by the Timestamp when this Compac Sizer Batch was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] Filter by the Timestamp when this Compac Sizer Batch was Created. Results Less than or Equal to Timestamp
     * @param {string} [queryParameters.batchName] Filter by the Compac Batch Name
     * @return {Promise<CompacSizerBatchModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new CompacSizerBatchModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer Batch [POST /packhouse/sites/{siteId}/compac-sizer-batches]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerBatchController.CreateData} createData The Compac Sizer Batch Create Data
     * @return {Promise<CompacSizerBatchModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-batches`, createData)
            .then((result) => {
                resolve(new CompacSizerBatchModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerBatchController;

/**
 * The Create Data for a Compac Sizer Batch
 * 
 * @typedef {Object} CompacSizerBatchController.CreateData
 * @property {string} compacSizerId The Compac Sizer ID this Batch is associated with
 * @property {string} [batchId] The Numeric Compac Batch ID
 * @property {Date} [createdTimestamp] When this Batch was Created
 * @property {?string} packrunId The Packrun ID associated with this Batch
 * @property {Object} batch The Compac Sizer Batch Data
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer Batch
 * 
 * @typedef {Object} CompacSizerBatchController.UpdateData
 * @property {string} [compacSizerId] The Compac Sizer ID this Batch is associated with
 * @property {Date} [createdTimestamp] When this Batch was Created
 * @property {?string} [packrunId] The Packrun ID associated with this Batch
 * @property {Object} [batch] The Compac Sizer Batch Data
 * @memberof Controllers.Packhouse.Site
 */