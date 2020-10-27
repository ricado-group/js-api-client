/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import BinTipWeightController from '../../../Controllers/Packhouse/Site/BinTipWeightController';

/**
 * Model Class for a Bin Tip Weight
 * @hideconstructor
 * @extends BaseSiteModel
 */
class BinTipWeightModel extends BaseSiteModel
{
    /**
     * BinTipWeightModel Constructor
     * 
     * @public
     * @param {Object<string, any>} json The Bin Tip Weight Properties
     * @param {number} siteId The Site ID associated with this Bin Tip Weight
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * The Properties to Update for a Bin Tip Weight
         * 
         * @type {Object<string, any>}
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Bin Tip Weight ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Bin Tip ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    get binTipId()
    {
        return this._json.binTipId;
    }

    /**
     * The Bin Tip ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    set binTipId(value)
    {
        this._json.binTipId = value;
        this._updateJson.binTipId = value;
    }

    /**
     * The Packrun ID associated with this Bin Weight
     * 
     * @public
     * @type {string}
     */
    get packrunId()
    {
        return this._json.packrunId;
    }

    /**
     * When this Bin Weight was Created
     * 
     * @public
     * @type {Date}
     */
    get createdTimestamp()
    {
        return this._json.createdTimestamp;
    }

    /**
     * When this Bin Weight was Created
     * 
     * @public
     * @type {Date}
     */
    set createdTimestamp(value)
    {
        this._json.createdTimestamp = value;
        this._updateJson.createdTimestamp = value;
    }

    /**
     * The Bin Weight Type
     * 
     * @public
     * @type {string}
     */
    get weightType()
    {
        return this._json.weightType;
    }

    /**
     * The Bin Weight Type
     * 
     * @public
     * @type {string}
     */
    set weightType(value)
    {
        this._json.weightType = value;
        this._updateJson.weightType = value;
    }

    /**
     * The Bin Weight
     * 
     * @public
     * @type {number}
     */
    get weight()
    {
        return this._json.weight;
    }

    /**
     * The Bin Weight
     * 
     * @public
     * @type {number}
     */
    set weight(value)
    {
        this._json.weight = value;
        this._updateJson.weight = value;
    }

    /**
     * The Bin Scale ID associated with this Bin Weight
     * 
     * @public
     * @type {?string}
     */
    get binScaleId()
    {
        return this._json.binScaleId;
    }

    /**
     * The Bin Scale ID associated with this Bin Weight
     * 
     * @public
     * @type {?string}
     */
    set binScaleId(value)
    {
        this._json.binScaleId = value;
        this._updateJson.binScaleId = value;
    }

    /**
     * Whether the Bin Tip Weight has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Bin Tip Weight was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * The Site ID associated with this Bin Tip Weight
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Update this **Bin Tip Weight**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    update()
    {
        return new Promise((resolve, reject) => {
            BinTipWeightController.update(this._siteId, this._json.id, this._updateJson)
            .then((modelResult) => {
                // TODO: Validate the Model Result, Replace everything in this Model with the Model Result, Return True
                
                resolve(true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete this **Bin Tip Weight**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return BinTipWeightController.delete(this._siteId, this._json.id);
    }
}

export default BinTipWeightModel;