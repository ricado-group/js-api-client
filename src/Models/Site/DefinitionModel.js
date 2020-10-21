import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import DefinitionController from '../../Controllers/Site/DefinitionController';

/**
 * Model Class for a Definition
 * @hideconstructor
 * @extends BaseSiteModel
 */
class DefinitionModel extends BaseSiteModel
{
    /**
     * DefinitionModel Constructor
     * 
     * @public
     * @param {Object} json - The Definition Properties
     * @param {string} json.keyIndex - The Definition Key Index
     * @param {string} json.type - The Definition Type
     * @param {Object} json.data - The Definition Data
     * @param {number} siteId - The Site ID associated with this Definition
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Definition
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Definition ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Definition Key Index
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._json.keyIndex;
    }

    /**
     * The Definition Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * The Definition Type
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
     * The Definition Data
     * 
     * @public
     * @type {Object}
     */
    get data()
    {
        return this._json.data;
    }

    /**
     * The Definition Data
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
     * Whether the Definition has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Definition was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Definition**
     * 
     * @public
     * @return {Promise<DefinitionModel>}
     */
    update()
    {
        return DefinitionController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Definition**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return DefinitionController.delete(this._siteId, this._json.id);
    }
}

export default DefinitionModel;