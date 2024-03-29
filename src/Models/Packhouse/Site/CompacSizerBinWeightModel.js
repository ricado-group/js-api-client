/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Compac Sizer Bin Weight
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class CompacSizerBinWeightModel extends BaseModel
{
    /**
     * CompacSizerBinWeightModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Compac Sizer Bin Weight
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Compac Sizer Bin Weight ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Compac Sizer ID this Bin Weight is associated with
         * 
         * @type {string}
         * @public
         */
        this.compacSizerId = "";
        
        /**
         * The Packrun ID associated with this Bin Weight
         * 
         * @type {string}
         * @public
         */
        this.packrunId = "";
        
        /**
         * When this Bin Weight was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Time Batch ID associated with this Bin Weight
         * 
         * @type {?string}
         * @public
         */
        this.timeBatchId = null;
        
        /**
         * The Sources and Weights that make up this Bin Weight
         * 
         * @type {Array<{type: string, outletNumber: number, outletName: ?string, weights: Array<{classType: string, weight: number, fruitCount: ?number}>}|{type: string, weights: Array<{classType: string, weight: number, fruitCount: ?number}>}>}
         * @public
         */
        this.sources = [];
        
        /**
         * The Multi-Grower Bin Weights that will be submitted to FreshPack
         * 
         * @type {Array<{classType: string, weight: number, weightApi: ?{requestCount: number, requestTimestamp: ?Date, responseCode: ?number, responseMessage: ?string, completed: boolean}}>}
         * @public
         */
        this.freshPackMultiGrowerBinWeights = [];
        
        /**
         * The Multi-Grower Bins that will be submitted to FreshPack
         * 
         * @type {Array<{classType: string, binNumber: ?string, printBinCard: boolean, binNumberApi: ?{requestCount: number, requestTimestamp: ?Date, responseCode: ?number, responseMessage: ?string, completed: boolean}, binCardApi: ?{requestCount: number, requestTimestamp: ?Date, responseCode: ?number, responseMessage: ?string, completed: boolean}}>}
         * @public
         */
        this.freshPackMultiGrowerBins = [];
        
        /**
         * Whether the Compac Sizer Bin Weight has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Compac Sizer Bin Weight was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Compac Sizer Bin Weight
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **CompacSizerBinWeightModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Compac Sizer Bin Weight
     * @return {CompacSizerBinWeightModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new CompacSizerBinWeightModel(siteId);
        
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
        
        if('compacSizerId' in jsonObject)
        {
            model.compacSizerId = (function(){
                if(typeof jsonObject['compacSizerId'] !== 'string')
                {
                    return String(jsonObject['compacSizerId']);
                }
        
                return jsonObject['compacSizerId'];
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
        
        if('sources' in jsonObject)
        {
            model.sources = (function(){
                if(Array.isArray(jsonObject['sources']) !== true)
                {
                    return [];
                }
        
                return jsonObject['sources'].map((sourcesItem) => {
                    return (function(){
                        return sourcesItem;
                    }());
                });
            }());
        }
        
        if('freshPackMultiGrowerBinWeights' in jsonObject)
        {
            model.freshPackMultiGrowerBinWeights = (function(){
                if(Array.isArray(jsonObject['freshPackMultiGrowerBinWeights']) !== true)
                {
                    return [];
                }
        
                return jsonObject['freshPackMultiGrowerBinWeights'].map((freshPackMultiGrowerBinWeightsItem) => {
                    return (function(){
                        let freshPackMultiGrowerBinWeightsItemObject = {};
                        
                        if(typeof freshPackMultiGrowerBinWeightsItem === 'object' && 'classType' in freshPackMultiGrowerBinWeightsItem)
                        {
                            freshPackMultiGrowerBinWeightsItemObject.classType = (function(){
                                if(typeof freshPackMultiGrowerBinWeightsItem.classType !== 'string')
                                {
                                    return String(freshPackMultiGrowerBinWeightsItem.classType);
                                }
        
                                return freshPackMultiGrowerBinWeightsItem.classType;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinWeightsItemObject.classType = "";
                        }
                        
                        if(typeof freshPackMultiGrowerBinWeightsItem === 'object' && 'weight' in freshPackMultiGrowerBinWeightsItem)
                        {
                            freshPackMultiGrowerBinWeightsItemObject.weight = (function(){
                                if(typeof freshPackMultiGrowerBinWeightsItem.weight !== 'number')
                                {
                                    return Number(freshPackMultiGrowerBinWeightsItem.weight);
                                }
        
                                return freshPackMultiGrowerBinWeightsItem.weight;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinWeightsItemObject.weight = 0;
                        }
                        
                        if(typeof freshPackMultiGrowerBinWeightsItem === 'object' && 'weightApi' in freshPackMultiGrowerBinWeightsItem)
                        {
                            freshPackMultiGrowerBinWeightsItemObject.weightApi = (function(){
                                if(freshPackMultiGrowerBinWeightsItem.weightApi === null)
                                {
                                    return null;
                                }
        
                                let weightApiObject = {};
                                
                                if(typeof freshPackMultiGrowerBinWeightsItem.weightApi === 'object' && 'requestCount' in freshPackMultiGrowerBinWeightsItem.weightApi)
                                {
                                    weightApiObject.requestCount = (function(){
                                        if(typeof freshPackMultiGrowerBinWeightsItem.weightApi.requestCount !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinWeightsItem.weightApi.requestCount)) ? Number(freshPackMultiGrowerBinWeightsItem.weightApi.requestCount) : Math.floor(Number(freshPackMultiGrowerBinWeightsItem.weightApi.requestCount));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinWeightsItem.weightApi.requestCount) ? freshPackMultiGrowerBinWeightsItem.weightApi.requestCount : Math.floor(freshPackMultiGrowerBinWeightsItem.weightApi.requestCount);
                                    }());
                                }
                                else
                                {
                                    weightApiObject.requestCount = 0;
                                }
                                
                                if(typeof freshPackMultiGrowerBinWeightsItem.weightApi === 'object' && 'requestTimestamp' in freshPackMultiGrowerBinWeightsItem.weightApi)
                                {
                                    weightApiObject.requestTimestamp = (function(){
                                        if(freshPackMultiGrowerBinWeightsItem.weightApi.requestTimestamp === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinWeightsItem.weightApi.requestTimestamp !== 'string')
                                        {
                                            return new Date(String(freshPackMultiGrowerBinWeightsItem.weightApi.requestTimestamp));
                                        }
        
                                        return new Date(freshPackMultiGrowerBinWeightsItem.weightApi.requestTimestamp);
                                    }());
                                }
                                else
                                {
                                    weightApiObject.requestTimestamp = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinWeightsItem.weightApi === 'object' && 'responseCode' in freshPackMultiGrowerBinWeightsItem.weightApi)
                                {
                                    weightApiObject.responseCode = (function(){
                                        if(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinWeightsItem.weightApi.responseCode !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode)) ? Number(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode) : Math.floor(Number(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode) ? freshPackMultiGrowerBinWeightsItem.weightApi.responseCode : Math.floor(freshPackMultiGrowerBinWeightsItem.weightApi.responseCode);
                                    }());
                                }
                                else
                                {
                                    weightApiObject.responseCode = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinWeightsItem.weightApi === 'object' && 'responseMessage' in freshPackMultiGrowerBinWeightsItem.weightApi)
                                {
                                    weightApiObject.responseMessage = (function(){
                                        if(freshPackMultiGrowerBinWeightsItem.weightApi.responseMessage === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinWeightsItem.weightApi.responseMessage !== 'string')
                                        {
                                            return String(freshPackMultiGrowerBinWeightsItem.weightApi.responseMessage);
                                        }
        
                                        return freshPackMultiGrowerBinWeightsItem.weightApi.responseMessage;
                                    }());
                                }
                                else
                                {
                                    weightApiObject.responseMessage = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinWeightsItem.weightApi === 'object' && 'completed' in freshPackMultiGrowerBinWeightsItem.weightApi)
                                {
                                    weightApiObject.completed = (function(){
                                        if(typeof freshPackMultiGrowerBinWeightsItem.weightApi.completed !== 'boolean')
                                        {
                                            return Boolean(freshPackMultiGrowerBinWeightsItem.weightApi.completed);
                                        }
        
                                        return freshPackMultiGrowerBinWeightsItem.weightApi.completed;
                                    }());
                                }
                                else
                                {
                                    weightApiObject.completed = false;
                                }
        
                                return weightApiObject;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinWeightsItemObject.weightApi = null;
                        }
        
                        return freshPackMultiGrowerBinWeightsItemObject;
                    }());
                });
            }());
        }
        
        if('freshPackMultiGrowerBins' in jsonObject)
        {
            model.freshPackMultiGrowerBins = (function(){
                if(Array.isArray(jsonObject['freshPackMultiGrowerBins']) !== true)
                {
                    return [];
                }
        
                return jsonObject['freshPackMultiGrowerBins'].map((freshPackMultiGrowerBinsItem) => {
                    return (function(){
                        let freshPackMultiGrowerBinsItemObject = {};
                        
                        if(typeof freshPackMultiGrowerBinsItem === 'object' && 'classType' in freshPackMultiGrowerBinsItem)
                        {
                            freshPackMultiGrowerBinsItemObject.classType = (function(){
                                if(typeof freshPackMultiGrowerBinsItem.classType !== 'string')
                                {
                                    return String(freshPackMultiGrowerBinsItem.classType);
                                }
        
                                return freshPackMultiGrowerBinsItem.classType;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinsItemObject.classType = "";
                        }
                        
                        if(typeof freshPackMultiGrowerBinsItem === 'object' && 'binNumber' in freshPackMultiGrowerBinsItem)
                        {
                            freshPackMultiGrowerBinsItemObject.binNumber = (function(){
                                if(freshPackMultiGrowerBinsItem.binNumber === null)
                                {
                                    return null;
                                }
        
                                if(typeof freshPackMultiGrowerBinsItem.binNumber !== 'string')
                                {
                                    return String(freshPackMultiGrowerBinsItem.binNumber);
                                }
        
                                return freshPackMultiGrowerBinsItem.binNumber;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinsItemObject.binNumber = null;
                        }
                        
                        if(typeof freshPackMultiGrowerBinsItem === 'object' && 'printBinCard' in freshPackMultiGrowerBinsItem)
                        {
                            freshPackMultiGrowerBinsItemObject.printBinCard = (function(){
                                if(typeof freshPackMultiGrowerBinsItem.printBinCard !== 'boolean')
                                {
                                    return Boolean(freshPackMultiGrowerBinsItem.printBinCard);
                                }
        
                                return freshPackMultiGrowerBinsItem.printBinCard;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinsItemObject.printBinCard = false;
                        }
                        
                        if(typeof freshPackMultiGrowerBinsItem === 'object' && 'binNumberApi' in freshPackMultiGrowerBinsItem)
                        {
                            freshPackMultiGrowerBinsItemObject.binNumberApi = (function(){
                                if(freshPackMultiGrowerBinsItem.binNumberApi === null)
                                {
                                    return null;
                                }
        
                                let binNumberApiObject = {};
                                
                                if(typeof freshPackMultiGrowerBinsItem.binNumberApi === 'object' && 'requestCount' in freshPackMultiGrowerBinsItem.binNumberApi)
                                {
                                    binNumberApiObject.requestCount = (function(){
                                        if(typeof freshPackMultiGrowerBinsItem.binNumberApi.requestCount !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinsItem.binNumberApi.requestCount)) ? Number(freshPackMultiGrowerBinsItem.binNumberApi.requestCount) : Math.floor(Number(freshPackMultiGrowerBinsItem.binNumberApi.requestCount));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinsItem.binNumberApi.requestCount) ? freshPackMultiGrowerBinsItem.binNumberApi.requestCount : Math.floor(freshPackMultiGrowerBinsItem.binNumberApi.requestCount);
                                    }());
                                }
                                else
                                {
                                    binNumberApiObject.requestCount = 0;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binNumberApi === 'object' && 'requestTimestamp' in freshPackMultiGrowerBinsItem.binNumberApi)
                                {
                                    binNumberApiObject.requestTimestamp = (function(){
                                        if(freshPackMultiGrowerBinsItem.binNumberApi.requestTimestamp === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binNumberApi.requestTimestamp !== 'string')
                                        {
                                            return new Date(String(freshPackMultiGrowerBinsItem.binNumberApi.requestTimestamp));
                                        }
        
                                        return new Date(freshPackMultiGrowerBinsItem.binNumberApi.requestTimestamp);
                                    }());
                                }
                                else
                                {
                                    binNumberApiObject.requestTimestamp = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binNumberApi === 'object' && 'responseCode' in freshPackMultiGrowerBinsItem.binNumberApi)
                                {
                                    binNumberApiObject.responseCode = (function(){
                                        if(freshPackMultiGrowerBinsItem.binNumberApi.responseCode === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binNumberApi.responseCode !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinsItem.binNumberApi.responseCode)) ? Number(freshPackMultiGrowerBinsItem.binNumberApi.responseCode) : Math.floor(Number(freshPackMultiGrowerBinsItem.binNumberApi.responseCode));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinsItem.binNumberApi.responseCode) ? freshPackMultiGrowerBinsItem.binNumberApi.responseCode : Math.floor(freshPackMultiGrowerBinsItem.binNumberApi.responseCode);
                                    }());
                                }
                                else
                                {
                                    binNumberApiObject.responseCode = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binNumberApi === 'object' && 'responseMessage' in freshPackMultiGrowerBinsItem.binNumberApi)
                                {
                                    binNumberApiObject.responseMessage = (function(){
                                        if(freshPackMultiGrowerBinsItem.binNumberApi.responseMessage === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binNumberApi.responseMessage !== 'string')
                                        {
                                            return String(freshPackMultiGrowerBinsItem.binNumberApi.responseMessage);
                                        }
        
                                        return freshPackMultiGrowerBinsItem.binNumberApi.responseMessage;
                                    }());
                                }
                                else
                                {
                                    binNumberApiObject.responseMessage = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binNumberApi === 'object' && 'completed' in freshPackMultiGrowerBinsItem.binNumberApi)
                                {
                                    binNumberApiObject.completed = (function(){
                                        if(typeof freshPackMultiGrowerBinsItem.binNumberApi.completed !== 'boolean')
                                        {
                                            return Boolean(freshPackMultiGrowerBinsItem.binNumberApi.completed);
                                        }
        
                                        return freshPackMultiGrowerBinsItem.binNumberApi.completed;
                                    }());
                                }
                                else
                                {
                                    binNumberApiObject.completed = false;
                                }
        
                                return binNumberApiObject;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinsItemObject.binNumberApi = null;
                        }
                        
                        if(typeof freshPackMultiGrowerBinsItem === 'object' && 'binCardApi' in freshPackMultiGrowerBinsItem)
                        {
                            freshPackMultiGrowerBinsItemObject.binCardApi = (function(){
                                if(freshPackMultiGrowerBinsItem.binCardApi === null)
                                {
                                    return null;
                                }
        
                                let binCardApiObject = {};
                                
                                if(typeof freshPackMultiGrowerBinsItem.binCardApi === 'object' && 'requestCount' in freshPackMultiGrowerBinsItem.binCardApi)
                                {
                                    binCardApiObject.requestCount = (function(){
                                        if(typeof freshPackMultiGrowerBinsItem.binCardApi.requestCount !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinsItem.binCardApi.requestCount)) ? Number(freshPackMultiGrowerBinsItem.binCardApi.requestCount) : Math.floor(Number(freshPackMultiGrowerBinsItem.binCardApi.requestCount));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinsItem.binCardApi.requestCount) ? freshPackMultiGrowerBinsItem.binCardApi.requestCount : Math.floor(freshPackMultiGrowerBinsItem.binCardApi.requestCount);
                                    }());
                                }
                                else
                                {
                                    binCardApiObject.requestCount = 0;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binCardApi === 'object' && 'requestTimestamp' in freshPackMultiGrowerBinsItem.binCardApi)
                                {
                                    binCardApiObject.requestTimestamp = (function(){
                                        if(freshPackMultiGrowerBinsItem.binCardApi.requestTimestamp === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binCardApi.requestTimestamp !== 'string')
                                        {
                                            return new Date(String(freshPackMultiGrowerBinsItem.binCardApi.requestTimestamp));
                                        }
        
                                        return new Date(freshPackMultiGrowerBinsItem.binCardApi.requestTimestamp);
                                    }());
                                }
                                else
                                {
                                    binCardApiObject.requestTimestamp = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binCardApi === 'object' && 'responseCode' in freshPackMultiGrowerBinsItem.binCardApi)
                                {
                                    binCardApiObject.responseCode = (function(){
                                        if(freshPackMultiGrowerBinsItem.binCardApi.responseCode === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binCardApi.responseCode !== 'number')
                                        {
                                            return Number.isInteger(Number(freshPackMultiGrowerBinsItem.binCardApi.responseCode)) ? Number(freshPackMultiGrowerBinsItem.binCardApi.responseCode) : Math.floor(Number(freshPackMultiGrowerBinsItem.binCardApi.responseCode));
                                        }
        
                                        return Number.isInteger(freshPackMultiGrowerBinsItem.binCardApi.responseCode) ? freshPackMultiGrowerBinsItem.binCardApi.responseCode : Math.floor(freshPackMultiGrowerBinsItem.binCardApi.responseCode);
                                    }());
                                }
                                else
                                {
                                    binCardApiObject.responseCode = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binCardApi === 'object' && 'responseMessage' in freshPackMultiGrowerBinsItem.binCardApi)
                                {
                                    binCardApiObject.responseMessage = (function(){
                                        if(freshPackMultiGrowerBinsItem.binCardApi.responseMessage === null)
                                        {
                                            return null;
                                        }
        
                                        if(typeof freshPackMultiGrowerBinsItem.binCardApi.responseMessage !== 'string')
                                        {
                                            return String(freshPackMultiGrowerBinsItem.binCardApi.responseMessage);
                                        }
        
                                        return freshPackMultiGrowerBinsItem.binCardApi.responseMessage;
                                    }());
                                }
                                else
                                {
                                    binCardApiObject.responseMessage = null;
                                }
                                
                                if(typeof freshPackMultiGrowerBinsItem.binCardApi === 'object' && 'completed' in freshPackMultiGrowerBinsItem.binCardApi)
                                {
                                    binCardApiObject.completed = (function(){
                                        if(typeof freshPackMultiGrowerBinsItem.binCardApi.completed !== 'boolean')
                                        {
                                            return Boolean(freshPackMultiGrowerBinsItem.binCardApi.completed);
                                        }
        
                                        return freshPackMultiGrowerBinsItem.binCardApi.completed;
                                    }());
                                }
                                else
                                {
                                    binCardApiObject.completed = false;
                                }
        
                                return binCardApiObject;
                            }());
                        }
                        else
                        {
                            freshPackMultiGrowerBinsItemObject.binCardApi = null;
                        }
        
                        return freshPackMultiGrowerBinsItemObject;
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

export default CompacSizerBinWeightModel;