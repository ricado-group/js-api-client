import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import PackingLineController from '../../../Controllers/Packhouse/Site/PackingLineController';

/**
 * Model Class for a Packing Line
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PackingLineModel extends BaseSiteModel
{
    /**
     * PackingLineModel Constructor
     * 
     * @public
     * @param {Object} json - The Packing Line Properties
     * @param {?number} json.rtuId - The RTU this Packing Line belongs to
     * @param {string} json.name - The Packing Line Name
     * @param {Object} json.points - The Points used by this Packing Line
     * @param {Object[]} json.sizers - The Sizer Objects that belong to this Packing Line
     * @param {Object[]} json.binTips - The Bin Tip Objects that belong to this this Packing Line
     * @param {Object[]} json.rejectBinScales - The Reject Bin Scale Objects that belong to this Packing Line
     * @param {?Object} json.automation - The Automation Object for this Packing Line
     * @param {string[]} json.alarmGroups - The Alarm Groups that are used by this Packing Line
     * @param {Object[]} json.classTypes - The Class Types that are defined for this Packing Line
     * @param {?Object} json.freshPackIntegration - The FreshPack Integration Configuration for this Packing Line
     * @param {?Object} json.freshQualityIntegration - The FreshQuality Integration Configuration for this Packing Line
     * @param {number} siteId - The Site ID associated with this Packing Line
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Packing Line
         * @private
         */
        this._updateJson = {};
    }

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
     * The RTU this Packing Line belongs to
     * 
     * @public
     * @type {?number}
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

    /**
     * The Packing Line Name
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
     * The Points used by this Packing Line
     * 
     * @public
     * @type {Object}
     */
    get points()
    {
        return this._json.points;
    }

    /**
     * The Points used by this Packing Line
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
     * The Sizer Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get sizers()
    {
        return this._json.sizers;
    }

    /**
     * The Sizer Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    set sizers(sizers)
    {
        this._json.sizers = sizers;
        this._updateJson.sizers = sizers;
    }

    /**
     * The Bin Tip Objects that belong to this this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get binTips()
    {
        return this._json.binTips;
    }

    /**
     * The Bin Tip Objects that belong to this this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    set binTips(binTips)
    {
        this._json.binTips = binTips;
        this._updateJson.binTips = binTips;
    }

    /**
     * The Reject Bin Scale Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get rejectBinScales()
    {
        return this._json.rejectBinScales;
    }

    /**
     * The Reject Bin Scale Objects that belong to this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    set rejectBinScales(rejectBinScales)
    {
        this._json.rejectBinScales = rejectBinScales;
        this._updateJson.rejectBinScales = rejectBinScales;
    }

    /**
     * The Automation Object for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get automation()
    {
        return this._json.automation;
    }

    /**
     * The Automation Object for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    set automation(automation)
    {
        this._json.automation = automation;
        this._updateJson.automation = automation;
    }

    /**
     * The Alarm Groups that are used by this Packing Line
     * 
     * @public
     * @type {string[]}
     */
    get alarmGroups()
    {
        return this._json.alarmGroups;
    }

    /**
     * The Alarm Groups that are used by this Packing Line
     * 
     * @public
     * @type {string[]}
     */
    set alarmGroups(alarmGroups)
    {
        this._json.alarmGroups = alarmGroups;
        this._updateJson.alarmGroups = alarmGroups;
    }

    /**
     * The Class Types that are defined for this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    get classTypes()
    {
        return this._json.classTypes;
    }

    /**
     * The Class Types that are defined for this Packing Line
     * 
     * @public
     * @type {Object[]}
     */
    set classTypes(classTypes)
    {
        this._json.classTypes = classTypes;
        this._updateJson.classTypes = classTypes;
    }

    /**
     * The FreshPack Integration Configuration for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get freshPackIntegration()
    {
        return this._json.freshPackIntegration;
    }

    /**
     * The FreshPack Integration Configuration for this Packing Line
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
     * The FreshQuality Integration Configuration for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    get freshQualityIntegration()
    {
        return this._json.freshQualityIntegration;
    }

    /**
     * The FreshQuality Integration Configuration for this Packing Line
     * 
     * @public
     * @type {?Object}
     */
    set freshQualityIntegration(freshQualityIntegration)
    {
        this._json.freshQualityIntegration = freshQualityIntegration;
        this._updateJson.freshQualityIntegration = freshQualityIntegration;
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
     * Update this **Packing Line**
     * 
     * @public
     * @return {Promise<PackingLineModel>}
     */
    update()
    {
        return PackingLineController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Packing Line**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PackingLineController.delete(this._siteId, this._json.id);
    }
}

export default PackingLineModel;