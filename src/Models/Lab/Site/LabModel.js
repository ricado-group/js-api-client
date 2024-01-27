/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../../../Models/BaseModel';

/**
 * Model Class for a Lab
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class LabModel extends BaseModel
{
    /**
     * LabModel Constructor
     * 
     * @protected
     * @param {number} siteId The Site ID associated with this Lab
     */
    constructor(siteId)
    {
        super();
        
        /**
         * The Lab ID
         * 
         * @type {string}
         * @public
         */
        this.id = "";
        
        /**
         * The RTU this Lab belongs to
         * 
         * @type {?number}
         * @public
         */
        this.rtuId = null;
        
        /**
         * The Lab Name
         * 
         * @type {string}
         * @public
         */
        this.name = "";
        
        /**
         * A Short Name for the Lab Name. Typically used in Reports and Tables showing multiple Labs
         * 
         * @type {string}
         * @public
         */
        this.shortName = "";
        
        /**
         * The Points used by this Lab
         * 
         * @type {Object}
         * @public
         */
        this.points = {}
        
        /**
         * The Rack Objects that belong to this Lab
         * 
         * @type {Array<{id: string, displayOrder: number}>}
         * @public
         */
        this.racks = [];
        
        /**
         * The Alarm Groups that are used by this Lab
         * 
         * @type {string[]}
         * @public
         */
        this.alarmGroups = [];
        
        /**
         * The Inspect Integration Configuration for this Lab
         * 
         * @type {?{points: {sqlServerCommunicationStatus: number, sampleCreationEnabled: number, sampleSchedulingEnabled: number, samplePublishingEnabled: number, samplePublishingFilter: number}, enabled: boolean, labName: string, sqlServerHost: string, sqlServerUsername: string, sqlServerPassword: string}}
         * @public
         */
        this.inspectIntegration = null;
        
        /**
         * Whether the Lab has been deleted
         * 
         * @type {boolean}
         * @public
         */
        this.deleted = false;
        
        /**
         * When the Lab was last updated
         * 
         * @type {Date}
         * @public
         */
        this.updateTimestamp = new Date();
        
        /**
         * The Site ID associated with this Lab
         * 
         * @type {number}
         * @public
         */
        this.siteId = siteId;
    }

    /**
     * Create a new **LabModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @param {number} siteId The Site ID associated with this Lab
     * @return {LabModel}
     */
    static fromJSON(json, siteId)
    {
        let model = new LabModel(siteId);
        
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
        
        if('shortName' in jsonObject)
        {
            model.shortName = (function(){
                if(typeof jsonObject['shortName'] !== 'string')
                {
                    return String(jsonObject['shortName']);
                }
        
                return jsonObject['shortName'];
            }());
        }
        
        if('points' in jsonObject)
        {
            model.points = (function(){
                if(typeof jsonObject['points'] !== 'object')
                {
                    return Object(jsonObject['points']);
                }
        
                return jsonObject['points'];
            }());
        }
        
        if('racks' in jsonObject)
        {
            model.racks = (function(){
                if(Array.isArray(jsonObject['racks']) !== true)
                {
                    return [];
                }
        
                return jsonObject['racks'].map((racksItem) => {
                    return (function(){
                        let racksItemObject = {};
                        
                        if(typeof racksItem === 'object' && 'id' in racksItem)
                        {
                            racksItemObject.id = (function(){
                                if(typeof racksItem.id !== 'string')
                                {
                                    return String(racksItem.id);
                                }
        
                                return racksItem.id;
                            }());
                        }
                        else
                        {
                            racksItemObject.id = "";
                        }
                        
                        if(typeof racksItem === 'object' && 'displayOrder' in racksItem)
                        {
                            racksItemObject.displayOrder = (function(){
                                if(typeof racksItem.displayOrder !== 'number')
                                {
                                    return Number.isInteger(Number(racksItem.displayOrder)) ? Number(racksItem.displayOrder) : Math.floor(Number(racksItem.displayOrder));
                                }
        
                                return Number.isInteger(racksItem.displayOrder) ? racksItem.displayOrder : Math.floor(racksItem.displayOrder);
                            }());
                        }
                        else
                        {
                            racksItemObject.displayOrder = 0;
                        }
        
                        return racksItemObject;
                    }());
                });
            }());
        }
        
        if('alarmGroups' in jsonObject)
        {
            model.alarmGroups = (function(){
                if(Array.isArray(jsonObject['alarmGroups']) !== true)
                {
                    return [];
                }
        
                return jsonObject['alarmGroups'].map((alarmGroupsItem) => {
                    return (function(){
                        if(typeof alarmGroupsItem !== 'string')
                        {
                            return String(alarmGroupsItem);
                        }
        
                        return alarmGroupsItem;
                    }());
                });
            }());
        }
        
        if('inspectIntegration' in jsonObject)
        {
            model.inspectIntegration = (function(){
                if(jsonObject['inspectIntegration'] === null)
                {
                    return null;
                }
        
                let inspectIntegrationObject = {};
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'points' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.points = (function(){
                        let pointsObject = {};
                        
                        if(typeof jsonObject['inspectIntegration'].points === 'object' && 'sqlServerCommunicationStatus' in jsonObject['inspectIntegration'].points)
                        {
                            pointsObject.sqlServerCommunicationStatus = (function(){
                                if(typeof jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus)) ? Number(jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus) : Math.floor(Number(jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus));
                                }
        
                                return Number.isInteger(jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus) ? jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus : Math.floor(jsonObject['inspectIntegration'].points.sqlServerCommunicationStatus);
                            }());
                        }
                        else
                        {
                            pointsObject.sqlServerCommunicationStatus = 0;
                        }
                        
                        if(typeof jsonObject['inspectIntegration'].points === 'object' && 'sampleCreationEnabled' in jsonObject['inspectIntegration'].points)
                        {
                            pointsObject.sampleCreationEnabled = (function(){
                                if(typeof jsonObject['inspectIntegration'].points.sampleCreationEnabled !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['inspectIntegration'].points.sampleCreationEnabled)) ? Number(jsonObject['inspectIntegration'].points.sampleCreationEnabled) : Math.floor(Number(jsonObject['inspectIntegration'].points.sampleCreationEnabled));
                                }
        
                                return Number.isInteger(jsonObject['inspectIntegration'].points.sampleCreationEnabled) ? jsonObject['inspectIntegration'].points.sampleCreationEnabled : Math.floor(jsonObject['inspectIntegration'].points.sampleCreationEnabled);
                            }());
                        }
                        else
                        {
                            pointsObject.sampleCreationEnabled = 0;
                        }
                        
                        if(typeof jsonObject['inspectIntegration'].points === 'object' && 'sampleSchedulingEnabled' in jsonObject['inspectIntegration'].points)
                        {
                            pointsObject.sampleSchedulingEnabled = (function(){
                                if(typeof jsonObject['inspectIntegration'].points.sampleSchedulingEnabled !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['inspectIntegration'].points.sampleSchedulingEnabled)) ? Number(jsonObject['inspectIntegration'].points.sampleSchedulingEnabled) : Math.floor(Number(jsonObject['inspectIntegration'].points.sampleSchedulingEnabled));
                                }
        
                                return Number.isInteger(jsonObject['inspectIntegration'].points.sampleSchedulingEnabled) ? jsonObject['inspectIntegration'].points.sampleSchedulingEnabled : Math.floor(jsonObject['inspectIntegration'].points.sampleSchedulingEnabled);
                            }());
                        }
                        else
                        {
                            pointsObject.sampleSchedulingEnabled = 0;
                        }
                        
                        if(typeof jsonObject['inspectIntegration'].points === 'object' && 'samplePublishingEnabled' in jsonObject['inspectIntegration'].points)
                        {
                            pointsObject.samplePublishingEnabled = (function(){
                                if(typeof jsonObject['inspectIntegration'].points.samplePublishingEnabled !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['inspectIntegration'].points.samplePublishingEnabled)) ? Number(jsonObject['inspectIntegration'].points.samplePublishingEnabled) : Math.floor(Number(jsonObject['inspectIntegration'].points.samplePublishingEnabled));
                                }
        
                                return Number.isInteger(jsonObject['inspectIntegration'].points.samplePublishingEnabled) ? jsonObject['inspectIntegration'].points.samplePublishingEnabled : Math.floor(jsonObject['inspectIntegration'].points.samplePublishingEnabled);
                            }());
                        }
                        else
                        {
                            pointsObject.samplePublishingEnabled = 0;
                        }
                        
                        if(typeof jsonObject['inspectIntegration'].points === 'object' && 'samplePublishingFilter' in jsonObject['inspectIntegration'].points)
                        {
                            pointsObject.samplePublishingFilter = (function(){
                                if(typeof jsonObject['inspectIntegration'].points.samplePublishingFilter !== 'number')
                                {
                                    return Number.isInteger(Number(jsonObject['inspectIntegration'].points.samplePublishingFilter)) ? Number(jsonObject['inspectIntegration'].points.samplePublishingFilter) : Math.floor(Number(jsonObject['inspectIntegration'].points.samplePublishingFilter));
                                }
        
                                return Number.isInteger(jsonObject['inspectIntegration'].points.samplePublishingFilter) ? jsonObject['inspectIntegration'].points.samplePublishingFilter : Math.floor(jsonObject['inspectIntegration'].points.samplePublishingFilter);
                            }());
                        }
                        else
                        {
                            pointsObject.samplePublishingFilter = 0;
                        }
        
                        return pointsObject;
                    }());
                }
                else
                {
                    inspectIntegrationObject.points = (function(){
                        let pointsDefaultValue = {};
                        
                        pointsDefaultValue.sqlServerCommunicationStatus = 0;
                        
                        pointsDefaultValue.sampleCreationEnabled = 0;
                        
                        pointsDefaultValue.sampleSchedulingEnabled = 0;
                        
                        pointsDefaultValue.samplePublishingEnabled = 0;
                        
                        pointsDefaultValue.samplePublishingFilter = 0;
                        
                        return pointsDefaultValue;
                    }());
                }
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'enabled' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.enabled = (function(){
                        if(typeof jsonObject['inspectIntegration'].enabled !== 'boolean')
                        {
                            return Boolean(jsonObject['inspectIntegration'].enabled);
                        }
        
                        return jsonObject['inspectIntegration'].enabled;
                    }());
                }
                else
                {
                    inspectIntegrationObject.enabled = false;
                }
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'labName' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.labName = (function(){
                        if(typeof jsonObject['inspectIntegration'].labName !== 'string')
                        {
                            return String(jsonObject['inspectIntegration'].labName);
                        }
        
                        return jsonObject['inspectIntegration'].labName;
                    }());
                }
                else
                {
                    inspectIntegrationObject.labName = "";
                }
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'sqlServerHost' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.sqlServerHost = (function(){
                        if(typeof jsonObject['inspectIntegration'].sqlServerHost !== 'string')
                        {
                            return String(jsonObject['inspectIntegration'].sqlServerHost);
                        }
        
                        return jsonObject['inspectIntegration'].sqlServerHost;
                    }());
                }
                else
                {
                    inspectIntegrationObject.sqlServerHost = "";
                }
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'sqlServerUsername' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.sqlServerUsername = (function(){
                        if(typeof jsonObject['inspectIntegration'].sqlServerUsername !== 'string')
                        {
                            return String(jsonObject['inspectIntegration'].sqlServerUsername);
                        }
        
                        return jsonObject['inspectIntegration'].sqlServerUsername;
                    }());
                }
                else
                {
                    inspectIntegrationObject.sqlServerUsername = "";
                }
                
                if(typeof jsonObject['inspectIntegration'] === 'object' && 'sqlServerPassword' in jsonObject['inspectIntegration'])
                {
                    inspectIntegrationObject.sqlServerPassword = (function(){
                        if(typeof jsonObject['inspectIntegration'].sqlServerPassword !== 'string')
                        {
                            return String(jsonObject['inspectIntegration'].sqlServerPassword);
                        }
        
                        return jsonObject['inspectIntegration'].sqlServerPassword;
                    }());
                }
                else
                {
                    inspectIntegrationObject.sqlServerPassword = "";
                }
        
                return inspectIntegrationObject;
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

export default LabModel;