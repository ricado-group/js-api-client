/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';

/**
 * Model Class for a Packing Line
 * 
 * @class
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PackingLineModel extends BaseSiteModel
{
    /**
     * PackingLineModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Packing Line
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Packing Line ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The RTU this Packing Line belongs to
         * 
         * @type {?number}
         * @private
         */
        this._rtuId = undefined;
        
        /**
         * The Packing Line Name
         * 
         * @type {string}
         * @private
         */
        this._name = undefined;
        
        /**
         * The Points used by this Packing Line
         * 
         * @type {Object}
         * @private
         */
        this._points = undefined;
        
        /**
         * The Sizer Objects that belong to this Packing Line
         * 
         * @type {Object[]}
         * @private
         */
        this._sizers = undefined;
        
        /**
         * The Bin Tip Objects that belong to this this Packing Line
         * 
         * @type {Object[]}
         * @private
         */
        this._binTips = undefined;
        
        /**
         * The Reject Bin Scale Objects that belong to this Packing Line
         * 
         * @type {Object[]}
         * @private
         */
        this._rejectBinScales = undefined;
        
        /**
         * The Automation Object for this Packing Line
         * 
         * @type {?Object}
         * @private
         */
        this._automation = undefined;
        
        /**
         * The Alarm Groups that are used by this Packing Line
         * 
         * @type {string[]}
         * @private
         */
        this._alarmGroups = undefined;
        
        /**
         * The Class Types that are defined for this Packing Line
         * 
         * @type {Object[]}
         * @private
         */
        this._classTypes = undefined;
        
        /**
         * The Optional Shift Management Object for this Packing Line
         * 
         * @type {?{points: {currentShiftId: number, createNewDayShiftRequest: number, createNewNightShiftRequest: number, startCurrentShiftRequest: number, finishCurrentShiftRequest: number, currentFocusMeetingId: number, startFocusMeetingRequest: number, finishFocusMeetingRequest: number, shiftSchedules: number}, enabled: boolean}}
         * @private
         */
        this._shiftManagement = undefined;
        
        /**
         * The FreshPack Integration Configuration for this Packing Line
         * 
         * @type {?Object}
         * @private
         */
        this._freshPackIntegration = undefined;
        
        /**
         * The FreshQuality Integration Configuration for this Packing Line
         * 
         * @type {?Object}
         * @private
         */
        this._freshQualityIntegration = undefined;
        
        /**
         * Whether the Packing Line has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Packing Line was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
        
        /**
         * The Site ID associated with this Packing Line
         * 
         * @type {number}
         * @private
         */
        this._siteId = siteId;
    }

    /**
     * The Packing Line ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The RTU this Packing Line belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._rtuId;
    }

    /**
     * The Packing Line Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._name;
    }

    /**
     * The Points used by this Packing Line
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._points;
    }

    /**
     * The Sizer Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get sizers()
    {
        return this._sizers;
    }

    /**
     * The Bin Tip Objects that belong to this this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get binTips()
    {
        return this._binTips;
    }

    /**
     * The Reject Bin Scale Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get rejectBinScales()
    {
        return this._rejectBinScales;
    }

    /**
     * The Automation Object for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get automation()
    {
        return this._automation;
    }

    /**
     * The Alarm Groups that are used by this Packing Line
     * 
     * @public
     * @type {string[]}
     */
    get alarmGroups()
    {
        return this._alarmGroups;
    }

    /**
     * The Class Types that are defined for this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get classTypes()
    {
        return this._classTypes;
    }

    /**
     * The Optional Shift Management Object for this Packing Line
     * 
     * @public
     * @type {?{points: {currentShiftId: number, createNewDayShiftRequest: number, createNewNightShiftRequest: number, startCurrentShiftRequest: number, finishCurrentShiftRequest: number, currentFocusMeetingId: number, startFocusMeetingRequest: number, finishFocusMeetingRequest: number, shiftSchedules: number}, enabled: boolean}}
     */
    get shiftManagement()
    {
        return this._shiftManagement;
    }

    /**
     * The FreshPack Integration Configuration for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._freshPackIntegration;
    }

    /**
     * The FreshQuality Integration Configuration for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get freshQualityIntegration()
    {
        return this._freshQualityIntegration;
    }

    /**
     * Whether the Packing Line has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Packing Line was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * The Site ID associated with this Packing Line
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Convert this **PackingLineModel** to a JSON Object
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
            sizers: this._sizers,
            binTips: this._binTips,
            rejectBinScales: this._rejectBinScales,
            automation: this._automation,
            alarmGroups: this._alarmGroups,
            classTypes: this._classTypes,
            shiftManagement: this._shiftManagement,
            freshPackIntegration: this._freshPackIntegration,
            freshQualityIntegration: this._freshQualityIntegration,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **PackingLineModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Packing Line
     * @return {PackingLineModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PackingLineModel(siteId);
        
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
        
        if('sizers' in jsonObject)
        {
            model._sizers = (function(){
                if(Array.isArray(jsonObject['sizers']) !== true)
                {
                    return [];
                }
        
                return jsonObject['sizers'].map((sizersItem) => {
                    return (function(){
                        if(typeof sizersItem !== 'object')
                        {
                            return Object(sizersItem);
                        }
        
                        return sizersItem;
                    }());
                });
            }());
        }
        
        if('binTips' in jsonObject)
        {
            model._binTips = (function(){
                if(Array.isArray(jsonObject['binTips']) !== true)
                {
                    return [];
                }
        
                return jsonObject['binTips'].map((binTipsItem) => {
                    return (function(){
                        if(typeof binTipsItem !== 'object')
                        {
                            return Object(binTipsItem);
                        }
        
                        return binTipsItem;
                    }());
                });
            }());
        }
        
        if('rejectBinScales' in jsonObject)
        {
            model._rejectBinScales = (function(){
                if(Array.isArray(jsonObject['rejectBinScales']) !== true)
                {
                    return [];
                }
        
                return jsonObject['rejectBinScales'].map((rejectBinScalesItem) => {
                    return (function(){
                        if(typeof rejectBinScalesItem !== 'object')
                        {
                            return Object(rejectBinScalesItem);
                        }
        
                        return rejectBinScalesItem;
                    }());
                });
            }());
        }
        
        if('automation' in jsonObject)
        {
            model._automation = (function(){
                if(jsonObject['automation'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['automation'] !== 'object')
                {
                    return Object(jsonObject['automation']);
                }
        
                return jsonObject['automation'];
            }());
        }
        
        if('alarmGroups' in jsonObject)
        {
            model._alarmGroups = (function(){
                if(Array.isArray(jsonObject['alarmGroups']) !== true)
                {
                    return [];
                }
        
                return jsonObject['alarmGroups'].map((alarmGroupsItem) => {
                    return (function(){
                        if(typeof alarmGroupsItem !== 'string')
                        {
                            return String(alarmGroupsItem);
                        }
        
                        return alarmGroupsItem;
                    }());
                });
            }());
        }
        
        if('classTypes' in jsonObject)
        {
            model._classTypes = (function(){
                if(Array.isArray(jsonObject['classTypes']) !== true)
                {
                    return [];
                }
        
                return jsonObject['classTypes'].map((classTypesItem) => {
                    return (function(){
                        if(typeof classTypesItem !== 'object')
                        {
                            return Object(classTypesItem);
                        }
        
                        return classTypesItem;
                    }());
                });
            }());
        }
        
        if('shiftManagement' in jsonObject)
        {
            model._shiftManagement = (function(){
                if(jsonObject['shiftManagement'] === null)
                {
                    return null;
                }
        
                let shiftManagementObject = {};
                
                if(typeof jsonObject['shiftManagement'] === 'object' && 'points' in jsonObject['shiftManagement'])
                {
                    shiftManagementObject.points = (function(){
                        let pointsObject = {};
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'currentShiftId' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.currentShiftId = (function(){
                                if(typeof jsonObject['shiftManagement'].points.currentShiftId !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.currentShiftId)) ? Number(jsonObject['shiftManagement'].points.currentShiftId) : Math.floor(Number(jsonObject['shiftManagement'].points.currentShiftId));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.currentShiftId) ? jsonObject['shiftManagement'].points.currentShiftId : Math.floor(jsonObject['shiftManagement'].points.currentShiftId);
                            }());
                        }
                        else
                        {
                            pointsObject.currentShiftId = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'createNewDayShiftRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.createNewDayShiftRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.createNewDayShiftRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.createNewDayShiftRequest)) ? Number(jsonObject['shiftManagement'].points.createNewDayShiftRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.createNewDayShiftRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.createNewDayShiftRequest) ? jsonObject['shiftManagement'].points.createNewDayShiftRequest : Math.floor(jsonObject['shiftManagement'].points.createNewDayShiftRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.createNewDayShiftRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'createNewNightShiftRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.createNewNightShiftRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.createNewNightShiftRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.createNewNightShiftRequest)) ? Number(jsonObject['shiftManagement'].points.createNewNightShiftRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.createNewNightShiftRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.createNewNightShiftRequest) ? jsonObject['shiftManagement'].points.createNewNightShiftRequest : Math.floor(jsonObject['shiftManagement'].points.createNewNightShiftRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.createNewNightShiftRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'startCurrentShiftRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.startCurrentShiftRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.startCurrentShiftRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.startCurrentShiftRequest)) ? Number(jsonObject['shiftManagement'].points.startCurrentShiftRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.startCurrentShiftRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.startCurrentShiftRequest) ? jsonObject['shiftManagement'].points.startCurrentShiftRequest : Math.floor(jsonObject['shiftManagement'].points.startCurrentShiftRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.startCurrentShiftRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'finishCurrentShiftRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.finishCurrentShiftRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.finishCurrentShiftRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.finishCurrentShiftRequest)) ? Number(jsonObject['shiftManagement'].points.finishCurrentShiftRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.finishCurrentShiftRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.finishCurrentShiftRequest) ? jsonObject['shiftManagement'].points.finishCurrentShiftRequest : Math.floor(jsonObject['shiftManagement'].points.finishCurrentShiftRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.finishCurrentShiftRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'currentFocusMeetingId' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.currentFocusMeetingId = (function(){
                                if(typeof jsonObject['shiftManagement'].points.currentFocusMeetingId !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.currentFocusMeetingId)) ? Number(jsonObject['shiftManagement'].points.currentFocusMeetingId) : Math.floor(Number(jsonObject['shiftManagement'].points.currentFocusMeetingId));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.currentFocusMeetingId) ? jsonObject['shiftManagement'].points.currentFocusMeetingId : Math.floor(jsonObject['shiftManagement'].points.currentFocusMeetingId);
                            }());
                        }
                        else
                        {
                            pointsObject.currentFocusMeetingId = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'startFocusMeetingRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.startFocusMeetingRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.startFocusMeetingRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.startFocusMeetingRequest)) ? Number(jsonObject['shiftManagement'].points.startFocusMeetingRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.startFocusMeetingRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.startFocusMeetingRequest) ? jsonObject['shiftManagement'].points.startFocusMeetingRequest : Math.floor(jsonObject['shiftManagement'].points.startFocusMeetingRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.startFocusMeetingRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'finishFocusMeetingRequest' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.finishFocusMeetingRequest = (function(){
                                if(typeof jsonObject['shiftManagement'].points.finishFocusMeetingRequest !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.finishFocusMeetingRequest)) ? Number(jsonObject['shiftManagement'].points.finishFocusMeetingRequest) : Math.floor(Number(jsonObject['shiftManagement'].points.finishFocusMeetingRequest));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.finishFocusMeetingRequest) ? jsonObject['shiftManagement'].points.finishFocusMeetingRequest : Math.floor(jsonObject['shiftManagement'].points.finishFocusMeetingRequest);
                            }());
                        }
                        else
                        {
                            pointsObject.finishFocusMeetingRequest = 0;
                        }
                        
                        if(typeof jsonObject['shiftManagement'].points === 'object' && 'shiftSchedules' in jsonObject['shiftManagement'].points)
                        {
                            pointsObject.shiftSchedules = (function(){
                                if(typeof jsonObject['shiftManagement'].points.shiftSchedules !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['shiftManagement'].points.shiftSchedules)) ? Number(jsonObject['shiftManagement'].points.shiftSchedules) : Math.floor(Number(jsonObject['shiftManagement'].points.shiftSchedules));
                                }
        
                                return Number.isInteger(jsonObject['shiftManagement'].points.shiftSchedules) ? jsonObject['shiftManagement'].points.shiftSchedules : Math.floor(jsonObject['shiftManagement'].points.shiftSchedules);
                            }());
                        }
                        else
                        {
                            pointsObject.shiftSchedules = 0;
                        }
        
                        return pointsObject;
                    }());
                }
                else
                {
                    shiftManagementObject.points = (function(){
                        let pointsDefaultValue = {};
                        
                        pointsDefaultValue.currentShiftId = 0;
                        
                        pointsDefaultValue.createNewDayShiftRequest = 0;
                        
                        pointsDefaultValue.createNewNightShiftRequest = 0;
                        
                        pointsDefaultValue.startCurrentShiftRequest = 0;
                        
                        pointsDefaultValue.finishCurrentShiftRequest = 0;
                        
                        pointsDefaultValue.currentFocusMeetingId = 0;
                        
                        pointsDefaultValue.startFocusMeetingRequest = 0;
                        
                        pointsDefaultValue.finishFocusMeetingRequest = 0;
                        
                        pointsDefaultValue.shiftSchedules = 0;
                        
                        return pointsDefaultValue;
                    }());
                }
                
                if(typeof jsonObject['shiftManagement'] === 'object' && 'enabled' in jsonObject['shiftManagement'])
                {
                    shiftManagementObject.enabled = (function(){
                        if(typeof jsonObject['shiftManagement'].enabled !== 'boolean')
                        {
                            return Boolean(jsonObject['shiftManagement'].enabled);
                        }
        
                        return jsonObject['shiftManagement'].enabled;
                    }());
                }
                else
                {
                    shiftManagementObject.enabled = false;
                }
        
                return shiftManagementObject;
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
        
        if('freshQualityIntegration' in jsonObject)
        {
            model._freshQualityIntegration = (function(){
                if(jsonObject['freshQualityIntegration'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['freshQualityIntegration'] !== 'object')
                {
                    return Object(jsonObject['freshQualityIntegration']);
                }
        
                return jsonObject['freshQualityIntegration'];
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

export default PackingLineModel;