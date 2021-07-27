"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var SideNavItem = _ref => {
  var {
    url = '#',
    type = 'linkHeader',
    text = 'Link Header',
    status = 'default',
    spacer = false
  } = _ref;
  var desktop = (0, _reactMediaHook.useMediaPredicate)('(min-width: 640px)');
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "list-none border-l-2 pr-3 ".concat(spacer ? 'py-1.5' : 'py-2.5', " ").concat(type === 'link' ? 'pl-7' : 'pl-5', " ").concat(status === 'default' ? 'border-gray-100' : 'border-brand-600 text-brand-700', " hover:border-brand-600 hover:text-brand-700 text-gray-600 cursor-pointer")
  }, spacer ? '' : /*#__PURE__*/_react.default.createElement("a", {
    href: url ? url : '#',
    className: "fontStyle-sm ".concat(type === 'header' ? 'font-semibold' : '')
  }, text));
};

exports.SideNavItem = SideNavItem;