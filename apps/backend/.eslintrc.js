module.exports = {
  extends: ['../../packages/config/eslint-server'],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
