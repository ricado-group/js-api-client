import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import DefinitionController from '../../Controllers/Site/DefinitionController';

/**
 * Model Class for a Definition
 * @extends BaseSiteModel
 */
class DefinitionModel extends BaseSiteModel {
    /**
     * DefinitionModel Constructor
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

    set keyIndex(keyIndex)
    {
        this._json.keyIndex = keyIndex;
        this._updateJson.keyIndex = keyIndex;
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
     * Methods
     */


    /**
     * Update this Definition
     * 
     * @public
     * @return {Promise<DefinitionModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || DefinitionController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Definition
     * 
     * @public
     * @return {Promise<DefinitionModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || DefinitionController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The DefinitionModel cannot be Replaced");
    }
}

export default DefinitionModel;