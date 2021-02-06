//const Dotenv = require('dotenv-webpack');
const path = require('path');
const graphql = require('next-plugin-graphql');
const images = require('next-optimized-images');
const { withPlugins } = require('next-compose-plugins');
const analyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const nextConfig = {
    images: {
        domains: ['bahra.eu'],
      },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  distDir: "_next",
generateBuildId: async () => {
  if (process.env.BUILD_ID) {
    return process.env.BUILD_ID;
  } else {
    return `${new Date().getTime()}`;
  }
},
    webpack: (config, { isServer }) => {
        config.node = {
            fs: 'empty'
          }
        //const enhancedConfig = config;
        //enhancedConfig.node = {
        //    fs: 'empty',
        //};
        // enhancedConfig.plugins.push(
        //     ...[
        //         new Dotenv({
        //             path: path.join(__dirname, '.env'),
        //         }),
        //     ]
        // );
        if (isServer) {
            const antStyles = /antd\/.*?\/style\/css.*?/;
            const origExternals = [...config.externals];
            config.externals = [
                (context, request, callback) => {
                    if (request.match(antStyles)) return callback();
                    if (typeof origExternals[0] === 'function') {
                        origExternals[0](context, request, callback);
                    } else {
                        callback();
                    }
                },
                ...(typeof origExternals[0] === 'function' ? [] : origExternals),
            ];

            config.module.rules.unshift({
                test: antStyles,
                use: 'null-loader',
            });
        }
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })

        return config;
    },
};

const config = withPlugins([graphql, images, analyzer], nextConfig);

module.exports = config;
