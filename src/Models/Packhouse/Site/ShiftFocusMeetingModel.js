/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Shift Focus Meeting
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class ShiftFocusMeetingModel extends BaseModel
{
    /**
     * ShiftFocusMeetingModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Shift Focus Meeting
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Shift Focus Meeting ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Packing Line ID this Focus Meeting is associated with
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = undefined;
        
        /**
         * The Shift ID this Focus Meeting is asssociated with
         * 
         * @type {string}
         * @public
         */
        this.shiftId = undefined;
        
        /**
         * When this Focus Meeting was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = undefined;
        
        /**
         * When this Focus Meeting is Scheduled to Begin
         * 
         * @type {Date}
         * @public
         */
        this.scheduledTimestamp = undefined;
        
        /**
         * When this Focus Meeting was Started
         * 
         * @type {?Date}
         * @public
         */
        this.startTimestamp = undefined;
        
        /**
         * When this Focus Meeting was Completed
         * 
         * @type {?Date}
         * @public
         */
        this.finishTimestamp = undefined;
        
        /**
         * An Optional Key Focus until the Next Meeting
         * 
         * @type {?string}
         * @public
         */
        this.nextKeyFocus = undefined;
        
        /**
         * An Optional Rating between 1 and 10 on how Successful the Focus Meeting was
         * 
         * @type {?number}
         * @public
         */
        this.successRating = undefined;
        
        /**
         * The Status of this Focus Meeting
         * 
         * @type {string}
         * @public
         */
        this.status = undefined;
        
        /**
         * Whether the Shift Focus Meeting has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Shift Focus Meeting was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Shift Focus Meeting
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **ShiftFocusMeetingModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Shift Focus Meeting
     * @return {ShiftFocusMeetingModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new ShiftFocusMeetingModel(siteId);
        
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
        
        if('scheduledTimestamp' in jsonObject)
        {
            model.scheduledTimestamp = (function(){
                if(typeof jsonObject['scheduledTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['scheduledTimestamp']));
                }
        
                return new Date(jsonObject['scheduledTimestamp']);
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
        
        if('nextKeyFocus' in jsonObject)
        {
            model.nextKeyFocus = (function(){
                if(jsonObject['nextKeyFocus'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['nextKeyFocus'] !== 'string')
                {
                    return String(jsonObject['nextKeyFocus']);
                }
        
                return jsonObject['nextKeyFocus'];
            }());
        }
        
        if('successRating' in jsonObject)
        {
            model.successRating = (function(){
                if(jsonObject['successRating'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['successRating'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['successRating'])) ? Number(jsonObject['successRating']) : Math.floor(Number(jsonObject['successRating']));
                }
        
                return Number.isInteger(jsonObject['successRating']) ? jsonObject['successRating'] : Math.floor(jsonObject['successRating']);
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

export default ShiftFocusMeetingModel;