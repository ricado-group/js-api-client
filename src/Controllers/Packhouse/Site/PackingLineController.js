/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import PackingLineModel from '../../../Models/Packhouse/Site/PackingLineModel';

/**
 * Controller Class for Packing Lines
 * 
 * @class
 */
class PackingLineController
{
    /**
     * Retrieve a Packing Line [GET /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @return {Promise<PackingLineModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Packing Line [PATCH /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @param {PackingLineController.UpdateData} updateData The Packing Line Update Data
     * @return {Promise<PackingLineModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Packing Line [DELETE /packhouse/sites/{siteId}/packing-lines/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Packing Line ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/packing-lines/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Packing Lines [GET /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PackingLineController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<PackingLineModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/packing-lines`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return PackingLineModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Packing Line [POST /packhouse/sites/{siteId}/packing-lines]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {PackingLineController.CreateData} createData The Packing Line Create Data
     * @return {Promise<PackingLineModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/packing-lines`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return PackingLineModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default PackingLineController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} PackingLineController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Packing Line belongs to
 * @property {string} [name] The Packing Line Name
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Packing Line
 * 
 * @typedef {Object} PackingLineController.CreateData
 * @property {?number} [rtuId] The RTU this Packing Line belongs to
 * @property {string} name The Packing Line Name
 * @property {string} [shortName] A Short Name for the Packing Line Name. Typically used in Reports and Tables showing multiple Packing Lines
 * @property {{currentPackrunId: number, nextPackrunId: number, currentPackrunName: number, nextPackrunName: number, currentPackrunVarietyCode: number, startNextPackrunRequest: number, finishCurrentPackrunRequest: number, availablePackrunList: number, createFromAvailablePackrun: number, currentTimeBatch: number, createNewTimeBatchRequest: number, currentPackrunExportPercentage: number, currentPackrunRejectPercentage: number, currentPackrunFruitSizeSummary: number, currentPackrunTotalExportTrays: number, currentPackrunExportTraysPerBin: number, currentPackrunAverageExportFruitSize: number, currentPackrunTotalClass1LayeredTrays: number, currentPackrunTotalClass1BulkTrays: number, currentPackrunTotalClass2Trays: number, currentPackrunSoftSortEventsPerBin: number, serviceModeActive: number, serviceModeBeginRequest: number, serviceModeFinishRequest: number, serviceModeStartTimestamp: number, serviceModeMaximumDuration: number, disabled: ?number, currentPackrunRecentPackrunSummaries: number, currentPackrunHistoricalPackrunSummaries: number, nextPackrunRecentPackrunSummaries: number, nextPackrunHistoricalPackrunSummaries: number}} points The Points used by this Packing Line
 * @property {Array<PackingLineController.SizerReference>} [sizers] The Sizer Objects that belong to this Packing Line
 * @property {Array<PackingLineController.BinTipReference>} [binTips] The Bin Tip Objects that belong to this this Packing Line
 * @property {Array<PackingLineController.RejectBinScaleReference>} [rejectBinScales] The Reject Bin Scale Objects that belong to this Packing Line
 * @property {?PackingLineController.SecondaryPackingLineReference} [secondaryPackingLine] An Optional Secondary Packing Line Reference
 * @property {?PackingLineController.Automation} [automation] The Automation Object for this Packing Line
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Packing Line
 * @property {Array<PackingLineController.ClassType>} [classTypes] The Class Types that are defined for this Packing Line
 * @property {?PackingLineController.ShiftManagement} [shiftManagement] The Optional Shift Management Object for this Packing Line
 * @property {?PackingLineController.AdvancedPackrunManagement} [advancedPackrunManagement] The Advanced Packrun Management Configuration for this Packing Line
 * @property {?PackingLineController.MafIntegration} [mafIntegration] The MAF Integration Configuration for this Packing Line
 * @property {?PackingLineController.FreshPackIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this Packing Line
 * @property {?PackingLineController.FreshPackIntegration} [freshQualityIntegration] The FreshQuality Integration Configuration for this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Packing Line
 * 
 * @typedef {Object} PackingLineController.UpdateData
 * @property {string} [name] The Packing Line Name
 * @property {string} [shortName] A Short Name for the Packing Line Name. Typically used in Reports and Tables showing multiple Packing Lines
 * @property {{currentPackrunId: number, nextPackrunId: number, currentPackrunName: number, nextPackrunName: number, currentPackrunVarietyCode: number, startNextPackrunRequest: number, finishCurrentPackrunRequest: number, availablePackrunList: number, createFromAvailablePackrun: number, currentTimeBatch: number, createNewTimeBatchRequest: number, currentPackrunExportPercentage: number, currentPackrunRejectPercentage: number, currentPackrunFruitSizeSummary: number, currentPackrunTotalExportTrays: number, currentPackrunExportTraysPerBin: number, currentPackrunAverageExportFruitSize: number, currentPackrunTotalClass1LayeredTrays: number, currentPackrunTotalClass1BulkTrays: number, currentPackrunTotalClass2Trays: number, currentPackrunSoftSortEventsPerBin: number, serviceModeActive: number, serviceModeBeginRequest: number, serviceModeFinishRequest: number, serviceModeStartTimestamp: number, serviceModeMaximumDuration: number, disabled: ?number, currentPackrunRecentPackrunSummaries: number, currentPackrunHistoricalPackrunSummaries: number, nextPackrunRecentPackrunSummaries: number, nextPackrunHistoricalPackrunSummaries: number}} [points] The Points used by this Packing Line
 * @property {Array<PackingLineController.SizerReference>} [sizers] The Sizer Objects that belong to this Packing Line
 * @property {Array<PackingLineController.BinTipReference>} [binTips] The Bin Tip Objects that belong to this this Packing Line
 * @property {Array<PackingLineController.RejectBinScaleReference>} [rejectBinScales] The Reject Bin Scale Objects that belong to this Packing Line
 * @property {?PackingLineController.SecondaryPackingLineReference} [secondaryPackingLine] An Optional Secondary Packing Line Reference
 * @property {?PackingLineController.Automation} [automation] The Automation Object for this Packing Line
 * @property {string[]} [alarmGroups] The Alarm Groups that are used by this Packing Line
 * @property {Array<PackingLineController.ClassType>} [classTypes] The Class Types that are defined for this Packing Line
 * @property {?PackingLineController.ShiftManagement} [shiftManagement] The Optional Shift Management Object for this Packing Line
 * @property {?PackingLineController.AdvancedPackrunManagement} [advancedPackrunManagement] The Advanced Packrun Management Configuration for this Packing Line
 * @property {?PackingLineController.MafIntegration} [mafIntegration] The MAF Integration Configuration for this Packing Line
 * @property {?PackingLineController.FreshPackIntegration} [freshPackIntegration] The FreshPack Integration Configuration for this Packing Line
 * @property {?PackingLineController.FreshPackIntegration} [freshQualityIntegration] The FreshQuality Integration Configuration for this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **SizerReference** Type
 * 
 * @typedef {Object} PackingLineController.SizerReference
 * @property {string} id ID of a Sizer Object
 * @property {number} displayOrder Display Order of the Sizer
 * @property {boolean} [ownedBySecondaryPackingLine] Whether this Sizer is Owned and Managed by a Secondary Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **BinTipReference** Type
 * 
 * @typedef {Object} PackingLineController.BinTipReference
 * @property {string} id ID of a Bin Tip Object
 * @property {number} displayOrder Display Order of the Bin Tip
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **RejectBinScaleReference** Type
 * 
 * @typedef {Object} PackingLineController.RejectBinScaleReference
 * @property {string} id ID of a Reject Bin Scale Object
 * @property {number} displayOrder Display Order of the Reject Bin Scale
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **SecondaryPackingLineReference** Type
 * 
 * @typedef {Object} PackingLineController.SecondaryPackingLineReference
 * @property {string} id ID of the Secondary Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoControlGroupBasicControl** Type
 * 
 * @typedef {Object} PackingLineController.AutoControlGroupBasicControl
 * @property {{status: number, control: number}} points The Points used for this Basic Control
 * @property {string} name Name of this Basic Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **StartSequence** Type
 * 
 * @typedef {Object} PackingLineController.StartSequence
 * @property {number} startDelay The Start Delay for this Start Sequence Step specified in Milliseconds
 * @property {number} startOrder The Start Order for this Start Sequence Step
 * @property {string[]} vsds An Array of VSD Objects that are Automated by this Auto Control Group
 * @property {string[]} contactors An Array of Contactor Objects that are Automated by this Auto Control Group
 * @property {Array<PackingLineController.AutoControlGroupBasicControl>} basicControls An Array of Basic Controls that are Automated by this Auto Control Group
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoControlGroup** Type
 * 
 * @typedef {Object} PackingLineController.AutoControlGroup
 * @property {string} id A Unique ID for this Auto Control Group
 * @property {string} name Name for this Auto Control Group
 * @property {{runControl: number, startRequest: number, stopRequest: number, status: number, disabled: number}} points The Points used for this Auto Control Group
 * @property {?number} [startDelay] An Optional Start Delay for this Auto Control Group specified in Milliseconds
 * @property {boolean} [userStartWithoutDependencies] Whether the User can Start this Auto Control Group individually without relying on Downstream and Neighbour Dependencies
 * @property {Array<PackingLineController.StartSequence>} startSequences An Array of Start Sequence Steps for this Auto Control Group
 * @property {string[]} downstreamDependencyGroups An Array of other Auto Control Groups that are directly Downstream of this Auto Control Group
 * @property {string[]} neighbourDependencyGroups An Array of other Auto Control Groups that are direct Neighbours of this Auto Control Group
 * @property {string[]} shutdownAlarms An Array of Alarms that will Shutdown this Auto Control Group
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoSpeedGroup** Type
 * 
 * @typedef {Object} PackingLineController.AutoSpeedGroup
 * @property {string} id A Unique ID for this Auto Speed Group
 * @property {string} name Name for this Auto Speed Group
 * @property {string[]} vsds An Array of VSD Objects that have their Speed Automated by this Auto Speed Group
 * @property {{autoSetpoint: number, overrideSetpoint: number, overrideMode: number}} points The Points used for this Auto Speed Group
 * @property {string} sectionId ID of the Auto Speed Section this Auto Speed Group should be displayed under
 * @property {number} displayOrder Display Order of this Auto Speed Group
 * @property {boolean} [supportsAutoMode] Whether this Auto Speed Group can be Managed by an Auto Target when Override Mode is not Active
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoTarget** Type
 * 
 * @typedef {Object} PackingLineController.AutoTarget
 * @property {string} id A Unique ID for this Auto Target
 * @property {string} name Name for this Auto Target
 * @property {string} description Description for this Auto Target
 * @property {string} type The Type of Auto Target
 * @property {?string} units Optional Units for this Auto Target
 * @property {number} minValue The Minimum Value for this Auto Target
 * @property {number} maxValue The Maximum Value for this Auto Target
 * @property {{setpoint: number, actual: number}} points The Points used for this Auto Target
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **VsdReference** Type
 * 
 * @typedef {Object} PackingLineController.VsdReference
 * @property {string} id ID of a VSD Object
 * @property {number} displayOrder Display Order of the VSD
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ContactorReference** Type
 * 
 * @typedef {Object} PackingLineController.ContactorReference
 * @property {string} id ID of a Contactor Object
 * @property {number} displayOrder Display Order of the Contactor
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **BasicControl** Type
 * 
 * @typedef {Object} PackingLineController.BasicControl
 * @property {{status: number, control: number}} points The Points used for this Basic Control
 * @property {string} name Name of this Basic Control
 * @property {number} displayOrder Display Order of this Basic Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **LightControl** Type
 * 
 * @typedef {Object} PackingLineController.LightControl
 * @property {string} name Name of this Light Control
 * @property {{status: number, control: number}} points The Points used for this Light Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **InfeedManagementItem** Type
 * 
 * @typedef {Object} PackingLineController.InfeedManagementItem
 * @property {string} id A Unique ID for this Infeed Management Item
 * @property {string} name Name for this Infeed Management Item
 * @property {{infeedFruitPerMinuteTarget: number, infeedFruitPerMinuteActual: number, sizerFruitPerMinuteActual: number, sizerRecycleFruitPerMinute: number, riser1FruitPerMinuteActual: ?number, riser1LightsControlMode: ?number, riser1LightsManualControl: ?number, riser1LightsStatus: ?number, riser2FruitPerMinuteActual: ?number, riser2LightsControlMode: ?number, riser2LightsManualControl: ?number, riser2LightsStatus: ?number}} points The Points used for this Infeed Management Item
 * @property {number} riserCount Number of Risers that are part of this Infeed Management Item
 * @property {number} displayOrder Display Order of this Infeed Management Item
 * @property {?string} [riser1AutoControlGroupId] ID of the Auto Control Group for the first Riser. Only applies if `riserCount` >= 1
 * @property {?string} [riser2AutoControlGroupId] ID of the Auto Control Group for the second Riser. Only applies if `riserCount` >= 2
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ButtonControl** Type
 * 
 * @typedef {Object} PackingLineController.ButtonControl
 * @property {string} icon The Icon to be displayed within this Button
 * @property {string} name Name of this Button Control
 * @property {string} type Type of this Button Control
 * @property {{control: number, disable: number}} points The Points used for this Button Control
 * @property {number} resetDelay Delay in milliseconds between setting the Control Point to `true` and then `false`
 * @property {number} displayOrder Display Order of this Button Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoSpeedSection** Type
 * 
 * @typedef {Object} PackingLineController.AutoSpeedSection
 * @property {string} id A Unique ID for this Auto Speed Section
 * @property {string} name Name for this Auto Speed Section
 * @property {number} displayOrder Display Order of this Auto Speed Section
 * @property {Array<PackingLineController.ButtonControl>} [buttonControls] An Optional Array of Button Controls for this Auto Speed Section
 * @property {?string} [splitGroupId] Optional ID shared between two Auto Speed Sections that should be displayed side-by-side
 * @property {?string} [splitGroupPosition] Optional Position for this Auto Speed Section when displaying two side-by-side
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ConfigurationPoint** Type
 * 
 * @typedef {Object} PackingLineController.ConfigurationPoint
 * @property {string} name Name of this Configuration Point
 * @property {string} type The Type of Configuration Point
 * @property {number} point ID of the Boolean Point to be Configurable
 * @property {?string} units Optional Units for this Configuration Point
 * @property {number} minValue The Minimum Value for this Configuration Point
 * @property {number} maxValue The Maximum Value for this Configuration Point
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ConfigurationGroup** Type
 * 
 * @typedef {Object} PackingLineController.ConfigurationGroup
 * @property {string} id A Unique ID for this Configuration Group
 * @property {string} name Name for this Configuration Group
 * @property {string} sectionId ID of the Configuration Section this Configuration Group should be displayed under
 * @property {number} displayOrder Display Order of this Configuration Group
 * @property {Array<PackingLineController.ConfigurationPoint|PackingLineController.ConfigurationPoint>} configurationPoints An Array of Configuration Points to be displayed in this Configuration Group
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ConfigurationSection** Type
 * 
 * @typedef {Object} PackingLineController.ConfigurationSection
 * @property {string} id A Unique ID for this Configuration Section
 * @property {string} name Name for this Configuration Section
 * @property {number} displayOrder Display Order of this Configuration Section
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MomentaryControlPoint** Type
 * 
 * @typedef {Object} PackingLineController.MomentaryControlPoint
 * @property {string} name Name of this Momentary Control Point
 * @property {number} point ID of the Boolean Point to be used for Momentary Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MomentaryControl** Type
 * 
 * @typedef {Object} PackingLineController.MomentaryControl
 * @property {string} name Name of this Momentary Control
 * @property {Array<PackingLineController.MomentaryControlPoint>} points An Array of Points used by this Momentary Control
 * @property {number} displayOrder Display Order of this Momentary Control
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MomentaryControlGroup** Type
 * 
 * @typedef {Object} PackingLineController.MomentaryControlGroup
 * @property {string} name Name of this Momentary Control Group
 * @property {Array<PackingLineController.MomentaryControl>} momentaryControls An Array of Momentary Controls for this Momentary Control Group
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **Automation** Type
 * 
 * @typedef {Object} PackingLineController.Automation
 * @property {{controlMode: number, autoStartAllRequest: number, stopAllRequest: number, status: number, startWarningSiren: number, safetySystemHealthy: ?number}} points The Points used for Automation
 * @property {Array<PackingLineController.AutoControlGroup>} autoControlGroups An Array of Auto Control Groups
 * @property {Array<PackingLineController.AutoSpeedGroup>} autoSpeedGroups An Array of Auto Speed Groups
 * @property {Array<PackingLineController.AutoTarget>} autoTargets An Array of Auto Targets
 * @property {Array<PackingLineController.VsdReference>} vsds An Array of VSD References that are Automated by this Packing Line
 * @property {Array<PackingLineController.ContactorReference>} contactors An Array of Contactor References that are Automated by this Packing Line
 * @property {Array<PackingLineController.BasicControl>} basicControls An Array of Basic Controls that are Automated by this Packing Line
 * @property {string[]} shutdownAlarms An Array of Alarms that will Shutdown the Automation for this Packing Line
 * @property {Array<PackingLineController.LightControl>} lightControls An Optional Array of Light Controls for this Packing Line
 * @property {Array<PackingLineController.InfeedManagementItem>} infeedManagement An Optional Array of Infeed Management Definitions for this Packing Line
 * @property {Array<PackingLineController.AutoSpeedSection>} autoSpeedSections An Array of Sections that organize Auto Speed Groups for this Packing Line
 * @property {Array<PackingLineController.ConfigurationGroup>} configurationGroups An Array of Groups that provide Configuration Options for this Packing Line
 * @property {Array<PackingLineController.ConfigurationSection>} configurationSections An Array of Sections that organize Configuration Groups for this Packing Line
 * @property {Array<PackingLineController.MomentaryControlGroup>} momentaryControlGroups An Array of Momentary Controls for User Interaction on this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ClassType** Type
 * 
 * @typedef {Object} PackingLineController.ClassType
 * @property {string} name User Facing Name of this Class Type
 * @property {{currentPackrunPercentage: number, currentPackrunWeight: ?number}} points The Points used by a Class Type
 * @property {string} classType The Class Type being defined
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ShiftTaskTagDefinition** Type
 * 
 * @typedef {Object} PackingLineController.ShiftTaskTagDefinition
 * @property {string} id The Unique Tag ID
 * @property {string} name The Tag Display Name
 * @property {string} color The Tag Display Color
 * @property {boolean} deleted Whether the Tag has been Deleted
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ShiftTaskDefinition** Type
 * 
 * @typedef {Object} PackingLineController.ShiftTaskDefinition
 * @property {string} type The Task Type
 * @property {Array<PackingLineController.ShiftTaskTagDefinition>} tags An Array of Tags defined for the Task Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ShiftManagement** Type
 * 
 * @typedef {Object} PackingLineController.ShiftManagement
 * @property {{currentShiftId: number, currentShiftStatus: number, createNewDayShiftRequest: number, createNewNightShiftRequest: number, startCurrentShiftRequest: number, finishCurrentShiftRequest: number, currentFocusMeetingId: number, startFocusMeetingRequest: number, finishFocusMeetingRequest: number, shiftSchedules: number, currentShiftModifyHourlyEntryRequest: number, currentShiftClass1TraysPerHourTarget: number, currentShiftClass1TraysPerHourAdjustedTarget: number, currentShiftClass1TraysPerHour: number, currentShiftCostPerTrayTarget: number, currentShiftCostPerTrayAdjustedTarget: number, currentShiftCostPerTray: number, currentShiftManningTarget: number, currentShiftClass1Manning: number, currentShiftClass2Manning: number, currentShiftClass1ManningTarget: number, currentShiftClass2ManningTarget: number, currentShiftQualityR600IdealTarget: number, currentShiftQualityR600Ideal: number, currentShiftScorePercentage: number, class1TraysPerHourTargets: number, costPerTrayTargets: number, manningTargets: number, qualityR600IdealTargets: number, layeredTrayPercentageTargets: number, class1PercentageTargets: ?number, costPerManningUnitHour: number, class1TraysPerHourScoreWeighting: number, costPerTrayScoreWeighting: number, qualityR600IdealScoreWeighting: number, summaryReportEmailContacts: number, currentShiftUpdateManningTeamsRequest: ?number, currentShiftUpdateManningTeamsTimestamp: ?number, manningTeams: ?number}} points The Points used for Shift Management
 * @property {Array<{id: string, name: string, type: string, points: {currentShiftCustomQualityTarget: number, currentShiftCustomQualityValue: number, customQualityTargets: number, customQualityScoreWeighting: number}}>} customQualityConfiguration An Optional Array of Configuration Data for Custom Qualities in Shift Management
 * @property {boolean} enabled Whether Shift Management is Enabled on this Packing Line
 * @property {Array<PackingLineController.ShiftTaskDefinition>} taskDefinitions An Array of Shift Task Types for this Packing Line
 * @property {boolean} manningUsesTeams Whether Manning is tracked at the Team Level on this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ManualStepPointAction** Type
 * 
 * @typedef {Object} PackingLineController.ManualStepPointAction
 * @property {string} trigger When this Action should be performed. 'begin' performed once when this Step becomes Active. 'end' performed once when this Step is no longer Active. 'always' performed constantly while this Step is Active
 * @property {number} pointId The Point ID to be written to
 * @property {any} value Value to be written to the Point
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ManualStepAutoControlGroupAction** Type
 * 
 * @typedef {Object} PackingLineController.ManualStepAutoControlGroupAction
 * @property {string} trigger When this Action should be performed. 'begin' performed once when this Step becomes Active. 'end' performed once when this Step is no longer Active. 'always' performed constantly while this Step is Active
 * @property {string} groupId ID of an Automation Auto Control Group
 * @property {string} action The Action to be performed on the Auto Control Group
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ManualStep** Type
 * 
 * @typedef {Object} PackingLineController.ManualStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string} title A Title for this Manual Step
 * @property {?string} subtitle An Optional Subtitle for this Manual Step
 * @property {string} description A Description for this Manual Step
 * @property {Array<PackingLineController.ManualStepPointAction>} [pointActions] An Optional Array of Actions that should be performed on Points by setting them to a predefined Value based on a Trigger
 * @property {Array<PackingLineController.ManualStepAutoControlGroupAction>} [autoControlGroupActions] 
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ClearSizersStep** Type
 * 
 * @typedef {Object} PackingLineController.ClearSizersStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string[]} sizerIds An Array of Sizer IDs to be included in this Step
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CreateSizerBatchesStep** Type
 * 
 * @typedef {Object} PackingLineController.CreateSizerBatchesStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string[]} sizerIds An Array of Sizer IDs to be included in this Step
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CheckFruitSizeProfileStep** Type
 * 
 * @typedef {Object} PackingLineController.CheckFruitSizeProfileStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string} sizerId ID of the Sizer to be included in this Step
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AutoMAFActionStep** Type
 * 
 * @typedef {Object} PackingLineController.AutoMAFActionStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string} title A Title for this Auto MAF Action Step
 * @property {?string} subtitle An Optional Subtitle for this Auto MAF Action Step
 * @property {string} description A Description for this Auto MAF Action Step
 * @property {string} actionType Type of MAF Action to be performed
 * @property {string} trigger When this Action should be performed. 'begin' performed once when this Step becomes Active. 'end' performed once when this Step is no longer Active. 'always' performed constantly while this Step is Active
 * @property {?any} actionReference An Optional Reference for this Action (e.g. The Internal MAF Name of a Sizer or Numeric Sizer ID
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ManualMAFActionStep** Type
 * 
 * @typedef {Object} PackingLineController.ManualMAFActionStep
 * @property {number} index An Index used to Order Steps and compare with the Current Step Point value
 * @property {string} type The Type of Step
 * @property {string} title A Title for this Manual MAF Action Step
 * @property {?string} subtitle An Optional Subtitle for this Manual MAF Action Step
 * @property {string} description A Description for this Manual MAF Action Step
 * @property {string} actionType Type of MAF Action to be performed
 * @property {string} trigger When this Action should be performed. 'begin' performed once when this Step becomes Active. 'end' performed once when this Step is no longer Active. 'always' performed constantly while this Step is Active
 * @property {?any} actionReference An Optional Reference for this Action (e.g. The Internal MAF Name of a Sizer or Numeric Sizer ID
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AdvancedPackrunManagement** Type
 * 
 * @typedef {Object} PackingLineController.AdvancedPackrunManagement
 * @property {{startPackrunChangeRequest: number, cancelPackrunChangeRequest: number, advancePackrunChangeRequest: number, skipPackrunChangeStepRequest: number, packrunChangeCurrentStep: number, packrunChangeAutomationActionsEnabled: number}} points The Points used for Advanced Packrun Management
 * @property {Array<PackingLineController.ManualStep|PackingLineController.ClearSizersStep|PackingLineController.CreateSizerBatchesStep|PackingLineController.CheckFruitSizeProfileStep|PackingLineController.AutoMAFActionStep|PackingLineController.ManualMAFActionStep>} steps An Array of Steps that define the Advanced Packrun Management process
 * @property {boolean} enabled Whether Advanced Packrun Managed is Enabled on this Packing Line
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **MafIntegration** Type
 * 
 * @typedef {Object} PackingLineController.MafIntegration
 * @property {{apiCommunicationStatus: number, batchManagementStateNumber: number, batchManagementStateMessage: number, batchManagementLineName: number, batchManagementCurrentLot: number, batchManagementEndOfDay: number, skipBrushesSweepRequest: number, finishPackrunBeginRequest: number, finishPackrunCancelRequest: number, finishPackrunAdvanceRequest: number, finishPackrunSkipStepRequest: number, finishPackrunCurrentStep: number, timeBatchChangeBeginRequest: number, timeBatchChangeCancelRequest: number, timeBatchChangeAdvanceRequest: number, timeBatchChangeSkipStepRequest: number, timeBatchChangeCurrentStep: number}} points The Points used for this MAF Integration
 * @property {boolean} enabled Whether the MAF Integration is Enabled on this Packing Line
 * @property {string} tracAddress The IP Address or Server Name of the MAF TRAC PC
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **ClassTypeRejectCategory** Type
 * 
 * @typedef {Object} PackingLineController.ClassTypeRejectCategory
 * @property {string} classType A Class Type that is already defined on this Packing Line
 * @property {number} rejectCategoryId The FreshPack Reject Category ID that should be associated with the Class Type
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **FreshPackIntegration** Type
 * 
 * @typedef {Object} PackingLineController.FreshPackIntegration
 * @property {{currentPackrunSamples: number, apiCommunicationStatus: number, currentPackrunMajorPackingDefects: number, currentPackrunMinorPackingDefects: number, currentPackrunTotalPackingDefects: number, currentPackrunFutureStorageDefects: number, currentPackrunMajorPackingDefectsCount: number, currentPackrunMinorPackingDefectsCount: number, currentPackrunTotalPackingDefectsCount: number, currentPackrunFutureStorageDefectsCount: number}} points The Points used for this FreshQuality Integration
 * @property {boolean} enabled Whether the FreshQuality Integration is Enabled on this Packing Line
 * @property {string} username Username for Authenticating with the FreshQuality API
 * @property {string} password Password for Authenticating with the FreshQuality API
 * @property {string} apiBaseUrl Base URL of the FreshQuality API
 * @property {number[]} sampleTypeIds An Array of FreshQuality Sample Type IDs that are used for Class 1 R600 on this Packing Line
 * @memberof Controllers.Packhouse.Site
 */