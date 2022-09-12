const patch = require('path');

const patchPageName = '00-00';
const name = 'app';

const inputLink = `./pages/${patchPageName}/js/src/${name}.js`;
const outputLink = `./pages/${patchPageName}/js`;

module.exports = {
  entry: { app: inputLink },
  output: {
    filename: `${name}.bundle.js`,
    path: patch.resolve(__dirname, outputLink),
  },
  mode: 'none',
};
