/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
  },
  plugins: ["@snowpack/plugin-postcss"],
  packageOptions: {
    source: "remote",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2019",
    treeshake: true,
  },
}
