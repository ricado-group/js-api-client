/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Fruit Profile
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class FruitProfileModel extends BaseModel
{
    /**
     * FruitProfileModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Fruit Profile
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Fruit Profile ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Fruit Profile Name
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Fruit Profile Description
         * 
         * @type {string}
         * @public
         */
        this.description = "";
        
        /**
         * The Fruit Profile Image Source
         * 
         * @type {string}
         * @public
         */
        this.image = "";
        
        /**
         * The Typical Warm Up Duration (in seconds) for a Sample to reach the Minimum Target Temperature
         * 
         * @type {number}
         * @public
         */
        this.nominalWarmUpDuration = 0;
        
        /**
         * The Minimum Duration (in seconds) that a Sample should be within the Min and Max Target Temperatures to be Compliant
         * 
         * @type {number}
         * @public
         */
        this.minimumWithinTargetDuration = 0;
        
        /**
         * The Minimum Duration (in seconds) that a Sample must be Dehydrated for to be Compliant
         * 
         * @type {number}
         * @public
         */
        this.minimumTotalDuration = 0;
        
        /**
         * The Maximum Duration (in seconds) that a Sample can be Dehydrated for before it is Considered Non-Compliant
         * 
         * @type {number}
         * @public
         */
        this.maximumTotalDuration = 0;
        
        /**
         * The Minimum Target Temperature for a Sample to be Compliant
         * 
         * @type {number}
         * @public
         */
        this.minimumTargetTemperature = 0;
        
        /**
         * The Maximum Target Temperature for a Sample to be Compliant
         * 
         * @type {number}
         * @public
         */
        this.maximumTargetTemperature = 0;
        
        /**
         * The Warm-Up Temperature for starting the Warm Up alerts
         * 
         * @type {number}
         * @public
         */
        this.warmUpStartExpectedTemperature = 0;
        
        /**
         * The Warm-Up Start Expected Rate of Change
         * 
         * @type {number}
         * @public
         */
        this.warmUpStartExpectedRateOfChange = 0;
        
        /**
         * The Warm-Up Stage Two Expected Temperature
         * 
         * @type {number}
         * @public
         */
        this.warmUpStageTwoExpectedTemperature = 0;
        
        /**
         * The Warm-Up Stage Two Expected Rate of Change
         * 
         * @type {number}
         * @public
         */
        this.warmUpStageTwoExpectedRateOfChange = 0;
        
        /**
         * The Warm-Up Stage Three Expected Temperature
         * 
         * @type {number}
         * @public
         */
        this.warmUpStageThreeExpectedTemperature = 0;
        
        /**
         * The Warm-Up Stage Three Expected Rate of Change
         * 
         * @type {number}
         * @public
         */
        this.warmUpStageThreeExpectedRateOfChange = 0;
        
        /**
         * The Warm-Up End Expected Temperature
         * 
         * @type {number}
         * @public
         */
        this.warmUpEndExpectedTemperature = 0;
        
        /**
         * The Warm-Up End Expected Rate of Change
         * 
         * @type {number}
         * @public
         */
        this.warmUpEndExpectedRateOfChange = 0;
        
        /**
         * Whether the Fruit Profile has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Fruit Profile was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Fruit Profile
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **FruitProfileModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Fruit Profile
     * @return {FruitProfileModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new FruitProfileModel(siteId);
        
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
        
        if('name' in jsonObject)
        {
            model.name = (function(){
                if(typeof jsonObject['name'] !== 'string')
                {
                    return String(jsonObject['name']);
                }
        
                return jsonObject['name'];
            }());
        }
        
        if('description' in jsonObject)
        {
            model.description = (function(){
                if(typeof jsonObject['description'] !== 'string')
                {
                    return String(jsonObject['description']);
                }
        
                return jsonObject['description'];
            }());
        }
        
        if('image' in jsonObject)
        {
            model.image = (function(){
                if(typeof jsonObject['image'] !== 'string')
                {
                    return String(jsonObject['image']);
                }
        
                return jsonObject['image'];
            }());
        }
        
        if('nominalWarmUpDuration' in jsonObject)
        {
            model.nominalWarmUpDuration = (function(){
                if(typeof jsonObject['nominalWarmUpDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['nominalWarmUpDuration'])) ? Number(jsonObject['nominalWarmUpDuration']) : Math.floor(Number(jsonObject['nominalWarmUpDuration']));
                }
        
                return Number.isInteger(jsonObject['nominalWarmUpDuration']) ? jsonObject['nominalWarmUpDuration'] : Math.floor(jsonObject['nominalWarmUpDuration']);
            }());
        }
        
        if('minimumWithinTargetDuration' in jsonObject)
        {
            model.minimumWithinTargetDuration = (function(){
                if(typeof jsonObject['minimumWithinTargetDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['minimumWithinTargetDuration'])) ? Number(jsonObject['minimumWithinTargetDuration']) : Math.floor(Number(jsonObject['minimumWithinTargetDuration']));
                }
        
                return Number.isInteger(jsonObject['minimumWithinTargetDuration']) ? jsonObject['minimumWithinTargetDuration'] : Math.floor(jsonObject['minimumWithinTargetDuration']);
            }());
        }
        
        if('minimumTotalDuration' in jsonObject)
        {
            model.minimumTotalDuration = (function(){
                if(typeof jsonObject['minimumTotalDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['minimumTotalDuration'])) ? Number(jsonObject['minimumTotalDuration']) : Math.floor(Number(jsonObject['minimumTotalDuration']));
                }
        
                return Number.isInteger(jsonObject['minimumTotalDuration']) ? jsonObject['minimumTotalDuration'] : Math.floor(jsonObject['minimumTotalDuration']);
            }());
        }
        
        if('maximumTotalDuration' in jsonObject)
        {
            model.maximumTotalDuration = (function(){
                if(typeof jsonObject['maximumTotalDuration'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['maximumTotalDuration'])) ? Number(jsonObject['maximumTotalDuration']) : Math.floor(Number(jsonObject['maximumTotalDuration']));
                }
        
                return Number.isInteger(jsonObject['maximumTotalDuration']) ? jsonObject['maximumTotalDuration'] : Math.floor(jsonObject['maximumTotalDuration']);
            }());
        }
        
        if('minimumTargetTemperature' in jsonObject)
        {
            model.minimumTargetTemperature = (function(){
                if(typeof jsonObject['minimumTargetTemperature'] !== 'number')
                {
                    return Number(jsonObject['minimumTargetTemperature']);
                }
        
                return jsonObject['minimumTargetTemperature'];
            }());
        }
        
        if('maximumTargetTemperature' in jsonObject)
        {
            model.maximumTargetTemperature = (function(){
                if(typeof jsonObject['maximumTargetTemperature'] !== 'number')
                {
                    return Number(jsonObject['maximumTargetTemperature']);
                }
        
                return jsonObject['maximumTargetTemperature'];
            }());
        }
        
        if('warmUpStartExpectedTemperature' in jsonObject)
        {
            model.warmUpStartExpectedTemperature = (function(){
                if(typeof jsonObject['warmUpStartExpectedTemperature'] !== 'number')
                {
                    return Number(jsonObject['warmUpStartExpectedTemperature']);
                }
        
                return jsonObject['warmUpStartExpectedTemperature'];
            }());
        }
        
        if('warmUpStartExpectedRateOfChange' in jsonObject)
        {
            model.warmUpStartExpectedRateOfChange = (function(){
                if(typeof jsonObject['warmUpStartExpectedRateOfChange'] !== 'number')
                {
                    return Number(jsonObject['warmUpStartExpectedRateOfChange']);
                }
        
                return jsonObject['warmUpStartExpectedRateOfChange'];
            }());
        }
        
        if('warmUpStageTwoExpectedTemperature' in jsonObject)
        {
            model.warmUpStageTwoExpectedTemperature = (function(){
                if(typeof jsonObject['warmUpStageTwoExpectedTemperature'] !== 'number')
                {
                    return Number(jsonObject['warmUpStageTwoExpectedTemperature']);
                }
        
                return jsonObject['warmUpStageTwoExpectedTemperature'];
            }());
        }
        
        if('warmUpStageTwoExpectedRateOfChange' in jsonObject)
        {
            model.warmUpStageTwoExpectedRateOfChange = (function(){
                if(typeof jsonObject['warmUpStageTwoExpectedRateOfChange'] !== 'number')
                {
                    return Number(jsonObject['warmUpStageTwoExpectedRateOfChange']);
                }
        
                return jsonObject['warmUpStageTwoExpectedRateOfChange'];
            }());
        }
        
        if('warmUpStageThreeExpectedTemperature' in jsonObject)
        {
            model.warmUpStageThreeExpectedTemperature = (function(){
                if(typeof jsonObject['warmUpStageThreeExpectedTemperature'] !== 'number')
                {
                    return Number(jsonObject['warmUpStageThreeExpectedTemperature']);
                }
        
                return jsonObject['warmUpStageThreeExpectedTemperature'];
            }());
        }
        
        if('warmUpStageThreeExpectedRateOfChange' in jsonObject)
        {
            model.warmUpStageThreeExpectedRateOfChange = (function(){
                if(typeof jsonObject['warmUpStageThreeExpectedRateOfChange'] !== 'number')
                {
                    return Number(jsonObject['warmUpStageThreeExpectedRateOfChange']);
                }
        
                return jsonObject['warmUpStageThreeExpectedRateOfChange'];
            }());
        }
        
        if('warmUpEndExpectedTemperature' in jsonObject)
        {
            model.warmUpEndExpectedTemperature = (function(){
                if(typeof jsonObject['warmUpEndExpectedTemperature'] !== 'number')
                {
                    return Number(jsonObject['warmUpEndExpectedTemperature']);
                }
        
                return jsonObject['warmUpEndExpectedTemperature'];
            }());
        }
        
        if('warmUpEndExpectedRateOfChange' in jsonObject)
        {
            model.warmUpEndExpectedRateOfChange = (function(){
                if(typeof jsonObject['warmUpEndExpectedRateOfChange'] !== 'number')
                {
                    return Number(jsonObject['warmUpEndExpectedRateOfChange']);
                }
        
                return jsonObject['warmUpEndExpectedRateOfChange'];
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

export default FruitProfileModel;