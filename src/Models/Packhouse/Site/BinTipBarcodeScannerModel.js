/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Bin Tip Barcode Scanner
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class BinTipBarcodeScannerModel extends BaseModel
{
    /**
     * BinTipBarcodeScannerModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Bin Tip Barcode Scanner
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Bin Tip Barcode Scanner ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The RTU this Bin Tip Barcode Scanner Belt belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = null;
        
        /**
         * The Name of this Bin Tip Barcode Scanner
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Bin Tip that owns this Barcode Scanner
         * 
         * @type {string}
         * @public
         */
        this.binTipId = "";
        
        /**
         * The Points used by this Bin Tip Barcode Scanner
         * 
         * @type {{scannerCommunicationStatus: number, scannerChargingStatus: number, scannerChargingTimeRemaining: number, scannerBatteryTemperature: number, scannerBatteryPercentage: number, scannerBatteryCurrent: number, scannerBatteryVoltage: number, scannerErrorBeepRequest: number, serviceCommunicationStatus: number, serviceCommunicationLatency: number, restartServiceRequest: number, recentScanResults: number}}
         * @public
         */
        this.points = (function(){
            let pointsDefaultValue = {};
            
            pointsDefaultValue.scannerCommunicationStatus = 0;
            
            pointsDefaultValue.scannerChargingStatus = 0;
            
            pointsDefaultValue.scannerChargingTimeRemaining = 0;
            
            pointsDefaultValue.scannerBatteryTemperature = 0;
            
            pointsDefaultValue.scannerBatteryPercentage = 0;
            
            pointsDefaultValue.scannerBatteryCurrent = 0;
            
            pointsDefaultValue.scannerBatteryVoltage = 0;
            
            pointsDefaultValue.scannerErrorBeepRequest = 0;
            
            pointsDefaultValue.serviceCommunicationStatus = 0;
            
            pointsDefaultValue.serviceCommunicationLatency = 0;
            
            pointsDefaultValue.restartServiceRequest = 0;
            
            pointsDefaultValue.recentScanResults = 0;
            
            return pointsDefaultValue;
        }());
        
        /**
         * The Mode for this Bin Tip Barcode Scanner
         * 
         * @type {string}
         * @public
         */
        this.mode = "";
        
        /**
         * Whether the Bin Tip Barcode Scanner has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Bin Tip Barcode Scanner was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Bin Tip Barcode Scanner
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **BinTipBarcodeScannerModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Bin Tip Barcode Scanner
     * @return {BinTipBarcodeScannerModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new BinTipBarcodeScannerModel(siteId);
        
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
        
        if('points' in jsonObject)
        {
            model.points = (function(){
                let pointsObject = {};
                
                if(typeof jsonObject['points'] === 'object' && 'scannerCommunicationStatus' in jsonObject['points'])
                {
                    pointsObject.scannerCommunicationStatus = (function(){
                        if(typeof jsonObject['points'].scannerCommunicationStatus !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerCommunicationStatus)) ? Number(jsonObject['points'].scannerCommunicationStatus) : Math.floor(Number(jsonObject['points'].scannerCommunicationStatus));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerCommunicationStatus) ? jsonObject['points'].scannerCommunicationStatus : Math.floor(jsonObject['points'].scannerCommunicationStatus);
                    }());
                }
                else
                {
                    pointsObject.scannerCommunicationStatus = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerChargingStatus' in jsonObject['points'])
                {
                    pointsObject.scannerChargingStatus = (function(){
                        if(typeof jsonObject['points'].scannerChargingStatus !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerChargingStatus)) ? Number(jsonObject['points'].scannerChargingStatus) : Math.floor(Number(jsonObject['points'].scannerChargingStatus));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerChargingStatus) ? jsonObject['points'].scannerChargingStatus : Math.floor(jsonObject['points'].scannerChargingStatus);
                    }());
                }
                else
                {
                    pointsObject.scannerChargingStatus = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerChargingTimeRemaining' in jsonObject['points'])
                {
                    pointsObject.scannerChargingTimeRemaining = (function(){
                        if(typeof jsonObject['points'].scannerChargingTimeRemaining !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerChargingTimeRemaining)) ? Number(jsonObject['points'].scannerChargingTimeRemaining) : Math.floor(Number(jsonObject['points'].scannerChargingTimeRemaining));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerChargingTimeRemaining) ? jsonObject['points'].scannerChargingTimeRemaining : Math.floor(jsonObject['points'].scannerChargingTimeRemaining);
                    }());
                }
                else
                {
                    pointsObject.scannerChargingTimeRemaining = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerBatteryTemperature' in jsonObject['points'])
                {
                    pointsObject.scannerBatteryTemperature = (function(){
                        if(typeof jsonObject['points'].scannerBatteryTemperature !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerBatteryTemperature)) ? Number(jsonObject['points'].scannerBatteryTemperature) : Math.floor(Number(jsonObject['points'].scannerBatteryTemperature));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerBatteryTemperature) ? jsonObject['points'].scannerBatteryTemperature : Math.floor(jsonObject['points'].scannerBatteryTemperature);
                    }());
                }
                else
                {
                    pointsObject.scannerBatteryTemperature = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerBatteryPercentage' in jsonObject['points'])
                {
                    pointsObject.scannerBatteryPercentage = (function(){
                        if(typeof jsonObject['points'].scannerBatteryPercentage !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerBatteryPercentage)) ? Number(jsonObject['points'].scannerBatteryPercentage) : Math.floor(Number(jsonObject['points'].scannerBatteryPercentage));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerBatteryPercentage) ? jsonObject['points'].scannerBatteryPercentage : Math.floor(jsonObject['points'].scannerBatteryPercentage);
                    }());
                }
                else
                {
                    pointsObject.scannerBatteryPercentage = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerBatteryCurrent' in jsonObject['points'])
                {
                    pointsObject.scannerBatteryCurrent = (function(){
                        if(typeof jsonObject['points'].scannerBatteryCurrent !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerBatteryCurrent)) ? Number(jsonObject['points'].scannerBatteryCurrent) : Math.floor(Number(jsonObject['points'].scannerBatteryCurrent));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerBatteryCurrent) ? jsonObject['points'].scannerBatteryCurrent : Math.floor(jsonObject['points'].scannerBatteryCurrent);
                    }());
                }
                else
                {
                    pointsObject.scannerBatteryCurrent = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerBatteryVoltage' in jsonObject['points'])
                {
                    pointsObject.scannerBatteryVoltage = (function(){
                        if(typeof jsonObject['points'].scannerBatteryVoltage !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerBatteryVoltage)) ? Number(jsonObject['points'].scannerBatteryVoltage) : Math.floor(Number(jsonObject['points'].scannerBatteryVoltage));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerBatteryVoltage) ? jsonObject['points'].scannerBatteryVoltage : Math.floor(jsonObject['points'].scannerBatteryVoltage);
                    }());
                }
                else
                {
                    pointsObject.scannerBatteryVoltage = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'scannerErrorBeepRequest' in jsonObject['points'])
                {
                    pointsObject.scannerErrorBeepRequest = (function(){
                        if(typeof jsonObject['points'].scannerErrorBeepRequest !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].scannerErrorBeepRequest)) ? Number(jsonObject['points'].scannerErrorBeepRequest) : Math.floor(Number(jsonObject['points'].scannerErrorBeepRequest));
                        }
        
                        return Number.isInteger(jsonObject['points'].scannerErrorBeepRequest) ? jsonObject['points'].scannerErrorBeepRequest : Math.floor(jsonObject['points'].scannerErrorBeepRequest);
                    }());
                }
                else
                {
                    pointsObject.scannerErrorBeepRequest = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'serviceCommunicationStatus' in jsonObject['points'])
                {
                    pointsObject.serviceCommunicationStatus = (function(){
                        if(typeof jsonObject['points'].serviceCommunicationStatus !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].serviceCommunicationStatus)) ? Number(jsonObject['points'].serviceCommunicationStatus) : Math.floor(Number(jsonObject['points'].serviceCommunicationStatus));
                        }
        
                        return Number.isInteger(jsonObject['points'].serviceCommunicationStatus) ? jsonObject['points'].serviceCommunicationStatus : Math.floor(jsonObject['points'].serviceCommunicationStatus);
                    }());
                }
                else
                {
                    pointsObject.serviceCommunicationStatus = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'serviceCommunicationLatency' in jsonObject['points'])
                {
                    pointsObject.serviceCommunicationLatency = (function(){
                        if(typeof jsonObject['points'].serviceCommunicationLatency !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].serviceCommunicationLatency)) ? Number(jsonObject['points'].serviceCommunicationLatency) : Math.floor(Number(jsonObject['points'].serviceCommunicationLatency));
                        }
        
                        return Number.isInteger(jsonObject['points'].serviceCommunicationLatency) ? jsonObject['points'].serviceCommunicationLatency : Math.floor(jsonObject['points'].serviceCommunicationLatency);
                    }());
                }
                else
                {
                    pointsObject.serviceCommunicationLatency = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'restartServiceRequest' in jsonObject['points'])
                {
                    pointsObject.restartServiceRequest = (function(){
                        if(typeof jsonObject['points'].restartServiceRequest !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].restartServiceRequest)) ? Number(jsonObject['points'].restartServiceRequest) : Math.floor(Number(jsonObject['points'].restartServiceRequest));
                        }
        
                        return Number.isInteger(jsonObject['points'].restartServiceRequest) ? jsonObject['points'].restartServiceRequest : Math.floor(jsonObject['points'].restartServiceRequest);
                    }());
                }
                else
                {
                    pointsObject.restartServiceRequest = 0;
                }
                
                if(typeof jsonObject['points'] === 'object' && 'recentScanResults' in jsonObject['points'])
                {
                    pointsObject.recentScanResults = (function(){
                        if(typeof jsonObject['points'].recentScanResults !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].recentScanResults)) ? Number(jsonObject['points'].recentScanResults) : Math.floor(Number(jsonObject['points'].recentScanResults));
                        }
        
                        return Number.isInteger(jsonObject['points'].recentScanResults) ? jsonObject['points'].recentScanResults : Math.floor(jsonObject['points'].recentScanResults);
                    }());
                }
                else
                {
                    pointsObject.recentScanResults = 0;
                }
        
                return pointsObject;
            }());
        }
        
        if('mode' in jsonObject)
        {
            model.mode = (function(){
                if(typeof jsonObject['mode'] !== 'string')
                {
                    return String(jsonObject['mode']);
                }
        
                return jsonObject['mode'];
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

export default BinTipBarcodeScannerModel;