"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUpNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["caption", "type", "href", "isActive"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var PopUpNavItem = _ref => {
  var {
    caption = "Link",
    type = "default",
    href = "#",
    isActive = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "flex items-center\n                ".concat(type != "default" && "uppercase", "\n                ").concat(type == "special" && "px-3 py-2.5 text-gray-100 tracking-wider font-semibold text-sm ", "\n                    ").concat(type == "special" && !isActive && "hover:text-brand-300 dark:text-gray-100 dark:hover:text-brand-300", "\n                    ").concat(type == "special" && isActive && "text-brand-300 dark:text-brand-300", "\n                ").concat(type == "default" && "px-3 py-2.5 text-sm  ", "\n                    ").concat(type == "default" && !isActive && "text-gray-800  hover:text-brand-600 dark:text-gray-100 dark:hover:text-brand-300", "\n                    ").concat(type == "default" && isActive && "text-brand-600 dark:text-brand-300", "\n                ").concat(type == "header" && "px-3 py-2.5 font-semibold tracking-wider text-gray-800 text-sm dark:text-gray-100", "\n                ").concat(type == "button" && "px-3 py-3.5 tracking-wider text-xs font-semibold ", "\n                    ").concat(type == "button" && !isActive && "text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-100", "\n                    ").concat(type == "button" && isActive && "text-brand-700 dark:text-brand-100", "\n            "),
    style: {
      width: 'fit-content'
    }
  }), /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, caption), props.children ? props.children : "");
};

