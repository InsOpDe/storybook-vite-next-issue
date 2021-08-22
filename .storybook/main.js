const path = require("path")
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const defaultStories = [
	"../src/**/*.stories.mdx",
	"../src/**/stories.@(js|jsx|ts|tsx)"
//		"../stories/(!specs)/*.stories.@(js|jsx|ts|tsx)"
]
/* yarn storybook -stories src/admin-portal/chat/stories.tsx */
const getArgument = () => {
	for(const key in process.argv) {
		const arg = process.argv[key]
		if(arg === "-stories") {
			return process.argv[Number(key) + 1]
		}
	}
}
const getStories = () => {
	const selectedStory = getArgument()
	return selectedStory
		? [`../${selectedStory}`]
		: defaultStories
};
module.exports = {
	core: {
		builder: "storybook-builder-vite"
	},
	stories: getStories(),
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
//		{
//			name: "storybook-addon-turbo-build",
//			options: {
//				// Please refer below tables for available options
//				optimizationLevel: 3,
//			},
//		},
	],
	// https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
	typescript: {
		check: true,
		checkOptions: {},
//		reactDocgen: 'react-docgen-typescript',
//		reactDocgenTypescriptOptions: {
//			shouldExtractLiteralValuesFromEnum: true,
//			propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
//		},
	},
	async viteFinal(config, { command }) {
		const isBuild = command === 'build'
//		const cdkResolve = isBuild ? '../../dist/cdk' : '../cdk'
		const cdkResolve = "../../client"
//		config.resolve.alias = [
//			{ find: '@teamparallax/client-libraries', replacement: path.resolve(__dirname, cdkResolve) }
//		]
//		config.optimizeDeps.link = [
//			"@teamparallax/client-libraries"
//		]
		config.optimizeDeps.keepNames = true
		config.optimizeDeps.include.push(
			"has-symbols",
			"@storybook/core-client",
//			"@storybook/theming",
//			"storybook-addon-next-router",
//			"react-i18next",
//			"reoverlay",
//			"react-toastify",
//			"@mdx-js/preact",
//			"@storybook/addon-docs/blocks",
//			"faker",
//			"classnames",
//			"lodash-es",
//			"next/router",
//			"next/link",
//			"@fullcalendar/react",
//			"@fullcalendar/daygrid",
//			"@fullcalendar/core/locales/de",
//			"@fullcalendar/interaction",
//			"arwes",
//			"react-hook-form",
//			"lodash",
//			"react-select",
//			"preact",
//			"react-toggle",
//			"i18next",
//			"@uppy/react",
//			"@uppy/core",
//			"react-table",
//			"react-custom-scrollbars",
//			"@fortawesome/react-fontawesome",
//			"@fortawesome/free-solid-svg-icons",
//			"react-mde",
//			"react-keyed-file-browser",
//			"react-markdown",
//			"remark-gfm",
//			"remark-directive",
//			"react-select/async",
//			"@tippyjs/react",
//			"@uppy/locales/lib/de_DE",
//			"@uppy/webcam",
//			"@uppy/xhr-upload",
//			"feather-icons-react",
//			"react-slidedown",
//			"next/head",
//			"react-reveal/Fade",
		)
//		config.plugins.push(nodeResolve())
//		config.plugins.push(nodeResolve())
//		config.plugins.push(require('rollup-plugin-polyfill-node')())
//		config.build = {
//			rollupOptions: {
//				configDebug: true,
//				plugins: [
//					require('rollup-plugin-polyfill-node')()
//				]
//			}
//		}
//		config.plugins = config.plugins.filter(plugin => plugin.name !== "react-refresh")
//		config.plugins = config.plugins.filter(plugin => !plugin.hasOwnProperty("length"))
//		config.plugins.push(
//			require('@vitejs/plugin-react-refresh')({
//				include: '**/*.tsx',
//				// Do not treat story files as HMR boundaries, storybook itself needs to handle them.
//				exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
//			})
//		);

//		reactRefresh()

		return config
	},
};
