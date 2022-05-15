### 自定义 Loader 步骤

- webpack.config.js

```
...
 module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, './loader/strReplaceLoader.js'),
            options: {
              chiniseName: '南'
            }
          }
        ]
      },
    ]
  }
  ...
```

./loader/strReplaceLoader.js

```javascript
module.exports = function (source) {
  console.log('----this---', this.query)
  return source.replace('guo', this.query.chiniseName)
}
```

### 工具

- loader-utils

```
npm install loader-utils --save-dev
```
```javascript
const loaderUtils = require('loader-utils')

module.exports = function(source) {
  const options = loaderUtils.getOptions(this)
  return source.replace('guo', options.chiniseName)
}
```