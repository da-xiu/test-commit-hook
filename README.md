1. 安装`npm install --save-dev @commitlint/config-conventional @commitlint/cli`
2. 在根目录下创建commit.config.js文件[参见](https://commitlint.js.org/#/reference-rules)

这步的目的是制定提交规范否则会提示

```javascript
    Please add rules to your `commitlint.config.js`
    - Getting started guide: https://commitlint.js.org/#/?id=getting-started
    - Example config: https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/index.js [empty-rules]

```

```javascript
  module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert']
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
};

```

创建提交pre-commit命令，需要提交husky

`npm install husky --save-dev`

然后在package.json文件中添加

```json

"husky": {
    "hooks": {
      // "pre-commit": "lint-staged --verbose",// 也可以配合lint工具，检测代码等
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
},
```


虽然添加了这步还不能成功校验，因为项目中没有执行pre-commit步骤，由于husky版本5以后，需要自己手动添加

```javascript
npx husky-init && npm install
```


这里是把husky文件下载到我们目录中,然后把`npm test`命令删掉，这里是执行我们json文件中的命令，因为没有test这行命令，所以把它删除

现在添加执行命令

```javascript
npx husky add .husky/commit-msg
```

最后在生成的commit-msg文件中添加`npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

