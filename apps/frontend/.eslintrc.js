module.exports = {
  extends: ['../../packages/config/eslint-react'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
