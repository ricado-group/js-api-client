import BaseAccountModel from '../Models/BaseAccountModel';
import UserAccountController from '../Controllers/UserAccountController';

/**
 * Model Class for a User Account
 * @extends BaseAccountModel
 */
class UserAccountModel extends BaseAccountModel {
  /**
     * UserAccountModel Constructor
     *
     * @private
     * @param {object} args - The Model Arguments
     */
  constructor(args) {
    super(args);

    this._accountType = 'user';
  }

  /**
     * Properties
     */


  /**
     * The User Account ID
     *
     * @public
     * @type {string}
     */
  get id() {
    return this._json.id;
  }

  /**
     * The User's Email Address
     *
     * @public
     * @type {string}
     */
  get email() {
    return this._json.email;
  }

  set email(email) {
    this._json.email = email;
    this._updateJson.email = email;
  }

  /**
     * The User's First Name
     *
     * @public
     * @type {string}
     */
  get firstName() {
    return this._json.firstName;
  }

  set firstName(firstName) {
    this._json.firstName = firstName;
    this._updateJson.firstName = firstName;
  }

  /**
     * The User's Last Name
     *
     * @public
     * @type {string}
     */
  get lastName() {
    return this._json.lastName;
  }

  set lastName(lastName) {
    this._json.lastName = lastName;
    this._updateJson.lastName = lastName;
  }

  /**
     * The Company this User belongs to
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
     * Whether the User Account has been deleted
     *
     * @public
     * @type {boolean}
     */
  get deleted() {
    return this._json.deleted;
  }

  /**
     * When the User Account was last updated
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
     * Update this User Account
     *
     * @public
     * @return {Promise<UserAccountModel>}
     */
  update(controller = null) {
    const controllerClass = controller || UserAccountController;
    return super.update(controllerClass);
  }

  /**
     * Delete this User Account
     *
     * @public
     * @return {Promise<UserAccountModel>}
     */
  delete(controller = null) {
    const controllerClass = controller || UserAccountController;
    return super.delete(controllerClass);
  }

  /**
     * Replace Not Supported
     *
     * @public
     */
  replace() {
    throw new Error('The UserAccountModel cannot be Replaced');
  }
}

export default UserAccountModel;
