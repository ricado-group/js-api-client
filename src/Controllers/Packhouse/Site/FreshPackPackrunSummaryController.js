import RequestHelper from '../../../RequestHelper';
import FreshPackPackrunSummaryModel from '../../../Models/Packhouse/Site/FreshPackPackrunSummaryModel';

/**
 * Controller Class for FreshPack Packrun Summaries
 */
class FreshPackPackrunSummaryController
{
    // FreshPack Packrun Summary Actions [/packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}]

    /**
     * Retrieve a FreshPack Packrun Summary [GET /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @return {Promise<FreshPackPackrunSummaryModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}`)
            .then((result) => {
                resolve(new FreshPackPackrunSummaryModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a FreshPack Packrun Summary [PATCH /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @param {Object} updateData - The FreshPack Packrun Summary Update Data
     * @param {string} [updateData.packingLineId] - The Packing Line ID this Summary is associated with
     * @param {Date} [updateData.createdTimestamp] - When this Summary was Created
     * @param {?string} [updateData.timeBatchId] - The Time Batch this Summary is associated with
     * @param {Object[]} [updateData.traySummaries] - An Array of Tray Summary Data Objects for all Sizes and Class Types
     * @return {Promise<FreshPackPackrunSummaryModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}`, updateData)
            .then((result) => {
                resolve(new FreshPackPackrunSummaryModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a FreshPack Packrun Summary [DELETE /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}/comments]
     * 
     * Retrieves Comments for a FreshPack Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}/comments]
     * 
     * Create a Comment for a FreshPack Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a FreshPack Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Update a Comment for a FreshPack Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/freshpack-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a FreshPack Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The FreshPack Packrun Summary ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries/${id}/comments/${commentId}`)
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

    // FreshPack Packrun Summary Collection Actions [/packhouse/sites/{siteId}/freshpack-packrun-summaries]

    /**
     * List all FreshPack Packrun Summaries [GET /packhouse/sites/{siteId}/freshpack-packrun-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.packingLineId] - The Packing Line ID this Summary is associated with
     * @param {string} [queryParameters.packrunId] - The Packrun ID this Summary is associated with
     * @param {?string} [queryParameters.timeBatchId] - The Time Batch this Summary is associated with
     * @param {Date} [queryParameters.createdTimestampBegin] - Filter by the Timestamp when this FreshPack Packrun Summary was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] - Filter by the Timestamp when this FreshPack Packrun Summary was Created. Results Less than or Equal to Timestamp
     * @return {Promise<FreshPackPackrunSummaryModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new FreshPackPackrunSummaryModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a FreshPack Packrun Summary [POST /packhouse/sites/{siteId}/freshpack-packrun-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The FreshPack Packrun Summary Create Data
     * @param {string} createData.packingLineId - The Packing Line ID this Summary is associated with
     * @param {string} [createData.packrunId] - The Packrun ID this Summary is associated with
     * @param {Date} [createData.createdTimestamp] - When this Summary was Created
     * @param {?string} createData.timeBatchId - The Time Batch this Summary is associated with
     * @param {Object[]} [createData.traySummaries] - An Array of Tray Summary Data Objects for all Sizes and Class Types
     * @return {Promise<FreshPackPackrunSummaryModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/freshpack-packrun-summaries`, createData)
            .then((result) => {
                resolve(new FreshPackPackrunSummaryModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default FreshPackPackrunSummaryController;