exports.PopUpNavItem = PopUpNavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1BvcFVwTmF2SXRlbS50c3giXSwibmFtZXMiOlsiUG9wVXBOYXZJdGVtIiwiY2FwdGlvbiIsInR5cGUiLCJocmVmIiwiaXNBY3RpdmUiLCJwcm9wcyIsIndpZHRoIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQW1DLEdBQUcsUUFNN0M7QUFBQSxNQU44QztBQUNsREMsSUFBQUEsT0FBTyxHQUFHLE1BRHdDO0FBRWxEQyxJQUFBQSxJQUFJLEdBQUcsU0FGMkM7QUFHbERDLElBQUFBLElBQUksR0FBRyxHQUgyQztBQUlsREMsSUFBQUEsUUFBUSxHQUFHO0FBSnVDLEdBTTlDO0FBQUEsTUFEREMsS0FDQzs7QUFFSixzQkFDRSxpREFDTUEsS0FETjtBQUVFLElBQUEsU0FBUywrQ0FDSUgsSUFBSSxJQUFJLFNBQVQsSUFBdUIsV0FEMUIsK0JBRUlBLElBQUksSUFBSSxTQUFULElBQXVCLGlFQUYxQixtQ0FHU0EsSUFBSSxJQUFJLFNBQVQsSUFBd0IsQ0FBQ0UsUUFBekIsSUFBc0MsbUVBSDlDLG1DQUlTRixJQUFJLElBQUksU0FBVCxJQUF3QkUsUUFBeEIsSUFBcUMsb0NBSjdDLCtCQUtJRixJQUFJLElBQUksU0FBVCxJQUF1Qix1QkFMMUIsbUNBTVNBLElBQUksSUFBSSxTQUFULElBQXdCLENBQUNFLFFBQXpCLElBQXNDLGtGQU45QyxtQ0FPU0YsSUFBSSxJQUFJLFNBQVQsSUFBd0JFLFFBQXhCLElBQXFDLG9DQVA3QywrQkFRSUYsSUFBSSxJQUFJLFFBQVQsSUFBc0IsbUZBUnpCLCtCQVNJQSxJQUFJLElBQUksUUFBVCxJQUFzQixtREFUekIsbUNBVVNBLElBQUksSUFBSSxRQUFULElBQXVCLENBQUNFLFFBQXhCLElBQXFDLG1GQVY3QyxtQ0FXU0YsSUFBSSxJQUFJLFFBQVQsSUFBdUJFLFFBQXZCLElBQW9DLG9DQVg1QyxtQkFGWDtBQWVFLElBQUEsS0FBSyxFQUFFO0FBQUNFLE1BQUFBLEtBQUssRUFBRTtBQUFSO0FBZlQsbUJBaUJFO0FBQUcsSUFBQSxJQUFJLEVBQUVIO0FBQVQsS0FDR0YsT0FESCxDQWpCRixFQXFCSUksS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQXZCLEdBQWtDLEVBckJ0QyxDQURGO0FBMEJELENBbENNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBQb3BVcE5hdkl0ZW1Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG5cbiAgLyoqXG4gICAqIHBvcCB1cCB0eXBlXG4gICAqL1xuICB0eXBlOiBcImRlZmF1bHRcIiB8IFwiaGVhZGVyXCIgfCBcImJ1dHRvblwiIHwgXCJzcGVjaWFsXCJcbiAgLyoqXG4gICAqIGZsYWcgdG8gY2hlY2sgcG9wIHVwIGl0ZW0gaXMgYWN0aXZlXG4gICAqL1xuICBpc0FjdGl2ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRleHQgdG8gc2hvd1xuICAgKi9cbiAgY2FwdGlvbjogc3RyaW5nXG4gIC8qKlxuICAgKiB1cmwgdG8gc2hvd1xuICAgKi9cbiAgaHJlZj86IHN0cmluZ1xuICAvKipcbiAgICogY2hpbGQgbm9kZVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcblxuXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFBvcFVwTmF2SXRlbTogRkM8UG9wVXBOYXZJdGVtUHJvcHM+ID0gKHtcbiAgY2FwdGlvbiA9IFwiTGlua1wiLFxuICB0eXBlID0gXCJkZWZhdWx0XCIsXG4gIGhyZWYgPSBcIiNcIixcbiAgaXNBY3RpdmUgPSBmYWxzZSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgJHsodHlwZSAhPSBcImRlZmF1bHRcIikgJiYgXCJ1cHBlcmNhc2VcIn1cbiAgICAgICAgICAgICAgICAkeyh0eXBlID09IFwic3BlY2lhbFwiKSAmJiBcInB4LTMgcHktMi41IHRleHQtZ3JheS0xMDAgdHJhY2tpbmctd2lkZXIgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIFwifVxuICAgICAgICAgICAgICAgICAgICAkeygodHlwZSA9PSBcInNwZWNpYWxcIikgJiYgKCFpc0FjdGl2ZSkgJiYgXCJob3Zlcjp0ZXh0LWJyYW5kLTMwMCBkYXJrOnRleHQtZ3JheS0xMDAgZGFyazpob3Zlcjp0ZXh0LWJyYW5kLTMwMFwiKX1cbiAgICAgICAgICAgICAgICAgICAgJHsoKHR5cGUgPT0gXCJzcGVjaWFsXCIpICYmIChpc0FjdGl2ZSkgJiYgXCJ0ZXh0LWJyYW5kLTMwMCBkYXJrOnRleHQtYnJhbmQtMzAwXCIpfVxuICAgICAgICAgICAgICAgICR7KHR5cGUgPT0gXCJkZWZhdWx0XCIpICYmIFwicHgtMyBweS0yLjUgdGV4dC1zbSAgXCJ9XG4gICAgICAgICAgICAgICAgICAgICR7KCh0eXBlID09IFwiZGVmYXVsdFwiKSAmJiAoIWlzQWN0aXZlKSAmJiBcInRleHQtZ3JheS04MDAgIGhvdmVyOnRleHQtYnJhbmQtNjAwIGRhcms6dGV4dC1ncmF5LTEwMCBkYXJrOmhvdmVyOnRleHQtYnJhbmQtMzAwXCIpfVxuICAgICAgICAgICAgICAgICAgICAkeygodHlwZSA9PSBcImRlZmF1bHRcIikgJiYgKGlzQWN0aXZlKSAmJiBcInRleHQtYnJhbmQtNjAwIGRhcms6dGV4dC1icmFuZC0zMDBcIil9XG4gICAgICAgICAgICAgICAgJHsodHlwZSA9PSBcImhlYWRlclwiKSAmJiBcInB4LTMgcHktMi41IGZvbnQtc2VtaWJvbGQgdHJhY2tpbmctd2lkZXIgdGV4dC1ncmF5LTgwMCB0ZXh0LXNtIGRhcms6dGV4dC1ncmF5LTEwMFwifVxuICAgICAgICAgICAgICAgICR7KHR5cGUgPT0gXCJidXR0b25cIikgJiYgXCJweC0zIHB5LTMuNSB0cmFja2luZy13aWRlciB0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgXCJ9XG4gICAgICAgICAgICAgICAgICAgICR7KCh0eXBlID09IFwiYnV0dG9uXCIpICYmICghaXNBY3RpdmUpICYmIFwidGV4dC1icmFuZC02MDAgaG92ZXI6dGV4dC1icmFuZC03MDAgZGFyazp0ZXh0LWJyYW5kLTMwMCBkYXJrOmhvdmVyOnRleHQtYnJhbmQtMTAwXCIpfVxuICAgICAgICAgICAgICAgICAgICAkeygodHlwZSA9PSBcImJ1dHRvblwiKSAmJiAoaXNBY3RpdmUpICYmIFwidGV4dC1icmFuZC03MDAgZGFyazp0ZXh0LWJyYW5kLTEwMFwiKX1cbiAgICAgICAgICAgIGB9XG4gICAgICBzdHlsZT17e3dpZHRoOiAnZml0LWNvbnRlbnQnfX1cbiAgICA+XG4gICAgICA8YSBocmVmPXtocmVmfT5cbiAgICAgICAge2NhcHRpb259XG4gICAgICA8L2E+XG4gICAgICB7XG4gICAgICAgIHByb3BzLmNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4gOiBcIlwiXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==