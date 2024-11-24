import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const config = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'steem.min.js',
    library: {
      name: 'steem',
      type: 'umd',
    },
    globalObject: 'this',
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
  plugins: [
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
      },
    },
  },
  experiments: {
    outputModule: true,
  },
};

const esmConfig = {
  ...config,
  output: {
    ...config.output,
    filename: 'steem.esm.js',
    library: {
      type: 'module',
    },
  },
};

export default [config, esmConfig];
