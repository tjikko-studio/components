"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Button = _ref => {
  var {
    type = 'primary',
    text = 'LABEL',
    icon = 'none',
    size = 'default',
    url = '',
    forceDark = false
  } = _ref;
  var buttonClasses = ['inline-flex', 'items-center', 'space-x-3', 'leading-0'];
  var contentClasses = ['font-semibold', 'tracking-wide', 'uppercase'];

  switch (type) {
    case 'primary':
      buttonClasses.push('rounded-lg');

      if (forceDark) {
        buttonClasses.push('bg-brand-400', 'hover:bg-brand-200');
        contentClasses.push('text-brand-900');
      } else {
        buttonClasses.push('bg-brand-600', 'hover:bg-brand-700', 'dark:bg-brand-400', 'dark:hover:bg-brand-200');
        contentClasses.push('text-white', 'dark:text-brand-900');
      }

      break;

    case 'tertiary':
      buttonClasses.push('bg-none');

      if (forceDark) {
        contentClasses.push('text-brand-400', 'hover:text-brand-200');
      } else {
        contentClasses.push('text-brand-600', 'hover:text-brand-700', 'dark:text-brand-400', 'dark:hover:text-brand-200');
      }

      break;
  }

  switch (size) {
    case 'small':
      buttonClasses.push('h-8', 'max-h-8', 'px-3.5', 'py-2.5');
      contentClasses.push('text-xxs');
      break;

    case 'large':
      buttonClasses.push('h-12', 'max-h-12', 'py-4', 'px-5');
      contentClasses.push('text-sm');
      break;

    case 'default':
    default:
      buttonClasses.push('h-10', 'max-h-10', 'px-4', 'py-3.5');
      contentClasses.push('text-xs');
  }

  var buttonClassesJoined = buttonClasses.join(' ');

  var Content = () => {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: contentClasses.join(' ')
    }, text);
  };

  if (url) return /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    className: buttonClassesJoined
  }, /*#__PURE__*/_react.default.createElement(Content, null));
  if (!url) return /*#__PURE__*/_react.default.createElement("button", {
    className: buttonClassesJoined
  }, /*#__PURE__*/_react.default.createElement(Content, null));
};

exports.Button = Button;