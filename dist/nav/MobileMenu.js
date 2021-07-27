"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavItem = require("./NavItem");

var _Divider = require("./Divider");

var _Button = require("../Button");

var _ListNav = require("./ListNav");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var MobileMenu = _ref => {
  var {
    demoButtonText = 'Free Demo',
    demoUrl = '#',
    menuData = [],
    languageList = {},
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900 p-4"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between p-2"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "dark"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: demoButtonText,
    url: demoUrl,
    type: "primary"
  })), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    styles: "default/white",
    caption: languageList.current ? languageList.current : 'En',
    subMenu: languageList.subMenu
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dark"
  }, /*#__PURE__*/_react.default.createElement(_Divider.Divider, {
    className: "my-8"
  })), menuData.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "dark p-2",
      key: menuIndex
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "fontStyle-xl text-gray-50 mb-6"
    }, menu.subMenu == null ? /*#__PURE__*/_react.default.createElement("a", {
      href: menu.captionLink
    }, menu.caption) : menu.caption), /*#__PURE__*/_react.default.createElement("div", null, menu.subMenu === null ? null : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_ListNav.ListNav, {
      styles: "flat",
      linkList: menu.subMenu || []
    }))), menuData.length - 1 > menuIndex && /*#__PURE__*/_react.default.createElement(_Divider.Divider, {
      className: "my-8"
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-20"
  }));
};

exports.MobileMenu = MobileMenu;