const path = require("path");
const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
	output: {
		uniqueName: "app"
	},
	experiments: {
		css: true
	},
	plugins: [new StylelintPlugin({
		configFile: path.join(__dirname, ".stylelintrc.json"),
		context: path.join(__dirname, "src"),
		outputReport: true,
	})],
};