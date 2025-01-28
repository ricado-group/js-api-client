/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Shift
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class ShiftModel extends BaseModel
{
    /**
     * ShiftModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Shift
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Shift ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Packing Line ID this Shift is associated with
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = "";
        
        /**
         * When this Shift was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Type of Shift
         * 
         * @type {string}
         * @public
         */
        this.type = "";
        
        /**
         * The Name of the Line Manager for this Shift
         * 
         * @type {?string}
         * @public
         */
        this.lineManagerName = null;
        
        /**
         * The Target Number of Bins to Tip for this Shift
         * 
         * @type {?number}
         * @public
         */
        this.binsTippedTarget = null;
        
        /**
         * *DEPRECATED* The Initial Number of People working in all Areas except Class 2 for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.initialClass1Manning = null;
        
        /**
         * *DEPRECATED* The Initial Number of People working in the Class 2 Area for this Hour
         * 
         * @type {?number}
         * @public
         */
        this.initialClass2Manning = null;
        
        /**
         * When this Shift was Ready for Packing
         * 
         * @type {?Date}
         * @public
         */
        this.readyTimestamp = null;
        
        /**
         * When this Shift was Started
         * 
         * @type {?Date}
         * @public
         */
        this.startTimestamp = null;
        
        /**
         * When this Shift was Finished
         * 
         * @type {?Date}
         * @public
         */
        this.finishTimestamp = null;
        
        /**
         * When this Shift was Published
         * 
         * @type {?Date}
         * @public
         */
        this.publishTimestamp = null;
        
        /**
         * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Shift
         * 
         * @type {?number}
         * @public
         */
        this.satisfactionRating = null;
        
        /**
         * An Optional Key Celebration the Line Manager and Team experienced during this Shift
         * 
         * @type {?string}
         * @public
         */
        this.keyCelebration = null;
        
        /**
         * An Optional Key Challenge the Line Manager and Team experienced during this Shift
         * 
         * @type {?string}
         * @public
         */
        this.keyChallenge = null;
        
        /**
         * *DEPRECATED* An Optional Array of Handover Notes for this Shift
         * 
         * @type {Array<{area: string, noteContent: string}>}
         * @public
         */
        this.handoverNotes = [];
        
        /**
         * An Optional Array of Notes for this Shift
         * 
         * @type {Array<{area: string, timestamp: Date, content: string}>}
         * @public
         */
        this.areaNotes = [];
        
        /**
         * The Schedule for this Shift
         * 
         * @type {{startTime: string, endTime: string, breaks: Array<{startTime: string, endTime: string}>}}
         * @public
         */
        this.schedule = (function(){
            let scheduleDefaultValue = {};
            
            scheduleDefaultValue.startTime = "";
            
            scheduleDefaultValue.endTime = "";
            
            scheduleDefaultValue.breaks = [];
            
            return scheduleDefaultValue;
        }());
        
        /**
         * The Score Weightings used for this Shift. Represented as a Number between 0.0 and 1.0
         * 
         * @type {?{class1TraysPerHour: number, costPerTray: number, qualityR600Ideal: number, customQualities: Array<{id: string, weighting: number}>}}
         * @public
         */
        this.scoreWeightings = null;
        
        /**
         * The Status of this Shift
         * 
         * @type {string}
         * @public
         */
        this.status = "";
        
        /**
         * Whether the Shift has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Shift was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Shift
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **ShiftModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Shift
     * @return {ShiftModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new ShiftModel(siteId);
        
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
        
        if('type' in jsonObject)
        {
            model.type = (function(){
                if(typeof jsonObject['type'] !== 'string')
                {
                    return String(jsonObject['type']);
                }
        
                return jsonObject['type'];
            }());
        }
        
        if('lineManagerName' in jsonObject)
        {
            model.lineManagerName = (function(){
                if(jsonObject['lineManagerName'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['lineManagerName'] !== 'string')
                {
                    return String(jsonObject['lineManagerName']);
                }
        
                return jsonObject['lineManagerName'];
            }());
        }
        
        if('binsTippedTarget' in jsonObject)
        {
            model.binsTippedTarget = (function(){
                if(jsonObject['binsTippedTarget'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['binsTippedTarget'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['binsTippedTarget'])) ? Number(jsonObject['binsTippedTarget']) : Math.floor(Number(jsonObject['binsTippedTarget']));
                }
        
                return Number.isInteger(jsonObject['binsTippedTarget']) ? jsonObject['binsTippedTarget'] : Math.floor(jsonObject['binsTippedTarget']);
            }());
        }
        
        if('initialClass1Manning' in jsonObject)
        {
            model.initialClass1Manning = (function(){
                if(jsonObject['initialClass1Manning'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['initialClass1Manning'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['initialClass1Manning'])) ? Number(jsonObject['initialClass1Manning']) : Math.floor(Number(jsonObject['initialClass1Manning']));
                }
        
                return Number.isInteger(jsonObject['initialClass1Manning']) ? jsonObject['initialClass1Manning'] : Math.floor(jsonObject['initialClass1Manning']);
            }());
        }
        
        if('initialClass2Manning' in jsonObject)
        {
            model.initialClass2Manning = (function(){
                if(jsonObject['initialClass2Manning'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['initialClass2Manning'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['initialClass2Manning'])) ? Number(jsonObject['initialClass2Manning']) : Math.floor(Number(jsonObject['initialClass2Manning']));
                }
        
                return Number.isInteger(jsonObject['initialClass2Manning']) ? jsonObject['initialClass2Manning'] : Math.floor(jsonObject['initialClass2Manning']);
            }());
        }
        
        if('readyTimestamp' in jsonObject)
        {
            model.readyTimestamp = (function(){
                if(jsonObject['readyTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['readyTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['readyTimestamp']));
                }
        
                return new Date(jsonObject['readyTimestamp']);
            }());
        }
        
        if('startTimestamp' in jsonObject)
        {
            model.startTimestamp = (function(){
                if(jsonObject['startTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['startTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['startTimestamp']));
                }
        
                return new Date(jsonObject['startTimestamp']);
            }());
        }
        
        if('finishTimestamp' in jsonObject)
        {
            model.finishTimestamp = (function(){
                if(jsonObject['finishTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['finishTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['finishTimestamp']));
                }
        
                return new Date(jsonObject['finishTimestamp']);
            }());
        }
        
        if('publishTimestamp' in jsonObject)
        {
            model.publishTimestamp = (function(){
                if(jsonObject['publishTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['publishTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['publishTimestamp']));
                }
        
                return new Date(jsonObject['publishTimestamp']);
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
        
        if('keyCelebration' in jsonObject)
        {
            model.keyCelebration = (function(){
                if(jsonObject['keyCelebration'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['keyCelebration'] !== 'string')
                {
                    return String(jsonObject['keyCelebration']);
                }
        
                return jsonObject['keyCelebration'];
            }());
        }
        
        if('keyChallenge' in jsonObject)
        {
            model.keyChallenge = (function(){
                if(jsonObject['keyChallenge'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['keyChallenge'] !== 'string')
                {
                    return String(jsonObject['keyChallenge']);
                }
        
                return jsonObject['keyChallenge'];
            }());
        }
        
        if('handoverNotes' in jsonObject)
        {
            model.handoverNotes = (function(){
                if(Array.isArray(jsonObject['handoverNotes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['handoverNotes'].map((handoverNotesItem) => {
                    return (function(){
                        let handoverNotesItemObject = {};
                        
                        if(typeof handoverNotesItem === 'object' && 'area' in handoverNotesItem)
                        {
                            handoverNotesItemObject.area = (function(){
                                if(typeof handoverNotesItem.area !== 'string')
                                {
                                    return String(handoverNotesItem.area);
                                }
        
                                return handoverNotesItem.area;
                            }());
                        }
                        else
                        {
                            handoverNotesItemObject.area = "";
                        }
                        
                        if(typeof handoverNotesItem === 'object' && 'noteContent' in handoverNotesItem)
                        {
                            handoverNotesItemObject.noteContent = (function(){
                                if(typeof handoverNotesItem.noteContent !== 'string')
                                {
                                    return String(handoverNotesItem.noteContent);
                                }
        
                                return handoverNotesItem.noteContent;
                            }());
                        }
                        else
                        {
                            handoverNotesItemObject.noteContent = "";
                        }
        
                        return handoverNotesItemObject;
                    }());
                });
            }());
        }
        
        if('areaNotes' in jsonObject)
        {
            model.areaNotes = (function(){
                if(Array.isArray(jsonObject['areaNotes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['areaNotes'].map((areaNotesItem) => {
                    return (function(){
                        let areaNotesItemObject = {};
                        
                        if(typeof areaNotesItem === 'object' && 'area' in areaNotesItem)
                        {
                            areaNotesItemObject.area = (function(){
                                if(typeof areaNotesItem.area !== 'string')
                                {
                                    return String(areaNotesItem.area);
                                }
        
                                return areaNotesItem.area;
                            }());
                        }
                        else
                        {
                            areaNotesItemObject.area = "";
                        }
                        
                        if(typeof areaNotesItem === 'object' && 'timestamp' in areaNotesItem)
                        {
                            areaNotesItemObject.timestamp = (function(){
                                if(typeof areaNotesItem.timestamp !== 'string')
                                {
                                    return new Date(String(areaNotesItem.timestamp));
                                }
        
                                return new Date(areaNotesItem.timestamp);
                            }());
                        }
                        else
                        {
                            areaNotesItemObject.timestamp = new Date();
                        }
                        
                        if(typeof areaNotesItem === 'object' && 'content' in areaNotesItem)
                        {
                            areaNotesItemObject.content = (function(){
                                if(typeof areaNotesItem.content !== 'string')
                                {
                                    return String(areaNotesItem.content);
                                }
        
                                return areaNotesItem.content;
                            }());
                        }
                        else
                        {
                            areaNotesItemObject.content = "";
                        }
        
                        return areaNotesItemObject;
                    }());
                });
            }());
        }
        
        if('schedule' in jsonObject)
        {
            model.schedule = (function(){
                let scheduleObject = {};
                
                if(typeof jsonObject['schedule'] === 'object' && 'startTime' in jsonObject['schedule'])
                {
                    scheduleObject.startTime = (function(){
                        if(typeof jsonObject['schedule'].startTime !== 'string')
                        {
                            return String(jsonObject['schedule'].startTime);
                        }
        
                        return jsonObject['schedule'].startTime;
                    }());
                }
                else
                {
                    scheduleObject.startTime = "";
                }
                
                if(typeof jsonObject['schedule'] === 'object' && 'endTime' in jsonObject['schedule'])
                {
                    scheduleObject.endTime = (function(){
                        if(typeof jsonObject['schedule'].endTime !== 'string')
                        {
                            return String(jsonObject['schedule'].endTime);
                        }
        
                        return jsonObject['schedule'].endTime;
                    }());
                }
                else
                {
                    scheduleObject.endTime = "";
                }
                
                if(typeof jsonObject['schedule'] === 'object' && 'breaks' in jsonObject['schedule'])
                {
                    scheduleObject.breaks = (function(){
                        if(Array.isArray(jsonObject['schedule'].breaks) !== true)
                        {
                            return [];
                        }
        
                        return jsonObject['schedule'].breaks.map((breaksItem) => {
                            return (function(){
                                let breaksItemObject = {};
                                
                                if(typeof breaksItem === 'object' && 'startTime' in breaksItem)
                                {
                                    breaksItemObject.startTime = (function(){
                                        if(typeof breaksItem.startTime !== 'string')
                                        {
                                            return String(breaksItem.startTime);
                                        }
        
                                        return breaksItem.startTime;
                                    }());
                                }
                                else
                                {
                                    breaksItemObject.startTime = "";
                                }
                                
                                if(typeof breaksItem === 'object' && 'endTime' in breaksItem)
                                {
                                    breaksItemObject.endTime = (function(){
                                        if(typeof breaksItem.endTime !== 'string')
                                        {
                                            return String(breaksItem.endTime);
                                        }
        
                                        return breaksItem.endTime;
                                    }());
                                }
                                else
                                {
                                    breaksItemObject.endTime = "";
                                }
        
                                return breaksItemObject;
                            }());
                        });
                    }());
                }
                else
                {
                    scheduleObject.breaks = [];
                }
        
                return scheduleObject;
            }());
        }
        
        if('scoreWeightings' in jsonObject)
        {
            model.scoreWeightings = (function(){
                if(jsonObject['scoreWeightings'] === null)
                {
                    return null;
                }
        
                let scoreWeightingsObject = {};
                
                if(typeof jsonObject['scoreWeightings'] === 'object' && 'class1TraysPerHour' in jsonObject['scoreWeightings'])
                {
                    scoreWeightingsObject.class1TraysPerHour = (function(){
                        if(typeof jsonObject['scoreWeightings'].class1TraysPerHour !== 'number')
                        {
                            return Number(jsonObject['scoreWeightings'].class1TraysPerHour);
                        }
        
                        return jsonObject['scoreWeightings'].class1TraysPerHour;
                    }());
                }
                else
                {
                    scoreWeightingsObject.class1TraysPerHour = 0;
                }
                
                if(typeof jsonObject['scoreWeightings'] === 'object' && 'costPerTray' in jsonObject['scoreWeightings'])
                {
                    scoreWeightingsObject.costPerTray = (function(){
                        if(typeof jsonObject['scoreWeightings'].costPerTray !== 'number')
                        {
                            return Number(jsonObject['scoreWeightings'].costPerTray);
                        }
        
                        return jsonObject['scoreWeightings'].costPerTray;
                    }());
                }
                else
                {
                    scoreWeightingsObject.costPerTray = 0;
                }
                
                if(typeof jsonObject['scoreWeightings'] === 'object' && 'qualityR600Ideal' in jsonObject['scoreWeightings'])
                {
                    scoreWeightingsObject.qualityR600Ideal = (function(){
                        if(typeof jsonObject['scoreWeightings'].qualityR600Ideal !== 'number')
                        {
                            return Number(jsonObject['scoreWeightings'].qualityR600Ideal);
                        }
        
                        return jsonObject['scoreWeightings'].qualityR600Ideal;
                    }());
                }
                else
                {
                    scoreWeightingsObject.qualityR600Ideal = 0;
                }
                
                if(typeof jsonObject['scoreWeightings'] === 'object' && 'customQualities' in jsonObject['scoreWeightings'])
                {
                    scoreWeightingsObject.customQualities = (function(){
                        if(Array.isArray(jsonObject['scoreWeightings'].customQualities) !== true)
                        {
                            return [];
                        }
        
                        return jsonObject['scoreWeightings'].customQualities.map((customQualitiesItem) => {
                            return (function(){
                                let customQualitiesItemObject = {};
                                
                                if(typeof customQualitiesItem === 'object' && 'id' in customQualitiesItem)
                                {
                                    customQualitiesItemObject.id = (function(){
                                        if(typeof customQualitiesItem.id !== 'string')
                                        {
                                            return String(customQualitiesItem.id);
                                        }
        
                                        return customQualitiesItem.id;
                                    }());
                                }
                                else
                                {
                                    customQualitiesItemObject.id = "";
                                }
                                
                                if(typeof customQualitiesItem === 'object' && 'weighting' in customQualitiesItem)
                                {
                                    customQualitiesItemObject.weighting = (function(){
                                        if(typeof customQualitiesItem.weighting !== 'number')
                                        {
                                            return Number(customQualitiesItem.weighting);
                                        }
        
                                        return customQualitiesItem.weighting;
                                    }());
                                }
                                else
                                {
                                    customQualitiesItemObject.weighting = 0;
                                }
        
                                return customQualitiesItemObject;
                            }());
                        });
                    }());
                }
                else
                {
                    scoreWeightingsObject.customQualities = [];
                }
        
                return scoreWeightingsObject;
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

export default ShiftModel;