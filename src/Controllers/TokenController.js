import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import Token from '../Models/Token';
/**
 * Controller Class for Token Models. A part of the Authentication Group
 * @extends GlobalModelController
 */
class TokenController extends GlobalModelController
{

    /**
     * Token Actions [/tokens/{id}]
     */

    /**
     * Retrieve a Single Token
     * 
     * @static
     * @public
     * @param {string} id - The Token ID
     * @return {Promise<Token>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/tokens/' + id + '')
        	.then((data) => {
        		resolve(new Token(data));
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
        	super.delete('/tokens/' + id + '')
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
     * @return {Promise<Array[Token]>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/tokens')
        	.then((data) => {
        		resolve(data.map(item => new Token(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Token Actions Actions [/token]
     */

    /**
     * Generate a new Token
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data for a new Token
     * @return {Promise<Token>}
     */
    static create(json)
    {
        return new Promise((resolve, reject) => {
        	super.create('/token/new', json)
        	.then((data) => {
        		resolve(new Token(data));
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
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static unlock(json)
    {
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
     * Lock the current Token
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static lock(json)
    {
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
     * Destroy the current Token
     * 
     * @static
     * @public
     * @param {Object} json - The JSON Data to POST
     * @return {Promise}
     */
    static destroy(json)
    {
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
     * Retrieve the current Token
     * 
     * @static
     * @public
     * @return {Promise<Token>}
     */
    static getCurrent()
    {
        return new Promise((resolve, reject) => {
        	RequestHelper.getRequest('/token')
        	.then((data) => {
        		resolve(new Token(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default TokenController