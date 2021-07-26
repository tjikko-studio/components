"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["styles", "crumblist"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BreadCrumb = _ref => {
  var {
    styles = "responsive",
    crumblist = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("nav", _extends({}, props, {
    "aria-label": "Breadcrumb",
    className: "\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap"
  }, crumblist.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "fontStyle-xl\n                                        ".concat(styles == 'fixed' && "", "\n                                        ").concat(styles == 'responsive' && "hover:text-brand-300"),
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: styles == 'responsive' ? item.url : null
    }, item.name)), crumblist.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZENydW1iLnRzeCJdLCJuYW1lcyI6WyJCcmVhZENydW1iIiwic3R5bGVzIiwiY3J1bWJsaXN0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJuYW1lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUErQixHQUFHLFFBSXpDO0FBQUEsTUFKMEM7QUFDNUNDLElBQUFBLE1BQU0sR0FBQyxZQURxQztBQUU1Q0MsSUFBQUEsU0FBUyxHQUFHO0FBRmdDLEdBSTFDO0FBQUEsTUFEQ0MsS0FDRDs7QUFFRixzQkFDSSxpREFDUUEsS0FEUjtBQUVJLGtCQUFXLFlBRmY7QUFHSSxJQUFBLFNBQVMsOEJBQ0hBLEtBQUssQ0FBQ0MsU0FBTixHQUFnQkQsS0FBSyxDQUFDQyxTQUF0QixHQUFnQyxFQUQ3QjtBQUhiLG1CQU9JO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUVRRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDM0Isd0JBQ0k7QUFDSSxNQUFBLEdBQUcsRUFBRUE7QUFEVCxvQkFHSTtBQUNJLE1BQUEsU0FBUyxrRUFDRk4sTUFBTSxJQUFFLE9BQVQsSUFBcUIsRUFEbEIsdURBRURBLE1BQU0sSUFBRSxZQUFULElBQTBCLHNCQUZ4QixDQURiO0FBSUksTUFBQSxHQUFHLEVBQUVNO0FBSlQsb0JBTUk7QUFDSSxNQUFBLElBQUksRUFBS04sTUFBTSxJQUFFLFlBQVQsR0FBeUJLLElBQUksQ0FBQ0UsR0FBOUIsR0FBb0M7QUFEaEQsT0FJUUYsSUFBSSxDQUFDRyxJQUpiLENBTkosQ0FISixFQWtCU1AsU0FBUyxDQUFDUSxNQUFWLEdBQW1CLENBQW5CLEdBQXVCSCxLQUF4QixpQkFBa0M7QUFBTSxNQUFBLFNBQVMsRUFBQztBQUFoQixXQWxCMUMsQ0FESjtBQXlCSCxHQTFCRCxDQUZSLENBUEosQ0FESjtBQXlDSCxDQS9DTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIGZpeGVkOiBubyBsaW5rLCBubyBjbGlja1xuICAgICAqIHJlc3BvbnNpdmU6IGxpbmssIGNsaWNrYWJsZSBhbmQgaG92ZXJcbiAgICAgKi9cbiAgICBzdHlsZXM/OiBcImZpeGVkXCIgfCBcInJlc3BvbnNpdmVcIlxuICAgIC8qKlxuICAgICAqIGJyZWFkY3J1bWIgZGF0YSBsaXN0XG4gICAgICovXG4gICAgY3J1bWJsaXN0OiBBcnJheTxCcmVhZENydW1iVHlwZT5cblxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCcmVhZENydW1iOiBGQzxCcmVhZENydW1iUHJvcHM+ID0gKHtcbiAgICBzdHlsZXM9XCJyZXNwb25zaXZlXCIsXG4gICAgY3J1bWJsaXN0ID0gW10sXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJCcmVhZGNydW1iXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTonJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY3J1bWJsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udFN0eWxlLXhsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsoc3R5bGVzPT0nZml4ZWQnKSAmJiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IChzdHlsZXM9PSdyZXNwb25zaXZlJykgJiYgXCJob3Zlcjp0ZXh0LWJyYW5kLTMwMFwifWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyAoKHN0eWxlcz09J3Jlc3BvbnNpdmUnKSA/IGl0ZW0udXJsIDogbnVsbCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVtYmxpc3QubGVuZ3RoIC0gMSA+IGluZGV4KSAmJiA8c3BhbiBjbGFzc05hbWU9J3B4LTIuNSc+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIl19