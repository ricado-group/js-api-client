/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerPackrunSummaryModel from '../../../Models/Packhouse/Site/CompacSizerPackrunSummaryModel';

/**
 * Controller Class for Compac Sizer Packrun Summaries
 * 
 * @class
 */
class CompacSizerPackrunSummaryController
{
    /**
     * Retrieve a Compac Sizer Packrun Summary [GET /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerPackrunSummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer Packrun Summary [PATCH /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @param {CompacSizerPackrunSummaryController.UpdateData} updateData The Compac Sizer Packrun Summary Update Data
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerPackrunSummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer Packrun Summary [DELETE /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}/comments]
     * 
     * Retrieves Comments for a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @return {Promise<Array<CompacSizerPackrunSummaryController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}/comments]
     * 
     * Create a Comment for a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<CompacSizerPackrunSummaryController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @param {string} commentId The Comment ID
     * @return {Promise<CompacSizerPackrunSummaryController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<CompacSizerPackrunSummaryController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/compac-sizer-packrun-summaries/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Compac Sizer Packrun Summary
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Packrun Summary ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizer Packrun Summaries [GET /packhouse/sites/{siteId}/compac-sizer-packrun-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerPackrunSummaryController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<CompacSizerPackrunSummaryModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompacSizerPackrunSummaryModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer Packrun Summary [POST /packhouse/sites/{siteId}/compac-sizer-packrun-summaries]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerPackrunSummaryController.CreateData} createData The Compac Sizer Packrun Summary Create Data
     * @return {Promise<CompacSizerPackrunSummaryModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-packrun-summaries`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerPackrunSummaryModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerPackrunSummaryController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} CompacSizerPackrunSummaryController.GetAllQueryParameters
 * @property {string} [compacSizerId] The Compac Sizer ID this Summary is associated with
 * @property {string} [packrunId] The Packrun ID this Summary is associated with
 * @property {?string} [timeBatchId] The Time Batch this Summary is associated with
 * @property {Date} [createdTimestampBegin] Filter by the Timestamp when this Compac Sizer Packrun Summary was Created. Results Greater than or Equal to Timestamp
 * @property {Date} [createdTimestampEnd] Filter by the Timestamp when this Compac Sizer Packrun Summary was Created. Results Less than or Equal to Timestamp
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Compac Sizer Packrun Summary
 * 
 * @typedef {Object} CompacSizerPackrunSummaryController.CreateData
 * @property {string} compacSizerId The Compac Sizer ID this Summary is associated with
 * @property {string} [packrunId] The Packrun ID this Summary is associated with
 * @property {Date} [createdTimestamp] When this Summary was Created
 * @property {?string} timeBatchId The Time Batch this Summary is associated with
 * @property {Object[]} [outletSummaries] An Array of Packrun Summary Data Objects for each Outlet
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer Packrun Summary
 * 
 * @typedef {Object} CompacSizerPackrunSummaryController.UpdateData
 * @property {string} [compacSizerId] The Compac Sizer ID this Summary is associated with
 * @property {Date} [createdTimestamp] When this Summary was Created
 * @property {?string} [timeBatchId] The Time Batch this Summary is associated with
 * @property {Object[]} [outletSummaries] An Array of Packrun Summary Data Objects for each Outlet
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} CompacSizerPackrunSummaryController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */