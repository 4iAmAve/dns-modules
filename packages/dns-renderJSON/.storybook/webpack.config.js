const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: ExtractTextPlugin.extract({
      fallback: require.resolve('style-loader'),
      use: [
        {
          loader: require.resolve('css-loader'),
          options: {
            minimize: true
          }
        },
        require.resolve('sass-loader'),
      ]
    })
  });
  defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.plugins.push(new ExtractTextPlugin('[name].css'),);
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  return defaultConfig;
};
