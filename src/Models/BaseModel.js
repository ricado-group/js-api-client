/**
 * Abstract Model Class BaseModel
 * @abstract
 */
class BaseModel
{
    /**
     * BaseModel Constructor
     * 
     * @package
     * @param {object} json - The Model JSON
     */
    constructor({json})
    {
        this._json = json;
        this._updateJson = {}
    }

    /**
     * Properties
     */


    /**
     * The ID for this Model
     * 
     * @abstract
     * @public
     * @type {*}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * Whether the Model has been deleted
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
     * When the Model was last updated
     * 
     * @abstract
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
     * Update this Model
     * 
     * @public
     * @param {BaseModelController} controller - The Controller for this Model
     * @return {Promise<BaseModel>}
     */
    update(controller)
    {
        return controller.update(this.id, this._updateJson);
    }

    /**
     * Delete this Model
     * 
     * @public
     * @param {BaseModelController} controller - The Controller for this Model
     * @return {Promise<BaseModel>}
     */
    delete(controller)
    {
        return controller.delete(this.id, this._updateJson);
    }

    /**
     * Replace this Model
     * 
     * @public
     * @param {BaseModelController} controller - The Controller for this Model
     * @return {Promise<BaseModel>}
     */
    replace(controller)
    {
        return controller.replace(this.id, this._updateJson);
    }
}

export default BaseModel