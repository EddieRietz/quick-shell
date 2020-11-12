module.exports = {
  mode: "spa",
  head: { title: "quick-shell" }, // Headers of the page
  loading: false, // Disable default loading bar
  components: true,
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        // Run ESLint on save
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.target = "electron-renderer";
      }
    },
  },
  dev: process.env.NODE_ENV === "DEV",
  plugins: ["@/plugins/vue-highlightjs.js"],
  css: ["@/assets/css/global.css"],
};
