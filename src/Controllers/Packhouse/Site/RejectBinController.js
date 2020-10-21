import RequestHelper from '../../../RequestHelper';
import RejectBinModel from '../../../Models/Packhouse/Site/RejectBinModel';

/**
 * Controller Class for Reject Bins
 */
class RejectBinController
{
    // Reject Bin Actions [/packhouse/sites/{siteId}/reject-bins/{id}]

    /**
     * Retrieve a Reject Bin [GET /packhouse/sites/{siteId}/reject-bins/{id}]
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
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins/${id}`)
            .then((result) => {
                resolve(new RejectBinModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Reject Bin [PATCH /packhouse/sites/{siteId}/reject-bins/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {Object} updateData - The Reject Bin Update Data
     * @param {string} [updateData.rejectBinScaleId] - The Reject Bin Scale ID this Reject Bin is associated with
     * @param {Date} [updateData.createdTimestamp] - When this Reject Bin was Created
     * @param {string} [updateData.rejectBinScaleName] - The Name of the Reject Bin Scale where this Bin was Created
     * @param {?number} [updateData.tareWeight] - The Tare Weight Captured by the Reject Bin Scale
     * @param {?Date} [updateData.finalizedTimestamp] - When this Reject Bin was Finalized (No new Weights)
     * @param {Object[]} [updateData.freshPackMultiGrowerBins] - The Multi-Grower Bins that will be submitted to FreshPack
     * @return {Promise<RejectBinModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bins/${id}`, updateData)
            .then((result) => {
                resolve(new RejectBinModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Reject Bin [DELETE /packhouse/sites/{siteId}/reject-bins/{id}]
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
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bins/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/reject-bins/{id}/comments]
     * 
     * Retrieves Comments for a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/reject-bins/{id}/comments]
     * 
     * Create a Comment for a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/reject-bins/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/reject-bins/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Reject Bin
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bins/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/reject-bins/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Reject Bin
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

    // Reject Bin Collection Actions [/packhouse/sites/{siteId}/reject-bins]

    /**
     * List all Reject Bins [GET /packhouse/sites/{siteId}/reject-bins]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.rejectBinScaleId] - The Reject Bin Scale ID this Reject Bin is associated with
     * @param {string} [queryParameters.rejectBinScaleName] - The Name of the Reject Bin Scale where this Bin was Created
     * @param {Date} [queryParameters.createdTimestampBegin] - Filter by the Timestamp when this Reject Bin was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] - Filter by the Timestamp when this Reject Bin was Created. Results Less than or Equal to Timestamp
     * @param {Date} [queryParameters.finishTimestampBegin] - Filter by the Timestamp when this Reject Bin was Finalized. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.finishTimestampEnd] - Filter by the Timestamp when this Reject Bin was Finalized. Results Less than or Equal to Timestamp
     * @return {Promise<RejectBinModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bins`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new RejectBinModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Reject Bin [POST /packhouse/sites/{siteId}/reject-bins]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Reject Bin Create Data
     * @param {string} createData.rejectBinScaleId - The Reject Bin Scale ID this Reject Bin is associated with
     * @param {Date} [createData.createdTimestamp] - When this Reject Bin was Created
     * @param {string} createData.rejectBinScaleName - The Name of the Reject Bin Scale where this Bin was Created
     * @param {?number} createData.tareWeight - The Tare Weight Captured by the Reject Bin Scale
     * @param {?Date} createData.finalizedTimestamp - When this Reject Bin was Finalized (No new Weights)
     * @param {Object[]} [createData.freshPackMultiGrowerBins] - The Multi-Grower Bins that will be submitted to FreshPack
     * @return {Promise<RejectBinModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bins`, createData)
            .then((result) => {
                resolve(new RejectBinModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default RejectBinController;