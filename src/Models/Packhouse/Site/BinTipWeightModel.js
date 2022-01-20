/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Bin Tip Weight
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class BinTipWeightModel extends BaseModel
{
    /**
     * BinTipWeightModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Bin Tip Weight
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Bin Tip Weight ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Bin Tip ID associated with this Bin Weight
         * 
         * @type {string}
         * @public
         */
        this.binTipId = undefined;
        
        /**
         * The Packrun ID associated with this Bin Weight
         * 
         * @type {string}
         * @public
         */
        this.packrunId = undefined;
        
        /**
         * When this Bin Weight was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = undefined;
        
        /**
         * The Bin Weight Type
         * 
         * @type {string}
         * @public
         */
        this.weightType = undefined;
        
        /**
         * The Bin Weight
         * 
         * @type {number}
         * @public
         */
        this.weight = undefined;
        
        /**
         * The Bin Scale ID associated with this Bin Weight
         * 
         * @type {?string}
         * @public
         */
        this.binScaleId = undefined;
        
        /**
         * Whether the Bin Tip Weight has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Bin Tip Weight was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Bin Tip Weight
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **BinTipWeightModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Bin Tip Weight
     * @return {BinTipWeightModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new BinTipWeightModel(siteId);
        
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
        
        if('binTipId' in jsonObject)
        {
            model.binTipId = (function(){
                if(typeof jsonObject['binTipId'] !== 'string')
                {
                    return String(jsonObject['binTipId']);
                }
        
                return jsonObject['binTipId'];
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
        
        if('weightType' in jsonObject)
        {
            model.weightType = (function(){
                if(typeof jsonObject['weightType'] !== 'string')
                {
                    return String(jsonObject['weightType']);
                }
        
                return jsonObject['weightType'];
            }());
        }
        
        if('weight' in jsonObject)
        {
            model.weight = (function(){
                if(typeof jsonObject['weight'] !== 'number')
                {
                    return Number(jsonObject['weight']);
                }
        
                return jsonObject['weight'];
            }());
        }
        
        if('binScaleId' in jsonObject)
        {
            model.binScaleId = (function(){
                if(jsonObject['binScaleId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['binScaleId'] !== 'string')
                {
                    return String(jsonObject['binScaleId']);
                }
        
                return jsonObject['binScaleId'];
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

export default BinTipWeightModel;