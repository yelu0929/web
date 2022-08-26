module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-hooks"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier/@typescript-eslint"
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  env: {
    browser: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-console": "off",
    "no-debugger": "off",
    "quotes": ["error", "double"],
    "react/jsx-boolean-value": ["error", "always"],
    // "react/jsx-closing-bracket-location": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-wrap-multilines": "error",
    "react/prefer-es6-class": "error",
    "react/self-closing-comp": "error",
    "react/display-name": "off",
    "react/prop-types": 0, //防止在react组件定义中缺少props验证
    // /** hook使用规则 */
    // "react-hooks/rules-of-hooks": "error",
    // /** hook依赖规则 */
    // "react-hooks/exhaustive-deps": "warn",
  }
};
