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
    className: "list-none border-l-2 pr-3\n                ".concat(spacer ? "py-1.5" : "py-2.5", "\n                ").concat(type == "link" ? "pl-7" : "pl-5", "\n                ").concat(status == "default" ? "border-gray-100" : "border-brand-600 text-brand-700", "\n                hover:border-brand-600 hover:text-brand-700 text-gray-600 cursor-pointer\n            ")
  }), spacer ? "" : /*#__PURE__*/_react.default.createElement("a", {
    href: url ? url : "#",
    className: "fontStyle-sm\n                    ".concat(type == "header" ? "font-semibold" : "", "\n                ")
  }, text));
};

exports.SideNavItem = SideNavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1NpZGVOYXZJdGVtLnRzeCJdLCJuYW1lcyI6WyJTaWRlTmF2SXRlbSIsInVybCIsInR5cGUiLCJ0ZXh0Iiwic3RhdHVzIiwic3BhY2VyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImRlc2t0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFdBQWlDLEdBQUcsUUFRM0M7QUFBQSxNQVI0QztBQUNoREMsSUFBQUEsR0FBRyxHQUFHLEdBRDBDO0FBRWhEQyxJQUFBQSxJQUFJLEdBQUcsWUFGeUM7QUFHaERDLElBQUFBLElBQUksR0FBRyxhQUh5QztBQUloREMsSUFBQUEsTUFBTSxHQUFHLFNBSnVDO0FBS2hEQyxJQUFBQSxNQUFNLEdBQUcsS0FMdUM7QUFNaERDLElBQUFBLFFBQVEsZ0JBQUc7QUFOcUMsR0FRNUM7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU1DLE9BQU8sR0FBRyx1Q0FBa0Isb0JBQWxCLENBQWhCO0FBRUEsc0JBRUUsZ0RBQ01ELEtBRE47QUFFRSxJQUFBLFNBQVMsdURBQ0dGLE1BQU0sR0FBRyxRQUFILEdBQWMsUUFEdkIsK0JBRUdILElBQUksSUFBSSxNQUFSLEdBQWlCLE1BQWpCLEdBQTBCLE1BRjdCLCtCQUdHRSxNQUFNLElBQUksU0FBVixHQUFzQixpQkFBdEIsR0FBMEMsaUNBSDdDO0FBRlgsTUFTR0MsTUFBTSxHQUFHLEVBQUgsZ0JBQ0w7QUFDRSxJQUFBLElBQUksRUFBRUosR0FBRyxHQUFHQSxHQUFILEdBQVMsR0FEcEI7QUFFRSxJQUFBLFNBQVMsOENBQ0dDLElBQUksSUFBSSxRQUFSLEdBQW1CLGVBQW5CLEdBQXFDLEVBRHhDO0FBRlgsS0FLRUMsSUFMRixDQVZKLENBRkY7QUFvQkQsQ0EvQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VNZWRpYVByZWRpY2F0ZX0gZnJvbSBcInJlYWN0LW1lZGlhLWhvb2tcIlxuXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVOYXZJdGVtUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAvKipcbiAgICogdHlwZSBvZiBTaWRlTmF2SXRlbSAoXCJsaW5raGVhZGVyXCIgfCBcImxpbmtcIiB8IFwiaGVhZGVyXCIpXG4gICAqL1xuICB0eXBlPzogXCJsaW5raGVhZGVyXCIgfCBcImxpbmtcIiB8IFwiaGVhZGVyXCJcbiAgLyoqXG4gICAqICBuYXYgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogIG5hdiB1cmxcbiAgICovXG4gIHVybD86IHN0cmluZ1xuICAvKipcbiAgICogc3RhdHVzIG9mIGl0ZW1cbiAgICovXG4gIHN0YXR1cz86IFwiZGVmYXVsdFwiIHwgXCJhY3RpdmVcIiB8IFwiaG92ZXJcIlxuICAvKipcbiAgICogc3BhY2UgYmFyID8gaWYgc3BhY2VyLCB0cnVlIGVsc2UgZmFsc2VcbiAgICovXG4gIHNwYWNlcj86IGJvb2xlYW5cbiAgY2xhc3NOYW1lcz86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBTaWRlTmF2SXRlbTogRkM8U2lkZU5hdkl0ZW1Qcm9wcz4gPSAoe1xuICB1cmwgPSBcIiNcIixcbiAgdHlwZSA9IFwibGlua2hlYWRlclwiLFxuICB0ZXh0ID0gXCJMaW5rIEhlYWRlclwiLFxuICBzdGF0dXMgPSBcImRlZmF1bHRcIixcbiAgc3BhY2VyID0gZmFsc2UsXG4gIGNoaWxkcmVuID0gPD48Lz4sXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IGRlc2t0b3AgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtaW4td2lkdGg6IDY0MHB4KVwiKVxuXG4gIHJldHVybiAoXG5cbiAgICA8bGlcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17YGxpc3Qtbm9uZSBib3JkZXItbC0yIHByLTNcbiAgICAgICAgICAgICAgICAke3NwYWNlciA/IFwicHktMS41XCIgOiBcInB5LTIuNVwifVxuICAgICAgICAgICAgICAgICR7dHlwZSA9PSBcImxpbmtcIiA/IFwicGwtN1wiIDogXCJwbC01XCJ9XG4gICAgICAgICAgICAgICAgJHtzdGF0dXMgPT0gXCJkZWZhdWx0XCIgPyBcImJvcmRlci1ncmF5LTEwMFwiIDogXCJib3JkZXItYnJhbmQtNjAwIHRleHQtYnJhbmQtNzAwXCJ9XG4gICAgICAgICAgICAgICAgaG92ZXI6Ym9yZGVyLWJyYW5kLTYwMCBob3Zlcjp0ZXh0LWJyYW5kLTcwMCB0ZXh0LWdyYXktNjAwIGN1cnNvci1wb2ludGVyXG4gICAgICAgICAgICBgfVxuICAgID5cbiAgICAgIHtzcGFjZXIgPyBcIlwiIDpcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXt1cmwgPyB1cmwgOiBcIiNcIn1cbiAgICAgICAgICBjbGFzc05hbWU9e2Bmb250U3R5bGUtc21cbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlID09IFwiaGVhZGVyXCIgPyBcImZvbnQtc2VtaWJvbGRcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgPnt0ZXh0fTwvYT59XG4gICAgPC9saT5cbiAgKVxufVxuIl19