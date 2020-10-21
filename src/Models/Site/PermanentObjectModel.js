import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PermanentObjectController from '../../Controllers/Site/PermanentObjectController';

/**
 * Model Class for a Permanent Object
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PermanentObjectModel extends BaseSiteModel
{
    /**
     * PermanentObjectModel Constructor
     * 
     * @public
     * @param {Object} json - The Permanent Object Properties
     * @param {?number} json.rtuId - The RTU this Permanent Object belongs to
     * @param {string} json.keyIndex - The Permanent Object Key Index
     * @param {string} json.type - The Permanent Object Type
     * @param {Object} json.definition - The Permanent Object Definition
     * @param {number} siteId - The Site ID associated with this Permanent Object
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Permanent Object
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Permanent Object ID
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
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Permanent Object Key Index
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
     * The Permanent Object Type
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
     * The Permanent Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._json.definition;
    }

    /**
     * The Permanent Object Definition
     * 
     * @public
     * @type {Object}
     */
    set definition(definition)
    {
        this._json.definition = definition;
        this._updateJson.definition = definition;
    }

    /**
     * Whether the Permanent Object has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Permanent Object was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Permanent Object**
     * 
     * @public
     * @return {Promise<PermanentObjectModel>}
     */
    update()
    {
        return PermanentObjectController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Permanent Object**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PermanentObjectController.delete(this._siteId, this._json.id);
    }
}

export default PermanentObjectModel;