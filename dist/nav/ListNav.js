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
    styles = 'elevated',
    linkList = [],
    className
  } = _ref;
  linkList = linkList === null || linkList === undefined ? [] : linkList;
  var classes = [className];
  var wMax = '';

  switch (styles) {
    case 'elevated':
      classes.push('flex', 'w-max', 'space-x-6', 'px-6', 'py-2.5', 'shadow-lg', 'rounded-lg', 'bg-gray-50', 'dark:bg-gray-800', 'text-gray-900', 'dark:text-gray-50');
      wMax = 'w-max';
      break;

    case 'flat':
      classes.push('grid', 'sm:grid-cols-2', 'justify-items-stretch', 'gap-6');
      wMax = '';

    default:
      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.join(' ')
  }, linkList.map((menu, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(wMax),
      key: index
    }, linkList.length > 1 && /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
      caption: menu.groupCaption,
      type: 'header',
      className: "py-2.5"
    }), menu.groups.map((menuItem, subIndex) => {
      return /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
        caption: menuItem.name,
        type: menuItem.type ? menuItem.type : 'default',
        key: subIndex,
        className: "py-2.5",
        href: menuItem.url
      });
    }));
  }));
};

exports.ListNav = ListNav;