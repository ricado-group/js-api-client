/**
 * Type definitions for Ricado JS Api Client (@ricado/api-client)
 * Project: https://bitbucket.org/ricado/gen4-api-js-client/
 * Definitions by: Josh Biddick <https://github.com/sadsa>
 * TypeScript Version: 3.6.3
 */

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, the Local Storage is updated with this token.
 * If no JWT is provided, the API Client will look for an existing token in the
 * Local Storage.
 */
export function initialize(token?: string): void;

/**
 * Generates a new JWT for a User Account
 */
export function userAccountLogin(
  email: string,
  password: string,
  providerId?: string
): Promise<string>;

/**
 * Unlocks an existing JWT using a Pin Code
 */
export function pinCodeUnlock(pinCode: number): Promise<boolean>;

/**
 * Unlocks an existing JWT using a Password
 *
 * @param password - The User's Password
 */
export function passwordUnlock(password: string): Promise<boolean>;

/**
 * Locks an existing JWT
 */
export function lock(): Promise<boolean>;

export interface IModelArgs {
  json: Record<string, unknown>;
}

export interface IModel {
  /**
   * The ID for this Model
   */
  id: string;

  /**
   * Whether the Model has been deleted
   */
  deleted: boolean;

  /**
   * When the Model was last updated
   */
  updateTimestamp(): Date;

  /**
   * Update this Model
   */
  update(controller: Controllers.BaseModelController): Promise<IModel>;

  /**
   * Delete this Model
   */
  delete(controller: Controllers.BaseModelController): Promise<IModel>;

  /**
   * Replace this Model
   */
  replace(controller: Controllers.BaseModelController): Promise<IModel>;
}

export interface IAccountPolicyModel extends IModel {
  /**
   * The Company this Policy belongs to
   */
  companyId: string;

  /**
   * The Resources this Policy provides
   */
  resources: unknown[];

  /**
   * The Rules this Policy provides
   */
  rules: unknown[];
}

export interface IUserAccountModel extends IModel {
  /**
   * The User's Email Address
   */
  email: string;

  /**
   * The User's First Name
   */
  firstName: string;

  /**
   * The User's Last Name
   */
  lastName: string;

  /**
   * The Company this User belongs to
   */
  companyId: string;

  /**
   * The Policies that apply to this User Account
   */
  policies: IAccountPolicyModel[];

  /**
   * Does the user have a password set
   */
  hasPassword: boolean;
  /**
   * Does the user have a pin code set
   */
  hasPinCode: boolean;
}

export interface IUserAccountActionTokenModel extends IModel {
  /**
   * The Account this Action Token belongs to
   */
  accountId: string;
  /**
   * The Company this Action Token belongs to
   */
  companyId: string;
  /**
   * he Action that can be Performed using this Action Token
   */
  action: string;
  /**
   * When the Action Token was issued
   */
  issueTimestamp: Date;
  /**
   * When the Action Token will expire
   */
  expireTimestamp: Date;
  /**
   * When the last API call using this Action Token was made
   */
  activityTimestamp: Date;

  /**
   * When the Action was Completed
   */
  completedTimestamp: Date;

  /**
   * When the Action Email was Sent
   */
  emailTimestamp: Date;
}

export interface ISiteModel {
  /**
   * The Site ID
   */
  id: number;

  /**
   * The Site Name
   */
  name: string;

  /**
   * The Company this Site belongs to
   */
  companyId: string;

  /**
   * Whether the Site is Enabled
   */
  enabled: boolean;

  /**
   * Whether the Site has been deleted
   */
  deleted: boolean;

  /**
   * When the Site was last updated
   */
  updateTimestamp: Date;
}

export namespace Models {
  /**
   * Abstract Model Class BaseModel
   */
  abstract class BaseModel {
    /**
     * BaseModel Constructor
     */
    constructor(args: IModelArgs);

    /**
     * The ID for this Model
     */
    id: string;

    /**
     * Whether the Model has been deleted
     */
    deleted: boolean;

    /**
     * When the Model was last updated
     */
    updateTimestamp: Date;

    /**
     * Update this Model
     */
    update(controller: Controllers.BaseModelController): Promise<IModel>;

    /**
     * Delete this Model
     */
    delete(controller: Controllers.BaseModelController): Promise<IModel>;

    /**
     * Replace this Model
     */
    replace(
      controller: Controllers.BaseModelController
    ): Promise<IModel>;
  }

