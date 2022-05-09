const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css:{
    loaderOptions:{
      sass:{
        prependData:'@import "@/assets/style.scss;'
      }
    }
  }
}
