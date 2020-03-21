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
