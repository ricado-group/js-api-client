import BaseModel from '../Models/BaseModel';
/**
 * Abstract Model Class BaseAccountModel
 * @abstract
 * @extends BaseModel
 */
class BaseAccountModel extends BaseModel {
  /**
     * BaseAccountModel Constructor
     *
     * @package
     * @param {object} args - The Model Arguments
     */
  constructor(args) {
    super(args);

    // NODE: This is specified by the child Models (UserAccountModel or ApiAccountModel)
    this._accountType = undefined;
  }

  /**
     * The Account Type
     *
     * @public
     * @type {number}
     */
  get accountType() {
    return this._accountType;
  }
}

export default BaseAccountModel;
