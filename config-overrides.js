const { override, fixBabelImports, addLessLoader } = require("customize-cra");
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      // -------- Colors -----------
      // "@primary-color": "#006CB7",
      // "@info-color": "#006CB7",

      // "@processing-color": "#006CB7",

      // "@link-color": "#006CB7",
      // "@link-active-color": "#006CB7",

      // "@success-color": "#64AF13",
      // "@warning-color": "#EF8200",
      // "@text-color-warning": "#EF8200",
      // "@rate-star-color": "#EF8200",

      // "@error-color": "#EA4B6B",
      // "@text-color-danger": "#EA4B6B",
      // "@highlight-color": "#EA4B6B",

      // "@text-color": "#333",
      // "@input-placeholder-color": "#ccc",

      // "@background-color-light": "#f8f8f8",

      // "@border-color-base": "#f0f0f0",
      // "@border-color-split": "#f0f0f0",

      // "@item-active-bg": "#f8f8f8",
      // "@item-hover-bg": "#f8f8f8",

      // "@card-head-padding": "14px",
      // "@card-padding-base": "16px",

      // "@table-row-hover-bg": "#f8f8f8"
    }
  })
);
