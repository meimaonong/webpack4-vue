const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 目录配置
const Dir = require('./../config/dir.conf')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var baseWebpackConfig = require(`${Dir.app}/webpack.base.conf`)
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseWebpackConfig, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
      [
        `${Dir.dist}/res`,
      ], 
      {
        root: Dir.root,
        verbose: true,
        dry: false
      }
    ),
    new webpack.DllReferencePlugin({
      context: Dir.root,
      manifest: require(`${Dir.dist}/vendor/vendor-manifest.json`)
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  devtool: '#source-map'
})