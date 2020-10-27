/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import RejectBinScaleController from '../../../Controllers/Packhouse/Site/RejectBinScaleController';

/**
 * Model Class for a Reject Bin Scale
 * @hideconstructor
 * @extends BaseSiteModel
 */
class RejectBinScaleModel extends BaseSiteModel
{
    /**
     * RejectBinScaleModel Constructor
     * 
     * @public
     * @param {Object<string, any>} json The Reject Bin Scale Properties
     * @param {number} siteId The Site ID associated with this Reject Bin Scale
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * The Properties to Update for a Reject Bin Scale
         * 
         * @type {Object<string, any>}
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Reject Bin Scale ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Reject Bin Scale belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Name of this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Name of this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    set name(value)
    {
        this._json.name = value;
        this._updateJson.name = value;
    }

    /**
     * The Points used by this Reject Bin Scale
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._json.points;
    }

    /**
     * The Points used by this Reject Bin Scale
     * 
     * @public
     * @type {Object}
     */
    set points(value)
    {
        this._json.points = value;
        this._updateJson.points = value;
    }

    /**
     * The Packing Line that owns this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._json.packingLineId;
    }

    /**
     * The Packing Line that owns this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    set packingLineId(value)
    {
        this._json.packingLineId = value;
        this._updateJson.packingLineId = value;
    }

    /**
     * The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * 
     * @public
     * @type {?string}
     */
    get packrunSourceId()
    {
        return this._json.packrunSourceId;
    }

    /**
     * The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * 
     * @public
     * @type {?string}
     */
    set packrunSourceId(value)
    {
        this._json.packrunSourceId = value;
        this._updateJson.packrunSourceId = value;
    }

    /**
     * The Packrun Group this Reject Bin Scale is a part of
     * 
     * @public
     * @type {?number}
     */
    get packrunGroup()
    {
        return this._json.packrunGroup;
    }

    /**
     * The Packrun Group this Reject Bin Scale is a part of
     * 
     * @public
     * @type {?number}
     */
    set packrunGroup(value)
    {
        this._json.packrunGroup = value;
        this._updateJson.packrunGroup = value;
    }

    /**
     * An Array of Sources that deliver Fruit to this Reject Bin Scale
     * 
     * @public
     * @type {Object[]}
     */
    get sources()
    {
        return this._json.sources;
    }

    /**
     * An Array of Sources that deliver Fruit to this Reject Bin Scale
     * 
     * @public
     * @type {Object[]}
     */
    set sources(value)
    {
        this._json.sources = value;
        this._updateJson.sources = value;
    }

    /**
     * The Auto Packrun Change Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?Object}
     */
    get autoPackrunChange()
    {
        return this._json.autoPackrunChange;
    }

    /**
     * The Auto Packrun Change Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?Object}
     */
    set autoPackrunChange(value)
    {
        this._json.autoPackrunChange = value;
        this._updateJson.autoPackrunChange = value;
    }

    /**
     * The FreshPack Integration Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._json.freshPackIntegration;
    }

    /**
     * The FreshPack Integration Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {?Object}
     */
    set freshPackIntegration(value)
    {
        this._json.freshPackIntegration = value;
        this._updateJson.freshPackIntegration = value;
    }

    /**
     * Whether the Reject Bin Scale has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Reject Bin Scale was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
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
     * Update this **Reject Bin Scale**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    update()
    {
        return new Promise((resolve, reject) => {
            RejectBinScaleController.update(this._siteId, this._json.id, this._updateJson)
            .then((modelResult) => {
                // TODO: Validate the Model Result, Replace everything in this Model with the Model Result, Return True
                
                resolve(true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete this **Reject Bin Scale**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return RejectBinScaleController.delete(this._siteId, this._json.id);
    }
}

export default RejectBinScaleModel;