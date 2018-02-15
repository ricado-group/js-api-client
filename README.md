# RICADO Gen 4 API JS Client

RICADO Gen 4 API client for Node and Browsers.

- Written in modern JavaScript. Test for Node and Browsers
- Complete support for the RICADO Gen 4 API (TODO: Link to API Page?)
- Perfect symmetry: JS method signatures match the Web API Docs
- **We Promise**. All methods return a `Promise`
- The Authentication Token is automatically handled on all methods

**NOTE:** All examples written in this README use the ES5 Specification.

## Install

```
npm install @ricado/api-client
```

The `src` folder contains ES6 code.

The `dist` folder contains ES5 transpiled code and is the default export for this module.

## Usage

`@ricado/api-client` mirrors the published API Docs. All interaction is through stateless functions (namely Controllers).

```javascript
const api = require('@ricado/api-client');

api.initialize();

api.userAccountLogin('user@ricado.co.nz', 'abcd1234')
.then(jwt => console.log(jwt))
.catch(error => console.log(error));

api.Controllers.UserAccountController.getCurrent()
.then(userAccount => console.log("Logged in as `" + userAccount.firstName + " " + userAccount.lastName))
.catch(error => console.log(error));
```

Using `async/await` in Node 8.x:

```javascript
const api = require('@ricado/api-client');

;(async function() {
    var userAccount = await api.Controllers.UserAccountController.getCurrent();

    console.log("Hello! I'm " + userAccount.firstName);
})();
```

**NOTE:** A `Promise` will only resolve if there was no issue that needs dealing with. See `Error Handling` below for examples.

#### Importing and Initializing

Your first step will be to import the API Client module and Initialize the API before any use.

```javascript
const api = require('@ricado/api-client');

api.initialize();
```

The `api.initialize()` method can also support an existing JSON Web Token. This is useful if you are persisting the JSON Web Token in your app and would like to skip the Login (Generate a new JWT) process.

```javascript
const api = require('@ricado/api-client');

let jwt = myFunctionThatGetsTheJWT();

api.initialize(jwt);
```

#### Performing a Login

You'll need to Login (Generate a new JWT) before you can make any API Calls (except for /ping of course!)

To Login a User Account:

```javascript
let email = 'name@ricado.co.nz';
let password = 'abcd1234';

api.userAccountLogin(email, password)
.then((jwt) => {
    console.log("Signed In!");
    // NOTE: You may wish to persist this jwt somewhere in your app for future use!
})
.catch((error) => {
    console.log("Failed to Sign In!");
    console.log(error);
});
```

To Login an API Account:

```javascript
let key = 'myapikey';
let secret = 'myapisecret';

api.apiAccountLogin(key, secret)
.then((jwt) => {
    console.log("Ready to go!");
    // NOTE: You may wish to persist this jwt somewhere in your app for future use!
})
.catch((error) => {
    console.log("Failed to Sign In!");
    console.log(error);
});
```

#### Performing a Logout

If you wish to Logout (Destroy existing JWT) there's one simple method to call.

**NOTE:** Calling this method will Destroy the Token on the API Servers and will clear the locally stored JWT (`api.JWT`)

```javascript
api.logout()
.then(result => console.log("Done!"))
.catch(error => console.log(error));
```

#### Locking and Unlocking the JSON Web Token

The API makes use of a concept called "Token Locking" to reduce the risk of a JSON Web Token being copied and used by another party. The API will (at it's own discretion) automatically `Lock` the JSON Web Token after a period of inactivity. It is then required to `Unlock` the JSON Web Token before any API calls can be successfully resumed. If you make an API call without first unlocking the token, an `UnauthorizedError` will be thrown with a message about the Token being Locked.

**NOTE:** These methods can only be used on Tokens for a `User Account`. Tokens for an `API Account` will never be locked.

If the User has a Pin Code set, unlock using that Pin Code

```javascript
let pinCode = 12345;

api.pinCodeUnlock(pinCode)
.then(result => console.log("Unlocked!")) // Remember when the return type is `Promise<boolean>` it will always be `true`!
.catch(error => console.log(error));
```

If the User doesn't have a Pin Code set, unlock using a Password

```javascript
let password = "abcd1234";

api.passwordUnlock(password)
.then(result => console.log("Unlocked!"))
.catch(error => console.log(error));
```

Lock is called without any parameters

```javascript
api.lock()
.then(result => console.log("Locked!"))
.catch(error => console.log(error));
```

#### Retrieving a Single Model

A Single Model can be retrieved by calling the stateless `getOne(id)` function on a Controller. The Single Model is passed back in the `Promise.then` method.

```javascript
let siteId = 1;

api.Controllers.SiteController.getOne(siteId)
.then(site => console.log("Got My Site: " + site.name))
.catch(error => console.log(error));
```

### Updating a Single Model

Models can be updated in two ways as shown below. When you Update a Single Model, the Updated version of that same Model is passed back in the `Promise.then` method.

Update using instance methods on the Model itself:

```javascript
let siteId = 1;

api.Controllers.SiteController.getOne(siteId)
.then((site) => {
    site.name = "My New Site Name";

    site.update()
    .then(updatedSite => console.log("The Name is now: " + updatedSite.name))
    .catch(error => console.log(error));
})
.catch(error => console.log(error));
```

Update by calling the stateless Controller function:

```javascript
let siteId = 1;

api.Controllers.SiteController.update(siteId, {name: "My New Site Name"})
.then(site => console.log("The Name is now: " + site.name))
.catch(error => console.log(error));
```

### Replacing a Single Model

We currently have limited (almost entirely) support for `PUT` (replace) requests in favour of using `PATCH` (update) only.

### Deleting a Single Model

Models can be deleted in two ways as shown below. When you Delete a Single Model, the `Promise.then` method will be called if successful, otherwise the `Promise.catch` method will be called with the appropriate `Error`.

Delete using instance methods on the Model itself:

```javascript
let siteId = 1;

