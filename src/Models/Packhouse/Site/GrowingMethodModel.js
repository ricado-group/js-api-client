import DefinitionModel from '../../../Models/Site/DefinitionModel';
import GrowingMethodController from '../../../Controllers/Packhouse/Site/GrowingMethodController';

/**
 * Model Class for a Growing Method
 * @extends DefinitionModel
 */
class GrowingMethodModel extends DefinitionModel {
    /**
     * GrowingMethodModel Constructor
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
     * The Definition Key Index
     * 
     * @public
     * @type {string}
     */
    get code()
    {
        return this._json.code;
    }

    set code(code)
    {
        this._json.code = code;
        this._updateJson.code = code;
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
     * Methods
     */


    /**
     * Update this Growing Method
     * 
     * @public
     * @return {Promise<GrowingMethodModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || GrowingMethodController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Growing Method
     * 
     * @public
     * @return {Promise<GrowingMethodModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || GrowingMethodController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The GrowingMethodModel cannot be Replaced");
    }
}

export default GrowingMethodModel;