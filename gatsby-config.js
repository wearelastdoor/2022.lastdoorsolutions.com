module.exports = {
    siteMetadata: {
        title: `Kathmandu Web Design & Digital Marketing Agency | Lastdoor`,
        description: `Lastdoor Website Solutions is a #1 leader in Web design & Digital Marketing services, helping businesses create a robust and successful web presence.`,
        author: `@Lastdoor`,
    },

    flags: {
        DEV_SSR: false,
    },

    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "UA-28007926-1", // Google Analytics / GA
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sass`,
        `gatsby-transformer-remark`,
        `gatsby-plugin-preload-fonts`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                formats: [`auto`, `webp`],
                placeholder: `dominantColor`,
                quality: 99,
                breakpoints: [750, 1080, 1366, 1920],
                backgroundColor: `transparent`,
                tracedSVGOptions: {},
                blurredOptions: {},
                jpgOptions: {},
                pngOptions: {},
                webpOptions: {},
                avifOptions: {},
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Lastdoor`,
                short_name: `Lastdoor`,
                start_url: `/`,
                background_color: `#F5F6F0`,
                theme_color: `#17212A`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
                cache_busting_mode: "none",
                icons: [
                    {
                        src: "icons/icon-72x72.png",
                        sizes: "72x72",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-96x96.png",
                        sizes: "96x96",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-128x128.png",
                        sizes: "128x128",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-144x144.png",
                        sizes: "144x144",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-152x152.png",
                        sizes: "152x152",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-384x384.png",
                        sizes: "384x384",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
                splash_pages: null,
            },
        },
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `json`,
                path: `${__dirname}/src/json`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "fonts",
                path: `${__dirname}/src/fonts/`,
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        {
            resolve: `gatsby-plugin-offline`,
            options: {
                precachePages: [
                    `/`,
                    `/about/`,
                    `/work/`,
                    `/contact/`,
                    `/mediabook/`,
                    `/discovery-world-trekking/`,
                    `/battigayo/`,
                    `/anchorwave/`,
                    `/animated/`,
                    `/wordpress/`,
                    `/b2b-services/`,
                    `/ux-design/`,
                    `/highstep/`,
                    `/e11group/`
                ],
            },
        },
        {
            resolve: `gatsby-plugin-transition-link`,
            options: {
                layout: require.resolve(`./src/components/layout`),
            },
        },
        {
            resolve: 'gatsby-plugin-brotli'
        }
    ],
}
