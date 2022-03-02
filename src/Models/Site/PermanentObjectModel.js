/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../Models/BaseModel';

/**
 * Model Class for a Permanent Object
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class PermanentObjectModel extends BaseModel
{
    /**
     * PermanentObjectModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Permanent Object
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Permanent Object ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The RTU this Permanent Object belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = null;
        
        /**
         * The Permanent Object Key Index
         * 
         * @type {string}
         * @public
         */
        this.keyIndex = "";
        
        /**
         * The Permanent Object Type
         * 
         * @type {string}
         * @public
         */
        this.type = "";
        
        /**
         * The Permanent Object Definition
         * 
         * @type {Object}
         * @public
         */
        this.definition = {}
        
        /**
         * Whether the Permanent Object has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Permanent Object was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Permanent Object
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **PermanentObjectModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Permanent Object
     * @return {PermanentObjectModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new PermanentObjectModel(siteId);
        
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
        
        if('rtuId' in jsonObject)
        {
            model.rtuId = (function(){
                if(jsonObject['rtuId'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['rtuId'] !== 'number')
                {
                    return Number.isInteger(Number(jsonObject['rtuId'])) ? Number(jsonObject['rtuId']) : Math.floor(Number(jsonObject['rtuId']));
                }
        
                return Number.isInteger(jsonObject['rtuId']) ? jsonObject['rtuId'] : Math.floor(jsonObject['rtuId']);
            }());
        }
        
        if('keyIndex' in jsonObject)
        {
            model.keyIndex = (function(){
                if(typeof jsonObject['keyIndex'] !== 'string')
                {
                    return String(jsonObject['keyIndex']);
                }
        
                return jsonObject['keyIndex'];
            }());
        }
        
        if('type' in jsonObject)
        {
            model.type = (function(){
                if(typeof jsonObject['type'] !== 'string')
                {
                    return String(jsonObject['type']);
                }
        
                return jsonObject['type'];
            }());
        }
        
        if('definition' in jsonObject)
        {
            model.definition = (function(){
                if(typeof jsonObject['definition'] !== 'object')
                {
                    return Object(jsonObject['definition']);
                }
        
                return jsonObject['definition'];
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

export default PermanentObjectModel;