const base = require('./webpack.base')
const merge = require('lodash/merge')

module.exports = merge(base('development'), {
  mode: 'development',
  devtool: 'inline-cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    publicPath: '/public'
  }
})
