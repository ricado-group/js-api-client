/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Shift
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class ShiftModel extends BaseSiteModel
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
         * @private
         */
        this._id = undefined;
        
        /**
         * The Packing Line ID this Shift is associated with
         * 
         * @type {string}
         * @private
         */
        this._packingLineId = undefined;
        
        /**
         * When this Shift was Created
         * 
         * @type {Date}
         * @private
         */
        this._createdTimestamp = undefined;
        
        /**
         * The Type of Shift
         * 
         * @type {string}
         * @private
         */
        this._type = undefined;
        
        /**
         * The Name of the Line Manager for this Shift
         * 
         * @type {?string}
         * @private
         */
        this._lineManagerName = undefined;
        
        /**
         * The Target Number of Bins to Tip for this Shift
         * 
         * @type {?number}
         * @private
         */
        this._binsTippedTarget = undefined;
        
        /**
         * *DEPRECATED* The Initial Number of People working in all Areas except Class 2 for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._initialClass1Manning = undefined;
        
        /**
         * *DEPRECATED* The Initial Number of People working in the Class 2 Area for this Hour
         * 
         * @type {?number}
         * @private
         */
        this._initialClass2Manning = undefined;
        
        /**
         * When this Shift was Ready for Packing
         * 
         * @type {?Date}
         * @private
         */
        this._readyTimestamp = undefined;
        
        /**
         * When this Shift was Started
         * 
         * @type {?Date}
         * @private
         */
        this._startTimestamp = undefined;
        
        /**
         * When this Shift was Finished
         * 
         * @type {?Date}
         * @private
         */
        this._finishTimestamp = undefined;
        
        /**
         * When this Shift was Published
         * 
         * @type {?Date}
         * @private
         */
        this._publishTimestamp = undefined;
        
        /**
         * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Shift
         * 
         * @type {?number}
         * @private
         */
        this._satisfactionRating = undefined;
        
        /**
         * *DEPRECATED* An Optional Array of Handover Notes for this Shift
         * 
         * @type {Array<{area: string, noteContent: string}>}
         * @private
         */
        this._handoverNotes = undefined;
        
        /**
         * An Optional Array of Notes for this Shift
         * 
         * @type {Array<{area: string, timestamp: Date, content: string}>}
         * @private
         */
        this._areaNotes = undefined;
        
        /**
         * The Schedule for this Shift
         * 
         * @type {{startTime: string, endTime: string, breaks: Array<{startTime: string, endTime: string}>}}
         * @private
         */
        this._schedule = undefined;
        
        /**
         * The Status of this Shift
         * 
         * @type {string}
         * @private
         */
        this._status = undefined;
        
        /**
         * Whether the Shift has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Shift was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Shift
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Shift ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Packing Line ID this Shift is associated with
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._packingLineId;
    }

    /**
     * When this Shift was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._createdTimestamp;
    }

    /**
     * The Type of Shift
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._type;
    }

    /**
     * The Name of the Line Manager for this Shift
     * 
     * @public
     * @type {?string}
     */
    get lineManagerName()
    {
        return this._lineManagerName;
    }

    /**
     * The Target Number of Bins to Tip for this Shift
     * 
     * @public
     * @type {?number}
     */
    get binsTippedTarget()
    {
        return this._binsTippedTarget;
    }

    /**
     * *DEPRECATED* The Initial Number of People working in all Areas except Class 2 for this Hour
     * 
     * @public
     * @type {?number}
     */
    get initialClass1Manning()
    {
        return this._initialClass1Manning;
    }

    /**
     * *DEPRECATED* The Initial Number of People working in the Class 2 Area for this Hour
     * 
     * @public
     * @type {?number}
     */
    get initialClass2Manning()
    {
        return this._initialClass2Manning;
    }

    /**
     * When this Shift was Ready for Packing
     * 
     * @public
     * @type {?Date}
     */
    get readyTimestamp()
    {
        return this._readyTimestamp;
    }

    /**
     * When this Shift was Started
     * 
     * @public
     * @type {?Date}
     */
    get startTimestamp()
    {
        return this._startTimestamp;
    }

    /**
     * When this Shift was Finished
     * 
     * @public
     * @type {?Date}
     */
    get finishTimestamp()
    {
        return this._finishTimestamp;
    }

    /**
     * When this Shift was Published
     * 
     * @public
     * @type {?Date}
     */
    get publishTimestamp()
    {
        return this._publishTimestamp;
    }

    /**
     * An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Shift
     * 
     * @public
     * @type {?number}
     */
    get satisfactionRating()
    {
        return this._satisfactionRating;
    }

    /**
     * *DEPRECATED* An Optional Array of Handover Notes for this Shift
     * 
     * @public
     * @type {Array<{area: string, noteContent: string}>}
     */
    get handoverNotes()
    {
        return this._handoverNotes;
    }

    /**
     * An Optional Array of Notes for this Shift
     * 
     * @public
     * @type {Array<{area: string, timestamp: Date, content: string}>}
     */
    get areaNotes()
    {
        return this._areaNotes;
    }

    /**
     * The Schedule for this Shift
     * 
     * @public
     * @type {{startTime: string, endTime: string, breaks: Array<{startTime: string, endTime: string}>}}
     */
    get schedule()
    {
        return this._schedule;
    }

    /**
     * The Status of this Shift
     * 
     * @public
     * @type {string}
     */
    get status()
    {
        return this._status;
    }

    /**
     * Whether the Shift has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Shift was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Shift
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **ShiftModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            packingLineId: this._packingLineId,
            createdTimestamp: this._createdTimestamp,
            type: this._type,
            lineManagerName: this._lineManagerName,
            binsTippedTarget: this._binsTippedTarget,
            initialClass1Manning: this._initialClass1Manning,
            initialClass2Manning: this._initialClass2Manning,
            readyTimestamp: this._readyTimestamp,
            startTimestamp: this._startTimestamp,
            finishTimestamp: this._finishTimestamp,
            publishTimestamp: this._publishTimestamp,
            satisfactionRating: this._satisfactionRating,
            handoverNotes: this._handoverNotes,
            areaNotes: this._areaNotes,
            schedule: this._schedule,
            status: this._status,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
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
        
        if('type' in jsonObject)
        {
            model._type = (function(){
                if(typeof jsonObject['type'] !== 'string')
                {
                    return String(jsonObject['type']);
                }
        
                return jsonObject['type'];
            }());
        }
        
        if('lineManagerName' in jsonObject)
        {
            model._lineManagerName = (function(){
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
            model._binsTippedTarget = (function(){
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
            model._initialClass1Manning = (function(){
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
            model._initialClass2Manning = (function(){
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
            model._readyTimestamp = (function(){
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
            model._startTimestamp = (function(){
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
            model._finishTimestamp = (function(){
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
            model._publishTimestamp = (function(){
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
        
        if('handoverNotes' in jsonObject)
        {
            model._handoverNotes = (function(){
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
            model._areaNotes = (function(){
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
            model._schedule = (function(){
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

export default ShiftModel;