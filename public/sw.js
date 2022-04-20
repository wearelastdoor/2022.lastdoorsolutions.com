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
    "url": "webpack-runtime-701a9734e1ab0f6a4115.js"
  },
  {
    "url": "framework-3b8393c603e99358f1ba.js"
  },
  {
    "url": "styles.52f8f77a5a5c166562ea.css"
  },
  {
    "url": "b637e9a5-1a821b66c2f436c46907.js"
  },
  {
    "url": "dc6a8720040df98778fe970bf6c000a41750d3ae-236ffd8d62a7927d951a.js"
  },
  {
    "url": "app-8bc55aaa121f15b54227.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ba12e326b48a961a29ae6fe8631f5f21"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5cc6c660bfe96c5deb18.js"
  },
  {
    "url": "polyfill-a0a03c14b17ba0a99f90.js"
  },
  {
    "url": "90efd91f6bc05a45f907f705c22c97514a841b4a-2cd515185ac97c1b8c57.js"
  },
  {
    "url": "883a45d324b389e79cba21e85f94c41bdd183f71-2fec4fb02c9f186d3324.js"
  },
  {
    "url": "d62cf4b5ddbe46b80ebafbd3fda93c7e6994656d-8aad32ff8e5035cb0c38.js"
  },
  {
    "url": "d52d910f16d29bd7f8488d132fe4b67b7a9f9cf9-56a475896297f8bc5a6b.js"
  },
  {
    "url": "component---src-pages-index-js-546c86e6dac65c0abd65.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "56fc781d774f849010ab83223dd7010b"
  },
  {
    "url": "page-data/sq/d/2954521492.json",
    "revision": "94cf3e60bdd572826e5f3a3a647ea605"
  },
  {
    "url": "page-data/sq/d/4116760581.json",
    "revision": "3c9eb752b8bbf930218b9a7ef42cfd59"
  },
  {
    "url": "page-data/sq/d/668616704.json",
    "revision": "06ba1a38654867253eac79df4bfd3b07"
  },
  {
    "url": "page-data/sq/d/978134129.json",
    "revision": "0c8e8119ee3369ad2f8a6c9074040d53"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "fc93a6c91e92cb2cf8a463e3ee85beeb"
  },
  {
    "url": "727fe0ae8670ecd9cb5a9b0796ac3fabc1d6b5f7-9a19400cf72ddd6bd410.js"
  },
  {
    "url": "component---src-pages-about-js-559fe28936e663c7213f.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "063d8216609d8e40eed47758b82bbc55"
  },
  {
    "url": "component---src-pages-work-js-fde90e67ade2a3a9cd61.js"
  },
  {
    "url": "page-data/work/page-data.json",
    "revision": "12ffdb81cc56a06e3ccea8bcc4d856d3"
  },
  {
    "url": "component---src-pages-contact-js-0fa94d43870f81d21281.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "002f63f0c27f9db7522cd51758a81b5f"
  },
  {
    "url": "component---src-pages-mediabook-js-4275e20892388b53f765.js"
  },
  {
    "url": "page-data/mediabook/page-data.json",
    "revision": "5df97949e9956245f57f1e28a2e9c395"
  },
  {
    "url": "component---src-pages-discovery-world-trekking-js-bc31a27f3a9d42d493a4.js"
  },
  {
    "url": "page-data/discovery-world-trekking/page-data.json",
    "revision": "292e348b1b5df7b9acb5a0105905624a"
  },
  {
    "url": "page-data/sq/d/2609582780.json",
    "revision": "2cf7b4b30ba4891156eba41e9992db9f"
  },
  {
    "url": "page-data/sq/d/3115232389.json",
    "revision": "134fa8e93509c0dce17e24e9375b0a0a"
  },
  {
    "url": "component---src-pages-battigayo-js-d609154e275da9d3ad45.js"
  },
  {
    "url": "page-data/battigayo/page-data.json",
    "revision": "c3a7da7cbc69a54982190670090a2334"
  },
  {
    "url": "component---src-pages-anchorwave-js-329d61aac68387421336.js"
  },
  {
    "url": "page-data/anchorwave/page-data.json",
    "revision": "5f883852403e447c17dfd70640249e56"
  },
  {
    "url": "component---src-pages-animated-js-18c0704039a2d8091a15.js"
  },
  {
    "url": "page-data/animated/page-data.json",
    "revision": "8540332ce44e1b636921997be66946d3"
  },
  {
    "url": "component---src-pages-service-single-js-0e639b8a45b7ae8f4eb3.js"
  },
  {
    "url": "page-data/service-single/page-data.json",
    "revision": "79dfd52f0915acb29440828fe5111fb0"
  },
  {
    "url": "component---src-pages-ux-design-js-e02e4ccbf6d584c14bf8.js"
  },
  {
    "url": "page-data/ux-design/page-data.json",
    "revision": "794e91a408d516d4b892625e0239268f"
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
  if (!resources || !(await caches.match(`/app-8bc55aaa121f15b54227.js`))) {
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
