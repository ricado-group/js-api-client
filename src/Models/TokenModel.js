/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a Token
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class TokenModel extends BaseModel
{
    /**
     * TokenModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The Token ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Account this Token belongs to
         * 
         * @type {string}
         * @private
         */
        this._accountId = undefined;
        
        /**
         * The Account Type
         * 
         * @type {string}
         * @private
         */
        this._accountType = undefined;
        
        /**
         * When the Token was issued
         * 
         * @type {Date}
         * @private
         */
        this._issueTimestamp = undefined;
        
        /**
         * When the Token will expire
         * 
         * @type {Date}
         * @private
         */
        this._expireTimestamp = undefined;
        
        /**
         * When the last API call using this Token was made
         * 
         * @type {?Date}
         * @private
         */
        this._activityTimestamp = undefined;
        
        /**
         * When the Token was unlocked
         * 
         * @type {?Date}
         * @private
         */
        this._unlockTimestamp = undefined;
        
        /**
         * When the Token was locked
         * 
         * @type {?Date}
         * @private
         */
        this._lockTimestamp = undefined;
        
        /**
         * Whether the Token has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Token was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
    }

    /**
     * The Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Account this Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._accountId;
    }

    /**
     * The Account Type
     * 
     * @public
     * @type {string}
     */
    get accountType()
    {
        return this._accountType;
    }

    /**
     * When the Token was issued
     * 
     * @public
     * @type {Date}
     */
    get issueTimestamp()
    {
        return this._issueTimestamp;
    }

    /**
     * When the Token will expire
     * 
     * @public
     * @type {Date}
     */
    get expireTimestamp()
    {
        return this._expireTimestamp;
    }

    /**
     * When the last API call using this Token was made
     * 
     * @public
     * @type {?Date}
     */
    get activityTimestamp()
    {
        return this._activityTimestamp;
    }

    /**
     * When the Token was unlocked
     * 
     * @public
     * @type {?Date}
     */
    get unlockTimestamp()
    {
        return this._unlockTimestamp;
    }

    /**
     * When the Token was locked
     * 
     * @public
     * @type {?Date}
     */
    get lockTimestamp()
    {
        return this._lockTimestamp;
    }

    /**
     * Whether the Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * Convert this **TokenModel** to a JSON Object
     * 
     * @public
     * @return {Object<string, any>}
     */
    toJSON()
    {
        return {
            id: this._id,
            accountId: this._accountId,
            accountType: this._accountType,
            issueTimestamp: this._issueTimestamp,
            expireTimestamp: this._expireTimestamp,
            activityTimestamp: this._activityTimestamp,
            unlockTimestamp: this._unlockTimestamp,
            lockTimestamp: this._lockTimestamp,
            deleted: this._deleted,
            updateTimestamp: this._updateTimestamp
        };
    }

    /**
     * Create a new **TokenModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {TokenModel}
     */
    static fromJSON(json)
    {
        let model = new TokenModel();
        
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
            model._id = (function(){
                if(typeof jsonObject['id'] !== 'string')
                {
                    return String(jsonObject['id']);
                }
        
                return jsonObject['id'];
            }());
        }
        
        if('accountId' in jsonObject)
        {
            model._accountId = (function(){
                if(typeof jsonObject['accountId'] !== 'string')
                {
                    return String(jsonObject['accountId']);
                }
        
                return jsonObject['accountId'];
            }());
        }
        
        if('accountType' in jsonObject)
        {
            model._accountType = (function(){
                if(typeof jsonObject['accountType'] !== 'string')
                {
                    return String(jsonObject['accountType']);
                }
        
                return jsonObject['accountType'];
            }());
        }
        
        if('issueTimestamp' in jsonObject)
        {
            model._issueTimestamp = (function(){
                if(typeof jsonObject['issueTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['issueTimestamp']));
                }
        
                return new Date(jsonObject['issueTimestamp']);
            }());
        }
        
        if('expireTimestamp' in jsonObject)
        {
            model._expireTimestamp = (function(){
                if(typeof jsonObject['expireTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['expireTimestamp']));
                }
        
                return new Date(jsonObject['expireTimestamp']);
            }());
        }
        
        if('activityTimestamp' in jsonObject)
        {
            model._activityTimestamp = (function(){
                if(jsonObject['activityTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['activityTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['activityTimestamp']));
                }
        
                return new Date(jsonObject['activityTimestamp']);
            }());
        }
        
        if('unlockTimestamp' in jsonObject)
        {
            model._unlockTimestamp = (function(){
                if(jsonObject['unlockTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['unlockTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['unlockTimestamp']));
                }
        
                return new Date(jsonObject['unlockTimestamp']);
            }());
        }
        
        if('lockTimestamp' in jsonObject)
        {
            model._lockTimestamp = (function(){
                if(jsonObject['lockTimestamp'] === null)
                {
                    return null;
                }
        
                if(typeof jsonObject['lockTimestamp'] !== 'string')
                {
                    return new Date(String(jsonObject['lockTimestamp']));
                }
        
                return new Date(jsonObject['lockTimestamp']);
            }());
        }
        
        if('deleted' in jsonObject)
        {
            model._deleted = (function(){
                if(typeof jsonObject['deleted'] !== 'boolean')
                {
                    return Boolean(jsonObject['deleted']);
                }
        
                return jsonObject['deleted'];
            }());
        }
        
        if('updateTimestamp' in jsonObject)
        {
            model._updateTimestamp = (function(){
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

export default TokenModel;