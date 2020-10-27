/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PermanentObjectController from '../../Controllers/Site/PermanentObjectController';

/**
 * Model Class for a Permanent Object
 * @hideconstructor
 * @extends BaseSiteModel
 */
class PermanentObjectModel extends BaseSiteModel
{
    /**
     * PermanentObjectModel Constructor
     * 
     * @public
     * @param {Object<string, any>} json The Permanent Object Properties
     * @param {number} siteId The Site ID associated with this Permanent Object
     */
    constructor(json, siteId)
    {
        super(json, siteId);
        
        /**
         * The Properties to Update for a Permanent Object
         * 
         * @type {Object<string, any>}
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Permanent Object ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The RTU this Permanent Object belongs to
     * 
     * @public
     * @type {?number}
     */
    get rtuId()
    {
        return this._json.rtuId;
    }

    /**
     * The Permanent Object Key Index
     * 
     * @public
     * @type {string}
     */
    get keyIndex()
    {
        return this._json.keyIndex;
    }

    /**
     * The Permanent Object Type
     * 
     * @public
     * @type {string}
     */
    get type()
    {
        return this._json.type;
    }

    /**
     * The Permanent Object Type
     * 
     * @public
     * @type {string}
     */
    set type(value)
    {
        this._json.type = value;
        this._updateJson.type = value;
    }

    /**
     * The Permanent Object Definition
     * 
     * @public
     * @type {Object}
     */
    get definition()
    {
        return this._json.definition;
    }

    /**
     * The Permanent Object Definition
     * 
     * @public
     * @type {Object}
     */
    set definition(value)
    {
        this._json.definition = value;
        this._updateJson.definition = value;
    }

    /**
     * Whether the Permanent Object has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Permanent Object was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * The Site ID associated with this Permanent Object
     * 
     * @public
     * @type {number}
     */
    get siteId()
    {
        return this._siteId;
    }

    /**
     * Update this **Permanent Object**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    update()
    {
        return new Promise((resolve, reject) => {
            PermanentObjectController.update(this._siteId, this._json.id, this._updateJson)
            .then((modelResult) => {
                // TODO: Validate the Model Result, Replace everything in this Model with the Model Result, Return True
                
                resolve(true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete this **Permanent Object**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return PermanentObjectController.delete(this._siteId, this._json.id);
    }
}

export default PermanentObjectModel;