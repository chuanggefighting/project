
let path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const Timestamp = new Date().getTime();

module.exports = {
  publicPath: "./",
  lintOnSave : false,  // 取消eslint验证
  configureWebpack: {    // webpack 配置
    output: {            // 输出重构，打包编译后的文件名称：模块名称.版本号.时间戳
      filename: `[name]-${process.env.VUE_APP_Version}-${Timestamp}.js`,
      chunkFilename: `[name]-${process.env.VUE_APP_Version}-${Timestamp}.js`
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
  },
  devServer: {
    port: 9090, // 端口号
    host: "127.0.0.1",
    https: false, // https:{type:Boolean}
    // open: true, 
    // proxy: {
      // '/apigateway': {
      //   // target: 'http://10.1.15.78:9091/apigateway/',
      //   // target: 'http://10.1.15.75:9091/apigateway',
      //   target: 'http://10.1.5.189:9090/apigateway',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/apigateway': ''
      //   }
      // }
    // }
  }
}