/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Shift Hourly Entry
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class ShiftHourlyEntryModel extends BaseSiteModel
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
         * @private
         */
        this._id = undefined;
        
        /**
         * The Packing Line ID this Hourly Entry is associated with
         * 
         * @type {string}
         * @private
         */
        this._packingLineId = undefined;
        
        /**
         * The Shift ID this Hourly Entry is asssociated with
         * 
         * @type {string}
         * @private
         */
        this._shiftId = undefined;
        
        /**
         * When this Hourly Entry was Created
         * 
         * @type {Date}
         * @private
         */
        this._createdTimestamp = undefined;
        
        /**
         * The Start Timestamp of this Hourly Entry
         * 
         * @type {Date}
         * @private
         */
        this._startTimestamp = undefined;
        
        /**
         * The End Timestamp of this Hourly Entry
         * 
         * @type {Date}
         * @private
         */
        this._endTimestamp = undefined;
        
        /**
         * The Number of People working in all Areas except Class 2 for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._class1Manning = undefined;
        
        /**
         * The Number of People working in the Class 2 Area for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._class2Manning = undefined;
        
        /**
         * The Average Target Number of People that should be working for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._averageManningTarget = undefined;
        
        /**
         * The Percentage of Total Tray Equivalents that are Layered for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._layeredTrayPercentage = undefined;
        
        /**
         * The Average Class 1 Percentage for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._averageClass1Percentage = undefined;
        
        /**
         * The Number of Quality R600 Samples that were Ideal for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._qualityR600IdealSamplesPercentage = undefined;
        
        /**
         * An Array of Custom Quality Data Items for this Hour
         * 
         * @type {Array<{name: string, type: string, value: number}>}
         * @private
         */
        this._customQualityData = undefined;
        
        /**
         * The Total Number of Bins Tipped for this Hour
         * 
         * @type {number}
         * @private
         */
        this._totalBinsTipped = undefined;
        
        /**
         * The Target Number of Bins to Tip for this Hour
         * 
         * @type {number}
         * @private
         */
        this._binsTippedTarget = undefined;
        
        /**
         * The Total Downtime for this Hour expressed in Seconds
         * 
         * @type {number}
         * @private
         */
        this._totalDowntime = undefined;
        
        /**
         * The Total Time that could be Utilized for Packing Fruit (excludes Planned Downtime such as Smoko Breaks) for this Hour expressed in Seconds
         * 
         * @type {number}
         * @private
         */
        this._totalProductionTime = undefined;
        
        /**
         * The Total Number of Class 1 Tray Equivalents Packed for this Hour
         * 
         * @type {number}
         * @private
         */
        this._totalClass1Trays = undefined;
        
        /**
         * The Total Number of Class 2 Tray Equivalents Packed for this Hour
         * 
         * @type {number}
         * @private
         */
        this._totalClass2Trays = undefined;
        
        /**
         * The Primary Issue Category for this Hourly Entry
         * 
         * @type {?string}
         * @private
         */
        this._primaryIssueCategory = undefined;
        
        /**
         * The Primary Issue Tag for this Hourly Entry
         * 
         * @type {?string}
         * @private
         */
        this._primaryIssueTag = undefined;
        
        /**
         * The Secondary Issue Category for this Hourly Entry
         * 
         * @type {?string}
         * @private
         */
        this._secondaryIssueCategory = undefined;
        
        /**
         * The Secondary Issue Tag for this Hourly Entry
         * 
         * @type {?string}
         * @private
         */
        this._secondaryIssueTag = undefined;
        
        /**
         * An Optional Focus for the Next Hour
         * 
         * @type {?string}
         * @private
         */
        this._nextHourFocus = undefined;
        
        /**
         * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Hour
         * 
         * @type {?number}
         * @private
         */
        this._satisfactionRating = undefined;
        
        /**
         * The Status of this Hourly Entry
         * 
         * @type {string}
         * @private
         */
        this._status = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed this Hour without Planned Downtime (e.g. Smoko Breaks)
         * 
         * @type {number}
         * @private
         */
        this._class1TraysPerHourPotential = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed this Hour with Zero Downtime
         * 
         * @type {number}
         * @private
         */
        this._class1TraysPerHourExcludingDowntime = undefined;
        
        /**
         * The Number of Class 1 Tray Equivalents that would have been Packed per Person this Hour without Planned Downtime (e.g. Smoko Breaks)
         * 
         * @type {?number}
         * @private
         */
        this._class1TraysPerManHourPotential = undefined;
        
        /**
         * The Manning Percentage based on the Average Target for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._manningPercentage = undefined;
        
        /**
         * The Total Number of People working for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._totalManning = undefined;
        
        /**
         * Whether the Shift Hourly Entry has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Shift Hourly Entry was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Shift Hourly Entry
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Shift Hourly Entry ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Packing Line ID this Hourly Entry is associated with
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._packingLineId;
    }

    /**
     * The Shift ID this Hourly Entry is asssociated with
     * 
     * @public
     * @type {string}
     */
    get shiftId()
    {
        return this._shiftId;
    }

    /**
     * When this Hourly Entry was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._createdTimestamp;
    }

    /**
     * The Start Timestamp of this Hourly Entry
     * 
     * @public
     * @type {Date}
     */
    get startTimestamp()
    {
        return this._startTimestamp;
    }

    /**
     * The End Timestamp of this Hourly Entry
     * 
     * @public
     * @type {Date}
     */
    get endTimestamp()
    {
        return this._endTimestamp;
    }

    /**
     * The Number of People working in all Areas except Class 2 for this Hour
     * 
     * @public
     * @type {?number}
     */
    get class1Manning()
    {
        return this._class1Manning;
    }

    /**
     * The Number of People working in the Class 2 Area for this Hour
     * 
     * @public
     * @type {?number}
     */
    get class2Manning()
    {
        return this._class2Manning;
    }

    /**
     * The Average Target Number of People that should be working for this Hour
     * 
     * @public
     * @type {?number}
     */
    get averageManningTarget()
    {
        return this._averageManningTarget;
    }

    /**
     * The Percentage of Total Tray Equivalents that are Layered for this Hour
     * 
     * @public
     * @type {?number}
     */
    get layeredTrayPercentage()
    {
        return this._layeredTrayPercentage;
    }

    /**
     * The Average Class 1 Percentage for this Hour
     * 
     * @public
     * @type {?number}
     */
    get averageClass1Percentage()
    {
        return this._averageClass1Percentage;
    }

    /**
     * The Number of Quality R600 Samples that were Ideal for this Hour
     * 
     * @public
     * @type {?number}
     */
    get qualityR600IdealSamplesPercentage()
    {
        return this._qualityR600IdealSamplesPercentage;
    }

    /**
     * An Array of Custom Quality Data Items for this Hour
     * 
     * @public
     * @type {Array<{name: string, type: string, value: number}>}
     */
    get customQualityData()
    {
        return this._customQualityData;
    }

    /**
     * The Total Number of Bins Tipped for this Hour
     * 
     * @public
     * @type {number}
     */
    get totalBinsTipped()
    {
        return this._totalBinsTipped;
    }

    /**
     * The Target Number of Bins to Tip for this Hour
     * 
     * @public
     * @type {number}
     */
    get binsTippedTarget()
    {
        return this._binsTippedTarget;
    }

    /**
     * The Total Downtime for this Hour expressed in Seconds
     * 
     * @public
     * @type {number}
     */
    get totalDowntime()
    {
        return this._totalDowntime;
    }

    /**
     * The Total Time that could be Utilized for Packing Fruit (excludes Planned Downtime such as Smoko Breaks) for this Hour expressed in Seconds
     * 
     * @public
     * @type {number}
     */
    get totalProductionTime()
    {
        return this._totalProductionTime;
    }

    /**
     * The Total Number of Class 1 Tray Equivalents Packed for this Hour
     * 
     * @public
     * @type {number}
     */
    get totalClass1Trays()
    {
        return this._totalClass1Trays;
    }

    /**
     * The Total Number of Class 2 Tray Equivalents Packed for this Hour
     * 
     * @public
     * @type {number}
     */
    get totalClass2Trays()
    {
        return this._totalClass2Trays;
    }

    /**
     * The Primary Issue Category for this Hourly Entry
     * 
     * @public
     * @type {?string}
     */
    get primaryIssueCategory()
    {
        return this._primaryIssueCategory;
    }

    /**
     * The Primary Issue Tag for this Hourly Entry
     * 
     * @public
     * @type {?string}
     */
    get primaryIssueTag()
    {
        return this._primaryIssueTag;
    }

    /**
     * The Secondary Issue Category for this Hourly Entry
     * 
     * @public
     * @type {?string}
     */
    get secondaryIssueCategory()
    {
        return this._secondaryIssueCategory;
    }

    /**
     * The Secondary Issue Tag for this Hourly Entry
     * 
     * @public
     * @type {?string}
     */
    get secondaryIssueTag()
    {
        return this._secondaryIssueTag;
    }

    /**
     * An Optional Focus for the Next Hour
     * 
     * @public
     * @type {?string}
     */
    get nextHourFocus()
    {
        return this._nextHourFocus;
    }

    /**
     * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Hour
     * 
     * @public
     * @type {?number}
     */
    get satisfactionRating()
    {
        return this._satisfactionRating;
    }

    /**
     * The Status of this Hourly Entry
     * 
     * @public
     * @type {string}
     */
    get status()
    {
        return this._status;
    }

    /**
     * The Number of Class 1 Tray Equivalents that would have been Packed this Hour without Planned Downtime (e.g. Smoko Breaks)
     * 
     * @public
     * @type {number}
     */
    get class1TraysPerHourPotential()
    {
        return this._class1TraysPerHourPotential;
    }

    /**
     * The Number of Class 1 Tray Equivalents that would have been Packed this Hour with Zero Downtime
     * 
     * @public
     * @type {number}
     */
    get class1TraysPerHourExcludingDowntime()
    {
        return this._class1TraysPerHourExcludingDowntime;
    }

    /**
     * The Number of Class 1 Tray Equivalents that would have been Packed per Person this Hour without Planned Downtime (e.g. Smoko Breaks)
     * 
     * @public
     * @type {?number}
     */
    get class1TraysPerManHourPotential()
    {
        return this._class1TraysPerManHourPotential;
    }

    /**
     * The Manning Percentage based on the Average Target for this Hour
     * 
     * @public
     * @type {?number}
     */
    get manningPercentage()
    {
        return this._manningPercentage;
    }

    /**
     * The Total Number of People working for this Hour
     * 
     * @public
     * @type {?number}
     */
    get totalManning()
    {
        return this._totalManning;
    }

    /**
     * Whether the Shift Hourly Entry has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Shift Hourly Entry was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Shift Hourly Entry
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
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
            model._id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('packingLineId' in jsonObject)
        {
            model._packingLineId = (function(){
                if(typeof jsonObject['packingLineId'] !== 'string')
                {
                    return String(jsonObject['packingLineId']);
                }
        
                return jsonObject['packingLineId'];
            }());
        }
        
        if('shiftId' in jsonObject)
        {
            model._shiftId = (function(){
                if(typeof jsonObject['shiftId'] !== 'string')
                {
                    return String(jsonObject['shiftId']);
                }
        
                return jsonObject['shiftId'];
            }());
        }
        
        if('createdTimestamp' in jsonObject)
        {
            model._createdTimestamp = (function(){
                if(typeof jsonObject['createdTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['createdTimestamp']));
                }
        
                return new Date(jsonObject['createdTimestamp']);
            }());
        }
        
        if('startTimestamp' in jsonObject)
        {
            model._startTimestamp = (function(){
                if(typeof jsonObject['startTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['startTimestamp']));
                }
        
                return new Date(jsonObject['startTimestamp']);
            }());
        }
        
        if('endTimestamp' in jsonObject)
        {
            model._endTimestamp = (function(){
                if(typeof jsonObject['endTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['endTimestamp']));
                }
        
                return new Date(jsonObject['endTimestamp']);
            }());
        }
        
        if('class1Manning' in jsonObject)
        {
            model._class1Manning = (function(){
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
            model._class2Manning = (function(){
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
            model._averageManningTarget = (function(){
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
        
        if('layeredTrayPercentage' in jsonObject)
        {
            model._layeredTrayPercentage = (function(){
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
            model._averageClass1Percentage = (function(){
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
            model._qualityR600IdealSamplesPercentage = (function(){
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
        
        if('customQualityData' in jsonObject)
        {
            model._customQualityData = (function(){
                if(Array.isArray(jsonObject['customQualityData']) !== true)
                {
                    return [];
                }
        
                return jsonObject['customQualityData'].map((customQualityDataItem) => {
                    return (function(){
                        let customQualityDataItemObject = {};
                        
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
        
                        return customQualityDataItemObject;
                    }());
                });
            }());
        }
        
        if('totalBinsTipped' in jsonObject)
        {
            model._totalBinsTipped = (function(){
                if(typeof jsonObject['totalBinsTipped'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalBinsTipped'])) ? Number(jsonObject['totalBinsTipped']) : Math.floor(Number(jsonObject['totalBinsTipped']));
                }
        
                return Number.isInteger(jsonObject['totalBinsTipped']) ? jsonObject['totalBinsTipped'] : Math.floor(jsonObject['totalBinsTipped']);
            }());
        }
        
        if('binsTippedTarget' in jsonObject)
        {
            model._binsTippedTarget = (function(){
                if(typeof jsonObject['binsTippedTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['binsTippedTarget'])) ? Number(jsonObject['binsTippedTarget']) : Math.floor(Number(jsonObject['binsTippedTarget']));
                }
        
                return Number.isInteger(jsonObject['binsTippedTarget']) ? jsonObject['binsTippedTarget'] : Math.floor(jsonObject['binsTippedTarget']);
            }());
        }
        
        if('totalDowntime' in jsonObject)
        {
            model._totalDowntime = (function(){
                if(typeof jsonObject['totalDowntime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalDowntime'])) ? Number(jsonObject['totalDowntime']) : Math.floor(Number(jsonObject['totalDowntime']));
                }
        
                return Number.isInteger(jsonObject['totalDowntime']) ? jsonObject['totalDowntime'] : Math.floor(jsonObject['totalDowntime']);
            }());
        }
        
        if('totalProductionTime' in jsonObject)
        {
            model._totalProductionTime = (function(){
                if(typeof jsonObject['totalProductionTime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalProductionTime'])) ? Number(jsonObject['totalProductionTime']) : Math.floor(Number(jsonObject['totalProductionTime']));
                }
        
                return Number.isInteger(jsonObject['totalProductionTime']) ? jsonObject['totalProductionTime'] : Math.floor(jsonObject['totalProductionTime']);
            }());
        }
        
        if('totalClass1Trays' in jsonObject)
        {
            model._totalClass1Trays = (function(){
                if(typeof jsonObject['totalClass1Trays'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalClass1Trays'])) ? Number(jsonObject['totalClass1Trays']) : Math.floor(Number(jsonObject['totalClass1Trays']));
                }
        
                return Number.isInteger(jsonObject['totalClass1Trays']) ? jsonObject['totalClass1Trays'] : Math.floor(jsonObject['totalClass1Trays']);
            }());
        }
        
        if('totalClass2Trays' in jsonObject)
        {
            model._totalClass2Trays = (function(){
                if(typeof jsonObject['totalClass2Trays'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalClass2Trays'])) ? Number(jsonObject['totalClass2Trays']) : Math.floor(Number(jsonObject['totalClass2Trays']));
                }
        
                return Number.isInteger(jsonObject['totalClass2Trays']) ? jsonObject['totalClass2Trays'] : Math.floor(jsonObject['totalClass2Trays']);
            }());
        }
        
        if('primaryIssueCategory' in jsonObject)
        {
            model._primaryIssueCategory = (function(){
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
            model._primaryIssueTag = (function(){
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
        
        if('secondaryIssueCategory' in jsonObject)
        {
            model._secondaryIssueCategory = (function(){
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
            model._secondaryIssueTag = (function(){
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
        
        if('nextHourFocus' in jsonObject)
        {
            model._nextHourFocus = (function(){
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
            model._satisfactionRating = (function(){
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
            model._status = (function(){
                if(typeof jsonObject['status'] !== 'string')
                {
                    return String(jsonObject['status']);
                }
        
                return jsonObject['status'];
            }());
        }
        
        if('class1TraysPerHourPotential' in jsonObject)
        {
            model._class1TraysPerHourPotential = (function(){
                if(typeof jsonObject['class1TraysPerHourPotential'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1TraysPerHourPotential'])) ? Number(jsonObject['class1TraysPerHourPotential']) : Math.floor(Number(jsonObject['class1TraysPerHourPotential']));
                }
        
                return Number.isInteger(jsonObject['class1TraysPerHourPotential']) ? jsonObject['class1TraysPerHourPotential'] : Math.floor(jsonObject['class1TraysPerHourPotential']);
            }());
        }
        
        if('class1TraysPerHourExcludingDowntime' in jsonObject)
        {
            model._class1TraysPerHourExcludingDowntime = (function(){
                if(typeof jsonObject['class1TraysPerHourExcludingDowntime'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['class1TraysPerHourExcludingDowntime'])) ? Number(jsonObject['class1TraysPerHourExcludingDowntime']) : Math.floor(Number(jsonObject['class1TraysPerHourExcludingDowntime']));
                }
        
                return Number.isInteger(jsonObject['class1TraysPerHourExcludingDowntime']) ? jsonObject['class1TraysPerHourExcludingDowntime'] : Math.floor(jsonObject['class1TraysPerHourExcludingDowntime']);
            }());
        }
        
        if('class1TraysPerManHourPotential' in jsonObject)
        {
            model._class1TraysPerManHourPotential = (function(){
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
        
        if('manningPercentage' in jsonObject)
        {
            model._manningPercentage = (function(){
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
            model._totalManning = (function(){
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
        
        if('deleted' in jsonObject)
        {
            model._deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model._updateTimestamp = (function(){
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