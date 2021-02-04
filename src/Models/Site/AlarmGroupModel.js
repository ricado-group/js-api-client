/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Alarm Group
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class AlarmGroupModel extends BaseSiteModel
{
    /**
     * AlarmGroupModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Alarm Group
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Alarm Group ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Alarm Group belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Alarm Group Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Boolean Point used to Reset this Alarm Group
         * 
         * @type {number}
         * @private
         */
        this._resetPoint = undefined;
        
        /**
         * An Array of Points and the States to be Written when this Alarm Group is Reset
         * 
         * @type {Array<{point: number, value: boolean}>}
         * @private
         */
        this._externalResetPoints = undefined;
        
        /**
         * Whether the Alarm Group has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Alarm Group was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Alarm Group
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Alarm Group ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Alarm Group belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Alarm Group Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Boolean Point used to Reset this Alarm Group
     * 
     * @public
     * @type {number}
     */
    get resetPoint()
    {
        return this._resetPoint;
    }

    /**
     * An Array of Points and the States to be Written when this Alarm Group is Reset
     * 
     * @public
     * @type {Array<{point: number, value: boolean}>}
     */
    get externalResetPoints()
    {
        return this._externalResetPoints;
    }

    /**
     * Whether the Alarm Group has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Alarm Group was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Alarm Group
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Create a new **AlarmGroupModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Alarm Group
     * @return {AlarmGroupModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new AlarmGroupModel(siteId);
        
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
        
        if('resetPoint' in jsonObject)
        {
            model._resetPoint = (function(){
                if(typeof jsonObject['resetPoint'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['resetPoint'])) ? Number(jsonObject['resetPoint']) : Math.floor(Number(jsonObject['resetPoint']));
                }
        
                return Number.isInteger(jsonObject['resetPoint']) ? jsonObject['resetPoint'] : Math.floor(jsonObject['resetPoint']);
            }());
        }
        
        if('externalResetPoints' in jsonObject)
        {
            model._externalResetPoints = (function(){
                if(Array.isArray(jsonObject['externalResetPoints']) !== true)
                {
                    return [];
                }
        
                return jsonObject['externalResetPoints'].map((externalResetPointsItem) => {
                    return (function(){
                        let externalResetPointsItemObject = {};
                        
                        if(typeof externalResetPointsItem === 'object' && 'point' in externalResetPointsItem)
                        {
                            externalResetPointsItemObject.point = (function(){
                                if(typeof externalResetPointsItem.point !== 'number')
                                {
                                    return Number.isInteger(Number(externalResetPointsItem.point)) ? Number(externalResetPointsItem.point) : Math.floor(Number(externalResetPointsItem.point));
                                }
        
                                return Number.isInteger(externalResetPointsItem.point) ? externalResetPointsItem.point : Math.floor(externalResetPointsItem.point);
                            }());
                        }
                        else
                        {
                            externalResetPointsItemObject.point = 0;
                        }
                        
                        if(typeof externalResetPointsItem === 'object' && 'value' in externalResetPointsItem)
                        {
                            externalResetPointsItemObject.value = (function(){
                                if(typeof externalResetPointsItem.value !== 'boolean')
                                {
                                    return Boolean(externalResetPointsItem.value);
                                }
        
                                return externalResetPointsItem.value;
                            }());
                        }
                        else
                        {
                            externalResetPointsItemObject.value = false;
                        }
        
                        return externalResetPointsItemObject;
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

export default AlarmGroupModel;