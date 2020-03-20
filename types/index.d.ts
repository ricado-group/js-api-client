// Type definitions for Ricado JS Api Client (@ricado/api-client)
// Project: https://bitbucket.org/ricado/gen4-api-js-client/
// Definitions by: Josh Biddick <https://github.com/sadsa>
// TypeScript Version: 3.6.3

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, the Local Storage is updated with this token.
 * If no JWT is provided, the API Client will look for an existing token in the
 * Local Storage.
 */
export declare function initialize(token?: string): void;

/**
 * Generates a new JWT for a User Account
 */
export declare function userAccountLogin(
  email: string,
  password: string,
  providerId?: string
): Promise<string>;

/**
 * Unlocks an existing JWT using a Pin Code
 */
export declare function pinCodeUnlock(pinCode: number): Promise<boolean>;

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

export declare interface IModelArgs {
  json: Record<string, unknown>;
}

export declare interface IModel {
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

export declare interface IAccountPolicyModel extends IModel {
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

export declare interface IUserAccountModel extends IModel {
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

export declare interface IUserAccountActionTokenModel extends IModel {
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

export declare interface IController {}

export namespace Models {
  /**
   * Abstract Model Class BaseModel
   */
  abstract class BaseModel {
    /**
     * BaseModel Constructor
     */
    public constructor(args: IModelArgs);

    /**
     * The ID for this Model
     */
    public id: string;

    /**
     * Whether the Model has been deleted
     */
    public deleted: boolean;

    /**
     * When the Model was last updated
     */
    public updateTimestamp: Date;

    /**
     * Update this Model
     */
    public update(controller: Controllers.BaseModelController): Promise<IModel>;

    /**
     * Delete this Model
     */
    public delete(controller: Controllers.BaseModelController): Promise<IModel>;

    /**
     * Replace this Model
     */
    public replace(
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
    public constructor(args: IModelArgs);

    /**
     * The Account Type
     */
    public accountType: number;
  }

  /**
   * Model Class for a User Account
   */
  class UserAccountModel extends BaseAccountModel {
    /**
     * UserAccountModel Constructor
     */
    public constructor(args: Record<string, unknown>);

    /**
     * The User Account ID
     */
    public id: string;

    /**
     * The User's Email Address
     */
    public email: string;

    /**
     * The User's First Name
     */
    public firstName: string;

    /**
     * The User's Last Name
     */
    public lastName: string;

    /**
     * The Company this User belongs to
     */
    public companyId: string;

    /**
     * The Policies that apply to this User Account
     */
    public policies: IAccountPolicyModel[];

    /**
     * Whether the User Account has been deleted
     */
    public deleted: boolean;

    /**
     * When the User Account was last updated
     */
    public updateTimestamp: Date;

    /**
     * Update this User Account
     */
    public update(
      controller: Controllers.UserAccountController
    ): Promise<IUserAccountModel>;

    /**
     * Delete this User Account
     */
    public delete(
      controller: Controllers.UserAccountController
    ): Promise<IUserAccountModel>;
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
     * Retrieve a Single Model Object       *
     */
    public static getOne(path: string): Promise<IModel>;

    /**
     * Update a Single Model Object
     */
    public static update(
      path: string,
      json: Record<string, unknown>
    ): Promise<IModel>;

    /**
     * Delete a Single Model Object
     */
    public static delete(path: string): Promise<boolean>;

    /**
     * Retrieve a Collection of Model Objects
     */
    public static getAll(
      path: string,
      queryParameters: Record<string, unknown>
    ): Promise<IModel[]>;

    /**
     * Create a new Model Object
     */
    public static create(
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
    public static getOne(id: string): Promise<Models.UserAccountModel>;

    /**
     * Update a User Account
     */
    public static update(
      id: string,
      json: IUserAccountModel
    ): Promise<IUserAccountModel>;

    /**
     * Delete a User Account
     */
    public static delete(id: string): Promise<boolean>;

    /**
     * Retrieve the Policies Assigned to a User Account
     */
    public static getPolicies(
      id: string,
      queryParameters: Record<string, unknown>
    ): Promise<Object>;

    /**
     * Set the Policies Assigned to a User Account
     */
    public static setPolicies(
      id: string,
      json: Object
    ): Promise<IAccountPolicyModel>;

    /**
     * Retrieve a Collection of User Accounts
     */
    public static getAll(
      queryParameters: Object
    ): Promise<Models.UserAccountModel[]>;

    /**
     * Create a User Account
     */
    public static create(json: Object): Promise<Models.UserAccountModel>;

    /**
     * Retrieve the User Account
     */
    public static getCurrent(): Promise<Models.UserAccountModel>;

    /**
     * Update the User Account
     */
    public static updateCurrent(json: Object): Promise<Models.UserAccountModel>;

    /**
     * Set the User's Password
     */
    public static setPassword(json: Object): Promise<boolean>;

    /**
     * Change the User's Password
     */
    public static changePassword(json: Object): Promise<boolean>;

    /**
     * Set the User's Pin Code
     */
    public static setPinCode(json: Object): Promise<boolean>;

    /**
     * Change the User's Pin Code
     */
    public static changePinCode(json: Object): Promise<boolean>;

    /**
     * Delete the User's Account
     */
    public static deleteCurrent(json: Object): Promise<boolean>;
  }

  /**
   * Controller Class for User Account Action Tokens
   */
  class UserAccountActionTokenController {
    /**
     * Retrieve a Single User Account Action Token
     */
    public static getOne(id: string): Promise<IUserAccountActionTokenModel>;
    /**
     * Update a User Account Action Token
     */
    public static update(
      id: string,
      json: IUserAccountActionTokenModel
    ): Promise<IUserAccountActionTokenModel>;

    /**
     * Delete a User Account Action Token
     */
    public static delete(id: string): Promise<boolean>;

    /**
     * Retrieve a Collection of User Account Action Tokens
     */
    public static getAll(
      queryParameters: Record<string, unknown>
    ): Promise<IUserAccountActionTokenModel[]>;

    /**
     * Create a User Account Action Token
     */
    public static create(
      json: IUserAccountActionTokenModel
    ): Promise<IUserAccountActionTokenModel>;

    /**
     * Generate a new Action Token
     */
    public static createToken(
      email: string,
      action: string,
      providerId?: string
    ): Promise<boolean>;

    /**
     * Verify an existing Action Token
     */
    public static verifyToken(token: string, action: string): Promise<boolean>;

    /**
     * Activate a User's Account
     */
    public static activateAction(
      token: string,
      email: string,
      password: string,
      firstName: string,
      lastName: string
    ): Promise<Record<string, unknown>>;

    /**
     * Reset a User's Password
     */
    public static resetPasswordAction(
      token: string,
      newPassword: string
    ): Promise<boolean>;

    /**
     * Reset a User's Pin Code
     */
    public static resetPinCodeAction(
      token: string,
      newPinCode: string
    ): Promise<boolean>;
  }
}
