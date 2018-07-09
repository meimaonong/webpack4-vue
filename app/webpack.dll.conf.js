const webpack = require('webpack')

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// 需要打包dll组件列表
let vArr = [
  'vue', 
  'vue-router', 
  'axios', 
  'vuex', 
  'vuex-router-sync', 
  'jquery', 
  'element-ui'
]

// 目录配置
const Dir = require('./../config/dir.conf')
// ENV判断
const isProd = process.env.NODE_ENV === 'production' ? true : false
// mode
const mode = isProd ? 'production' : 'development'
// filename
const filename = isProd ? 'vendor.dll.[hash:8].js' : 'vendor.dll.dev.[hash:8].js'
// filejson
const filejson = isProd ? 'vendor-manifest.json' : 'vendor-manifest-dev.json'
// vendor
const vendor = isProd ? 'vendor.html' : 'vendor-dev.html'
// clean_dir
const clean_dir = isProd ? `${Dir.dist}/vendor` : `${Dir.dist}/vendor_dev`
// plugins
const plugins = [
  new CleanWebpackPlugin(
    [
      clean_dir
    ],
    {
      root: Dir.root,
      verbose: true,
      dry: false
    }
  )
]

const devtool = '#source-map'

module.exports = {
  entry: {
    vendor: vArr
  },
  mode,
  output: {
    path: Dir.dist,
    publicPath: '/dist',
    filename: isProd ? `[name]/${filename}` : `[name]_dev/${filename}`,
    library: '[name]'
  },
  optimization: {
    minimize: isProd
  },
  plugins: [
    ...plugins,
    new webpack.DllPlugin({
      path: isProd ? `${Dir.dist}/[name]/${filejson}` : `${Dir.dist}/[name]_dev/${filejson}`,
      name: '[name]'
    }),
    new HtmlWebpackPlugin({
      filename: `${Dir.tpl}/${vendor}`,
      templateContent: '',
      chunks: ['vendor'],
      minify: true,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false
    })
  ],
  devtool,
}
