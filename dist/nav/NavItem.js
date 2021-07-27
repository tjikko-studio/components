"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopUpNavItem = require("./PopUpNavItem");

var _arrowDownSLine = _interopRequireDefault(require("../../assets/icons/arrow-down-s-line.svg"));

var _ListNav = require("./ListNav");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var NavItem = _ref => {
  var {
    styles = 'default/white',
    caption = 'Label',
    link = undefined,
    subMenu = [],
    className
  } = _ref;
  var [mouseIn, setMouseIn] = (0, _react.useState)(false);
  var [mouseClick, setMouseClick] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-max relative ".concat(className ? className : ''),
    style: {
      width: 'fit-content'
    },
    onMouseEnter: () => {
      setMouseIn(true);
      setMouseClick(true);
    },
    onMouseLeave: () => setMouseIn(false)
  }, /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
    onClick: () => setMouseClick(!mouseClick),
    type: styles === "default/white" ? 'special' : 'default',
    caption: caption,
    href: link,
    className: "flex items-center ".concat(mouseIn && styles === 'default' ? 'text-brand-600' : '', " ").concat(mouseIn && styles === 'default/white' ? 'text-brand-300' : '', " ").concat(mouseIn && styles === 'flat' ? 'text-brand-100 dark:text-brand-300' : '')
  }, subMenu.length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2.5"
  }, /*#__PURE__*/_react.default.createElement(_arrowDownSLine.default, {
    width: "18",
    height: "18"
  }))), mouseIn && mouseClick && subMenu.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute left-0 top-full pt-1 w-max"
  }, /*#__PURE__*/_react.default.createElement(_ListNav.ListNav, {
    styles: styles == "flat" ? "flat" : "elevated",
    linkList: subMenu
  })));
};

exports.NavItem = NavItem;