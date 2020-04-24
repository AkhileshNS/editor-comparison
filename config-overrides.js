const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const { features, languages } = require('./src/Monaco/Monaco.constants');

module.exports = function override(config, env) {
  config.plugins.push(
    new MonacoWebpackPlugin({
      features,
      languages,
    })
  );
  return config;
};
