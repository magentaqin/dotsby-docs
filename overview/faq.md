# FAQ

* **1.Must I create document in dashboard before publishing?**

Yes. The aim is to generate the unique id for your document. After creating successfully, you can copy the config template into you local `index.js` file.

* **2.What are the differences between customzied content and api content? Can I mix customized content and api content in one page?**

 You can't mix customized content and api content in one page. Each page can either have customized content or api content.

Customzied content refers to markdown files you write, while api content refers to content read from `api.raml`.

In the doc config, customized page is put into `pages` array,.and api page is put into `apis` array:

```javascript
 pages: [
    { title: 'Introduction', file: 'introduction.md' },
 ],
```

```javascript
apis: [
  { method: 'get', request_uri: '/user/info' }
]
```

* **3.Does Dotsby support private api docs?**

No.

* **4.Does Dotsby support emojis writing?**

No. Utf8mb4 encoding format is not supported currently.

* **5.Can I convert json schema to typescript?**

It depends on you. You can use [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript.git) . Dotsby will integrate this feature into document website when officially released.

* **6.Does dotsby have NPM package?**

No. Dotsby hasn't prepared for that yet. Features development of edit and preview mode is on the go, and tests are not fully covered.

* **7.Does dotsby support private deployment?**

Yes. You can find `Dockerfile` and `image-build.sh`  in those repos. Set up your remote image registry repo, edit image-build.sh and run `image-build.sh`. You'd better set up another private repo called `dotsby-devops` to manage `docker-compose.yml`.