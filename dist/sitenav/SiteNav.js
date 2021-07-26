"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _outline = require("@heroicons/react/outline");

var _react2 = require("@headlessui/react");

var _Logo = require("../svg/Logo");

var _NavItem = require("../navitem/NavItem");

var _MobileMenu = require("./MobileMenu");

var _excluded = ["demobuttontext", "demourl", "menudata", "styles"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SiteNav = _ref => {
  var {
    demobuttontext = "Free Demo",
    demourl = "#",
    menudata = [],
    styles = "black"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var [mobileExpand, setMobileExpand] = (0, _react.useState)(false);
  var large = (0, _reactMediaHook.useMediaPredicate)("(min-width: 1024px)");
  var medium = (0, _reactMediaHook.useMediaPredicate)("(max-width: 1023px)");
  var mobile = (0, _reactMediaHook.useMediaPredicate)("(max-width: 640px)");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "bg-gray-900 flex items-center justify-between md:justify-Start\n                ".concat(styles == "transWhite" && "bg-opacity-10", "\n                ").concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xl"
  }, "Hello"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-7 lg:pt-10 lg:pb-9 lg:pl-10 sm:pl-6 pl-6 md:py-8 sm:pt-6 sm:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    width: large ? "269" : medium ? "215" : mobile ? "161" : "269",
    height: large ? "20" : medium ? "16" : mobile ? "12" : "20"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex m-auto items-center"
  }, menudata.map((menuitem, index) => {
    return /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
      key: index,
      link: menuitem.captionlink ? menuitem.captionlink : "",
      styles: "default/white",
      caption: menuitem.caption,
      submenu: menuitem.submenu,
      className: "mr-9"
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demourl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demobuttontext), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "pl-6 lg:mr-11 sm:mr-9",
    styles: "default/white",
    caption: props.languagelist.current ? props.languagelist.current : "En",
    submenu: props.languagelist.submenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "md:hidden mr-4"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
    className: "text-gray-300 w-5 h-5"
  }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
    className: "h-5 w-5\n                                    ".concat(styles == "black" && "text-gray-300", "\n                                    ").concat(styles == "transWhite" && "text-gray-300", "\n                                ")
  }))))), mobileExpand ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, _extends({
    styles: styles,
    menudata: menudata
  }, props)) : "");
};

