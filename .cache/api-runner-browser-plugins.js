module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-styled-components/gatsby-browser.js'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false,"disableVendorPrefixes":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-jss/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-28007926-1"],"pluginConfig":{"head":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Lastdoor","short_name":"Lastdoor","start_url":"/","background_color":"#F5F6F0","theme_color":"#17212A","display":"minimal-ui","icon":"src/images/favicon.png","cache_busting_mode":"none","icons":[{"src":"icons/icon-72x72.png","sizes":"72x72","type":"image/png"},{"src":"icons/icon-96x96.png","sizes":"96x96","type":"image/png"},{"src":"icons/icon-128x128.png","sizes":"128x128","type":"image/png"},{"src":"icons/icon-144x144.png","sizes":"144x144","type":"image/png"},{"src":"icons/icon-152x152.png","sizes":"152x152","type":"image/png"},{"src":"icons/icon-192x192.png","sizes":"192x192","type":"image/png"},{"src":"icons/icon-384x384.png","sizes":"384x384","type":"image/png"},{"src":"icons/icon-512x512.png","sizes":"512x512","type":"image/png"}],"splash_pages":null,"include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[],"precachePages":["/","/about/","/work/","/contact/","/mediabook/","/discovery-world-trekking/","/battigayo/","/anchorwave/","/animated/","/service-single/","/ux-design/"]},
    },{
      plugin: require('../node_modules/gatsby-plugin-transition-link/gatsby-browser.js'),
      options: {"plugins":[],"layout":"/Users/harry/Documents/Work/lastdoorsolutions.com_2022/src/components/layout.js"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
