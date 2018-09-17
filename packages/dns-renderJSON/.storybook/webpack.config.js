const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: require.resolve('css-loader'),
        options: {
          minimize: true
        }
      },
      require.resolve('sass-loader'),
    ]
  });
  defaultConfig.plugins.push(new TSDocgenPlugin());
  defaultConfig.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  );
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  return defaultConfig;
};
