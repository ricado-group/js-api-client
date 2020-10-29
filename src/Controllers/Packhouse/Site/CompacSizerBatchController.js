/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import CompacSizerBatchModel from '../../../Models/Packhouse/Site/CompacSizerBatchModel';

/**
 * Controller Class for Compac Sizer Batches
 * 
 * @class
 */
class CompacSizerBatchController
{
    /**
     * Retrieve a Compac Sizer Batch [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<CompacSizerBatchModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerBatchModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Compac Sizer Batch [PATCH /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {CompacSizerBatchController.UpdateData} updateData The Compac Sizer Batch Update Data
     * @return {Promise<CompacSizerBatchModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerBatchModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Compac Sizer Batch [DELETE /packhouse/sites/{siteId}/compac-sizer-batches/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments]
     * 
     * Retrieves Comments for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @return {Promise<Array<CompacSizerBatchController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments]
     * 
     * Create a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<CompacSizerBatchController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @return {Promise<CompacSizerBatchController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<CompacSizerBatchController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/compac-sizer-batches/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Compac Sizer Batch
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Compac Sizer Batch ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/compac-sizer-batches/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Compac Sizer Batches [GET /packhouse/sites/{siteId}/compac-sizer-batches]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.compacSizerId] The Compac Sizer ID this Batch is associated with
     * @param {string} [queryParameters.batchId] The Numeric Compac Batch ID
     * @param {?string} [queryParameters.packrunId] The Packrun ID associated with this Batch
     * @param {Date} [queryParameters.createdTimestampBegin] Filter by the Timestamp when this Compac Sizer Batch was Created. Results Greater than or Equal to Timestamp
     * @param {Date} [queryParameters.createdTimestampEnd] Filter by the Timestamp when this Compac Sizer Batch was Created. Results Less than or Equal to Timestamp
     * @param {string} [queryParameters.batchName] Filter by the Compac Batch Name
     * @return {Promise<CompacSizerBatchModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/compac-sizer-batches`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return CompacSizerBatchModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Compac Sizer Batch [POST /packhouse/sites/{siteId}/compac-sizer-batches]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {CompacSizerBatchController.CreateData} createData The Compac Sizer Batch Create Data
     * @return {Promise<CompacSizerBatchModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/compac-sizer-batches`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return CompacSizerBatchModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default CompacSizerBatchController;

/**
 * The Create Data for a Compac Sizer Batch
 * 
 * @typedef {Object} CompacSizerBatchController.CreateData
 * @property {string} compacSizerId The Compac Sizer ID this Batch is associated with
 * @property {string} [batchId] The Numeric Compac Batch ID
 * @property {Date} [createdTimestamp] When this Batch was Created
 * @property {?string} packrunId The Packrun ID associated with this Batch
 * @property {Object} batch The Compac Sizer Batch Data
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Compac Sizer Batch
 * 
 * @typedef {Object} CompacSizerBatchController.UpdateData
 * @property {string} [compacSizerId] The Compac Sizer ID this Batch is associated with
 * @property {Date} [createdTimestamp] When this Batch was Created
 * @property {?string} [packrunId] The Packrun ID associated with this Batch
 * @property {Object} [batch] The Compac Sizer Batch Data
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} CompacSizerBatchController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */