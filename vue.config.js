const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  devServer: {
    disableHostCheck: true
    // host: 'localhost'
  },
  // Set document.title
  pages: {
    index: {
      entry: "src/main.js",
      title: "6ixplore - Discover locally, instantly",
      content: ""
    }
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
