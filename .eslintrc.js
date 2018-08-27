module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    AA: true,
    AS: true,
    Immutable: true,
    QUnit: true,
    R: true,
    Redux: true,
  },
  rules: {
    'import/extensions': ['error', { js: 'always' }],
    'max-len': ['error', { code: 100, ignoreUrls: true }],
  },
};