  /**
   * Abstract Model Class BaseAccountModel
   */
  class BaseAccountModel extends BaseModel {
    /**
     * BaseAccountModel Constructor
     */
    constructor(args: IModelArgs);

    /**
     * The Account Type
     */
    accountType: number;
  }

  /**
   * Model Class for a User Account
   */
  class UserAccountModel extends BaseAccountModel {
    /**
     * UserAccountModel Constructor
     */
    constructor(args: IModelArgs);

    /**
     * The User Account ID
     */
    id: string;

    /**
     * The User's Email Address
     */
    email: string;

    /**
     * The User's First Name
     */
    firstName: string;

    /**
     * The User's Last Name
     */
    lastName: string;

    /**
     * The Company this User belongs to
     */
    companyId: string;

    /**
     * The Policies that apply to this User Account
     */
    policies: IAccountPolicyModel[];

    /**
     * Whether the User Account has been deleted
     */
    deleted: boolean;

    /**
     * When the User Account was last updated
     */
    updateTimestamp: Date;

    /**
     * Update this User Account
     */
    update(
      controller: Controllers.UserAccountController
    ): Promise<IUserAccountModel>;

    /**
     * Delete this User Account
     */
    delete(
      controller: Controllers.UserAccountController
    ): Promise<IUserAccountModel>;
  }

  /**
   * Abstract Model Class BaseSiteModel
   */
  abstract class BaseSiteModel {
    /**
     * BaseSiteModel Constructor
     */
    constructor(args: Record<string, unknown>);

    /**
     * The Site ID
     */
    siteId: number;

    /**
     * Update this Site Model
     */
    update(
      controller: Controllers.BaseSiteModelController
    ): Promise<BaseSiteModel>;

    /**
     * Delete this Site Model
     */
    delete(
      controller: Controllers.BaseSiteModelController
    ): Promise<BaseSiteModel>;

    /**
     * Replace this Site Model
     */
    replace(
      controller: Controllers.BaseSiteModelController
    ): Promise<BaseSiteModel>;
  }

  /**
   * Model Class for a Site
   */
  class SiteModel {
    /**
     * SiteModel Constructor
     */
    constructor(args: Record<string, unknown>);

    /**
     * The Site ID
     */
    id: number;

    /**
     * The Site Name
     */
    name: string;

    /**
     * The Company this Site belongs to
     */
    companyId: string;

    /**
     * Whether the Site is Enabled
     */
    enabled: boolean;

    /**
     * Whether the Site has been deleted
     */
    deleted: boolean;

    /**
     * When the Site was last updated
     */
    updateTimestamp: Date;

    /**
     * Update this Site
     */
    update(controller?: Controllers.SiteController): Promise<IModel>;

    /**
     * Delete this Site
     */
    delete(controller?: Controllers.SiteController): Promise<IModel>;
  }
}

export namespace Controllers {
  /**
   * Abstract BaseController Class
   */
  abstract class BaseController {}

  /**
   * Abstract BaseModelController Class
   */
  abstract class BaseModelController {
    /**
     * Retrieve a Single Model Record<string, unknown>       *
     */
    static getOne(path: string): Promise<IModel>;

    /**
     * Update a Single Model Record<string, unknown>
     */
    static update(
      path: string,
      json: Record<string, unknown>
    ): Promise<IModel>;

    /**
     * Delete a Single Model Record<string, unknown>
     */
    static delete(path: string): Promise<boolean>;

    /**
     * Retrieve a Collection of Model Record<string, unknown>s
     */
    static getAll(
      path: string,
      queryParameters: Record<string, unknown>
    ): Promise<IModel[]>;

    /**
     * Create a new Model Record<string, unknown>
     */
    static create(
      path: string,
      json: Record<string, unknown>
    ): Promise<IModel>;
  }

  /**
   * Abstract BaseGlobalModelController Class
   */
  class BaseGlobalModelController {}

  /**
   * Controller Class for User Accounts
   */
  class UserAccountController {
    /**
     * Retrieve a Single User Account
     */
    static getOne(id: string): Promise<Models.UserAccountModel>;

    /**
     * Update a User Account
     */
    static update(
      id: string,
      json: IUserAccountModel
    ): Promise<IUserAccountModel>;

    /**
     * Delete a User Account
     */
    static delete(id: string): Promise<boolean>;

    /**
     * Retrieve the Policies Assigned to a User Account
     */
    static getPolicies(
      id: string,
      queryParameters: Record<string, unknown>
    ): Promise<Record<string, unknown>>;

