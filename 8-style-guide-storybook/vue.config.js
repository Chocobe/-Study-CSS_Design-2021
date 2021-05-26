module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "./src/assets/css/style.scss";
        `,
      },
    },
  },
};
