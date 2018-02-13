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
  static getOne(id) {
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
  static delete(id) {
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
     * @return {Promise<TokenModel[]>}
     */
  static getAll() {
    return new Promise((resolve, reject) => {
        	super.getAll('/tokens')
        	.then((data) => {
        		resolve(data.map(item => new TokenModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * TokenModel Actions Actions [/token]
     */

  /**
     * Generate a new TokenModel
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Token
     * @return {Promise<TokenModel>}
     */
  static create(json) {
    return new Promise((resolve, reject) => {
        	super.create('/token/new', json)
        	.then((data) => {
        		resolve(new TokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Unlock the current TokenModel
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
  static unlock(json) {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest('/token/unlock', json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Lock the current TokenModel
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
  static lock(json) {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest('/token/lock', json)
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }

  /**
     * Destroy the current TokenModel
     *
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
  static destroy(json) {
    return new Promise((resolve, reject) => {
        	RequestHelper.postRequest('/token/destroy', json)
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
  static getCurrent() {
    return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/token')
        	.then((data) => {
        		resolve(new TokenModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
    });
  }
}

export default TokenController;
