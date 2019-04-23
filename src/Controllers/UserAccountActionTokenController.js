import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import UserAccountActionTokenModel from '../Models/UserAccountActionTokenModel';
/**
 * Controller Class for User Account Action Tokens
 * @extends BaseGlobalModelController
 */
class UserAccountActionTokenController extends BaseGlobalModelController {

    /**
     * User Account Action Token Actions [/user-action-tokens/{id}]
     */

    /**
     * Retrieve a Single User Account Action Token
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/user-action-tokens/${id}`)
        	.then((data) => {
        		resolve(new UserAccountActionTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a User Account Action Token
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @param {Object} json - The JSON Data to update a User Account Action Token
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/user-action-tokens/${id}`, json)
        	.then((data) => {
        		resolve(new UserAccountActionTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a User Account Action Token
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/user-action-tokens/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * User Account Action Token Collection Actions [/user-action-tokens]
     */

    /**
     * Retrieve a Collection of User Account Action Tokens
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<UserAccountActionTokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/user-action-tokens`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new UserAccountActionTokenModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a User Account Action Token
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new User Account Action Token
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/user-action-tokens`, json)
        	.then((data) => {
        		resolve(new UserAccountActionTokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * User Account Actions Actions [/user-action-tokens]
     */

    /**
     * Generate a new Action Token
     * 
     * @static
     * @public
     * @param {string} email - The User's Email Address
     * @param {string} action - The Action to be Performed
     * @param {string} providerId - The Provider ID for this User Account Action Token
     * @return {Promise<boolean>}
     */
    static createToken(email, action, providerId = "a2a2a813-bbeb-11e8-99a9-b8ca3a64dc30")
    {
        let json = {
            email,
            action,
            providerId
        };
        
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user-action-tokens/new`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Verify an existing Action Token
     * 
     * @static
     * @public
     * @param {string} token - The Action Token (JWT)
     * @param {string} action - The Action to be Performed
     * @return {Promise<boolean>}
     */
    static verifyToken(token, action)
    {
        let json = {
            token,
            action
        };
        
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user-action-tokens/verify`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Activate a User's Account
     * 
     * @static
     * @public
     * @param {string} token - The Action Token (JWT)
     * @param {string} email - The Email for this User's Account (Allows for an update if the Email from Creation was not desired)
     * @param {string} password - The Password for this User's Account
     * @param {string} firstName - The First Name for this User
     * @param {string} lastName - The Last Name for this User
     * @return {Promise<Object>}
     */
    static activateAction(token, email, password, firstName, lastName)
    {
        let json = {
            token,
            email,
            password,
            firstName,
            lastName
        };
        
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user-action-tokens/actions/activate`, json)
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Reset a User's Password
     * 
     * @static
     * @public
     * @param {string} token - The Action Token (JWT)
     * @param {string} newPassword - The New Password for this User's Account 
     * @return {Promise<boolean>}
     */
    static resetPasswordAction(token, newPassword)
    {
        let json = {
            token,
            newPassword
        };
        
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user-action-tokens/actions/reset-password`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Reset a User's Pin Code
     * 
     * @static
     * @public
     * @param {string} token - The Action Token (JWT)
     * @param {string} newPinCode - The New Pin Code for this User's Account 
     * @return {Promise<boolean>}
     */
    static resetPinCodeAction(token, newPinCode)
    {
        let json = {
            token,
            newPinCode
        };
        
        return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user-action-tokens/actions/reset-pin-code`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default UserAccountActionTokenController;