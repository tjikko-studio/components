"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = require("./BreadCrumb");

var _Input = require("../form/Input");

var _Button = require("../Button");

var _logo_placeholder_square = _interopRequireDefault(require("../../assets/images/logo_placeholder_square.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Header = _ref => {
  var {
    breadcrumb = [],
    className,
    title,
    text,
    type,
    url,
    buttonText,
    formPlaceholder,
    caseText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " flex flex-col ".concat(className ? className : '')
  }, /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumbs: breadcrumb,
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl " // lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'

  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, type === "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, buttonText), type === "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: buttonText,
    forceDark: true,
    type: "primary",
    icon: "none",
    size: "large"
  })), type === "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center space-x-6"
  }, /*#__PURE__*/_react.default.createElement(_logo_placeholder_square.default, {
    width: "",
    height: "48",
    className: "w-auto"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: url
  }, caseText))));
};

exports.Header = Header;