/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Compac Sizer
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerModel extends BaseSiteModel
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
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Compac Sizer belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Compac Sizer Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Lanes defined for this Compac Sizer
         * 
         * @type {Object[]}
         * @private
         */
        this._lanes = undefined;
        
        /**
         * The Points used by this Compac Sizer
         * 
         * @type {Object}
         * @private
         */
        this._points = undefined;
        
        /**
         * The Outlets defined for this Compac Sizer
         * 
         * @type {Object[]}
         * @private
         */
        this._outlets = undefined;
        
        /**
         * The Sizer Type
         * 
         * @type {string}
         * @private
         */
        this._sizerType = undefined;
        
        /**
         * The Auto Create Batch Delay in Seconds for this Compac Sizer
         * 
         * @type {number}
         * @private
         */
        this._autoCreateBatchDelay = undefined;
        
        /**
         * The Fruit Sizes defined and handled by this Compac Sizer
         * 
         * @type {Object[]}
         * @private
         */
        this._fruitSizes = undefined;
        
        /**
         * The Packing Line ID this Compac Sizer belongs to
         * 
         * @type {string}
         * @private
         */
        this._packingLineId = undefined;
        
        /**
         * The FreshPack Integration Configuration for this Compac Sizer
         * 
         * @type {?Object}
         * @private
         */
        this._freshPackIntegration = undefined;
        
        /**
         * An Array of Sources that deliver Fruit to this Compac Sizer
         * 
         * @type {Object[]}
         * @private
         */
        this._sources = undefined;
        
        /**
         * Whether the Compac Sizer has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Compac Sizer was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Compac Sizer
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Compac Sizer ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Compac Sizer belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Compac Sizer Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Lanes defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get lanes()
    {
        return this._lanes;
    }

    /**
     * The Points used by this Compac Sizer
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._points;
    }

    /**
     * The Outlets defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get outlets()
    {
        return this._outlets;
    }

    /**
     * The Sizer Type
     * 
     * @public
     * @type {string}
     */
    get sizerType()
    {
        return this._sizerType;
    }

    /**
     * The Auto Create Batch Delay in Seconds for this Compac Sizer
     * 
     * @public
     * @type {number}
     */
    get autoCreateBatchDelay()
    {
        return this._autoCreateBatchDelay;
    }

    /**
     * The Fruit Sizes defined and handled by this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get fruitSizes()
    {
        return this._fruitSizes;
    }

    /**
     * The Packing Line ID this Compac Sizer belongs to
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._packingLineId;
    }

    /**
     * The FreshPack Integration Configuration for this Compac Sizer
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._freshPackIntegration;
    }

    /**
     * An Array of Sources that deliver Fruit to this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get sources()
    {
        return this._sources;
    }

    /**
     * Whether the Compac Sizer has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Compac Sizer was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Compac Sizer
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **CompacSizerModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            rtuId: this._rtuId,
            name: this._name,
            lanes: this._lanes,
            points: this._points,
            outlets: this._outlets,
            sizerType: this._sizerType,
            autoCreateBatchDelay: this._autoCreateBatchDelay,
            fruitSizes: this._fruitSizes,
            packingLineId: this._packingLineId,
            freshPackIntegration: this._freshPackIntegration,
            sources: this._sources,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
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
            model._id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('rtuId' in jsonObject)
        {
            model._rtuId = (function(){
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
            model._name = (function(){
                if(typeof jsonObject['name'] !== 'string')
                {
                    return String(jsonObject['name']);
                }
        
                return jsonObject['name'];
            }());
        }
        
        if('lanes' in jsonObject)
        {
            model._lanes = (function(){
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
            model._points = (function(){
                if(typeof jsonObject['points'] !== 'object')
                {
                    return Object(jsonObject['points']);
                }
        
                return jsonObject['points'];
            }());
        }
        
        if('outlets' in jsonObject)
        {
            model._outlets = (function(){
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
            model._sizerType = (function(){
                if(typeof jsonObject['sizerType'] !== 'string')
                {
                    return String(jsonObject['sizerType']);
                }
        
                return jsonObject['sizerType'];
            }());
        }
        
        if('autoCreateBatchDelay' in jsonObject)
        {
            model._autoCreateBatchDelay = (function(){
                if(typeof jsonObject['autoCreateBatchDelay'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['autoCreateBatchDelay'])) ? Number(jsonObject['autoCreateBatchDelay']) : Math.floor(Number(jsonObject['autoCreateBatchDelay']));
                }
        
                return Number.isInteger(jsonObject['autoCreateBatchDelay']) ? jsonObject['autoCreateBatchDelay'] : Math.floor(jsonObject['autoCreateBatchDelay']);
            }());
        }
        
        if('fruitSizes' in jsonObject)
        {
            model._fruitSizes = (function(){
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
            model._packingLineId = (function(){
                if(typeof jsonObject['packingLineId'] !== 'string')
                {
                    return String(jsonObject['packingLineId']);
                }
        
                return jsonObject['packingLineId'];
            }());
        }
        
        if('freshPackIntegration' in jsonObject)
        {
            model._freshPackIntegration = (function(){
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
            model._sources = (function(){
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

export default CompacSizerModel;