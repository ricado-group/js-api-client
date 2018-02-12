import SiteModel from '../../Models/Site/SiteModel';
import PermanentObjectController from '../../Controllers/Site/PermanentObjectController';

/**
 * Model Class for a PermanentObject
 * @extends SiteModel
 */
class PermanentObject extends SiteModel
{
    /**
     * PermanentObject Constructor
     * 
     * @package
     * @param {object} json - The Packing Line JSON
     */
    constructor(json)
    {
        super(json);
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
     * The Permanent Object Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * Whether the Packing Line has been deleted
     * 
     * @abstract
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
     * @abstract
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }
}

export default PermanentObject