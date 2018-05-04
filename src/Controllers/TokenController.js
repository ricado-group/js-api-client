import RequestHelper from '../RequestHelper';
import BaseGlobalModelController from '../Controllers/BaseGlobalModelController';
import TokenModel from '../Models/TokenModel';
/**
 * Controller Class for Tokens
 * @extends BaseGlobalModelController
 */
class TokenController extends BaseGlobalModelController {

    /**
     * Token Actions [/tokens/{id}]
     */

    /**
     * Retrieve a Single Token
     * 
     * @static
     * @public
     * @param {string} id - The Token ID
     * @return {Promise<TokenModel>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(`/tokens/${id}`)
        	.then((data) => {
        		resolve(new TokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Token
     * 
     * @static
     * @public
     * @param {string} id - The Token ID
     * @return {Promise<boolean>}
     */
    static delete(id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(`/tokens/${id}`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Token Collection Actions [/tokens]
     */

    /**
     * Retrieve a Collection of Tokens
     * 
     * @static
     * @public
     * @param {Object} [queryParameters] - Query Parameters (e.g. {myQuery: myValue})
     * @return {Promise<TokenModel[]>}
     */
    static getAll(queryParameters = {})
    {
        return new Promise((resolve, reject) => {
        	super.getAll(`/tokens`, queryParameters)
        	.then((data) => {
        		resolve(data.map(item => new TokenModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

  /**
     * Current Token Actions [/token]
     */

  /**
     * Generate a new Token
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Token
     * @return {Promise<string>}
     */
  static create(json)
  {
    return new Promise((resolve, reject) => {
        	super.create(`/token/new`, json)
        	.then((data) => {
        		resolve(data);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Unlock the current Token
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data containing a Pin Code or Password
     * @return {Promise<boolean>}
     */
  static unlock(json)
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/token/unlock`, json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Lock the current Token
     *
     * @static
     * @public
     * @return {Promise<boolean>}
     */
  static lock()
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/token/lock`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Destroy the current Token
     *
     * @static
     * @public
     * @return {Promise<boolean>}
     */
  static destroy()
  {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest(`/token/destroy`)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Retrieve the current TokenModel
     * 
     * @static
     * @public
     * @return {Promise<TokenModel>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest(`/token`)
        	.then((data) => {
        		resolve(new TokenModel({json: data}));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default TokenController;