import DefinitionModel from '../../../Models/Site/DefinitionModel';
import VarietyController from '../../../Controllers/Packhouse/Site/VarietyController';

/**
 * Model Class for a Variety
 * @extends DefinitionModel
 */
class VarietyModel extends DefinitionModel {
    /**
     * VarietyModel Constructor
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
     * The Variety Name
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
     * The Variety Description
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
     * The Variety Image Source
     * 
     * @public
     * @type {string}
     */
    get image()
    {
        return this._json.image;
    }

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
     * Methods
     */


    /**
     * Update this Variety
     * 
     * @public
     * @return {Promise<VarietyModel>}
     */
    update(controller = null)
    {
        const controllerClass = controller || VarietyController;
        return super.update(controllerClass);
    }

    /**
     * Delete this Variety
     * 
     * @public
     * @return {Promise<VarietyModel>}
     */
    delete(controller = null)
    {
        const controllerClass = controller || VarietyController;
        return super.delete(controllerClass);
    }

    /**
     * Replace Not Supported
     * 
     * @public
     */
    replace()
    {
        throw new Error("The VarietyModel cannot be Replaced");
    }
}

export default VarietyModel;