/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerModel from '../../../Models/Packhouse/Site/CompacSizerModel';

/**
 * Controller Class for Compac Sizers
 * 
 * @class
 */
class CompacSizerController
{
    /**
     * Retrieve a Compac Sizer [GET /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @return {Promise<CompacSizerModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer [PATCH /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @param {CompacSizerController.UpdateData} updateData The Compac Sizer Update Data
     * @return {Promise<CompacSizerModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer [DELETE /packhouse/sites/{siteId}/compac-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizers/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizers [GET /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<CompacSizerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizers`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompacSizerModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer [POST /packhouse/sites/{siteId}/compac-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerController.CreateData} createData The Compac Sizer Create Data
     * @return {Promise<CompacSizerModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizers`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} CompacSizerController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Compac Sizer belongs to
 * @property {string} [name] The Compac Sizer Name
 * @property {string} [packingLineId] The Packing Line ID that manages this Compac Sizer
 * @property {string} [sizerType] The Sizer Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Compac Sizer
 * 
 * @typedef {Object} CompacSizerController.CreateData
 * @property {?number} [rtuId] The RTU this Compac Sizer belongs to
 * @property {string} name The Compac Sizer Name
 * @property {string} packingLineId The Packing Line ID that manages this Compac Sizer
 * @property {string} sizerType The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this Compac Sizer
 * @property {{currentBatchId: number, currentBatchName: number, currentBatchGrowerCode: number, currentBatchVarietyId: number, currentBatchVarietyName: number, currentBatchComments: number, currentBatchStartTimestamp: number, currentBatchLayoutId: number, currentBatchLayoutName: number, currentBatchSizingProfileName: ?number, currentBatchFruitSizeProfile: ?number, currentBatchPackrunId: number, currentBatchPackrunName: number, machineAverageFruitWeight: number, machineAverageFruitSize: number, machineCupFill: number, machineRecycledFruitPerMinute: number, machineTotalFruitPerMinute: number, machineDroppedFruitPerMinute: number, machinePackedFruitPerMinute: number, machineMissedFruitPerMinute: number, machineRejectFruitPerMinute: number, machineTraysPerHour: number, machineTraysPerHourTarget: ?number, machineTonnesPerHour: number, machineRodsPerMinute: number, machineIncomingFruitPerMinuteBySize: ?number, machineRecycleFruitPerMinuteBySize: ?number, machineLanesFruitPerMinuteBySize: ?number, machineLanesFruitPerMinuteByGrade: ?number, createNewBatchRequest: number, createBatchOnPackrunChange: number, createBatchOnTimeBatchChange: number, restartServiceRequest: number, outletGroupSummaries: number, varieties: number, packTypeOutletUtilizationTargets: number, class1TraysPerHour: ?number}} points The Points used by this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerLane>} [lanes] The Lanes defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerFrame>} [frames] An Optional Array of Frames defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerOutlet>} [outlets] The Outlets defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerFruitSize>} [fruitSizes] The Fruit Sizes defined and handled by this Compac Sizer
 * @property {?CompacSizerController.FreshPackCompacSizerIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this Compac Sizer
 * @property {Array<CompacSizerController.RiserSource|CompacSizerController.SizerSource>} [sources] An Array of Sources that deliver Fruit to this Compac Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer
 * 
 * @typedef {Object} CompacSizerController.UpdateData
 * @property {string} [name] The Compac Sizer Name
 * @property {string} [packingLineId] The Packing Line ID that manages this Compac Sizer
 * @property {string} [sizerType] The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this Compac Sizer
 * @property {{currentBatchId: number, currentBatchName: number, currentBatchGrowerCode: number, currentBatchVarietyId: number, currentBatchVarietyName: number, currentBatchComments: number, currentBatchStartTimestamp: number, currentBatchLayoutId: number, currentBatchLayoutName: number, currentBatchSizingProfileName: ?number, currentBatchFruitSizeProfile: ?number, currentBatchPackrunId: number, currentBatchPackrunName: number, machineAverageFruitWeight: number, machineAverageFruitSize: number, machineCupFill: number, machineRecycledFruitPerMinute: number, machineTotalFruitPerMinute: number, machineDroppedFruitPerMinute: number, machinePackedFruitPerMinute: number, machineMissedFruitPerMinute: number, machineRejectFruitPerMinute: number, machineTraysPerHour: number, machineTraysPerHourTarget: ?number, machineTonnesPerHour: number, machineRodsPerMinute: number, machineIncomingFruitPerMinuteBySize: ?number, machineRecycleFruitPerMinuteBySize: ?number, machineLanesFruitPerMinuteBySize: ?number, machineLanesFruitPerMinuteByGrade: ?number, createNewBatchRequest: number, createBatchOnPackrunChange: number, createBatchOnTimeBatchChange: number, restartServiceRequest: number, outletGroupSummaries: number, varieties: number, packTypeOutletUtilizationTargets: number, class1TraysPerHour: ?number}} [points] The Points used by this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerLane>} [lanes] The Lanes defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerFrame>} [frames] An Optional Array of Frames defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerOutlet>} [outlets] The Outlets defined for this Compac Sizer
 * @property {Array<CompacSizerController.CompacSizerFruitSize>} [fruitSizes] The Fruit Sizes defined and handled by this Compac Sizer
 * @property {?CompacSizerController.FreshPackCompacSizerIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this Compac Sizer
 * @property {Array<CompacSizerController.RiserSource|CompacSizerController.SizerSource>} [sources] An Array of Sources that deliver Fruit to this Compac Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CompacSizerLane** Type
 * 
 * @typedef {Object} CompacSizerController.CompacSizerLane
 * @property {string} id Unique ID of this Lane
 * @property {number} number The Lane Number
 * @property {{cupFill: number}} points The Points used by this Lane
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CompacSizerFrame** Type
 * 
 * @typedef {Object} CompacSizerController.CompacSizerFrame
 * @property {number} number The Frame Number
 * @property {number} startLane Lane Number where this Frame Begins
 * @property {number} endLane Lane Number where this Frame Ends
 * @property {{machineRodsPerMinute: number}} points The Points used by this Frame
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CompacSizerOutlet** Type
 * 
 * @typedef {Object} CompacSizerController.CompacSizerOutlet
 * @property {string} id Unique ID of this Outlet
 * @property {number} number The Outlet Number
 * @property {string} type The Outlet Type
 * @property {{name: number, fruitPerMinute: number, productId: number, productName: number, utilization: number, status: number, pendingProductId: number, pendingProductName: number}} points The Points used by this Outlet
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CompacSizerFruitSize** Type
 * 
 * @typedef {Object} CompacSizerController.CompacSizerFruitSize
 * @property {string} fruitSize The Fruit Size
 * @property {{incomingFruitPerMinute: number, recycledFruitPerMinute: number, allocatedFruitPerMinute: number}} points The Points used by this Fruit Size Configuration
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **FreshPackCompacSizerIntegration** Type
 * 
 * @typedef {Object} CompacSizerController.FreshPackCompacSizerIntegration
 * @property {Object} points The Points used by this FreshPack Sizer Integration
 * @property {boolean} enabled Whether this FreshPack Sizer Integration is Enabled
 * @property {number} materialGroupId The FreshPack Material Group ID to be used for Multi-Grower Bins from this Sizer
 * @property {number} binTypeId The FreshPack Bin Type ID to be used for Multi-Grower Bins from this Sizer
 * @property {string[]} bulkWeightClassTypes An Array of Class Types that should be Sent to FreshPack as Bulk Weights in Multi-Grower Bins
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **RiserSource** Type
 * 
 * @typedef {Object} CompacSizerController.RiserSource
 * @property {string} type The Source Type
 * @property {string} riserId ID of the Riser Object
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **SizerSource** Type
 * 
 * @typedef {Object} CompacSizerController.SizerSource
 * @property {string} type The Source Type
 * @property {string} sizerId ID of the Sizer Object
 * @property {number[]} outletNumbers An Array of Outlet Numbers on the Source Sizer that supply this Compac Sizer
 * @memberof Controllers.Packhouse.Site
 */