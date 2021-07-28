"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuote = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var BlockQuote = _ref => {
  var {
    speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    avatarUrl = '',
    avatarAlt = '',
    customerName = 'Maria Lopez, VP of Design at Meshery'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col space-y-6 text-gray-900 dark:text-gray-50"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-lg text-center text-brand-900 dark:text-brand-50"
  }, "\u201C", speech, "\u201D"), /*#__PURE__*/_react.default.createElement("img", {
    className: "w-20 h-20 mx-auto rounded-full",
    src: avatarUrl,
    alt: avatarAlt
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs text-center uppercase"
  }, customerName));
};

exports.BlockQuote = BlockQuote;