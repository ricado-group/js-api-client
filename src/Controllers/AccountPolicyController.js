import RequestHelper from '../RequestHelper';
import AccountPolicyModel from '../Models/AccountPolicyModel';

/**
 * Controller Class for Account Policies
 */
class AccountPolicyController
{
    // Account Policy Actions [/account-policies/{id}]

    /**
     * Retrieve a Account Policy [GET /account-policies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @return {Promise<AccountPolicyModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/account-policies/${id}`)
            .then((result) => {
                resolve(new AccountPolicyModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Account Policy [PATCH /account-policies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @param {Object} updateData - The Account Policy Update Data
     * @param {string} [updateData.name] - The Policy Name
     * @param {string} [updateData.companyId] - The Company this Policy belongs to
     * @param {{id: any, type: string, actions: string[], permission: string}[]} [updateData.resources] - The Resources this Policy provides
     * @param {Object[]} [updateData.rules] - The Rules this Policy provides
     * @return {Promise<AccountPolicyModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/account-policies/${id}`, updateData)
            .then((result) => {
                resolve(new AccountPolicyModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Account Policy [DELETE /account-policies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Account Policy ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/account-policies/${id}`)
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

    // Account Policy Collection Actions [/account-policies]

    /**
     * List all Account Policies [GET /account-policies]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.name] - The Policy Name
     * @param {string} [queryParameters.companyId] - The Company this Policy belongs to
     * @return {Promise<AccountPolicyModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/account-policies`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new AccountPolicyModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Account Policy [POST /account-policies]
     * 
     * @static
     * @public
     * @param {Object} createData - The Account Policy Create Data
     * @param {string} createData.name - The Policy Name
     * @param {string} createData.companyId - The Company this Policy belongs to
     * @param {{id: any, type: string, actions: string[], permission: string}[]} [createData.resources] - The Resources this Policy provides
     * @param {Object[]} [createData.rules] - The Rules this Policy provides
     * @return {Promise<AccountPolicyModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/account-policies`, createData)
            .then((result) => {
                resolve(new AccountPolicyModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default AccountPolicyController;