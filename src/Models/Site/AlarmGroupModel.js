import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import AlarmGroupController from '../../Controllers/Site/AlarmGroupController';

/**
 * Model Class for a Alarm Group
 * @hideconstructor
 * @extends BaseSiteModel
 */
class AlarmGroupModel extends BaseSiteModel
{
    /**
     * AlarmGroupModel Constructor
     * 
     * @public
     * @param {Object} json - The Alarm Group Properties
     * @param {?number} json.rtuId - The RTU this Alarm Group belongs to
     * @param {string} json.name - The Alarm Group Name
     * @param {number} json.resetPoint - The Boolean Point used to Reset this Alarm Group
     * @param {{point: number, value: boolean}[]} json.externalResetPoints - An Array of Points and the States to be Written when this Alarm Group is Reset
     * @param {number} siteId - The Site ID associated with this Alarm Group
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Alarm Group
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Alarm Group ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Alarm Group belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Alarm Group Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Alarm Group Name
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
     * The Boolean Point used to Reset this Alarm Group
     * 
     * @public
     * @type {number}
     */
    get resetPoint()
    {
        return this._json.resetPoint;
    }

    /**
     * The Boolean Point used to Reset this Alarm Group
     * 
     * @public
     * @type {number}
     */
    set resetPoint(resetPoint)
    {
        this._json.resetPoint = resetPoint;
        this._updateJson.resetPoint = resetPoint;
    }

    /**
     * An Array of Points and the States to be Written when this Alarm Group is Reset
     * 
     * @public
     * @type {{point: number, value: boolean}[]}
     */
    get externalResetPoints()
    {
        return this._json.externalResetPoints;
    }

    /**
     * An Array of Points and the States to be Written when this Alarm Group is Reset
     * 
     * @public
     * @type {{point: number, value: boolean}[]}
     */
    set externalResetPoints(externalResetPoints)
    {
        this._json.externalResetPoints = externalResetPoints;
        this._updateJson.externalResetPoints = externalResetPoints;
    }

    /**
     * Whether the Alarm Group has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Alarm Group was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Alarm Group**
     * 
     * @public
     * @return {Promise<AlarmGroupModel>}
     */
    update()
    {
        return AlarmGroupController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Alarm Group**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return AlarmGroupController.delete(this._siteId, this._json.id);
    }
}

export default AlarmGroupModel;