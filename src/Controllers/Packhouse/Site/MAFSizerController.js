/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import MAFSizerModel from '../../../Models/Packhouse/Site/MAFSizerModel';

/**
 * Controller Class for MAF Sizers
 * 
 * @class
 */
class MAFSizerController
{
    /**
     * Retrieve a MAF Sizer [GET /packhouse/sites/{siteId}/maf-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The MAF Sizer ID
     * @return {Promise<MAFSizerModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/maf-sizers/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return MAFSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a MAF Sizer [PATCH /packhouse/sites/{siteId}/maf-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The MAF Sizer ID
     * @param {MAFSizerController.UpdateData} updateData The MAF Sizer Update Data
     * @return {Promise<MAFSizerModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/maf-sizers/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return MAFSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a MAF Sizer [DELETE /packhouse/sites/{siteId}/maf-sizers/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The MAF Sizer ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/maf-sizers/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all MAF Sizers [GET /packhouse/sites/{siteId}/maf-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {MAFSizerController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<MAFSizerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/maf-sizers`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return MAFSizerModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a MAF Sizer [POST /packhouse/sites/{siteId}/maf-sizers]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {MAFSizerController.CreateData} createData The MAF Sizer Create Data
     * @return {Promise<MAFSizerModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/maf-sizers`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return MAFSizerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default MAFSizerController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} MAFSizerController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this MAF Sizer belongs to
 * @property {string} [name] The MAF Sizer Name
 * @property {string} [packingLineId] The Packing Line ID that manages this MAF Sizer
 * @property {string} [sizerType] The Sizer Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a MAF Sizer
 * 
 * @typedef {Object} MAFSizerController.CreateData
 * @property {?number} [rtuId] The RTU this MAF Sizer belongs to
 * @property {string} name The MAF Sizer Name
 * @property {string} packingLineId The Packing Line ID that manages this MAF Sizer
 * @property {string} sizerType The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this MAF Sizer
 * @property {{currentBatchId: number, currentBatchName: number, currentBatchGrowerCode: number, currentBatchGrowerName: number, currentBatchVarietyCode: number, currentBatchVarietyName: number, currentBatchPackrunId: number, currentBatchPackrunName: number, machineAverageFruitWeight: number, machineAverageFruitSize: number, machineCupFill: number, machineRecycledFruitPerMinute: number, machineTotalFruitPerMinute: number, machineTraysPerHour: number, machineTonnesPerHour: number, machineRodsPerMinute: number, outletGroupSummaries: number, packTypeOutletUtilizationTargets: number, class1TraysPerHour: ?number, createNewBatchRequest: ?number, createBatchOnPackrunChange: ?number, createBatchOnTimeBatchChange: ?number, restartServiceRequest: ?number}} points The Points used by this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerLane>} [lanes] The Lanes defined for this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerOutlet>} [outlets] The Outlets defined for this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerFruitSize>} [fruitSizes] The Fruit Sizes defined and handled by this MAF Sizer
 * @property {?MAFSizerController.FreshPackMAFSizerIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this MAF Sizer
 * @property {?MAFSizerController.MAFSizerIntegration} [mafIntegration] The MAF Integration Configuration for this MAF Sizer
 * @property {Array<MAFSizerController.RiserSource|MAFSizerController.SizerSource>} [sources] An Array of Sources that deliver Fruit to this MAF Sizer
 * @property {Array<MAFSizerController.ArticleClassType>} [articleClassTypes] An Array of Article to Class Type Maps for this MAF Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a MAF Sizer
 * 
 * @typedef {Object} MAFSizerController.UpdateData
 * @property {string} [name] The MAF Sizer Name
 * @property {string} [packingLineId] The Packing Line ID that manages this MAF Sizer
 * @property {string} [sizerType] The Sizer Type
 * @property {number} [autoCreateBatchDelay] The Auto Create Batch Delay in Seconds for this MAF Sizer
 * @property {{currentBatchId: number, currentBatchName: number, currentBatchGrowerCode: number, currentBatchGrowerName: number, currentBatchVarietyCode: number, currentBatchVarietyName: number, currentBatchPackrunId: number, currentBatchPackrunName: number, machineAverageFruitWeight: number, machineAverageFruitSize: number, machineCupFill: number, machineRecycledFruitPerMinute: number, machineTotalFruitPerMinute: number, machineTraysPerHour: number, machineTonnesPerHour: number, machineRodsPerMinute: number, outletGroupSummaries: number, packTypeOutletUtilizationTargets: number, class1TraysPerHour: ?number, createNewBatchRequest: ?number, createBatchOnPackrunChange: ?number, createBatchOnTimeBatchChange: ?number, restartServiceRequest: ?number}} [points] The Points used by this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerLane>} [lanes] The Lanes defined for this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerOutlet>} [outlets] The Outlets defined for this MAF Sizer
 * @property {Array<MAFSizerController.MAFSizerFruitSize>} [fruitSizes] The Fruit Sizes defined and handled by this MAF Sizer
 * @property {?MAFSizerController.FreshPackMAFSizerIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this MAF Sizer
 * @property {?MAFSizerController.MAFSizerIntegration} [mafIntegration] The MAF Integration Configuration for this MAF Sizer
 * @property {Array<MAFSizerController.RiserSource|MAFSizerController.SizerSource>} [sources] An Array of Sources that deliver Fruit to this MAF Sizer
 * @property {Array<MAFSizerController.ArticleClassType>} [articleClassTypes] An Array of Article to Class Type Maps for this MAF Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MAFSizerLane** Type
 * 
 * @typedef {Object} MAFSizerController.MAFSizerLane
 * @property {string} id Unique ID of this Lane
 * @property {number} number The Lane Number
 * @property {{cupFill: number}} points The Points used by this Lane
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MAFSizerOutlet** Type
 * 
 * @typedef {Object} MAFSizerController.MAFSizerOutlet
 * @property {string} id Unique ID of this Outlet
 * @property {number} number The Outlet Number
 * @property {string} type The Outlet Type
 * @property {{name: number, fruitPerMinute: number, articleName: number, utilization: number}} points The Points used by this Outlet
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MAFSizerFruitSize** Type
 * 
 * @typedef {Object} MAFSizerController.MAFSizerFruitSize
 * @property {string} fruitSize The Fruit Size
 * @property {{incomingFruitPerMinute: number, recycledFruitPerMinute: number, allocatedFruitPerMinute: number}} points The Points used by this Fruit Size Configuration
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **FreshPackMAFSizerIntegration** Type
 * 
 * @typedef {Object} MAFSizerController.FreshPackMAFSizerIntegration
 * @property {Object} points The Points used by this FreshPack Sizer Integration
 * @property {boolean} enabled Whether this FreshPack Sizer Integration is Enabled
 * @property {number} materialGroupId The FreshPack Material Group ID to be used for Multi-Grower Bins from this Sizer
 * @property {number} binTypeId The FreshPack Bin Type ID to be used for Multi-Grower Bins from this Sizer
 * @property {string[]} bulkWeightClassTypes An Array of Class Types that should be Sent to FreshPack as Bulk Weights in Multi-Grower Bins
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MAFSizerIntegration** Type
 * 
 * @typedef {Object} MAFSizerController.MAFSizerIntegration
 * @property {{stopBatchRequired: number}} points The Points used by this MAF Sizer Integration
 * @property {boolean} enabled Whether this MAF Sizer Integration is Enabled
 * @property {number} sizerNumber The MAF Internal Number for this Sizer
 * @property {string} dumpSizerName The MAF Internal Name of this Sizer when interacting with the MAF Dump API
 * @property {string} statSizerName The MAF Internal Name of this Sizer when interacting with the MAF Sizer Stat API
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **RiserSource** Type
 * 
 * @typedef {Object} MAFSizerController.RiserSource
 * @property {string} type The Source Type
 * @property {string} riserId ID of the Riser Object
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **SizerSource** Type
 * 
 * @typedef {Object} MAFSizerController.SizerSource
 * @property {string} type The Source Type
 * @property {string} sizerId ID of the Sizer Object
 * @property {number[]} outletNumbers An Array of Outlet Numbers on the Source Sizer that supply this MAF Sizer
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ArticleClassType** Type
 * 
 * @typedef {Object} MAFSizerController.ArticleClassType
 * @property {string} articleName Name of the MAF Sizer Article
 * @property {string} classType The Class Type for this MAF Sizer Article
 * @memberof Controllers.Packhouse.Site
 */