/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a MAF Sizer Packrun Summary
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class MAFSizerPackrunSummaryModel extends BaseModel
{
    /**
     * MAFSizerPackrunSummaryModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this MAF Sizer Packrun Summary
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The MAF Sizer Packrun Summary ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The MAF Sizer ID this Summary is associated with
         * 
         * @type {string}
         * @public
         */
        this.mafSizerId = "";
        
        /**
         * The Packrun ID this Summary is associated with
         * 
         * @type {string}
         * @public
         */
        this.packrunId = "";
        
        /**
         * When this Summary was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Time Batch this Summary is associated with
         * 
         * @type {?string}
         * @public
         */
        this.timeBatchId = null;
        
        /**
         * An Array of Packrun Summary Data Objects for each Class Type
         * 
         * @type {Array<{classType: string, totals: Array<{fruitSize: string, packType: ?string, weight: number, fruitCount: number, packCount: ?number}>}>}
         * @public
         */
        this.classTypeSummaries = [];
        
        /**
         * An Array of Packrun Summary Data Objects for each Outlet
         * 
         * @type {Array<{name: string, type: string, number: number, totals: Array<{classType: ?string, fruitSize: string, packType: ?string, weight: number, fruitCount: number, packCount: ?number}>}>}
         * @public
         */
        this.outletSummaries = [];
        
        /**
         * An Array that contains the Articles initially Assigned to each Outlet
         * 
         * @type {Array<{outletNumber: number, articleName: ?string}>}
         * @public
         */
        this.initialOutletArticles = [];
        
        /**
         * An Array that contains the Types initially configured for each Outlet
         * 
         * @type {Array<{outletNumber: number, type: string, typeId: ?string}>}
         * @public
         */
        this.initialOutletTypes = [];
        
        /**
         * Whether the MAF Sizer Packrun Summary has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the MAF Sizer Packrun Summary was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this MAF Sizer Packrun Summary
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **MAFSizerPackrunSummaryModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this MAF Sizer Packrun Summary
     * @return {MAFSizerPackrunSummaryModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new MAFSizerPackrunSummaryModel(siteId);
        
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
        
        if('mafSizerId' in jsonObject)
        {
            model.mafSizerId = (function(){
                if(typeof jsonObject['mafSizerId'] !== 'string')
                {
                    return String(jsonObject['mafSizerId']);
                }
        
                return jsonObject['mafSizerId'];
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
        
        if('classTypeSummaries' in jsonObject)
        {
            model.classTypeSummaries = (function(){
                if(Array.isArray(jsonObject['classTypeSummaries']) !== true)
                {
                    return [];
                }
        
                return jsonObject['classTypeSummaries'].map((classTypeSummariesItem) => {
                    return (function(){
                        let classTypeSummariesItemObject = {};
                        
                        if(typeof classTypeSummariesItem === 'object' && 'classType' in classTypeSummariesItem)
                        {
                            classTypeSummariesItemObject.classType = (function(){
                                if(typeof classTypeSummariesItem.classType !== 'string')
                                {
                                    return String(classTypeSummariesItem.classType);
                                }
        
                                return classTypeSummariesItem.classType;
                            }());
                        }
                        else
                        {
                            classTypeSummariesItemObject.classType = "";
                        }
                        
                        if(typeof classTypeSummariesItem === 'object' && 'totals' in classTypeSummariesItem)
                        {
                            classTypeSummariesItemObject.totals = (function(){
                                if(Array.isArray(classTypeSummariesItem.totals) !== true)
                                {
                                    return [];
                                }
        
                                return classTypeSummariesItem.totals.map((totalsItem) => {
                                    return (function(){
                                        let totalsItemObject = {};
                                        
                                        if(typeof totalsItem === 'object' && 'fruitSize' in totalsItem)
                                        {
                                            totalsItemObject.fruitSize = (function(){
                                                if(typeof totalsItem.fruitSize !== 'string')
                                                {
                                                    return String(totalsItem.fruitSize);
                                                }
        
                                                return totalsItem.fruitSize;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.fruitSize = "";
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'packType' in totalsItem)
                                        {
                                            totalsItemObject.packType = (function(){
                                                if(totalsItem.packType === null)
                                                {
                                                    return null;
                                                }
        
                                                if(typeof totalsItem.packType !== 'string')
                                                {
                                                    return String(totalsItem.packType);
                                                }
        
                                                return totalsItem.packType;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.packType = null;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'weight' in totalsItem)
                                        {
                                            totalsItemObject.weight = (function(){
                                                if(typeof totalsItem.weight !== 'number')
                                                {
                                                    return Number(totalsItem.weight);
                                                }
        
                                                return totalsItem.weight;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.weight = 0;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'fruitCount' in totalsItem)
                                        {
                                            totalsItemObject.fruitCount = (function(){
                                                if(typeof totalsItem.fruitCount !== 'number')
                                                {
                                                    return Number.isInteger(Number(totalsItem.fruitCount)) ? Number(totalsItem.fruitCount) : Math.floor(Number(totalsItem.fruitCount));
                                                }
        
                                                return Number.isInteger(totalsItem.fruitCount) ? totalsItem.fruitCount : Math.floor(totalsItem.fruitCount);
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.fruitCount = 0;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'packCount' in totalsItem)
                                        {
                                            totalsItemObject.packCount = (function(){
                                                if(totalsItem.packCount === null)
                                                {
                                                    return null;
                                                }
        
                                                if(typeof totalsItem.packCount !== 'number')
                                                {
                                                    return Number(totalsItem.packCount);
                                                }
        
                                                return totalsItem.packCount;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.packCount = null;
                                        }
        
                                        return totalsItemObject;
                                    }());
                                });
                            }());
                        }
                        else
                        {
                            classTypeSummariesItemObject.totals = [];
                        }
        
                        return classTypeSummariesItemObject;
                    }());
                });
            }());
        }
        
        if('outletSummaries' in jsonObject)
        {
            model.outletSummaries = (function(){
                if(Array.isArray(jsonObject['outletSummaries']) !== true)
                {
                    return [];
                }
        
                return jsonObject['outletSummaries'].map((outletSummariesItem) => {
                    return (function(){
                        let outletSummariesItemObject = {};
                        
                        if(typeof outletSummariesItem === 'object' && 'name' in outletSummariesItem)
                        {
                            outletSummariesItemObject.name = (function(){
                                if(typeof outletSummariesItem.name !== 'string')
                                {
                                    return String(outletSummariesItem.name);
                                }
        
                                return outletSummariesItem.name;
                            }());
                        }
                        else
                        {
                            outletSummariesItemObject.name = "";
                        }
                        
                        if(typeof outletSummariesItem === 'object' && 'type' in outletSummariesItem)
                        {
                            outletSummariesItemObject.type = (function(){
                                if(typeof outletSummariesItem.type !== 'string')
                                {
                                    return String(outletSummariesItem.type);
                                }
        
                                return outletSummariesItem.type;
                            }());
                        }
                        else
                        {
                            outletSummariesItemObject.type = "";
                        }
                        
                        if(typeof outletSummariesItem === 'object' && 'number' in outletSummariesItem)
                        {
                            outletSummariesItemObject.number = (function(){
                                if(typeof outletSummariesItem.number !== 'number')
                                {
                                    return Number.isInteger(Number(outletSummariesItem.number)) ? Number(outletSummariesItem.number) : Math.floor(Number(outletSummariesItem.number));
                                }
        
                                return Number.isInteger(outletSummariesItem.number) ? outletSummariesItem.number : Math.floor(outletSummariesItem.number);
                            }());
                        }
                        else
                        {
                            outletSummariesItemObject.number = 0;
                        }
                        
                        if(typeof outletSummariesItem === 'object' && 'totals' in outletSummariesItem)
                        {
                            outletSummariesItemObject.totals = (function(){
                                if(Array.isArray(outletSummariesItem.totals) !== true)
                                {
                                    return [];
                                }
        
                                return outletSummariesItem.totals.map((totalsItem) => {
                                    return (function(){
                                        let totalsItemObject = {};
                                        
                                        if(typeof totalsItem === 'object' && 'classType' in totalsItem)
                                        {
                                            totalsItemObject.classType = (function(){
                                                if(totalsItem.classType === null)
                                                {
                                                    return null;
                                                }
        
                                                if(typeof totalsItem.classType !== 'string')
                                                {
                                                    return String(totalsItem.classType);
                                                }
        
                                                return totalsItem.classType;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.classType = null;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'fruitSize' in totalsItem)
                                        {
                                            totalsItemObject.fruitSize = (function(){
                                                if(typeof totalsItem.fruitSize !== 'string')
                                                {
                                                    return String(totalsItem.fruitSize);
                                                }
        
                                                return totalsItem.fruitSize;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.fruitSize = "";
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'packType' in totalsItem)
                                        {
                                            totalsItemObject.packType = (function(){
                                                if(totalsItem.packType === null)
                                                {
                                                    return null;
                                                }
        
                                                if(typeof totalsItem.packType !== 'string')
                                                {
                                                    return String(totalsItem.packType);
                                                }
        
                                                return totalsItem.packType;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.packType = null;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'weight' in totalsItem)
                                        {
                                            totalsItemObject.weight = (function(){
                                                if(typeof totalsItem.weight !== 'number')
                                                {
                                                    return Number(totalsItem.weight);
                                                }
        
                                                return totalsItem.weight;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.weight = 0;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'fruitCount' in totalsItem)
                                        {
                                            totalsItemObject.fruitCount = (function(){
                                                if(typeof totalsItem.fruitCount !== 'number')
                                                {
                                                    return Number.isInteger(Number(totalsItem.fruitCount)) ? Number(totalsItem.fruitCount) : Math.floor(Number(totalsItem.fruitCount));
                                                }
        
                                                return Number.isInteger(totalsItem.fruitCount) ? totalsItem.fruitCount : Math.floor(totalsItem.fruitCount);
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.fruitCount = 0;
                                        }
                                        
                                        if(typeof totalsItem === 'object' && 'packCount' in totalsItem)
                                        {
                                            totalsItemObject.packCount = (function(){
                                                if(totalsItem.packCount === null)
                                                {
                                                    return null;
                                                }
        
                                                if(typeof totalsItem.packCount !== 'number')
                                                {
                                                    return Number(totalsItem.packCount);
                                                }
        
                                                return totalsItem.packCount;
                                            }());
                                        }
                                        else
                                        {
                                            totalsItemObject.packCount = null;
                                        }
        
                                        return totalsItemObject;
                                    }());
                                });
                            }());
                        }
                        else
                        {
                            outletSummariesItemObject.totals = [];
                        }
        
                        return outletSummariesItemObject;
                    }());
                });
            }());
        }
        
        if('initialOutletArticles' in jsonObject)
        {
            model.initialOutletArticles = (function(){
                if(Array.isArray(jsonObject['initialOutletArticles']) !== true)
                {
                    return [];
                }
        
                return jsonObject['initialOutletArticles'].map((initialOutletArticlesItem) => {
                    return (function(){
                        let initialOutletArticlesItemObject = {};
                        
                        if(typeof initialOutletArticlesItem === 'object' && 'outletNumber' in initialOutletArticlesItem)
                        {
                            initialOutletArticlesItemObject.outletNumber = (function(){
                                if(typeof initialOutletArticlesItem.outletNumber !== 'number')
                                {
                                    return Number.isInteger(Number(initialOutletArticlesItem.outletNumber)) ? Number(initialOutletArticlesItem.outletNumber) : Math.floor(Number(initialOutletArticlesItem.outletNumber));
                                }
        
                                return Number.isInteger(initialOutletArticlesItem.outletNumber) ? initialOutletArticlesItem.outletNumber : Math.floor(initialOutletArticlesItem.outletNumber);
                            }());
                        }
                        else
                        {
                            initialOutletArticlesItemObject.outletNumber = 0;
                        }
                        
                        if(typeof initialOutletArticlesItem === 'object' && 'articleName' in initialOutletArticlesItem)
                        {
                            initialOutletArticlesItemObject.articleName = (function(){
                                if(initialOutletArticlesItem.articleName === null)
                                {
                                    return null;
                                }
        
                                if(typeof initialOutletArticlesItem.articleName !== 'string')
                                {
                                    return String(initialOutletArticlesItem.articleName);
                                }
        
                                return initialOutletArticlesItem.articleName;
                            }());
                        }
                        else
                        {
                            initialOutletArticlesItemObject.articleName = null;
                        }
        
                        return initialOutletArticlesItemObject;
                    }());
                });
            }());
        }
        
        if('initialOutletTypes' in jsonObject)
        {
            model.initialOutletTypes = (function(){
                if(Array.isArray(jsonObject['initialOutletTypes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['initialOutletTypes'].map((initialOutletTypesItem) => {
                    return (function(){
                        let initialOutletTypesItemObject = {};
                        
                        if(typeof initialOutletTypesItem === 'object' && 'outletNumber' in initialOutletTypesItem)
                        {
                            initialOutletTypesItemObject.outletNumber = (function(){
                                if(typeof initialOutletTypesItem.outletNumber !== 'number')
                                {
                                    return Number.isInteger(Number(initialOutletTypesItem.outletNumber)) ? Number(initialOutletTypesItem.outletNumber) : Math.floor(Number(initialOutletTypesItem.outletNumber));
                                }
        
                                return Number.isInteger(initialOutletTypesItem.outletNumber) ? initialOutletTypesItem.outletNumber : Math.floor(initialOutletTypesItem.outletNumber);
                            }());
                        }
                        else
                        {
                            initialOutletTypesItemObject.outletNumber = 0;
                        }
                        
                        if(typeof initialOutletTypesItem === 'object' && 'type' in initialOutletTypesItem)
                        {
                            initialOutletTypesItemObject.type = (function(){
                                if(typeof initialOutletTypesItem.type !== 'string')
                                {
                                    return String(initialOutletTypesItem.type);
                                }
        
                                return initialOutletTypesItem.type;
                            }());
                        }
                        else
                        {
                            initialOutletTypesItemObject.type = "";
                        }
                        
                        if(typeof initialOutletTypesItem === 'object' && 'typeId' in initialOutletTypesItem)
                        {
                            initialOutletTypesItemObject.typeId = (function(){
                                if(initialOutletTypesItem.typeId === null)
                                {
                                    return null;
                                }
        
                                if(typeof initialOutletTypesItem.typeId !== 'string')
                                {
                                    return String(initialOutletTypesItem.typeId);
                                }
        
                                return initialOutletTypesItem.typeId;
                            }());
                        }
                        else
                        {
                            initialOutletTypesItemObject.typeId = null;
                        }
        
                        return initialOutletTypesItemObject;
                    }());
                });
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

export default MAFSizerPackrunSummaryModel;