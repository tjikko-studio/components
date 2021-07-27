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
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("hr", {
    className: "border-0 border-t my-2 border-gray-300 dark:border-gray-600 ".concat(className)
  });
};

exports.Divider = Divider;