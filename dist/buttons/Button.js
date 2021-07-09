"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = require("../svg/Search");

var _excluded = ["type", "text", "icon", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = _ref => {
  var {
    type = "tertiary",
    text = 'LABEL',
    icon = 'none',
    size = "small"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "\n                ".concat(type == "primary" && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200", "\n                ").concat(type == "tertiary" && "bg-none", "\n                ").concat(size == "small" && "", "\n                ").concat(size == "default" && "", "\n                ").concat(size == "large" && "", "\n            ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, icon != "none" && /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
    color: "text-white",
    darkColor: "dark:text-black"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-semibold \n                        ".concat(type == "primary" && "text-white dark:text-brand-900", "\n                        ").concat(type == "tertiary" && "text-brand-600 hover:text-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200", "\n                        ").concat(size == "small" && "text-xs px-3.5 py-2.5", "\n                        ").concat(size == "default" && "text-sm  px-4 py-3.5", "\n                        ").concat(size == "large" && "text-base py-4 px-5", "\n                    ")
  }, text)));
};

exports.Button = Button;