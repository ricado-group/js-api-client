/**
 * The Abstract **BaseModel** Class
 * @abstract
 * @hideconstructor
 */
class BaseModel
{
    /**
     * BaseModel Constructor
     * 
     * @public
     * @param {Object} json - The Model Properties
     */
    constructor(json)
    {
        /**
         * @type {Object<string, any>} The Model Properties
         * @protected
         */
        this._json = json;
    }

    /**
     * The Model ID
     * 
     * @public
     * @type {number|string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * Whether the Model has been deleted
     * 
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
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }
}

export default BaseModel;