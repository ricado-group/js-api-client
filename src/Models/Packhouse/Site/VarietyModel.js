import BaseSiteModel from '../../../Models/Site/BaseSiteModel';
import VarietyController from '../../../Controllers/Packhouse/Site/VarietyController';

/**
 * Model Class for a Variety
 * @hideconstructor
 * @extends BaseSiteModel
 */
class VarietyModel extends BaseSiteModel
{
    /**
     * VarietyModel Constructor
     * 
     * @public
     * @param {Object} json - The Variety Properties
     * @param {string} json.code - The Variety Code
     * @param {string} json.name - The Variety Name
     * @param {string} json.description - The Variety Description
     * @param {string} json.image - The Variety Image Source
     * @param {number} siteId - The Site ID associated with this Variety
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * @type {Object} The Properties to Update for a Variety
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Variety ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Variety Code
     * 
     * @public
     * @type {string}
     */
    get code()
    {
        return this._json.code;
    }

    /**
     * The Variety Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Variety Name
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
     * The Variety Description
     * 
     * @public
     * @type {string}
     */
    get description()
    {
        return this._json.description;
    }

    /**
     * The Variety Description
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
     * The Variety Image Source
     * 
     * @public
     * @type {string}
     */
    get image()
    {
        return this._json.image;
    }

    /**
     * The Variety Image Source
     * 
     * @public
     * @type {string}
     */
    set image(image)
    {
        this._json.image = image;
        this._updateJson.image = image;
    }

    /**
     * Whether the Variety has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Variety was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Variety**
     * 
     * @public
     * @return {Promise<VarietyModel>}
     */
    update()
    {
        return VarietyController.update(this._siteId, this._json.id, this._updateJson);
    }

    /**
     * Delete this **Variety**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return VarietyController.delete(this._siteId, this._json.id);
    }
}

export default VarietyModel;