# dotsby
Dotsby is a document generator service tailored for api docs. It helps you deploy API docs in seconds.



## Features

* Generate local files to document website. 
* Support both markdown files and standard raml 1.0 files.
* Support 3 modes: edit, preview and publish. (Currently, only support publish mode.)
* Support Server-side rendering  in publish mode.
* Support search for text, api path, and api field. (Currently, only support text search.)
* Support management for multiple versions of doc and multiple docs. Please visit  [Dotsby Dashboard](http://dotsby.cn).



## Cool, let's give it a try.

**1.Install Dotsby.**

```
yarn global add https://github.com/magentaqin/dotsby.git
```

**2.Clone dotsby docs.**

```
git clone https://github.com/magentaqin/dotsby-docs.git
```

**3. Change directory to dotsby-docs, and pubish your document**

```
cd dotsby-docs
dotsby publish .
```

You are required to login before publish. You can simply use this account:

```
email: visitor@dotsby.com
password: dotsby123456
```

**4.Finally, your api document is on the fly.**



## Usage

**Pre-Requisites:**

1.node >= 10.16.3. and yarn >= 1.17.3

2.Have basic understanding of raml 1.0 format.

* Install

```bash
yarn global add https://github.com/magentaqin/dotsby.git
```

* Go to [Dotsby Dashboard](http://dotsby.cn).  Sign up your account.
* Publish Document

In the dashboard, click "Create New Document". After successfully creating, copy the meta info of your document, and paste it to `index.js` file.

* Config the `index.js`. Config format: 
* Publish the document.

Nav to your document directory.

```bash
dotsby publish .
```
Or specify your document directory.
```
dotsby publish ./projects/my-api-doc
```



## Git Submodule `dotsby-schema`

Git submodule `dotsby-schema` roles as **"schema validation"** for `dotsby`，`dotsby-backend`, `dotsby-dashboard` and `dotsby-docs`  as well as **"resources"** for `dotsby-docs` after being converted from *.js to *.json.

![](http://q74un8tss.bkt.clouddn.com/dotby-schema.png?e=1584107576&token=SwFpkVwcb0BP3vDWeUXWoI9U8uyccsIiEx7Yv3G0:alpW1tXDjsHqKw4WfKQP-KA8_NQ=)

[dotsby](https://github.com/magentaqin/dotsby): Globally installed package to generate your local files to document website.

[dotsby-dashboard](https://github.com/magentaqin/dotsby-dashboard): Dashboard for managing docs.

[dotsby-backend](https://github.com/magentaqin/dotsby-backend): Backend for document website and dashboard.

[dotsby-docs](https://github.com/magentaqin/dotsby-docs): Dotsby Api Docs. Already put converted *.json into it.

[dotsby-schema](https://github.com/magentaqin/dotsby-schema):  JSON schema for dotsby.