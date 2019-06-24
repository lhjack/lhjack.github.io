// es6 基本语法

// 箭头函数  解构赋值   字符串模板  class Promise async await  对象展开... let/const  模块 export import 

const keys = "每天都好累";

// 暴露方式1 ===> module.exports 
export default {
    keys
}
// 暴露方式 2   exports.init = init; 暴露对象 
export const init = "Are you ok?"