exports.SiteNav = SiteNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2l0ZW5hdi9TaXRlTmF2LnRzeCJdLCJuYW1lcyI6WyJTaXRlTmF2IiwiZGVtb2J1dHRvbnRleHQiLCJkZW1vdXJsIiwibWVudWRhdGEiLCJzdHlsZXMiLCJwcm9wcyIsIm1vYmlsZUV4cGFuZCIsInNldE1vYmlsZUV4cGFuZCIsImxhcmdlIiwibWVkaXVtIiwibW9iaWxlIiwiY2xhc3NOYW1lIiwibWFwIiwibWVudWl0ZW0iLCJpbmRleCIsImNhcHRpb25saW5rIiwiY2FwdGlvbiIsInN1Ym1lbnUiLCJsYW5ndWFnZWxpc3QiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBb0NBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQXlCLEdBQUcsUUFNbkM7QUFBQSxNQU5vQztBQUN0Q0MsSUFBQUEsY0FBYyxHQUFDLFdBRHVCO0FBRXRDQyxJQUFBQSxPQUFPLEdBQUMsR0FGOEI7QUFHdENDLElBQUFBLFFBQVEsR0FBQyxFQUg2QjtBQUl0Q0MsSUFBQUEsTUFBTSxHQUFDO0FBSitCLEdBTXBDO0FBQUEsTUFEQ0MsS0FDRDs7QUFDRixNQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQyxxQkFBUyxLQUFULENBQXhDO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLHVDQUFrQixxQkFBbEIsQ0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyx1Q0FBa0IscUJBQWxCLENBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsdUNBQWtCLG9CQUFsQixDQUFmO0FBQ0Esc0JBQ0kseUVBQ0EsaURBQ1FMLEtBRFI7QUFFSSxJQUFBLFNBQVMsNEZBQ0ZELE1BQU0sSUFBRSxZQUFULElBQTBCLGVBRHZCLCtCQUVIQyxLQUFLLENBQUNNLFNBQU4sR0FBa0JOLEtBQUssQ0FBQ00sU0FBeEIsR0FBb0MsRUFGakM7QUFGYixtQkFPQTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsYUFQQSxlQVFJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxrQkFHSSw2QkFBQyxVQUFEO0FBQ0ksSUFBQSxLQUFLLEVBQUVILEtBQUssR0FBQyxLQUFELEdBQU9DLE1BQU0sR0FBQyxLQUFELEdBQU9DLE1BQU0sR0FBQyxLQUFELEdBQU8sS0FEakQ7QUFFSSxJQUFBLE1BQU0sRUFBRUYsS0FBSyxHQUFDLElBQUQsR0FBTUMsTUFBTSxHQUFDLElBQUQsR0FBTUMsTUFBTSxHQUFDLElBQUQsR0FBTTtBQUYvQyxJQUhKLENBUkosZUFnQkk7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLEtBSUlQLFFBQVEsQ0FBQ1MsR0FBVCxDQUFhLENBQUNDLFFBQUQsRUFBV0MsS0FBWCxLQUFxQjtBQUM5Qix3QkFDSSw2QkFBQyxnQkFBRDtBQUNJLE1BQUEsR0FBRyxFQUFFQSxLQURUO0FBRUksTUFBQSxJQUFJLEVBQUVELFFBQVEsQ0FBQ0UsV0FBVCxHQUFxQkYsUUFBUSxDQUFDRSxXQUE5QixHQUEwQyxFQUZwRDtBQUdJLE1BQUEsTUFBTSxFQUFDLGVBSFg7QUFJSSxNQUFBLE9BQU8sRUFBRUYsUUFBUSxDQUFDRyxPQUp0QjtBQUtJLE1BQUEsT0FBTyxFQUFFSCxRQUFRLENBQUNJLE9BTHRCO0FBTUksTUFBQSxTQUFTLEVBQUM7QUFOZCxNQURKO0FBVUgsR0FYRCxDQUpKLENBaEJKLGVBa0NJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxrQkFHSTtBQUNJLElBQUEsSUFBSSxFQUFFZixPQURWO0FBRUksSUFBQSxTQUFTLEVBQUM7QUFGZCxLQUlLRCxjQUpMLENBSEosZUFTSSw2QkFBQyxnQkFBRDtBQUNJLElBQUEsU0FBUyxFQUFDLHVCQURkO0FBRUksSUFBQSxNQUFNLEVBQUMsZUFGWDtBQUdJLElBQUEsT0FBTyxFQUFFSSxLQUFLLENBQUNhLFlBQU4sQ0FBbUJDLE9BQW5CLEdBQTZCZCxLQUFLLENBQUNhLFlBQU4sQ0FBbUJDLE9BQWhELEdBQTBELElBSHZFO0FBSUksSUFBQSxPQUFPLEVBQUVkLEtBQUssQ0FBQ2EsWUFBTixDQUFtQkQ7QUFKaEMsSUFUSixDQWxDSixlQWtESSw2QkFBQyxrQkFBRDtBQUFZLElBQUEsRUFBRSxFQUFDLEtBQWY7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLGtCQUdJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUNJLElBQUEsU0FBUyxFQUFDLHdEQURkO0FBRUksSUFBQSxPQUFPLEVBQUUsTUFBSVYsZUFBZSxDQUFDLENBQUNELFlBQUY7QUFGaEMsa0JBSUk7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixzQkFKSixFQUtNQSxZQUFZLGdCQUNWLDZCQUFDLGNBQUQ7QUFDSSxJQUFBLFNBQVM7QUFEYixJQURVLGdCQUtWLDZCQUFDLGlCQUFEO0FBQ0ksSUFBQSxTQUFTLHlEQUNIRixNQUFNLElBQUUsT0FBUixJQUFtQixlQURoQixtREFFSEEsTUFBTSxJQUFFLFlBQVIsSUFBd0IsZUFGckI7QUFEYixJQVZSLENBREosQ0FISixDQWxESixDQURBLEVBNEVFRSxZQUFZLGdCQUFHLDZCQUFDLHNCQUFEO0FBQVksSUFBQSxNQUFNLEVBQUVGLE1BQXBCO0FBQTRCLElBQUEsUUFBUSxFQUFFRDtBQUF0QyxLQUFvREUsS0FBcEQsRUFBSCxHQUErRSxFQTVFN0YsQ0FESjtBQWdGSCxDQTNGTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VNZWRpYVByZWRpY2F0ZSB9IGZyb20gXCJyZWFjdC1tZWRpYS1ob29rXCI7XG5pbXBvcnQgeyBNZW51SWNvbiwgWEljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQgeyBEaXNjbG9zdXJlLCBNZW51LCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyBMb2dvIH0gZnJvbSAnLi4vc3ZnL0xvZ28nXG5pbXBvcnQgeyBOYXZJdGVtIH0gZnJvbSAnLi4vbmF2aXRlbS9OYXZJdGVtJ1xuaW1wb3J0IHsgTW9iaWxlTWVudSB9IGZyb20gJy4vTW9iaWxlTWVudSc7XG5pbXBvcnQgeyBNZW51VHlwZSB9IGZyb20gJy4uL2xpc3RuYXYvTGlzdE5hdic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VUeXBlIHtcbiAgICBjdXJyZW50Pzogc3RyaW5nIHwgbnVsbFxuICAgIHN1Ym1lbnU/OiBBcnJheTxNZW51VHlwZT5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTWVudUl0ZW1UeXBlIHtcbiAgICBjYXB0aW9uOiBzdHJpbmdcbiAgICBjYXB0aW9ubGluaz86IHN0cmluZ1xuICAgIHN1Ym1lbnU/OiBBcnJheTxNZW51VHlwZT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaXRlTmF2UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIG1lbnUganNvbiBkYXRhIHNhbWUgYXMgTmF2SXRlbVxuICAgICAqL1xuICAgIG1lbnVkYXRhOiBBcnJheTxNZW51SXRlbVR5cGU+XG4gICAgLyoqXG4gICAgICogZGVtbyBidXR0b24gdGV4dFxuICAgICAqL1xuICAgIGRlbW9idXR0b250ZXh0Pzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdXJsIHRvIGdvIHdoZW4gY2xpY2sgZGVtbyBidXR0b25cbiAgICAgKi9cbiAgICBkZW1vdXJsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogbGFuZ3VhZ2UgbGlzdFxuICAgICAqL1xuICAgIGxhbmd1YWdlbGlzdD86IExhbmd1YWdlVHlwZVxuICAgIC8qKlxuICAgICAqIG5hdiBiYWNrZ3JvdW5kIGNvbG9yIHN0eWxlXG4gICAgICovXG4gICAgc3R5bGVzOiBcImJsYWNrXCIgfCBcInRyYW5zV2hpdGVcIlxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBTaXRlTmF2OiBGQzxTaXRlTmF2UHJvcHM+ID0gKHtcbiAgICBkZW1vYnV0dG9udGV4dD1cIkZyZWUgRGVtb1wiLFxuICAgIGRlbW91cmw9XCIjXCIsXG4gICAgbWVudWRhdGE9W10sXG4gICAgc3R5bGVzPVwiYmxhY2tcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIGNvbnN0IFttb2JpbGVFeHBhbmQsIHNldE1vYmlsZUV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgbGFyZ2UgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtaW4td2lkdGg6IDEwMjRweClcIilcbiAgICBjb25zdCBtZWRpdW0gPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtYXgtd2lkdGg6IDEwMjNweClcIilcbiAgICBjb25zdCBtb2JpbGUgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtYXgtd2lkdGg6IDY0MHB4KVwiKVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGJnLWdyYXktOTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtZDpqdXN0aWZ5LVN0YXJ0XG4gICAgICAgICAgICAgICAgJHsoc3R5bGVzPT1cInRyYW5zV2hpdGVcIikgJiYgXCJiZy1vcGFjaXR5LTEwXCJ9XG4gICAgICAgICAgICAgICAgJHtwcm9wcy5jbGFzc05hbWUgPyBwcm9wcy5jbGFzc05hbWUgOiAnJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhsXCI+SGVsbG88L3A+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwdC02IHBiLTcgbGc6cHQtMTAgbGc6cGItOSBsZzpwbC0xMCBzbTpwbC02IHBsLTYgbWQ6cHktOCBzbTpwdC02IHNtOnBiLTcnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExvZ28gXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXtsYXJnZT9cIjI2OVwiOm1lZGl1bT9cIjIxNVwiOm1vYmlsZT9cIjE2MVwiOlwiMjY5XCJ9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17bGFyZ2U/XCIyMFwiOm1lZGl1bT9cIjE2XCI6bW9iaWxlP1wiMTJcIjpcIjIwXCJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IG0tYXV0byBpdGVtcy1jZW50ZXInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbWVudWRhdGEubWFwKChtZW51aXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz17bWVudWl0ZW0uY2FwdGlvbmxpbms/bWVudWl0ZW0uY2FwdGlvbmxpbms6XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM9XCJkZWZhdWx0L3doaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXttZW51aXRlbS5jYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1lbnU9e21lbnVpdGVtLnN1Ym1lbnV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci05J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17ZGVtb3VybH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMy41IHB4LTMuNSB1cHBlcmNhc2UgYmctYnJhbmQtNDAwIHJvdW5kZWQtbGcgdHJhY2tpbmctd2lkZXIgbGVhZGluZy0zIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7ZGVtb2J1dHRvbnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxOYXZJdGVtIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3BsLTYgbGc6bXItMTEgc206bXItOSdcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzPVwiZGVmYXVsdC93aGl0ZVwiIFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uPXtwcm9wcy5sYW5ndWFnZWxpc3QuY3VycmVudCA/IHByb3BzLmxhbmd1YWdlbGlzdC5jdXJyZW50IDogXCJFblwiIH0gXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1lbnU9e3Byb3BzLmxhbmd1YWdlbGlzdC5zdWJtZW51fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEaXNjbG9zdXJlIGFzPVwibmF2XCIgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctdHJhbnNwYXJlbnRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIG1yLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+c2V0TW9iaWxlRXhwYW5kKCFtb2JpbGVFeHBhbmQpfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+T3BlbiBtYWluIG1lbnU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IG1vYmlsZUV4cGFuZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WEljb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS0zMDAgdy01IGgtNWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUljb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNSB3LTVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzPT1cImJsYWNrXCIgJiYgXCJ0ZXh0LWdyYXktMzAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke3N0eWxlcz09XCJ0cmFuc1doaXRlXCIgJiYgXCJ0ZXh0LWdyYXktMzAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Rpc2Nsb3N1cmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7IG1vYmlsZUV4cGFuZCA/IDxNb2JpbGVNZW51IHN0eWxlcz17c3R5bGVzfSBtZW51ZGF0YT17bWVudWRhdGF9IHsuLi5wcm9wc30gPjwvTW9iaWxlTWVudT4gOiBcIlwifVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXX0=