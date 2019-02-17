export default {
  renderNode(inProps, inEditor, inNext) {
    const { children, ...attributes } = inProps;
    switch (inProps.node.type) {
      case 'quote':
        return <blockquote {...attributes}>{children}</blockquote>;
      default:
        return inNext();
    }
  }
};
