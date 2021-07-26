"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _outline = require("@heroicons/react/outline");

var _react2 = require("@headlessui/react");

var _company_logo_placeholder = _interopRequireDefault(require("../../assets/images/company_logo_placeholder.svg"));

var _NavItem = require("./NavItem");

var _MobileMenu = require("./MobileMenu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SiteNav = _ref => {
  var {
    demoButtonText = "Free Demo",
    demoUrl = "#",
    menuData = [],
    styles = "black",
    languageList = {},
    className
  } = _ref;
  var [mobileExpand, setMobileExpand] = (0, _react.useState)(false);
  var large = (0, _reactMediaHook.useMediaPredicate)("(min-width: 1024px)");
  var medium = (0, _reactMediaHook.useMediaPredicate)("(max-width: 1023px)");
  var mobile = (0, _reactMediaHook.useMediaPredicate)("(max-width: 640px)");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900 flex items-center justify-between md:justify-Start h-16 lg:h-24 px-6 lg:px-10 ".concat(styles === "transWhite" && "bg-opacity-10", " ").concat(className)
  }, /*#__PURE__*/_react.default.createElement(_company_logo_placeholder.default, {
    width: "",
    height: "",
    className: "h-3 lg:h-4 text-gray-50 w-auto"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:flex m-auto items-center lg:space-x-6"
  }, menuData.map((menuitem, index) => {
    return /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
      key: index,
      link: menuitem.captionLink ? menuitem.captionLink : "",
      styles: "default/white",
      caption: menuitem.caption,
      submenu: menuitem.submenu,
      className: "mr-9"
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demoButtonText), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "space-x-2",
    styles: "default/white",
    caption: languageList.current ? languageList.current : "En",
    submenu: languageList.submenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lg:hidden"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
    className: "text-gray-300 w-5 h-5"
  }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
    className: "h-6 w-6 ".concat(styles === "black" && "text-gray-300", " ").concat(styles === "transWhite" && "text-gray-300")
  }))))), mobileExpand ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, {
    demoButtonText: demoButtonText,
    demoUrl: demoUrl,
    menuData: menuData,
    styles: styles,
    languageList: languageList
  }) : '');
};

exports.SiteNav = SiteNav;