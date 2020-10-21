import RequestHelper from '../../../RequestHelper';
import RejectBinScaleModel from '../../../Models/Packhouse/Site/RejectBinScaleModel';

/**
 * Controller Class for Reject Bin Scales
 */
class RejectBinScaleController
{
    // Reject Bin Scale Actions [/packhouse/sites/{siteId}/reject-bin-scales/{id}]

    /**
     * Retrieve a Reject Bin Scale [GET /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @return {Promise<RejectBinScaleModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`)
            .then((result) => {
                resolve(new RejectBinScaleModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Reject Bin Scale [PATCH /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @param {Object} updateData - The Reject Bin Scale Update Data
     * @param {string} [updateData.name] - The Name of this Reject Bin Scale
     * @param {Object} [updateData.points] - The Points used by this Reject Bin Scale
     * @param {string} [updateData.packingLineId] - The Packing Line that owns this Reject Bin Scale
     * @param {?string} [updateData.packrunSourceId] - The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * @param {?number} [updateData.packrunGroup] - The Packrun Group this Reject Bin Scale is a part of
     * @param {Object[]} [updateData.sources] - An Array of Sources that deliver Fruit to this Reject Bin Scale
     * @param {?Object} [updateData.autoPackrunChange] - The Auto Packrun Change Configuration for this Reject Bin Scale
     * @param {?Object} [updateData.freshPackIntegration] - The FreshPack Integration Configuration for this Reject Bin Scale
     * @return {Promise<RejectBinScaleModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`, updateData)
            .then((result) => {
                resolve(new RejectBinScaleModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Reject Bin Scale [DELETE /packhouse/sites/{siteId}/reject-bin-scales/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Reject Bin Scale ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-scales/${id}`)
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

    // Reject Bin Scale Collection Actions [/packhouse/sites/{siteId}/reject-bin-scales]

    /**
     * List all Reject Bin Scales [GET /packhouse/sites/{siteId}/reject-bin-scales]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Reject Bin Scale belongs to
     * @param {string} [queryParameters.name] - The Name of this Reject Bin Scale
     * @param {string} [queryParameters.packingLineId] - The Packing Line that owns this Reject Bin Scale
     * @param {?string} [queryParameters.packrunSourceId] - The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * @param {?number} [queryParameters.packrunGroup] - The Packrun Group this Reject Bin Scale is a part of
     * @return {Promise<RejectBinScaleModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-scales`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new RejectBinScaleModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Reject Bin Scale [POST /packhouse/sites/{siteId}/reject-bin-scales]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Reject Bin Scale Create Data
     * @param {?number} createData.rtuId - The RTU this Reject Bin Scale belongs to
     * @param {string} createData.name - The Name of this Reject Bin Scale
     * @param {Object} createData.points - The Points used by this Reject Bin Scale
     * @param {string} createData.packingLineId - The Packing Line that owns this Reject Bin Scale
     * @param {?string} createData.packrunSourceId - The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * @param {?number} createData.packrunGroup - The Packrun Group this Reject Bin Scale is a part of
     * @param {Object[]} [createData.sources] - An Array of Sources that deliver Fruit to this Reject Bin Scale
     * @param {?Object} createData.autoPackrunChange - The Auto Packrun Change Configuration for this Reject Bin Scale
     * @param {?Object} createData.freshPackIntegration - The FreshPack Integration Configuration for this Reject Bin Scale
     * @return {Promise<RejectBinScaleModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-scales`, createData)
            .then((result) => {
                resolve(new RejectBinScaleModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default RejectBinScaleController;