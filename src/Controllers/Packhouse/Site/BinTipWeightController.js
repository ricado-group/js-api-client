import RequestHelper from '../../../RequestHelper';
import BinTipWeightModel from '../../../Models/Packhouse/Site/BinTipWeightModel';

/**
 * Controller Class for Bin Tip Weights
 */
class BinTipWeightController
{
    // Bin Tip Weight Actions [/packhouse/sites/{siteId}/bin-tip-weights/{id}]

    /**
     * Retrieve a Bin Tip Weight [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @return {Promise<BinTipWeightModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
            .then((result) => {
                resolve(new BinTipWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Bin Tip Weight [PATCH /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {Object} updateData - The Bin Tip Weight Update Data
     * @param {string} [updateData.binTipId] - The Bin Tip ID associated with this Bin Weight
     * @param {Date} [updateData.createdTimestamp] - When this Bin Weight was Created
     * @param {string} [updateData.weightType] - The Bin Weight Type
     * @param {number} [updateData.weight] - The Bin Weight
     * @param {?string} [updateData.binScaleId] - The Bin Scale ID associated with this Bin Weight
     * @return {Promise<BinTipWeightModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`, updateData)
            .then((result) => {
                resolve(new BinTipWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Bin Tip Weight [DELETE /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments]
     * 
     * Retrieves Comments for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments]
     * 
     * Create a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Bin Tip Weight ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`)
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

    // Bin Tip Weight Collection Actions [/packhouse/sites/{siteId}/bin-tip-weights]

    /**
     * List all Bin Tip Weights [GET /packhouse/sites/{siteId}/bin-tip-weights]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.binTipId] - The Bin Tip ID associated with this Bin Weight
     * @param {string} [queryParameters.packrunId] - The Packrun ID associated with this Bin Weight
     * @param {string} [queryParameters.weightType] - The Bin Weight Type
     * @param {?string} [queryParameters.binScaleId] - The Bin Scale ID associated with this Bin Weight
     * @param {Date} [queryParameters.createdTimestampBegin] - Filter by the Timestamp when this Bin Tip Weight was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] - Filter by the Timestamp when this Bin Tip Weight was Created. Results Less than or Equal to Timestamp
     * @return {Promise<BinTipWeightModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new BinTipWeightModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Bin Tip Weight [POST /packhouse/sites/{siteId}/bin-tip-weights]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Bin Tip Weight Create Data
     * @param {string} createData.binTipId - The Bin Tip ID associated with this Bin Weight
     * @param {string} [createData.packrunId] - The Packrun ID associated with this Bin Weight
     * @param {Date} [createData.createdTimestamp] - When this Bin Weight was Created
     * @param {string} createData.weightType - The Bin Weight Type
     * @param {number} createData.weight - The Bin Weight
     * @param {?string} createData.binScaleId - The Bin Scale ID associated with this Bin Weight
     * @return {Promise<BinTipWeightModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/bin-tip-weights`, createData)
            .then((result) => {
                resolve(new BinTipWeightModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default BinTipWeightController;