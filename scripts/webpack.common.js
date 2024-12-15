const { resolve, PROJECT_PATH} = require('./constants');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: {
    index: resolve(PROJECT_PATH, './src/index.ts'),
  },
  output: {
    filename: 'library-starter.js',
    library: 'libraryStarter',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(PROJECT_PATH, './dist'),
  },
  plugins: [
    new WebpackBar({
      name: '正在卖力打包中~',
      color: '#fa8c16',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { 
        test: /\.(ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, '../src'),
      '@docs': resolve(__dirname, '../docs'),
      '@public': resolve(__dirname, '../public'),
      '@test': resolve(__dirname, '../test'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
}
