/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import DowntimeEventModel from '../../../Models/Packhouse/Site/DowntimeEventModel';

/**
 * Controller Class for Downtime Events
 * 
 * @class
 */
class DowntimeEventController
{
    /**
     * Retrieve a Downtime Event [GET /packhouse/sites/{siteId}/downtime-events/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @return {Promise<DowntimeEventModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/downtime-events/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return DowntimeEventModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Downtime Event [PATCH /packhouse/sites/{siteId}/downtime-events/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @param {DowntimeEventController.UpdateData} updateData The Downtime Event Update Data
     * @return {Promise<DowntimeEventModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/downtime-events/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return DowntimeEventModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Downtime Event [DELETE /packhouse/sites/{siteId}/downtime-events/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/downtime-events/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/downtime-events/{id}/comments]
     * 
     * Retrieves Comments for a Downtime Event
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @return {Promise<Array<DowntimeEventController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/downtime-events/${id}/comments`)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            let resultItemObject = {};
                            
                            if(typeof resultItem === 'object' && 'id' in resultItem)
                            {
                                resultItemObject.id = (function(){
                                    if(typeof resultItem.id !== 'string')
                                    {
                                        return String(resultItem.id);
                                    }
                
                                    return resultItem.id;
                                }());
                            }
                            else
                            {
                                resultItemObject.id = "";
                            }
                            
                            if(typeof resultItem === 'object' && 'content' in resultItem)
                            {
                                resultItemObject.content = (function(){
                                    if(resultItem.content === null)
                                    {
                                        return null;
                                    }
                
                                    if(typeof resultItem.content !== 'string')
                                    {
                                        return String(resultItem.content);
                                    }
                
                                    return resultItem.content;
                                }());
                            }
                            else
                            {
                                resultItemObject.content = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'createdTimestamp' in resultItem)
                            {
                                resultItemObject.createdTimestamp = (function(){
                                    if(resultItem.createdTimestamp === null)
                                    {
                                        return null;
                                    }
                
                                    if(typeof resultItem.createdTimestamp !== 'string')
                                    {
                                        return new Date(String(resultItem.createdTimestamp));
                                    }
                
                                    return new Date(resultItem.createdTimestamp);
                                }());
                            }
                            else
                            {
                                resultItemObject.createdTimestamp = null;
                            }
                            
                            if(typeof resultItem === 'object' && 'updatedTimestamp' in resultItem)
                            {
                                resultItemObject.updatedTimestamp = (function(){
                                    if(resultItem.updatedTimestamp === null)
                                    {
                                        return null;
                                    }
                
                                    if(typeof resultItem.updatedTimestamp !== 'string')
                                    {
                                        return new Date(String(resultItem.updatedTimestamp));
                                    }
                
                                    return new Date(resultItem.updatedTimestamp);
                                }());
                            }
                            else
                            {
                                resultItemObject.updatedTimestamp = null;
                            }
                
                            return resultItemObject;
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Comment [POST /packhouse/sites/{siteId}/downtime-events/{id}/comments]
     * 
     * Create a Comment for a Downtime Event
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<DowntimeEventController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/downtime-events/${id}/comments`, {content})
            .then((result) => {
                let resolveValue = (function(){
                    let resultObject = {};
                    
                    if(typeof result === 'object' && 'id' in result)
                    {
                        resultObject.id = (function(){
                            if(typeof result.id !== 'string')
                            {
                                return String(result.id);
                            }
                
                            return result.id;
                        }());
                    }
                    else
                    {
                        resultObject.id = "";
                    }
                    
                    if(typeof result === 'object' && 'content' in result)
                    {
                        resultObject.content = (function(){
                            if(result.content === null)
                            {
                                return null;
                            }
                
                            if(typeof result.content !== 'string')
                            {
                                return String(result.content);
                            }
                
                            return result.content;
                        }());
                    }
                    else
                    {
                        resultObject.content = null;
                    }
                    
                    if(typeof result === 'object' && 'createdTimestamp' in result)
                    {
                        resultObject.createdTimestamp = (function(){
                            if(result.createdTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.createdTimestamp !== 'string')
                            {
                                return new Date(String(result.createdTimestamp));
                            }
                
                            return new Date(result.createdTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.createdTimestamp = null;
                    }
                    
                    if(typeof result === 'object' && 'updatedTimestamp' in result)
                    {
                        resultObject.updatedTimestamp = (function(){
                            if(result.updatedTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.updatedTimestamp !== 'string')
                            {
                                return new Date(String(result.updatedTimestamp));
                            }
                
                            return new Date(result.updatedTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.updatedTimestamp = null;
                    }
                
                    return resultObject;
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/downtime-events/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Downtime Event
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @param {string} commentId The Comment ID
     * @return {Promise<DowntimeEventController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/downtime-events/${id}/comments/${commentId}`)
            .then((result) => {
                let resolveValue = (function(){
                    let resultObject = {};
                    
                    if(typeof result === 'object' && 'id' in result)
                    {
                        resultObject.id = (function(){
                            if(typeof result.id !== 'string')
                            {
                                return String(result.id);
                            }
                
                            return result.id;
                        }());
                    }
                    else
                    {
                        resultObject.id = "";
                    }
                    
                    if(typeof result === 'object' && 'content' in result)
                    {
                        resultObject.content = (function(){
                            if(result.content === null)
                            {
                                return null;
                            }
                
                            if(typeof result.content !== 'string')
                            {
                                return String(result.content);
                            }
                
                            return result.content;
                        }());
                    }
                    else
                    {
                        resultObject.content = null;
                    }
                    
                    if(typeof result === 'object' && 'createdTimestamp' in result)
                    {
                        resultObject.createdTimestamp = (function(){
                            if(result.createdTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.createdTimestamp !== 'string')
                            {
                                return new Date(String(result.createdTimestamp));
                            }
                
                            return new Date(result.createdTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.createdTimestamp = null;
                    }
                    
                    if(typeof result === 'object' && 'updatedTimestamp' in result)
                    {
                        resultObject.updatedTimestamp = (function(){
                            if(result.updatedTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.updatedTimestamp !== 'string')
                            {
                                return new Date(String(result.updatedTimestamp));
                            }
                
                            return new Date(result.updatedTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.updatedTimestamp = null;
                    }
                
                    return resultObject;
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Comment [PATCH /packhouse/sites/{siteId}/downtime-events/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Downtime Event
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<DowntimeEventController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/downtime-events/${id}/comments/${commentId}`, {content})
            .then((result) => {
                let resolveValue = (function(){
                    let resultObject = {};
                    
                    if(typeof result === 'object' && 'id' in result)
                    {
                        resultObject.id = (function(){
                            if(typeof result.id !== 'string')
                            {
                                return String(result.id);
                            }
                
                            return result.id;
                        }());
                    }
                    else
                    {
                        resultObject.id = "";
                    }
                    
                    if(typeof result === 'object' && 'content' in result)
                    {
                        resultObject.content = (function(){
                            if(result.content === null)
                            {
                                return null;
                            }
                
                            if(typeof result.content !== 'string')
                            {
                                return String(result.content);
                            }
                
                            return result.content;
                        }());
                    }
                    else
                    {
                        resultObject.content = null;
                    }
                    
                    if(typeof result === 'object' && 'createdTimestamp' in result)
                    {
                        resultObject.createdTimestamp = (function(){
                            if(result.createdTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.createdTimestamp !== 'string')
                            {
                                return new Date(String(result.createdTimestamp));
                            }
                
                            return new Date(result.createdTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.createdTimestamp = null;
                    }
                    
                    if(typeof result === 'object' && 'updatedTimestamp' in result)
                    {
                        resultObject.updatedTimestamp = (function(){
                            if(result.updatedTimestamp === null)
                            {
                                return null;
                            }
                
                            if(typeof result.updatedTimestamp !== 'string')
                            {
                                return new Date(String(result.updatedTimestamp));
                            }
                
                            return new Date(result.updatedTimestamp);
                        }());
                    }
                    else
                    {
                        resultObject.updatedTimestamp = null;
                    }
                
                    return resultObject;
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/downtime-events/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Downtime Event
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Downtime Event ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/downtime-events/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Downtime Events [GET /packhouse/sites/{siteId}/downtime-events]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {DowntimeEventController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<DowntimeEventModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/downtime-events`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return DowntimeEventModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Downtime Event [POST /packhouse/sites/{siteId}/downtime-events]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {DowntimeEventController.CreateData} createData The Downtime Event Create Data
     * @return {Promise<DowntimeEventModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/downtime-events`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return DowntimeEventModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default DowntimeEventController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} DowntimeEventController.GetAllQueryParameters
 * @property {string} [packingLineId] The Packing Line ID this Downtime Event is associated with
 * @property {string} [shiftId] The Shift ID this Downtime Event is asssociated with
 * @property {?string} [reasonCategory] The Reason Category for this Downtime Event
 * @property {?string} [reasonTag] The Reason Tag for this Downtime Event
 * @property {string} [source] The Source which Created this Downtime Event
 * @property {string} [status] The Status of this Downtime Event
 * @property {Date} [createdTimestampBegin] Filter by the Timestamp when Downtime Events were Created. Results Greater than or Equal to Timestamp
 * @property {Date} [createdTimestampEnd] Filter by the Timestamp when Downtime Events were Created. Results Less than or Equal to Timestamp
 * @property {Date} [startTimestampBegin] Filter by the Timestamp when Downtime Events Started. Results Greater than or Equal to Timestamp
 * @property {Date} [startTimestampEnd] Filter by the Timestamp when Downtime Events Started. Results Less than or Equal to Timestamp
 * @property {Date} [endTimestampBegin] Filter by the Timestamp when Downtime Events Ended. Results Greater than or Equal to Timestamp
 * @property {Date} [endTimestampEnd] Filter by the Timestamp when Downtime Events Ended. Results Less than or Equal to Timestamp
 * @property {Date} [updateTimestampBegin] Filter by the Timestamp when Downtime Events were last Updated. Results Greater than or Equal to Timestamp
 * @property {Date} [updateTimestampEnd] Filter by the Timestamp when Downtime Events were last Updated. Results Less than or Equal to Timestamp
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Downtime Event
 * 
 * @typedef {Object} DowntimeEventController.CreateData
 * @property {string} packingLineId The Packing Line ID this Downtime Event is associated with
 * @property {string} [shiftId] The Shift ID this Downtime Event is asssociated with
 * @property {Date} [createdTimestamp] When this Downtime Event was Created
 * @property {Date} startTimestamp When this Downtime Event Started
 * @property {?Date} [endTimestamp] When this Downtime Event Ended
 * @property {?string} [reasonCategory] The Reason Category for this Downtime Event
 * @property {?string} [reasonTag] The Reason Tag for this Downtime Event
 * @property {?string} [remedyAction] An Optional Summary of the Action taken to Remedy this Downtime Event
 * @property {?number} [avoidableRating] An Optional Rating between 1 and 10 on how likely this Downtime Event could have been Avoided
 * @property {string} [source] The Source which Created this Downtime Event
 * @property {string} [status] The Status of this Downtime Event
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Downtime Event
 * 
 * @typedef {Object} DowntimeEventController.UpdateData
 * @property {string} [packingLineId] The Packing Line ID this Downtime Event is associated with
 * @property {Date} [createdTimestamp] When this Downtime Event was Created
 * @property {Date} [startTimestamp] When this Downtime Event Started
 * @property {?Date} [endTimestamp] When this Downtime Event Ended
 * @property {?string} [reasonCategory] The Reason Category for this Downtime Event
 * @property {?string} [reasonTag] The Reason Tag for this Downtime Event
 * @property {?string} [remedyAction] An Optional Summary of the Action taken to Remedy this Downtime Event
 * @property {?number} [avoidableRating] An Optional Rating between 1 and 10 on how likely this Downtime Event could have been Avoided
 * @property {string} [source] The Source which Created this Downtime Event
 * @property {string} [status] The Status of this Downtime Event
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} DowntimeEventController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */