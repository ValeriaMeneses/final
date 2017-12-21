
module.exports = env => {
  return {
    context: __dirname,
    entry: "./src/client/js/App.js",
    devtool: env.NODE_ENV === 'production' ? "source-map" : "eval-source-map",
    output: {
      path: `${__dirname}/public/js`,
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.json']
    },
    stats: {
      colors: true,
      reasons: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader?mimetype=image/png"
        }]
      }
  }

}
