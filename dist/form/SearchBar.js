"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Search = require("../svg/Search");

var _focusClasses = _interopRequireDefault(require("../../utilities/focusClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SearchBar = props => {
  var [autoFocus, setInputFocus] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-72 flex rounded-lg items-center overflow-hidden\n                ".concat(!props.isDisabled && "hover:border-gray-300 dark:border-gray-400", " dark:bg-gray-800 dark:text-white text-base h-12 max-h-12 py-3 px-4 rounded-lg border border-gray-200 ").concat(props.isDisabled && "dark:border-gray-500", "\n                ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', props.isFocussed)),
    defaultValue: props.text
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: props.isDisabled
  }, /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
    color: "text-gray-600"
  })), /*#__PURE__*/_react.default.createElement("input", {
    disabled: props.isDisabled,
    className: "border-none ml-3.5 focus:outline-none dark:bg-gray-800 bg-white dark:text-white",
    defaultValue: props.text,
    placeholder: props.placeHolder,
    onFocus: () => setInputFocus(true),
    onBlur: () => setInputFocus(false)
  }));
};

exports.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsInByb3BzIiwiYXV0b0ZvY3VzIiwic2V0SW5wdXRGb2N1cyIsImlzRGlzYWJsZWQiLCJpc0ZvY3Vzc2VkIiwidGV4dCIsInBsYWNlSG9sZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUlDLEtBQUQsSUFBVztBQUNwRCxNQUFNLENBQUNDLFNBQUQsRUFBWUMsYUFBWixJQUE2QixxQkFBUyxLQUFULENBQW5DO0FBQ0Esc0JBQ0k7QUFDSSxJQUFBLFNBQVMsK0VBQ0YsQ0FBQ0YsS0FBSyxDQUFDRyxVQUFQLElBQXFCLDRDQURuQixtSEFDeUtILEtBQUssQ0FBQ0csVUFBTixJQUFvQixzQkFEN0wsK0JBRUgsMkJBQWEsdURBQWIsRUFBc0VILEtBQUssQ0FBQ0ksVUFBNUUsQ0FGRyxDQURiO0FBSUksSUFBQSxZQUFZLEVBQUVKLEtBQUssQ0FBQ0s7QUFKeEIsa0JBTUk7QUFDSSxJQUFBLFFBQVEsRUFBRUwsS0FBSyxDQUFDRztBQURwQixrQkFHSSw2QkFBQyxrQkFBRDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBSEosQ0FOSixlQVdJO0FBQ0ksSUFBQSxRQUFRLEVBQUVILEtBQUssQ0FBQ0csVUFEcEI7QUFFSSxJQUFBLFNBQVMsRUFBQyxpRkFGZDtBQUdJLElBQUEsWUFBWSxFQUFFSCxLQUFLLENBQUNLLElBSHhCO0FBSUksSUFBQSxXQUFXLEVBQUVMLEtBQUssQ0FBQ00sV0FKdkI7QUFLSSxJQUFBLE9BQU8sRUFBRSxNQUFNSixhQUFhLENBQUMsSUFBRCxDQUxoQztBQU1JLElBQUEsTUFBTSxFQUFFLE1BQU1BLGFBQWEsQ0FBQyxLQUFEO0FBTi9CLElBWEosQ0FESjtBQXVCSCxDQXpCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSBcIi4uL3N2Zy9TZWFyY2hcIlxuaW1wb3J0IGZvY3VzQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZvY3VzQ2xhc3Nlc1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoQmFyUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIGZvY3Vzc2VkIHR5cGVcbiAgICAgKi9cbiAgICBpc0ZvY3Vzc2VkPzogYm9vbGVhblxuICAgIC8qKlxuICAgICAqIGZpbGxlZCB0ZXh0XG4gICAgICovXG4gICAgdGV4dD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIHBsYWNlIGhvbGRlciBzdHJpbmdcbiAgICAgKi9cbiAgICBwbGFjZUhvbGRlcj86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIGRpc2FibGVkXG4gICAgICovXG4gICAgaXNEaXNhYmxlZD86IGJvb2xlYW5cblxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hCYXI6IEZDPFNlYXJjaEJhclByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFthdXRvRm9jdXMsIHNldElucHV0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNzIgZmxleCByb3VuZGVkLWxnIGl0ZW1zLWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cbiAgICAgICAgICAgICAgICAkeyAhcHJvcHMuaXNEaXNhYmxlZCAmJiBcImhvdmVyOmJvcmRlci1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTQwMFwiIH0gZGFyazpiZy1ncmF5LTgwMCBkYXJrOnRleHQtd2hpdGUgdGV4dC1iYXNlIGgtMTIgbWF4LWgtMTIgcHktMyBweC00IHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCAke3Byb3BzLmlzRGlzYWJsZWQgJiYgXCJkYXJrOmJvcmRlci1ncmF5LTUwMFwifVxuICAgICAgICAgICAgICAgICR7Zm9jdXNDbGFzc2VzKCdvdXRsaW5lLW5vbmUgcmluZy0yIHJpbmctYnJhbmQtNTAwIGJvcmRlci10cmFuc3BhcmVudCcsIHByb3BzLmlzRm9jdXNzZWQpfWAgfVxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy50ZXh0fVxuICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmlzRGlzYWJsZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFNlYXJjaEljb24gY29sb3I9XCJ0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3Byb3BzLmlzRGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3JkZXItbm9uZSBtbC0zLjUgZm9jdXM6b3V0bGluZS1ub25lIGRhcms6YmctZ3JheS04MDAgYmctd2hpdGUgZGFyazp0ZXh0LXdoaXRlJ1xuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cHJvcHMudGV4dH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2VIb2xkZXJ9XG4gICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0SW5wdXRGb2N1cyh0cnVlKSB9XG4gICAgICAgICAgICAgICAgb25CbHVyPXsoKSA9PiBzZXRJbnB1dEZvY3VzKGZhbHNlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuIl19