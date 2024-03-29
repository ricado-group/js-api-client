/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import BinTipBarcodeScannerModel from '../../../Models/Packhouse/Site/BinTipBarcodeScannerModel';

/**
 * Controller Class for Bin Tip Barcode Scanners
 * 
 * @class
 */
class BinTipBarcodeScannerController
{
    /**
     * Retrieve a Bin Tip Barcode Scanner [GET /packhouse/sites/{siteId}/bin-tip-barcode-scanners/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Barcode Scanner ID
     * @return {Promise<BinTipBarcodeScannerModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-barcode-scanners/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipBarcodeScannerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Bin Tip Barcode Scanner [PATCH /packhouse/sites/{siteId}/bin-tip-barcode-scanners/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Barcode Scanner ID
     * @param {BinTipBarcodeScannerController.UpdateData} updateData The Bin Tip Barcode Scanner Update Data
     * @return {Promise<BinTipBarcodeScannerModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/bin-tip-barcode-scanners/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipBarcodeScannerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Bin Tip Barcode Scanner [DELETE /packhouse/sites/{siteId}/bin-tip-barcode-scanners/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Barcode Scanner ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/bin-tip-barcode-scanners/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Bin Tip Barcode Scanners [GET /packhouse/sites/{siteId}/bin-tip-barcode-scanners]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {BinTipBarcodeScannerController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<BinTipBarcodeScannerModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-barcode-scanners`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return BinTipBarcodeScannerModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Bin Tip Barcode Scanner [POST /packhouse/sites/{siteId}/bin-tip-barcode-scanners]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {BinTipBarcodeScannerController.CreateData} createData The Bin Tip Barcode Scanner Create Data
     * @return {Promise<BinTipBarcodeScannerModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/bin-tip-barcode-scanners`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipBarcodeScannerModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default BinTipBarcodeScannerController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} BinTipBarcodeScannerController.GetAllQueryParameters
 * @property {?number} [rtuId] The RTU this Bin Tip Barcode Scanner Belt belongs to
 * @property {string} [name] The Name of this Bin Tip Barcode Scanner
 * @property {string} [binTipId] The Bin Tip that owns this Barcode Scanner
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Bin Tip Barcode Scanner
 * 
 * @typedef {Object} BinTipBarcodeScannerController.CreateData
 * @property {?number} [rtuId] The RTU this Bin Tip Barcode Scanner Belt belongs to
 * @property {string} name The Name of this Bin Tip Barcode Scanner
 * @property {string} binTipId The Bin Tip that owns this Barcode Scanner
 * @property {{scannerCommunicationStatus: number, scannerChargingStatus: number, scannerChargingTimeRemaining: number, scannerBatteryTemperature: number, scannerBatteryPercentage: number, scannerBatteryCurrent: number, scannerBatteryVoltage: number, scannerErrorBeepRequest: number, serviceCommunicationStatus: number, serviceCommunicationLatency: number, restartServiceRequest: number, recentScanResults: number}} points The Points used by this Bin Tip Barcode Scanner
 * @property {string} mode The Mode for this Bin Tip Barcode Scanner
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Bin Tip Barcode Scanner
 * 
 * @typedef {Object} BinTipBarcodeScannerController.UpdateData
 * @property {string} [name] The Name of this Bin Tip Barcode Scanner
 * @property {string} [binTipId] The Bin Tip that owns this Barcode Scanner
 * @property {{scannerCommunicationStatus: number, scannerChargingStatus: number, scannerChargingTimeRemaining: number, scannerBatteryTemperature: number, scannerBatteryPercentage: number, scannerBatteryCurrent: number, scannerBatteryVoltage: number, scannerErrorBeepRequest: number, serviceCommunicationStatus: number, serviceCommunicationLatency: number, restartServiceRequest: number, recentScanResults: number}} [points] The Points used by this Bin Tip Barcode Scanner
 * @property {string} [mode] The Mode for this Bin Tip Barcode Scanner
 * @memberof Controllers.Packhouse.Site
 */