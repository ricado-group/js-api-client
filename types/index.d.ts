/**
 * Type definitions for Ricado JS Api Client (@ricado/api-client)
 * Project: https://bitbucket.org/ricado/gen4-api-js-client/
 * Definitions by: Josh Biddick <https://github.com/sadsa>
 * TypeScript Version: 3.6.3
 */

import { IPointModel, IPointValueModel } from "./Interfaces";

export * from "./Controllers";
export * from "./Interfaces";
export * from "./Models";

export const BaseURL: string;

export const JWT: any;

export const NoAuthPaths: string[];

export const Version: string;

export const WebSocketPort: number;

export const WebSocketServer: string;

export function Points(): void;

export function RequestHelper(): void;

export function WebSocketHelper(): void;

export function apiAccountLogin(key: any, secret: any, ...args: any[]): any;

export function disableDebugMode(): void;

export function enableDebugMode(): void;

export function hasToken(): any;

/**
 * Initializes the API Client.
 * If a JSON Web Token is provided, the API Client can be used immediately.
 * If no JWT is provided, a User Account or API Account Login must be performed first.
 */
export function initialize(token?: string): void;

export function isDebugMode(): any;

export function isDefined(variable: any): any;

export function isInitialized(): any;

/**
 * Locks an existing JWT
 */
export function lock(): Promise<boolean>;

export function logout(key?: any, secret?: any): Promise<void>;

/**
 * Unlocks an existing JWT using a Password
 */
export function passwordUnlock(password: string): Promise<boolean>;

/**
 * Unlocks an existing JWT using a Pin Code
 */
export function pinCodeUnlock(pinCode: number): Promise<boolean>;

export function ping(): any;

/**
 * Generates a new JWT for a User Account
 */
export function userAccountLogin(
  email: string,
  password: string,
  providerId?: string
): Promise<string>;

export namespace Points {
  function getDefaultSiteId(): number;

  function getDefinition(siteId: any, pointId: any): IPointModel | undefined;

  function getValue(siteId: any, pointId: any): IPointValueModel<any> | undefined;

  function initialize(): void;

  function loadPointDefinitions(siteId: any): Promise<boolean>;

  function loadPointValues(siteId: any): Promise<boolean>;

  function log(message: any, ...args: any[]): void;

  function on(
    event: any,
    handler: (siteId: string, pointValues: Array<IPointValueModel<any>>) => void
  ): void;

  function off(event: any, handler: (...args: any[]) => void): void;

  function onReadPoints(handler: any): void;

  function setValue(siteId: any, pointId: any, value: any): Promise<string>;

  function subscribe(siteId: any): Promise<boolean>;

  function unsubscribe(siteId: any): void;
}

export namespace RequestHelper {
  function deleteRequest(url: any): any;

  function getRequest(url: any, ...args: any[]): any;

  function patchRequest(url: any, data: any): any;

  function performRequest(method: any, url: any, ...args: any[]): any;

  function postRequest(url: any, data: any): any;

  function putRequest(url: any, data: any): any;
}

export namespace WebSocketHelper {
  function emit(event: any, ...args: any[]): void;

  function initialize(...args: any[]): void;

  function log(message: any, ...args: any[]): void;

  function on(event: any, handler: any): void;

  function subscribe(...args: any[]): void;

  function unsubscribe(...args: any[]): void;
}
