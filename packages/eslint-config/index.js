module.exports = {
  plugins: ["@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "turbo",
    "prettier", // Add "prettier" last. This will turn off eslint rules conflicting with prettier. This is not what will format our code.
  ],
  rules: {
    "@next/next/no-img-element": "off",
    "@next/next/no-html-link-for-pages": "off",
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/semi': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-use-before-define': ['error', {
      'functions': false,
      'classes': false,
      'variables': true,
      'allowNamedExports': false
    }],
    'react/jsx-key': 'off',
    'react/no-unescaped-entities': 'off',
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'no-empty': 'warn',
    'no-empty-function': 'off',
    'no-cond-assign': ['error', 'always'],
    'for-direction': 'off',
  },
};
