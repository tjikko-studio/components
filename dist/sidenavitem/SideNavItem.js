"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _excluded = ["url", "type", "text", "status", "spacer", "children"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SideNavItem = _ref => {
  var {
    url = "#",
    type = "linkheader",
    text = "Link Header",
    status = "default",
    spacer = false,
    children = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("li", _extends({}, props, {
    className: "list-none border-l-2 pr-3 \n                ".concat(spacer ? "py-1.5" : "py-2.5", " \n                ").concat(type == "link" ? "pl-7" : "pl-5", "\n                ").concat(status == "default" ? "border-gray-100" : "border-brand-600 text-brand-700", "\n                hover:border-brand-600 hover:text-brand-700 text-gray-600 cursor-pointer\n            ")
  }), spacer ? "" : /*#__PURE__*/_react.default.createElement("a", {
    href: url ? url : "#",
    className: "fontStyle-sm\n                    ".concat(type == "header" ? "font-semibold" : "", "\n                ")
  }, text));
};

exports.SideNavItem = SideNavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2lkZW5hdml0ZW0vU2lkZU5hdkl0ZW0udHN4Il0sIm5hbWVzIjpbIlNpZGVOYXZJdGVtIiwidXJsIiwidHlwZSIsInRleHQiLCJzdGF0dXMiLCJzcGFjZXIiLCJjaGlsZHJlbiIsInByb3BzIiwiZGVza3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsV0FBaUMsR0FBRyxRQVEzQztBQUFBLE1BUjRDO0FBQzlDQyxJQUFBQSxHQUFHLEdBQUcsR0FEd0M7QUFFOUNDLElBQUFBLElBQUksR0FBRyxZQUZ1QztBQUc5Q0MsSUFBQUEsSUFBSSxHQUFHLGFBSHVDO0FBSTlDQyxJQUFBQSxNQUFNLEdBQUcsU0FKcUM7QUFLOUNDLElBQUFBLE1BQU0sR0FBRyxLQUxxQztBQU05Q0MsSUFBQUEsUUFBUSxnQkFBRztBQU5tQyxHQVE1QztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsT0FBTyxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBaEI7QUFFQSxzQkFFSSxnREFDUUQsS0FEUjtBQUVJLElBQUEsU0FBUyx3REFDRkYsTUFBTSxHQUFHLFFBQUgsR0FBYyxRQURsQixnQ0FFRkgsSUFBSSxJQUFJLE1BQVIsR0FBaUIsTUFBakIsR0FBMEIsTUFGeEIsK0JBR0ZFLE1BQU0sSUFBSSxTQUFWLEdBQXNCLGlCQUF0QixHQUEwQyxpQ0FIeEM7QUFGYixNQVNNQyxNQUFNLEdBQUcsRUFBSCxnQkFDUjtBQUNJLElBQUEsSUFBSSxFQUFFSixHQUFHLEdBQUdBLEdBQUgsR0FBUyxHQUR0QjtBQUVJLElBQUEsU0FBUyw4Q0FDRkMsSUFBSSxJQUFJLFFBQVIsR0FBbUIsZUFBbkIsR0FBcUMsRUFEbkM7QUFGYixLQUtHQyxJQUxILENBVkosQ0FGSjtBQW9CSCxDQS9CTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZU1lZGlhUHJlZGljYXRlIH0gZnJvbSBcInJlYWN0LW1lZGlhLWhvb2tcIjtcblxuZXhwb3J0IGludGVyZmFjZSBTaWRlTmF2SXRlbVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgIC8qKlxuICAgICogdHlwZSBvZiBTaWRlTmF2SXRlbSAoXCJsaW5raGVhZGVyXCIgfCBcImxpbmtcIiB8IFwiaGVhZGVyXCIpXG4gICAgKi9cbiAgICB0eXBlPzogXCJsaW5raGVhZGVyXCIgfCBcImxpbmtcIiB8IFwiaGVhZGVyXCJcbiAgICAvKipcbiAgICAgKiAgbmF2IHRleHRcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogIG5hdiB1cmxcbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBzdGF0dXMgb2YgaXRlbVxuICAgICAqL1xuICAgIHN0YXR1cz86IFwiZGVmYXVsdFwiIHwgXCJhY3RpdmVcIiB8IFwiaG92ZXJcIlxuICAgIC8qKlxuICAgICAqIHNwYWNlIGJhciA/IGlmIHNwYWNlciwgdHJ1ZSBlbHNlIGZhbHNlXG4gICAgICovXG4gICAgc3BhY2VyPzogYm9vbGVhblxuICAgIGNsYXNzTmFtZXM/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2lkZU5hdkl0ZW06IEZDPFNpZGVOYXZJdGVtUHJvcHM+ID0gKHtcbiAgICB1cmwgPSBcIiNcIixcbiAgICB0eXBlID0gXCJsaW5raGVhZGVyXCIsXG4gICAgdGV4dCA9IFwiTGluayBIZWFkZXJcIixcbiAgICBzdGF0dXMgPSBcImRlZmF1bHRcIixcbiAgICBzcGFjZXIgPSBmYWxzZSxcbiAgICBjaGlsZHJlbiA9IDw+PC8+LFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG4gICAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1pbi13aWR0aDogNjQwcHgpXCIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGxpXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BsaXN0LW5vbmUgYm9yZGVyLWwtMiBwci0zIFxuICAgICAgICAgICAgICAgICR7IHNwYWNlciA/IFwicHktMS41XCIgOiBcInB5LTIuNVwifSBcbiAgICAgICAgICAgICAgICAkeyB0eXBlID09IFwibGlua1wiID8gXCJwbC03XCIgOiBcInBsLTVcIn1cbiAgICAgICAgICAgICAgICAkeyBzdGF0dXMgPT0gXCJkZWZhdWx0XCIgPyBcImJvcmRlci1ncmF5LTEwMFwiIDogXCJib3JkZXItYnJhbmQtNjAwIHRleHQtYnJhbmQtNzAwXCIgfVxuICAgICAgICAgICAgICAgIGhvdmVyOmJvcmRlci1icmFuZC02MDAgaG92ZXI6dGV4dC1icmFuZC03MDAgdGV4dC1ncmF5LTYwMCBjdXJzb3ItcG9pbnRlclxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgeyBzcGFjZXIgPyBcIlwiIDogXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e3VybCA/IHVybCA6IFwiI1wifVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnRTdHlsZS1zbVxuICAgICAgICAgICAgICAgICAgICAkeyB0eXBlID09IFwiaGVhZGVyXCIgPyBcImZvbnQtc2VtaWJvbGRcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+eyB0ZXh0IH08L2E+IH1cbiAgICAgICAgPC9saT5cbiAgICApXG59XG4iXX0=