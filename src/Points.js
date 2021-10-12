import WebSocketHelper from './WebSocketHelper';
import { isDefined, isDebugMode, hasToken } from './index';
import { EventEmitter } from 'events';
import PointController from './Controllers/Site/PointController';
import PointModel from './Models/Site/PointModel';

/**
 * This Class provides Methods to interact with Points on RICADO Gen 4
 * 
 * @class
 * @public
 */
class Points
{
    /**
     * Whether the Points Class has been Initialized
     * 
     * @private
     * @type {boolean}
     */
    static _initialized = false;

    /**
     * An EventEmitter Instance
     * 
     * @private
     * @type {EventEmitter}
     */
    static _emitter = undefined;

    /**
     * An Array of Subscriptions
     * 
     * @private
     * @type {Object<number, {initializing: boolean, completed: boolean, pointIds: number[]}>}
     */
    static _subscriptions = undefined;

    /**
     * An Array of PointModel Definitions
     * 
     * @private
     * @type {Object<number, Object<number, PointModel>>}
     */
    static _definitions = undefined;

    /**
     * An Array of Point Values
     * 
     * @private
     * @type {Object<number, Object<number, Points.PointValueItem>>}
     */
    static _values = undefined;

    /**
     * Initialize
     * 
     * @static
     * @public
     * @package
     */
    static initialize()
    {
        if(isDefined(Points._initialized) != true || Points._initialized != true)
        {
            if(isDefined(Points._emitter) != true)
            {
                Points._emitter = new EventEmitter();
            }

            if(isDefined(Points._subscriptions) != true)
            {
                Points._subscriptions = {};
            }

            if(isDefined(Points._definitions) != true)
            {
                Points._definitions = {};
            }

            if(isDefined(Points._values) != true)
            {
                Points._values = {};
            }

            WebSocketHelper.on('readpoints', (key, readPoints) => {
                if(isDefined(key) && key.includes('.') && readPoints.length > 0)
                {
                    let keyId = key.split('.')[1];
                    let siteId = undefined;
                    
                    if(key.startsWith("site."))
                    {
                        Points.log("Received `" + readPoints.length + "` Read Points for Site ID: " + keyId);

                        siteId = Number(keyId);
                    }
                    else if(key.startsWith("rtu."))
                    {
                        Points.log("Received `" + readPoints.length + "` Read Points for RTU ID: " + keyId);

                        siteId = this.getDefaultSiteId();
                    }

                    if(isDefined(siteId) && siteId > 0)
                    {
                        if((siteId in Points._values) != true)
                        {
                            Points._values[siteId] = {};
                        }

                        let pointValueItems = [];

                        readPoints.forEach((readPoint) => {
                            if('id' in readPoint)
                            {
                                let pointId = Number(readPoint.id);

                                if(pointId > 0 && 'value' in readPoint && 'timestamp' in readPoint)
                                {
                                    /**
                                     * @type {Points.PointValueItem}
                                     */
                                    let pointValueItem = {
                                        id: pointId,
                                        value: readPoint.value,
                                        timestamp: typeof readPoint.timestamp === 'string' ? new Date(readPoint.timestamp) : new Date(String(readPoint.timestamp)),
                                    };

                                    Points._values[siteId][pointId] = pointValueItem;

                                    pointValueItems.push(pointValueItem);
                                }
                            }
                        });

                        Points._emitter.emit('readpoints', siteId, pointValueItems);
                    }
                }
            });
            
            Points._initialized = true;
        }
    }

    /**
     * Returns the Initialized Status
     *
     * @static
     * @public
     * @returns {boolean}
     */
    static isInitialized()
    {
        return isDefined(Points._initialized) && Points._initialized == true;
    }

    /**
     * Loggging
     * 
     * @static
     * @private
     * @param {string} message - The Message to Log
     * @param {string} [type] - The Log Type (defaults to log)
     */
    static log(message, type = 'log')
    {
        if(isDebugMode() == true)
        {
            switch(type)
            {
                case 'error':
                    console.error('Points :: ' + message);
                    break;
                
                case 'warn':
                case 'warning':
                    console.warn('Points :: ' + message);
                    break;
                
                case 'log':
                default:
                    console.log('Points :: ' + message);
                    break;
            }
        }
    }

