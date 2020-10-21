import RequestHelper from '../../../RequestHelper';
import CompacSizerModel from '../../../Models/Packhouse/Site/CompacSizerModel';

/**
 * Controller Class for Compac Sizers
 */
class CompacSizerController
{
    // Compac Sizer Actions [/packhouse/sites/{siteId}/compac-sizers/{id}]

    /**
     * Retrieve a Compac Sizer [GET /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer ID
     * @return {Promise<CompacSizerModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
            .then((result) => {
                resolve(new CompacSizerModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer [PATCH /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer ID
     * @param {Object} updateData - The Compac Sizer Update Data
     * @param {string} [updateData.name] - The Compac Sizer Name
     * @param {Object[]} [updateData.lanes] - The Lanes defined for this Compac Sizer
     * @param {Object} [updateData.points] - The Points used by this Compac Sizer
     * @param {Object[]} [updateData.outlets] - The Outlets defined for this Compac Sizer
     * @param {string} [updateData.sizerType] - The Sizer Type
     * @param {number} [updateData.autoCreateBatchDelay] - The Auto Create Batch Delay in Seconds for this Compac Sizer
     * @param {Object[]} [updateData.fruitSizes] - The Fruit Sizes defined and handled by this Compac Sizer
     * @param {string} [updateData.packingLineId] - The Packing Line ID this Compac Sizer belongs to
     * @param {?Object} [updateData.freshPackIntegration] - The FreshPack Integration Configuration for this Compac Sizer
     * @return {Promise<CompacSizerModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`, updateData)
            .then((result) => {
                resolve(new CompacSizerModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer [DELETE /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Compac Sizer ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
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

    // Compac Sizer Collection Actions [/packhouse/sites/{siteId}/compac-sizers]

    /**
     * List all Compac Sizers [GET /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {?number} [queryParameters.rtuId] - The RTU this Compac Sizer belongs to
     * @param {string} [queryParameters.name] - The Compac Sizer Name
     * @param {string} [queryParameters.sizerType] - The Sizer Type
     * @param {string} [queryParameters.packingLineId] - The Packing Line ID this Compac Sizer belongs to
     * @return {Promise<CompacSizerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new CompacSizerModel(resultItem, siteId)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer [POST /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} createData - The Compac Sizer Create Data
     * @param {?number} createData.rtuId - The RTU this Compac Sizer belongs to
     * @param {string} createData.name - The Compac Sizer Name
     * @param {Object[]} [createData.lanes] - The Lanes defined for this Compac Sizer
     * @param {Object} createData.points - The Points used by this Compac Sizer
     * @param {Object[]} [createData.outlets] - The Outlets defined for this Compac Sizer
     * @param {string} createData.sizerType - The Sizer Type
     * @param {number} [createData.autoCreateBatchDelay] - The Auto Create Batch Delay in Seconds for this Compac Sizer
     * @param {Object[]} [createData.fruitSizes] - The Fruit Sizes defined and handled by this Compac Sizer
     * @param {string} createData.packingLineId - The Packing Line ID this Compac Sizer belongs to
     * @param {?Object} createData.freshPackIntegration - The FreshPack Integration Configuration for this Compac Sizer
     * @return {Promise<CompacSizerModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizers`, createData)
            .then((result) => {
                resolve(new CompacSizerModel(result, siteId));
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerController;