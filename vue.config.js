const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  devServer: {
    disableHostCheck: true
    // host: 'localhost'
  },
  // Pre-render (SEO)
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/about", "/join"]
      })
    ]
  }
};
