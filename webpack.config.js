module.exports = {
    entry: './main',

    output: {
      filename: 'bundle.js'
    },

    module: {
      loaders: [
        { test: /\.js$/, loader: "babel-loader" }
      ]
    }
  };
