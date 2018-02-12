/**
 * The RICADO Gen 4 API Class
 * 
 * **************
 * TODO / NOTES:
 * **************
 * 
 * - Will need to somehow prevent the use of Local Storage if we are not running in a browser!
 * - Chances are for the Apps in ReactNative, we may need another storage option (SQLite?)
 * 
 * ### UPDATE ###
 * Okay maybe we consider leaving the persistance of the JWT out of this library for now and let
 * the developer handle in their own app. This way the user is in charge of calling the shots. We
 * can look to implement this later if it's desired to simplify managing the JWT and sharing it
 * across all apps for *.ricado.co.nz.
 */
import { isDefined } from './Utils';
import { JWT } from './index';
import RequestHelper from './RequestHelper';

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
     * @param {string} [token] - An optional JSON Web Token to Initialize the API with.
     */
    static initialize(token = null)
    {
        // TODO: We should probably include a JWT NPM Package and verify the provided token was legit!

        if(isDefined(token)) // If the JWT is Valid and good to go
        {
            API.jwt = token;
        }
    }
     /*static initialize(persistToken = true, token = null)
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
    }*/

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

    /**
     * Returns whether a valid JSON Web Token exists
     * 
     * @static
     * @public
     * @returns {boolean}
     */
    static hasToken()
    {
        // TODO: Also check the JWT is valid using a JWT Library.
        return isDefined(API.JWT);
    }

    /**
     * The JSON Web Token
     * 
     * @static
     * @public
     * @type {string}
     */
    static get token()
    {
        return API.JWT;
    }

    static set token(token)
    {
        // TODO: Validate the token using a JWT Library

        if(isDefined(token))
        {
            API.JWT = token;
        }
    }

    /**
     * Generates a new JWT for a User Account
     * 
     * @static
     * @public
     * @param {string} email - The User's Email Address
     * @param {string} password - The User's Password
     */
    static userAccountLogin(email, password)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.postRequest('/token/new', {
                email: email,
                password: password
            })
            .then((data) => {
                API.JWT = data.token;
                resolve(data.token);
            })
            .catch(error => reject(error));
        });
    }
}

/**
 * The JSON Web Token for all Authenticated API Calls
 * 
 * @package
 * @type {string}
 */
API.prototype.JWT = undefined;

export default API