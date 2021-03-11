const path = require("path")

function DtsBundlePlugin() {
}

DtsBundlePlugin.prototype.apply = (compiler) => {
    compiler.hooks.done.tap('DtsBundlePlugin', function () {
        const dts = require('dts-bundle');
        const rootDir = path.resolve(__dirname, '../');
        dts.bundle({
            name: 'a',
            prefix: "___",
            main: rootDir + '/dist/**/*.d.ts',
            out: rootDir + '/dist/mainLib.d.ts',
            removeSource: true,
            outputAsModuleFolder: true,
            exclude: [],
            headerText: " n@author Aonaufly n@email Aonaufly@126.comn"
        });
    });
}
module.exports = DtsBundlePlugin;