/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Bin Tip Bin
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class BinTipBinModel extends BaseModel
{
    /**
     * BinTipBinModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Bin Tip Bin
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Bin Tip Bin ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Bin Tip ID associated with this Bin
         * 
         * @type {string}
         * @public
         */
        this.binTipId = "";
        
        /**
         * The Packrun ID associated with this Bin
         * 
         * @type {string}
         * @public
         */
        this.packrunId = "";
        
        /**
         * When this Bin was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * A 10-Digit Bin Number made up of a Bin Lot (4-Digits) and a Unique Number (6-Digits)
         * 
         * @type {?string}
         * @public
         */
        this.binNumber = null;
        
        /**
         * The Source of the Bin Number
         * 
         * @type {?string}
         * @public
         */
        this.binNumberSource = null;
        
        /**
         * The Time Batch ID associated with this Bin
         * 
         * @type {?string}
         * @public
         */
        this.timeBatchId = null;
        
        /**
         * The Full Weight for this Bin
         * 
         * @type {?number}
         * @public
         */
        this.fullWeight = null;
        
        /**
         * The Empty Weight for this Bin
         * 
         * @type {?number}
         * @public
         */
        this.emptyWeight = null;
        
        /**
         * The `BinTipWeight` ID as the Source for the Full Weight of this Bin
         * 
         * @type {?string}
         * @public
         */
        this.fullBinWeightId = null;
        
        /**
         * The `BinTipWeight` ID as the Source for the Empty Weight of this Bin
         * 
         * @type {?string}
         * @public
         */
        this.emptyBinWeightId = null;
        
        /**
         * Results from Interacting with the FreshPack API to Send Field Bin Weights
         * 
         * @type {?{requestCount: number, requestTimestamp: ?Date, responseCode: ?number, responseMessage: ?string, completed: boolean}}
         * @public
         */
        this.freshPackFieldBinWeightApi = null;
        
        /**
         * Whether the Bin Tip Bin has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Bin Tip Bin was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Bin Tip Bin
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **BinTipBinModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Bin Tip Bin
     * @return {BinTipBinModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new BinTipBinModel(siteId);
        
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
        
        if('binNumber' in jsonObject)
        {
            model.binNumber = (function(){
                if(jsonObject['binNumber'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['binNumber'] !== 'string')
                {
                    return String(jsonObject['binNumber']);
                }
        
                return jsonObject['binNumber'];
            }());
        }
        
        if('binNumberSource' in jsonObject)
        {
            model.binNumberSource = (function(){
                if(jsonObject['binNumberSource'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['binNumberSource'] !== 'string')
                {
                    return String(jsonObject['binNumberSource']);
                }
        
                return jsonObject['binNumberSource'];
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
        
        if('fullWeight' in jsonObject)
        {
            model.fullWeight = (function(){
                if(jsonObject['fullWeight'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['fullWeight'] !== 'number')
                {
                    return Number(jsonObject['fullWeight']);
                }
        
                return jsonObject['fullWeight'];
            }());
        }
        
        if('emptyWeight' in jsonObject)
        {
            model.emptyWeight = (function(){
                if(jsonObject['emptyWeight'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['emptyWeight'] !== 'number')
                {
                    return Number(jsonObject['emptyWeight']);
                }
        
                return jsonObject['emptyWeight'];
            }());
        }
        
        if('fullBinWeightId' in jsonObject)
        {
            model.fullBinWeightId = (function(){
                if(jsonObject['fullBinWeightId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['fullBinWeightId'] !== 'string')
                {
                    return String(jsonObject['fullBinWeightId']);
                }
        
                return jsonObject['fullBinWeightId'];
            }());
        }
        
        if('emptyBinWeightId' in jsonObject)
        {
            model.emptyBinWeightId = (function(){
                if(jsonObject['emptyBinWeightId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['emptyBinWeightId'] !== 'string')
                {
                    return String(jsonObject['emptyBinWeightId']);
                }
        
                return jsonObject['emptyBinWeightId'];
            }());
        }
        
        if('freshPackFieldBinWeightApi' in jsonObject)
        {
            model.freshPackFieldBinWeightApi = (function(){
                if(jsonObject['freshPackFieldBinWeightApi'] === null)
                {
                    return null;
                }
        
                let freshPackFieldBinWeightApiObject = {};
                
                if(typeof jsonObject['freshPackFieldBinWeightApi'] === 'object' && 'requestCount' in jsonObject['freshPackFieldBinWeightApi'])
                {
                    freshPackFieldBinWeightApiObject.requestCount = (function(){
                        if(typeof jsonObject['freshPackFieldBinWeightApi'].requestCount !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['freshPackFieldBinWeightApi'].requestCount)) ? Number(jsonObject['freshPackFieldBinWeightApi'].requestCount) : Math.floor(Number(jsonObject['freshPackFieldBinWeightApi'].requestCount));
                        }
        
                        return Number.isInteger(jsonObject['freshPackFieldBinWeightApi'].requestCount) ? jsonObject['freshPackFieldBinWeightApi'].requestCount : Math.floor(jsonObject['freshPackFieldBinWeightApi'].requestCount);
                    }());
                }
                else
                {
                    freshPackFieldBinWeightApiObject.requestCount = 0;
                }
                
                if(typeof jsonObject['freshPackFieldBinWeightApi'] === 'object' && 'requestTimestamp' in jsonObject['freshPackFieldBinWeightApi'])
                {
                    freshPackFieldBinWeightApiObject.requestTimestamp = (function(){
                        if(jsonObject['freshPackFieldBinWeightApi'].requestTimestamp === null)
                        {
                            return null;
                        }
        
                        if(typeof jsonObject['freshPackFieldBinWeightApi'].requestTimestamp !== 'string')
                        {
                            return new Date(String(jsonObject['freshPackFieldBinWeightApi'].requestTimestamp));
                        }
        
                        return new Date(jsonObject['freshPackFieldBinWeightApi'].requestTimestamp);
                    }());
                }
                else
                {
                    freshPackFieldBinWeightApiObject.requestTimestamp = null;
                }
                
                if(typeof jsonObject['freshPackFieldBinWeightApi'] === 'object' && 'responseCode' in jsonObject['freshPackFieldBinWeightApi'])
                {
                    freshPackFieldBinWeightApiObject.responseCode = (function(){
                        if(jsonObject['freshPackFieldBinWeightApi'].responseCode === null)
                        {
                            return null;
                        }
        
                        if(typeof jsonObject['freshPackFieldBinWeightApi'].responseCode !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['freshPackFieldBinWeightApi'].responseCode)) ? Number(jsonObject['freshPackFieldBinWeightApi'].responseCode) : Math.floor(Number(jsonObject['freshPackFieldBinWeightApi'].responseCode));
                        }
        
                        return Number.isInteger(jsonObject['freshPackFieldBinWeightApi'].responseCode) ? jsonObject['freshPackFieldBinWeightApi'].responseCode : Math.floor(jsonObject['freshPackFieldBinWeightApi'].responseCode);
                    }());
                }
                else
                {
                    freshPackFieldBinWeightApiObject.responseCode = null;
                }
                
                if(typeof jsonObject['freshPackFieldBinWeightApi'] === 'object' && 'responseMessage' in jsonObject['freshPackFieldBinWeightApi'])
                {
                    freshPackFieldBinWeightApiObject.responseMessage = (function(){
                        if(jsonObject['freshPackFieldBinWeightApi'].responseMessage === null)
                        {
                            return null;
                        }
        
                        if(typeof jsonObject['freshPackFieldBinWeightApi'].responseMessage !== 'string')
                        {
                            return String(jsonObject['freshPackFieldBinWeightApi'].responseMessage);
                        }
        
                        return jsonObject['freshPackFieldBinWeightApi'].responseMessage;
                    }());
                }
                else
                {
                    freshPackFieldBinWeightApiObject.responseMessage = null;
                }
                
                if(typeof jsonObject['freshPackFieldBinWeightApi'] === 'object' && 'completed' in jsonObject['freshPackFieldBinWeightApi'])
                {
                    freshPackFieldBinWeightApiObject.completed = (function(){
                        if(typeof jsonObject['freshPackFieldBinWeightApi'].completed !== 'boolean')
                        {
                            return Boolean(jsonObject['freshPackFieldBinWeightApi'].completed);
                        }
        
                        return jsonObject['freshPackFieldBinWeightApi'].completed;
                    }());
                }
                else
                {
                    freshPackFieldBinWeightApiObject.completed = false;
                }
        
                return freshPackFieldBinWeightApiObject;
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

export default BinTipBinModel;