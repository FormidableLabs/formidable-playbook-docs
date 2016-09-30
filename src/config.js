import links from "../links";

// Dynamically import all `docs/**/*.md` files.
const mdRequire = require.context("!!raw!formidable-playbook", true, /docs\/.*\.md$/);

export default links.map(({label, route}) => ({
  label,
  route,
  file: mdRequire(`.${route}.md`)
}));
