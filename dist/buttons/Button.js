"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _Search = require("../svg/Search");

var _excluded = ["type", "text", "icon", "size"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = _ref => {
  var {
    type = "primary",
    text = 'LABEL',
    icon = 'none',
    size = "default"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var cssClasses = "inline-flex items-center space-x-3 leading-0\n        ".concat(type == "primary" && !props.forceDark && "rounded-lg bg-brand-600 hover:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-200", "\n        ").concat(type == "primary" && props.forceDark && "rounded-lg bg-brand-400 hover:bg-brand-200", "\n        ").concat(type == "tertiary" && "bg-none", "\n        ").concat(size == "small" && "h-8 max-h-8 px-3.5 py-2.5", "\n        ").concat(size == "default" && "h-10 max-h-10 px-4 py-3.5", "\n        ").concat(size == "large" && "h-12 max-h-12 py-4 px-5", "\n    ");

  var Content = () => {
    return /*#__PURE__*/_react.default.createElement("div", null, icon != "none" && /*#__PURE__*/_react.default.createElement(_Search.SearchIcon, {
      color: "text-white",
      darkColor: "dark:text-black"
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: "font-semibold tracking-wide uppercase\n                        ".concat(type == "primary" && !props.forceDark && "text-white dark:text-brand-900", "\n                        ").concat(type == "primary" && props.forceDark && "text-brand-900", "\n                        ").concat(type == "tertiary" && !props.forceDark && "text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-200", "\n                        ").concat(type == "tertiary" && props.forceDark && "text-brand-400 hover:text-brand-200", "\n                        ").concat(size == "small" && "text-xxs", "\n                        ").concat(size == "default" && "text-xs", "\n                        ").concat(size == "large" && "text-sm", "\n                    ")
    }, text));
  };

  if (props.url) return /*#__PURE__*/_react.default.createElement("a", _extends({
    href: props.url,
    className: cssClasses
  }, props), /*#__PURE__*/_react.default.createElement(Content, null));
  if (!props.url) return /*#__PURE__*/_react.default.createElement("button", _extends({
    className: cssClasses
  }, props), /*#__PURE__*/_react.default.createElement(Content, null));
};

exports.Button = Button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucy9CdXR0b24udHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsInR5cGUiLCJ0ZXh0IiwiaWNvbiIsInNpemUiLCJwcm9wcyIsImNzc0NsYXNzZXMiLCJmb3JjZURhcmsiLCJDb250ZW50IiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQThCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUF1QixHQUFHLFFBTWpDO0FBQUEsTUFOa0M7QUFDcENDLElBQUFBLElBQUksR0FBRyxTQUQ2QjtBQUVwQ0MsSUFBQUEsSUFBSSxHQUFHLE9BRjZCO0FBR3BDQyxJQUFBQSxJQUFJLEdBQUcsTUFINkI7QUFJcENDLElBQUFBLElBQUksR0FBRztBQUo2QixHQU1sQztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsVUFBVSxtRUFDUkwsSUFBSSxJQUFJLFNBQVIsSUFBcUIsQ0FBQ0ksS0FBSyxDQUFDRSxTQUE3QixJQUE0QyxzRkFEbkMsdUJBRVJOLElBQUksSUFBSSxTQUFSLElBQXFCSSxLQUFLLENBQUNFLFNBQTVCLElBQTJDLDRDQUZsQyx1QkFHUk4sSUFBSSxJQUFJLFVBQVQsSUFBd0IsU0FIZix1QkFJUkcsSUFBSSxJQUFJLE9BQVQsSUFBcUIsMkJBSlosdUJBS1JBLElBQUksSUFBSSxTQUFULElBQXVCLDJCQUxkLHVCQU1SQSxJQUFJLElBQUksT0FBVCxJQUFxQix5QkFOWixXQUFoQjs7QUFRQSxNQUFNSSxPQUFPLEdBQUcsTUFBTTtBQUNsQix3QkFDSSwwQ0FFU0wsSUFBSSxJQUFJLE1BQVQsaUJBQ0EsNkJBQUMsa0JBQUQ7QUFDSSxNQUFBLEtBQUssRUFBQyxZQURWO0FBQ3VCLE1BQUEsU0FBUyxFQUFDO0FBRGpDLE1BSFIsZUFRSTtBQUNJLE1BQUEsU0FBUywyRUFDREYsSUFBSSxJQUFJLFNBQVIsSUFBcUIsQ0FBQ0ksS0FBSyxDQUFDRSxTQUE3QixJQUE0QyxnQ0FEMUMsdUNBRUROLElBQUksSUFBSSxTQUFSLElBQXFCSSxLQUFLLENBQUNFLFNBQTVCLElBQTJDLGdCQUZ6Qyx1Q0FHRE4sSUFBSSxJQUFJLFVBQVIsSUFBc0IsQ0FBQ0ksS0FBSyxDQUFDRSxTQUE5QixJQUE2QyxtRkFIM0MsdUNBSUROLElBQUksSUFBSSxVQUFSLElBQXNCSSxLQUFLLENBQUNFLFNBQTdCLElBQTRDLHFDQUoxQyx1Q0FLREgsSUFBSSxJQUFJLE9BQVQsSUFBcUIsVUFMbkIsdUNBTURBLElBQUksSUFBSSxTQUFULElBQXVCLFNBTnJCLHVDQU9EQSxJQUFJLElBQUksT0FBVCxJQUFxQixTQVBuQjtBQURiLE9BVUdGLElBVkgsQ0FSSixDQURKO0FBc0JILEdBdkJEOztBQXdCQSxNQUFJRyxLQUFLLENBQUNJLEdBQVYsRUFDSSxvQkFDSTtBQUNJLElBQUEsSUFBSSxFQUFFSixLQUFLLENBQUNJLEdBRGhCO0FBRUksSUFBQSxTQUFTLEVBQUVIO0FBRmYsS0FHUUQsS0FIUixnQkFLQSw2QkFBQyxPQUFELE9BTEEsQ0FESjtBQVVKLE1BQUksQ0FBQ0EsS0FBSyxDQUFDSSxHQUFYLEVBQ0ksb0JBQ0k7QUFDSSxJQUFBLFNBQVMsRUFBRUg7QUFEZixLQUVRRCxLQUZSLGdCQUlBLDZCQUFDLE9BQUQsT0FKQSxDQURKO0FBU1AsQ0E1RE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWFyY2hJY29uIH0gZnJvbSAnLi4vc3ZnL1NlYXJjaCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIHRleHQgdG8gZGlzcGxheSBvbiBidXR0b25cbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogYnV0dG9uIGxpbmtcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBmb3JjZSBkYXJrIG1vZGVcbiAgICAgKi9cbiAgICBmb3JjZURhcms/OiBib29sZWFuXG4gICAgLyoqXG4gICAgICogYnV0dG9uIHR5cGVcbiAgICAgKi9cbiAgICB0eXBlOiBcInByaW1hcnlcIiB8IFwic2Vjb25kYXJ5XCIgfCBcInRlcnRpYXJ5XCJcbiAgICAvKipcbiAgICAgKiBpY29uIHBvc2l0aW9uXG4gICAgICogb25seTogc2hvdyBvbmx5IGljb24gd2l0aCByb3VuZGVkIGJ1dHRvblxuICAgICAqL1xuICAgIGljb246IFwicmlnaHRcIiB8IFwibGVmdFwiIHwgXCJvbmx5XCIgfCBcIm5vbmVcIlxuICAgIC8qKlxuICAgICAqIGljb24gc2l6ZVxuICAgICAqL1xuICAgIHNpemU6IFwic21hbGxcIiB8IFwiZGVmYXVsdFwiIHwgXCJsYXJnZVwiXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEJ1dHRvbjogRkM8QnV0dG9uUHJvcHM+ID0gKHtcbiAgICB0eXBlID0gXCJwcmltYXJ5XCIsXG4gICAgdGV4dCA9ICdMQUJFTCcsXG4gICAgaWNvbiA9ICdub25lJyxcbiAgICBzaXplID0gXCJkZWZhdWx0XCIsXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCBjc3NDbGFzc2VzID0gYGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTMgbGVhZGluZy0wXG4gICAgICAgICR7ICh0eXBlID09IFwicHJpbWFyeVwiICYmICFwcm9wcy5mb3JjZURhcmsgKSAmJiBcInJvdW5kZWQtbGcgYmctYnJhbmQtNjAwIGhvdmVyOmJnLWJyYW5kLTcwMCBkYXJrOmJnLWJyYW5kLTQwMCBkYXJrOmhvdmVyOmJnLWJyYW5kLTIwMFwifVxuICAgICAgICAkeyAodHlwZSA9PSBcInByaW1hcnlcIiAmJiBwcm9wcy5mb3JjZURhcmsgKSAmJiBcInJvdW5kZWQtbGcgYmctYnJhbmQtNDAwIGhvdmVyOmJnLWJyYW5kLTIwMFwifVxuICAgICAgICAkeyAodHlwZSA9PSBcInRlcnRpYXJ5XCIpICYmIFwiYmctbm9uZVwiIH1cbiAgICAgICAgJHsgKHNpemUgPT0gXCJzbWFsbFwiKSAmJiBcImgtOCBtYXgtaC04IHB4LTMuNSBweS0yLjVcIn1cbiAgICAgICAgJHsgKHNpemUgPT0gXCJkZWZhdWx0XCIpICYmIFwiaC0xMCBtYXgtaC0xMCBweC00IHB5LTMuNVwifVxuICAgICAgICAkeyAoc2l6ZSA9PSBcImxhcmdlXCIpICYmIFwiaC0xMiBtYXgtaC0xMiBweS00IHB4LTVcIn1cbiAgICBgXG4gICAgY29uc3QgQ29udGVudCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAoaWNvbiAhPSBcIm5vbmVcIikgJiYgXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0LXdoaXRlXCIgZGFya0NvbG9yPVwiZGFyazp0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCB0cmFja2luZy13aWRlIHVwcGVyY2FzZVxuICAgICAgICAgICAgICAgICAgICAgICAgJHsgKHR5cGUgPT0gXCJwcmltYXJ5XCIgJiYgIXByb3BzLmZvcmNlRGFyayApICYmIFwidGV4dC13aGl0ZSBkYXJrOnRleHQtYnJhbmQtOTAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyAodHlwZSA9PSBcInByaW1hcnlcIiAmJiBwcm9wcy5mb3JjZURhcmsgKSAmJiBcInRleHQtYnJhbmQtOTAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyAodHlwZSA9PSBcInRlcnRpYXJ5XCIgJiYgIXByb3BzLmZvcmNlRGFyayApICYmIFwidGV4dC1icmFuZC02MDAgaG92ZXI6dGV4dC1icmFuZC03MDAgZGFyazp0ZXh0LWJyYW5kLTQwMCBkYXJrOmhvdmVyOnRleHQtYnJhbmQtMjAwXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyAodHlwZSA9PSBcInRlcnRpYXJ5XCIgJiYgcHJvcHMuZm9yY2VEYXJrICkgJiYgXCJ0ZXh0LWJyYW5kLTQwMCBob3Zlcjp0ZXh0LWJyYW5kLTIwMFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgJHsgKHNpemUgPT0gXCJzbWFsbFwiKSAmJiBcInRleHQteHhzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyAoc2l6ZSA9PSBcImRlZmF1bHRcIikgJiYgXCJ0ZXh0LXhzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyAoc2l6ZSA9PSBcImxhcmdlXCIpICYmIFwidGV4dC1zbVwifVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgID57IHRleHQgfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIGlmIChwcm9wcy51cmwpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy51cmx9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc2VzfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250ZW50IC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIClcbiAgICBcbiAgICBpZiAoIXByb3BzLnVybClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NDbGFzc2VzfVxuICAgICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxDb250ZW50IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKVxuICAgIFxufVxuIl19