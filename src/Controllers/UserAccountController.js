/**
 * File Auto-Generated by the RICADO Gen 4 PHP API Project
 * 
 * Do Not Edit this File Manually!
 */

import RequestHelper from '../RequestHelper';
import UserAccountModel from '../Models/UserAccountModel';

/**
 * Controller Class for User Accounts
 */
class UserAccountController
{
    /**
     * Retrieve the Current User Account [GET /user]
     * 
     * @static
     * @public
     * @return {Promise<UserAccountModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/user`)
            .then((result) => {
                resolve(new UserAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update the Current User Account [PATCH /user]
     * 
     * @static
     * @public
     * @param {UserAccountController.UpdateData} updateData The User Account Update Data
     * @return {Promise<UserAccountModel>}
     */
    static updateCurrent(updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/user`, updateData)
            .then((result) => {
                resolve(new UserAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Set the Password for the Current User Account [POST /user/set-password]
     * 
     * @static
     * @public
     * @param {string} newPassword The New Password
     * @return {Promise<boolean>}
     */
    static setPassword(newPassword)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user/set-password`, {newPassword})
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Change the Password for the Current User Account [POST /user/change-password]
     * 
     * @static
     * @public
     * @param {string} currentPassword The Current Password
     * @param {string} newPassword The New Password
     * @return {Promise<boolean>}
     */
    static changePassword(currentPassword, newPassword)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user/change-password`, {currentPassword, newPassword})
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Set the Pin Code for the Current User Account [POST /user/set-pin-code]
     * 
     * @static
     * @public
     * @param {string} newPinCode The New Pin Code
     * @return {Promise<boolean>}
     */
    static setPinCode(newPinCode)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user/set-pin-code`, {newPinCode})
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Change the Pin Code for the Current User Account [POST /user/change-pin-code]
     * 
     * @static
     * @public
     * @param {string} currentPinCode The Current Pin Code
     * @param {string} newPinCode The New Pin Code
     * @return {Promise<boolean>}
     */
    static changePinCode(currentPinCode, newPinCode)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user/change-pin-code`, {currentPinCode, newPinCode})
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete the Current User Account [POST /user/delete-account]
     * 
     * @static
     * @public
     * @param {string} currentPassword The Current Password
     * @return {Promise<boolean>}
     */
    static deleteCurrent(currentPassword)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user/delete-account`, {currentPassword})
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve a User Account [GET /users/{id}]
     * 
     * @static
     * @public
     * @param {string} id The User Account ID
     * @return {Promise<UserAccountModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/users/${id}`)
            .then((result) => {
                resolve(new UserAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a User Account [PATCH /users/{id}]
     * 
     * @static
     * @public
     * @param {string} id The User Account ID
     * @param {UserAccountController.UpdateData} updateData The User Account Update Data
     * @return {Promise<UserAccountModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/users/${id}`, updateData)
            .then((result) => {
                resolve(new UserAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a User Account [DELETE /users/{id}]
     * 
     * @static
     * @public
     * @param {string} id The User Account ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/users/${id}`)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Retrieve the Policies Assigned to a User Account [GET /users/{id}/policies]
     * 
     * @static
     * @public
     * @param {string} id The User Account ID
     * @return {Promise<string[]>}
     */
    static getPolicies(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/users/${id}/policies`)
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Set the Policies Assigned to a User Account [POST /users/{id}/policies]
     * 
     * @static
     * @public
     * @param {string} id The User Account ID
     * @param {string[]} requestData An Account Policy ID
     * @return {Promise<boolean>}
     */
    static setPolicies(id, requestData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/users/${id}/policies`, requestData)
            .then((result) => {
                if(result === undefined)
                {
                    resolve(true);
                }
                else
                {
                    resolve(result);
                }
            })
            .catch(error => reject(error));
        });
    }

    /**
     * List all User Accounts [GET /users]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] The Optional Query Parameters
     * @param {string} [queryParameters.email] The User's Email Address
     * @param {?string} [queryParameters.firstName] The User's First Name
     * @param {?string} [queryParameters.lastName] The User's Last Name
     * @param {string} [queryParameters.companyId] The Company this User belongs to
     * @return {Promise<UserAccountModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/users`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new UserAccountModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a User Account [POST /users]
     * 
     * @static
     * @public
     * @param {UserAccountController.CreateData} createData The User Account Create Data
     * @return {Promise<UserAccountModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/users`, createData)
            .then((result) => {
                resolve(new UserAccountModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default UserAccountController;

/**
 * The Create Data for a User Account
 * 
 * @typedef {Object} UserAccountController.CreateData
 * @property {string} email The User's Email Address
 * @property {?string} firstName The User's First Name
 * @property {?string} lastName The User's Last Name
 * @property {string} companyId The Company this User belongs to
 * @property {string[]} [policies] The Policies that apply to this User Account
 */

/**
 * The Update Data for a User Account
 * 
 * @typedef {Object} UserAccountController.UpdateData
 * @property {string} [email] The User's Email Address
 * @property {?string} [firstName] The User's First Name
 * @property {?string} [lastName] The User's Last Name
 */