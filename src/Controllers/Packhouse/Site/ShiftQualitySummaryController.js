/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import ShiftQualitySummaryModel from '../../../Models/Packhouse/Site/ShiftQualitySummaryModel';

/**
 * Controller Class for Shift Quality Summaries
 * 
 * @class
 */
class ShiftQualitySummaryController
{
    /**
     * Retrieve a Shift Quality Summary [GET /packhouse/sites/{siteId}/shift-quality-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @return {Promise<ShiftQualitySummaryModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftQualitySummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Shift Quality Summary [PATCH /packhouse/sites/{siteId}/shift-quality-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @param {ShiftQualitySummaryController.UpdateData} updateData The Shift Quality Summary Update Data
     * @return {Promise<ShiftQualitySummaryModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftQualitySummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Shift Quality Summary [DELETE /packhouse/sites/{siteId}/shift-quality-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/shift-quality-summaries/{id}/comments]
     * 
     * Retrieves Comments for a Shift Quality Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @return {Promise<Array<ShiftQualitySummaryController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/shift-quality-summaries/{id}/comments]
     * 
     * Create a Comment for a Shift Quality Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<ShiftQualitySummaryController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/shift-quality-summaries/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Shift Quality Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @param {string} commentId The Comment ID
     * @return {Promise<ShiftQualitySummaryController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/shift-quality-summaries/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Shift Quality Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<ShiftQualitySummaryController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/shift-quality-summaries/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Shift Quality Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Shift Quality Summary ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/shift-quality-summaries/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Shift Quality Summaries [GET /packhouse/sites/{siteId}/shift-quality-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {ShiftQualitySummaryController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<ShiftQualitySummaryModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/shift-quality-summaries`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return ShiftQualitySummaryModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Shift Quality Summary [POST /packhouse/sites/{siteId}/shift-quality-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {ShiftQualitySummaryController.CreateData} createData The Shift Quality Summary Create Data
     * @return {Promise<ShiftQualitySummaryModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/shift-quality-summaries`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return ShiftQualitySummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default ShiftQualitySummaryController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} ShiftQualitySummaryController.GetAllQueryParameters
 * @property {string} [packingLineId] The Packing Line ID this Quality Summary is associated with
 * @property {string} [shiftId] The Shift ID this Quality Summary is asssociated with
 * @property {?string} [qualityManagerUserId] The User ID of the Quality Manager for this Summary
 * @property {string} [qualityManagerName] The Name of the Quality Manager for this Summary
 * @property {Date} [createdTimestampBegin] Filter by the Timestamp when Quality Summaries were Created. Results Greater than or Equal to Timestamp
 * @property {Date} [createdTimestampEnd] Filter by the Timestamp when Quality Summaries were Created. Results Less than or Equal to Timestamp
 * @property {Date} [updateTimestampBegin] Filter by the Timestamp when Quality Summaries were last Updated. Results Greater than or Equal to Timestamp
 * @property {Date} [updateTimestampEnd] Filter by the Timestamp when Quality Summaries were last Updated. Results Less than or Equal to Timestamp
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Shift Quality Summary
 * 
 * @typedef {Object} ShiftQualitySummaryController.CreateData
 * @property {string} packingLineId The Packing Line ID this Quality Summary is associated with
 * @property {string} [shiftId] The Shift ID this Quality Summary is asssociated with
 * @property {Date} [createdTimestamp] When this Quality Summary was Created
 * @property {?Date} [publishTimestamp] When this Quality Summary was Published
 * @property {?string} [qualityManagerUserId] The User ID of the Quality Manager for this Summary
 * @property {string} qualityManagerName The Name of the Quality Manager for this Summary
 * @property {Array<ShiftQualitySummaryController.AccuracyResult>} [accuracyResults] An Array of Accuracy Results for this Summary
 * @property {Array<ShiftQualitySummaryController.AuditResult>} [auditResults] An Array of Audit Results for this Summary
 * @property {Array<ShiftQualitySummaryController.PackrunResult>} [packrunResults] An Array of Packrun Results for this Summary
 * @property {?number} [satisfactionRating] An Optional Rating between 1 and 10 on how Satisfied the Quality Manager was with this Shift
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Shift Quality Summary
 * 
 * @typedef {Object} ShiftQualitySummaryController.UpdateData
 * @property {string} [packingLineId] The Packing Line ID this Quality Summary is associated with
 * @property {Date} [createdTimestamp] When this Quality Summary was Created
 * @property {?Date} [publishTimestamp] When this Quality Summary was Published
 * @property {?string} [qualityManagerUserId] The User ID of the Quality Manager for this Summary
 * @property {string} [qualityManagerName] The Name of the Quality Manager for this Summary
 * @property {Array<ShiftQualitySummaryController.AccuracyResult>} [accuracyResults] An Array of Accuracy Results for this Summary
 * @property {Array<ShiftQualitySummaryController.AuditResult>} [auditResults] An Array of Audit Results for this Summary
 * @property {Array<ShiftQualitySummaryController.PackrunResult>} [packrunResults] An Array of Packrun Results for this Summary
 * @property {?number} [satisfactionRating] An Optional Rating between 1 and 10 on how Satisfied the Quality Manager was with this Shift
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} ShiftQualitySummaryController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AccuracyResult** Type
 * 
 * @typedef {Object} ShiftQualitySummaryController.AccuracyResult
 * @property {string} type The Accuracy Type
 * @property {number} value The Accuracy Result Value
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **AuditResult** Type
 * 
 * @typedef {Object} ShiftQualitySummaryController.AuditResult
 * @property {string} type The Audit Type
 * @property {number} value The Audit Result Value
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **PackrunResult** Type
 * 
 * @typedef {Object} ShiftQualitySummaryController.PackrunResult
 * @property {string} packrunId The ID of the associated Packrun
 * @property {string} packrunName The Name of the associated Packrun
 * @property {number} minorPackingDefects The R600 Minor Defects Percentage
 * @property {number} majorPackingDefects The R600 Major Defects Percentage
 * @property {number} softs The R600 Softs Percentage
 * @property {number} cuts The R600 Cuts (e.g. Flesh Damage) Percentage
 * @property {number} rots The R600 Rots Percentage
 * @property {?number} softsLineAverageSampleSize The Softs Line Average Sample Size
 * @property {?number} softsLineAverageValue The Softs Line Average Value
 * @property {?number} exportFruitInClass2 The Percentage of Export (Class 1) Fruit found in Class 2
 * @property {?number} exportFruitInLocalMarket The Percentage of Export (Class 1) Fruit found in Local Market
 * @property {?number} exportFruitInWaste The Percentage of Export (Class 1) Fruit found in Waste
 * @memberof Controllers.Packhouse.Site
 */