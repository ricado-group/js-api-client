/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Compac Sizer
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class CompacSizerModel extends BaseModel
{
    /**
     * CompacSizerModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Compac Sizer
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Compac Sizer ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The RTU this Compac Sizer belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = undefined;
        
        /**
         * The Compac Sizer Name
         * 
         * @type {string}
         * @public
         */
        this.name = undefined;
        
        /**
         * The Lanes defined for this Compac Sizer
         * 
         * @type {Object[]}
         * @public
         */
        this.lanes = undefined;
        
        /**
         * The Points used by this Compac Sizer
         * 
         * @type {Object}
         * @public
         */
        this.points = undefined;
        
        /**
         * The Outlets defined for this Compac Sizer
         * 
         * @type {Object[]}
         * @public
         */
        this.outlets = undefined;
        
        /**
         * The Sizer Type
         * 
         * @type {string}
         * @public
         */
        this.sizerType = undefined;
        
        /**
         * The Auto Create Batch Delay in Seconds for this Compac Sizer
         * 
         * @type {number}
         * @public
         */
        this.autoCreateBatchDelay = undefined;
        
        /**
         * The Fruit Sizes defined and handled by this Compac Sizer
         * 
         * @type {Object[]}
         * @public
         */
        this.fruitSizes = undefined;
        
        /**
         * The Packing Line ID this Compac Sizer belongs to
         * 
         * @type {string}
         * @public
         */
        this.packingLineId = undefined;
        
        /**
         * The FreshPack Integration Configuration for this Compac Sizer
         * 
         * @type {?Object}
         * @public
         */
        this.freshPackIntegration = undefined;
        
        /**
         * An Array of Sources that deliver Fruit to this Compac Sizer
         * 
         * @type {Object[]}
         * @public
         */
        this.sources = undefined;
        
        /**
         * Whether the Compac Sizer has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Compac Sizer was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Compac Sizer
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **CompacSizerModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Compac Sizer
     * @return {CompacSizerModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new CompacSizerModel(siteId);
        
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
        
        if('rtuId' in jsonObject)
        {
            model.rtuId = (function(){
                if(jsonObject['rtuId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['rtuId'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['rtuId'])) ? Number(jsonObject['rtuId']) : Math.floor(Number(jsonObject['rtuId']));
                }
        
                return Number.isInteger(jsonObject['rtuId']) ? jsonObject['rtuId'] : Math.floor(jsonObject['rtuId']);
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
        
        if('lanes' in jsonObject)
        {
            model.lanes = (function(){
                if(Array.isArray(jsonObject['lanes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['lanes'].map((lanesItem) => {
                    return (function(){
                        if(typeof lanesItem !== 'object')
                        {
                            return Object(lanesItem);
                        }
        
                        return lanesItem;
                    }());
                });
            }());
        }
        
        if('points' in jsonObject)
        {
            model.points = (function(){
                if(typeof jsonObject['points'] !== 'object')
                {
                    return Object(jsonObject['points']);
                }
        
                return jsonObject['points'];
            }());
        }
        
        if('outlets' in jsonObject)
        {
            model.outlets = (function(){
                if(Array.isArray(jsonObject['outlets']) !== true)
                {
                    return [];
                }
        
                return jsonObject['outlets'].map((outletsItem) => {
                    return (function(){
                        if(typeof outletsItem !== 'object')
                        {
                            return Object(outletsItem);
                        }
        
                        return outletsItem;
                    }());
                });
            }());
        }
        
        if('sizerType' in jsonObject)
        {
            model.sizerType = (function(){
                if(typeof jsonObject['sizerType'] !== 'string')
                {
                    return String(jsonObject['sizerType']);
                }
        
                return jsonObject['sizerType'];
            }());
        }
        
        if('autoCreateBatchDelay' in jsonObject)
        {
            model.autoCreateBatchDelay = (function(){
                if(typeof jsonObject['autoCreateBatchDelay'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['autoCreateBatchDelay'])) ? Number(jsonObject['autoCreateBatchDelay']) : Math.floor(Number(jsonObject['autoCreateBatchDelay']));
                }
        
                return Number.isInteger(jsonObject['autoCreateBatchDelay']) ? jsonObject['autoCreateBatchDelay'] : Math.floor(jsonObject['autoCreateBatchDelay']);
            }());
        }
        
        if('fruitSizes' in jsonObject)
        {
            model.fruitSizes = (function(){
                if(Array.isArray(jsonObject['fruitSizes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['fruitSizes'].map((fruitSizesItem) => {
                    return (function(){
                        if(typeof fruitSizesItem !== 'object')
                        {
                            return Object(fruitSizesItem);
                        }
        
                        return fruitSizesItem;
                    }());
                });
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
        
        if('freshPackIntegration' in jsonObject)
        {
            model.freshPackIntegration = (function(){
                if(jsonObject['freshPackIntegration'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['freshPackIntegration'] !== 'object')
                {
                    return Object(jsonObject['freshPackIntegration']);
                }
        
                return jsonObject['freshPackIntegration'];
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
                        if(typeof sourcesItem !== 'object')
                        {
                            return Object(sourcesItem);
                        }
        
                        return sourcesItem;
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

export default CompacSizerModel;