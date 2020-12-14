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
  issueTimestamp: string;
  /**
   * When the Action Token will expire
   */
  expireTimestamp: string;
  /**
   * When the last API call using this Action Token was made
   */
  activityTimestamp: string;

  /**
   * When the Action was Completed
   */
  completedTimestamp: string;

  /**
   * When the Action Email was Sent
   */
  emailTimestamp: string;
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
  updateTimestamp: string;
}

export type ClassTypeNames =
  | "Class 1"
  | "Class 2"
  | "Class 3"
  | "Undersize"
  | "Waste"
  | "Soft-Sorts"
  | "CDM"
  | "Non-Standard Supply";

export type ClassTypes =
  | "Class1"
  | "Class2"
  | "Class3"
  | "Undersize"
  | "Waste"
  | "SoftSoft"
  | "CDM"
  | "NSS";

export interface IClassType {
  name: ClassTypeNames;
  points: {
    currentPackrunPercentage: number;
  };
  classType: ClassTypes;
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
  classTypes: IClassType[];

  /**
   * The FreshPack Integration Configuration for this Packing Line
   */
  freshPackIntegration: Record<string, unknown>;

  /**
   * When the Packing Line was last updated
   */
  updateTimestamp: string;
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
   * The Timestamp wstring this Data was Created
   */
  createdTimestamp: string;

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
  startTimestamp: string;

  /**
   * When this Packrun was Finished
   */
  finishTimestamp: string;

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
  updateTimestamp: string;
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
  updateTimestamp: string;
}

export interface IRTUModel {
  /**
   * The RTU ID
   */
  id: number;

  /**
   * The Site this RTU belongs to
   */
  siteId: number;

  /**
   * The RTU Name
   */
  name: string;

  /**
   * Whether the RTU is Enabled
   */
  enabled: boolean;

  /**
   * Whether the RTU has been deleted
   */
  deleted: boolean;

  /**
   * When the RTU was last updated
   */
  updateTimestamp: string;
}

export interface IPointValueModel<TValueType> {
  id: number;
  value: TValueType;
  timestamp: string;
}

/**
 * Point History Query Parameters for the Points Controller.
 */
export interface IPointHistoryQueryParameters {
  /**
   * Array of point ids that you want history information for.
   */
  pointIds: number[];
  /**
   * Start of a period of time.
   */
  timestampBegin: string;
  /**
   * End of a period of time.
   */
  timestampEnd: string;
  /**
   * Resolution of the historian data.
   * e.g. How many values per minute.
   */
  resolution: number;
}

/**
 * Company Model
 */
export interface ICompanyModel {
  /**
   * The id of the company
   */
  id: string;
  /**
   * The name used to display on screen
   */
  displayName: string;
  /**
   * The company's legal name
   */
  legalName: string;
  /**
   * Company has been soft-deleted
   */
  deleted: boolean;
  /**
   * The last time the company record was
   * updated in the database
   */
  updateTimestamp: string;
}
