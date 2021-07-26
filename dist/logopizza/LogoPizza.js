"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoPizza = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFastMarquee = _interopRequireDefault(require("react-fast-marquee"));

var _excluded = ["companyArr", "mode"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var LogoPizza = _ref => {
  var {
    companyArr = [],
    mode = "Default"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "logo-pizza"
  }, props), /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(mode == "Compact" ? "text-2xl" : "text-4xl", " text-center mb-16")
  }, "Trusted by"), /*#__PURE__*/_react.default.createElement(_reactFastMarquee.default, {
    gradientWidth: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16"
  }, companyArr.map((company, id) => /*#__PURE__*/_react.default.createElement("div", {
    key: id,
    className: mode == "Default" ? "h-14 lg:h-24 md:h-20" : "h-14 lg:h-16 md:h-12"
  }, company.imgUrl && company.imgUrl !== "" ? /*#__PURE__*/_react.default.createElement("img", {
    className: "w-auto h-full",
    src: company.imgUrl ? company.imgUrl : "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-full bg-black"
  }))))));
};

exports.LogoPizza = LogoPizza;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbG9nb3BpenphL0xvZ29QaXp6YS50c3giXSwibmFtZXMiOlsiTG9nb1BpenphIiwiY29tcGFueUFyciIsIm1vZGUiLCJwcm9wcyIsIm1hcCIsImNvbXBhbnkiLCJpZCIsImltZ1VybCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUE2QixHQUFHLFFBSXZDO0FBQUEsTUFKd0M7QUFDMUNDLElBQUFBLFVBQVUsR0FBRyxFQUQ2QjtBQUUxQ0MsSUFBQUEsSUFBSSxHQUFHO0FBRm1DLEdBSXhDO0FBQUEsTUFEQ0MsS0FDRDs7QUFFRixzQkFDSTtBQUNJLElBQUEsU0FBUztBQURiLEtBRVFBLEtBRlIsZ0JBSUk7QUFBSSxJQUFBLFNBQVMsWUFBTUQsSUFBSSxJQUFJLFNBQVIsR0FBb0IsVUFBcEIsR0FBaUMsVUFBdkM7QUFBYixrQkFKSixlQUtJLDZCQUFDLHlCQUFEO0FBQ0ksSUFBQSxhQUFhLEVBQUc7QUFEcEIsa0JBR0k7QUFBSyxJQUFBLFNBQVM7QUFBZCxLQUNFRCxVQUFVLENBQUNHLEdBQVgsQ0FBZSxDQUFDQyxPQUFELEVBQVVDLEVBQVYsa0JBQ2I7QUFDSSxJQUFBLEdBQUcsRUFBRUEsRUFEVDtBQUVJLElBQUEsU0FBUyxFQUFHSixJQUFJLElBQUksU0FBUixHQUFvQixzQkFBcEIsR0FBNkM7QUFGN0QsS0FJT0csT0FBTyxDQUFDRSxNQUFSLElBQWtCRixPQUFPLENBQUNFLE1BQVIsS0FBbUIsRUFBdEMsZ0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQyxlQUFmO0FBQStCLElBQUEsR0FBRyxFQUFFRixPQUFPLENBQUNFLE1BQVIsR0FBaUJGLE9BQU8sQ0FBQ0UsTUFBekIsbUNBQTJEQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFPRCxJQUFJLENBQUNFLE1BQUwsRUFBakIsQ0FBM0Q7QUFBcEMsSUFERixnQkFFSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFOVixDQURGLENBREYsQ0FISixDQUxKLENBREo7QUF5QkgsQ0EvQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTWFycXVlZSBmcm9tIFwicmVhY3QtZmFzdC1tYXJxdWVlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9nb1BpenphSW50ZXJmYWNlIHtcbiAgICBpbWdVcmw6IHN0cmluZztcbiAgICBocmVmPzogc3RyaW5nO1xufVxuICAgIFxuZXhwb3J0IGludGVyZmFjZSBMb2dvUGl6emFQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogc3BlZWNoIHRvIGRpc3BsYXkgb24gTG9nb1BpenphXG4gICAgICovXG4gICAgY29tcGFueUFycj86IExvZ29QaXp6YUludGVyZmFjZVtdXG4gICAgLyoqXG4gICAgICogbW9kZSA6IFwiRGVmYXVsdFwiIHwgXCJDb21wYWN0XCJcbiAgICAgKi9cbiAgICBtb2RlPzogXCJEZWZhdWx0XCIgfCBcIkNvbXBhY3RcIlxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBMb2dvUGl6emE6IEZDPExvZ29QaXp6YVByb3BzPiA9ICh7XG4gICAgY29tcGFueUFyciA9IFtdLFxuICAgIG1vZGUgPSBcIkRlZmF1bHRcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgbG9nby1waXp6YWB9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2AkeyBtb2RlID09IFwiQ29tcGFjdFwiID8gXCJ0ZXh0LTJ4bFwiIDogXCJ0ZXh0LTR4bFwifSB0ZXh0LWNlbnRlciBtYi0xNmB9PlRydXN0ZWQgYnk8L2gzPlxuICAgICAgICAgICAgPE1hcnF1ZWVcbiAgICAgICAgICAgICAgICBncmFkaWVudFdpZHRoPSAgXCIwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1ub3dyYXAgdy1tYXggIHNwYWNlLXgtMTQgbGc6c3BhY2UteC0zMiBtZDpzcGFjZS14LTE2YH0+XG4gICAgICAgICAgICAgICAgeyBjb21wYW55QXJyLm1hcCgoY29tcGFueSwgaWQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17IG1vZGUgPT0gXCJEZWZhdWx0XCIgPyBcImgtMTQgbGc6aC0yNCBtZDpoLTIwXCIgOiBcImgtMTQgbGc6aC0xNiBtZDpoLTEyXCJ9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgKGNvbXBhbnkuaW1nVXJsICYmIGNvbXBhbnkuaW1nVXJsICE9PSBcIlwiKSA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1hdXRvIGgtZnVsbFwiIHNyYz17Y29tcGFueS5pbWdVcmwgPyBjb21wYW55LmltZ1VybCA6IGBodHRwczovL2kucHJhdmF0YXIuY2MvJHtNYXRoLmNlaWwoMTAwMCAqIE1hdGgucmFuZG9tKCkpfWB9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTWFycXVlZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19