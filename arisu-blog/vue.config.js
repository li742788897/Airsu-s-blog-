const { defineConfig } = require('@vue/cli-service')

// const path = require('path')
// const AutoImport = require('unplugin-auto-import/webpack')
// const Components = require('unplugin-vue-components/webpack')
// const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        components: '@/components'
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    },
    devServer: {
      // disableHostCheck: true,
      proxy: {
        // 连接本地请使用这个
        '/blog': {
          target: 'http://kuonnjiarisu.top',
          changeOrigin: true,
          // pathRewrite: {
          //   '^/leaveOverTime': '/api/leave-overtime/v1',
          // },
        },
        // 连接测试使用这个
        // '/blog': {
        //   target: 'http://kuonnjiarisu.top',
        //   changeOrigin: true
        // }
      },
    },
  }
})


