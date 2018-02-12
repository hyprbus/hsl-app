// webpack.config.js
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Tell webpack to start bundling our app at src/index.tsx
  entry: "./src/index.tsx",
  // Output our app to the dist/ directory
  output: {
    filename: "app.js",
    path: `${__dirname}/dist`
  },
  // Emit source maps so we can debug our code in the browser
  devtool: "source-map",
  // Tell webpack to run our source code through Babel
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      // Note separate typescript tsconfig file, in order to exclude Jest test files
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader?configFileName=tsconfig.webpack.json"
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      // Remember to exclude node_modules! Otherwise, lots of warnings.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-react-loader",
        query: {
          classIdPrefix: "[name]-[hash:8]__",
          propsMap: {
            fillRule: "fill-rule",
            foo: "bar"
          },
          xmlnsTest: /^xmlns.*$/
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  // Since Webpack only understands JavaScript, we need to
  // add a plugin to tell it how to handle html files.
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.template.ejs",
      inject: "body"
    }),
    new CleanWebpackPlugin(["build"])
    // new CopyWebpackPlugin([{ from: "src/images", to: "images" }])
  ]
};
