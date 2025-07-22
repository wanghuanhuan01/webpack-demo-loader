const less = require("less");

//这里接受的参数是less源代码
function lessLoader(lessSource) {
    let css;
    less.render(lessSource, { filename: this.resource }, (err, output) => {
        css = output.css;
    });//这里less.render其实也就是把less解析成AST，然后再生成css
    return css;
}
module.exports = lessLoader;
