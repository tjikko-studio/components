"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Icon = _ref => {
  var {
    type = "horizontal",
    heading = "Heading",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    imageUrl
  } = _ref;
  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-900 dark:text-gray-50 ".concat(type === 'horizontal' ? 'flex' : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'horizontal' ? 'px-6 pb-14' : 'py-2'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    className: "w-14 h-14"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'horizontal' ? 'ml-6' : 'mt-6',
    style: {
      width: type === "horizontal" ? "310px" : "290px"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-2xl"
  }, heading && heading === "" ? heading : "Heading"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-base pt-2"
  }, text && text === "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua")));
};

exports.Icon = Icon;