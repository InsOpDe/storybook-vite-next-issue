module.exports = {
	core: {
		builder: "storybook-builder-vite"
	},
	stories:  [
		"../src/**/stories.@(js|jsx|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
	],
	typescript: {
		check: true,
		checkOptions: {},
	},
	async viteFinal(config, { command }) {
		config.optimizeDeps.include.push(
//			"next/link",
		)

		return config
	},
};
