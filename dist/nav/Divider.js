"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Divider = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Divider = _ref => {
  var {
    className = '',
    dark = false,
    direction = "horizontal"
  } = _ref;
  var dividerClasses = ['border-0 border-gray-300 dark:border-gray-600'];

  switch (direction) {
    case 'horizontal':
      dividerClasses.push('border-t w-full h-px my-4 inline-table');
      break;

    case 'vertical':
      dividerClasses.push('border-l w-px h-full mx-4 inline-block');
      break;
  }

  dark && dividerClasses.push('border-gray-600');
  className && dividerClasses.push(className);
  return /*#__PURE__*/_react.default.createElement("hr", {
    className: dividerClasses.join(' ')
  });
};

exports.Divider = Divider;