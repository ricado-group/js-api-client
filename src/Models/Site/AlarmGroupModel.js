import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import AlarmGroupController from '../../Controllers/Site/AlarmGroupController';

/**
 * Model Class for a Alarm Group
 * @extends BaseSiteModel
 */
class AlarmGroupModel extends BaseSiteModel {
    /**
     * AlarmGroupModel Constructor
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
     * @type {number}
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

    set resetPoint(resetPoint)
    {
        this._json.resetPoint = resetPoint;
        this._updateJson.resetPoint = resetPoint;
    }

    /**
     * An Array of Points and the States to be Written when this Alarm Group is Reset
     * 
     * @public
     * @type {Array}
     */
    get externalResetPoints()
    {
        return this._json.externalResetPoints;
    }

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
     * Methods
     */


    /**
     * Update this Alarm Group
     * 
     * @public
     * @return {Promise<AlarmGroupModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || AlarmGroupController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Alarm Group
     * 
     * @public
     * @return {Promise<AlarmGroupModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || AlarmGroupController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The AlarmGroupModel cannot be Replaced");
    }
}

export default AlarmGroupModel;