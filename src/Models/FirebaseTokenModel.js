/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import BaseModel from '../Models/BaseModel';

/**
 * Model Class for a Firebase Token
 * 
 * @class
 * @hideconstructor
 * @extends BaseModel
 */
class FirebaseTokenModel extends BaseModel
{
    /**
     * FirebaseTokenModel Constructor
     * 
     * @protected
     */
    constructor()
    {
        super();
        
        /**
         * The Firebase Token ID
         * 
         * @type {string}
         * @private
         */
        this._id = undefined;
        
        /**
         * The Account this Firebase Token belongs to
         * 
         * @type {string}
         * @private
         */
        this._accountId = undefined;
        
        /**
         * The Firebase Token
         * 
         * @type {string}
         * @private
         */
        this._token = undefined;
        
        /**
         * Whether the Firebase Token should receive Notifications
         * 
         * @type {boolean}
         * @private
         */
        this._enabled = undefined;
        
        /**
         * The Device Name
         * 
         * @type {string}
         * @private
         */
        this._deviceName = undefined;
        
        /**
         * The Device Platform
         * 
         * @type {string}
         * @private
         */
        this._devicePlatform = undefined;
        
        /**
         * Whether the Firebase Token has been deleted
         * 
         * @type {boolean}
         * @private
         */
        this._deleted = undefined;
        
        /**
         * When the Firebase Token was last updated
         * 
         * @type {Date}
         * @private
         */
        this._updateTimestamp = undefined;
    }

    /**
     * The Firebase Token ID
     * 
     * @public
     * @type {string}
     */
    get id()
    {
        return this._id;
    }

    /**
     * The Account this Firebase Token belongs to
     * 
     * @public
     * @type {string}
     */
    get accountId()
    {
        return this._accountId;
    }

    /**
     * The Firebase Token
     * 
     * @public
     * @type {string}
     */
    get token()
    {
        return this._token;
    }

    /**
     * Whether the Firebase Token should receive Notifications
     * 
     * @public
     * @type {boolean}
     */
    get enabled()
    {
        return this._enabled;
    }

    /**
     * The Device Name
     * 
     * @public
     * @type {string}
     */
    get deviceName()
    {
        return this._deviceName;
    }

    /**
     * The Device Platform
     * 
     * @public
     * @type {string}
     */
    get devicePlatform()
    {
        return this._devicePlatform;
    }

    /**
     * Whether the Firebase Token has been deleted
     * 
     * @public
     * @type {boolean}
     */
    get deleted()
    {
        return this._deleted;
    }

    /**
     * When the Firebase Token was last updated
     * 
     * @public
     * @type {Date}
     */
    get updateTimestamp()
    {
        return this._updateTimestamp;
    }

    /**
     * Create a new **FirebaseTokenModel** from a JSON Object or JSON String
     * 
     * @static
     * @public
     * @param {Object<string, any>|string} json A JSON Object or JSON String
     * @return {FirebaseTokenModel}
     */
    static fromJSON(json)
    {
        let model = new FirebaseTokenModel();
        
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
        
        if('token' in jsonObject)
        {
            model._token = (function(){
                if(typeof jsonObject['token'] !== 'string')
                {
                    return String(jsonObject['token']);
                }
        
                return jsonObject['token'];
            }());
        }
        
        if('enabled' in jsonObject)
        {
            model._enabled = (function(){
                if(typeof jsonObject['enabled'] !== 'boolean')
                {
                    return Boolean(jsonObject['enabled']);
                }
        
                return jsonObject['enabled'];
            }());
        }
        
        if('deviceName' in jsonObject)
        {
            model._deviceName = (function(){
                if(typeof jsonObject['deviceName'] !== 'string')
                {
                    return String(jsonObject['deviceName']);
                }
        
                return jsonObject['deviceName'];
            }());
        }
        
        if('devicePlatform' in jsonObject)
        {
            model._devicePlatform = (function(){
                if(typeof jsonObject['devicePlatform'] !== 'string')
                {
                    return String(jsonObject['devicePlatform']);
                }
        
                return jsonObject['devicePlatform'];
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

export default FirebaseTokenModel;