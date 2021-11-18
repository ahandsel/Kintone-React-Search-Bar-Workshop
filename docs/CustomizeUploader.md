# Using Kintone Customize Uploader

## Overview <!-- omit in toc -->
* [What is @kintone/customize-uploader ?](#what-is-kintonecustomize-uploader-)
* [Setting Up for @kintone/customize-uploader](#setting-up-for-kintonecustomize-uploader)
  * [Part A: Update `dest/customize-manifest.json` with your App ID](#part-a-update-destcustomize-manifestjson-with-your-app-id)
    * [`dest/customize-manifest.json` Template](#destcustomize-manifestjson-template)
  * [Part B: Set your Kintone login credentials in `.env` file](#part-b-set-your-kintone-login-credentials-in-env-file)
* [Appendix: Alternative Login Methods](#appendix-alternative-login-methods)
  * [Dialog Style Login Method](#dialog-style-login-method)
  * [Manual Environment Variables Login Method](#manual-environment-variables-login-method)
    * [For Windows/ PowerShell](#for-windows-powershell)
    * [For Mac/ Terminal](#for-mac-terminal)

## What is @kintone/customize-uploader ?

The Kintone Customize Uploader is a command line tool for uploading JavaScript and CSS files to Kintone. It allows the user to automatically upload JS and CSS files to a Kintone App when a change is made in the file.

The tool is published on npm and is available for Windows, macOS, and Linux.
  * ⚠️ Node.js version 6 or later is needed to use this tool.

For more information on the Kintone Customize Uploader tool, refer to [Introduction to customize-uploader](https://developer.kintone.io/hc/en-us/articles/360017405154) article.

To view the source code, refer to [js-sdk/packages/customize-uploader at master · kintone/js-sdk](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader).

## Setting Up for @kintone/customize-uploader
1. Update `dest/customize-manifest.json` with App ID
2. Set your Kintone login credentials in `.env` file

### Part A: Update `dest/customize-manifest.json` with your App ID
1. Determine the App ID of the Kintone App you want to upload the customizations to.
2. Replace the `180` value for `"app"` key in the template below with the App ID.

**What is my App ID?**
To determine your Kintone App ID:
   1. Go inside the App
   2. Copy the URL
   3. Extract the digits after `https://YOUR_SUBDOMAIN.kintone.com/k/`

Example: `https://YOUR_SUBDOMAIN.kintone.com/k/1/` -> App ID is `1`

#### `dest/customize-manifest.json` Template

```json
{
    "app": "180",
    "scope": "ALL",
    "desktop": {
        "js": ["dist/KintoneCustomization.js"],
        "css": []
    },
    "mobile": {
        "js": [],
        "css": []
    }
}
```

### Part B: Set your Kintone login credentials in `.env` file

By far, the simplest way to input your Kintone login credentials for the Kintone Customize Uploader is the `.env` & [env-cmd](https://www.npmjs.com/package/env-cmd) method.

1. Duplicate the `.env.example` file and rename it `.env`.
2. Input your Kintone login credentials

`.env.example`

```.env
KINTONE_BASE_URL=
KINTONE_USERNAME=
KINTONE_PASSWORD=
VIEW_ID=
```

`.env`

```.env
KINTONE_BASE_URL=https://cafe.kintone.com
KINTONE_USERNAME=Administrator
KINTONE_PASSWORD=KintoneIsAmazing!
VIEW_ID=1234567
```

⚠️ Caution:
  * Make sure to still keep `.env.example` file as it is used by env-cmd to verify the environmental variable configuration.

## Appendix: Alternative Login Methods

Following two are alternative to input your Kintone login credentials for the Kintone Customize Uploader:
1. [Dialog Style Login Method](#dialog-style-login-method)
2. [Manual Environment Variables Login Method](#manual-environment-variables-login-method)

### Dialog Style Login Method
Executing only the `npm run start` command will prompt a interactive login dialog. Input the Kintone subdomain, username, and password individually.

Login dialog:  

```text
? Input your kintone's base URL (https://example.cybozu.com): {kintoneBaseUrl}
? Input your username: {userLoginName}
? Input your password: [input is hidden] {yourPassword}
```

Example:  
  * ? Input your kintone's base URL (<https://example.cybozu.com>): `https://cafe.kintone.com`
  * ? Input your username: `Administrator`
  * ? Input your password: [input is hidden] `KintoneIsAmazing!`

Success Message:  
*If you see the following message, you logged successfully!*

```text
Generate customize-manifest.json from kintone app customize
Download Uploaded files on kintone app customize
Finish importing from kintone app customize
```

### Manual Environment Variables Login Method
Environment variables for the Kintone subdomain and login information can be set in advance. Let's save time by not inputting login information per `npm run start` command.  

#### For Windows/ [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview)

Set environment variables with Kintone information in advance by entering the following command in your PowerShell:

  ```PowerShell
  set-item "env:KINTONE_BASE_URL" <subdomain>.kintone.com
  set-item "env:KINTONE_USERNAME" <user name>
  set-item "env:KINTONE_PASSWORD" <user password>
  ```

Verify that the environment variables were set correctly:

  ```PowerShell
   # View all the environment variables
   $env:path -split ";"

   # View environment variables in current directory
   Get-Item .
  ```

#### For Mac/ [Terminal](https://support.apple.com/guide/terminal/welcome/mac)

Set environment variables with Kintone information in advance by entering the following command in your Terminal:

  ```shell
  export KINTONE_BASE_URL=<subdomain>.kintone.com

  export KINTONE_USERNAME=<user name>

  export KINTONE_PASSWORD=<user password>
  ```

Verify that the environment variables were set correctly:

  ```shell
  echo $KINTONE_BASE_URL

  echo $KINTONE_USERNAME

  echo $KINTONE_PASSWORD
  ```
