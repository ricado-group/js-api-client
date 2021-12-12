/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import ShiftHourlyEntryModel from '../../../Models/Packhouse/Site/ShiftHourlyEntryModel';

/**
 * Controller Class for Shift Hourly Entrys
 * 
 * @class
 */
class ShiftHourlyEntryController
{
    /**
     * Retrieve a Shift Hourly Entry [GET /packhouse/sites/{siteId}/shift-hourly-entries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @return {Promise<ShiftHourlyEntryModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftHourlyEntryModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Shift Hourly Entry [PATCH /packhouse/sites/{siteId}/shift-hourly-entries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @param {ShiftHourlyEntryController.UpdateData} updateData The Shift Hourly Entry Update Data
     * @return {Promise<ShiftHourlyEntryModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftHourlyEntryModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Shift Hourly Entry [DELETE /packhouse/sites/{siteId}/shift-hourly-entries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/shift-hourly-entries/{id}/comments]
     * 
     * Retrieves Comments for a Shift Hourly Entry
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @return {Promise<Array<ShiftHourlyEntryController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/shift-hourly-entries/{id}/comments]
     * 
     * Create a Comment for a Shift Hourly Entry
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<ShiftHourlyEntryController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/shift-hourly-entries/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Shift Hourly Entry
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @param {string} commentId The Comment ID
     * @return {Promise<ShiftHourlyEntryController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/shift-hourly-entries/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Shift Hourly Entry
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<ShiftHourlyEntryController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/shift-hourly-entries/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Shift Hourly Entry
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Hourly Entry ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/shift-hourly-entries/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Shift Hourly Entrys [GET /packhouse/sites/{siteId}/shift-hourly-entries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {ShiftHourlyEntryController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<ShiftHourlyEntryModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-hourly-entries`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return ShiftHourlyEntryModel.fromJSON(resultItem);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Shift Hourly Entry [POST /packhouse/sites/{siteId}/shift-hourly-entries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {ShiftHourlyEntryController.CreateData} createData The Shift Hourly Entry Create Data
     * @return {Promise<ShiftHourlyEntryModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/shift-hourly-entries`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftHourlyEntryModel.fromJSON(result);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default ShiftHourlyEntryController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} ShiftHourlyEntryController.GetAllQueryParameters
 * @property {string} [packingLineId] The Packing Line ID this Hourly Entry is associated with
 * @property {string} [shiftId] The Shift ID this Hourly Entry is asssociated with
 * @property {?string} [primaryIssueCategory] The Primary Issue Category for this Hourly Entry
 * @property {?string} [primaryIssueTag] The Primary Issue Tag for this Hourly Entry
 * @property {?string} [secondaryIssueCategory] The Secondary Issue Category for this Hourly Entry
 * @property {?string} [secondaryIssueTag] The Secondary Issue Tag for this Hourly Entry
 * @property {string} [status] The Status of this Hourly Entry
 * @property {Date} [createdTimestampBegin] Filter by the Timestamp when Hourly Entries were Created. Results Greater than or Equal to Timestamp
 * @property {Date} [createdTimestampEnd] Filter by the Timestamp when Hourly Entries were Created. Results Less than or Equal to Timestamp
 * @property {Date} [startTimestampBegin] Filter by the Start Timestamp of Hourly Entries. Results Greater than or Equal to Timestamp
 * @property {Date} [startTimestampEnd] Filter by the Start Timestamp of Hourly Entries. Results Less than or Equal to Timestamp
 * @property {Date} [endTimestampBegin] Filter by the End Timestamp of Hourly Entries. Results Greater than or Equal to Timestamp
 * @property {Date} [endTimestampEnd] Filter by the End Timestamp of Hourly Entries. Results Less than or Equal to Timestamp
 * @property {Date} [updateTimestampBegin] Filter by the Timestamp when Hourly Entries were last Updated. Results Greater than or Equal to Timestamp
 * @property {Date} [updateTimestampEnd] Filter by the Timestamp when Hourly Entries were last Updated. Results Less than or Equal to Timestamp
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Shift Hourly Entry
 * 
 * @typedef {Object} ShiftHourlyEntryController.CreateData
 * @property {string} packingLineId The Packing Line ID this Hourly Entry is associated with
 * @property {string} [shiftId] The Shift ID this Hourly Entry is asssociated with
 * @property {Date} [createdTimestamp] When this Hourly Entry was Created
 * @property {Date} startTimestamp The Start Timestamp of this Hourly Entry
 * @property {Date} endTimestamp The End Timestamp of this Hourly Entry
 * @property {?number} [class1Manning] The Number of People working in all Areas except Class 2 for this Hour
 * @property {?number} [class2Manning] The Number of People working in the Class 2 Area for this Hour
 * @property {?number} [averageManningTarget] The Average Target Number of People that should be working for this Hour
 * @property {?number} [layeredTrayPercentage] The Percentage of Total Tray Equivalents that are Layered for this Hour
 * @property {?number} [averageClass1Percentage] The Average Class 1 Percentage for this Hour
 * @property {?number} [qualityR600IdealSamplesPercentage] The Number of Quality R600 Samples that were Ideal for this Hour
 * @property {Array<ShiftHourlyEntryController.CustomQualityDataItem>} [customQualityData] An Array of Custom Quality Data Items for this Hour
 * @property {number} [totalBinsTipped] The Total Number of Bins Tipped for this Hour
 * @property {number} [binsTippedTarget] The Target Number of Bins to Tip for this Hour
 * @property {number} [totalDowntime] The Total Downtime for this Hour expressed in Seconds
 * @property {number} [totalProductionTime] The Total Time that could be Utilized for Packing Fruit (excludes Planned Downtime such as Smoko Breaks) for this Hour expressed in Seconds
 * @property {number} [totalClass1Trays] The Total Number of Class 1 Tray Equivalents Packed for this Hour
 * @property {number} [totalClass2Trays] The Total Number of Class 2 Tray Equivalents Packed for this Hour
 * @property {number} [class1TraysPerHourExcludingDowntimeTarget] The Target Number of Class 1 Tray Equivalents that should be Packed excluding all Downtime for this Hour
 * @property {?string} [primaryIssueCategory] The Primary Issue Category for this Hourly Entry
 * @property {?string} [primaryIssueTag] The Primary Issue Tag for this Hourly Entry
 * @property {?string} [secondaryIssueCategory] The Secondary Issue Category for this Hourly Entry
 * @property {?string} [secondaryIssueTag] The Secondary Issue Tag for this Hourly Entry
 * @property {?string} [nextHourFocus] An Optional Focus for the Next Hour
 * @property {?number} [satisfactionRating] An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Hour
 * @property {string} [status] The Status of this Hourly Entry
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Shift Hourly Entry
 * 
 * @typedef {Object} ShiftHourlyEntryController.UpdateData
 * @property {string} [packingLineId] The Packing Line ID this Hourly Entry is associated with
 * @property {Date} [createdTimestamp] When this Hourly Entry was Created
 * @property {Date} [startTimestamp] The Start Timestamp of this Hourly Entry
 * @property {Date} [endTimestamp] The End Timestamp of this Hourly Entry
 * @property {?number} [class1Manning] The Number of People working in all Areas except Class 2 for this Hour
 * @property {?number} [class2Manning] The Number of People working in the Class 2 Area for this Hour
 * @property {?number} [averageManningTarget] The Average Target Number of People that should be working for this Hour
 * @property {?number} [layeredTrayPercentage] The Percentage of Total Tray Equivalents that are Layered for this Hour
 * @property {?number} [averageClass1Percentage] The Average Class 1 Percentage for this Hour
 * @property {?number} [qualityR600IdealSamplesPercentage] The Number of Quality R600 Samples that were Ideal for this Hour
 * @property {Array<ShiftHourlyEntryController.CustomQualityDataItem>} [customQualityData] An Array of Custom Quality Data Items for this Hour
 * @property {number} [totalBinsTipped] The Total Number of Bins Tipped for this Hour
 * @property {number} [binsTippedTarget] The Target Number of Bins to Tip for this Hour
 * @property {number} [totalDowntime] The Total Downtime for this Hour expressed in Seconds
 * @property {number} [totalProductionTime] The Total Time that could be Utilized for Packing Fruit (excludes Planned Downtime such as Smoko Breaks) for this Hour expressed in Seconds
 * @property {number} [totalClass1Trays] The Total Number of Class 1 Tray Equivalents Packed for this Hour
 * @property {number} [totalClass2Trays] The Total Number of Class 2 Tray Equivalents Packed for this Hour
 * @property {number} [class1TraysPerHourExcludingDowntimeTarget] The Target Number of Class 1 Tray Equivalents that should be Packed excluding all Downtime for this Hour
 * @property {?string} [primaryIssueCategory] The Primary Issue Category for this Hourly Entry
 * @property {?string} [primaryIssueTag] The Primary Issue Tag for this Hourly Entry
 * @property {?string} [secondaryIssueCategory] The Secondary Issue Category for this Hourly Entry
 * @property {?string} [secondaryIssueTag] The Secondary Issue Tag for this Hourly Entry
 * @property {?string} [nextHourFocus] An Optional Focus for the Next Hour
 * @property {?number} [satisfactionRating] An Optional Rating between 1 and 10 on how Satisfied the Line Manager was with this Hour
 * @property {string} [status] The Status of this Hourly Entry
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} ShiftHourlyEntryController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CustomQualityDataItem** Type
 * 
 * @typedef {Object} ShiftHourlyEntryController.CustomQualityDataItem
 * @property {string} id The ID of this Custom Quality Data Item
 * @property {string} name The Name of this Custom Quality Data Item
 * @property {string} type The Display Type for this Custom Quality Data Item
 * @property {number} value The Number Value for this Custom Quality Data Item
 * @memberof Controllers.Packhouse.Site
 */