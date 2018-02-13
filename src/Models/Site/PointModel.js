import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PointController from '../../Controllers/Site/PointController';

/**
 * Model Class for a Point
 * @extends BaseSiteModel
 */
class PointModel extends BaseSiteModel {
  /**
     * PointModel Constructor
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
     * The Point ID
     *
     * @public
     * @type {number}
     */
  get id() {
    return this._json.id;
  }

  /**
     * The RTU this Point belongs to
     *
     * @public
     * @type {number}
     */
  get rtuId() {
    return this._json.rtuId;
  }

  /**
     * The Plugin ID
     *
     * @public
     * @type {number}
     */
  get pluginId() {
    return this._json.pluginId;
  }

  set pluginId(pluginId) {
    this._json.pluginId = pluginId;
    this._updateJson.pluginId = pluginId;
  }

  /**
     * The Point Name
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
     * The Point Type
     *
     * @public
     * @type {string}
     */
  get type() {
    return this._json.type;
  }

  set type(type) {
    this._json.type = type;
    this._updateJson.type = type;
  }

  /**
     * The Point's Value Type
     *
     * @public
     * @type {string}
     */
  get valueType() {
    return this._json.valueType;
  }

  set valueType(valueType) {
    this._json.valueType = valueType;
    this._updateJson.valueType = valueType;
  }

  /**
     * The Permissions
     *
     * @public
     * @type {string}
     */
  get permissions() {
    return this._json.permissions;
  }

  set permissions(permissions) {
    this._json.permissions = permissions;
    this._updateJson.permissions = permissions;
  }

  /**
     * Whether the Point is Enabled
     *
     * @public
     * @type {boolean}
     */
  get enabled() {
    return this._json.enabled;
  }

  set enabled(enabled) {
    this._json.enabled = enabled;
    this._updateJson.enabled = enabled;
  }

  /**
     * The Point Settings
     *
     * @public
     * @type {Object}
     */
  get settings() {
    return this._json.settings;
  }

  set settings(settings) {
    this._json.settings = settings;
    this._updateJson.settings = settings;
  }

  /**
     * Whether the Point has been deleted
     *
     * @public
     * @type {boolean}
     */
  get deleted() {
    return this._json.deleted;
  }

  /**
     * When the Point was last updated
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
     * Update this Point
     *
     * @public
     * @return {Promise<PointModel>}
     */
  update(controller = null) {
    const controllerClass = controller || PointController;
    return super.update(controllerClass);
  }

  /**
     * Delete this Point
     *
     * @public
     * @return {Promise<PointModel>}
     */
  delete(controller = null) {
    const controllerClass = controller || PointController;
    return super.delete(controllerClass);
  }

  /**
     * Replace Not Supported
     *
     * @public
     */
  replace() {
    throw new Error('The PointModel cannot be Replaced');
  }
}

export default PointModel;
