const path = require(`path`)

const config = require(`./src/utils/siteConfig`)
const generateRSSFeed = require(`./src/utils/rss/generate-feed`)

let ghostConfig

try {
    ghostConfig = require(`./.ghost`)
} catch (e) {
    ghostConfig = {
        production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_CONTENT_API_KEY,
        },
    }
} finally {
    const { apiUrl, contentApiKey } = process.env.NODE_ENV === `development` ? ghostConfig.development : ghostConfig.production

    if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
        throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
    }
}

if (process.env.NODE_ENV === `production` && config.siteUrl === `http://localhost:8000` && !process.env.SITEURL) {
    throw new Error(`siteUrl can't be localhost and needs to be configured in siteConfig. Check the README.`) // eslint-disable-line
}

/**
* This is the place where you can tell Gatsby which plugins to use
* and set them up the way you want.
*
* Further info 👉🏼 https://www.gatsbyjs.org/docs/gatsby-config/
*
*/
module.exports = {
    // proxy: {
    //     prefix: "/api",
    //     url: "https://api.vantagecircle.co.in/",
    // },
    siteMetadata: {
        siteUrl: process.env.SITEURL || config.siteUrl,
    },
    plugins: [
        /**
         *  Content Plugins
         */
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `pages`),
                name: `pages`,
            },
        },
        // Setup for optimised images.
        // See https://www.gatsbyjs.org/packages/gatsby-image/
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: path.join(__dirname, `src`, `images`),
                name: `images`,
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-ghost`,
            options:
                process.env.NODE_ENV === `development`
                    ? ghostConfig.development
                    : ghostConfig.production,
        },
        /**
         *  Utility Plugins
         */
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.shortTitle,
                short_name: config.shortTitle,
                start_url: `/`,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: `minimal-ui`,
                icon: `static/${config.siteIcon}`,
                legacy: true,
                icon_options: {
                    purpose: `any maskable`,
                },
            },
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                {
                    allGhostSettings {
                        edges {
                            node {
                                title
                                description
                            }
                        }
                    }
                }
              `,
                feeds: [
                    generateRSSFeed(config),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-advanced-sitemap`,
            options: {
                query: `
                {
                    allGhostPost {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                    allGhostPage {
                        edges {
                            node {
                                id
                                slug
                                updated_at
                                created_at
                                feature_image
                            }
                        }
                    }
                }`,
                mapping: {
                    allGhostPost: {
                        sitemap: `posts`,
                    },
                    allGhostPage: {
                        sitemap: `pages`,
                    },
                },
                exclude: [
                    `/dev-404-page`,
                    `/404`,
                    `/404.html`,
                    `/offline-plugin-app-shell-fallback`,
                    `/amp`,
                    `/tag/podcasts`,
                    /(\/)?hash-\S*/,
                    `/test-calculator`,
                    `/roi-calculator`,
                    /(\/)?tag\S*/,
                ],
                createLinkInHead: true,
                addUncaughtPages: true,
            },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-force-trailing-slashes`,
        `gatsby-plugin-offline`,
        // {
        //     resolve: `gatsby-plugin-disqus`,
        //     options: {
        //         shortname: `vantage-circle`,
        //     },
        // },
        // {
        //     resolve: "gatsby-plugin-google-tagmanager",
        //     options: {
        //         id: "GTM-KDT5ZH8",

        //         // Include GTM in development.
        //         //
        //         // Defaults to false meaning GTM will only be loaded in production.
        //         includeInDevelopment: false,

        //         // datalayer to be set before GTM is loaded
        //         // should be an object or a function that is executed in the browser
        //         //
        //         // Defaults to null
        //         defaultDataLayer: { platform: "gatsby" },

        //         // Specify optional GTM environment details.
        //         // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //         gtmPreview: "Preview Environment",
        //         // dataLayerName: "YOUR_DATA_LAYER_NAME",

        //         // Name of the event that is triggered
        //         // on every Gatsby route change.
        //         //
        //         // Defaults to gatsby-route-change
        //         routeChangeEventName: "gatsby_route_change",
        //     },
        // },
        {
            resolve: `gatsby-plugin-amp-fork`,
            options: {
                analytics: {
                    type: 'gtag',
                    dataCredentials: 'include',
                    config: {
                        vars: {
                            gtag_id: 'UA-47126287-7',
                            config: {
                                'UA-47126287-7': {
                                    page_location: '{{pathname}}'
                                },
                            },
                        },
                    },
                    // config: 'https://www.googletagmanager.com/amp.json?id=GTM-PJ9DVH4&gtm.url=SOURCE_URL',
                },
                canonicalBaseUrl: 'https://blog.vantagecircle.com/',
                components: ['amp-script'],
                excludedPaths: ['/404*', '/', '/tag/*','/tag/*/*/*','/podcasts*','/become-a-contributor*', '/kpi','/roi-calculator'],
                pathIdentifier: '/amp/',
                relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
                useAmpClientIdApi: true,
                relCanonicalPattern: '{{canonicalBaseUrl}}{{pathname}}/',
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-relative-images`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 600,
                            quality: 50,
                            loading: 'lazy',
                            withWebp: true,
                        },
                    },
                ],
            },
        },
       
    ],
}
