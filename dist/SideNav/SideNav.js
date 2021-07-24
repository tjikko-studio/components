"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _SideNavItem = require("../sidenavitem/SideNavItem");

var _excluded = ["navObj"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SideNav = _ref => {
  var {
    navObj = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("ul", _extends({}, props, {
    className: "".concat(props.classNames ? props.classNames : "")
  }), navObj.map((navItem, index) => /*#__PURE__*/_react.default.createElement(_SideNavItem.SideNavItem, navItem)));
};

exports.SideNav = SideNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvU2lkZU5hdi9TaWRlTmF2LnRzeCJdLCJuYW1lcyI6WyJTaWRlTmF2IiwibmF2T2JqIiwicHJvcHMiLCJkZXNrdG9wIiwiY2xhc3NOYW1lcyIsIm1hcCIsIm5hdkl0ZW0iLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUF5QixHQUFHLFFBR25DO0FBQUEsTUFIb0M7QUFDdENDLElBQUFBLE1BQU0sR0FBRztBQUQ2QixHQUdwQztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsT0FBTyxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBaEI7QUFFQSxzQkFDSSxnREFDUUQsS0FEUjtBQUVJLElBQUEsU0FBUyxZQUFLQSxLQUFLLENBQUNFLFVBQU4sR0FBbUJGLEtBQUssQ0FBQ0UsVUFBekIsR0FBc0MsRUFBM0M7QUFGYixNQUlLSCxNQUFNLENBQUNJLEdBQVAsQ0FBVyxDQUFDQyxPQUFELEVBQVVDLEtBQVYsa0JBQ1IsNkJBQUMsd0JBQUQsRUFDUUQsT0FEUixDQURILENBSkwsQ0FESjtBQVlILENBbEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTWVkaWFQcmVkaWNhdGUgfSBmcm9tIFwicmVhY3QtbWVkaWEtaG9va1wiO1xuXG5pbXBvcnQgeyBTaWRlTmF2SXRlbVByb3BzLCBTaWRlTmF2SXRlbSB9IGZyb20gXCIuLi9zaWRlbmF2aXRlbS9TaWRlTmF2SXRlbVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNpZGVOYXZQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gICAvKipcbiAgICAqIFNpZGVOYXYgZGF0YSBvYmplY3RcbiAgICAqL1xuICAgIG5hdk9iaj86IFNpZGVOYXZJdGVtUHJvcHNbXVxuICAgIGNsYXNzTmFtZXM/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2lkZU5hdjogRkM8U2lkZU5hdlByb3BzPiA9ICh7XG4gICAgbmF2T2JqID0gW10sXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCBkZXNrdG9wID0gdXNlTWVkaWFQcmVkaWNhdGUoXCIobWluLXdpZHRoOiA2NDBweClcIilcblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bFxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwcm9wcy5jbGFzc05hbWVzID8gcHJvcHMuY2xhc3NOYW1lcyA6IFwiXCJ9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAge25hdk9iai5tYXAoKG5hdkl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPFNpZGVOYXZJdGVtIFxuICAgICAgICAgICAgICAgICAgICB7Li4ubmF2SXRlbX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuIl19