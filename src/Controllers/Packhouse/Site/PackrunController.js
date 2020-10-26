/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import PackrunModel from '../../../Models/Packhouse/Site/PackrunModel';

/**
 * Controller Class for Packruns
 */
class PackrunController
{
    /**
     * Retrieve a Packrun [GET /packhouse/sites/{siteId}/packruns/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @return {Promise<PackrunModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}`)
            .then((result) => {
                resolve(new PackrunModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Packrun [PATCH /packhouse/sites/{siteId}/packruns/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @param {Object} updateData The Packrun Update Data
     * @param {string} [updateData.packingLineId] The Packing Line ID this Packrun is associated with
     * @param {Date} [updateData.createdTimestamp] When this Packrun was Created
     * @param {string} [updateData.growerName] The Grower Name for this Packrun
     * @param {string} [updateData.growerCode] The Grower Code for this Packrun
     * @param {string} [updateData.maturityArea] The Maturity Area for this Packrun
     * @param {?Date} [updateData.startTimestamp] When this Packrun was Started
     * @param {?Date} [updateData.finishTimestamp] When this Packrun was Finished
     * @param {string} [updateData.varietyId] The Variety for this Packrun
     * @param {?string} [updateData.growingMethodId] The Growing Method for this Packrun
     * @param {number} [updateData.allocatedBins] The Number of Allocated Bins for this Packrun
     * @param {Object[]} [updateData.timeBatches] The Time Batches for this Packrun
     * @return {Promise<PackrunModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packruns/${id}`, updateData)
            .then((result) => {
                resolve(new PackrunModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Packrun [DELETE /packhouse/sites/{siteId}/packruns/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packruns/${id}`)
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
     * Retrieve Comments [GET /packhouse/sites/{siteId}/packruns/{id}/comments]
     * 
     * Retrieves Comments for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @return {Promise<Array<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/packruns/{id}/comments]
     * 
     * Create a Comment for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/packruns/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @param {string} commentId The Comment ID
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/packruns/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<{id: string, content: ?string, createdTimestamp: ?Date, updatedTimestamp: ?Date}>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`, {content})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/packruns/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packruns/${id}/comments/${commentId}`)
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
     * Retrieve a Packrun Summary Report [GET /packhouse/sites/{siteId}/packruns/{id}/summaryReport]
     * 
     * Retrieves a Summary Report for a Packrun
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packrun ID
     * @return {Promise<{id: string, name: string, createdTimestamp: Date, growerName: string, growerCode: string, maturityArea: ?string, startTimestamp: ?Date, finishTimestamp: ?Date, allocatedBins: number, timeBatches: Array<{id: string, timestamp: Date}>, variety: {id: string, code: string, name: string, description: string, image: string}, growingMethod: {id: string, code: string, name: string, description: string}, packingLineId: string, packingLineName: ?string, classTypes: Array<{classType: string, name: string}>, compacSizers: Array<{id: string, name: string, batchSummaries: Array<{id: string, number: number, name: string, varietyName: string, timestamp: Date, totalFruitCount: number, totalFruitWeight: number, recycleFruitCount: number, recycleFruitWeight: number, recyclePercentage: number}>}>, rejectBinSummary: Object, binTipSummary: Object, classTypeTotals: Object[], class1SizerSummary: Object[], class1TotalTrays: number, class1AverageTrayWeight: number, class1FruitSizeProfile: Object[], class1AverageFruitSize: number, class1TraysPerBin: number, class1FreshPackSummary: Object[], class2SizerSummary: Object[], class2TotalTrays: number, class2AverageTrayWeight: number, class2FreshPackSummary: Object[]}>}
     */
    static getSummaryReport(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns/${id}/summaryReport`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Packruns [GET /packhouse/sites/{siteId}/packruns]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.packingLineId] The Packing Line ID this Packrun is associated with
     * @param {string} [queryParameters.name] The Packrun Name
     * @param {string} [queryParameters.growerName] The Grower Name for this Packrun
     * @param {string} [queryParameters.growerCode] The Grower Code for this Packrun
     * @param {string} [queryParameters.maturityArea] The Maturity Area for this Packrun
     * @param {string} [queryParameters.varietyId] The Variety for this Packrun
     * @param {?string} [queryParameters.growingMethodId] The Growing Method for this Packrun
     * @param {Date} [queryParameters.createdTimestampBegin] Filter by the Timestamp when this Packrun was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] Filter by the Timestamp when this Packrun was Created. Results Less than or Equal to Timestamp
     * @param {Date} [queryParameters.startTimestampBegin] Filter by the Timestamp when this Packrun was Started. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.startTimestampEnd] Filter by the Timestamp when this Packrun was Started. Results Less than or Equal to Timestamp
     * @param {Date} [queryParameters.finishTimestampBegin] Filter by the Timestamp when this Packrun was Finished. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.finishTimestampEnd] Filter by the Timestamp when this Packrun was Finished. Results Less than or Equal to Timestamp
     * @return {Promise<PackrunModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packruns`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new PackrunModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Packrun [POST /packhouse/sites/{siteId}/packruns]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} createData The Packrun Create Data
     * @param {string} createData.packingLineId The Packing Line ID this Packrun is associated with
     * @param {string} [createData.name] The Packrun Name
     * @param {Date} [createData.createdTimestamp] When this Packrun was Created
     * @param {string} createData.growerName The Grower Name for this Packrun
     * @param {string} createData.growerCode The Grower Code for this Packrun
     * @param {string} createData.maturityArea The Maturity Area for this Packrun
     * @param {?Date} createData.startTimestamp When this Packrun was Started
     * @param {?Date} createData.finishTimestamp When this Packrun was Finished
     * @param {string} createData.varietyId The Variety for this Packrun
     * @param {?string} createData.growingMethodId The Growing Method for this Packrun
     * @param {number} [createData.allocatedBins] The Number of Allocated Bins for this Packrun
     * @param {Object[]} [createData.timeBatches] The Time Batches for this Packrun
     * @return {Promise<PackrunModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/packruns`, createData)
            .then((result) => {
                resolve(new PackrunModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default PackrunController;