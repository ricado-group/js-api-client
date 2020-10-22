import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import CompacSizerController from '../../../Controllers/Packhouse/Site/CompacSizerController';

/**
 * Model Class for a Compac Sizer
 * @hideconstructor
 * @extends BaseSiteModel
 */
class CompacSizerModel extends BaseSiteModel
{
    /**
     * CompacSizerModel Constructor
     * 
     * @public
     * @param {Object} json - The Compac Sizer Properties
     * @param {?number} json.rtuId - The RTU this Compac Sizer belongs to
     * @param {string} json.name - The Compac Sizer Name
     * @param {Object[]} json.lanes - The Lanes defined for this Compac Sizer
     * @param {Object} json.points - The Points used by this Compac Sizer
     * @param {Object[]} json.outlets - The Outlets defined for this Compac Sizer
     * @param {string} json.sizerType - The Sizer Type
     * @param {number} json.autoCreateBatchDelay - The Auto Create Batch Delay in Seconds for this Compac Sizer
     * @param {Object[]} json.fruitSizes - The Fruit Sizes defined and handled by this Compac Sizer
     * @param {string} json.packingLineId - The Packing Line ID this Compac Sizer belongs to
     * @param {?Object} json.freshPackIntegration - The FreshPack Integration Configuration for this Compac Sizer
     * @param {number} siteId - The Site ID associated with this Compac Sizer
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Compac Sizer
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Compac Sizer ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Compac Sizer belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Compac Sizer Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Compac Sizer Name
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
     * The Lanes defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get lanes()
    {
        return this._json.lanes;
    }

    /**
     * The Lanes defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    set lanes(lanes)
    {
        this._json.lanes = lanes;
        this._updateJson.lanes = lanes;
    }

    /**
     * The Points used by this Compac Sizer
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._json.points;
    }

    /**
     * The Points used by this Compac Sizer
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
     * The Outlets defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get outlets()
    {
        return this._json.outlets;
    }

    /**
     * The Outlets defined for this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    set outlets(outlets)
    {
        this._json.outlets = outlets;
        this._updateJson.outlets = outlets;
    }

    /**
     * The Sizer Type
     * 
     * @public
     * @type {string}
     */
    get sizerType()
    {
        return this._json.sizerType;
    }

    /**
     * The Sizer Type
     * 
     * @public
     * @type {string}
     */
    set sizerType(sizerType)
    {
        this._json.sizerType = sizerType;
        this._updateJson.sizerType = sizerType;
    }

    /**
     * The Auto Create Batch Delay in Seconds for this Compac Sizer
     * 
     * @public
     * @type {number}
     */
    get autoCreateBatchDelay()
    {
        return this._json.autoCreateBatchDelay;
    }

    /**
     * The Auto Create Batch Delay in Seconds for this Compac Sizer
     * 
     * @public
     * @type {number}
     */
    set autoCreateBatchDelay(autoCreateBatchDelay)
    {
        this._json.autoCreateBatchDelay = autoCreateBatchDelay;
        this._updateJson.autoCreateBatchDelay = autoCreateBatchDelay;
    }

    /**
     * The Fruit Sizes defined and handled by this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    get fruitSizes()
    {
        return this._json.fruitSizes;
    }

    /**
     * The Fruit Sizes defined and handled by this Compac Sizer
     * 
     * @public
     * @type {Object[]}
     */
    set fruitSizes(fruitSizes)
    {
        this._json.fruitSizes = fruitSizes;
        this._updateJson.fruitSizes = fruitSizes;
    }

    /**
     * The Packing Line ID this Compac Sizer belongs to
     * 
     * @public
     * @type {string}
     */
    get packingLineId()
    {
        return this._json.packingLineId;
    }

    /**
     * The Packing Line ID this Compac Sizer belongs to
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
     * The FreshPack Integration Configuration for this Compac Sizer
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._json.freshPackIntegration;
    }

    /**
     * The FreshPack Integration Configuration for this Compac Sizer
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
     * Whether the Compac Sizer has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Compac Sizer was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Compac Sizer**
     * 
     * @public
     * @return {Promise<CompacSizerModel>}
     */
    update()
    {
        return CompacSizerController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Compac Sizer**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return CompacSizerController.delete(this._siteId, this._json.id);
    }
}

export default CompacSizerModel;