import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import TemporaryObjectController from '../../Controllers/Site/TemporaryObjectController';

/**
 * Model Class for a Temporary Object
 * @extends BaseSiteModel
 */
class TemporaryObjectModel extends BaseSiteModel {
    /**
     * TemporaryObjectModel Constructor
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
     * The Temporary Object Type
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
     * The Temporary Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._json.definition;
    }

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
     * Methods
     */


    /**
     * Update this Temporary Object
     * 
     * @public
     * @return {Promise<TemporaryObjectModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || TemporaryObjectController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Temporary Object
     * 
     * @public
     * @return {Promise<TemporaryObjectModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || TemporaryObjectController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The TemporaryObjectModel cannot be Replaced");
    }
}

export default TemporaryObjectModel;