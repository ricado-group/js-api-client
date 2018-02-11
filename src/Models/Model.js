/**
 * Abstract Model Class Model
 * @abstract
 */
class Model
{
    /**
     * Model Constructor
     * 
     * @package
     * @param {object} json - The Model JSON
     */
    constructor(json)
    {
        this._json = json;
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
}

export default Model