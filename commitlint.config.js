module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always', // 在什么时候验证
            ['feature', 'fix', 'docs', 'style', 'chore', 'build', 'revert', 'feat']
        ],
        'subject-case': [0], // 不对subject校验
    }
}