import { IAccountPolicyModel, IUserAccountModel, IPointHistoryQueryParameters, IPointValueModel } from "../Interfaces";
import { Models } from "../Models";

export namespace Controllers {
  function AccountPolicyController(...args: any[]): any;

  function ApiAccountController(...args: any[]): any;

  function CompanyController(...args: any[]): any;

  function FirebaseTokenController(...args: any[]): any;

  function RTUController(...args: any[]): any;

  function RTUPluginController(...args: any[]): any;

  function SiteController(...args: any[]): any;

  function TokenController(...args: any[]): any;

  function ToolsController(...args: any[]): any;

  function UserAccountActionTokenController(...args: any[]): any;

  function UserAccountController(...args: any[]): any;

  namespace AccountPolicyController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function update(id: any, json: any): any;
  }

  namespace ApiAccountController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getCurrent(): any;

    function getCurrentSecret(...args: any[]): any;

    function getOne(id: any): any;

    function getPolicies(id: any, ...args: any[]): any;

    function getSecret(id: any, ...args: any[]): any;

    function setPolicies(id: any, json: any): any;

    function update(id: any, json: any): any;

    function updateCurrent(json: any): any;
  }

  namespace CompanyController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function update(id: any, json: any): any;
  }

  namespace FirebaseTokenController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function getOneByToken(token: any): any;

    function registerToken(
      token: any,
      deviceName: any,
      devicePlatform: any
    ): any;

    function update(id: any, json: any): any;
  }

  namespace Packhouse {
    namespace Site {
      const BinTipWeightController: any;
      const CompacSizerBatchController: any;
      const CompacSizerOutletProductChangeController: any;
      const CompacSizerPackrunSummaryController: any;
      const GrowingMethodController: any;

      /**
       * Controller Class for Packing Lines
       */
      namespace PackingLineController {
        /**
         * Retrieve a Single Packing Line
         */
        function getOne(
          siteId: string,
          id: string
        ): Promise<Models.Packhouse.Site.PackingLineModel>;

        /**
         * Update a Packing Line
         */
        function update(
          siteId: string,
          id: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackingLineModel>;

        /**
         * Retrieve a Collection of Packing Lines
         */
        function getAll(
          siteId: string,
          queryParameters?: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackingLineModel[]>;

        /**
         * Create a Packing Line
         */
        function create(
          siteId: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackingLineModel[]>;
      }

      /**
       * Controller Class for Packruns
       */
      namespace PackrunController {
        /**
         * Retrieve a Single Packrun
         */
        function getOne(
          siteId: string,
          id: string
        ): Promise<Models.Packhouse.Site.PackrunModel>;

        /**
         * Update a Packrun
         */
        function update(
          siteId: string,
          id: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackrunModel>;

        /**
         * Retrieve a Collection of Packruns
         */
        function getAll(
          siteId: string,
          queryParameters?: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackrunModel[]>;

        /**
         * Create a Packrun
         */
        function create(
          siteId: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackrunModel>;
      }

      const RejectBinController: any;
      const RejectBinScaleController: any;
      const RejectBinWeightController: any;
      const VarietyController: any;
    }
  }

  namespace RTU {
    function GlobalSettingsController(...args: any[]): any;

    function PluginSettingsController(...args: any[]): any;

    namespace GlobalSettingsController {
      function create(rtuId: any, settings: any): any;

      function getAll(rtuId: any, ...args: any[]): any;

      function getOne(rtuId: any, key: any): any;
    }

    namespace PluginSettingsController {
      function create(rtuId: any, id: any, settings: any): any;

      function getAll(rtuId: any, ...args: any[]): any;

      function getOne(rtuId: any, id: any, key: any): any;

      function getPlugin(rtuId: any, id: any, ...args: any[]): any;
    }
  }

  namespace RTUController {
    function create(json: any): Promise<Models.RTUModel>;

    function getAll(...args: any[]): Promise<Models.RTUModel[]>;

    function getOne(id: any): Promise<Models.RTUModel>;

    function update(id: any, json: any): Promise<Models.RTUModel>;
  }

  namespace RTUPluginController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function update(id: any, json: any): any;
  }

  namespace Site {
    function AlarmController(...args: any[]): any;

    function AlarmGroupController(...args: any[]): any;

    function DefinitionController(...args: any[]): any;

    function PermanentObjectController(...args: any[]): any;

    function PermanentObjectDataController(...args: any[]): any;

    function TemporaryObjectController(...args: any[]): any;

    namespace AlarmController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getAllHistory(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function getOneHistory(siteId: string, id: any, ...args: any[]): any;

      function update(siteId: string, id: any, json: any): any;
    }

    namespace AlarmGroupController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function update(siteId: string, id: any, json: any): any;
    }

    namespace DefinitionController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function update(siteId: string, id: any, json: any): any;
    }

    namespace PermanentObjectController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function update(siteId: string, id: any, json: any): any;
    }

    namespace PermanentObjectDataController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function update(siteId: string, id: any, json: any): any;
    }

    /**
     * Controller Class for Points
     */
    namespace PointController {
      /**
       * Retrieve a Single Point
       */
      function getOne(
        siteId: string,
        id: number
      ): Promise<Models.Site.PointModel>;

      /**
       * Update a Point
       */
      function update(
        siteId: string,
        id: number,
        json: Record<string, unknown>
      ): Promise<Models.Site.PointModel>;

      /**
       * Retrieve a Collection of Points
       */
      function getAll(
        siteId: string,
        queryParameters?: Record<string, unknown>
      ): Promise<Models.Site.PointModel[]>;

      /**
       * Create a Point
       */
      function create(
        siteId: string,
        json: Record<string, unknown>
      ): Promise<Models.Site.PointModel>;

      /**
       * Retrieve all Point Values
       */
      function getAllValues(
        siteId: string,
        queryParameters?: Record<string, unknown>
      ): Promise<Array<IPointValueModel<any>>>;

      /**
       * Set specific Point Values
       */
      function setValues(
        siteId: string,
        json: Record<string, unknown>
      ): Promise<unknown>;

      /**
       * Retrieve all Point History
       */
      function getAllHistory(
        siteId: string,
        queryParameters?: Partial<IPointHistoryQueryParameters>
      ): Promise<Array<IPointValueModel<any>>>;

      /**
       * Add Point History
       */
      function addPointHistory(
        siteId: string,
        json: Record<string, unknown>
      ): Promise<unknown>;

      /**
       * Retrieve all Point Events
       */
      function getAllEvents(
        siteId: string,
        queryParameters?: Record<string, unknown>
      ): Promise<unknown>;

      /**
       * Add Point Events
       */
      function addPointEvents(
        siteId: string,
        json: Record<string, unknown>
      ): Promise<unknown>;
    }

    namespace TemporaryObjectController {
      function create(siteId: string, json: any): any;

      function getAll(siteId: string, ...args: any[]): any;

      function getOne(siteId: string, id: any): any;

      function update(siteId: string, id: any, json: any): any;
    }
  }

  namespace SiteController {
    function create(json: any): Promise<Models.SiteModel>;

    function getAll(...args: any[]): Promise<Models.SiteModel[]>;

    function getOne(id: any): Promise<Models.SiteModel>;

    function update(id: any, json: any): Promise<Models.SiteModel>;
  }

  namespace TokenController {
    function create(json: any): any;

    function destroy(): any;

    function getAll(...args: any[]): any;

    function getCurrent(): any;

    function getOne(id: any): any;

    function lock(): any;

    function unlock(json: any): any;

    function update(path: any, json: any): any;
  }

  namespace UserAccountActionTokenController {
    function activateAction(
      token: any,
      email: any,
      password: any,
      firstName: any,
      lastName: any
    ): any;

    function create(json: any): any;

    function createToken(email: any, action: any, ...args: any[]): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function resetPasswordAction(token: any, newPassword: any): any;

    function resetPinCodeAction(token: any, newPinCode: any): any;

    function update(id: any, json: any): any;

    function verifyToken(token: any, action: any): any;
  }

  namespace UserAccountController {
    /**
     * Update a User Account
     */
    function update(
      id: string,
      json: Record<string, unknown>
    ): Promise<Models.UserAccountModel>;

    /**
     * Retrieve the Policies Assigned to a User Account
     */
    function getPolicies(
      id: string,
      queryParameters: Record<string, unknown>
    ): Promise<Record<string, unknown>>;

    /**
     * Set the Policies Assigned to a User Account
     */
    function setPolicies(
      id: string,
      json: Record<string, unknown>
    ): Promise<IAccountPolicyModel>;

    /**
     * Retrieve a Collection of User Accounts
     */
    function getAll(
      queryParameters: Record<string, unknown>
    ): Promise<Models.UserAccountModel[]>;

    /**
     * Create a User Account
     */
    function create(
      json: Record<string, unknown>
    ): Promise<Models.UserAccountModel>;

    /**
     * Retrieve the User Account
     */
    function getCurrent(): Promise<Models.UserAccountModel>;

    /**
     * Update the User Account
     */
    function updateCurrent(
      json: Record<string, unknown>
    ): Promise<Models.UserAccountModel>;

    /**
     * Set the User's Password
     */
    function setPassword(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Change the User's Password
     */
    function changePassword(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Set the User's Pin Code
     */
    function setPinCode(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Change the User's Pin Code
     */
    function changePinCode(json: Record<string, unknown>): Promise<boolean>;

    /**
     * Delete the User's Account
     */
    function deleteCurrent(json: Record<string, unknown>): Promise<boolean>;
  }
}
