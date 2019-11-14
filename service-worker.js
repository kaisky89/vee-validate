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
    "url": "404.html",
    "revision": "0342447a8b514841e372378f1d23dae6"
  },
  {
    "url": "api/index.html",
    "revision": "2643d584edd20a4ee7c67967571af422"
  },
  {
    "url": "api/rules.html",
    "revision": "44289edf0a6870c7d19af4715e3c3e71"
  },
  {
    "url": "assets/css/0.styles.6457d160.css",
    "revision": "09a7ed339007b3626be2ffe9a14026a7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.54c35914.js",
    "revision": "503782f3eba0af488e00afcaae77e957"
  },
  {
    "url": "assets/js/11.4f6fdf40.js",
    "revision": "3c09d920c45846938fdefef6ed4ad3c2"
  },
  {
    "url": "assets/js/12.484fbe5f.js",
    "revision": "f55e407758a830f669a03fea651eb08d"
  },
  {
    "url": "assets/js/13.421e742d.js",
    "revision": "03bba0492955ce7c0b9555a1d27e99be"
  },
  {
    "url": "assets/js/14.e5baf094.js",
    "revision": "f021af22c460246a01a24d4bb9558890"
  },
  {
    "url": "assets/js/15.689430ba.js",
    "revision": "c3d7b5d0b0a245f27b21405818e477c6"
  },
  {
    "url": "assets/js/16.4e7bbccf.js",
    "revision": "0af8996da2df32d2acf978f0a8f7cce4"
  },
  {
    "url": "assets/js/17.3eec1274.js",
    "revision": "5bb1fbb9c5ba5d6a06bdda51916f50e6"
  },
  {
    "url": "assets/js/18.857fdfb3.js",
    "revision": "49201968553ea5f1257ab9755eb04d60"
  },
  {
    "url": "assets/js/19.eeb69c92.js",
    "revision": "6dc2c7973f5c004baf946de353e57b87"
  },
  {
    "url": "assets/js/2.96ca9666.js",
    "revision": "9f21e8b2da35907877e9754422236f2f"
  },
  {
    "url": "assets/js/20.56de9dc1.js",
    "revision": "05e2d63918f408e0a50320c72c8024e2"
  },
  {
    "url": "assets/js/21.11a0a014.js",
    "revision": "0aefeeddfb0e5fb05d67453020a84832"
  },
  {
    "url": "assets/js/22.321d708c.js",
    "revision": "8d340b57fec8eabd7f6b2b735d63d60b"
  },
  {
    "url": "assets/js/23.bd039196.js",
    "revision": "f3d72bf890aad9a5029a3f3425532c9d"
  },
  {
    "url": "assets/js/24.226c12af.js",
    "revision": "21a1dc17df4da6a24cff91afb9628819"
  },
  {
    "url": "assets/js/25.7873b439.js",
    "revision": "976434d4f11b8457a9e4fa616c4f654e"
  },
  {
    "url": "assets/js/26.00288f8d.js",
    "revision": "606072f8d4344507d4e3616580a2cfd3"
  },
  {
    "url": "assets/js/27.89d5dbfe.js",
    "revision": "132fdb9b5deabaeafa78c5ead3c2fc10"
  },
  {
    "url": "assets/js/28.81152090.js",
    "revision": "57d2d0d8c0f45e971bb8f686e6bc1325"
  },
  {
    "url": "assets/js/29.35b3a81e.js",
    "revision": "27575bcdc7722004cb60b9eb7e4b6d9d"
  },
  {
    "url": "assets/js/3.ca8fbadd.js",
    "revision": "4d4be875db10f8872d506317d5697428"
  },
  {
    "url": "assets/js/30.6b15c3f2.js",
    "revision": "c54875f8145da285e02dfff4b889ce94"
  },
  {
    "url": "assets/js/31.ba2fbc4d.js",
    "revision": "bc7bd49984b167c6cb528b6623704f74"
  },
  {
    "url": "assets/js/32.ca123605.js",
    "revision": "24b73acbef17d270fa61fc5d5e209f9a"
  },
  {
    "url": "assets/js/33.66964c85.js",
    "revision": "9aa70b73d38a4a93dd0fbdce891f4ea6"
  },
  {
    "url": "assets/js/4.c267a746.js",
    "revision": "d052bb9f90ffd9c9ab575d25e71fec3d"
  },
  {
    "url": "assets/js/5.3550bd94.js",
    "revision": "a13a143b659141d07e70deb12af91489"
  },
  {
    "url": "assets/js/6.04724c33.js",
    "revision": "84ec130eed1d6c44685a722685ad17e1"
  },
  {
    "url": "assets/js/7.10e39460.js",
    "revision": "2db9cdc02d01679df6b678178780af5b"
  },
  {
    "url": "assets/js/8.47e99a16.js",
    "revision": "9026aaf637fa7fb9496057a450447b29"
  },
  {
    "url": "assets/js/9.2fed60b6.js",
    "revision": "92a83ff7288e77421a0236577a33ea9a"
  },
  {
    "url": "assets/js/app.de9b3cf3.js",
    "revision": "8812aca2dd8023324622fb3c19932b54"
  },
  {
    "url": "configuration.html",
    "revision": "06423fbccd6cfed03dffdbb3d26cf16c"
  },
  {
    "url": "examples/backend.html",
    "revision": "c7f564b675d34d83f9c57699b63e6332"
  },
  {
    "url": "examples/i18n.html",
    "revision": "db86703cfd055c7612bdc70a8d1a0464"
  },
  {
    "url": "examples/index.html",
    "revision": "656860f8b4e392dc40018543b2eda8d3"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "7ae579168ec4f59fa4a9179baa4bff5f"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "a7422b6fb4a5876b9c6e3fc62c971754"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "020c12df97db13b6ff8cc930634a4f22"
  },
  {
    "url": "guide/a11y.html",
    "revision": "1ae4f4473d206fec2f75c80968cd4860"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "a4a21cf881da38eb81ee454eff98df44"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "0517fb7897565767d2ab2bf247eef3ca"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "2523498959f6e3880b7f00846e0f6f3a"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "5d3799d456bda5ff33d447c8b6c13c3e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c87eb20a0d6d6eb9ba2a0e58788090dc"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "79ab1febc62071467a6b866eea01913f"
  },
  {
    "url": "guide/index.html",
    "revision": "2e98c2b3eaa429860ae107e1a93172d0"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "47fe7c2fbbbd3897e6753aefca6c3750"
  },
  {
    "url": "guide/localization.html",
    "revision": "b283424041c70139a2070f185cce421b"
  },
  {
    "url": "guide/styling.html",
    "revision": "91b2bee097e7fb8e9518b054262c63d4"
  },
  {
    "url": "guide/testing.html",
    "revision": "ba324d28b870605c2e47e032723caa61"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "493764f77aae2c4d83b20c60aecfa828"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "6b38e626cbed5759ad1839ff0e674211"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "4bb08179f77344518d6add3a9f464c82"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
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
