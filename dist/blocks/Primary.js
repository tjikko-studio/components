"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Primary = _ref => {
  var {
    type = 'vertical',
    mirror = false,
    imageUrl = '',
    head,
    text,
    cta_name,
    cta_url
  } = _ref;

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'flex items-center justify-center' : ''
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'pl-12' : ''
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-4"
    }, text), cta_name && cta_url && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: cta_name,
      url: cta_url,
      type: "primary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-900 dark:text-gray-50 ".concat(type === 'default' ? 'flex' : '', " ").concat(mirror ? 'flex-row-reverse' : '')
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, imageUrl && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(type === 'vertical' ? 'pb-8' : 'px-12 py-6')
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    className: "rounded-lg".concat(type === 'default' ? ' w-auto' : '')
  })), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Primary = Primary;