"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTA = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var CTA = _ref => {
  var {
    title = "",
    body = "",
    ctas = []
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full py-24 text-center bg-gray-900"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-4xl text-gray-50"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-lg text-gray-50 mt-4 leading-7 mb-7"
  }, body), /*#__PURE__*/_react.default.createElement("div", {
    className: "inline-flex space-x-4"
  }, ctas.map((cta, index) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
    key: cta.link,
    text: cta.label,
    url: cta.link,
    type: index === 0 ? 'primary' : 'tertiary',
    icon: "none",
    size: "large"
  }))));
};

exports.CTA = CTA;