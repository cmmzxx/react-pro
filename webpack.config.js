const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      'common': path.resolve(__dirname, './src/common/'),
      'components': path.resolve(__dirname, './src/components/'),
    },
    // 导入时可省略的扩展名(js,jsx,scss)
    extensions: ['*', '.js', '.jsx', '.scss']
  },
  module: {
    rules:[
      {
        test: /\.scss$/,
        use:['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use:[{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/env"]
          }
        }]
      }
    ]
  },
  devServer: {
    port: 3000,
    // 指定需要渲染的html的位置，默认为根目录
    // contentBase: path.join(__dirname, 'public/'),
    publicPath: "/dist/",
    // inline: true,
    // hotOnly和hot不同，我将hot写入了命令行中
    // hot: true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}