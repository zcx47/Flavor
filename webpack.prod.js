const { merge } = require('webpack-merge');
const { GenerateSW } = require('workbox-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new GenerateSW({
      swDest: './sw-workbox.js',
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'CacheApi',
          },
        },
      ],
    }),
  ],
});
