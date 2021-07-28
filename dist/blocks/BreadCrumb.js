"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var BreadCrumb = _ref => {
  var {
    crumbs = [],
    className
  } = _ref;
  var spanClasses = ['fontStyle-xl hover:text-brand-300 dark:hover:text-brand-300'];
  return /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: "text-gray-900 dark:text-gray-50  ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap"
  }, crumbs.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: spanClasses.join(' '),
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.url
    }, item.name)), crumbs.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;