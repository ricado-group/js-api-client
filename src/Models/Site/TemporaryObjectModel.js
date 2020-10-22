/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import TemporaryObjectController from '../../Controllers/Site/TemporaryObjectController';

/**
 * Model Class for a Temporary Object
 * @hideconstructor
 * @extends BaseSiteModel
 */
class TemporaryObjectModel extends BaseSiteModel
{
    /**
     * TemporaryObjectModel Constructor
     * 
     * @public
     * @param {Object} json - The Temporary Object Properties
     * @param {string} json.keyIndex - The Temporary Object Key Index
     * @param {string} json.type - The Temporary Object Type
     * @param {Object} json.definition - The Temporary Object Definition
     * @param {number} siteId - The Site ID associated with this Temporary Object
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * The Properties to Update for a Temporary Object
         * 
         * @type {Object}
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Temporary Object ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Temporary Object Key Index
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._json.keyIndex;
    }

    /**
     * The Temporary Object Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * The Temporary Object Type
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
     * The Temporary Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._json.definition;
    }

    /**
     * The Temporary Object Definition
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
     * Whether the Temporary Object has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Temporary Object was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Temporary Object**
     * 
     * @public
     * @return {Promise<TemporaryObjectModel>}
     */
    update()
    {
        return TemporaryObjectController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Temporary Object**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return TemporaryObjectController.delete(this._siteId, this._json.id);
    }
}

export default TemporaryObjectModel;