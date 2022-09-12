const patch = require('path');

module.exports = {
  entry: { app: './src/js/app.js' },
  output: {
    filename: `[name].bundle.js`,
    path: patch.resolve(__dirname, './dist/js-local'),
  },
  mode: 'none',
};
