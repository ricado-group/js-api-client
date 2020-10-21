import BaseModel from '../../Models/BaseModel';

/**
 * The Abstract **BaseSiteModel** Class
 * @abstract
 * @hideconstructor
 * @extends BaseModel
 */
class BaseSiteModel extends BaseModel
{
    /**
     * BaseSiteModel Constructor
     * 
     * @public
     * @param {Object} json - The Model Properties
     * @param {number} siteId - The Site ID associated with the Model
     */
    constructor(json, siteId)
    {
        super(json);
        
        /**
         * @type {number} The Site ID associated with the Model
         * @protected
         */
        this._siteId = siteId;
    }

    /**
     * The Site ID associated with the Model
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._json.siteId;
    }
}

export default BaseSiteModel;