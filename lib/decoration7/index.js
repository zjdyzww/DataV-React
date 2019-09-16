'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var __chunk_3 = require('../chunk-a9fd0787.js');
var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

var css = ".style_dv-decoration-7__ebGDg {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\n";
__chunk_3.styleInject(css);

var Decoration = function Decoration(_ref) {
  var children = _ref.children;

  return React__default.createElement(
    'div',
    { className: 'dv-decoration-7' },
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '10, 0 19, 10 10, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '2, 0 11, 10 2, 20'
      })
    ),
    children,
    React__default.createElement(
      'svg',
      { width: '21px', height: '20px' },
      React__default.createElement('polyline', {
        strokeWidth: '4',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '11, 0 2, 10 11, 20'
      }),
      React__default.createElement('polyline', {
        strokeWidth: '2',
        fill: 'transparent',
        stroke: '#1dc1f5',
        points: '19, 0 10, 10 19, 20'
      })
    )
  );
};

Decoration.propTypes = {
  children: PropTypes.node
};

module.exports = Decoration;
//# sourceMappingURL=index.js.map