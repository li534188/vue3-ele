const path = require('path');// nodejs里面的基本包，用来处理路径
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const proxy = require('http-proxy-middleware');

// const model = process.env.NODE_ENV;
// __dirname表示文件相对于工程的路径
module.exports ={
  entry: {
    entry:
      path.join(__dirname, 'src/entry/home/index.js'),
    entry1:
      path.join(__dirname, 'src/entry/login/index1.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/entry/home/index.html',
      inject: true,
      trunks: ['manifest', 'vendor', 'entry']
    }),
    new HtmlWebpackPlugin({
      filename: 'index1.html',
      template: './src/entry/login/index1.html',
      inject: true,
      trunks: ['manifest', 'vendor', 'entry1']
    }),
  ],
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, './src'), // 这样配置后 @ 可以指向 src 目录
      'PAGE': path.resolve(__dirname, './src/page')
    }
  },
  //   mode:'none',
  module: {
    rules: [
      { // 通过vue-loader来识别以vue结尾的文件
        test: /.vue$/,
        loader: 'vue-loader'
      },
      { // 通过vue-loader来识别以vue结尾的文件
        test: /\.css$/,
        // css的处理方式不同，有嵌入在页面style标签里的，有从外部文件引入的，我们这里用use来声明
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        // 指定检查的目录
        // eslint-disable-next-line no-undef
        include: [path.join(__dirname, 'src')],
        // eslint检查报告的格式规范
        // options: {
        //   formatter: require('eslint-friendly-formatter')
        // }
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader'
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
        ]
      }
    ]
  },
  devServer: {
    compress: true,
    port: 8080,
    proxy: {
      '/api': { // api表示当前项目请求的key
        target: 'https://elm.cangdu.org', // 代理服务器路径
        pathRewrite: { '^/api': '/' }, // 重写路径
        changeOrigin: true
      }
    },
  }
};