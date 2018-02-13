import Model from '../../Models/Model';
/**
 * Abstract Model Class SiteModel
 * @abstract
 * @extends Model
 */
class SiteModel extends Model
{
    /**
     * SiteModel Constructor
     * 
     * @package
     * @param {object} json - The Model JSON
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
     * @param {SiteModelController} controller - The Controller for this Site Model
     * @return {Promise<SiteModel>}
     */
    update(controller)
    {
        return controller.update(this.siteId, this.id, this._updateJson);
    }

    /**
     * Delete this Site Model
     * 
     * @public
     * @param {SiteModelController} controller - The Controller for this Site Model
     * @return {Promise<SiteModel>}
     */
    delete(controller)
    {
        return controller.delete(this.siteId, this.id, this._updateJson);
    }

    /**
     * Replace this Site Model
     * 
     * @public
     * @param {SiteModelController} controller - The Controller for this Site Model
     * @return {Promise<SiteModel>}
     */
    replace(controller)
    {
        return controller.replace(this.siteId, this.id, this._updateJson);
    }
}

export default SiteModel