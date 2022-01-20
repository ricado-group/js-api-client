/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Downtime Event
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class DowntimeEventModel extends BaseModel
{
    /**
     * DowntimeEventModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Downtime Event
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Downtime Event ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Packing Line ID this Downtime Event is associated with
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = undefined;
        
        /**
         * The Shift ID this Downtime Event is asssociated with
         * 
         * @type {string}
         * @public
         */
        this.shiftId = undefined;
        
        /**
         * When this Downtime Event was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = undefined;
        
        /**
         * When this Downtime Event Started
         * 
         * @type {Date}
         * @public
         */
        this.startTimestamp = undefined;
        
        /**
         * When this Downtime Event Ended
         * 
         * @type {?Date}
         * @public
         */
        this.endTimestamp = undefined;
        
        /**
         * The Reason Category for this Downtime Event
         * 
         * @type {?string}
         * @public
         */
        this.reasonCategory = undefined;
        
        /**
         * The Reason Tag for this Downtime Event
         * 
         * @type {?string}
         * @public
         */
        this.reasonTag = undefined;
        
        /**
         * An Optional Summary of the Action taken to Remedy this Downtime Event
         * 
         * @type {?string}
         * @public
         */
        this.remedyAction = undefined;
        
        /**
         * An Optional Rating between 1 and 10 on how likely this Downtime Event could have been Avoided
         * 
         * @type {?number}
         * @public
         */
        this.avoidableRating = undefined;
        
        /**
         * The Source which Created this Downtime Event
         * 
         * @type {string}
         * @public
         */
        this.source = undefined;
        
        /**
         * The Status of this Downtime Event
         * 
         * @type {string}
         * @public
         */
        this.status = undefined;
        
        /**
         * Whether the Downtime Event has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Downtime Event was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Downtime Event
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **DowntimeEventModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Downtime Event
     * @return {DowntimeEventModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new DowntimeEventModel(siteId);
        
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
                if(jsonObject['endTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['endTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['endTimestamp']));
                }
        
                return new Date(jsonObject['endTimestamp']);
            }());
        }
        
        if('reasonCategory' in jsonObject)
        {
            model.reasonCategory = (function(){
                if(jsonObject['reasonCategory'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['reasonCategory'] !== 'string')
                {
                    return String(jsonObject['reasonCategory']);
                }
        
                return jsonObject['reasonCategory'];
            }());
        }
        
        if('reasonTag' in jsonObject)
        {
            model.reasonTag = (function(){
                if(jsonObject['reasonTag'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['reasonTag'] !== 'string')
                {
                    return String(jsonObject['reasonTag']);
                }
        
                return jsonObject['reasonTag'];
            }());
        }
        
        if('remedyAction' in jsonObject)
        {
            model.remedyAction = (function(){
                if(jsonObject['remedyAction'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['remedyAction'] !== 'string')
                {
                    return String(jsonObject['remedyAction']);
                }
        
                return jsonObject['remedyAction'];
            }());
        }
        
        if('avoidableRating' in jsonObject)
        {
            model.avoidableRating = (function(){
                if(jsonObject['avoidableRating'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['avoidableRating'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['avoidableRating'])) ? Number(jsonObject['avoidableRating']) : Math.floor(Number(jsonObject['avoidableRating']));
                }
        
                return Number.isInteger(jsonObject['avoidableRating']) ? jsonObject['avoidableRating'] : Math.floor(jsonObject['avoidableRating']);
            }());
        }
        
        if('source' in jsonObject)
        {
            model.source = (function(){
                if(typeof jsonObject['source'] !== 'string')
                {
                    return String(jsonObject['source']);
                }
        
                return jsonObject['source'];
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

export default DowntimeEventModel;