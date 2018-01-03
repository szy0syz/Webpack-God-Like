const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')

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
    new uglify()
  ],
  devServer: {
    //监听内容的绝对路径
    contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1',
    compress: true,
    port: 8044
  }
}