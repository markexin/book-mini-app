module.exports = {
    plugins: [
      require('autoprefixer'),
      require('postcss-nested'),
      require('postcss-plugin-px2rem')({
        rootValue: 16.67
      })
    ]
}