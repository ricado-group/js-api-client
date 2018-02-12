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
     * @param {number} id - The Token ID
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * Token Collection Actions [/tokens]
     */

    /**
     * Retrieve a Collection of Tokens
     * 
     * @static
     * @public
     * @return {Promise<Token>}
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
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static create()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static unlock()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static lock()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static destroy()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\Token}
     */
    static getCurrent()
    {
        // Code Here
    }
}

export default TokenController