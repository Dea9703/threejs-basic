module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      modules: true
    },
    requireConfigFile: false
  },
  plugins: [
    'vue'
  ],
  rules: {
    semi: ['error', 'never'], // 禁止尾部使用分号“ ; ”
    'semi-spacing': 'error', // 强制分号后面有空格，如for (let i=0; i<20; i++)
    'no-var': 'error', // 禁止使用 var
    'prefer-const': 'error', // 要求使用const声明不会被修改的变量
    'spaced-comment': 'error', // 强制注释（//或/*）后面要有一个空格
    indent: ['error', 2], // 缩进2格
    eqeqeq: 'error', // 要求使用 === 和 !==
    'no-multi-spaces': 'error', // 禁止出现多个空格，如===前后可以有一个空格，但是不能有多个空格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    'require-await': 'error', // 禁止使用不带await的async表达式
    'array-element-newline': ['error', 'consistent'], // 数组元素要一致的换行或者不换行
    'key-spacing': 'error', // 强制对象键值冒号后面有一个空格
    'arrow-spacing': 'error', // 要求箭头函数的=>前后有空格
    'no-duplicate-imports': 'error', // 禁止重复导入
    quotes: [2, 'single'], // 使用单引号
    'rest-spread-spacing': 'error', // 扩展运算符...和表达式之间不允许有空格，如... re1错误，应该是...re1
    'vue/multi-word-component-names': 'off',
    'vue/html-closing-bracket-newline': 'off', // 不强制换行
    'vue/singleline-html-element-content-newline': 'off', // 不强制换行
    'vue/max-attributes-per-line': ['error', {
      singleline: { max: 5 },
      multiline: { max: 5 }
    }]
  }
}
