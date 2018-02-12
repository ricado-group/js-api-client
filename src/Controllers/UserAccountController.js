import RequestHelper from '../RequestHelper';
import GlobalModelController from '../Controllers/GlobalModelController';
import UserAccount from '../Models/UserAccount';
/**
 * Controller Class for User Account Models. A part of the User Accounts Group
 * @extends GlobalModelController
 */
class UserAccountController extends GlobalModelController
{

    /**
     * User Account Actions [/users/{id}]
     */

    /**
     * Retrieve a Single User Account
     * 
     * @static
     * @public
     * @param {number} id - The User Account ID
     * @return {Promise<UserAccount>}
     */
    static getOne(id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne('/users/' + id + '')
        	.then((data) => {
        		resolve(new UserAccount(data));
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
     * @return {RICADO\Models\UserAccount}
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
     * @return {RICADO\Models\UserAccount}
     */
    static delete()
    {
        // Code Here
    }

    /**
     * User Account Collection Actions [/users]
     */

    /**
     * Retrieve a Collection of User Accounts
     * 
     * @static
     * @public
     * @return {Promise<UserAccount>}
     */
    static getAll()
    {
        return new Promise((resolve, reject) => {
        	super.getAll('/users')
        	.then((data) => {
        		resolve(data.map(item => new UserAccount(item)));
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
     * @return {RICADO\Models\UserAccount}
     */
    static create()
    {
        // Code Here
    }

    /**
     * Current User Account Actions [/user]
     */

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static getCurrent()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static updateCurrent()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static changePassword()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static setPinCode()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static changePinCode()
    {
        // Code Here
    }

    /**
     * DESCRIPTION_HERE
     * 
     * @static
     * @public
     * @return {RICADO\Models\UserAccount}
     */
    static deleteCurrent()
    {
        // Code Here
    }
}

export default UserAccountController