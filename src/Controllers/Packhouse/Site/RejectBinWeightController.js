/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import RejectBinWeightModel from '../../../Models/Packhouse/Site/RejectBinWeightModel';

/**
 * Controller Class for Reject Bin Weights
 * 
 * @class
 */
class RejectBinWeightController
{
    /**
     * Retrieve a Reject Bin Weight [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @return {Promise<RejectBinWeightModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Reject Bin Weight [PATCH /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @param {RejectBinWeightController.UpdateData} updateData The Reject Bin Weight Update Data
     * @return {Promise<RejectBinWeightModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Reject Bin Weight [DELETE /packhouse/sites/{siteId}/reject-bin-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments]
     * 
     * Retrieves Comments for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @return {Promise<Array<RejectBinWeightController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments]
     * 
     * Create a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<RejectBinWeightController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @param {string} commentId The Comment ID
     * @return {Promise<RejectBinWeightController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<RejectBinWeightController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/reject-bin-weights/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Reject Bin Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Reject Bin Weight ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/reject-bin-weights/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Reject Bin Weights [GET /packhouse/sites/{siteId}/reject-bin-weights]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string=} queryParameters.rejectBinScaleId The Reject Bin Scale ID this Reject Weight is associated with
     * @param {string=} queryParameters.rejectBinId The Reject Bin ID this Reject Weight is associated with
     * @param {?string=} queryParameters.packrunId The Packrun this Reject Weight is associated with
     * @param {Date=} queryParameters.createdTimestampBegin Filter by the Timestamp when this Reject Bin Weight was Created. Results Greater than or Equal to Timestamp
     * @param {Date=} queryParameters.createdTimestampEnd Filter by the Timestamp when this Reject Bin Weight was Created. Results Less than or Equal to Timestamp
     * @return {Promise<RejectBinWeightModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/reject-bin-weights`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return RejectBinWeightModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Reject Bin Weight [POST /packhouse/sites/{siteId}/reject-bin-weights]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {RejectBinWeightController.CreateData} createData The Reject Bin Weight Create Data
     * @return {Promise<RejectBinWeightModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/reject-bin-weights`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return RejectBinWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default RejectBinWeightController;

/**
 * The Create Data for a Reject Bin Weight
 * 
 * @typedef {Object} RejectBinWeightController.CreateData
 * @property {string} rejectBinScaleId The Reject Bin Scale ID this Reject Weight is associated with
 * @property {string} [rejectBinId] The Reject Bin ID this Reject Weight is associated with
 * @property {Date} [createdTimestamp] When this Reject Bin Weight was Created
 * @property {?string} packrunId The Packrun this Reject Weight is associated with
 * @property {number} netWeight The Net Weight Captured by the Reject Bin Scale
 * @property {Object[]} [sources] The Source Weights that make up the Net Weight
 * @property {Object[]} freshPackMultiGrowerBinWeights The Multi-Grower Bin Weights that will be submitted to FreshPack
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Reject Bin Weight
 * 
 * @typedef {Object} RejectBinWeightController.UpdateData
 * @property {string} [rejectBinScaleId] The Reject Bin Scale ID this Reject Weight is associated with
 * @property {Date} [createdTimestamp] When this Reject Bin Weight was Created
 * @property {?string} [packrunId] The Packrun this Reject Weight is associated with
 * @property {number} [netWeight] The Net Weight Captured by the Reject Bin Scale
 * @property {Object[]} [sources] The Source Weights that make up the Net Weight
 * @property {Object[]} [freshPackMultiGrowerBinWeights] The Multi-Grower Bin Weights that will be submitted to FreshPack
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} RejectBinWeightController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */