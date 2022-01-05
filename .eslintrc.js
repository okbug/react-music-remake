module.exports = {
  root: true, // 哪个目录
  env: { node: true },
  extends: [], // 可以继承在哪些规则底下"parser": "babel-eslint"
  parserOptions: {
    sourceType: 'module',

    requireConfigFile: false,
  },
  // parser: "babel-eslint",
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'no-console': 'off', // off, warn, error 这三个value,也可以是0 1 2
  },
  // "ecmaVersion": 8,
};
