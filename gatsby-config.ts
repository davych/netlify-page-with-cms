import type { GatsbyConfig } from 'gatsby';
require('dotenv').config();

const IS_DEV = process.env.NODE_ENV === 'development';
if (IS_DEV) process.env.ENABLE_GATSBY_REFRESH_ENDPOINT = 'true';
const config: GatsbyConfig = {
    siteMetadata: {
        title: `tutorial-gatsby-contentful`,
        siteUrl: `https://www.example.com`
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [

        'gatsby-plugin-postcss',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: IS_DEV ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                host: IS_DEV ? `preview.contentful.com` : `cdn.contentful.com`
            }
        },
    ]
};

export default config;
