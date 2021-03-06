/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Reject Bin Scale
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class RejectBinScaleModel extends BaseSiteModel
{
    /**
     * RejectBinScaleModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Reject Bin Scale
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Reject Bin Scale ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Reject Bin Scale belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Name of this Reject Bin Scale
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Points used by this Reject Bin Scale
         * 
         * @type {Object}
         * @private
         */
        this._points = undefined;
        
        /**
         * The Packing Line that owns this Reject Bin Scale
         * 
         * @type {string}
         * @private
         */
        this._packingLineId = undefined;
        
        /**
         * The Permanent Object that provides the Next Packrun for this Reject Bin Scale
         * 
         * @type {?string}
         * @private
         */
        this._packrunSourceId = undefined;
        
        /**
         * The Packrun Group this Reject Bin Scale is a part of
         * 
         * @type {?number}
         * @private
         */
        this._packrunGroup = undefined;
        
        /**
         * An Array of Sources that deliver Fruit to this Reject Bin Scale
         * 
         * @type {Object[]}
         * @private
         */
        this._sources = undefined;
        
        /**
         * The Auto Packrun Change Configuration for this Reject Bin Scale
         * 
         * @type {?number}
         * @private
         */
        this._autoPackrunChange = undefined;
        
        /**
         * The FreshPack Integration Configuration for this Reject Bin Scale
         * 
         * @type {?Object}
         * @private
         */
        this._freshPackIntegration = undefined;
        
        /**
         * Whether the Reject Bin Scale has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Reject Bin Scale was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Reject Bin Scale
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Reject Bin Scale ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Reject Bin Scale belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Name of this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Points used by this Reject Bin Scale
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._points;
    }

    /**
     * The Packing Line that owns this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._packingLineId;
    }

    /**
     * The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * 
     * @public
     * @type {?string}
     */
    get packrunSourceId()
    {
        return this._packrunSourceId;
    }

    /**
     * The Packrun Group this Reject Bin Scale is a part of
     * 
     * @public
     * @type {?number}
     */
    get packrunGroup()
    {
        return this._packrunGroup;
    }

    /**
     * An Array of Sources that deliver Fruit to this Reject Bin Scale
     * 
     * @public
     * @type {Object[]}
     */
    get sources()
    {
        return this._sources;
    }

    /**
     * The Auto Packrun Change Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?number}
     */
    get autoPackrunChange()
    {
        return this._autoPackrunChange;
    }

    /**
     * The FreshPack Integration Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._freshPackIntegration;
    }

    /**
     * Whether the Reject Bin Scale has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Reject Bin Scale was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Reject Bin Scale
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **RejectBinScaleModel** to a JSON Object
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
            points: this._points,
            packingLineId: this._packingLineId,
            packrunSourceId: this._packrunSourceId,
            packrunGroup: this._packrunGroup,
            sources: this._sources,
            autoPackrunChange: this._autoPackrunChange,
            freshPackIntegration: this._freshPackIntegration,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **RejectBinScaleModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Reject Bin Scale
     * @return {RejectBinScaleModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new RejectBinScaleModel(siteId);
        
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
        
        if('packrunSourceId' in jsonObject)
        {
            model._packrunSourceId = (function(){
                if(jsonObject['packrunSourceId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['packrunSourceId'] !== 'string')
                {
                    return String(jsonObject['packrunSourceId']);
                }
        
                return jsonObject['packrunSourceId'];
            }());
        }
        
        if('packrunGroup' in jsonObject)
        {
            model._packrunGroup = (function(){
                if(jsonObject['packrunGroup'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['packrunGroup'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['packrunGroup'])) ? Number(jsonObject['packrunGroup']) : Math.floor(Number(jsonObject['packrunGroup']));
                }
        
                return Number.isInteger(jsonObject['packrunGroup']) ? jsonObject['packrunGroup'] : Math.floor(jsonObject['packrunGroup']);
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
        
        if('autoPackrunChange' in jsonObject)
        {
            model._autoPackrunChange = (function(){
                if(jsonObject['autoPackrunChange'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['autoPackrunChange'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['autoPackrunChange'])) ? Number(jsonObject['autoPackrunChange']) : Math.floor(Number(jsonObject['autoPackrunChange']));
                }
        
                return Number.isInteger(jsonObject['autoPackrunChange']) ? jsonObject['autoPackrunChange'] : Math.floor(jsonObject['autoPackrunChange']);
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

export default RejectBinScaleModel;