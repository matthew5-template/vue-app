const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (mode) => {
  const build = mode !== 'development'
  return {
    entry: ['./src/main.js'],
    output: {
      filename: 'js/[name].js',
      path: path.join(__dirname, '../dist'), // must be absolute path
      chunkFilename: 'js/[name]_[hash:6].js',
      publicPath: '/public' // filename for html reference: prefix path => js/main.js
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src')
      },
      extensions: ['.js', '.vue', '.json']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          use: 'vue-loader'
        },
        {
          test: /\.css$|\.scss$/i,
          use: [
            build && MiniCssExtractPlugin.loader,
            !build && 'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  auto: /src/,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]'
                }
              }
            },
            'postcss-loader'
          ].filter(Boolean)
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 1024,
                name: 'img/[name]_[hash:6].[ext]'
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      build &&
        new MiniCssExtractPlugin({
          filename: 'css/[name].[chunkhash:8].css',
          chunkFilename: 'css/[name].[chunkhash:8].css'
        }),
      // new webpack.HotModuleReplacementPlugin(),
      // new webpack.NamedModulesPlugin(),
      new HtmlWebpackPlugin({
        // templateParameters: {
        //   publicPath: '/public'
        // },
        template: './public/index.html'
      }),
      new VueLoaderPlugin()
    ].filter(Boolean)
  }
}
