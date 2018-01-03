const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')
const htmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    entry: './src/entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  // 模块对象：打包css、转换图片等
  module: {},
  // 插件必须是数组
  plugins: [
    new uglify(),
    new htmlPlugin({
      minify: { // 是对html文件进行压缩，removeAttrubuteQuotes是却掉属性的双引号。
        removeAttributeQuotes: true,
      },
      hash: true, // 效避免缓存JS
      template: './src/index.html' // 要打包的html模版路径和文件名称
    })
  ],
  devServer: {
    //监听内容的绝对路径
    contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    compress: true,
    port: 8044
  }
}