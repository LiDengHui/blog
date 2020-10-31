const { resolve } = require("path");
const ConsoleLogOnBuildWebpackPlugin = require("./plugin/ConsoleLogOnBuildWebpackPlugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: resolve("./loader/babel-index"),
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [ConsoleLogOnBuildWebpackPlugin],
};
