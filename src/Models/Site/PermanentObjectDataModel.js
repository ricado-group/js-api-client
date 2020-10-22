/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PermanentObjectDataController from '../../Controllers/Site/PermanentObjectDataController';

/**
 * Model Class for a Permanent Object Data
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PermanentObjectDataModel extends BaseSiteModel
{
    /**
     * PermanentObjectDataModel Constructor
     * 
     * @public
     * @param {Object} json - The Permanent Object Data Properties
     * @param {string} json.keyIndex - An Optional Key Index for this Data
     * @param {string} json.permanentObjectId - The Permanent Object this Data is related to
     * @param {string} json.type - The Permanent Object Data Type
     * @param {Date} json.timestamp - The Timestamp when this Data was Created
     * @param {Object} json.data - The Data Object specific to this Permanent Object Data Type
     * @param {number} siteId - The Site ID associated with this Permanent Object Data
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * The Properties to Update for a Permanent Object Data
         * 
         * @type {Object}
         * @private
         */
        this._updateJson = {};
    }

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
     * An Optional Key Index for this Data
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

    /**
     * The Permanent Object this Data is related to
     * 
     * @public
     * @type {string}
     */
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

    /**
     * The Permanent Object Data Type
     * 
     * @public
     * @type {string}
     */
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

    /**
     * The Timestamp when this Data was Created
     * 
     * @public
     * @type {Date}
     */
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

    /**
     * The Data Object specific to this Permanent Object Data Type
     * 
     * @public
     * @type {Object}
     */
    set data(data)
    {
        this._json.data = data;
        this._updateJson.data = data;
    }

    /**
     * An Array of User Comments for this Permanent Object Data
     * 
     * @public
     * @type {Array<Object>}
     */
    get comments()
    {
        return this._json.comments;
    }

    /**
     * An Array of User Comments for this Permanent Object Data
     * 
     * @public
     * @type {Array<Object>}
     */
    set comments(comments)
    {
        this._json.comments = comments;
        this._updateJson.comments = comments;
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
     * Update this **Permanent Object Data**
     * 
     * @public
     * @return {Promise<PermanentObjectDataModel>}
     */
    update()
    {
        return PermanentObjectDataController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Permanent Object Data**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PermanentObjectDataController.delete(this._siteId, this._json.id);
    }
}

export default PermanentObjectDataModel;