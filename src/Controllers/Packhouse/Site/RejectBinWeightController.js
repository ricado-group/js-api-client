import RequestHelper from '../../../RequestHelper';
import RejectBinWeightModel from '../../../Models/Packhouse/Site/RejectBinWeightModel';

/**
 * Controller Class for Reject Bin Weights
 */
class RejectBinWeightController
{
    // Reject Bin Weight Actions [/packhouse/sites/{siteId}/reject-bin-weights/{id}]

    /**
     * Retrieve a Reject Bin Weight [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @return {Promise<RejectBinWeightModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`)
            .then((result) => {
                resolve(new RejectBinWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Reject Bin Weight [PATCH /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @param {Object} updateData - The Reject Bin Weight Update Data
     * @param {string} [updateData.rejectBinScaleId] - The Reject Bin Scale ID this Reject Weight is associated with
     * @param {Date} [updateData.createdTimestamp] - When this Reject Bin Weight was Created
     * @param {?string} [updateData.packrunId] - The Packrun this Reject Weight is associated with
     * @param {number} [updateData.netWeight] - The Net Weight Captured by the Reject Bin Scale
     * @param {Object[]} [updateData.sources] - The Source Weights that make up the Net Weight
     * @param {Object[]} [updateData.freshPackMultiGrowerBinWeights] - The Multi-Grower Bin Weights that will be submitted to FreshPack
     * @return {Promise<RejectBinWeightModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`, updateData)
            .then((result) => {
                resolve(new RejectBinWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Reject Bin Weight [DELETE /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments]
     * 
     * Retrieves Comments for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments]
     * 
     * Create a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Weight ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`)
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

    // Reject Bin Weight Collection Actions [/packhouse/sites/{siteId}/reject-bin-weights]

    /**
     * List all Reject Bin Weights [GET /packhouse/sites/{siteId}/reject-bin-weights]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.rejectBinScaleId] - The Reject Bin Scale ID this Reject Weight is associated with
     * @param {string} [queryParameters.rejectBinId] - The Reject Bin ID this Reject Weight is associated with
     * @param {?string} [queryParameters.packrunId] - The Packrun this Reject Weight is associated with
     * @param {Date} [queryParameters.createdTimestampBegin] - Filter by the Timestamp when this Reject Bin Weight was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] - Filter by the Timestamp when this Reject Bin Weight was Created. Results Less than or Equal to Timestamp
     * @return {Promise<RejectBinWeightModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new RejectBinWeightModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Reject Bin Weight [POST /packhouse/sites/{siteId}/reject-bin-weights]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Reject Bin Weight Create Data
     * @param {string} createData.rejectBinScaleId - The Reject Bin Scale ID this Reject Weight is associated with
     * @param {string} [createData.rejectBinId] - The Reject Bin ID this Reject Weight is associated with
     * @param {Date} [createData.createdTimestamp] - When this Reject Bin Weight was Created
     * @param {?string} createData.packrunId - The Packrun this Reject Weight is associated with
     * @param {number} createData.netWeight - The Net Weight Captured by the Reject Bin Scale
     * @param {Object[]} [createData.sources] - The Source Weights that make up the Net Weight
     * @param {Object[]} createData.freshPackMultiGrowerBinWeights - The Multi-Grower Bin Weights that will be submitted to FreshPack
     * @return {Promise<RejectBinWeightModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-weights`, createData)
            .then((result) => {
                resolve(new RejectBinWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default RejectBinWeightController;