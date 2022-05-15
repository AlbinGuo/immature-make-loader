const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader/strReplaceLoader.js'), // 'babel-loader',
            options: {
              chiniseName: 'annnnn'
            }
          }
        ]
      },
    ]
  }
}