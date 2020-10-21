import RequestHelper from '../../RequestHelper';
import PermanentObjectDataModel from '../../Models/Site/PermanentObjectDataModel';

/**
 * Controller Class for Permanent Object Data
 */
class PermanentObjectDataController
{
    // Permanent Object Data Actions [/sites/{siteId}/permanent-object-data/{id}]

    /**
     * Retrieve a Permanent Object Data [GET /sites/{siteId}/permanent-object-data/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @return {Promise<PermanentObjectDataModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-object-data/${id}`)
            .then((result) => {
                resolve(new PermanentObjectDataModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Permanent Object Data [PATCH /sites/{siteId}/permanent-object-data/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {Object} updateData - The Permanent Object Data Update Data
     * @param {string} [updateData.permanentObjectId] - The Permanent Object this Data is related to
     * @param {string} [updateData.type] - The Permanent Object Data Type
     * @param {Date} [updateData.timestamp] - The Timestamp when this Data was Created
     * @param {Object} [updateData.data] - The Data Object specific to this Permanent Object Data Type
     * @return {Promise<PermanentObjectDataModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/permanent-object-data/${id}`, updateData)
            .then((result) => {
                resolve(new PermanentObjectDataModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Permanent Object Data [DELETE /sites/{siteId}/permanent-object-data/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/permanent-object-data/${id}`)
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
     * Retrieve Comments [GET /sites/{siteId}/permanent-object-data/{id}/comments]
     * 
     * Retrieves Comments for a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}[]>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-object-data/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /sites/{siteId}/permanent-object-data/{id}/comments]
     * 
     * Create a Comment for a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {string} content - The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/permanent-object-data/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /sites/{siteId}/permanent-object-data/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-object-data/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /sites/{siteId}/permanent-object-data/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {string} commentId - The Comment ID
     * @param {string} content - The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/sites/${siteId}/permanent-object-data/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /sites/{siteId}/permanent-object-data/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Permanent Object Data
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Permanent Object Data ID
     * @param {string} commentId - The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/sites/${siteId}/permanent-object-data/${id}/comments/${commentId}`)
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

    // Permanent Object Data Collection Actions [/sites/{siteId}/permanent-object-data]

    /**
     * List all Permanent Object Data [GET /sites/{siteId}/permanent-object-data]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.keyIndex] - An Optional Key Index for this Data
     * @param {string} [queryParameters.permanentObjectId] - The Permanent Object this Data is related to
     * @param {string} [queryParameters.type] - The Permanent Object Data Type
     * @param {Date} [queryParameters.timestampBegin] - Filter by the Timestamp when this Data was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.timestampEnd] - Filter by the Timestamp when this Data was Created. Results Less than or Equal to Timestamp
     * @return {Promise<PermanentObjectDataModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/sites/${siteId}/permanent-object-data`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new PermanentObjectDataModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Permanent Object Data [POST /sites/{siteId}/permanent-object-data]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Permanent Object Data Create Data
     * @param {string} [createData.keyIndex] - An Optional Key Index for this Data
     * @param {string} createData.permanentObjectId - The Permanent Object this Data is related to
     * @param {string} createData.type - The Permanent Object Data Type
     * @param {Date} [createData.timestamp] - The Timestamp when this Data was Created
     * @param {Object} [createData.data] - The Data Object specific to this Permanent Object Data Type
     * @return {Promise<PermanentObjectDataModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/sites/${siteId}/permanent-object-data`, createData)
            .then((result) => {
                resolve(new PermanentObjectDataModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default PermanentObjectDataController;