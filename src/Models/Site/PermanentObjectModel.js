import BaseSiteModel from '../../Models/Site/BaseSiteModel';
import PermanentObjectController from '../../Controllers/Site/PermanentObjectController';

/**
 * Model Class for a Permanent Object
 * @extends BaseSiteModel
 */
class PermanentObjectModel extends BaseSiteModel {
  /**
     * PermanentObjectModel Constructor
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
     * The Permanent Object ID
     *
     * @public
     * @type {string}
     */
  get id() {
    return this._json.id;
  }

  /**
     * The RTU this Permanent Object belongs to
     *
     * @public
     * @type {number}
     */
  get rtuId() {
    return this._json.rtuId;
  }

  /**
     * Key Index
     *
     * @public
     * @type {string}
     */
  get keyIndex() {
    return this._json.keyIndex;
  }

  /**
     * The Permanent Object Type
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
     * The Permanent Object Definition
     *
     * @public
     * @type {Object}
     */
  get definition() {
    return this._json.definition;
  }

  set definition(definition) {
    this._json.definition = definition;
    this._updateJson.definition = definition;
  }

  /**
     * Whether the Permanent Object has been deleted
     *
     * @public
     * @type {boolean}
     */
  get deleted() {
    return this._json.deleted;
  }

  /**
     * When the Permanent Object was last updated
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
     * Update this Permanent Object
     *
     * @public
     * @return {Promise<PermanentObjectModel>}
     */
  update(controller = null) {
    const controllerClass = controller || PermanentObjectController;
    return super.update(controllerClass);
  }

  /**
     * Delete this Permanent Object
     *
     * @public
     * @return {Promise<PermanentObjectModel>}
     */
  delete(controller = null) {
    const controllerClass = controller || PermanentObjectController;
    return super.delete(controllerClass);
  }

  /**
     * Replace Not Supported
     *
     * @public
     */
  replace() {
    throw new Error('The PermanentObjectModel cannot be Replaced');
  }
}

export default PermanentObjectModel;
