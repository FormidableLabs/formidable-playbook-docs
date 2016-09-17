// The order should mirror the README TOC
module.exports = [
  {
    label: "Having a Single Infrastructure",
    route: "/docs/infrastructure/single",
    file: require("!!raw!../node_modules/formidable-playbook/docs/infrastructure/single.md")
  },
  {
    label: "Webpack Code Splitting",
    route: "/docs/frontend/webpack-code-splitting",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-code-splitting.md")
  },
  {
    label: "Webpack Plugins",
    route: "/docs/frontend/webpack-plugins",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-plugins.md")
  },
  {
    label: "Webpack Shared Libraries",
    route: "/docs/frontend/webpack-shared-libs",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-shared-libs.md")
  },
  {
    label: "Webpack Source Maps",
    route: "/docs/frontend/webpack-source-maps",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-source-maps.md")
  },
  {
    label: "Webpack Tree Shaking",
    route: "/docs/frontend/webpack-tree-shaking",
    file: require("!!raw!../node_modules/formidable-playbook/docs/frontend/webpack-tree-shaking.md")
  }
];
