import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import AlarmController from '../../Controllers/Site/AlarmController';

/**
 * Model Class for a Alarm
 * @extends BaseSiteModel
 */
class AlarmModel extends BaseSiteModel
{
    /**
     * AlarmModel Constructor
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
     * The Alarm ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Alarm belongs to
     * 
     * @public
     * @type {number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Alarm Group this Alarm is a part of
     * 
     * @public
     * @type {string}
     */
    get groupId()
    {
        return this._json.groupId;
    }

    set groupId(groupId)
    {
        this._json.groupId = groupId;
        this._updateJson.groupId = groupId;
    }

    /**
     * The Alarm Name
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
     * Whether the Alarm is Critical or not
     * 
     * @public
     * @type {boolean}
     */
    get critical()
    {
        return this._json.critical;
    }

    set critical(critical)
    {
        this._json.critical = critical;
        this._updateJson.critical = critical;
    }

    /**
     * The Python Script with the Conditions to Trip this Alarm
     * 
     * @public
     * @type {string}
     */
    get tripScript()
    {
        return this._json.tripScript;
    }

    set tripScript(tripScript)
    {
        this._json.tripScript = tripScript;
        this._updateJson.tripScript = tripScript;
    }

    /**
     * The Python Script with the Conditions to Reset this Alarm
     * 
     * @public
     * @type {string}
     */
    get resetScript()
    {
        return this._json.resetScript;
    }

    set resetScript(resetScript)
    {
        this._json.resetScript = resetScript;
        this._updateJson.resetScript = resetScript;
    }

    /**
     * The Delay before this Alarm will Trip in Milliseconds
     * 
     * @public
     * @type {number}
     */
    get tripDelay()
    {
        return this._json.tripDelay;
    }

    set tripDelay(tripDelay)
    {
        this._json.tripDelay = tripDelay;
        this._updateJson.tripDelay = tripDelay;
    }

    /**
     * The Delay before this Alarm will Reset in Milliseconds
     * 
     * @public
     * @type {number}
     */
    get resetDelay()
    {
        return this._json.resetDelay;
    }

    set resetDelay(resetDelay)
    {
        this._json.resetDelay = resetDelay;
        this._updateJson.resetDelay = resetDelay;
    }

    /**
     * Whether the Alarm should Automatically Reset
     * 
     * @public
     * @type {boolean}
     */
    get autoReset()
    {
        return this._json.autoReset;
    }

    set autoReset(autoReset)
    {
        this._json.autoReset = autoReset;
        this._updateJson.autoReset = autoReset;
    }

    /**
     * The Delay before this Alarm should Auto Reset in Milliseconds
     * 
     * @public
     * @type {number}
     */
    get autoResetDelay()
    {
        return this._json.autoResetDelay;
    }

    set autoResetDelay(autoResetDelay)
    {
        this._json.autoResetDelay = autoResetDelay;
        this._updateJson.autoResetDelay = autoResetDelay;
    }

    /**
     * The Point used to store the Alarm Tripped State
     * 
     * @public
     * @type {number}
     */
    get trippedStatePoint()
    {
        return this._json.trippedStatePoint;
    }

    set trippedStatePoint(trippedStatePoint)
    {
        this._json.trippedStatePoint = trippedStatePoint;
        this._updateJson.trippedStatePoint = trippedStatePoint;
    }

    /**
     * The Point used to store the Alarm Tripped Timestamp
     * 
     * @public
     * @type {number}
     */
    get trippedTimestampPoint()
    {
        return this._json.trippedTimestampPoint;
    }

    set trippedTimestampPoint(trippedTimestampPoint)
    {
        this._json.trippedTimestampPoint = trippedTimestampPoint;
        this._updateJson.trippedTimestampPoint = trippedTimestampPoint;
    }

    /**
     * The Point used to store the Alarm's Internal Trip Start
     * 
     * @public
     * @type {number}
     */
    get internalTripStartPoint()
    {
        return this._json.internalTripStartPoint;
    }

    set internalTripStartPoint(internalTripStartPoint)
    {
        this._json.internalTripStartPoint = internalTripStartPoint;
        this._updateJson.internalTripStartPoint = internalTripStartPoint;
    }

    /**
     * The Point used to store the Alarm's Internal Reset Start
     * 
     * @public
     * @type {number}
     */
    get internalResetStartPoint()
    {
        return this._json.internalResetStartPoint;
    }

    set internalResetStartPoint(internalResetStartPoint)
    {
        this._json.internalResetStartPoint = internalResetStartPoint;
        this._updateJson.internalResetStartPoint = internalResetStartPoint;
    }

    /**
     * Whether the Alarm has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Alarm was last updated
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
     * Update this Alarm
     * 
     * @public
     * @return {Promise<AlarmModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : AlarmController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Alarm
     * 
     * @public
     * @return {Promise<AlarmModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : AlarmController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The AlarmModel cannot be Replaced");
    }
}

export default AlarmModel