api.Controllers.SiteController.getOne(siteId)
.then((site) => {
    site.delete()
    .then(result => console.log("Deleted!"))
    .catch(error => console.log(error));
})
.catch(error => console.log(error));
```

Delete by calling the stateless Controller function:

```javascript
let siteId = 1;

api.Controllers.SiteController.delete(siteId)
.then(result => console.log("Deleted!"))
.catch(error => console.log(error));
```

### Retrieving a Collection of Models

A Collection of Models (all) can be retrieved by calling the stateless `getAll(id)` function on a Controller. The Model Collection is passed back in the `Promise.then` method.

```javascript
api.Controllers.SiteController.getAll()
.then((sites) => {
    sites.forEach((site) => {
        console.log("Got another Site: " + site.name);
    });
})
.catch(error => console.log(error));
```

Given that the Model Collection is simply just an `Array` of each Model Instance, you can perform bulk functions like this:

```javascript
api.Controllers.SiteController.getAll()
.then((sites) => {
    sites.forEach((site) => {
        // Find all sites with a particular name and delete them.
        if(site.name == "You should delete me!")
        {
            site.delete()
            .then(result => console.log("I Deleted Site: " + site.id))
            .catch(error => console.log(error));
        }
    });
})
.catch(error => console.log(error));
```

### Creating a new Models Object

A new Model Object can be created by calling the stateless `create(json)` function on a Controller. The newly created Model Object is passed back in the `Promise.then` method.

```javascript
api.Controllers.SiteController.create({name: "My Site Name", companyId: "xyz-xyz-xyz"})
.then(site => console.log("Got my new Site ID: " + site.id))
.catch(error => console.log(error));
```

**NOTE:** Refer to the API Documentation for the structures required to create each type of Model.

## Error Handling

This API Client provides additional Error Classes that extend the built-in `Error` type. All Errors will at minimum define `Error.message`. You can also make use of `Error.stack` in Node and on most modern browsers.

Errors:

- `BadRequestError` Used for Response Code 400
- `UnauthorizedError` Used for Response Code 401
- `ForbiddenError` Used for Response Code 403
- `NotFoundError` Used for Response Code 404
- `NotAllowedError` Used for Response Code 405
- `ServerError` Used for Response Code 500
- `NetworkError` Wraps up Errors thrown by `fetch`

`Promise` Example:

```javascript
api.Controllers.UserAccountController.deleteCurrent()
.then(result => result ? console.log("Success!") : console.log("Uh-oh!"))
.catch((error) => {
    // This Error should be one of the Above Errors or a generic `Error` type.
    console.log("Error Message: " + error.message);
    console.log("Error Stack: " + error.stack);
});
```

`async/await` Example:

```javascript
async function deleteApiAccount(id) {
    try
    {
        var result = await api.Controllers.ApiAccountController.delete(id);

        result ? console.log("Success!") : console.log("Uh-oh!");
    }
    catch (error)
    {
        // This Error should be one of the Above Errors or a generic `Error` type.
        console.log("Error Message: " + error.message);
        console.log("Error Stack: " + error.stack);
    }
}
```

Example: Retrieving a Collection of Users

```javascript
api.Controllers.UserAccountController.getAll()
.then((users) => {
    // The `users` variable will always be set and will at minimum be an empty Array `[]`. There isn't a need to check that users is defined and that is is in-fact an Array.
    users.forEach(user => console.log("Got " + user.firstName + " " + user.lastName));
})
.catch((error) => {
    /**
     * `.catch(error)` will always be called if something went wrong
     * 
     * - A network error occured
     * - You might not be logged in or have a locked token
     * - The server had an *issue*
     */
    console.log(error);
});
```

Example: Attempting to Retrieve a User that doesn't exist

```javascript
api.Controllers.UserAccountController.getOne('an-id-that-does-not-exist')
.then((user) => {
    // You'll never make it to here as the User does not exist. If the user did exist however, you can always be confident that the `user` variable will be set and will at bare minimum be a `UserAccountModel` object.
    console.log("His name is " + user.firstName + " " + user.lastName);
})
.catch((error) => {
    /**
     * In this example, apart from something like a `NetworkError` we would expect to see a `NotFoundError` to be passed back.
     */
    console.log(error);
});
```

Example: Attempting to Delete a User that doesn't exist

```javascript
api.Controllers.UserAccountController.delete('an-id-that-does-not-exist')
.then((result) => {
    // You'll never make it to here as the User does not exist. If the user did exist however, you can always be confident that the `result` variable will be set and will always be `true` meaning `result === true` will always be the case!
})
.catch((error) => {
    /**
     * In this example, apart from something like a `NetworkError` we would expect to see a `NotFoundError` to be passed back.
     */
    console.log(error);
});
```

## Testing

For Node:

```
npm test
```

For Browsers:

**Yet to be supported!!**

## Contributing

Currently this code-base is mostly generated from the PHP API and then hand-edited as required. In the future, we hope this process of generation will happen automatically with the use of a local `npm` script!

In the mean-time, if you wish to contribute, please either create a new branch (if you have permission) or fork this repository and submit a pull request.

## TODO

Our todo list!

- Support generating this README.md from a Template so we can inject some things automatically!
- Include the JSDoc HTML Documentation to make dealing with Controllers and Models easier.
- Provide a ready-to-go pre-built version of this package as ricado-api-client.js in `dist`