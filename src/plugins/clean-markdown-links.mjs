const repositoryFiles = new Set(['../../DESIGN.md', '../../REPOSITORY.md']);

function transformUrl(url) {
  if (repositoryFiles.has(url) || !url.match(/\.md(?:#.*)?$/)) return url;

  const [path, fragment] = url.split('#', 2);
  const cleanPath = path.endsWith('/index.md')
    ? `${path.slice(0, -'index.md'.length)}`
    : path === 'index.md'
      ? './'
      : `${path.slice(0, -'.md'.length)}/`;

  return fragment ? `${cleanPath}#${fragment}` : cleanPath;
}

export default {
  name: 'clean-markdown-links',
  link(node, context) {
    context.setProperty(node, 'url', transformUrl(node.url));
  },
};
