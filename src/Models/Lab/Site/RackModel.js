/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Rack
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class RackModel extends BaseModel
{
    /**
     * RackModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Rack
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Rack ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The RTU this Rack belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = null;
        
        /**
         * The Name of this Rack
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * The Points used by this Rack
         * 
         * @type {{disabled: number}}
         * @public
         */
        this.points = (function(){
            let pointsDefaultValue = {};
            
            pointsDefaultValue.disabled = 0;
            
            return pointsDefaultValue;
        }());
        
        /**
         * The Lab that owns this Rack
         * 
         * @type {string}
         * @public
         */
        this.labId = "";
        
        /**
         * The Vertical Levels Defined for this Rack
         * 
         * @type {Array<{name: string}>}
         * @public
         */
        this.verticalLevels = [];
        
        /**
         * Whether the Vertical Levels for this Rack should be Inverted. By Default, Vertical Levels go from the Lowest Level upwards
         * 
         * @type {boolean}
         * @public
         */
        this.invertVerticalLevels = false;
        
        /**
         * The Horizontal Positions defined for this Rack
         * 
         * @type {Array<{name: string}>}
         * @public
         */
        this.horizontalPositions = [];
        
        /**
         * Whether the Horizontal Positions for this Rack should be Inverted. By Default, Horizontal Positions go from Left to Right
         * 
         * @type {boolean}
         * @public
         */
        this.invertHorizontalPositions = false;
        
        /**
         * Whether the Rack has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Rack was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Rack
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **RackModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Rack
     * @return {RackModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new RackModel(siteId);
        
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
                
                if(typeof jsonObject['points'] === 'object' && 'disabled' in jsonObject['points'])
                {
                    pointsObject.disabled = (function(){
                        if(typeof jsonObject['points'].disabled !== 'number')
                        {
                            return Number.isInteger(Number(jsonObject['points'].disabled)) ? Number(jsonObject['points'].disabled) : Math.floor(Number(jsonObject['points'].disabled));
                        }
        
                        return Number.isInteger(jsonObject['points'].disabled) ? jsonObject['points'].disabled : Math.floor(jsonObject['points'].disabled);
                    }());
                }
                else
                {
                    pointsObject.disabled = 0;
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
        
        if('verticalLevels' in jsonObject)
        {
            model.verticalLevels = (function(){
                if(Array.isArray(jsonObject['verticalLevels']) !== true)
                {
                    return [];
                }
        
                return jsonObject['verticalLevels'].map((verticalLevelsItem) => {
                    return (function(){
                        let verticalLevelsItemObject = {};
                        
                        if(typeof verticalLevelsItem === 'object' && 'name' in verticalLevelsItem)
                        {
                            verticalLevelsItemObject.name = (function(){
                                if(typeof verticalLevelsItem.name !== 'string')
                                {
                                    return String(verticalLevelsItem.name);
                                }
        
                                return verticalLevelsItem.name;
                            }());
                        }
                        else
                        {
                            verticalLevelsItemObject.name = "";
                        }
        
                        return verticalLevelsItemObject;
                    }());
                });
            }());
        }
        
        if('invertVerticalLevels' in jsonObject)
        {
            model.invertVerticalLevels = (function(){
                if(typeof jsonObject['invertVerticalLevels'] !== 'boolean')
                {
                    return Boolean(jsonObject['invertVerticalLevels']);
                }
        
                return jsonObject['invertVerticalLevels'];
            }());
        }
        
        if('horizontalPositions' in jsonObject)
        {
            model.horizontalPositions = (function(){
                if(Array.isArray(jsonObject['horizontalPositions']) !== true)
                {
                    return [];
                }
        
                return jsonObject['horizontalPositions'].map((horizontalPositionsItem) => {
                    return (function(){
                        let horizontalPositionsItemObject = {};
                        
                        if(typeof horizontalPositionsItem === 'object' && 'name' in horizontalPositionsItem)
                        {
                            horizontalPositionsItemObject.name = (function(){
                                if(typeof horizontalPositionsItem.name !== 'string')
                                {
                                    return String(horizontalPositionsItem.name);
                                }
        
                                return horizontalPositionsItem.name;
                            }());
                        }
                        else
                        {
                            horizontalPositionsItemObject.name = "";
                        }
        
                        return horizontalPositionsItemObject;
                    }());
                });
            }());
        }
        
        if('invertHorizontalPositions' in jsonObject)
        {
            model.invertHorizontalPositions = (function(){
                if(typeof jsonObject['invertHorizontalPositions'] !== 'boolean')
                {
                    return Boolean(jsonObject['invertHorizontalPositions']);
                }
        
                return jsonObject['invertHorizontalPositions'];
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

export default RackModel;