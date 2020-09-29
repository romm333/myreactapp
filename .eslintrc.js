module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  rules: {
    'linebreak-style': 0,
    'no-tabs': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/destructuring-assignment': 0,
    'react/state-in-constructor': 0,
    'react/no-access-state-in-setstate': 0,
    'no-param-reassign': 0,
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ]
  }
};
