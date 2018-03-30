import BaseModel from '../../Models/BaseModel';
import PermanentObjectDataController from '../../Controllers/Site/PermanentObjectDataController';

/**
 * Model Class for a Permanent Object Data
 * @extends BaseModel
 */
class PermanentObjectDataModel extends BaseModel
{
    /**
     * PermanentObjectDataModel Constructor
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
     * The Permanent Object Data ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * Key Index
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._json.keyIndex;
    }

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
    get permanentObjectId()
    {
        return this._json.permanentObjectId;
    }

    set permanentObjectId(permanentObjectId)
    {
        this._json.permanentObjectId = permanentObjectId;
        this._updateJson.permanentObjectId = permanentObjectId;
    }

    /**
     * The Permanent Object Data Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    set type(type)
    {
        this._json.type = type;
        this._updateJson.type = type;
    }

    /**
     * The Timestamp when this Data was Created
     * 
     * @public
     * @type {Date}
     */
    get timestamp()
    {
        return this._json.timestamp;
    }

    set timestamp(timestamp)
    {
        this._json.timestamp = timestamp;
        this._updateJson.timestamp = timestamp;
    }

    /**
     * The Data Object specific to this Permanent Object Data Type
     * 
     * @public
     * @type {Object}
     */
    get data()
    {
        return this._json.data;
    }

    set data(data)
    {
        this._json.data = data;
        this._updateJson.data = data;
    }

    /**
     * Whether the Permanent Object Data has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Permanent Object Data was last updated
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
     * Update this Permanent Object Data
     * 
     * @public
     * @return {Promise<PermanentObjectDataModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller ? controller : PermanentObjectDataController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Permanent Object Data
     * 
     * @public
     * @return {Promise<PermanentObjectDataModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller ? controller : PermanentObjectDataController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The PermanentObjectDataModel cannot be Replaced");
    }
}

export default PermanentObjectDataModel