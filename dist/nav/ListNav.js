"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _PopUpNavItem = require("./PopUpNavItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var ListNav = _ref => {
  var {
    styles = "elevated",
    linkList = []
  } = _ref;
  linkList = linkList === null || linkList === undefined ? [] : linkList;
  var classes = ['rounded-lg', 'bg-gray-50', 'dark:bg-transparent', 'px-3', 'py-2.5', 'w-max'];

  if (styles === 'elevated') {
    classes.push('shadow-lg');
  }

  if (linkList.length > 1) {
    switch (styles) {
      case 'elevated':
        classes.push('flex');
        break;

      case 'flat':
        classes.push('grid', 'grid-cols-2');

      default:
        break;
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.join(' '),
    style: {
      width: 'fit-content'
    }
  }, linkList.map((menu, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "m-1.5 w-max",
      key: index
    }, linkList.length > 1 && /*#__PURE__*/_react.default.createElement("div", {
      className: "font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800"
    }, menu.groupCaption), menu.groups.map((menuItem, subIndex) => {
      return /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
        caption: menuItem.name,
        type: menuItem.type ? menuItem.type : "default",
        key: subIndex,
        className: "px-3 py-2.5",
        href: menuItem.url
      });
    }));
  }));
};

exports.ListNav = ListNav;