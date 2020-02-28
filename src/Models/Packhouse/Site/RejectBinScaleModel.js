import PermanentObjectModel from '../../../Models/Site/PermanentObjectModel';
import RejectBinScaleController from '../../../Controllers/Packhouse/Site/RejectBinScaleController';

/**
 * Model Class for a Reject Bin Scale
 * @extends PermanentObjectModel
 */
class RejectBinScaleModel extends PermanentObjectModel {
    /**
     * RejectBinScaleModel Constructor
     * 
     * @private
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);
    }

    /**
     * Properties
     */


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
     * The RTU this Permanent Object belongs to
     * 
     * @public
     * @type {number}
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

    set packingLineId(packingLineId)
    {
        this._json.packingLineId = packingLineId;
        this._updateJson.packingLineId = packingLineId;
    }

    /**
     * The Permanent Object that provides the Next Packrun for this Reject Bin Scale
     * 
     * @public
     * @type {string}
     */
    get packrunSourceId()
    {
        return this._json.packrunSourceId;
    }

    set packrunSourceId(packrunSourceId)
    {
        this._json.packrunSourceId = packrunSourceId;
        this._updateJson.packrunSourceId = packrunSourceId;
    }

    /**
     * The Packrun Group this Reject Bin Scale is a part of
     * 
     * @public
     * @type {number}
     */
    get packrunGroup()
    {
        return this._json.packrunGroup;
    }

    set packrunGroup(packrunGroup)
    {
        this._json.packrunGroup = packrunGroup;
        this._updateJson.packrunGroup = packrunGroup;
    }

    /**
     * An Array of Sources that deliver Fruit to this Reject Bin Scale
     * 
     * @public
     * @type {Array}
     */
    get sources()
    {
        return this._json.sources;
    }

    set sources(sources)
    {
        this._json.sources = sources;
        this._updateJson.sources = sources;
    }

    /**
     * The Auto Packrun Change Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {Object}
     */
    get autoPackrunChange()
    {
        return this._json.autoPackrunChange;
    }

    set autoPackrunChange(autoPackrunChange)
    {
        this._json.autoPackrunChange = autoPackrunChange;
        this._updateJson.autoPackrunChange = autoPackrunChange;
    }

    /**
     * The FreshPack Integration Configuration for this Reject Bin Scale
     * 
     * @public
     * @type {Object}
     */
    get freshPackIntegration()
    {
        return this._json.freshPackIntegration;
    }

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
     * Methods
     */


    /**
     * Update this Reject Bin Scale
     * 
     * @public
     * @return {Promise<RejectBinScaleModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || RejectBinScaleController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Reject Bin Scale
     * 
     * @public
     * @return {Promise<RejectBinScaleModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || RejectBinScaleController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The RejectBinScaleModel cannot be Replaced");
    }
}

export default RejectBinScaleModel;