import BaseModel from '../../Models/BaseModel';
/**
 * Abstract Model Class BaseSiteModel
 * @abstract
 * @extends BaseModel
 */
class BaseSiteModel extends BaseModel
{
    /**
     * BaseSiteModel Constructor
     * 
     * @package
     * @param {object} args - The Model Arguments
     */
    constructor(args)
    {
        super(args);
        
        this._siteId = args.siteId;
    }

    /**
     * The Site ID
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Update this Site Model
     * 
     * @public
     * @param {BaseSiteModelController} controller - The Controller for this Site Model
     * @return {Promise<BaseSiteModel>}
     */
    update(controller)
    {
        return controller.update(this.siteId, this.id, this._updateJson);
    }

    /**
     * Delete this Site Model
     * 
     * @public
     * @param {BaseSiteModelController} controller - The Controller for this Site Model
     * @return {Promise<BaseSiteModel>}
     */
    delete(controller)
    {
        return controller.delete(this.siteId, this.id, this._updateJson);
    }

    /**
     * Replace this Site Model
     * 
     * @public
     * @param {BaseSiteModelController} controller - The Controller for this Site Model
     * @return {Promise<BaseSiteModel>}
     */
    replace(controller)
    {
        return controller.replace(this.siteId, this.id, this._updateJson);
    }
}

export default BaseSiteModel