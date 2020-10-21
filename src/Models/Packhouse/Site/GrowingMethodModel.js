import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import GrowingMethodController from '../../../Controllers/Packhouse/Site/GrowingMethodController';

/**
 * Model Class for a Growing Method
 * @hideconstructor
 * @extends BaseSiteModel
 */
class GrowingMethodModel extends BaseSiteModel
{
    /**
     * GrowingMethodModel Constructor
     * 
     * @public
     * @param {Object} json - The Growing Method Properties
     * @param {string} json.code - The Growing Method Code
     * @param {string} json.name - The Growing Method Name
     * @param {string} json.description - The Growing Method Description
     * @param {number} siteId - The Site ID associated with this Growing Method
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Growing Method
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Growing Method ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Growing Method Code
     * 
     * @public
     * @type {string}
     */
    get code()
    {
        return this._json.code;
    }

    /**
     * The Growing Method Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Growing Method Name
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
     * The Growing Method Description
     * 
     * @public
     * @type {string}
     */
    get description()
    {
        return this._json.description;
    }

    /**
     * The Growing Method Description
     * 
     * @public
     * @type {string}
     */
    set description(description)
    {
        this._json.description = description;
        this._updateJson.description = description;
    }

    /**
     * Whether the Growing Method has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Growing Method was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Growing Method**
     * 
     * @public
     * @return {Promise<GrowingMethodModel>}
     */
    update()
    {
        return GrowingMethodController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Growing Method**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return GrowingMethodController.delete(this._siteId, this._json.id);
    }
}

export default GrowingMethodModel;