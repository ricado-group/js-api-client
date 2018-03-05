import RequestHelper from '../../RequestHelper';
import BaseSiteModelController from '../../Controllers/Site/BaseSiteModelController';
import AlarmModel from '../../Models/Site/AlarmModel';
/**
 * Controller Class for Alarms
 * @extends BaseSiteModelController
 */
class AlarmController extends BaseSiteModelController
{

    /**
     * Alarm Actions [/sites/{siteId}/alarms/{id}]
     */

    /**
     * Retrieve a Single Alarm
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm ID
     * @return {Promise<AlarmModel>}
     */
    static getOne(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.getOne(siteId, '/sites/' + siteId + '/alarms/' + id + '')
        	.then((data) => {
        		resolve(new AlarmModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Update a Alarm
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm ID
     * @param {Object} json - The JSON Data to update a Alarm
     * @return {Promise<AlarmModel>}
     */
    static update(siteId,id,json)
    {
        return new Promise((resolve, reject) => {
        	super.update(siteId, '/sites/' + siteId + '/alarms/' + id + '', json)
        	.then((data) => {
        		resolve(new AlarmModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Delete a Alarm
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {string} id - The Alarm ID
     * @return {Promise<boolean>}
     */
    static delete(siteId,id)
    {
        return new Promise((resolve, reject) => {
        	super.delete(siteId, '/sites/' + siteId + '/alarms/' + id + '')
        	.then((result) => {
        		resolve(result);
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Alarm Collection Actions [/sites/{siteId}/alarms]
     */

    /**
     * Retrieve a Collection of Alarms
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @return {Promise<AlarmModel[]>}
     */
    static getAll(siteId)
    {
        return new Promise((resolve, reject) => {
        	super.getAll(siteId, '/sites/' + siteId + '/alarms')
        	.then((data) => {
        		resolve(data.map(item => new AlarmModel(item)));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }

    /**
     * Create a Alarm
     * 
     * @static
     * @public
     * @param {number} siteId - The Site ID
     * @param {Object} json - The JSON Data for a new Alarm
     * @return {Promise<AlarmModel>}
     */
    static create(siteId,json)
    {
        return new Promise((resolve, reject) => {
        	super.create(siteId, '/sites/' + siteId + '/alarms', json)
        	.then((data) => {
        		resolve(new AlarmModel(data));
        	})
        	.catch((error) => {
        		reject(error);
        	});
        });
    }
}

export default AlarmController