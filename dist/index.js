'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'blockquote',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el,
          style = _ref.style;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'blockquote') {
        return (0, _slateHyperscript.jsx)('element', { type: 'blockquote', style: style }, children);
      }
    },
    output: function output(_ref2, children) {
      var style = _ref2.style;

      return '<blockquote' + style + '>' + children + '</blockquote>';
    }
  },
  render: function render(_, _ref3) {
    var attributes = _ref3.attributes,
        children = _ref3.children,
        element = _ref3.element;

    return _react2.default.createElement(
      'blockquote',
      attributes,
      children
    );
  }
}); /**
     * @usage:
     * Transforms.setNodes(editor, { type:'blockquote' })
     */