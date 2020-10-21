import RequestHelper from '../../../RequestHelper';
import PackingLineModel from '../../../Models/Packhouse/Site/PackingLineModel';

/**
 * Controller Class for Packing Lines
 */
class PackingLineController
{
    // Packing Line Actions [/packhouse/sites/{siteId}/packing-lines/{id}]

    /**
     * Retrieve a Packing Line [GET /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<PackingLineModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
            .then((result) => {
                resolve(new PackingLineModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Packing Line [PATCH /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @param {Object} updateData - The Packing Line Update Data
     * @param {string} [updateData.name] - The Packing Line Name
     * @param {Object} [updateData.points] - The Points used by this Packing Line
     * @param {Object[]} [updateData.sizers] - The Sizer Objects that belong to this Packing Line
     * @param {Object[]} [updateData.binTips] - The Bin Tip Objects that belong to this this Packing Line
     * @param {Object[]} [updateData.rejectBinScales] - The Reject Bin Scale Objects that belong to this Packing Line
     * @param {?Object} [updateData.automation] - The Automation Object for this Packing Line
     * @param {string[]} [updateData.alarmGroups] - The Alarm Groups that are used by this Packing Line
     * @param {Object[]} [updateData.classTypes] - The Class Types that are defined for this Packing Line
     * @param {?Object} [updateData.freshPackIntegration] - The FreshPack Integration Configuration for this Packing Line
     * @param {?Object} [updateData.freshQualityIntegration] - The FreshQuality Integration Configuration for this Packing Line
     * @return {Promise<PackingLineModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`, updateData)
            .then((result) => {
                resolve(new PackingLineModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Packing Line [DELETE /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Packing Line ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
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

    // Packing Line Collection Actions [/packhouse/sites/{siteId}/packing-lines]

    /**
     * List all Packing Lines [GET /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Packing Line belongs to
     * @param {string} [queryParameters.name] - The Packing Line Name
     * @return {Promise<PackingLineModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new PackingLineModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Packing Line [POST /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Packing Line Create Data
     * @param {?number} createData.rtuId - The RTU this Packing Line belongs to
     * @param {string} createData.name - The Packing Line Name
     * @param {Object} createData.points - The Points used by this Packing Line
     * @param {Object[]} [createData.sizers] - The Sizer Objects that belong to this Packing Line
     * @param {Object[]} [createData.binTips] - The Bin Tip Objects that belong to this this Packing Line
     * @param {Object[]} [createData.rejectBinScales] - The Reject Bin Scale Objects that belong to this Packing Line
     * @param {?Object} createData.automation - The Automation Object for this Packing Line
     * @param {string[]} [createData.alarmGroups] - The Alarm Groups that are used by this Packing Line
     * @param {Object[]} [createData.classTypes] - The Class Types that are defined for this Packing Line
     * @param {?Object} createData.freshPackIntegration - The FreshPack Integration Configuration for this Packing Line
     * @param {?Object} createData.freshQualityIntegration - The FreshQuality Integration Configuration for this Packing Line
     * @return {Promise<PackingLineModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/packing-lines`, createData)
            .then((result) => {
                resolve(new PackingLineModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default PackingLineController;