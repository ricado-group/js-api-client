/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Bin Tip Barcode Scanner Result
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class BinTipBarcodeScannerResultModel extends BaseModel
{
    /**
     * BinTipBarcodeScannerResultModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Bin Tip Barcode Scanner Result
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Bin Tip Barcode Scanner Result ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The Bin Tip Barcode Scanner ID associated with this Result
         * 
         * @type {string}
         * @public
         */
        this.barcodeScannerId = "";
        
        /**
         * A 10-Digit Bin Number made up of a Bin Lot (4-Digits) and a Unique Number (6-Digits)
         * 
         * @type {string}
         * @public
         */
        this.binNumber = "";
        
        /**
         * When this Barcode Scanner Result was Created
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Mode of the Barcode Scanner when creating this Barcode Scanner Result
         * 
         * @type {string}
         * @public
         */
        this.scanMode = "";
        
        /**
         * The Packrun ID associated with this Barcode Scanner Result
         * 
         * @type {?string}
         * @public
         */
        this.packrunId = null;
        
        /**
         * Whether the Bin Number was Valid and could be matched with a Current or Scheduled Packrun
         * 
         * @type {boolean}
         * @public
         */
        this.result = false;
        
        /**
         * An Optional Message to accompany the Result. Typically only present when the Result is **false**
         * 
         * @type {?string}
         * @public
         */
        this.resultMessage = null;
        
        /**
         * The Bin Lot Code of this Barcode Scanner Result
         * 
         * @type {?string}
         * @public
         */
        this.binLotCode = null;
        
        /**
         * Whether the Bin Tip Barcode Scanner Result has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Bin Tip Barcode Scanner Result was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Bin Tip Barcode Scanner Result
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **BinTipBarcodeScannerResultModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Bin Tip Barcode Scanner Result
     * @return {BinTipBarcodeScannerResultModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new BinTipBarcodeScannerResultModel(siteId);
        
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
        
        if('barcodeScannerId' in jsonObject)
        {
            model.barcodeScannerId = (function(){
                if(typeof jsonObject['barcodeScannerId'] !== 'string')
                {
                    return String(jsonObject['barcodeScannerId']);
                }
        
                return jsonObject['barcodeScannerId'];
            }());
        }
        
        if('binNumber' in jsonObject)
        {
            model.binNumber = (function(){
                if(typeof jsonObject['binNumber'] !== 'string')
                {
                    return String(jsonObject['binNumber']);
                }
        
                return jsonObject['binNumber'];
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
        
        if('scanMode' in jsonObject)
        {
            model.scanMode = (function(){
                if(typeof jsonObject['scanMode'] !== 'string')
                {
                    return String(jsonObject['scanMode']);
                }
        
                return jsonObject['scanMode'];
            }());
        }
        
        if('packrunId' in jsonObject)
        {
            model.packrunId = (function(){
                if(jsonObject['packrunId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['packrunId'] !== 'string')
                {
                    return String(jsonObject['packrunId']);
                }
        
                return jsonObject['packrunId'];
            }());
        }
        
        if('result' in jsonObject)
        {
            model.result = (function(){
                if(typeof jsonObject['result'] !== 'boolean')
                {
                    return Boolean(jsonObject['result']);
                }
        
                return jsonObject['result'];
            }());
        }
        
        if('resultMessage' in jsonObject)
        {
            model.resultMessage = (function(){
                if(jsonObject['resultMessage'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['resultMessage'] !== 'string')
                {
                    return String(jsonObject['resultMessage']);
                }
        
                return jsonObject['resultMessage'];
            }());
        }
        
        if('binLotCode' in jsonObject)
        {
            model.binLotCode = (function(){
                if(jsonObject['binLotCode'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['binLotCode'] !== 'string')
                {
                    return String(jsonObject['binLotCode']);
                }
        
                return jsonObject['binLotCode'];
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

export default BinTipBarcodeScannerResultModel;