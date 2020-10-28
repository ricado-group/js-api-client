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
     * @param {Object<string, any>} json The Permanent Object Data Properties
     * @param {number} siteId The Site ID associated with this Permanent Object Data
     */
    constructor(json, siteId)
    {
        super(json, siteId);
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
     * An Array of User Comments for this Permanent Object Data
     * 
     * @public
     * @type {Object[]}
     */
    get comments()
    {
        return this._json.comments;
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
     * The Site ID associated with this Permanent Object Data
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }
}

export default PermanentObjectDataModel;