    /**
     * Subscribe to a Site for Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<boolean>}
     */
    static subscribe(siteId)
    {
        if(Points.isInitialized() != true)
        {
            throw new Error("Points.subscribe cannot be called before the API Client has been Initialized");
        }

        if(hasToken() != true)
        {
            throw new Error("Points.subscribe cannot be called before Authentication has been successful");
        }

        if(siteId in Points._subscriptions)
        {
            if(Points._subscriptions[siteId].initializing == true)
            {
                throw new Error("Points.subscribe cannot not be called more than once while already Subscribing to the same Site ID");
            }
            else if(Points._subscriptions[siteId].completed == true)
            {
                Points.log("Points.subscribe should not be called more than once for the same Site ID", 'warning');

                return new Promise((resolve, reject) => {
                    resolve(true);
                });
            }
        }
        else
        {
            Points._subscriptions[siteId] = {
                initializing: true,
                completed: false,
                pointIds: [],
            };
        }

        return new Promise((resolve, reject) => {
            Points.loadPointDefinitions(siteId)
            .then(() => {
                
                WebSocketHelper.subscribe('site.' + siteId);
                
                Points.loadPointValues(siteId)
                .then(() => {
                    if(siteId in Points._subscriptions)
                    {
                        Points._subscriptions[siteId].initializing = false;
                        Points._subscriptions[siteId].completed = true;
                    }

                    resolve(true);
                })
                .catch(() => {
                    if(siteId in Points._subscriptions)
                    {
                        Points._subscriptions[siteId].initializing = false;
                        Points._subscriptions[siteId].completed = false;
                    }
                    
                    reject(new Error("Failed to Subscribe to Site ID " + siteId + ". Unable to Fetch the Point Values"));
                });
            })
            .catch(() => {
                if(siteId in Points._subscriptions)
                {
                    Points._subscriptions[siteId].initializing = false;
                    Points._subscriptions[siteId].completed = false;
                }

                reject(new Error("Failed to Subscribe to Site ID " + siteId + ". Unable to Fetch the Point Definitions"));
            });
        });
    }

    /**
     * Unsubscribe from a Site for Points
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     */
    static unsubscribe(siteId)
    {
        if(Points.isInitialized() == true)
        {
            WebSocketHelper.unsubscribe('site.' + siteId);

            if(isDefined(Points._definitions) && siteId in Points._definitions)
            {
                delete Points._definitions[siteId];
            }

            if(isDefined(Points._values) && siteId in Points._values)
            {
                delete Points._values[siteId];
            }

            if(isDefined(Points._subscriptions) && siteId in Points._subscriptions)
            {
                delete Points._subscriptions[siteId];
            }
        }
        else
        {
            throw new Error("Points.unsubscribe cannot be called before the API Client has been Initialized");
        }
    }

    /**
     * Register Events Handler
     * 
     * @static
     * @public
     * @param {string} event - The Event to Register a Handler for
     * @param {Points.eventCallback} handler - The Handler Callback
     */
    static on(event, handler)
    {
        if(isDefined(Points._emitter) != true)
        {
            Points._emitter = new EventEmitter();
        }

        Points._emitter.on(event, handler);
    }

    /**
     * Un-Register Events Handler
     * 
     * @static
     * @public
     * @param {string} event - The Event to Un-Register a Handler from
     * @param {Points.eventCallback} handler - The Handler Callback
     */
    static off(event, handler)
    {
        if(isDefined(Points._emitter))
        {
            Points._emitter.off(event, handler);
        }
    }

    /**
     * Register 'readpoints' Event Handler
     * 
     * @static
     * @public
     * @param {Points.readPointsCallback} handler - The Handler Callback
     */
    static onReadPoints(handler)
    {
        Points.on('readpoints', handler);
    }

    /**
     * Un-Register 'readpoints' Event Handler
     * 
     * @static
     * @public
     * @param {Points.readPointsCallback} handler - The Handler Callback
     */
    static offReadPoints(handler)
    {
        Points.off('readpoints', handler);
    }

    /**
     * Get Point Definition
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @return {PointModel|undefined} - The Point Definition
     */
    static getDefinition(siteId, pointId)
    {
        if(Points.isInitialized() != true)
        {
            return undefined;
        }
        
        if(siteId in Points._definitions && pointId in Points._definitions[siteId])
        {
            return Points._definitions[siteId][pointId];
        }

        return undefined;
    }

