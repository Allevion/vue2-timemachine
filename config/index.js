// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');
var proxyMiddleware = require('http-proxy-middleware');

module.exports = {
  build: {
    env: {NODE_ENV: '"production"', debug: false,IMG_BASEURL:'""'},
    index: path.resolve(__dirname, '../timemachine/index.html'),
    assetsRoot: path.resolve(__dirname, '../timemachine'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    apiHost: '',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: {NODE_ENV: '"development"', debug: true,IMG_BASEURL:'"http://127.0.0.1:9000"'},
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    apiHost: '/api',
    port: 8088,
    proxy:[proxyMiddleware('/api', {
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api':''
      }
    })],
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }

};
