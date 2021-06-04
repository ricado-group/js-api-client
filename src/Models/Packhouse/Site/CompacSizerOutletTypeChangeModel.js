/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Compac Sizer Outlet Type Change
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerOutletTypeChangeModel extends BaseSiteModel
{
    /**
     * CompacSizerOutletTypeChangeModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Compac Sizer Outlet Type Change
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Compac Sizer Outlet Type Change ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Compac Sizer ID this Outlet Type Change is associated with
         * 
         * @type {string}
         * @private
         */
        this._compacSizerId = undefined;
        
        /**
         * The Sizer Outlet Number this Outlet Type Change is associated with
         * 
         * @type {string}
         * @private
         */
        this._outletNumber = undefined;
        
        /**
         * When this Outlet Type Change occurred
         * 
         * @type {Date}
         * @private
         */
        this._createdTimestamp = undefined;
        
        /**
         * The ID of the Previous Type that was active on the Outlet
         * 
         * @type {?string}
         * @private
         */
        this._previousTypeId = undefined;
        
        /**
         * The ID of the New Type that is now active on the Outlet
         * 
         * @type {string}
         * @private
         */
        this._newTypeId = undefined;
        
        /**
         * Whether the Compac Sizer Outlet Type Change has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Compac Sizer Outlet Type Change was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Compac Sizer Outlet Type Change
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Compac Sizer Outlet Type Change ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Compac Sizer ID this Outlet Type Change is associated with
     * 
     * @public
     * @type {string}
     */
    get compacSizerId()
    {
        return this._compacSizerId;
    }

    /**
     * The Sizer Outlet Number this Outlet Type Change is associated with
     * 
     * @public
     * @type {string}
     */
    get outletNumber()
    {
        return this._outletNumber;
    }

    /**
     * When this Outlet Type Change occurred
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._createdTimestamp;
    }

    /**
     * The ID of the Previous Type that was active on the Outlet
     * 
     * @public
     * @type {?string}
     */
    get previousTypeId()
    {
        return this._previousTypeId;
    }

    /**
     * The ID of the New Type that is now active on the Outlet
     * 
     * @public
     * @type {string}
     */
    get newTypeId()
    {
        return this._newTypeId;
    }

    /**
     * Whether the Compac Sizer Outlet Type Change has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Compac Sizer Outlet Type Change was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Compac Sizer Outlet Type Change
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **CompacSizerOutletTypeChangeModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            compacSizerId: this._compacSizerId,
            outletNumber: this._outletNumber,
            createdTimestamp: this._createdTimestamp,
            previousTypeId: this._previousTypeId,
            newTypeId: this._newTypeId,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **CompacSizerOutletTypeChangeModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Compac Sizer Outlet Type Change
     * @return {CompacSizerOutletTypeChangeModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new CompacSizerOutletTypeChangeModel(siteId);
        
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
        
        if('compacSizerId' in jsonObject)
        {
            model._compacSizerId = (function(){
                if(typeof jsonObject['compacSizerId'] !== 'string')
                {
                    return String(jsonObject['compacSizerId']);
                }
        
                return jsonObject['compacSizerId'];
            }());
        }
        
        if('outletNumber' in jsonObject)
        {
            model._outletNumber = (function(){
                if(typeof jsonObject['outletNumber'] !== 'string')
                {
                    return String(jsonObject['outletNumber']);
                }
        
                return jsonObject['outletNumber'];
            }());
        }
        
        if('createdTimestamp' in jsonObject)
        {
            model._createdTimestamp = (function(){
                if(typeof jsonObject['createdTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['createdTimestamp']));
                }
        
                return new Date(jsonObject['createdTimestamp']);
            }());
        }
        
        if('previousTypeId' in jsonObject)
        {
            model._previousTypeId = (function(){
                if(jsonObject['previousTypeId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['previousTypeId'] !== 'string')
                {
                    return String(jsonObject['previousTypeId']);
                }
        
                return jsonObject['previousTypeId'];
            }());
        }
        
        if('newTypeId' in jsonObject)
        {
            model._newTypeId = (function(){
                if(typeof jsonObject['newTypeId'] !== 'string')
                {
                    return String(jsonObject['newTypeId']);
                }
        
                return jsonObject['newTypeId'];
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

export default CompacSizerOutletTypeChangeModel;