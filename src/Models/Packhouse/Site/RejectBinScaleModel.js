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
     * @param {Object} json - The Reject Bin Scale Properties
     * @param {?number} json.rtuId - The RTU this Reject Bin Scale belongs to
     * @param {string} json.name - The Name of this Reject Bin Scale
     * @param {Object} json.points - The Points used by this Reject Bin Scale
     * @param {string} json.packingLineId - The Packing Line that owns this Reject Bin Scale
     * @param {?string} json.packrunSourceId - The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * @param {?number} json.packrunGroup - The Packrun Group this Reject Bin Scale is a part of
     * @param {Object[]} json.sources - An Array of Sources that deliver Fruit to this Reject Bin Scale
     * @param {?Object} json.autoPackrunChange - The Auto Packrun Change Configuration for this Reject Bin Scale
     * @param {?Object} json.freshPackIntegration - The FreshPack Integration Configuration for this Reject Bin Scale
     * @param {number} siteId - The Site ID associated with this Reject Bin Scale
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Reject Bin Scale
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
    set name(name)
    {
        this._json.name = name;
        this._updateJson.name = name;
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
    set points(points)
    {
        this._json.points = points;
        this._updateJson.points = points;
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
    set packingLineId(packingLineId)
    {
        this._json.packingLineId = packingLineId;
        this._updateJson.packingLineId = packingLineId;
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
    set packrunSourceId(packrunSourceId)
    {
        this._json.packrunSourceId = packrunSourceId;
        this._updateJson.packrunSourceId = packrunSourceId;
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
    set packrunGroup(packrunGroup)
    {
        this._json.packrunGroup = packrunGroup;
        this._updateJson.packrunGroup = packrunGroup;
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
    set sources(sources)
    {
        this._json.sources = sources;
        this._updateJson.sources = sources;
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
    set autoPackrunChange(autoPackrunChange)
    {
        this._json.autoPackrunChange = autoPackrunChange;
        this._updateJson.autoPackrunChange = autoPackrunChange;
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
    set freshPackIntegration(freshPackIntegration)
    {
        this._json.freshPackIntegration = freshPackIntegration;
        this._updateJson.freshPackIntegration = freshPackIntegration;
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
     * Update this **Reject Bin Scale**
     * 
     * @public
     * @return {Promise<RejectBinScaleModel>}
     */
    update()
    {
        return RejectBinScaleController.update(this._siteId, this._json.id, this._updateJson);
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