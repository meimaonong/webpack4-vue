
const webpack = require('webpack')
const ip = require('ip')
const WebpackNotifierPlugin = require('webpack-notifier')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 系统配置
const Sys = require('./../config/sys.conf')

// 目录配置
const Dir = require('./../config/dir.conf')

//环境标识
const isProd = process.env.NODE_ENV === 'production' ? true : false

// 单一入口
let entryArr = {}
entryArr = {
  main: Dir.app + '/main.js'
}

let entryKeys = Object.keys(entryArr)
let chunksArr = []
let pluginsList = []

entryKeys.map(function (key) {
  chunksArr = ['common/build', key]
  
  if (isProd) {
    viewUrl = `${Dir.views_dir}/${key}/index.html`
  } else {
    key === Sys.DEFAULT_ROUTE ? viewUrl = 'index.html' : viewUrl = `${key}/index.html`
  }

  
  // html
  pluginsList.push(
    new HtmlWebpackPlugin({
      title: '',
      filename: viewUrl,
      template: `${Dir.tpl}/main.tpl.html`,
      hash: false,
      chunks: chunksArr,
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    })
  )

  /* if (isProd) {
    tplViewUrl = `${Dir.controllers_dir}/` + key.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase()) + 'Controller.mjs'
    // php action
    pluginsList.push(
      new HtmlWebpackPlugin({
        title: key,
        filename: tplViewUrl,
        template: `${Dir.tpl}/controller.tpl`,
        hash: false,
        chunks: []
      })
    )
  } */
  
})

module.exports = {
  entry: entryArr,
  mode: isProd ? 'production' : 'development',
  output: {
    path: isProd ? Dir.dist : Dir.root,
    publicPath: isProd ? '/dist' : '/',
    filename: isProd ? 'res/[name]/build.[chunkhash:8].js' : '[name]/build.[hash:8].js',
    chunkFilename: isProd ? 'res/[name].[chunkhash:8].js' : '[name].[hash:8].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          chunks: "initial",
          minChunks: 2,
          name: 'common/build',
        }
      }
    },
    minimize: isProd
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          },
          esModule: false
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'import-glob'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: `${Dir.static_file}/[path]/[name].[hash:8].[ext]`
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: `${Dir.static}/[path]/[name].[hash:8].[ext]`
        }
      }
    ]
  },
  plugins: [
    ...pluginsList,
    new WebpackNotifierPlugin(),
    new webpack.ProvidePlugin({
      Vue: ['vue', 'default'],
      VueRouter: ['vue-router', 'default'],
      VuexRouterSync: 'vuex-router-sync',
      Axios: ['axios', 'default'],
      Vuex: ['vuex', 'default'],

      ElementUI: 'element-ui',

      $: 'jquery',
    })
  ],
  resolve: {
    alias: {
      'views': Dir.wp_views,
    },
    extensions: ['.js', '.vue', 'json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    port: Sys.DEV_PORT,
    host: ip.address(),
    proxy: {
      // '/public': {
      //   target: 'http://127.0.0.1:' + Sys.SERVER_PORT,
      //   changeOrigin: true,
      //   secure: false
      // }
    }
  }
}
