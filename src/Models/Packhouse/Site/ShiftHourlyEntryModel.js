/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Shift Hourly Entry
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class ShiftHourlyEntryModel extends BaseModel
{
    /**
     * ShiftHourlyEntryModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Shift Hourly Entry
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Shift Hourly Entry ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Packing Line ID this Hourly Entry is associated with
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = undefined;
        
        /**
         * The Shift ID this Hourly Entry is asssociated with
         * 
         * @type {string}
         * @public
         */
        this.shiftId = undefined;
        
        /**
         * When this Hourly Entry was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = undefined;
        
        /**
         * The Start Timestamp of this Hourly Entry
         * 
         * @type {Date}
         * @public
         */
        this.startTimestamp = undefined;
        
        /**
         * The End Timestamp of this Hourly Entry
         * 
         * @type {Date}
         * @public
         */
        this.endTimestamp = undefined;
        
        /**
         * The Number of People working in all Areas except Class 2 for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.class1Manning = undefined;
        
        /**
         * The Number of People working in the Class 2 Area for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.class2Manning = undefined;
        
        /**
         * The Average Target Number of People that should be working for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageManningTarget = undefined;
        
        /**
         * The Average Cost per Person working in all Areas for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageCostPerManningUnit = undefined;
        
        /**
         * The Percentage of Total Tray Equivalents that are Layered for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.layeredTrayPercentage = undefined;
        
        /**
         * The Average Class 1 Percentage for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageClass1Percentage = undefined;
        
        /**
         * The Number of Quality R600 Samples that were Ideal for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.qualityR600IdealSamplesPercentage = undefined;
        
        /**
         * The Average Target Number of Quality R600 Samples that should be Ideal for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageQualityR600IdealSamplesTarget = undefined;
        
        /**
         * An Array of Custom Quality Data Items for this Hour
         * 
         * @type {Array<{id: string, name: string, type: string, value: number, averageTarget: number}>}
         * @public
         */
        this.customQualityData = undefined;
        
        /**
         * The Total Number of Bins Tipped for this Hour
         * 
         * @type {number}
         * @public
         */
        this.totalBinsTipped = undefined;
        
        /**
         * The Target Number of Bins to Tip for this Hour
         * 
         * @type {number}
         * @public
         */
        this.binsTippedTarget = undefined;
        
        /**
         * The Total Downtime for this Hour expressed in Seconds
         * 
         * @type {number}
         * @public
         */
        this.totalDowntime = undefined;
        
        /**
         * The Total Time that could be Utilized for Packing Fruit (excludes Planned Downtime such as Smoko Breaks) for this Hour expressed in Seconds
         * 
         * @type {number}
         * @public
         */
        this.totalProductionTime = undefined;
        
        /**
         * The Total Number of Class 1 Tray Equivalents Packed for this Hour
         * 
         * @type {number}
         * @public
         */
        this.totalClass1Trays = undefined;
        
        /**
         * The Total Number of Class 2 Tray Equivalents Packed for this Hour
         * 
         * @type {number}
         * @public
         */
        this.totalClass2Trays = undefined;
        
        /**
         * The Target Number of Class 1 Tray Equivalents that should be Packed excluding all Downtime for this Hour
         * 
         * @type {number}
         * @public
         */
        this.class1TraysPerHourExcludingDowntimeTarget = undefined;
        
        /**
         * The Target Number of Class 1 Tray Equivalents that should be Packed after Adjustment (Manning %, Class 1 %, Soft-Sort %) for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageClass1TraysPerHourAdjustedTarget = undefined;
        
        /**
         * The Average Cost per Tray Equivalent for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageCostPerTray = undefined;
        
        /**
         * The Average Cost per Tray Equivalent Target for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.averageCostPerTrayTarget = undefined;
        
        /**
         * The Primary Issue Category for this Hourly Entry
         * 
         * @type {?string}
         * @public
         */
        this.primaryIssueCategory = undefined;
        
        /**
         * The Primary Issue Tag for this Hourly Entry
         * 
         * @type {?string}
         * @public
         */
        this.primaryIssueTag = undefined;
        
        /**
         * A Percentage between 0% and 100% indicating how much the Primary Issue impacted Throughput for this Hourly Entry
         * 
         * @type {?number}
         * @public
         */
        this.primaryIssuePercentage = undefined;
        
        /**
         * The Secondary Issue Category for this Hourly Entry
         * 
         * @type {?string}
         * @public
         */
        this.secondaryIssueCategory = undefined;
        
        /**
         * The Secondary Issue Tag for this Hourly Entry
         * 
         * @type {?string}
         * @public
         */
        this.secondaryIssueTag = undefined;
        
        /**
         * A Percentage between 0% and 100% indicating how much the Secondary Issue impacted Throughput for this Hourly Entry
         * 
         * @type {?number}
         * @public
         */
        this.secondaryIssuePercentage = undefined;
        
        /**
         * An Optional Focus for the Next Hour
         * 
         * @type {?string}
         * @public
         */
        this.nextHourFocus = undefined;
        
        /**
         * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Hour
         * 
         * @type {?number}
         * @public
         */
        this.satisfactionRating = undefined;
        
        /**
         * The Status of this Hourly Entry
         * 
         * @type {string}
         * @public
         */
        this.status = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed this Hour without Planned Downtime (e.g. Smoko Breaks)
         * 
         * @type {number}
         * @public
         */
        this.class1TraysPerHourPotential = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed this Hour with Zero Downtime
         * 
         * @type {number}
         * @public
         */
        this.class1TraysPerHourExcludingDowntime = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed per Person this Hour without Planned Downtime (e.g. Smoko Breaks)
         * 
         * @type {?number}
         * @public
         */
        this.class1TraysPerManHourPotential = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed per Person this Hour with Zero Downtime
         * 
         * @type {?number}
         * @public
         */
        this.class1TraysPerManHourExcludingDowntime = undefined;
        
        /**
         * The Manning Percentage based on the Average Target for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.manningPercentage = undefined;
        
        /**
         * The Total Number of People working for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.totalManning = undefined;
        
        /**
         * The Percentage of Production Time without Downtime for this Hour
         * 
         * @type {number}
         * @public
         */
        this.uptimePercentage = undefined;
        
        /**
         * The Percentage of Downtime for this Hour
         * 
         * @type {number}
         * @public
         */
        this.downtimePercentage = undefined;
        
        /**
         * Whether the Shift Hourly Entry has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Shift Hourly Entry was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Shift Hourly Entry
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **ShiftHourlyEntryModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Shift Hourly Entry
     * @return {ShiftHourlyEntryModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new ShiftHourlyEntryModel(siteId);
        
        /**
         * The JSON Object
         * 
         * @type {Object<string, any>}
         */
        let jsonObject = {};
        
        if(typeof json === 'string')
        {
            jsonObject = JSON.parse(json);
        }
        else if(typeof json === 'object')
        {
            jsonObject = json;
        }
        
        if('id' in jsonObject)
        {
            model.id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('packingLineId' in jsonObject)
        {
            model.packingLineId = (function(){
                if(typeof jsonObject['packingLineId'] !== 'string')
                {
                    return String(jsonObject['packingLineId']);
                }
        
                return jsonObject['packingLineId'];
            }());
        }
        
        if('shiftId' in jsonObject)
        {
            model.shiftId = (function(){
                if(typeof jsonObject['shiftId'] !== 'string')
                {
                    return String(jsonObject['shiftId']);
                }
        
                return jsonObject['shiftId'];
            }());
        }
        
        if('createdTimestamp' in jsonObject)
        {
            model.createdTimestamp = (function(){
                if(typeof jsonObject['createdTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['createdTimestamp']));
                }
        
                return new Date(jsonObject['createdTimestamp']);
            }());
        }
        
        if('startTimestamp' in jsonObject)
        {
            model.startTimestamp = (function(){
                if(typeof jsonObject['startTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['startTimestamp']));
                }
        
                return new Date(jsonObject['startTimestamp']);
            }());
        }
        
        if('endTimestamp' in jsonObject)
        {
            model.endTimestamp = (function(){
                if(typeof jsonObject['endTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['endTimestamp']));
                }
        
                return new Date(jsonObject['endTimestamp']);
            }());
        }
        
        if('class1Manning' in jsonObject)
        {
            model.class1Manning = (function(){
                if(jsonObject['class1Manning'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['class1Manning'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1Manning'])) ? Number(jsonObject['class1Manning']) : Math.floor(Number(jsonObject['class1Manning']));
                }
        
                return Number.isInteger(jsonObject['class1Manning']) ? jsonObject['class1Manning'] : Math.floor(jsonObject['class1Manning']);
            }());
        }
        
        if('class2Manning' in jsonObject)
        {
            model.class2Manning = (function(){
                if(jsonObject['class2Manning'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['class2Manning'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class2Manning'])) ? Number(jsonObject['class2Manning']) : Math.floor(Number(jsonObject['class2Manning']));
                }
        
                return Number.isInteger(jsonObject['class2Manning']) ? jsonObject['class2Manning'] : Math.floor(jsonObject['class2Manning']);
            }());
        }
        
        if('averageManningTarget' in jsonObject)
        {
            model.averageManningTarget = (function(){
                if(jsonObject['averageManningTarget'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageManningTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['averageManningTarget'])) ? Number(jsonObject['averageManningTarget']) : Math.floor(Number(jsonObject['averageManningTarget']));
                }
        
                return Number.isInteger(jsonObject['averageManningTarget']) ? jsonObject['averageManningTarget'] : Math.floor(jsonObject['averageManningTarget']);
            }());
        }
        
        if('averageCostPerManningUnit' in jsonObject)
        {
            model.averageCostPerManningUnit = (function(){
                if(jsonObject['averageCostPerManningUnit'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageCostPerManningUnit'] !== 'number')
                {
                    return Number(jsonObject['averageCostPerManningUnit']);
                }
        
                return jsonObject['averageCostPerManningUnit'];
            }());
        }
        
        if('layeredTrayPercentage' in jsonObject)
        {
            model.layeredTrayPercentage = (function(){
                if(jsonObject['layeredTrayPercentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['layeredTrayPercentage'] !== 'number')
                {
                    return Number(jsonObject['layeredTrayPercentage']);
                }
        
                return jsonObject['layeredTrayPercentage'];
            }());
        }
        
        if('averageClass1Percentage' in jsonObject)
        {
            model.averageClass1Percentage = (function(){
                if(jsonObject['averageClass1Percentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageClass1Percentage'] !== 'number')
                {
                    return Number(jsonObject['averageClass1Percentage']);
                }
        
                return jsonObject['averageClass1Percentage'];
            }());
        }
        
        if('qualityR600IdealSamplesPercentage' in jsonObject)
        {
            model.qualityR600IdealSamplesPercentage = (function(){
                if(jsonObject['qualityR600IdealSamplesPercentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['qualityR600IdealSamplesPercentage'] !== 'number')
                {
                    return Number(jsonObject['qualityR600IdealSamplesPercentage']);
                }
        
                return jsonObject['qualityR600IdealSamplesPercentage'];
            }());
        }
        
        if('averageQualityR600IdealSamplesTarget' in jsonObject)
        {
            model.averageQualityR600IdealSamplesTarget = (function(){
                if(jsonObject['averageQualityR600IdealSamplesTarget'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageQualityR600IdealSamplesTarget'] !== 'number')
                {
                    return Number(jsonObject['averageQualityR600IdealSamplesTarget']);
                }
        
                return jsonObject['averageQualityR600IdealSamplesTarget'];
            }());
        }
        
        if('customQualityData' in jsonObject)
        {
            model.customQualityData = (function(){
                if(Array.isArray(jsonObject['customQualityData']) !== true)
                {
                    return [];
                }
        
                return jsonObject['customQualityData'].map((customQualityDataItem) => {
                    return (function(){
                        let customQualityDataItemObject = {};
                        
                        if(typeof customQualityDataItem === 'object' && 'id' in customQualityDataItem)
                        {
                            customQualityDataItemObject.id = (function(){
                                if(typeof customQualityDataItem.id !== 'string')
                                {
                                    return String(customQualityDataItem.id);
                                }
        
                                return customQualityDataItem.id;
                            }());
                        }
                        else
                        {
                            customQualityDataItemObject.id = "";
                        }
                        
                        if(typeof customQualityDataItem === 'object' && 'name' in customQualityDataItem)
                        {
                            customQualityDataItemObject.name = (function(){
                                if(typeof customQualityDataItem.name !== 'string')
                                {
                                    return String(customQualityDataItem.name);
                                }
        
                                return customQualityDataItem.name;
                            }());
                        }
                        else
                        {
                            customQualityDataItemObject.name = "";
                        }
                        
                        if(typeof customQualityDataItem === 'object' && 'type' in customQualityDataItem)
                        {
                            customQualityDataItemObject.type = (function(){
                                if(typeof customQualityDataItem.type !== 'string')
                                {
                                    return String(customQualityDataItem.type);
                                }
        
                                return customQualityDataItem.type;
                            }());
                        }
                        else
                        {
                            customQualityDataItemObject.type = "";
                        }
                        
                        if(typeof customQualityDataItem === 'object' && 'value' in customQualityDataItem)
                        {
                            customQualityDataItemObject.value = (function(){
                                if(typeof customQualityDataItem.value !== 'number')
                                {
                                    return Number(customQualityDataItem.value);
                                }
        
                                return customQualityDataItem.value;
                            }());
                        }
                        else
                        {
                            customQualityDataItemObject.value = 0;
                        }
                        
                        if(typeof customQualityDataItem === 'object' && 'averageTarget' in customQualityDataItem)
                        {
                            customQualityDataItemObject.averageTarget = (function(){
                                if(typeof customQualityDataItem.averageTarget !== 'number')
                                {
                                    return Number(customQualityDataItem.averageTarget);
                                }
        
                                return customQualityDataItem.averageTarget;
                            }());
                        }
                        else
                        {
                            customQualityDataItemObject.averageTarget = 0;
                        }
        
                        return customQualityDataItemObject;
                    }());
                });
            }());
        }
        
        if('totalBinsTipped' in jsonObject)
        {
            model.totalBinsTipped = (function(){
                if(typeof jsonObject['totalBinsTipped'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalBinsTipped'])) ? Number(jsonObject['totalBinsTipped']) : Math.floor(Number(jsonObject['totalBinsTipped']));
                }
        
                return Number.isInteger(jsonObject['totalBinsTipped']) ? jsonObject['totalBinsTipped'] : Math.floor(jsonObject['totalBinsTipped']);
            }());
        }
        
        if('binsTippedTarget' in jsonObject)
        {
            model.binsTippedTarget = (function(){
                if(typeof jsonObject['binsTippedTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['binsTippedTarget'])) ? Number(jsonObject['binsTippedTarget']) : Math.floor(Number(jsonObject['binsTippedTarget']));
                }
        
                return Number.isInteger(jsonObject['binsTippedTarget']) ? jsonObject['binsTippedTarget'] : Math.floor(jsonObject['binsTippedTarget']);
            }());
        }
        
        if('totalDowntime' in jsonObject)
        {
            model.totalDowntime = (function(){
                if(typeof jsonObject['totalDowntime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalDowntime'])) ? Number(jsonObject['totalDowntime']) : Math.floor(Number(jsonObject['totalDowntime']));
                }
        
                return Number.isInteger(jsonObject['totalDowntime']) ? jsonObject['totalDowntime'] : Math.floor(jsonObject['totalDowntime']);
            }());
        }
        
        if('totalProductionTime' in jsonObject)
        {
            model.totalProductionTime = (function(){
                if(typeof jsonObject['totalProductionTime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalProductionTime'])) ? Number(jsonObject['totalProductionTime']) : Math.floor(Number(jsonObject['totalProductionTime']));
                }
        
                return Number.isInteger(jsonObject['totalProductionTime']) ? jsonObject['totalProductionTime'] : Math.floor(jsonObject['totalProductionTime']);
            }());
        }
        
        if('totalClass1Trays' in jsonObject)
        {
            model.totalClass1Trays = (function(){
                if(typeof jsonObject['totalClass1Trays'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalClass1Trays'])) ? Number(jsonObject['totalClass1Trays']) : Math.floor(Number(jsonObject['totalClass1Trays']));
                }
        
                return Number.isInteger(jsonObject['totalClass1Trays']) ? jsonObject['totalClass1Trays'] : Math.floor(jsonObject['totalClass1Trays']);
            }());
        }
        
        if('totalClass2Trays' in jsonObject)
        {
            model.totalClass2Trays = (function(){
                if(typeof jsonObject['totalClass2Trays'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalClass2Trays'])) ? Number(jsonObject['totalClass2Trays']) : Math.floor(Number(jsonObject['totalClass2Trays']));
                }
        
                return Number.isInteger(jsonObject['totalClass2Trays']) ? jsonObject['totalClass2Trays'] : Math.floor(jsonObject['totalClass2Trays']);
            }());
        }
        
        if('class1TraysPerHourExcludingDowntimeTarget' in jsonObject)
        {
            model.class1TraysPerHourExcludingDowntimeTarget = (function(){
                if(typeof jsonObject['class1TraysPerHourExcludingDowntimeTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1TraysPerHourExcludingDowntimeTarget'])) ? Number(jsonObject['class1TraysPerHourExcludingDowntimeTarget']) : Math.floor(Number(jsonObject['class1TraysPerHourExcludingDowntimeTarget']));
                }
        
                return Number.isInteger(jsonObject['class1TraysPerHourExcludingDowntimeTarget']) ? jsonObject['class1TraysPerHourExcludingDowntimeTarget'] : Math.floor(jsonObject['class1TraysPerHourExcludingDowntimeTarget']);
            }());
        }
        
        if('averageClass1TraysPerHourAdjustedTarget' in jsonObject)
        {
            model.averageClass1TraysPerHourAdjustedTarget = (function(){
                if(jsonObject['averageClass1TraysPerHourAdjustedTarget'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageClass1TraysPerHourAdjustedTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['averageClass1TraysPerHourAdjustedTarget'])) ? Number(jsonObject['averageClass1TraysPerHourAdjustedTarget']) : Math.floor(Number(jsonObject['averageClass1TraysPerHourAdjustedTarget']));
                }
        
                return Number.isInteger(jsonObject['averageClass1TraysPerHourAdjustedTarget']) ? jsonObject['averageClass1TraysPerHourAdjustedTarget'] : Math.floor(jsonObject['averageClass1TraysPerHourAdjustedTarget']);
            }());
        }
        
        if('averageCostPerTray' in jsonObject)
        {
            model.averageCostPerTray = (function(){
                if(jsonObject['averageCostPerTray'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageCostPerTray'] !== 'number')
                {
                    return Number(jsonObject['averageCostPerTray']);
                }
        
                return jsonObject['averageCostPerTray'];
            }());
        }
        
        if('averageCostPerTrayTarget' in jsonObject)
        {
            model.averageCostPerTrayTarget = (function(){
                if(jsonObject['averageCostPerTrayTarget'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['averageCostPerTrayTarget'] !== 'number')
                {
                    return Number(jsonObject['averageCostPerTrayTarget']);
                }
        
                return jsonObject['averageCostPerTrayTarget'];
            }());
        }
        
        if('primaryIssueCategory' in jsonObject)
        {
            model.primaryIssueCategory = (function(){
                if(jsonObject['primaryIssueCategory'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['primaryIssueCategory'] !== 'string')
                {
                    return String(jsonObject['primaryIssueCategory']);
                }
        
                return jsonObject['primaryIssueCategory'];
            }());
        }
        
        if('primaryIssueTag' in jsonObject)
        {
            model.primaryIssueTag = (function(){
                if(jsonObject['primaryIssueTag'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['primaryIssueTag'] !== 'string')
                {
                    return String(jsonObject['primaryIssueTag']);
                }
        
                return jsonObject['primaryIssueTag'];
            }());
        }
        
        if('primaryIssuePercentage' in jsonObject)
        {
            model.primaryIssuePercentage = (function(){
                if(jsonObject['primaryIssuePercentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['primaryIssuePercentage'] !== 'number')
                {
                    return Number(jsonObject['primaryIssuePercentage']);
                }
        
                return jsonObject['primaryIssuePercentage'];
            }());
        }
        
        if('secondaryIssueCategory' in jsonObject)
        {
            model.secondaryIssueCategory = (function(){
                if(jsonObject['secondaryIssueCategory'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['secondaryIssueCategory'] !== 'string')
                {
                    return String(jsonObject['secondaryIssueCategory']);
                }
        
                return jsonObject['secondaryIssueCategory'];
            }());
        }
        
        if('secondaryIssueTag' in jsonObject)
        {
            model.secondaryIssueTag = (function(){
                if(jsonObject['secondaryIssueTag'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['secondaryIssueTag'] !== 'string')
                {
                    return String(jsonObject['secondaryIssueTag']);
                }
        
                return jsonObject['secondaryIssueTag'];
            }());
        }
        
        if('secondaryIssuePercentage' in jsonObject)
        {
            model.secondaryIssuePercentage = (function(){
                if(jsonObject['secondaryIssuePercentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['secondaryIssuePercentage'] !== 'number')
                {
                    return Number(jsonObject['secondaryIssuePercentage']);
                }
        
                return jsonObject['secondaryIssuePercentage'];
            }());
        }
        
        if('nextHourFocus' in jsonObject)
        {
            model.nextHourFocus = (function(){
                if(jsonObject['nextHourFocus'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['nextHourFocus'] !== 'string')
                {
                    return String(jsonObject['nextHourFocus']);
                }
        
                return jsonObject['nextHourFocus'];
            }());
        }
        
        if('satisfactionRating' in jsonObject)
        {
            model.satisfactionRating = (function(){
                if(jsonObject['satisfactionRating'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['satisfactionRating'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['satisfactionRating'])) ? Number(jsonObject['satisfactionRating']) : Math.floor(Number(jsonObject['satisfactionRating']));
                }
        
                return Number.isInteger(jsonObject['satisfactionRating']) ? jsonObject['satisfactionRating'] : Math.floor(jsonObject['satisfactionRating']);
            }());
        }
        
        if('status' in jsonObject)
        {
            model.status = (function(){
                if(typeof jsonObject['status'] !== 'string')
                {
                    return String(jsonObject['status']);
                }
        
                return jsonObject['status'];
            }());
        }
        
        if('class1TraysPerHourPotential' in jsonObject)
        {
            model.class1TraysPerHourPotential = (function(){
                if(typeof jsonObject['class1TraysPerHourPotential'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1TraysPerHourPotential'])) ? Number(jsonObject['class1TraysPerHourPotential']) : Math.floor(Number(jsonObject['class1TraysPerHourPotential']));
                }
        
                return Number.isInteger(jsonObject['class1TraysPerHourPotential']) ? jsonObject['class1TraysPerHourPotential'] : Math.floor(jsonObject['class1TraysPerHourPotential']);
            }());
        }
        
        if('class1TraysPerHourExcludingDowntime' in jsonObject)
        {
            model.class1TraysPerHourExcludingDowntime = (function(){
                if(typeof jsonObject['class1TraysPerHourExcludingDowntime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1TraysPerHourExcludingDowntime'])) ? Number(jsonObject['class1TraysPerHourExcludingDowntime']) : Math.floor(Number(jsonObject['class1TraysPerHourExcludingDowntime']));
                }
        
                return Number.isInteger(jsonObject['class1TraysPerHourExcludingDowntime']) ? jsonObject['class1TraysPerHourExcludingDowntime'] : Math.floor(jsonObject['class1TraysPerHourExcludingDowntime']);
            }());
        }
        
        if('class1TraysPerManHourPotential' in jsonObject)
        {
            model.class1TraysPerManHourPotential = (function(){
                if(jsonObject['class1TraysPerManHourPotential'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['class1TraysPerManHourPotential'] !== 'number')
                {
                    return Number(jsonObject['class1TraysPerManHourPotential']);
                }
        
                return jsonObject['class1TraysPerManHourPotential'];
            }());
        }
        
        if('class1TraysPerManHourExcludingDowntime' in jsonObject)
        {
            model.class1TraysPerManHourExcludingDowntime = (function(){
                if(jsonObject['class1TraysPerManHourExcludingDowntime'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['class1TraysPerManHourExcludingDowntime'] !== 'number')
                {
                    return Number(jsonObject['class1TraysPerManHourExcludingDowntime']);
                }
        
                return jsonObject['class1TraysPerManHourExcludingDowntime'];
            }());
        }
        
        if('manningPercentage' in jsonObject)
        {
            model.manningPercentage = (function(){
                if(jsonObject['manningPercentage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['manningPercentage'] !== 'number')
                {
                    return Number(jsonObject['manningPercentage']);
                }
        
                return jsonObject['manningPercentage'];
            }());
        }
        
        if('totalManning' in jsonObject)
        {
            model.totalManning = (function(){
                if(jsonObject['totalManning'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['totalManning'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalManning'])) ? Number(jsonObject['totalManning']) : Math.floor(Number(jsonObject['totalManning']));
                }
        
                return Number.isInteger(jsonObject['totalManning']) ? jsonObject['totalManning'] : Math.floor(jsonObject['totalManning']);
            }());
        }
        
        if('uptimePercentage' in jsonObject)
        {
            model.uptimePercentage = (function(){
                if(typeof jsonObject['uptimePercentage'] !== 'number')
                {
                    return Number(jsonObject['uptimePercentage']);
                }
        
                return jsonObject['uptimePercentage'];
            }());
        }
        
        if('downtimePercentage' in jsonObject)
        {
            model.downtimePercentage = (function(){
                if(typeof jsonObject['downtimePercentage'] !== 'number')
                {
                    return Number(jsonObject['downtimePercentage']);
                }
        
                return jsonObject['downtimePercentage'];
            }());
        }
        
        if('deleted' in jsonObject)
        {
            model.deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model.updateTimestamp = (function(){
                if(typeof jsonObject['updateTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['updateTimestamp']));
                }
        
                return new Date(jsonObject['updateTimestamp']);
            }());
        }
        
        return model;
    }
}

export default ShiftHourlyEntryModel;