    /**
     * Get Point Value
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @return {Points.PointValueItem|undefined} - The Point Value
     */
    static getValue(siteId, pointId)
    {
        if(Points.isInitialized() != true)
        {
            return undefined;
        }
        
        if(siteId in Points._values && pointId in Points._values[siteId])
        {
            return Points._values[siteId][pointId];
        }

        return undefined;
    }

    /**
     * Set Point Value
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @param {any} value - The Point Value to Write
     * @return {Promise<string>}
     */
    static setValue(siteId, pointId, value)
    {
        return new Promise((resolve, reject) => {
            if(siteId <= 0)
            {
                reject(new Error("Invalid Site ID `" + siteId + "`"));
            }

            if(pointId <= 0)
            {
                reject(new Error("Invalid Point ID `" + pointId + "`"));
            }

            let pointDefinition = Points.getDefinition(siteId, pointId);

            if(isDefined(pointDefinition) != true || pointDefinition.id != pointId)
            {
                reject(new Error("Unknown Point ID `" + pointId + "` for Site ID `" + siteId + "`"));
            }

            WebSocketHelper.emit('createWritePoint', siteId, pointId, value, pointDefinition.valueType, false, (guid) => {
                resolve(guid);
            });
        });
    }

    /**
     * Load Point Definitions from the API
     * 
     * @static
     * @private
     * @param {number} siteId - The Site ID to pull Point Definitions from
     * @return {Promise<boolean>}
     */
    static loadPointDefinitions(siteId)
    {
        if((siteId in Points._definitions) != true)
        {
            Points._definitions[siteId] = {};
        }

        return new Promise((resolve, reject) => {
            PointController.getAll(siteId)
            .then((points) => {
                if(siteId in Points._definitions)
                {
                    points.forEach((point) => {
                        Points._definitions[siteId][point.id] = point;
                    });

                    resolve(true);
                }
                else
                {
                    reject(new Error("Site ID is no longer Subscribed"));
                }
            })
            .catch((error) => {
                Points.log(error, 'error');
                reject(error);
            });
        });
    }

    /**
     * Load Point Values from the API
     * 
     * @static
     * @private
     * @param {number} siteId - The Site ID to pull Point Values from
     * @return {Promise<boolean>}
     */
    static loadPointValues(siteId)
    {
        if((siteId in Points._values) != true)
        {
            Points._values[siteId] = {};
        }
        
        return new Promise((resolve, reject) => {
            PointController.getAllValues(siteId)
            .then((pointValues) => {
                if(siteId in Points._values)
                {
                    let changedPoints = [];

                    pointValues.forEach((pointValue) => {
                        if(pointValue.id in Points._values[siteId])
                        {
                            if(Points._values[siteId][pointValue.id].value != pointValue.value || Points._values[siteId][pointValue.id].timestamp != pointValue.timestamp)
                            {
                                changedPoints.push(pointValue);
                            }

                            Points._values[siteId][pointValue.id] = pointValue;
                        }
                        else
                        {
                            changedPoints.push(pointValue);

                            Points._values[siteId][pointValue.id] = pointValue;
                        }
                    });

                    if(changedPoints.length > 0)
                    {
                        Points._emitter.emit('readpoints', siteId, changedPoints);
                    }

                    resolve(true);
                }
                else
                {
                    reject(new Error("Site ID is no longer Subscribed"));
                }
            })
            .catch((error) => {
                Points.log(error, 'error');
                reject(error);
            });
        });
    }

    /**
     * Get Default Site ID
     * 
     * @static
     * @private
     * @return {number|undefined}
     */
    static getDefaultSiteId()
    {
        if(isDefined(Points._definitions) && Object.keys(Points._definitions).length > 0)
        {
            return Number(Object.keys(Points._definitions)[0]);
        }

        return undefined;
    }
}

/**
 * The Events Callback
 * 
 * @callback Points.eventCallback
 * @param {...any[]} args - The Callback Arguments
 * @return {void}
 */

/**
 * The Read Points Callback
 * 
 * @callback Points.readPointsCallback
 * @param {number} siteId - The Site ID
 * @param {Points.PointValueItem[]} pointValues - An Object of Point Values
 * @return {void}
 */

/**
 * A Point Value Item used in a Read Points Callback
 * 
 * @typedef {Object} Points.PointValueItem
 * @property {number} id The Point ID
 * @property {any} value The Point Value
 * @property {Date} timestamp When the Point Value last changed
 */

export default Points;
