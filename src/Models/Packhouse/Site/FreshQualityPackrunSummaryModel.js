/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a FreshQuality Packrun Summary
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class FreshQualityPackrunSummaryModel extends BaseModel
{
    /**
     * FreshQualityPackrunSummaryModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this FreshQuality Packrun Summary
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The FreshQuality Packrun Summary ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Packing Line ID this Summary is associated with
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = undefined;
        
        /**
         * The Packrun ID this Summary is associated with
         * 
         * @type {string}
         * @public
         */
        this.packrunId = undefined;
        
        /**
         * When this Summary was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = undefined;
        
        /**
         * The Time Batch this Summary is associated with
         * 
         * @type {?string}
         * @public
         */
        this.timeBatchId = undefined;
        
        /**
         * An Array of Class 1 R600 Samples
         * 
         * @type {Array<{fruitSize: string, packType: string, timestamp: Date, fruitCount: number, defects: Array<{name: string, group: string, fruitCount: number}>}>}
         * @public
         */
        this.class1R600Samples = undefined;
        
        /**
         * An Array of Defect Category Summaries (e.g. Minor Packing Defects, Softs)
         * 
         * @type {Array<{name: string, percentage: number, defects: Array<{name: string, fruitCount: number, percentage: number}>}>}
         * @public
         */
        this.categorySummaries = undefined;
        
        /**
         * The Total Number of Fruit Sampled in this Packrun Summary
         * 
         * @type {number}
         * @public
         */
        this.totalFruitSampled = undefined;
        
        /**
         * Whether the FreshQuality Packrun Summary has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the FreshQuality Packrun Summary was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this FreshQuality Packrun Summary
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **FreshQualityPackrunSummaryModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this FreshQuality Packrun Summary
     * @return {FreshQualityPackrunSummaryModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new FreshQualityPackrunSummaryModel(siteId);
        
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
        
        if('packrunId' in jsonObject)
        {
            model.packrunId = (function(){
                if(typeof jsonObject['packrunId'] !== 'string')
                {
                    return String(jsonObject['packrunId']);
                }
        
                return jsonObject['packrunId'];
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
        
        if('timeBatchId' in jsonObject)
        {
            model.timeBatchId = (function(){
                if(jsonObject['timeBatchId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['timeBatchId'] !== 'string')
                {
                    return String(jsonObject['timeBatchId']);
                }
        
                return jsonObject['timeBatchId'];
            }());
        }
        
        if('class1R600Samples' in jsonObject)
        {
            model.class1R600Samples = (function(){
                if(Array.isArray(jsonObject['class1R600Samples']) !== true)
                {
                    return [];
                }
        
                return jsonObject['class1R600Samples'].map((class1R600SamplesItem) => {
                    return (function(){
                        let class1R600SamplesItemObject = {};
                        
                        if(typeof class1R600SamplesItem === 'object' && 'fruitSize' in class1R600SamplesItem)
                        {
                            class1R600SamplesItemObject.fruitSize = (function(){
                                if(typeof class1R600SamplesItem.fruitSize !== 'string')
                                {
                                    return String(class1R600SamplesItem.fruitSize);
                                }
        
                                return class1R600SamplesItem.fruitSize;
                            }());
                        }
                        else
                        {
                            class1R600SamplesItemObject.fruitSize = "";
                        }
                        
                        if(typeof class1R600SamplesItem === 'object' && 'packType' in class1R600SamplesItem)
                        {
                            class1R600SamplesItemObject.packType = (function(){
                                if(typeof class1R600SamplesItem.packType !== 'string')
                                {
                                    return String(class1R600SamplesItem.packType);
                                }
        
                                return class1R600SamplesItem.packType;
                            }());
                        }
                        else
                        {
                            class1R600SamplesItemObject.packType = "";
                        }
                        
                        if(typeof class1R600SamplesItem === 'object' && 'timestamp' in class1R600SamplesItem)
                        {
                            class1R600SamplesItemObject.timestamp = (function(){
                                if(typeof class1R600SamplesItem.timestamp !== 'string')
                                {
                                    return new Date(String(class1R600SamplesItem.timestamp));
                                }
        
                                return new Date(class1R600SamplesItem.timestamp);
                            }());
                        }
                        else
                        {
                            class1R600SamplesItemObject.timestamp = new Date();
                        }
                        
                        if(typeof class1R600SamplesItem === 'object' && 'fruitCount' in class1R600SamplesItem)
                        {
                            class1R600SamplesItemObject.fruitCount = (function(){
                                if(typeof class1R600SamplesItem.fruitCount !== 'number')
                                {
                                    return Number.isInteger(Number(class1R600SamplesItem.fruitCount)) ? Number(class1R600SamplesItem.fruitCount) : Math.floor(Number(class1R600SamplesItem.fruitCount));
                                }
        
                                return Number.isInteger(class1R600SamplesItem.fruitCount) ? class1R600SamplesItem.fruitCount : Math.floor(class1R600SamplesItem.fruitCount);
                            }());
                        }
                        else
                        {
                            class1R600SamplesItemObject.fruitCount = 0;
                        }
                        
                        if(typeof class1R600SamplesItem === 'object' && 'defects' in class1R600SamplesItem)
                        {
                            class1R600SamplesItemObject.defects = (function(){
                                if(Array.isArray(class1R600SamplesItem.defects) !== true)
                                {
                                    return [];
                                }
        
                                return class1R600SamplesItem.defects.map((defectsItem) => {
                                    return (function(){
                                        let defectsItemObject = {};
                                        
                                        if(typeof defectsItem === 'object' && 'name' in defectsItem)
                                        {
                                            defectsItemObject.name = (function(){
                                                if(typeof defectsItem.name !== 'string')
                                                {
                                                    return String(defectsItem.name);
                                                }
        
                                                return defectsItem.name;
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.name = "";
                                        }
                                        
                                        if(typeof defectsItem === 'object' && 'group' in defectsItem)
                                        {
                                            defectsItemObject.group = (function(){
                                                if(typeof defectsItem.group !== 'string')
                                                {
                                                    return String(defectsItem.group);
                                                }
        
                                                return defectsItem.group;
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.group = "";
                                        }
                                        
                                        if(typeof defectsItem === 'object' && 'fruitCount' in defectsItem)
                                        {
                                            defectsItemObject.fruitCount = (function(){
                                                if(typeof defectsItem.fruitCount !== 'number')
                                                {
                                                    return Number.isInteger(Number(defectsItem.fruitCount)) ? Number(defectsItem.fruitCount) : Math.floor(Number(defectsItem.fruitCount));
                                                }
        
                                                return Number.isInteger(defectsItem.fruitCount) ? defectsItem.fruitCount : Math.floor(defectsItem.fruitCount);
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.fruitCount = 0;
                                        }
        
                                        return defectsItemObject;
                                    }());
                                });
                            }());
                        }
                        else
                        {
                            class1R600SamplesItemObject.defects = [];
                        }
        
                        return class1R600SamplesItemObject;
                    }());
                });
            }());
        }
        
        if('categorySummaries' in jsonObject)
        {
            model.categorySummaries = (function(){
                if(Array.isArray(jsonObject['categorySummaries']) !== true)
                {
                    return [];
                }
        
                return jsonObject['categorySummaries'].map((categorySummariesItem) => {
                    return (function(){
                        let categorySummariesItemObject = {};
                        
                        if(typeof categorySummariesItem === 'object' && 'name' in categorySummariesItem)
                        {
                            categorySummariesItemObject.name = (function(){
                                if(typeof categorySummariesItem.name !== 'string')
                                {
                                    return String(categorySummariesItem.name);
                                }
        
                                return categorySummariesItem.name;
                            }());
                        }
                        else
                        {
                            categorySummariesItemObject.name = "";
                        }
                        
                        if(typeof categorySummariesItem === 'object' && 'percentage' in categorySummariesItem)
                        {
                            categorySummariesItemObject.percentage = (function(){
                                if(typeof categorySummariesItem.percentage !== 'number')
                                {
                                    return Number(categorySummariesItem.percentage);
                                }
        
                                return categorySummariesItem.percentage;
                            }());
                        }
                        else
                        {
                            categorySummariesItemObject.percentage = 0;
                        }
                        
                        if(typeof categorySummariesItem === 'object' && 'defects' in categorySummariesItem)
                        {
                            categorySummariesItemObject.defects = (function(){
                                if(Array.isArray(categorySummariesItem.defects) !== true)
                                {
                                    return [];
                                }
        
                                return categorySummariesItem.defects.map((defectsItem) => {
                                    return (function(){
                                        let defectsItemObject = {};
                                        
                                        if(typeof defectsItem === 'object' && 'name' in defectsItem)
                                        {
                                            defectsItemObject.name = (function(){
                                                if(typeof defectsItem.name !== 'string')
                                                {
                                                    return String(defectsItem.name);
                                                }
        
                                                return defectsItem.name;
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.name = "";
                                        }
                                        
                                        if(typeof defectsItem === 'object' && 'fruitCount' in defectsItem)
                                        {
                                            defectsItemObject.fruitCount = (function(){
                                                if(typeof defectsItem.fruitCount !== 'number')
                                                {
                                                    return Number.isInteger(Number(defectsItem.fruitCount)) ? Number(defectsItem.fruitCount) : Math.floor(Number(defectsItem.fruitCount));
                                                }
        
                                                return Number.isInteger(defectsItem.fruitCount) ? defectsItem.fruitCount : Math.floor(defectsItem.fruitCount);
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.fruitCount = 0;
                                        }
                                        
                                        if(typeof defectsItem === 'object' && 'percentage' in defectsItem)
                                        {
                                            defectsItemObject.percentage = (function(){
                                                if(typeof defectsItem.percentage !== 'number')
                                                {
                                                    return Number(defectsItem.percentage);
                                                }
        
                                                return defectsItem.percentage;
                                            }());
                                        }
                                        else
                                        {
                                            defectsItemObject.percentage = 0;
                                        }
        
                                        return defectsItemObject;
                                    }());
                                });
                            }());
                        }
                        else
                        {
                            categorySummariesItemObject.defects = [];
                        }
        
                        return categorySummariesItemObject;
                    }());
                });
            }());
        }
        
        if('totalFruitSampled' in jsonObject)
        {
            model.totalFruitSampled = (function(){
                if(typeof jsonObject['totalFruitSampled'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalFruitSampled'])) ? Number(jsonObject['totalFruitSampled']) : Math.floor(Number(jsonObject['totalFruitSampled']));
                }
        
                return Number.isInteger(jsonObject['totalFruitSampled']) ? jsonObject['totalFruitSampled'] : Math.floor(jsonObject['totalFruitSampled']);
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

export default FreshQualityPackrunSummaryModel;