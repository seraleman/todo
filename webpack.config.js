const HtmlWebPack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const Copy = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',

  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /styles.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /styles.css$/,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'file-loader',
      },
    ],
  },

  optimization: {},

  plugins: [
    new HtmlWebPack({
      title: 'Mi Webpack App',
      template: 'src/index.html',
    }),
    new MiniCssExtract({
      // filename: '[name].[fullhash].css',
      filename: '[name].css',
      ignoreOrder: false,
    }),
    new Copy({
      patterns: [{ from: 'src/assets/', to: 'assets/' }],
    }),
  ],

  devServer: { watchFiles: ['src/*.html'], hot: true },
}
