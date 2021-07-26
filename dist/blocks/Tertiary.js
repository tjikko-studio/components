"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tertiary = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Tertiary = _ref => {
  var {
    type = 'vertical',
    mirror = false,
    imageUrl,
    head,
    text,
    className = ''
  } = _ref;

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type === 'vertical' ? 'pb-6' : ''
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: imageUrl,
      className: "rounded-lg".concat(type === 'default' ? ' w-auto' : '')
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'flex justify-center' : ''
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'pl-12' : ''
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-2xl"
    }, head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, text)));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(type === 'default' ? 'flex' : '').concat(mirror ? ' flex-row-reverse' : '', " ").concat(className)
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Tertiary = Tertiary;