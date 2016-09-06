// The order should mirror the README TOC
module.exports = [
  {
    label: "Having a Single Infrastructure",
    route: "/infrastructure/single",
    file: require("!!raw!../node_modules/formidable-playbook/docs/infrastructure/single.md")
  },
  {
    label: "Webpack Code Splitting",
    route: "/frontend/webpack-code-splitting",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-code-splitting.md")
  },
  {
    label: "Webpack Plugins",
    route: "/frontend/webpack-plugins",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-plugins.md")
  },
  {
    label: "Webpack Shared Libraries",
    route: "/frontend/webpack-shared-libs",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-shared-libs.md")
  },
  {
    label: "Webpack Source Maps",
    route: "/frontend/webpack-source-maps",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-source-maps.md")
  }
];
