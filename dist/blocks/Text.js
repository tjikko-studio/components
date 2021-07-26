"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Text = _ref => {
  var {
    headerText = '',
    paragraph = '',
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-6 ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-gray-100 text-lg tracking-wider uppercase font-semibold"
  }, headerText), /*#__PURE__*/_react.default.createElement("hr", {
    className: "border-brand-600 mt-4"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-100 text-base mt-8"
  }, paragraph));
};

exports.Text = Text;