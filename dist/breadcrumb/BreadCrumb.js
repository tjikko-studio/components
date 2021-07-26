"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["crumblist"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BreadCrumb = _ref => {
  var {
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
      className: "fontStyle-xl hover:text-brand-600 dark:hover:text-brand-300",
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.url ? item.url : null
    }, item.name)), crumblist.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9CcmVhZENydW1iLnRzeCJdLCJuYW1lcyI6WyJCcmVhZENydW1iIiwiY3J1bWJsaXN0IiwicHJvcHMiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ1cmwiLCJuYW1lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUErQixHQUFHLFFBR3pDO0FBQUEsTUFIMEM7QUFDNUNDLElBQUFBLFNBQVMsR0FBRztBQURnQyxHQUcxQztBQUFBLE1BRENDLEtBQ0Q7O0FBRUYsc0JBQ0ksaURBQ1FBLEtBRFI7QUFFSSxrQkFBVyxZQUZmO0FBR0ksSUFBQSxTQUFTLDhCQUNIQSxLQUFLLENBQUNDLFNBQU4sR0FBZ0JELEtBQUssQ0FBQ0MsU0FBdEIsR0FBZ0MsRUFEN0I7QUFIYixtQkFPSTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FFUUYsU0FBUyxDQUFDRyxHQUFWLENBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzNCLHdCQUNJO0FBQ0ksTUFBQSxHQUFHLEVBQUVBO0FBRFQsb0JBR0k7QUFDSSxNQUFBLFNBQVMsK0RBRGI7QUFFSSxNQUFBLEdBQUcsRUFBRUE7QUFGVCxvQkFJSTtBQUNJLE1BQUEsSUFBSSxFQUFJRCxJQUFJLENBQUNFLEdBQUwsR0FBV0YsSUFBSSxDQUFDRSxHQUFoQixHQUFzQjtBQURsQyxPQUlRRixJQUFJLENBQUNHLElBSmIsQ0FKSixDQUhKLEVBZ0JTUCxTQUFTLENBQUNRLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJILEtBQXhCLGlCQUFrQztBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLFdBaEIxQyxDQURKO0FBdUJILEdBeEJELENBRlIsQ0FQSixDQURKO0FBdUNILENBNUNNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkQ3J1bWJUeXBlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB1cmw6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkQ3J1bWJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogYnJlYWRjcnVtYiBkYXRhIGxpc3RcbiAgICAgKi9cbiAgICBjcnVtYmxpc3Q6IEFycmF5PEJyZWFkQ3J1bWJUeXBlPlxuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEJyZWFkQ3J1bWI6IEZDPEJyZWFkQ3J1bWJQcm9wcz4gPSAoe1xuICAgIGNydW1ibGlzdCA9IFtdLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bmF2XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZT9wcm9wcy5jbGFzc05hbWU6Jyd9XG4gICAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNydW1ibGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnRTdHlsZS14bCBob3Zlcjp0ZXh0LWJyYW5kLTYwMCBkYXJrOmhvdmVyOnRleHQtYnJhbmQtMzAwYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IChpdGVtLnVybCA/IGl0ZW0udXJsIDogbnVsbCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjcnVtYmxpc3QubGVuZ3RoIC0gMSA+IGluZGV4KSAmJiA8c3BhbiBjbGFzc05hbWU9J3B4LTIuNSc+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgKVxufVxuIl19