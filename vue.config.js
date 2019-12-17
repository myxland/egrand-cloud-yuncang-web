const webpack = require('webpack')
const pages = require('./src/pages')
const assetsDir = 'static'

module.exports = {
  assetsDir,
  publicPath: process.env.VUE_APP_PUBLIC_PATH,
  pages,
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: () => {
    return {
      externals: {
        /* 'vue': 'Vue',
         'vue-router': 'VueRouter',
         'vux': 'vux', */
      },
      resolve: {
        alias: {
          /* 'vue$': 'vue/dist/vue.esm.js', */
        }
      },
      plugins: [
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/) /* 解决moment.js打包后体积过大问题 */
      ]
    }
  },
  chainWebpack: config => {
    Object.keys(pages).forEach(key => {
      // 移除 prefetch 插件
      config.plugins.delete(`prefetch-${key}`)
      // 移除 preload 插件
      config.plugins.delete(`preload-${key}`)
    })

    config.optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  },
  css: {
    loaderOptions: {
      // 给 less-loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
      '/ms': {
        target: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
        changeOrigin: true
      }
    }
  }
}
