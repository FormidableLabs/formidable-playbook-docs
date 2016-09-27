import links from "../links";

export default links.map(({label, route}) => {
  return {
    label,
    route,
    file: require(`!!raw!../node_modules/formidable-playbook${route}.md`)
  };
});
