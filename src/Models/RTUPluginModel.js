import BaseModel from '../Models/BaseModel';
import RTUPluginController from '../Controllers/RTUPluginController';

/**
 * Model Class for a RTUPlugin
 * @extends BaseModel
 */
class RTUPluginModel extends BaseModel {
  /**
     * RTUPluginModel Constructor
     *
     * @private
     * @param {object} args - The Model Arguments
     */
  constructor(args) {
    super(args);
  }

  /**
     * Properties
     */


  /**
     * The RTUPlugin ID
     *
     * @public
     * @type {string}
     */
  get id() {
    return this._json.id;
  }

  /**
     * The Plugin Name
     *
     * @public
     * @type {string}
     */
  get name() {
    return this._json.name;
  }

  set name(name) {
    this._json.name = name;
    this._updateJson.name = name;
  }

  /**
     * The Company this RTU Plugin belongs to
     *
     * @public
     * @type {string}
     */
  get companyId() {
    return this._json.companyId;
  }

  set companyId(companyId) {
    this._json.companyId = companyId;
    this._updateJson.companyId = companyId;
  }

  /**
     * Whether the RTUPlugin has been deleted
     *
     * @public
     * @type {boolean}
     */
  get deleted() {
    return this._json.deleted;
  }

  /**
     * When the RTUPlugin was last updated
     *
     * @public
     * @type {Date}
     */
  get updateTimestamp() {
    return this._json.updateTimestamp;
  }

  /**
     * Methods
     */


  /**
     * Update this RTUPlugin
     *
     * @public
     * @return {Promise<RTUPluginModel>}
     */
  update(controller = null) {
    const controllerClass = controller || RTUPluginController;
    return super.update(controllerClass);
  }

  /**
     * Delete this RTUPlugin
     *
     * @public
     * @return {Promise<RTUPluginModel>}
     */
  delete(controller = null) {
    const controllerClass = controller || RTUPluginController;
    return super.delete(controllerClass);
  }

  /**
     * Replace Not Supported
     *
     * @public
     */
  replace() {
    throw new Error('The RTUPluginModel cannot be Replaced');
  }
}

export default RTUPluginModel;
