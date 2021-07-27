"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _react2 = require("@headlessui/react");

var _company_logo_placeholder = _interopRequireDefault(require("../../assets/images/company_logo_placeholder.svg"));

var _menuLine = _interopRequireDefault(require("../../assets/icons/menu-line.svg"));

var _closeLine = _interopRequireDefault(require("../../assets/icons/close-line.svg"));

var _NavItem = require("./NavItem");

var _MobileMenu = require("./MobileMenu");

var _Button = require("../Button");

var _resolveConfig = _interopRequireDefault(require("tailwindcss/resolveConfig"));

var _tailwindConfig = _interopRequireDefault(require("../../tailwind.config.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var tailwind = (0, _resolveConfig.default)(_tailwindConfig.default);

/**
 * Primary UI component for user interaction
 */
var SiteNav = _ref => {
  var {
    demoButtonText = "Free Demo",
    demoUrl = "#",
    menuData = [],
    styles = "opaque",
    languageList = {},
    className,
    mobileExpandDefault = false
  } = _ref;
  var [mobileExpand, setMobileExpand] = (0, _react.useState)(mobileExpandDefault);
  var largeScreen = (0, _reactMediaHook.useMediaPredicate)("(max-width: ".concat(tailwind.theme.screens.lg, ")"));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center justify-between md:justify-Start h-16 lg:h-24 px-6 lg:px-10 ".concat(styles === "opaque" && "bg-gray-900", " ").concat(className)
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
      subMenu: menuitem.subMenu
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:flex items-center space-x-6"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: demoButtonText,
    url: demoUrl,
    type: "primary",
    icon: "none",
    size: "default",
    forceDark: true
  }), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    styles: "default/white",
    caption: languageList.current ? languageList.current : "En",
    subMenu: languageList.subMenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lg:hidden"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center text-gray-300 ",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_closeLine.default, {
    className: "tw-6 h-6"
  }) : /*#__PURE__*/_react.default.createElement(_menuLine.default, {
    className: "h-6 w-6"
  }))))), mobileExpand && largeScreen ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, {
    demoButtonText: demoButtonText,
    demoUrl: demoUrl,
    menuData: menuData,
    styles: styles,
    languageList: languageList
  }) : '');
};

exports.SiteNav = SiteNav;