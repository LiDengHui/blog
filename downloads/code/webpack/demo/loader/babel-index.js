const loaderUtils = require("loader-utils");
const acorn = require("acorn");
const { simple } = require("acorn-walk");
const MagicString = require("magic-string");
// loader 执行
module.exports = function (content) {
    console.log("🍎", content);
    const options = loaderUtils.getOptions(this);
    const ast = acorn.parse(content, options);
    console.log("AST", ast);
    const code = new MagicString(content);
    simple(ast, {
        VariableDeclaration(node) {
            // AST 类型处理
            console.log("NODE", node);
            code.overwrite(node.start, node.start + 5, "var");
        },
    });
    console.log("options", options);
    console.log(this.data); // 获取pitch中的值
    return code.toString();
};

// 提前加载必要数据
module.exports.pitch = function (r, preRequest, data) {
    console.log("PITCH", "r:", r, "preRequest:", preRequest, "data:", data);
    data.value = "京城一灯";
};
