const withImages = require("next-images");
const withCss = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");

const aliases = {
  Containers: path.resolve(__dirname, "containers"),
  Components: path.resolve(__dirname, "components"),
  Utils: path.resolve(__dirname, "utils"),
  Layout: path.resolve(__dirname, "containers/layouts"),
  Static: path.resolve(__dirname, "static"),
  Api: path.resolve(__dirname, "config/api"),
  Actions: path.resolve(__dirname, "context/actions"),
  Routes: path.resolve(__dirname, "config/routes")
};

const nextConfig = withImages(
  withCss({
    useFileSystemPublicRoutes: false,

    // aliases
    alias: aliases,

    // Extention
    pageExtensions: ["mdx", "jsx", "js", "scss", "css"],

    // Webpack config
    webpack(config) {
      // Resolve path
      config.resolve = {
        ...config.resolve,
        alias: { ...config.resolve.alias, ...aliases }
      };

      config.node = {
        ...config.node,
        fs: "empty"
      };

      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
      }

      return config;
    }
  })
);

module.exports = nextConfig;
