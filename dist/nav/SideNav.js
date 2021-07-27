"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _SideNavItem = require("./SideNavItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Primary UI component for user interaction
 */
var SideNav = _ref => {
  var {
    items = [],
    className
  } = _ref;
  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "".concat(className ? className : "")
  }, items.map(item => /*#__PURE__*/_react.default.createElement(_SideNavItem.SideNavItem, _extends({
    key: "".concat(item.text, "_").concat(item.url)
  }, item))));
};

exports.SideNav = SideNav;