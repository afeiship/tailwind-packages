/**
 * @usage:
 * Transforms.setNodes(editor, { type:'blockquote' })
 */

import React from 'react';
import { jsx } from 'slate-hyperscript';
import NxSlatePlugin from '@jswork/next-slate-plugin';

export default NxSlatePlugin.define({
  id: 'blockquote',
  serialize: {
    input: ({ el, style }, children) => {
      const nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'blockquote') {
        return jsx('element', { type: 'blockquote', style }, children);
      }
    },
    output: ({ style }, children) => {
      return `<blockquote${style}>${children}</blockquote>`;
    }
  },
  render: (_, { attributes, children, element }) => {
    return <blockquote {...attributes}>{children}</blockquote>;
  }
});
