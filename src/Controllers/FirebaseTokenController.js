import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import FirebaseTokenModel from '../Models/FirebaseTokenModel';
/**
 * Controller Class for Firebase Tokens
 * @extends BaseGlobalModelController
 */
class FirebaseTokenController extends BaseGlobalModelController {

    /**
     * Firebase Token Actions [/firebase-tokens/{id}]
     */

    /**
     * Retrieve a Single Firebase Token
     * 
     * @static
     * @public
     * @param {string} id - The Firebase Token ID
     * @return {Promise<FirebaseTokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/firebase-tokens/${id}`)
        	.then((data) => {
        		resolve(new FirebaseTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Firebase Token
     * 
     * @static
     * @public
     * @param {string} id - The Firebase Token ID
     * @param {Object} json - The JSON Data to update a Firebase Token
     * @return {Promise<FirebaseTokenModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/firebase-tokens/${id}`, json)
        	.then((data) => {
        		resolve(new FirebaseTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Firebase Token
     * 
     * @static
     * @public
     * @param {string} id - The Firebase Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/firebase-tokens/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Firebase Token Collection Actions [/firebase-tokens]
     */

    /**
     * Retrieve a Collection of Firebase Tokens
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<FirebaseTokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/firebase-tokens`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new FirebaseTokenModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Firebase Token
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Firebase Token
     * @return {Promise<FirebaseTokenModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/firebase-tokens`, json)
        	.then((data) => {
        		resolve(new FirebaseTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Register a Firebase Token (Simplified Version of Create)
     * 
     * @static
     * @public
     * @param {string} token - The Firebase Client Token
     * @param {string} deviceName - The Device Name
     * @param {string} devicePlatform - The Device Platform (android, ios, web)
     * @return {Promise<FirebaseTokenModel>}
     */
    static registerToken(token, deviceName, devicePlatform)
    {
        return this.create({token, deviceName, devicePlatform});
    }

    /**
     * Retrieve a Firebase Token by a Firebase Client Token String
     * 
     * @static
     * @public
     * @param {string} token - The Firebase Client Token
     * @return {Promise<FirebaseTokenModel>}
     */
    static getOneByToken(token)
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/firebase-tokens', {token})
        	.then((data) => {
                if(data.length >= 1)
                {
                    resolve(new FirebaseTokenModel(data[0]));
                }
                else
                {
                    reject(new Error("Firebase Token cannot be found"));
                }
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default FirebaseTokenController;