/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../Models/BaseModel';

/**
 * Model Class for a Definition
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class DefinitionModel extends BaseModel
{
    /**
     * DefinitionModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The Definition ID
         * 
         * @type {string}
         * @public
         */
        this.id = undefined;
        
        /**
         * The Definition Key Index
         * 
         * @type {string}
         * @public
         */
        this.keyIndex = undefined;
        
        /**
         * The Definition Type
         * 
         * @type {string}
         * @public
         */
        this.type = undefined;
        
        /**
         * The Definition Data
         * 
         * @type {Object}
         * @public
         */
        this.data = undefined;
        
        /**
         * Whether the Definition has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = undefined;
        
        /**
         * When the Definition was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = undefined;
    }

    /**
     * Create a new **DefinitionModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {DefinitionModel}
     */
    static fromJSON(json)
    {
        let model = new DefinitionModel();
        
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
        
        if('data' in jsonObject)
        {
            model.data = (function(){
                if(typeof jsonObject['data'] !== 'object')
                {
                    return Object(jsonObject['data']);
                }
        
                return jsonObject['data'];
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

export default DefinitionModel;