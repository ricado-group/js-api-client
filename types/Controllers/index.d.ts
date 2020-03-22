import { IAccountPolicyModel, IUserAccountModel } from "../Interfaces";
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
          siteId: number,
          id: string
        ): Promise<Models.Packhouse.Site.PackingLineModel>;

        /**
         * Update a Packing Line
         */
        function update(
          siteId: number,
          id: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackingLineModel>;

        /**
         * Retrieve a Collection of Packing Lines
         */
        function getAll(
          siteId: number,
          queryParameters?: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackingLineModel[]>;

        /**
         * Create a Packing Line
         */
        function create(
          siteId: number,
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
          siteId: number,
          id: string
        ): Promise<Models.Packhouse.Site.PackrunModel>;

        /**
         * Update a Packrun
         */
        function update(
          siteId: number,
          id: string,
          json: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackrunModel>;

        /**
         * Retrieve a Collection of Packruns
         */
        function getAll(
          siteId: number,
          queryParameters?: Record<string, unknown>
        ): Promise<Models.Packhouse.Site.PackrunModel[]>;

        /**
         * Create a Packrun
         */
        function create(
          siteId: number,
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
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function update(id: any, json: any): any;
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

    function PointController(...args: any[]): any;

    function TemporaryObjectController(...args: any[]): any;

    namespace AlarmController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getAllHistory(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function getOneHistory(siteId: any, id: any, ...args: any[]): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace AlarmGroupController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace DefinitionController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace PermanentObjectController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace PermanentObjectDataController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace PointController {
      function addPointEvents(siteId: any, json: any): any;

      function addPointHistory(siteId: any, json: any): any;

      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getAllEvents(siteId: any, ...args: any[]): any;

      function getAllHistory(siteId: any, ...args: any[]): any;

      function getAllValues(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function setValues(siteId: any, json: any): any;

      function update(siteId: any, id: any, json: any): any;
    }

    namespace TemporaryObjectController {
      function create(siteId: any, json: any): any;

      function getAll(siteId: any, ...args: any[]): any;

      function getOne(siteId: any, id: any): any;

      function update(siteId: any, id: any, json: any): any;
    }
  }

  namespace SiteController {
    function create(json: any): any;

    function getAll(...args: any[]): any;

    function getOne(id: any): any;

    function update(id: any, json: any): any;
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
      json: IUserAccountModel
    ): Promise<IUserAccountModel>;

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
