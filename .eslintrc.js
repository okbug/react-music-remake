module.exports = {
    root: true, // 哪个目录
    env: {node: true},
    extends: [], // 可以继承在哪些规则底下
    parseOptions: {parser: 'babel-eslint'},
    rules: {
        "no-console": "off" // off, warn, error 这三个value,也可以是0 1 2
    },
}