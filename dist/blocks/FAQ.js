"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQ = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var FAQ = _ref => {
  var {
    question,
    answer = '',
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-900 dark:text-gray-50 ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "font-semibold text-lg leading-7"
  }, question), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-2 text-base leading-6"
  }, answer));
};

exports.FAQ = FAQ;