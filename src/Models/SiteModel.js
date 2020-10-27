/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';
import SiteController from '../Controllers/SiteController';

/**
 * Model Class for a Site
 * @hideconstructor
 * @extends BaseModel
 */
class SiteModel extends BaseModel
{
    /**
     * SiteModel Constructor
     * 
     * @public
     * @param {Object<string, any>} json The Site Properties
     */
    constructor(json)
    {
        super(json);
        
        /**
         * The Properties to Update for a Site
         * 
         * @type {Object<string, any>}
         * @private
         */
        this._updateJson = {};
    }

    /**
     * The Site ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Site Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Site Name
     * 
     * @public
     * @type {string}
     */
    set name(value)
    {
        this._json.name = value;
        this._updateJson.name = value;
    }

    /**
     * The Company this Site belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * The Company this Site belongs to
     * 
     * @public
     * @type {string}
     */
    set companyId(value)
    {
        this._json.companyId = value;
        this._updateJson.companyId = value;
    }

    /**
     * Whether the Site is Enabled
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._json.enabled;
    }

    /**
     * Whether the Site is Enabled
     * 
     * @public
     * @type {boolean}
     */
    set enabled(value)
    {
        this._json.enabled = value;
        this._updateJson.enabled = value;
    }

    /**
     * Whether the Site has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the Site was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }

    /**
     * Update this **Site**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    update()
    {
        return new Promise((resolve, reject) => {
            SiteController.update(this._json.id, this._updateJson)
            .then((modelResult) => {
                // TODO: Validate the Model Result, Replace everything in this Model with the Model Result, Return True
                
                resolve(true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete this **Site**
     * 
     * @public
     * @return {Promise<boolean>}
     */
    delete()
    {
        return SiteController.delete(this._json.id);
    }
}

export default SiteModel;