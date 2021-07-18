const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@api', resolve('src/api'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@router', resolve('src/router'))
      .set('@store', resolve('src/store'))
      .set('@config', resolve('src/config'))
      .set('@directives', resolve('src/directives'))
      .set('@libs', resolve('src/libs'))
      .set('@modules', resolve('src/modules'))
      .set('@views', resolve('src/views'))
  }
}