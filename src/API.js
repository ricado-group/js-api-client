/**
 * The RICADO Gen 4 API Class
 * 
 * **************
 * TODO / NOTES:
 * **************
 * 
 * - Will need to somehow prevent the use of Local Storage if we are not running in a browser!
 * - Chances are for the Apps in ReactNative, we may need another storage option (SQLite?)
 */
import { isDefined } from './Utils';
import { JWT } from './index';

class API
{
    /**
     * Initializes the API Client.
     * If a JSON Web Token is provided, the Local Storage is updated with this token.
     * If no JWT is provided, the API Client will look for an existing token in the
     * Local Storage.
     * 
     * @static
     * @public
     * @param {string} [jwt] - An optional JSON Web Token to Initialize the API with.
     */
    static initialize(persistToken = true, token = null)
    {
        // TODO: We should probably include a JWT NPM Package and verify the provided token was legit!

        if(isDefined(token)) // If the JWT is Valid and good to go
        {
            API.jwt = token;

            if(persistToken)
            {
                API.writeJwtToLocalStorage();
            }
        }

        if(persistToken)
        {
            API.readJwtFromLocalStorage();
        }
    }

    /**
     * Attempts to Store the current JSON Web Token in Local Storage
     * 
     * @static
     * @private
     */
    static writeJwtToLocalStorage()
    {

    }

    /**
     * Attempts to Read a JSON Web Token from Local Storage
     * 
     * @static
     * @private
     */
    static readJwtFromLocalStorage()
    {
        if(isDefined(''))
        {

        }
    }
}

/**
 * The JSON Web Token for all Authenticated API Calls
 * 
 * @type {string}
 */
API.prototype.JWT = 'hello';

export default API