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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-b639ece8383f4c44b8b2.js"
  },
  {
    "url": "framework-95f350d85a2f49fb7b27.js"
  },
  {
    "url": "styles.105146036a9dcd95944d.css"
  },
  {
    "url": "b637e9a5-a3a9f9f89f49079e9ebc.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-3144ec2558fe23c78042.js"
  },
  {
    "url": "app-6ef63a2a560a7184c2c6.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "48c3ef8f8bd06d9c320864d9b2daeb94"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-76a1f6f3b33699e8c09e.js"
  },
  {
    "url": "polyfill-61bbd98f30f05f48f9ab.js"
  },
  {
    "url": "90efd91f6bc05a45f907f705c22c97514a841b4a-2a9ade7bcbe97d29712a.js"
  },
  {
    "url": "d62cf4b5ddbe46b80ebafbd3fda93c7e6994656d-5ca5353116627b043ff5.js"
  },
  {
    "url": "d52d910f16d29bd7f8488d132fe4b67b7a9f9cf9-37886f5c66b56036716b.js"
  },
  {
    "url": "component---src-pages-index-js-a3f6eb2cd84e91b46d64.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "84f2f2b42d15cfb431766590e4be476d"
  },
  {
    "url": "page-data/sq/d/2323437466.json",
    "revision": "7c6225ec979f97e586d975d72adff071"
  },
  {
    "url": "page-data/sq/d/2954521492.json",
    "revision": "94cf3e60bdd572826e5f3a3a647ea605"
  },
  {
    "url": "page-data/sq/d/3773410830.json",
    "revision": "ba34b7bfc0d9055b276a1f0c5c4cf1a9"
  },
  {
    "url": "page-data/sq/d/4077273936.json",
    "revision": "6273e29efbac5c67858b7699b0d20fd7"
  },
  {
    "url": "page-data/sq/d/668616704.json",
    "revision": "68bcc12737e911821f838d96e713da81"
  },
  {
    "url": "page-data/sq/d/978134129.json",
    "revision": "0c8e8119ee3369ad2f8a6c9074040d53"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fd6cd6c73fceab130ba8d586014ead4a"
  },
  {
    "url": "727fe0ae8670ecd9cb5a9b0796ac3fabc1d6b5f7-2c9df330ab69c02eb975.js"
  },
  {
    "url": "component---src-pages-about-js-f20d10bbfcc241d099cb.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "ed1ca8f2ee11130ddabff5d7c0ca7528"
  },
  {
    "url": "component---src-pages-work-js-39783e9936ac7ecc758e.js"
  },
  {
    "url": "page-data/work/page-data.json",
    "revision": "b6e1e7b1597c9359f50fdd3a027af963"
  },
  {
    "url": "component---src-pages-contact-js-c8e04263e43b82f982da.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "b97ce515bb88baf9b544673bc7a16fe0"
  },
  {
    "url": "component---src-pages-mediabook-js-286f34495b492eed1eb5.js"
  },
  {
    "url": "page-data/mediabook/page-data.json",
    "revision": "045c4ecb032c080d5390a5d749277c7a"
  },
  {
    "url": "component---src-pages-discovery-world-trekking-js-a2cf18c4582de09cd318.js"
  },
  {
    "url": "page-data/discovery-world-trekking/page-data.json",
    "revision": "9803ab02d281f3f3a3ade7e6ab105def"
  },
  {
    "url": "page-data/sq/d/2609582780.json",
    "revision": "35f434ead2a652dabe942f1d25550914"
  },
  {
    "url": "page-data/sq/d/3115232389.json",
    "revision": "134fa8e93509c0dce17e24e9375b0a0a"
  },
  {
    "url": "component---src-pages-battigayo-js-98ee0e4085a3bbe8e007.js"
  },
  {
    "url": "page-data/battigayo/page-data.json",
    "revision": "d82332cefd3bcf11bed05949372a9081"
  },
  {
    "url": "component---src-pages-anchorwave-js-ef1d3d4fa1c664c7e88b.js"
  },
  {
    "url": "page-data/anchorwave/page-data.json",
    "revision": "4f2856513bc17949e57be45ffccab351"
  },
  {
    "url": "component---src-pages-animated-js-6792192daedad4b50788.js"
  },
  {
    "url": "page-data/animated/page-data.json",
    "revision": "c63c314a35603f3d023700e938f0a669"
  },
  {
    "url": "component---src-pages-service-single-js-2ce11ddf50f768c454db.js"
  },
  {
    "url": "page-data/service-single/page-data.json",
    "revision": "2ae7738076fefc87f4fdc573f69ab76f"
  },
  {
    "url": "component---src-pages-ux-design-js-df067307b432584042c8.js"
  },
  {
    "url": "page-data/ux-design/page-data.json",
    "revision": "a6a0d7116153e3be58165903690d3cfb"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "e7d295254a12f9c6fcff5686ba59b449"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-6ef63a2a560a7184c2c6.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
