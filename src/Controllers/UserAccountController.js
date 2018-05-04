import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import UserAccountModel from '../Models/UserAccountModel';
/**
 * Controller Class for User Accounts
 * @extends BaseGlobalModelController
 */
class UserAccountController extends BaseGlobalModelController {

    /**
     * User Account Actions [/users/{id}]
     */

    /**
     * Retrieve a Single User Account
     * 
     * @static
     * @public
     * @param {string} id - The User Account ID
     * @return {Promise<UserAccountModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/users/${id}`)
        	.then((data) => {
        		resolve(new UserAccountModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a User Account
     * 
     * @static
     * @public
     * @param {string} id - The User Account ID
     * @param {Object} json - The JSON Data to update a User Account
     * @return {Promise<UserAccountModel>}
     */
    static update(id, json)
    {
        return new Promise((resolve, reject) => {
        	super.update(`/users/${id}`, json)
        	.then((data) => {
        		resolve(new UserAccountModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a User Account
     * 
     * @static
     * @public
     * @param {string} id - The User Account ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/users/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * User Account Collection Actions [/users]
     */

    /**
     * Retrieve a Collection of User Accounts
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<UserAccountModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/users`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new UserAccountModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a User Account
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new User Account
     * @return {Promise<UserAccountModel>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create(`/users`, json)
        	.then((data) => {
        		resolve(new UserAccountModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Current User Account Actions [/user]
     */

    /**
     * Retrieve the User Account
     * 
     * @static
     * @public
     * @return {Promise<UserAccountModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/user`)
        	.then((data) => {
        		resolve(new UserAccountModel({json: data}));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update the User Account
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data to update a User Account
     * @return {Promise<UserAccountModel>}
     */
    static updateCurrent(json)
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.patchRequest(`/user`, json)
        	.then((data) => {
        		resolve(new UserAccountModel({json: data}));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

  /**
     * Change the User's Password
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise<boolean>}
     */
  static changePassword(json)
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user/change-password`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Set the User's Pin Code
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise<boolean>}
     */
  static setPinCode(json)
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user/set-pin-code`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Change the User's Pin Code
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise<boolean>}
     */
  static changePinCode(json)
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user/change-pin-code`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Delete the User's Account
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise<boolean>}
     */
  static deleteCurrent(json)
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/user/delete-account`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }
}

export default UserAccountController;