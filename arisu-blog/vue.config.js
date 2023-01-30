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
    // plugins: [
    //   AutoImport({
    //     resolvers: [
    //       ElementPlusResolver({
    //         exclude: new RegExp(/^(?!.*loading-directive).*$/), //修改此处
    //       }),
    //     ],
    //   }),
    //   // Components({
    //   //   resolvers: [ElementPlusResolver()],
    //   // }),
    // ],
  }
})


