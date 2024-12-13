import path from 'path';
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default [
  {
    // build for esm
    entry: './src/index.ts',
    output: {
      filename: 'test.esm.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'module'
    },
    experiments: {
      outputModule: true
    },
    mode: 'production',
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
      extensions: ['.ts', '.js'],
    },
  },
  {
    // build for cjs
    entry: './src/index.ts',
    output: {
      filename: 'test.cjs.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2'
    },
    mode: 'production',
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
      extensions: ['.ts', '.js'],
    },
  },
  {
    // build for browser
    entry: './src/index.ts',
    output: {
      filename: 'test.browser.js',
      path: path.resolve(__dirname, 'dist'),
      library: 'Steem',
      libraryTarget: 'umd'
    },
    mode: 'production',
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
      extensions: ['.ts', '.js'],
    },
  }
];
