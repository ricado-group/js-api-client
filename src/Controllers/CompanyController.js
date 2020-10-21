import RequestHelper from '../RequestHelper';
import CompanyModel from '../Models/CompanyModel';

/**
 * Controller Class for Companies
 */
class CompanyController
{
    // Company Actions [/companies/{id}]

    /**
     * Retrieve a Company [GET /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @return {Promise<CompanyModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/companies/${id}`)
            .then((result) => {
                resolve(new CompanyModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Update a Company [PATCH /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @param {Object} updateData - The Company Update Data
     * @param {string} [updateData.displayName] - The Company Display Name
     * @param {string} [updateData.legalName] - The Company Legal Name
     * @return {Promise<CompanyModel>}
     */
    static update(id, updateData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.patchRequest(`/companies/${id}`, updateData)
            .then((result) => {
                resolve(new CompanyModel(result));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Delete a Company [DELETE /companies/{id}]
     * 
     * @static
     * @public
     * @param {string} id - The Company ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.deleteRequest(`/companies/${id}`)
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

    // Company Collection Actions [/companies]

    /**
     * List all Companies [GET /companies]
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - The Optional Query Parameters
     * @param {string} [queryParameters.displayName] - The Company Display Name
     * @param {string} [queryParameters.legalName] - The Company Legal Name
     * @return {Promise<CompanyModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(`/companies`, queryParameters)
            .then((result) => {
                resolve(result.map(resultItem => new CompanyModel(resultItem)));
            })
            .catch(error => reject(error));
        });
    }

    /**
     * Create a Company [POST /companies]
     * 
     * @static
     * @public
     * @param {Object} createData - The Company Create Data
     * @param {string} createData.displayName - The Company Display Name
     * @param {string} createData.legalName - The Company Legal Name
     * @return {Promise<CompanyModel>}
     */
    static create(createData)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest(`/companies`, createData)
            .then((result) => {
                resolve(new CompanyModel(result));
            })
            .catch(error => reject(error));
        });
    }
}

export default CompanyController;