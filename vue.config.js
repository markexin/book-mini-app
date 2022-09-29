module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
              },
            },
            {
              loader: "postcss-loader",
            },
          ],
        },
      ],
    },
  },
  devServer: {
    proxy: {
      '/frontend': {
        target: 'https://f5f7-111-199-185-177.jp.ngrok.io',
        ws: true,
        changeOrigin: true
      },
    }
  }
};