    /**
     * Set the Policies Assigned to a User Account
     */
    static setPolicies(
      id: string,
      json: Record<string, unknown>
    ): Promise<IAccountPolicyModel>;

    /**
     * Retrieve a Collection of User Accounts
     */
    static getAll(
      queryParameters: Record<string, unknown>
    ): Promise<Models.UserAccountModel[]>;

    /**
     * Create a User Account
     */
    static create(json: Record<string, unknown>): Promise<Models.UserAccountModel>;

    /**
     * Retrieve the User Account
     */
    static getCurrent(): Promise<Models.UserAccountModel>;

    /**
     * Update the User Account
     */
    static updateCurrent(json: Record<string, unknown>): Promise<Models.UserAccountModel>;

    /**
     * Set the User's Password
     */
    static setPassword(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Change the User's Password
     */
    static changePassword(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Set the User's Pin Code
     */
    static setPinCode(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Change the User's Pin Code
     */
    static changePinCode(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Delete the User's Account
     */
    static deleteCurrent(json: Record<string, unknown>): Promise<boolean>;
  }

  /**
   * Controller Class for User Account Action Tokens
   */
  class UserAccountActionTokenController {
    /**
     * Retrieve a Single User Account Action Token
     */
    static getOne(id: string): Promise<IUserAccountActionTokenModel>;
    /**
     * Update a User Account Action Token
     */
    static update(
      id: string,
      json: IUserAccountActionTokenModel
    ): Promise<IUserAccountActionTokenModel>;

    /**
     * Delete a User Account Action Token
     */
    static delete(id: string): Promise<boolean>;

    /**
     * Retrieve a Collection of User Account Action Tokens
     */
    static getAll(
      queryParameters: Record<string, unknown>
    ): Promise<IUserAccountActionTokenModel[]>;

    /**
     * Create a User Account Action Token
     */
    static create(
      json: IUserAccountActionTokenModel
    ): Promise<IUserAccountActionTokenModel>;

    /**
     * Generate a new Action Token
     */
    static createToken(
      email: string,
      action: string,
      providerId?: string
    ): Promise<boolean>;

    /**
     * Verify an existing Action Token
     */
    static verifyToken(token: string, action: string): Promise<boolean>;

    /**
     * Activate a User's Account
     */
    static activateAction(
      token: string,
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ): Promise<Record<string, unknown>>;

    /**
     * Reset a User's Password
     */
    static resetPasswordAction(
      token: string,
      newPassword: string
    ): Promise<boolean>;

    /**
     * Reset a User's Pin Code
     */
    static resetPinCodeAction(
      token: string,
      newPinCode: string
    ): Promise<boolean>;
  }

  /**
   * Abstract BaseSiteModelController Class
   */
  class BaseSiteModelController {
    /**
     * Retrieve a Single Model Record<string, unknown>
     */
    static getOne(
      siteId: number,
      path: string
    ): Promise<Models.BaseSiteModel>;

    /**
     * Update a Single Model Record<string, unknown>
     */
    static update(
      siteId: number,
      path: string,
      json: Record<string, unknown>
    ): Promise<Models.BaseSiteModel>;

    /**
     * Delete a Single Model Record<string, unknown>
     */
    static delete(siteId: number, path: string): Promise<boolean>;

    /**
     * Retrieve a Collection of Model Record<string, unknown>s
     */
    static getAll(
      siteId: number,
      path: string,
      queryParameters?: Record<string, unknown>
    ): Promise<Models.BaseSiteModel[]>;

    /**
     * Create a new Model Record<string, unknown>
     */
    static create(
      siteId: number,
      path: string,
      json: Record<string, unknown>
    ): Promise<Models.BaseSiteModel>;
  }

  /**
   * Controller Class for Sites
   */
  class SiteController extends BaseGlobalModelController {
    /**
     * Retrieve a Single Site
     */
    static getOne(id: number): Promise<Models.SiteModel>;

    /**
     * Update a Site
     */
    static update(
      id: number,
      json: Record<string, unknown>
    ): Promise<Models.SiteModel>;

    /**
     * Delete a Site
     */
    static delete(id: number): Promise<boolean>;

    /**
     * Retrieve a Collection of Sites
     */
    static getAll(
      queryParameters?: Record<string, unknown>
    ): Promise<Models.SiteModel[]>;

    /**
     * Create a Site
     */
    static create(
      json: Record<string, unknown>
    ): Promise<Models.SiteModel>;
  }
}
