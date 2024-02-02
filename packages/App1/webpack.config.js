const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { ModuleFederationPlugin } = require('webpack').container; 
module.exports = (env = {}) => ({
  mode: 'development',
  cache: false,
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  entry: path.resolve(__dirname, './src/main.js'), //need to mention entry path and by default we point to main.js and start from there APP
  output: {
    publicPath: 'auto' , //default option it is pointed to dist folder 
  },
  resolve: {
    extensions: ['.vue', '.jsx', '.js', '.json'], // Mention all the extensions used in the application
    // way of importing methodoglogy. Alias represents the browser of how to import VUE components 
    //from dist folder and convert to javascript (understandable language by browser)
    alias: {
            vue$: 'vue/dist/vue.common.js', // JS code will be initally loaded from dist folder common js file 
    },
  },
  module: {
    rules: [
      {
         // when you come across a path that resolves to a '.vue' file inside 
       //of a require()/import statement, use the vue-loader to transform it before you add it to the bundle."
        test: /\.vue$/, // converting VUE files using Vue-loader as browser understands standard language and not VUE.
        use: 'vue-loader', //converts vue code to js code using loader plugin
      },
      {
       // when you come across a path that resolves to a '.css' file inside 
       //of a require()/import statement, use the MiniCssExtractPlugin to transform it before you add it to the bundle."
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //converting CSS code to browser understandable lang
            options: {},
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(), // plugins to convert VUE code to JS code which browser understands
    new MiniCssExtractPlugin({
      filename: '[name].css', // plugins to convert CSS code  to browser understandable lang and mentioning .css as by default it converts to js
    }),
    new ModuleFederationPlugin({ //this can be used like provider
      name: 'vue1App',
      filename: 'remoteEntry.js', 
      library: { type: 'var', name: 'vue1App' },
      exposes: {
        './vue2': './node_modules/vue/dist/vue',
        './Button': './src/components/Button',
        './Header': './src/components/Header',
      },
    }),
    new HtmlWebpackPlugin({ //plugin encapuslates HTML with generated script tags and additional HTML tags
      template: path.resolve(__dirname, './index.html'), 
    }),
  ],
  devServer: { //used during development to enable debuggng and other runtime features in local
    static: {
      directory: path.join(__dirname), 
    },
    compress: true,
    port: 3001,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
});
