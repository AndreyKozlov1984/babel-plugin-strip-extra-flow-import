module.exports = function ({ types: t }) {
  return {
    visitor: {
      ImportDeclaration (path) {
        const { node } = path;
        if (node.specifiers.every(importNode => importNode.importKind === 'type')) {
          path.remove();
        }
      },
    },
  };
};

