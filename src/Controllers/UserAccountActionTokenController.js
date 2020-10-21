import RequestHelper from '../RequestHelper';
import UserAccountActionTokenModel from '../Models/UserAccountActionTokenModel';

/**
 * Controller Class for User Account Action Tokens
 */
class UserAccountActionTokenController
{
    // User Account Action Token Actions [/user-action-tokens/{id}]

    /**
     * Retrieve a User Account Action Token [GET /user-action-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/user-action-tokens/${id}`)
            .then((result) => {
                resolve(new UserAccountActionTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a User Account Action Token [PATCH /user-action-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @param {Object} updateData - The User Account Action Token Update Data
     * @param {?Date} [updateData.activityTimestamp] - When the last API call using this Action Token was made
     * @param {?Date} [updateData.completedTimestamp] - When the Action was Completed
     * @param {?Date} [updateData.emailTimestamp] - When the Action Email was Sent
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/user-action-tokens/${id}`, updateData)
            .then((result) => {
                resolve(new UserAccountActionTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a User Account Action Token [DELETE /user-action-tokens/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The User Account Action Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/user-action-tokens/${id}`)
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

    // User Account Action Token Collection Actions [/user-action-tokens]

    /**
     * List all User Account Action Tokens [GET /user-action-tokens]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.accountId] - The Account this Action Token belongs to
     * @param {string} [queryParameters.companyId] - The Company this Action Token belongs to
     * @param {string} [queryParameters.action] - The Action that can be Performed using this Action Token
     * @param {Date} [queryParameters.issueTimestamp] - When the Action Token was issued
     * @param {Date} [queryParameters.expireTimestamp] - When the Action Token will expire
     * @return {Promise<UserAccountActionTokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/user-action-tokens`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new UserAccountActionTokenModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a User Account Action Token [POST /user-action-tokens]
     * 
     * @static
     * @public
     * @param {Object} createData - The User Account Action Token Create Data
     * @param {string} createData.accountId - The Account this Action Token belongs to
     * @param {string} createData.companyId - The Company this Action Token belongs to
     * @param {string} createData.action - The Action that can be Performed using this Action Token
     * @param {Date} createData.issueTimestamp - When the Action Token was issued
     * @param {Date} createData.expireTimestamp - When the Action Token will expire
     * @param {?Date} createData.activityTimestamp - When the last API call using this Action Token was made
     * @param {?Date} createData.completedTimestamp - When the Action was Completed
     * @param {?Date} createData.emailTimestamp - When the Action Email was Sent
     * @return {Promise<UserAccountActionTokenModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens`, createData)
            .then((result) => {
                resolve(new UserAccountActionTokenModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Generate a new Action Token [POST /user-action-tokens/new]
     * 
     * This method is used to generate a new JWT to be used for a User Action (e.g. to Reset a User's Password). The JWT is sent to the User's Email Address in a formatted Email in the form of a Link.
     * 
     * @static
     * @public
     * @param {string} email - A User Account's Email Address
     * @param {string} action - The Action that will be performed
     * @param {string} providerId - The Platform Provider ID
     * @return {Promise<boolean>}
     */
    static createToken(email, action, providerId)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens/new`, {email, action, providerId})
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
     * Verify an existing Action Token [POST /user-action-tokens/verify]
     * 
     * This method is used to verify an existing JWT and confirm it is valid for the specified Action.
     * 
     * @static
     * @public
     * @param {string} token - The JWT Token that was provided in the form of a Link to the User's Email Address
     * @param {string} action - The Action that will be performed
     * @return {Promise<boolean>}
     */
    static verifyToken(token, action)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens/verify`, {token, action})
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
     * Activate a User's Account [POST /user-action-tokens/actions/activate]
     * 
     * This method is used to Activate a User's Account
     * 
     * @static
     * @public
     * @param {string} token - The JWT Token that was provided in the form of a Link to the User's Email Address
     * @param {string} email - The User's Email Address
     * @param {string} password - The User's Chosen Password
     * @param {string} firstName - The User's First Name
     * @param {string} lastName - The User's Last Name
     * @return {Promise<{email: string, firstName: string, lastName: string}>}
     */
    static activateAction(token, email, password, firstName, lastName)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens/actions/activate`, {token, email, password, firstName, lastName})
            .then((result) => {
                resolve(result);
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Reset a User's Password [POST /user-action-tokens/actions/reset-password]
     * 
     * This method is used to Reset a User's Password
     * 
     * @static
     * @public
     * @param {string} token - The JWT Token that was provided in the form of a Link to the User's Email Address
     * @param {string} newPassword - The New Password
     * @return {Promise<boolean>}
     */
    static resetPasswordAction(token, newPassword)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens/actions/reset-password`, {token, newPassword})
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
     * Reset a User's Pin Code [POST /user-action-tokens/actions/reset-pin-code]
     * 
     * This method is used to Reset a User's Pin Code
     * 
     * @static
     * @public
     * @param {string} token - The JWT Token that was provided in the form of a Link to the User's Email Address
     * @param {string} newPinCode - The New Pin Code
     * @return {Promise<boolean>}
     */
    static resetPinCodeAction(token, newPinCode)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/user-action-tokens/actions/reset-pin-code`, {token, newPinCode})
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
}

export default UserAccountActionTokenController;