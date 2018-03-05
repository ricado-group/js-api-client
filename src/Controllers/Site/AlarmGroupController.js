import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import AlarmGroupModel from '../../Models/Site/AlarmGroupModel';
/**
 * Controller Class for Alarm Groups
 * @extends BaseSiteModelController
 */
class AlarmGroupController extends BaseSiteModelController
{

    /**
     * Alarm Group Actions [/sites/{siteId}/alarm-groups/{id}]
     */

    /**
     * Retrieve a Single Alarm Group
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @return {Promise<AlarmGroupModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/sites/' + siteId + '/alarm-groups/' + id + '')
        	.then((data) => {
        		resolve(new AlarmGroupModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Alarm Group
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @param {Object} json - The JSON Data to update a Alarm Group
     * @return {Promise<AlarmGroupModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/sites/' + siteId + '/alarm-groups/' + id + '', json)
        	.then((data) => {
        		resolve(new AlarmGroupModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Alarm Group
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm Group ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/sites/' + siteId + '/alarm-groups/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Alarm Group Collection Actions [/sites/{siteId}/alarm-groups]
     */

    /**
     * Retrieve a Collection of Alarm Groups
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<AlarmGroupModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/sites/' + siteId + '/alarm-groups')
        	.then((data) => {
        		resolve(data.map(item => new AlarmGroupModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Alarm Group
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Alarm Group
     * @return {Promise<AlarmGroupModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/sites/' + siteId + '/alarm-groups', json)
        	.then((data) => {
        		resolve(new AlarmGroupModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default AlarmGroupController