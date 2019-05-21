import WebSocketHelper from './WebSocketHelper';
import RequestHelper from './RequestHelper';
import { isDefined, isDebugMode, hasToken } from './index';
import { EventEmitter } from 'events';
import PointController from './Controllers/Site/PointController';

/**
 * This Class provides Methods to interact with Points on RICADO Gen 4
 *
 * @public
 */
class Points {

    /**
     * Initialize
     * 
     * @package
     */
    static initialize()
    {
        if(isDefined(Points._emitter) != true)
        {
            Points._emitter = new EventEmitter();
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

                    siteId = keyId;
                }
                else if(key.startsWith("rtu."))
                {
                    Points.log("Received `" + readPoints.length + "` Read Points for RTU ID: " + keyId);

                    siteId = this.getDefaultSiteId();
                }

                if(isDefined(siteId))
                {
                    if((siteId in Points._values) != true)
                    {
                        Points._values[siteId] = {};
                    }

                    readPoints.forEach((readPoint) => {
                        Points._values[siteId][readPoint.id] = readPoint;
                    });

                    // TODO: We maybe should create our own array of changed points with additional data from this Class?
                    //       e.g. Value Type and Name could be added?
                    Points._emitter.emit('readpoints', siteId, readPoints);
                }
            }
        });

        if(isDefined(Points.initialized) != true || Points.initialized != true)
        {
            Points.initialized = true;
        }
    }

    /**
     * Loggging
     * 
     * @private
     * @param {string} message - The Message to Log
     * @param {string} type - The Log Type (defaults to log)
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
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<Boolean>}
     */
    static subscribe(siteId)
    {
        if(isDefined(Points.initialized) && Points.initialized == true)
        {
            WebSocketHelper.subscribe('site.' + siteId);

            if(hasToken() != true)
            {
                throw new Error("Points.subscribe cannot be called before Authentication has been successful");
            }

            return new Promise((resolve, reject) => {
                Points.loadPointDefinitions(siteId)
                .then(() => {
                    Points.loadPointValues(siteId)
                    .then(() => {
                        resolve(true);
                    })
                    .catch(() => {
                        reject(new Error("Failed to Subscribe to Site ID " + siteId + ". Unable to Fetch the Point Values"));
                    });
                })
                .catch(() => {
                    reject(new Error("Failed to Subscribe to Site ID " + siteId + ". Unable to Fetch the Point Definitions"));
                });
            });
        }
        else
        {
            throw new Error("Points.subscribe cannot be called before the API Client has been Initialized");
        }
    }

    /**
     * Unsubscribe from a Site for Points
     * 
     * @public
     * @param {number} siteId - The Site ID
     */
    static unsubscribe(siteId)
    {
        if(isDefined(Points.initialized) && Points.initialized == true)
        {
            WebSocketHelper.unsubscribe('site.' + siteId);

            if(isDefined(Points._definitions))
            {
                if(siteId in Points._definitions)
                {
                    delete Points._definitions[siteId];
                }
            }

            if(isDefined(Points._values))
            {
                if(siteId in Points._values)
                {
                    delete Points._values[siteId];
                }
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
     * @public
     * @param {string} event - The Event to Register a Handler for
     * @param {Function} handler - The Handler Function
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
     * Register 'readpoints' Event Handler
     * 
     * @public
     * @param {Function} handler - The Handler Function
     */
    static onReadPoints(handler)
    {
        Points.on('readpoints', handler);
    }

    /**
     * Get Point Definition
     * 
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @return {Object} - The Point Definition
     */
    static getDefinition(siteId, pointId)
    {
        if(siteId in Points._definitions)
        {
            if(pointId in Points._definitions[siteId])
            {
                return Points._definitions[siteId][pointId];
            }
        }

        return undefined;
    }

    /**
     * Get Point Value
     * 
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @return {Object} - The Point Value
     */
    static getValue(siteId, pointId)
    {
        if(siteId in Points._values)
        {
            if(pointId in Points._values[siteId])
            {
                return Points._values[siteId][pointId];
            }
        }

        return undefined;
    }

    /**
     * Set Point Value
     * 
     * @public
     * @param {number} siteId - The Site ID
     * @param {number} pointId - The Point ID
     * @param {any} value - The Point Value to Write
     * @return {Promise<String>}
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
     * @private
     * @param {number} siteId - The Site ID to pull Point Definitions from
     * @return {Promise<Boolean>}
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
                points.forEach((point) => {
                    if(siteId in Points._definitions)
                    {
                        Points._definitions[siteId][point.id] = point;
                    }
                });
                resolve(true);
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
     * @private
     * @param {number} siteId - The Site ID to pull Point Values from
     * @return {Promise<Boolean>}
     */
    static loadPointValues(siteId)
    {
        if((siteId in Points._values) != true)
        {
            Points._values[siteId] = {};
        }
        
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest('/sites/' + siteId + '/points/values')
            .then((pointValues) => {
                let changedPoints = [];
                
                pointValues.forEach((pointValue) => {
                    if(siteId in Points._values)
                    {
                        if(pointValue.id in Points._values[siteId])
                        {
                            Points._values[siteId][pointValue.id] = pointValue;

                            if(Points._values[siteId][pointValue.id].value != pointValue.value || Points._values[siteId][pointValue.id].timestamp != pointValue.timestamp)
                            {
                                changedPoints.push(pointValue);
                            }
                        }
                        else
                        {
                            Points._values[siteId][pointValue.id] = pointValue;
                            changedPoints.push(pointValue);
                        }
                    }
                });

                if(changedPoints.length > 0)
                {
                    Points._emitter.emit('readpoints', siteId, changedPoints);
                }

                resolve(true);
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
     * @private
     * @return {number}
     */
    static getDefaultSiteId()
    {
        if(isDefined(Points._definitions) && Object.keys(Points._definitions).length > 0)
        {
            return Object.keys(Points._definitions)[0];
        }

        return undefined;
    }
}

export default Points;
