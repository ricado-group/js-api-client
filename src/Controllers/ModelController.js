import Controller from './Controller';
import RequestHelper from '../RequestHelper';

/**
 * Abstract ModelController Class
 * @abstract
 * @extends Controller
 */
class ModelController extends Controller
{
    /**
     * Single Model Object Actions
     */

    /**
     * Retrieve a Single Model Object
     * 
     * @static
     * @public
     * @param {string} path - The Path to the Single Model
     * @returns {Promise<Model>}
     */
    static getOne(path)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(path)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     */
    static update()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     */
    static delete()
    {
        // Code Here
    }

    /**
     * User Account Collection Actions [/users]
     */

    /**
     * Retrieve a Collection of Model Objects
     * 
     * @static
     * @public
     * @param {string} path - The Path to the Model Collection
     * @returns {Promise<Array[Model]>}
     */
    static getAll(path)
    {
        return new Promise((resolve, reject) => {
            RequestHelper.getRequest(path)
            .then(data => resolve(data))
            .catch(error => reject(error));
        });
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     */
    static create()
    {
        // Code Here
    }
}

export default ModelController