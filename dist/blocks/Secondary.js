"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Secondary = _ref => {
  var {
    type = 'vertical',
    imageUrl,
    head,
    text,
    cta_name,
    cta_url,
    mirror = 'false',
    className
  } = _ref;

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type === 'vertical' && 'pb-6', "\n        ")
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: imageUrl,
      className: "rounded-lg\n            ".concat(type === 'default' && 'w-auto', "\n          ")
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type != 'vertical' && 'flex justify-center', "\n        ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n              ".concat(type != 'vertical' && 'pl-12', "\n          ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, text), cta_name && cta_url && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: cta_name,
      url: cta_url,
      type: "tertiary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "\n        ".concat(type === 'default' && 'flex', "\n        ").concat(mirror && 'flex-row-reverse', "\n        ").concat(className ? className : '', "\n      ")
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Secondary = Secondary;