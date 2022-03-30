/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a MAF Sizer Outlet Article Change
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class MAFSizerOutletArticleChangeModel extends BaseModel
{
    /**
     * MAFSizerOutletArticleChangeModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this MAF Sizer Outlet Article Change
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The MAF Sizer Outlet Article Change ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The MAF Sizer ID this Outlet Change is associated with
         * 
         * @type {string}
         * @public
         */
        this.mafSizerId = "";
        
        /**
         * The Sizer Outlet Number this Outlet Change is associated with
         * 
         * @type {string}
         * @public
         */
        this.outletNumber = "";
        
        /**
         * When this Outlet Change occurred
         * 
         * @type {Date}
         * @public
         */
        this.createdTimestamp = new Date();
        
        /**
         * The Name of the Previous Article that was active on the Outlet
         * 
         * @type {?string}
         * @public
         */
        this.previousArticleName = null;
        
        /**
         * The Name of the New Article that is now active on the Outlet
         * 
         * @type {string}
         * @public
         */
        this.newArticleName = "";
        
        /**
         * Whether the MAF Sizer Outlet Article Change has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the MAF Sizer Outlet Article Change was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this MAF Sizer Outlet Article Change
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **MAFSizerOutletArticleChangeModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this MAF Sizer Outlet Article Change
     * @return {MAFSizerOutletArticleChangeModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new MAFSizerOutletArticleChangeModel(siteId);
        
        /**
         * The JSON Object
         * 
         * @type {Object<string, any>}
         */
        let jsonObject = {};
        
        if(typeof json === 'string')
        {
            jsonObject = JSON.parse(json);
        }
        else if(typeof json === 'object')
        {
            jsonObject = json;
        }
        
        if('id' in jsonObject)
        {
            model.id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('mafSizerId' in jsonObject)
        {
            model.mafSizerId = (function(){
                if(typeof jsonObject['mafSizerId'] !== 'string')
                {
                    return String(jsonObject['mafSizerId']);
                }
        
                return jsonObject['mafSizerId'];
            }());
        }
        
        if('outletNumber' in jsonObject)
        {
            model.outletNumber = (function(){
                if(typeof jsonObject['outletNumber'] !== 'string')
                {
                    return String(jsonObject['outletNumber']);
                }
        
                return jsonObject['outletNumber'];
            }());
        }
        
        if('createdTimestamp' in jsonObject)
        {
            model.createdTimestamp = (function(){
                if(typeof jsonObject['createdTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['createdTimestamp']));
                }
        
                return new Date(jsonObject['createdTimestamp']);
            }());
        }
        
        if('previousArticleName' in jsonObject)
        {
            model.previousArticleName = (function(){
                if(jsonObject['previousArticleName'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['previousArticleName'] !== 'string')
                {
                    return String(jsonObject['previousArticleName']);
                }
        
                return jsonObject['previousArticleName'];
            }());
        }
        
        if('newArticleName' in jsonObject)
        {
            model.newArticleName = (function(){
                if(typeof jsonObject['newArticleName'] !== 'string')
                {
                    return String(jsonObject['newArticleName']);
                }
        
                return jsonObject['newArticleName'];
            }());
        }
        
        if('deleted' in jsonObject)
        {
            model.deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model.updateTimestamp = (function(){
                if(typeof jsonObject['updateTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['updateTimestamp']));
                }
        
                return new Date(jsonObject['updateTimestamp']);
            }());
        }
        
        return model;
    }
}

export default MAFSizerOutletArticleChangeModel;