/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "cf21e235f289121f85243d3455b73232"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.eda8dfea.css",
    "revision": "77c269da052ba799394e721656986040"
  },
  {
    "url": "assets/img/delete.6ff7e976.png",
    "revision": "6ff7e97670d3dddc99e2d933dc8ff3b0"
  },
  {
    "url": "assets/img/exception.72f865f4.png",
    "revision": "72f865f494809e2b73adeb71d85a3f80"
  },
  {
    "url": "assets/img/get.52418479.png",
    "revision": "5241847932b3a5a2852b2fa7c2d5c063"
  },
  {
    "url": "assets/img/getAll.a6c67ec1.png",
    "revision": "a6c67ec1fc969a600f79291b51639623"
  },
  {
    "url": "assets/img/patch.87fcaa1a.png",
    "revision": "87fcaa1a5eac94dc34cc0b21a5c1ccdb"
  },
  {
    "url": "assets/img/post.605fe01c.png",
    "revision": "605fe01c1e2539d19810f31e2459198a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.9f8c7f9b.png",
    "revision": "9f8c7f9b0d6c10a7eaffbe540c44e580"
  },
  {
    "url": "assets/js/10.987eab03.js",
    "revision": "960769676b2efa8db56afbfd94c56b21"
  },
  {
    "url": "assets/js/11.e88c2f10.js",
    "revision": "088b8e03b243821fd63dfbff62e63ede"
  },
  {
    "url": "assets/js/12.6beda826.js",
    "revision": "17f513ff64e37b0a320add8bc8a401b3"
  },
  {
    "url": "assets/js/13.9e7b54bd.js",
    "revision": "2339ddaf5a0575e1d763a9881a35544f"
  },
  {
    "url": "assets/js/14.9641b9d8.js",
    "revision": "4b61d861f030fcbbfb7e0df26032ac46"
  },
  {
    "url": "assets/js/15.54a19c3e.js",
    "revision": "662563e4379226504a6d921c9908c418"
  },
  {
    "url": "assets/js/16.3e09d900.js",
    "revision": "b032eeead82c1e3fff18f239ee807605"
  },
  {
    "url": "assets/js/17.f1330ea1.js",
    "revision": "06e3ed0224b60a56db2fc3c5ed8ad8c9"
  },
  {
    "url": "assets/js/18.0f3de238.js",
    "revision": "2f5cf2853331603d83886c9550204443"
  },
  {
    "url": "assets/js/19.5103567b.js",
    "revision": "d6c90e0683fc071c80054550f15c0538"
  },
  {
    "url": "assets/js/2.0b31a98e.js",
    "revision": "4b6fe114fa1393010a29fbdaa4cb7ee9"
  },
  {
    "url": "assets/js/20.374134d6.js",
    "revision": "5a4251c1fc49cbffe5cac9fcc8282c98"
  },
  {
    "url": "assets/js/21.6fff99ac.js",
    "revision": "3e71c4bbd01bd0b8cd734ce8c4c969c0"
  },
  {
    "url": "assets/js/22.aa0b4f60.js",
    "revision": "af5f56e990c14e3da67fd43d53674989"
  },
  {
    "url": "assets/js/23.ce8b0930.js",
    "revision": "22dfc5a85917799d5c5ca2401c04a86a"
  },
  {
    "url": "assets/js/24.30f1e432.js",
    "revision": "4a5570750199fe63192f10f8444d4745"
  },
  {
    "url": "assets/js/26.cdcf961d.js",
    "revision": "f683ac99beb1badde3e5fb377b65dcde"
  },
  {
    "url": "assets/js/3.e227721b.js",
    "revision": "39cd81bc18860d863c080db89b373360"
  },
  {
    "url": "assets/js/4.f1431eab.js",
    "revision": "9eef17a3bf6ff2f5a65ac1b97d1bd4ce"
  },
  {
    "url": "assets/js/5.5884a570.js",
    "revision": "4ddb90ee53d96f9526c27c44b58f623c"
  },
  {
    "url": "assets/js/6.04503463.js",
    "revision": "9fc1e6f66a79ffd5ee26e937f91216b2"
  },
  {
    "url": "assets/js/7.17e35dd8.js",
    "revision": "0b6a3683bc0b50e2b14e27c5f63cba55"
  },
  {
    "url": "assets/js/8.7be0851e.js",
    "revision": "dd31e52a5cd3dab0e1aff0fed225c178"
  },
  {
    "url": "assets/js/9.8e47c8a5.js",
    "revision": "d2248106083086d391051d7041ba8ec3"
  },
  {
    "url": "assets/js/app.0ff1c527.js",
    "revision": "dab42e4ad1c886a2394a3c4513957f64"
  },
  {
    "url": "conclusion/index.html",
    "revision": "aea40f013e76feff7ae429e3d92eb3af"
  },
  {
    "url": "design/index.html",
    "revision": "98f601a0bb5d641a35b63b68c35596a2"
  },
  {
    "url": "index.html",
    "revision": "0ec47e26a8ab7ff63553effe273ea604"
  },
  {
    "url": "intro/index.html",
    "revision": "fa51091aaf37d9d6bf4d12fc47acd0e6"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "8a7cb9498ae0f375448b0274aa26195a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "3f1d533a9fbaf03a0585bff72eff6b9b"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eed8d626b331561a5a46c9133a34da66"
  },
  {
    "url": "software/index.html",
    "revision": "a90c31cec3d1e42fabf111bd72750af9"
  },
  {
    "url": "test/index.html",
    "revision": "02bb2a7039304a9a05cc512b1cb0070e"
  },
  {
    "url": "use cases/index.html",
    "revision": "3acc64a2e4ec205f95b50c598959ec70"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
