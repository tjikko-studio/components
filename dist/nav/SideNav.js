"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SideNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _SideNavItem = require("./SideNavItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1NpZGVOYXYudHN4Il0sIm5hbWVzIjpbIlNpZGVOYXYiLCJuYXZPYmoiLCJwcm9wcyIsImRlc2t0b3AiLCJjbGFzc05hbWVzIiwibWFwIiwibmF2SXRlbSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQXlCLEdBQUcsUUFHbkM7QUFBQSxNQUhvQztBQUN4Q0MsSUFBQUEsTUFBTSxHQUFHO0FBRCtCLEdBR3BDO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNQyxPQUFPLEdBQUcsdUNBQWtCLG9CQUFsQixDQUFoQjtBQUVBLHNCQUNFLGdEQUNNRCxLQUROO0FBRUUsSUFBQSxTQUFTLFlBQUtBLEtBQUssQ0FBQ0UsVUFBTixHQUFtQkYsS0FBSyxDQUFDRSxVQUF6QixHQUFzQyxFQUEzQztBQUZYLE1BSUdILE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLENBQUNDLE9BQUQsRUFBVUMsS0FBVixrQkFDViw2QkFBQyx3QkFBRCxFQUNNRCxPQUROLENBREQsQ0FKSCxDQURGO0FBWUQsQ0FsQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VNZWRpYVByZWRpY2F0ZX0gZnJvbSBcInJlYWN0LW1lZGlhLWhvb2tcIlxuXG5pbXBvcnQge1NpZGVOYXZJdGVtUHJvcHMsIFNpZGVOYXZJdGVtfSBmcm9tIFwiLi9TaWRlTmF2SXRlbVwiXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lkZU5hdlByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIFNpZGVOYXYgZGF0YSBvYmplY3RcbiAgICovXG4gIG5hdk9iaj86IFNpZGVOYXZJdGVtUHJvcHNbXVxuICBjbGFzc05hbWVzPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFNpZGVOYXY6IEZDPFNpZGVOYXZQcm9wcz4gPSAoe1xuICBuYXZPYmogPSBbXSxcbiAgLi4ucHJvcHNcbn0pID0+IHtcbiAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1pbi13aWR0aDogNjQwcHgpXCIpXG5cbiAgcmV0dXJuIChcbiAgICA8dWxcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2xhc3NOYW1lcyA/IHByb3BzLmNsYXNzTmFtZXMgOiBcIlwifWB9XG4gICAgPlxuICAgICAge25hdk9iai5tYXAoKG5hdkl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgIDxTaWRlTmF2SXRlbVxuICAgICAgICAgIHsuLi5uYXZJdGVtfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKVxufVxuIl19