# Build a Search Bar in React for [Kintone Web Database](https://developer.kintone.io/hc/en-us/)

Thank you for attending our **Kintone x React** workshop!  
Check out [meetup.com/Kintone-Developers](https://www.meetup.com/Kintone-Developers/) to check out all of our upcoming events!  

## Outline <!-- omit in toc --> <!-- markdownlint-disable MD007 -->
* [Get Started](#get-started)
  * [⚡ Notes ⚡](#-notes-)
* [Kintone Web Database & Credentials](#kintone-web-database--credentials)
  * [🚀 Getting your FREE Kintone Database](#-getting-your-free-kintone-database)
    * [📺 Sign up for Kintone Developer Program & Developer License | Video](#-sign-up-for-kintone-developer-program--developer-license--video)
* [Create a Kintone Web Database App](#create-a-kintone-web-database-app)
  * [📺 How to Create a Kintone Database App | Video](#-how-to-create-a-kintone-database-app--video)
* [Install the dependencies](#install-the-dependencies)
* [Using @kintone/customize-uploader](#using-kintonecustomize-uploader)
  * [Update `dest/customize-manifest.json`](#update-destcustomize-manifestjson)
  * [- Login Methods](#--login-methods)
  * [Dialog Style Login Method](#dialog-style-login-method)
  * [Environment Variables Login Method](#environment-variables-login-method)
    * [For Windows/ PowerShell](#for-windows-powershell)
    * [For Mac/ Terminal](#for-mac-terminal)
* [Build the customization](#build-the-customization)
* [Debugging - Let's Fix Those Problems 💪](#debugging---lets-fix-those-problems-)
  * [`npm install` command is not working](#npm-install-command-is-not-working)
  * [@kintone/customize-uploader not working?](#kintonecustomize-uploader-not-working)
  * [How do I get my Kintone Subdomain?](#how-do-i-get-my-kintone-subdomain)
* [Appendix](#appendix)

<!-- markdownlint-enable MD007 -->

## Get Started

First, let's download the [ahandsel/Kintone_React_Search_Bar](https://github.com/ahandsel/Kintone_React_Search_Bar) Repo and go inside the folder.

```shell
cd Downloads

git clone https://github.com/ahandsel/Kintone_React_Search_Bar

cd Kintone_React_Search_Bar

npm install
```

... !FIX!
  * [] File overview
  * [] Setup instructions

### ⚡ Notes ⚡

⚡ React requires **Node ≥ 10.16** & **npm ≥ 5.6** ⚡
  * Check the versions inside the `React_Workshop_by_Kintone` folder:
    * `node –v`
    * `npm –v`
  * Not the correct versions or Confused? 🤔 → Check out the [Guide on Installing Node.js & npm](docs/Install_NodeJS_npm.md) Doc

⚡ Note: Please ignore the package deprecation warnings ⚡

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

## Kintone Web Database & Credentials

_Built for teamwork, designed by you_ <!-- markdownlint-disable MD036 --> <!-- markdownlint-enable MD036 -->

### 🚀 Getting your FREE Kintone Database

#### ① Sign-Up for Developer Program Account (Website) 🌐 <!-- omit in toc -->

  * [bit.ly/KDP_signup](https://bit.ly/KDP_signup)
    * ⚠ Do NOT use Safari
    * ⚡ Accept Cookies First
    * ✅ Use Chrome & Firefox

#### ② THEN Create a Kintone Subdomain (Database) 📂 <!-- omit in toc -->

  * [bit.ly/K_DevLic](http://bit.ly/K_DevLic)
    * ⚡ Only use lowercase, numbers, & hyphens in your subdomain
    * ⚠ Do not use uppercase nor special characters

#### 📺 Sign up for Kintone Developer Program & Developer License | Video

<p align="center">
  <a href="https://youtu.be/Gzz8SbTuoFg">
    <img height="200" alt="Create Kintone Database App - React Workshop Prep YouTube Thumbnail"
      src="https://img.youtube.com/vi/Gzz8SbTuoFg/hqdefault.jpg">
  </a>
</p>

## Create a Kintone Web Database App

Let's create a Kintone App to list off your favorite [manga](https://en.wikipedia.org/wiki/Manga)s!

Here are the required fields & their configurations for our workshop:

| Field Type | Field Name | Field Code | Note               |
| ---------- | ---------- | ---------- | ------------------ |
| Text       | Title      | `title`    | The manga's title  |
| Text       | Author     | `author`   | The manga's author |

Confused? 🤔 → Check out the [How to Create a Kintone Database App](https://youtu.be/pRtfn-8cf_I) video 📺  

<!-- ![Create_App_Demo.gif Kintone_React_Workshop v2.1](https://user-images.githubusercontent.com/30670749/125898739-1bc018ac-1740-40e0-91cc-ab829192d2ea.gif) -->

### 📺 How to Create a Kintone Database App | Video

<p align="center">
  <a href="https://youtu.be/pRtfn-8cf_I">
    <img height="200" alt="How to Create a Kintone Database App YouTube Thumbnail"
      src="https://img.youtube.com/vi/pRtfn-8cf_I/hqdefault.jpg">
  </a>
</p>

## Install the dependencies

   ```shell
   cd Kintone_React_Search_Bar

   npm install

   npm install -g @kintone/customize-uploader
   ```

---

## Using @kintone/customize-uploader

### Update `dest/customize-manifest.json`
  * Replace `180` with your App ID in `dest/customize-manifest.json`
  * To determine your Kintone App ID: Go inside the App, copy the URL, and extract the digits after `https://YOUR_SUBDOMAIN.kintone.com/k/`
  * Example: `https://YOUR_SUBDOMAIN.kintone.com/k/1/` -> App ID is `1`

### - Login Methods

For more information on the Kintone Customize Uploader tool, refer to [Introduction to customize-uploader](https://developer.kintone.io/hc/en-us/articles/360017405154) article.

To view the source code, refer to [js-sdk/packages/customize-uploader at master · kintone/js-sdk](https://github.com/kintone/js-sdk/tree/master/packages/customize-uploader).

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

### Environment Variables Login Method
Environment variables for the Kintone subdomain and login information can be set in advance. Let's save time by not inputting login information per `npm run start` command.  

#### For Windows/ [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/overview)

Set environment variables with Kintone information in advance by entering the following command in your PowerShell:

  ```PowerShell
  set-item "env:KINTONE_BASE_URL" <subdomain>.kintone.com
  set-item "env:KINTONE_USERNAME" <user name>
  set-item "env:KINTONE_PASSWORD" <user password>
  ```

Verify that the environment variables were set correctly

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

Verify that the environment variables were set correctly

  ```shell
  echo $KINTONE_BASE_URL

  echo $KINTONE_USERNAME

  echo $KINTONE_PASSWORD
  ```

---

## Build the customization
1. Build the customization in the following files inside `./src/`
   * `index.html`
   * `index.js`
2. Run `npm run dev` to continuously generate testing build
3. Run `npm run production` to create a production version
   * To directly implement the Kintone customization, upload `./dist/KintoneCustomization.js` to Kintone App directly.
   * For more details, refer to [Customizing an App with JavaScript and CSS](https://get.kintone.help/k/en/user/app_settings/js_customize.html)

4. Run `npm run start`
   * This will trigger webpack & kintone-customize-uploader to run while watching `./src/index.js` for changes
   * Input Kintone credentials when asked
5. Refresh the Kintone App to see the changes!

Good luck coding!

## Debugging - Let's Fix Those Problems 💪

Here is a rundown of common problems that may occur & its solutions!  

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `Kintone_React_Search_Bar` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `Kintone_React_Search_Bar` folder

  * Mac: `nodenv local 14.5.0`
  * Windows: `nvm use 14.5.0`

### @kintone/customize-uploader not working?
Verify that you are inputting the exact base URL for Kintone credentials questions
  * Correct: `https://example.cybozu.com` ✅
  * Incorrect: `https://example.cybozu.com/` or `example.cybozu.com` ❌

### How do I get my Kintone Subdomain?

It might be a bit confusing since you need to sign-up for [Developer Program Account (Website) 🌐](https://bit.ly/KDP_signup) BEFORE creating your [Kintone Subdomain (Database) 📂](http://bit.ly/K_DevLic).

Check out our [Sign up for Kintone Developer Program & Developer License](https://youtu.be/Gzz8SbTuoFg) YouTube video:

  * [![https://youtu.be/Gzz8SbTuoFg](https://img.youtube.com/vi/Gzz8SbTuoFg/mq1.jpg)](https://youtu.be/Gzz8SbTuoFg)

## Appendix
  * [Install_NodeJS_npm.md](docs/Install_NodeJS_npm.md)
  * [References.md](docs/References.md)
