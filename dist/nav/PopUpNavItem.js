"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUpNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var PopUpNavItem = _ref => {
  var {
    caption = 'Link',
    type = 'default',
    href = '#',
    isActive = false,
    children
  } = _ref;
  var classes = ['flex', 'items-center'];

  switch (type) {
    case 'special':
      classes.push('px-3', 'py-2.5', 'fontStyle-bold', 'text-gray-100');

      if (isActive) {
        classes.push('text-brand-300', 'dark:text-brand-300');
      } else {
        classes.push('hover:text-brand-300', 'dark:text-gray-100', 'dark:hover:text-brand-300');
      }

      break;

    case 'header':
      classes.push('uppercase', 'px-3', 'py-2.5', 'font-semibold', 'tracking-wider', 'text-gray-800', 'text-sm', 'dark:text-gray-100');
      break;

    case 'button':
      classes.push('px-3', 'py-3.5', 'tracking-wider', 'text-xs', 'font-semibold');

      if (isActive) {
        classes.push('text-brand-700', 'dark:text-brand-100');
      } else {
        classes.push('text-brand-600', 'hover:text-brand-700', 'dark:text-brand-300', 'dark:hover:text-brand-100');
      }

      break;

    case 'default':
    default:
      classes.push('px-3', 'py-2.5', 'text-sm');

      if (isActive) {
        classes.push('text-brand-600', 'dark:text-brand-300');
      } else {
        classes.push('text-gray-800', 'hover:text-brand-600', 'dark:text-gray-100', 'dark:hover:text-brand-300');
      }

      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.join(' '),
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, caption), children ? children : '');
};

exports.PopUpNavItem = PopUpNavItem;