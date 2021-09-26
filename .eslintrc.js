module.exports = {
  root: true,
  extends: "@react-native-community",
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "no-use-before-define": "off",
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "global-require": "off",
    "import/prefer-default-export": "off",
    "no-unused-expressions": ["error", { allowTaggedTemplates: true }]
  },
  globals: {
    fetch: false
  }
};
