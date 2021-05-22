module.exports = {
	css: {
		loaderOptions: {
			scss: {
				prependData: `
					@import "src/assets/scss/css-wiper.scss";
					@import "src/assets/scss/globalStyle.scss";
				`,
			},
		},
	},
};
