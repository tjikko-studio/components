"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Search = require("../svg/Search");

var _focusClasses = _interopRequireDefault(require("../../utilities/focusClasses"));

var _addDisabledClasses = _interopRequireDefault(require("../../snippets/addDisabledClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SearchBar = _ref => {
  var {
    isDisabled,
    isFocussed,
    text,
    placeHolder
  } = _ref;
  var [autoFocus, setInputFocus] = (0, _react.useState)(false);
  var classes = ['w-72', 'flex', 'rounded-lg', 'items-center', 'overflow-hidden', 'dark:bg-gray-800', 'dark:text-white', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200'];
  (0, _addDisabledClasses.default)(isDisabled, classes);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(classes.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
    color: "text-gray-600"
  })), /*#__PURE__*/_react.default.createElement("input", {
    disabled: isDisabled,
    className: "border-none ml-3.5 focus:outline-none dark:bg-gray-800 bg-white dark:text-white",
    defaultValue: text,
    placeholder: placeHolder,
    onFocus: () => setInputFocus(true),
    onBlur: () => setInputFocus(false)
  }));
};

exports.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsImlzRGlzYWJsZWQiLCJpc0ZvY3Vzc2VkIiwidGV4dCIsInBsYWNlSG9sZGVyIiwiYXV0b0ZvY3VzIiwic2V0SW5wdXRGb2N1cyIsImNsYXNzZXMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUcsUUFLdkM7QUFBQSxNQUx3QztBQUM1Q0MsSUFBQUEsVUFENEM7QUFFNUNDLElBQUFBLFVBRjRDO0FBRzVDQyxJQUFBQSxJQUg0QztBQUk1Q0MsSUFBQUE7QUFKNEMsR0FLeEM7QUFDSixNQUFNLENBQUNDLFNBQUQsRUFBWUMsYUFBWixJQUE2QixxQkFBUyxLQUFULENBQW5DO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsWUFBakIsRUFBK0IsY0FBL0IsRUFBK0MsaUJBQS9DLEVBQWtFLGtCQUFsRSxFQUFzRixpQkFBdEYsRUFBeUcsV0FBekcsRUFBc0gsTUFBdEgsRUFBOEgsVUFBOUgsRUFBMEksTUFBMUksRUFBa0osTUFBbEosRUFBMEosWUFBMUosRUFBd0ssUUFBeEssRUFBa0wsaUJBQWxMLENBQWhCO0FBQ0EsbUNBQW1CTixVQUFuQixFQUErQk0sT0FBL0I7QUFDQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxZQUFLQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxHQUFiLENBQUwsY0FBMEIsMkJBQWEsdURBQWIsRUFBc0VOLFVBQXRFLENBQTFCLENBRFg7QUFFRSxJQUFBLFlBQVksRUFBRUM7QUFGaEIsa0JBSUU7QUFDRSxJQUFBLFFBQVEsRUFBRUY7QUFEWixrQkFHRSw2QkFBQyxrQkFBRDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBSEYsQ0FKRixlQVNFO0FBQ0UsSUFBQSxRQUFRLEVBQUVBLFVBRFo7QUFFRSxJQUFBLFNBQVMsRUFBQyxpRkFGWjtBQUdFLElBQUEsWUFBWSxFQUFFRSxJQUhoQjtBQUlFLElBQUEsV0FBVyxFQUFFQyxXQUpmO0FBS0UsSUFBQSxPQUFPLEVBQUUsTUFBTUUsYUFBYSxDQUFDLElBQUQsQ0FMOUI7QUFNRSxJQUFBLE1BQU0sRUFBRSxNQUFNQSxhQUFhLENBQUMsS0FBRDtBQU43QixJQVRGLENBREY7QUFxQkQsQ0E5Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7U2VhcmNoSWNvbn0gZnJvbSBcIi4uL3N2Zy9TZWFyY2hcIlxuaW1wb3J0IGZvY3VzQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZvY3VzQ2xhc3Nlc1wiXG5pbXBvcnQgYWRkRGlzYWJsZWRDbGFzc2VzIGZyb20gXCIuLi8uLi9zbmlwcGV0cy9hZGREaXNhYmxlZENsYXNzZXNcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEJhclByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIGZvY3Vzc2VkIHR5cGVcbiAgICovXG4gIGlzRm9jdXNzZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgKiBmaWxsZWQgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogcGxhY2UgaG9sZGVyIHN0cmluZ1xuICAgKi9cbiAgcGxhY2VIb2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGRpc2FibGVkXG4gICAqL1xuICBpc0Rpc2FibGVkPzogYm9vbGVhblxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBTZWFyY2hCYXI6IEZDPFNlYXJjaEJhclByb3BzPiA9ICh7XG4gIGlzRGlzYWJsZWQsXG4gIGlzRm9jdXNzZWQsXG4gIHRleHQsXG4gIHBsYWNlSG9sZGVyXG59KSA9PiB7XG4gIGNvbnN0IFthdXRvRm9jdXMsIHNldElucHV0Rm9jdXNdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGNsYXNzZXMgPSBbJ3ctNzInLCAnZmxleCcsICdyb3VuZGVkLWxnJywgJ2l0ZW1zLWNlbnRlcicsICdvdmVyZmxvdy1oaWRkZW4nLCAnZGFyazpiZy1ncmF5LTgwMCcsICdkYXJrOnRleHQtd2hpdGUnLCAndGV4dC1iYXNlJywgJ2gtMTInLCAnbWF4LWgtMTInLCAncHktMycsICdweC00JywgJ3JvdW5kZWQtbGcnLCAnYm9yZGVyJywgJ2JvcmRlci1ncmF5LTIwMCddXG4gIGFkZERpc2FibGVkQ2xhc3Nlcyhpc0Rpc2FibGVkLCBjbGFzc2VzKVxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5qb2luKCcgJyl9ICR7Zm9jdXNDbGFzc2VzKCdvdXRsaW5lLW5vbmUgcmluZy0yIHJpbmctYnJhbmQtNTAwIGJvcmRlci10cmFuc3BhcmVudCcsIGlzRm9jdXNzZWQpfWB9XG4gICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgID5cbiAgICAgICAgPFNlYXJjaEljb24gY29sb3I9XCJ0ZXh0LWdyYXktNjAwXCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGlucHV0XG4gICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9J2JvcmRlci1ub25lIG1sLTMuNSBmb2N1czpvdXRsaW5lLW5vbmUgZGFyazpiZy1ncmF5LTgwMCBiZy13aGl0ZSBkYXJrOnRleHQtd2hpdGUnXG4gICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlSG9sZGVyfVxuICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJbnB1dEZvY3VzKHRydWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IHNldElucHV0Rm9jdXMoZmFsc2UpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cblxuICApXG59XG4iXX0=