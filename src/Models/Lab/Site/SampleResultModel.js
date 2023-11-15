/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Sample Results
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class SampleResultModel extends BaseModel
{
    /**
     * SampleResultModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Sample Results
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Sample Results ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Lab ID this Sample Result is associated with
         * 
         * @type {string}
         * @public
         */
        this.labId = "";
        
        /**
         * The Sample ID this Sample Result is associated with
         * 
         * @type {string}
         * @public
         */
        this.sampleId = "";
        
        /**
         * When this Sample Result was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Total Duration (in seconds) of the Sample
         * 
         * @type {number}
         * @public
         */
        this.totalDuration = 0;
        
        /**
         * The Warm Up Duration (in seconds) of the Sample
         * 
         * @type {number}
         * @public
         */
        this.warmUpDuration = 0;
        
        /**
         * Timestamp of when the Warm Up process was Completed - `null` if not Completed
         * 
         * @type {?Date}
         * @public
         */
        this.warmUpCompletedTimestamp = null;
        
        /**
         * The Below Temperature Target Duration (in seconds) of the Sample
         * 
         * @type {number}
         * @public
         */
        this.belowTargetDuration = 0;
        
        /**
         * The Above Temperature Target Duration (in seconds) of the Sample
         * 
         * @type {number}
         * @public
         */
        this.aboveTargetDuration = 0;
        
        /**
         * The Within Temperature Target Duration (in seconds) of the Sample
         * 
         * @type {number}
         * @public
         */
        this.withinTargetDuration = 0;
        
        /**
         * Timestamp of when the Success Criteria was Met for the Sample - `null` if not Met
         * 
         * @type {?Date}
         * @public
         */
        this.successCriteriaMetTimestamp = null;
        
        /**
         * Timestamp of when the Failure Criteria was Met for the Sample - `null` if not Met
         * 
         * @type {?Date}
         * @public
         */
        this.failureCriteriaMetTimestamp = null;
        
        /**
         * The Average Temperature for the Total Duration of the Sample
         * 
         * @type {?number}
         * @public
         */
        this.totalAverageTemperature = null;
        
        /**
         * The Minimum Temperature seen Below the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.belowTargetMinimumTemperature = null;
        
        /**
         * The Average Temperature seen Below the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.belowTargetAverageTemperature = null;
        
        /**
         * The Maximum Temperature seen Above the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.aboveTargetMaximumTemperature = null;
        
        /**
         * The Average Temperature seen Above the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.aboveTargetAverageTemperature = null;
        
        /**
         * The Minimum Temperature seen Within the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.withinTargetMinimumTemperature = null;
        
        /**
         * The Maximum Temperature seen Within the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.withinTargetMaximumTemperature = null;
        
        /**
         * The Average Temperature seen Within the Temperature Target for the Sample
         * 
         * @type {?number}
         * @public
         */
        this.withinTargetAverageTemperature = null;
        
        /**
         * Whether the Sample Results has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Sample Results was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Sample Results
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **SampleResultModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Sample Results
     * @return {SampleResultModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new SampleResultModel(siteId);
        
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
        
        if('labId' in jsonObject)
        {
            model.labId = (function(){
                if(typeof jsonObject['labId'] !== 'string')
                {
                    return String(jsonObject['labId']);
                }
        
                return jsonObject['labId'];
            }());
        }
        
        if('sampleId' in jsonObject)
        {
            model.sampleId = (function(){
                if(typeof jsonObject['sampleId'] !== 'string')
                {
                    return String(jsonObject['sampleId']);
                }
        
                return jsonObject['sampleId'];
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
        
        if('totalDuration' in jsonObject)
        {
            model.totalDuration = (function(){
                if(typeof jsonObject['totalDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['totalDuration'])) ? Number(jsonObject['totalDuration']) : Math.floor(Number(jsonObject['totalDuration']));
                }
        
                return Number.isInteger(jsonObject['totalDuration']) ? jsonObject['totalDuration'] : Math.floor(jsonObject['totalDuration']);
            }());
        }
        
        if('warmUpDuration' in jsonObject)
        {
            model.warmUpDuration = (function(){
                if(typeof jsonObject['warmUpDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['warmUpDuration'])) ? Number(jsonObject['warmUpDuration']) : Math.floor(Number(jsonObject['warmUpDuration']));
                }
        
                return Number.isInteger(jsonObject['warmUpDuration']) ? jsonObject['warmUpDuration'] : Math.floor(jsonObject['warmUpDuration']);
            }());
        }
        
        if('warmUpCompletedTimestamp' in jsonObject)
        {
            model.warmUpCompletedTimestamp = (function(){
                if(jsonObject['warmUpCompletedTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['warmUpCompletedTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['warmUpCompletedTimestamp']));
                }
        
                return new Date(jsonObject['warmUpCompletedTimestamp']);
            }());
        }
        
        if('belowTargetDuration' in jsonObject)
        {
            model.belowTargetDuration = (function(){
                if(typeof jsonObject['belowTargetDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['belowTargetDuration'])) ? Number(jsonObject['belowTargetDuration']) : Math.floor(Number(jsonObject['belowTargetDuration']));
                }
        
                return Number.isInteger(jsonObject['belowTargetDuration']) ? jsonObject['belowTargetDuration'] : Math.floor(jsonObject['belowTargetDuration']);
            }());
        }
        
        if('aboveTargetDuration' in jsonObject)
        {
            model.aboveTargetDuration = (function(){
                if(typeof jsonObject['aboveTargetDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['aboveTargetDuration'])) ? Number(jsonObject['aboveTargetDuration']) : Math.floor(Number(jsonObject['aboveTargetDuration']));
                }
        
                return Number.isInteger(jsonObject['aboveTargetDuration']) ? jsonObject['aboveTargetDuration'] : Math.floor(jsonObject['aboveTargetDuration']);
            }());
        }
        
        if('withinTargetDuration' in jsonObject)
        {
            model.withinTargetDuration = (function(){
                if(typeof jsonObject['withinTargetDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['withinTargetDuration'])) ? Number(jsonObject['withinTargetDuration']) : Math.floor(Number(jsonObject['withinTargetDuration']));
                }
        
                return Number.isInteger(jsonObject['withinTargetDuration']) ? jsonObject['withinTargetDuration'] : Math.floor(jsonObject['withinTargetDuration']);
            }());
        }
        
        if('successCriteriaMetTimestamp' in jsonObject)
        {
            model.successCriteriaMetTimestamp = (function(){
                if(jsonObject['successCriteriaMetTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['successCriteriaMetTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['successCriteriaMetTimestamp']));
                }
        
                return new Date(jsonObject['successCriteriaMetTimestamp']);
            }());
        }
        
        if('failureCriteriaMetTimestamp' in jsonObject)
        {
            model.failureCriteriaMetTimestamp = (function(){
                if(jsonObject['failureCriteriaMetTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['failureCriteriaMetTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['failureCriteriaMetTimestamp']));
                }
        
                return new Date(jsonObject['failureCriteriaMetTimestamp']);
            }());
        }
        
        if('totalAverageTemperature' in jsonObject)
        {
            model.totalAverageTemperature = (function(){
                if(jsonObject['totalAverageTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['totalAverageTemperature'] !== 'number')
                {
                    return Number(jsonObject['totalAverageTemperature']);
                }
        
                return jsonObject['totalAverageTemperature'];
            }());
        }
        
        if('belowTargetMinimumTemperature' in jsonObject)
        {
            model.belowTargetMinimumTemperature = (function(){
                if(jsonObject['belowTargetMinimumTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['belowTargetMinimumTemperature'] !== 'number')
                {
                    return Number(jsonObject['belowTargetMinimumTemperature']);
                }
        
                return jsonObject['belowTargetMinimumTemperature'];
            }());
        }
        
        if('belowTargetAverageTemperature' in jsonObject)
        {
            model.belowTargetAverageTemperature = (function(){
                if(jsonObject['belowTargetAverageTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['belowTargetAverageTemperature'] !== 'number')
                {
                    return Number(jsonObject['belowTargetAverageTemperature']);
                }
        
                return jsonObject['belowTargetAverageTemperature'];
            }());
        }
        
        if('aboveTargetMaximumTemperature' in jsonObject)
        {
            model.aboveTargetMaximumTemperature = (function(){
                if(jsonObject['aboveTargetMaximumTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['aboveTargetMaximumTemperature'] !== 'number')
                {
                    return Number(jsonObject['aboveTargetMaximumTemperature']);
                }
        
                return jsonObject['aboveTargetMaximumTemperature'];
            }());
        }
        
        if('aboveTargetAverageTemperature' in jsonObject)
        {
            model.aboveTargetAverageTemperature = (function(){
                if(jsonObject['aboveTargetAverageTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['aboveTargetAverageTemperature'] !== 'number')
                {
                    return Number(jsonObject['aboveTargetAverageTemperature']);
                }
        
                return jsonObject['aboveTargetAverageTemperature'];
            }());
        }
        
        if('withinTargetMinimumTemperature' in jsonObject)
        {
            model.withinTargetMinimumTemperature = (function(){
                if(jsonObject['withinTargetMinimumTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['withinTargetMinimumTemperature'] !== 'number')
                {
                    return Number(jsonObject['withinTargetMinimumTemperature']);
                }
        
                return jsonObject['withinTargetMinimumTemperature'];
            }());
        }
        
        if('withinTargetMaximumTemperature' in jsonObject)
        {
            model.withinTargetMaximumTemperature = (function(){
                if(jsonObject['withinTargetMaximumTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['withinTargetMaximumTemperature'] !== 'number')
                {
                    return Number(jsonObject['withinTargetMaximumTemperature']);
                }
        
                return jsonObject['withinTargetMaximumTemperature'];
            }());
        }
        
        if('withinTargetAverageTemperature' in jsonObject)
        {
            model.withinTargetAverageTemperature = (function(){
                if(jsonObject['withinTargetAverageTemperature'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['withinTargetAverageTemperature'] !== 'number')
                {
                    return Number(jsonObject['withinTargetAverageTemperature']);
                }
        
                return jsonObject['withinTargetAverageTemperature'];
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

export default SampleResultModel;