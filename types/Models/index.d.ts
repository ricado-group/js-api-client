export namespace Models {
  class AccountPolicyModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class ApiAccountModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class CompanyModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class FirebaseTokenModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class RTUModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class RTUPluginModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class SiteModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class TokenModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(): void;
  }

  class UserAccountActionTokenModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  class UserAccountModel {
    constructor(args: any);

    delete(...args: any[]): any;

    replace(): void;

    update(...args: any[]): any;
  }

  namespace Packhouse {
    namespace Site {
      const BinTipWeightModel: any;
      const CompacSizerBatchModel: any;
      const CompacSizerOutletProductChangeModel: any;
      const CompacSizerPackrunSummaryModel: any;
      const GrowingMethodModel: any;

      /**
       * Model Class for a Packing Line
       */
      class PackingLineModel {
        /**
         * PackingLineModel Constructor
         */
        constructor(args: Record<string, unknown>);

        /**
         * The Packing Line ID
         */
        id: string;

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
         * Whether the Packing Line has been deleted
         */
        deleted: boolean;

        /**
         * When the Packing Line was last updated
         */
        updateTimestamp: Date;

        /**
         * Update this Packing Line
         */
        update(controller?: any): Promise<PackingLineModel>;

        /**
         * Delete this Packing Line
         */
        delete(controller?: any): Promise<PackingLineModel>;

        /**
         * Replace Not Supported
         */
        replace(): void;
      }

      /**
       * Model Class for a Packrun
       */
      class PackrunModel {
        /**
         * PackrunModel Constructor
         */
        constructor(args: Record<string, unknown>);

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

        /**
         * Update this Packrun
         */
        update(controller?: any): Promise<PackrunModel>;

        /**
         * Replace Not Supported
         */
        replace(): void;
      }

      const RejectBinModel: any;
      const RejectBinScaleModel: any;
      const RejectBinWeightModel: any;
      const VarietyModel: any;
    }
  }

  namespace Site {
    class AlarmGroupModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }

    class AlarmModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }

    class DefinitionModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }

    class PermanentObjectDataModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }

    class PermanentObjectModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }

    /**
     * Model Class for a Point
     */
    class PointModel {
      /**
       * PointModel Constructor
       */
      constructor(args: Record<string, unknown>);

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

      /**
       * Update this Point
       */
      update(controller?: any): Promise<PointModel>;

      /**
       * Delete this Point
       */
      delete(controller?: any): Promise<PointModel>;

      /**
       * Replace Not Supported
       */
      replace(): void;
    }

    class TemporaryObjectModel {
      constructor(args: any);

      delete(...args: any[]): any;

      replace(): void;

      update(...args: any[]): any;
    }
  }
}
