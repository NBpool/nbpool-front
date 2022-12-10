module.exports = {
  root: true,
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'eslint-config-prettier',
    'plugin:prettier/recommended',
  ],

  // eslint-plugin-vue
  plugins: ['vue', 'prettier'],
  rules: {
    semi: ['warn', 'always'],
    'prettier/prettier': 0,
    'no-unused-vars': 1,
    'no-undef': 0,
    "no-multiple-empty-lines": [1, { "max": 3 }],
    'vue/multi-word-component-names': 0,
    'vue/no-side-effects-in-computed-prope': 0,
    'vue/order-in-components': 0,
    'vue/no-reserved-component-names': 0,
    'vue/no-side-effects-in-computed-properties': 0,
    'valid-typeof': 0,
    'no-dupe-keys': 0,
    'vue/no-duplicate-attributes': 0,
    'vue/valid-attribute-name': 0,
    "vue/prop-name-casing": [2, "camelCase"],
    "no-case-declarations": 0,
    "no-unused-vars": 0,
    "vue/no-unused-components": 0
  },
};