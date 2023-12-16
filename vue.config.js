const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /*configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },*/
})
/*
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        zlib: require.resolve('browserify-zlib')
      }
    }
  }
}*/