module.exports = {
  env: {
    dev: {
      presets: ["@vue/app"],
      plugins: ["transform-inline-environment-variables"]
    },
    test: {
      presets: ["@babel/preset-env"],
      plugins: ["transform-inline-environment-variables"]
    }
  }
};
