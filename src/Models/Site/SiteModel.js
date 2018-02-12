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
    constructor(json)
    {
        super(json);
    }
}

export default SiteModel