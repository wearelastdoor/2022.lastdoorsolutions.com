var plugins = [{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-google-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":["UA-28007926-1"],"pluginConfig":{"head":true}},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-preload-fonts',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-preload-fonts/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Lastdoor","short_name":"Lastdoor","start_url":"/","background_color":"#F5F6F0","theme_color":"#17212A","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"none","icons":[{"src":"icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"icons/icon-512x512.png","sizes":"512x512","type":"image/png"}],"splash_pages":null,"include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[],"precachePages":["/","/about/","/work/","/contact/","/mediabook/","/discovery-world-trekking/","/battigayo/","/anchorwave/","/animated/","/service-single/","/ux-design/"]},
    },{
      name: 'gatsby-plugin-transition-link',
      plugin: require('/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/node_modules/gatsby-plugin-transition-link/gatsby-ssr'),
      options: {"plugins":[],"layout":"/Users/bishal/Documents/Dev/lastdoorsolutions.com_2022/src/components/layout.js"},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
