import PermanentObjectModel from '../../../Models/Site/PermanentObjectModel';
import PackingLineController from '../../../Controllers/Packhouse/Site/PackingLineController';

/**
 * Model Class for a Packing Line
 * @extends PermanentObjectModel
 */
class PackingLineModel extends PermanentObjectModel {
    /**
     * PackingLineModel Constructor
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
     * The Packing Line ID
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
     * The Packing Line Name
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
     * The Points used by this Packing Line
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
     * The Sizer Objects that belong to this Packing Line
     * 
     * @public
     * @type {Array}
     */
    get sizers()
    {
        return this._json.sizers;
    }

    set sizers(sizers)
    {
        this._json.sizers = sizers;
        this._updateJson.sizers = sizers;
    }

    /**
     * The Bin Tip Objects that belong to this this Packing Line
     * 
     * @public
     * @type {Array}
     */
    get binTips()
    {
        return this._json.binTips;
    }

    set binTips(binTips)
    {
        this._json.binTips = binTips;
        this._updateJson.binTips = binTips;
    }

    /**
     * The Reject Bin Scale Objects that belong to this Packing Line
     * 
     * @public
     * @type {Array}
     */
    get rejectBinScales()
    {
        return this._json.rejectBinScales;
    }

    set rejectBinScales(rejectBinScales)
    {
        this._json.rejectBinScales = rejectBinScales;
        this._updateJson.rejectBinScales = rejectBinScales;
    }

    /**
     * The Automation Object for this Packing Line
     * 
     * @public
     * @type {Object}
     */
    get automation()
    {
        return this._json.automation;
    }

    set automation(automation)
    {
        this._json.automation = automation;
        this._updateJson.automation = automation;
    }

    /**
     * The Alarm Groups that are used by this Packing Line
     * 
     * @public
     * @type {Array}
     */
    get alarmGroups()
    {
        return this._json.alarmGroups;
    }

    set alarmGroups(alarmGroups)
    {
        this._json.alarmGroups = alarmGroups;
        this._updateJson.alarmGroups = alarmGroups;
    }

    /**
     * Whether the Packing Line has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Packing Line was last updated
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
     * Update this Packing Line
     * 
     * @public
     * @return {Promise<PackingLineModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || PackingLineController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Packing Line
     * 
     * @public
     * @return {Promise<PackingLineModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || PackingLineController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The PackingLineModel cannot be Replaced");
    }
}

export default PackingLineModel;