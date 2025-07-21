const babel = require('@babel/core');
const path = require('path');

function myBabelLoader(source) {
    const options = this.getOptions();
    const { code } = babel.transformSync(source, options);
    return code;
}
module.exports = myBabelLoader;