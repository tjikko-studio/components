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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcG9wdXBuYXZpdGVtL1BvcFVwTmF2SXRlbS50c3giXSwibmFtZXMiOlsiUG9wVXBOYXZJdGVtIiwiY2FwdGlvbiIsInR5cGUiLCJocmVmIiwiaXNBY3RpdmUiLCJwcm9wcyIsIndpZHRoIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQW1DLEdBQUcsUUFNN0M7QUFBQSxNQU44QztBQUNoREMsSUFBQUEsT0FBTyxHQUFDLE1BRHdDO0FBRWhEQyxJQUFBQSxJQUFJLEdBQUMsU0FGMkM7QUFHaERDLElBQUFBLElBQUksR0FBQyxHQUgyQztBQUloREMsSUFBQUEsUUFBUSxHQUFDO0FBSnVDLEdBTTlDO0FBQUEsTUFEQ0MsS0FDRDs7QUFFRixzQkFDSSxpREFDU0EsS0FEVDtBQUVJLElBQUEsU0FBUywrQ0FDRkgsSUFBSSxJQUFJLFNBQVQsSUFBdUIsV0FEcEIsK0JBRUZBLElBQUksSUFBSSxTQUFULElBQXVCLGlFQUZwQixtQ0FHR0EsSUFBSSxJQUFJLFNBQVQsSUFBd0IsQ0FBQ0UsUUFBekIsSUFBc0MsbUVBSHhDLG1DQUlHRixJQUFJLElBQUksU0FBVCxJQUF3QkUsUUFBeEIsSUFBcUMsb0NBSnZDLCtCQUtGRixJQUFJLElBQUksU0FBVCxJQUF1Qix1QkFMcEIsbUNBTUdBLElBQUksSUFBSSxTQUFULElBQXdCLENBQUNFLFFBQXpCLElBQXNDLGtGQU54QyxtQ0FPR0YsSUFBSSxJQUFJLFNBQVQsSUFBd0JFLFFBQXhCLElBQXFDLG9DQVB2QywrQkFRRkYsSUFBSSxJQUFJLFFBQVQsSUFBc0IsbUZBUm5CLCtCQVNGQSxJQUFJLElBQUksUUFBVCxJQUFzQixtREFUbkIsbUNBVUdBLElBQUksSUFBSSxRQUFULElBQXVCLENBQUNFLFFBQXhCLElBQXFDLG1GQVZ2QyxtQ0FXR0YsSUFBSSxJQUFJLFFBQVQsSUFBdUJFLFFBQXZCLElBQW9DLG9DQVh0QyxtQkFGYjtBQWVJLElBQUEsS0FBSyxFQUFFO0FBQUNFLE1BQUFBLEtBQUssRUFBRTtBQUFSO0FBZlgsbUJBaUJJO0FBQUcsSUFBQSxJQUFJLEVBQUVIO0FBQVQsS0FDTUYsT0FETixDQWpCSixFQXFCUUksS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQXZCLEdBQWtDLEVBckIxQyxDQURKO0FBMEJILENBbENNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VhcmNoSWNvbiB9IGZyb20gJy4uL3N2Zy9TZWFyY2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvcFVwTmF2SXRlbVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgICBcbiAgICAvKipcbiAgICAgKiBwb3AgdXAgdHlwZVxuICAgICAqL1xuICAgIHR5cGU6IFwiZGVmYXVsdFwiIHwgXCJoZWFkZXJcIiB8IFwiYnV0dG9uXCIgfCBcInNwZWNpYWxcIlxuICAgIC8qKlxuICAgICAqIGZsYWcgdG8gY2hlY2sgcG9wIHVwIGl0ZW0gaXMgYWN0aXZlXG4gICAgICovXG4gICAgaXNBY3RpdmU/OiBib29sZWFuXG4gICAgLyoqXG4gICAgICogdGV4dCB0byBzaG93XG4gICAgICovXG4gICAgY2FwdGlvbjogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdXJsIHRvIHNob3dcbiAgICAgKi9cbiAgICAgaHJlZj86IHN0cmluZ1xuICAgICAvKipcbiAgICAgICogY2hpbGQgbm9kZVxuICAgICAgKi9cbiAgICAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcblxuXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFBvcFVwTmF2SXRlbTogRkM8UG9wVXBOYXZJdGVtUHJvcHM+ID0gKHtcbiAgICBjYXB0aW9uPVwiTGlua1wiLFxuICAgIHR5cGU9XCJkZWZhdWx0XCIsXG4gICAgaHJlZj1cIiNcIixcbiAgICBpc0FjdGl2ZT1mYWxzZSxcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsgLi4ucHJvcHMgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBpdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICAkeyh0eXBlICE9IFwiZGVmYXVsdFwiKSAmJiBcInVwcGVyY2FzZVwifVxuICAgICAgICAgICAgICAgICR7KHR5cGUgPT0gXCJzcGVjaWFsXCIpICYmIFwicHgtMyBweS0yLjUgdGV4dC1ncmF5LTEwMCB0cmFja2luZy13aWRlciBmb250LXNlbWlib2xkIHRleHQtc20gXCJ9XG4gICAgICAgICAgICAgICAgICAgICR7KCh0eXBlID09IFwic3BlY2lhbFwiKSAmJiAoIWlzQWN0aXZlKSAmJiBcImhvdmVyOnRleHQtYnJhbmQtMzAwIGRhcms6dGV4dC1ncmF5LTEwMCBkYXJrOmhvdmVyOnRleHQtYnJhbmQtMzAwXCIpfVxuICAgICAgICAgICAgICAgICAgICAkeygodHlwZSA9PSBcInNwZWNpYWxcIikgJiYgKGlzQWN0aXZlKSAmJiBcInRleHQtYnJhbmQtMzAwIGRhcms6dGV4dC1icmFuZC0zMDBcIil9XG4gICAgICAgICAgICAgICAgJHsodHlwZSA9PSBcImRlZmF1bHRcIikgJiYgXCJweC0zIHB5LTIuNSB0ZXh0LXNtICBcIn1cbiAgICAgICAgICAgICAgICAgICAgJHsoKHR5cGUgPT0gXCJkZWZhdWx0XCIpICYmICghaXNBY3RpdmUpICYmIFwidGV4dC1ncmF5LTgwMCAgaG92ZXI6dGV4dC1icmFuZC02MDAgZGFyazp0ZXh0LWdyYXktMTAwIGRhcms6aG92ZXI6dGV4dC1icmFuZC0zMDBcIil9XG4gICAgICAgICAgICAgICAgICAgICR7KCh0eXBlID09IFwiZGVmYXVsdFwiKSAmJiAoaXNBY3RpdmUpICYmIFwidGV4dC1icmFuZC02MDAgZGFyazp0ZXh0LWJyYW5kLTMwMFwiKX1cbiAgICAgICAgICAgICAgICAkeyh0eXBlID09IFwiaGVhZGVyXCIpICYmIFwicHgtMyBweS0yLjUgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlciB0ZXh0LWdyYXktODAwIHRleHQtc20gZGFyazp0ZXh0LWdyYXktMTAwXCJ9XG4gICAgICAgICAgICAgICAgJHsodHlwZSA9PSBcImJ1dHRvblwiKSAmJiBcInB4LTMgcHktMy41IHRyYWNraW5nLXdpZGVyIHRleHQteHMgZm9udC1zZW1pYm9sZCBcIn1cbiAgICAgICAgICAgICAgICAgICAgJHsoKHR5cGUgPT0gXCJidXR0b25cIikgJiYgKCFpc0FjdGl2ZSkgJiYgXCJ0ZXh0LWJyYW5kLTYwMCBob3Zlcjp0ZXh0LWJyYW5kLTcwMCBkYXJrOnRleHQtYnJhbmQtMzAwIGRhcms6aG92ZXI6dGV4dC1icmFuZC0xMDBcIil9XG4gICAgICAgICAgICAgICAgICAgICR7KCh0eXBlID09IFwiYnV0dG9uXCIpICYmIChpc0FjdGl2ZSkgJiYgXCJ0ZXh0LWJyYW5kLTcwMCBkYXJrOnRleHQtYnJhbmQtMTAwXCIpfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6ICdmaXQtY29udGVudCd9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8YSBocmVmPXtocmVmfT5cbiAgICAgICAgICAgICAgICB7IGNhcHRpb24gfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuID8gcHJvcHMuY2hpbGRyZW4gOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ==