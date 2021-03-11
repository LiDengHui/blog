const pluginName = "ConsoleLogOnBuildWebpackPlugin";

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, (compilation) => {
            console.log("The webpack build process is starting!!!");
            console.log("-----------------");
        });
    }
}

module.exports = function () {
    console.log("plugins", this.hooks.run);
};
