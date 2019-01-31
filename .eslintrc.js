module.exports = {
  env: {
    browser: true,
    es6: true
  },plugins: [
    "html"
],
  extends: ["plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  }
};
