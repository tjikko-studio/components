"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavItem = require("./NavItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var MobileMenu = _ref => {
  var {
    demoButtonText = 'Free Demo',
    demoUrl = '#',
    menuData = [],
    styles = 'black',
    languageList = {}
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900 ".concat(styles === 'transWhite' && 'bg-opacity-10')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between p-5 p-6"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demoButtonText)), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "mr-7",
    styles: "default/white",
    caption: languageList.current ? languageList.current : 'En',
    submenu: languageList.submenu
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
  }), menuData.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: menuIndex
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "font-borda uppercase text-gray-50 text-lg tracking-widest pl-6 pt-6 "
    }, menu.submenu == null ? /*#__PURE__*/_react.default.createElement("a", {
      href: menu.captionLink
    }, menu.caption) : menu.caption), /*#__PURE__*/_react.default.createElement("div", null, menu.submenu === null ? null : /*#__PURE__*/_react.default.createElement("div", {
      className: "grid grid-cols-2"
    }, menu.submenu.map((group, groupIndex) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: groupIndex
      }, group.groupCaption && /*#__PURE__*/_react.default.createElement("div", {
        className: "text-gray-100 font-semibold tracking-wider text-sm pl-6 pt-5"
      }, group.groupCaption), group.groups.map((item, itemIndex) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "px-6 pt-5 text-gray-100",
          key: itemIndex
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: item.type === 'button' ? 'text-brand-300 hover:text-brand-600' : '',
          href: item.url
        }, item.name));
      }));
    }))), menuData.length - 1 > menuIndex && /*#__PURE__*/_react.default.createElement("hr", {
      className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-20"
  }));
};

exports.MobileMenu = MobileMenu;