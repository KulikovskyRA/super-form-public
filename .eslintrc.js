module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'no-shadow': 'off',
        indent: ['error', 4],
        quotes: [2, 'single', { avoidEscape: true }],
        semi: 0,
        'no-use-before-define': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
    },
};
