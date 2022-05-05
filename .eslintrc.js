module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'max-len': 0,
    'react/jsx-no-constructed-context-values': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-unused-expressions': 'off',
    'import/no-duplicates': 'off',
    camelcase: 'off',
  },
};
