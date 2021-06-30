module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },

  extends: [
    "plugin:prettier/recommended", // https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
    "prettier/prettier",
    "plugin:ramda/recommended",
  ],

  plugins: ["prettier", "jest", "ramda", "simple-import-sort"],

  overrides: [
    {
      files: ["*.js", "*.jsx"],
      parser: "@babel/eslint-parser",
      plugins: [],
      rules: {},
    },
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        "@typescript-eslint/no-unused-vars": [
          "error",
          { argsIgnorePattern: "^_" },
        ],
        "no-unused-vars": "off",
      },
    },
    {
      files: [
        "*.{spec,test}.{js,ts,tsx}",
        "**/__{mocks,tests}__/**/*.{js,ts,tsx}",
      ],
      env: {
        jest: true,
        "jest/globals": true,
      },
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-duplicates": "off",
        "no-underscore-dangle": "off",
        quotes: [
          1,
          "single",
          { avoidEscape: true, allowTemplateLiterals: true },
        ],
      },
    },
  ],

  rules: {
    "prettier/prettier": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-implicit-coercion": "error",
    "no-unused-labels": "error",
    "no-process-env": "error",
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-console": ["error", { allow: ["info", "warn", "error"] }],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "arrow-body-style": ["error", "as-needed"],
  },
};
