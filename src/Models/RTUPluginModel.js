/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';
import RTUPluginController from '../Controllers/RTUPluginController';

/**
 * Model Class for a RTU Plugin
 * @hideconstructor
 * @extends BaseModel
 */
class RTUPluginModel extends BaseModel
{
    /**
     * RTUPluginModel Constructor
     * 
     * @public
     * @param {Object<string, any>} json The RTU Plugin Properties
     */
    constructor(json)
    {
        super(json);
    }

    /**
     * The RTU Plugin ID
     * 
     * @public
     * @type {number}
     */
    get id()
    {
        return this._json.id;
    }

    /**
     * The Plugin Name
     * 
     * @public
     * @type {string}
     */
    get name()
    {
        return this._json.name;
    }

    /**
     * The Company this RTU Plugin belongs to
     * 
     * @public
     * @type {string}
     */
    get companyId()
    {
        return this._json.companyId;
    }

    /**
     * Whether the RTU Plugin has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._json.deleted;
    }

    /**
     * When the RTU Plugin was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._json.updateTimestamp;
    }
}

export default RTUPluginModel;