const { getOptions } = require('loader-utils')

module.exports = function(source) {
  const options = getOptions(this)
  // return source.replace('guo', options.chiniseName)            // 使用return只能返回一个参数
  this.callback(null, source.replace('guo', options.chiniseName)) // 使用callback方式，可以返回多个参数
}

// this.callback({
//   err: Error | null,
//   content: string | Buffer,
//   sourceMap?: sourceMap,
//   meta?.any
// })