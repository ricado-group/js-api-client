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
  id: string;

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

export interface IPackingLineModel extends IModel {
  /**
   * The RTU this Permanent Object belongs to
   */
  rtuId: number;

  /**
   * The Packing Line Name
   */
  name: string;

  /**
   * The Points used by this Packing Line
   */
  points: Record<string, number>;

  /**
   * The Sizer Objects that belong to this Packing Line
   */
  sizers: any[];

  /**
   * The Bin Tip Objects that belong to this this Packing Line
   */
  binTips: any[];

  /**
   * The Reject Bin Scale Objects that belong to this Packing Line
   */
  rejectBinScales: any[];

  /**
   * The Automation Object for this Packing Line
   */
  automation: Record<string, unknown>;

  /**
   * The Alarm Groups that are used by this Packing Line
   */
  alarmGroups: any[];

  /**
   * The Class Types that are defined for this Packing Line
   */
  classTypes: any[];

  /**
   * The FreshPack Integration Configuration for this Packing Line
   */
  freshPackIntegration: Record<string, unknown>;

  /**
   * When the Packing Line was last updated
   */
  updateTimestamp: Date;
}

export interface IPackrunModel {
  /**
   * The Packrun ID
   */
  id: string;

  /**
   * Key Index
   */
  name: string;

  /**
   * The Permanent Object this Data is related to
   */
  packingLineId: string;

  /**
   * The Timestamp when this Data was Created
   */
  createdTimestamp: Date;

  /**
   * The Grower Name for this Packrun
   */
  growerName: string;

  /**
   * The Grower Code for this Packrun
   */
  growerCode: string;

  /**
  * The Maturity Area for this Packrun
  */
  maturityArea: string;

  /**
   * When this Packrun was Started
   */
  startTimestamp: Date;

  /**
   * When this Packrun was Finished
   */
  finishTimestamp: Date;

  /**
   * The Variety for this Packrun
   */
  varietyId: string;

  /**
   * The Growing Method for this Packrun
   */
  growingMethodId: string;

  /**
   * The Number of Allocated Bins for this Packrun
   */
  allocatedBins: number;

  /**
   * The Time Batches for this Packrun
   */
  timeBatches: string;

  /**
   * Whether the Packrun has been deleted
   */
  deleted: boolean;

  /**
   * When the Packrun was last updated
   */
  updateTimestamp: Date;
}

export interface IPointModel {
  /**
   * The Point ID
   */
  id: number;

  /**
   * The RTU this Point belongs to
   */
  rtuId: number;

  /**
   * The Plugin ID
   */
  pluginId: number;

  /**
   * The Point Name
   */
  name: string;

  /**
   * The Point Type
   */
  type: string;

  /**
   * The Point's Value Type
   */
  valueType: string;

  /**
   * The Permissions
   */
  permissions: string;

  /**
   * Whether the Point is Enabled
   */
  enabled: boolean;

  /**
   * The Point Settings
   */
  settings: Record<string, unknown>;

  /**
   * Whether the Point has been deleted
   */
  deleted: boolean;

  /**
   * When the Point was last updated
   */
  updateTimestamp: Date;
}

export interface IPointValueModel<TValueType> {
  id: number;
  value: TValueType;
  timestamp: string;
}
