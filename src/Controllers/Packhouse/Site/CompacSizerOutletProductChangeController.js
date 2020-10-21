import RequestHelper from '../../../RequestHelper';
import CompacSizerOutletProductChangeModel from '../../../Models/Packhouse/Site/CompacSizerOutletProductChangeModel';

/**
 * Controller Class for Compac Sizer Outlet Product Changes
 */
class CompacSizerOutletProductChangeController
{
    // Compac Sizer Outlet Product Change Actions [/packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}]

    /**
     * Retrieve a Compac Sizer Outlet Product Change [GET /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`)
            .then((result) => {
                resolve(new CompacSizerOutletProductChangeModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer Outlet Product Change [PATCH /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {Object} updateData - The Compac Sizer Outlet Product Change Update Data
     * @param {string} [updateData.compacSizerId] - The Compac Sizer ID this Outlet Change is associated with
     * @param {Date} [updateData.createdTimestamp] - When this Outlet Change occurred
     * @param {?string} [updateData.previousProductId] - The ID of the Previous Product that was active on the Outlet
     * @param {?string} [updateData.previousProductName] - The Name of the Previous Product that was active on the Outlet
     * @param {string} [updateData.newProductId] - The ID of the New Product that is now active on the Outlet
     * @param {string} [updateData.newProductName] - The Name of the New Product that is now active on the Outlet
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`, updateData)
            .then((result) => {
                resolve(new CompacSizerOutletProductChangeModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer Outlet Product Change [DELETE /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}/comments]
     * 
     * Retrieves Comments for a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}/comments]
     * 
     * Create a Comment for a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Compac Sizer Outlet Product Change
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer Outlet Product Change ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes/${id}/comments/${commentId}`)
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

    // Compac Sizer Outlet Product Change Collection Actions [/packhouse/sites/{siteId}/compac-sizer-outlet-product-changes]

    /**
     * List all Compac Sizer Outlet Product Changes [GET /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.compacSizerId] - The Compac Sizer ID this Outlet Change is associated with
     * @param {string} [queryParameters.outletNumber] - The Sizer Outlet Number this Outlet Change is associated with
     * @param {?string} [queryParameters.previousProductId] - The ID of the Previous Product that was active on the Outlet
     * @param {?string} [queryParameters.previousProductName] - The Name of the Previous Product that was active on the Outlet
     * @param {string} [queryParameters.newProductId] - The ID of the New Product that is now active on the Outlet
     * @param {string} [queryParameters.newProductName] - The Name of the New Product that is now active on the Outlet
     * @param {Date} [queryParameters.createdTimestampBegin] - Filter by the Timestamp when this Compac Sizer Outlet Product Change occurred. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] - Filter by the Timestamp when this Compac Sizer Outlet Product Change occurred. Results Less than or Equal to Timestamp
     * @return {Promise<CompacSizerOutletProductChangeModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new CompacSizerOutletProductChangeModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer Outlet Product Change [POST /packhouse/sites/{siteId}/compac-sizer-outlet-product-changes]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Compac Sizer Outlet Product Change Create Data
     * @param {string} createData.compacSizerId - The Compac Sizer ID this Outlet Change is associated with
     * @param {string} [createData.outletNumber] - The Sizer Outlet Number this Outlet Change is associated with
     * @param {Date} [createData.createdTimestamp] - When this Outlet Change occurred
     * @param {?string} createData.previousProductId - The ID of the Previous Product that was active on the Outlet
     * @param {?string} createData.previousProductName - The Name of the Previous Product that was active on the Outlet
     * @param {string} createData.newProductId - The ID of the New Product that is now active on the Outlet
     * @param {string} createData.newProductName - The Name of the New Product that is now active on the Outlet
     * @return {Promise<CompacSizerOutletProductChangeModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-outlet-product-changes`, createData)
            .then((result) => {
                resolve(new CompacSizerOutletProductChangeModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerOutletProductChangeController;