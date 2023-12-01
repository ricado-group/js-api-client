/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Dehydrator
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class DehydratorModel extends BaseModel
{
    /**
     * DehydratorModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Dehydrator
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Dehydrator ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The RTU this Dehydrator belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = null;
        
        /**
         * The Name of this Dehydrator
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Points used by this Dehydrator
         * 
         * @type {{rackPositionId: number}}
         * @public
         */
        this.points = (function(){
            let pointsDefaultValue = {};
            
            pointsDefaultValue.rackPositionId = 0;
            
            return pointsDefaultValue;
        }());
        
        /**
         * The Lab that owns this Dehydrator
         * 
         * @type {string}
         * @public
         */
        this.labId = "";
        
        /**
         * Whether the Dehydrator has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Dehydrator was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Dehydrator
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **DehydratorModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Dehydrator
     * @return {DehydratorModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new DehydratorModel(siteId);
        
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
        
        if('name' in jsonObject)
        {
            model.name = (function(){
                if(typeof jsonObject['name'] !== 'string')
                {
                    return String(jsonObject['name']);
                }
        
                return jsonObject['name'];
            }());
        }
        
        if('points' in jsonObject)
        {
            model.points = (function(){
                let pointsObject = {};
                
                if(typeof jsonObject['points'] === 'object' && 'rackPositionId' in jsonObject['points'])
                {
                    pointsObject.rackPositionId = (function(){
                        if(typeof jsonObject['points'].rackPositionId !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].rackPositionId)) ? Number(jsonObject['points'].rackPositionId) : Math.floor(Number(jsonObject['points'].rackPositionId));
                        }
        
                        return Number.isInteger(jsonObject['points'].rackPositionId) ? jsonObject['points'].rackPositionId : Math.floor(jsonObject['points'].rackPositionId);
                    }());
                }
                else
                {
                    pointsObject.rackPositionId = 0;
                }
        
                return pointsObject;
            }());
        }
        
        if('labId' in jsonObject)
        {
            model.labId = (function(){
                if(typeof jsonObject['labId'] !== 'string')
                {
                    return String(jsonObject['labId']);
                }
        
                return jsonObject['labId'];
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

export default DehydratorModel;