/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../../../RequestHelper';
import BinTipWeightModel from '../../../Models/Packhouse/Site/BinTipWeightModel';

/**
 * Controller Class for Bin Tip Weights
 * 
 * @class
 */
class BinTipWeightController
{
    /**
     * Retrieve a Bin Tip Weight [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @return {Promise<BinTipWeightModel>}
     */
    static getOne(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Bin Tip Weight [PATCH /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @param {BinTipWeightController.UpdateData} updateData The Bin Tip Weight Update Data
     * @return {Promise<BinTipWeightModel>}
     */
    static update(siteId, id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`, updateData)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Bin Tip Weight [DELETE /packhouse/sites/{siteId}/bin-tip-weights/{id}]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @return {Promise<boolean>}
     */
    static delete(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve Comments [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments]
     * 
     * Retrieves Comments for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @return {Promise<Array<BinTipWeightController.CommentItem>>}
     */
    static getComments(siteId, id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments`)
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
     * Create a Comment [POST /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments]
     * 
     * Create a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @param {string} content The Content of the New Comment
     * @return {Promise<BinTipWeightController.CommentItem>}
     */
    static createComment(siteId, id, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments`, {content})
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
     * Retrieve a Comment [GET /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Retrieves Comments for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @param {string} commentId The Comment ID
     * @return {Promise<BinTipWeightController.CommentItem>}
     */
    static getOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`)
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
     * Update a Comment [PATCH /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Update a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @param {string} commentId The Comment ID
     * @param {string} content The Updated Content for the Comment
     * @return {Promise<BinTipWeightController.CommentItem>}
     */
    static updateOneComment(siteId, id, commentId, content)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`, {content})
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
     * Delete a Comment [DELETE /packhouse/sites/{siteId}/bin-tip-weights/{id}/comments/{commentId}]
     * 
     * Delete a Comment for a Bin Tip Weight
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {string} id The Bin Tip Weight ID
     * @param {string} commentId The Comment ID
     * @return {Promise<boolean>}
     */
    static deleteOneComment(siteId, id, commentId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/packhouse/sites/${siteId}/bin-tip-weights/${id}/comments/${commentId}`)
            .then((result) => {
                resolve(result ?? true);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all Bin Tip Weights [GET /packhouse/sites/{siteId}/bin-tip-weights]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {BinTipWeightController.GetAllQueryParameters} [queryParameters] The Optional Query Parameters
     * @return {Promise<BinTipWeightModel[]>}
     */
    static getAll(siteId, queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/packhouse/sites/${siteId}/bin-tip-weights`, queryParameters)
            .then((result) => {
                let resolveValue = (function(){
                    if(Array.isArray(result) !== true)
                    {
                        return [];
                    }
                
                    return result.map((resultItem) => {
                        return (function(){
                            return BinTipWeightModel.fromJSON(resultItem, siteId);
                        }());
                    });
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Bin Tip Weight [POST /packhouse/sites/{siteId}/bin-tip-weights]
     * 
     * @static
     * @public
     * @param {number} siteId The Site ID
     * @param {BinTipWeightController.CreateData} createData The Bin Tip Weight Create Data
     * @return {Promise<BinTipWeightModel>}
     */
    static create(siteId, createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/packhouse/sites/${siteId}/bin-tip-weights`, createData)
            .then((result) => {
                let resolveValue = (function(){
                    return BinTipWeightModel.fromJSON(result, siteId);
                }());
                
                resolve(resolveValue);
            })
            .catch(error => reject(error));
        });
    }
}

export default BinTipWeightController;

/**
 * The Optional Query Parameters for the getAll Function
 * 
 * @typedef {Object} BinTipWeightController.GetAllQueryParameters
 * @property {string} [binTipId] The Bin Tip ID associated with this Bin Weight
 * @property {string} [packrunId] The Packrun ID associated with this Bin Weight
 * @property {string} [weightType] The Bin Weight Type
 * @property {?string} [binScaleId] The Bin Scale ID associated with this Bin Weight
 * @property {Date} [createdTimestampBegin] Filter by the Timestamp when this Bin Tip Weight was Created. Results Greater than or Equal to Timestamp
 * @property {Date} [createdTimestampEnd] Filter by the Timestamp when this Bin Tip Weight was Created. Results Less than or Equal to Timestamp
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Create Data for a Bin Tip Weight
 * 
 * @typedef {Object} BinTipWeightController.CreateData
 * @property {string} binTipId The Bin Tip ID associated with this Bin Weight
 * @property {string} [packrunId] The Packrun ID associated with this Bin Weight
 * @property {Date} [createdTimestamp] When this Bin Weight was Created
 * @property {string} weightType The Bin Weight Type
 * @property {number} weight The Bin Weight
 * @property {?string} binScaleId The Bin Scale ID associated with this Bin Weight
 * @memberof Controllers.Packhouse.Site
 */

/**
 * The Update Data for a Bin Tip Weight
 * 
 * @typedef {Object} BinTipWeightController.UpdateData
 * @property {string} [binTipId] The Bin Tip ID associated with this Bin Weight
 * @property {Date} [createdTimestamp] When this Bin Weight was Created
 * @property {string} [weightType] The Bin Weight Type
 * @property {number} [weight] The Bin Weight
 * @property {?string} [binScaleId] The Bin Scale ID associated with this Bin Weight
 * @memberof Controllers.Packhouse.Site
 */

/**
 * A **CommentItem** Type
 * 
 * @typedef {Object} BinTipWeightController.CommentItem
 * @property {string} id The Comment ID
 * @property {?string} content The Content of the Comment
 * @property {?Date} createdTimestamp When the Comment was Created
 * @property {?Date} updatedTimestamp When the Comment was last Updated
 * @memberof Controllers.Packhouse.Site
 */