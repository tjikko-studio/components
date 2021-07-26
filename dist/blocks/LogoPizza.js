"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoPizza = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFastMarquee = _interopRequireDefault(require("react-fast-marquee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var LogoPizza = _ref => {
  var {
    companyArr = [],
    mode = "Default"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-pizza"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(mode === "Compact" ? "text-2xl" : "text-4xl", " text-center mb-16")
  }, "Trusted by"), /*#__PURE__*/_react.default.createElement(_reactFastMarquee.default, {
    gradientWidth: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16"
  }, companyArr.map((company, id) => /*#__PURE__*/_react.default.createElement("div", {
    key: id,
    className: mode === "Default" ? "h-14 lg:h-24 md:h-20" : "h-14 lg:h-16 md:h-12"
  }, company.imgUrl && company.imgUrl !== "" ? /*#__PURE__*/_react.default.createElement("img", {
    className: "w-auto h-full",
    src: company.imgUrl ? company.imgUrl : "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-full bg-black"
  }))))));
};

exports.LogoPizza = LogoPizza;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0xvZ29QaXp6YS50c3giXSwibmFtZXMiOlsiTG9nb1BpenphIiwiY29tcGFueUFyciIsIm1vZGUiLCJtYXAiLCJjb21wYW55IiwiaWQiLCJpbWdVcmwiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBa0JBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUcsUUFHdkM7QUFBQSxNQUh3QztBQUM1Q0MsSUFBQUEsVUFBVSxHQUFHLEVBRCtCO0FBRTVDQyxJQUFBQSxJQUFJLEdBQUc7QUFGcUMsR0FHeEM7QUFFSixzQkFDRTtBQUNFLElBQUEsU0FBUztBQURYLGtCQUdFO0FBQUksSUFBQSxTQUFTLFlBQUtBLElBQUksS0FBSyxTQUFULEdBQXFCLFVBQXJCLEdBQWtDLFVBQXZDO0FBQWIsa0JBSEYsZUFJRSw2QkFBQyx5QkFBRDtBQUNFLElBQUEsYUFBYSxFQUFDO0FBRGhCLGtCQUdFO0FBQUssSUFBQSxTQUFTO0FBQWQsS0FDR0QsVUFBVSxDQUFDRSxHQUFYLENBQWUsQ0FBQ0MsT0FBRCxFQUFVQyxFQUFWLGtCQUNkO0FBQ0UsSUFBQSxHQUFHLEVBQUVBLEVBRFA7QUFFRSxJQUFBLFNBQVMsRUFBRUgsSUFBSSxLQUFLLFNBQVQsR0FBcUIsc0JBQXJCLEdBQThDO0FBRjNELEtBSUlFLE9BQU8sQ0FBQ0UsTUFBUixJQUFrQkYsT0FBTyxDQUFDRSxNQUFSLEtBQW1CLEVBQXRDLGdCQUNDO0FBQUssSUFBQSxTQUFTLEVBQUMsZUFBZjtBQUErQixJQUFBLEdBQUcsRUFBRUYsT0FBTyxDQUFDRSxNQUFSLEdBQWlCRixPQUFPLENBQUNFLE1BQXpCLG1DQUEyREMsSUFBSSxDQUFDQyxJQUFMLENBQVUsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQTNEO0FBQXBDLElBREQsZ0JBRUc7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBTk4sQ0FERCxDQURILENBSEYsQ0FKRixDQURGO0FBd0JELENBN0JNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBNYXJxdWVlIGZyb20gXCJyZWFjdC1mYXN0LW1hcnF1ZWVcIlxuXG5leHBvcnQgaW50ZXJmYWNlIExvZ29QaXp6YUludGVyZmFjZSB7XG4gIGltZ1VybDogc3RyaW5nXG4gIGhyZWY/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2dvUGl6emFQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBzcGVlY2ggdG8gZGlzcGxheSBvbiBMb2dvUGl6emFcbiAgICovXG4gIGNvbXBhbnlBcnI/OiBMb2dvUGl6emFJbnRlcmZhY2VbXVxuICAvKipcbiAgICogbW9kZSA6IFwiRGVmYXVsdFwiIHwgXCJDb21wYWN0XCJcbiAgICovXG4gIG1vZGU/OiBcIkRlZmF1bHRcIiB8IFwiQ29tcGFjdFwiXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IExvZ29QaXp6YTogRkM8TG9nb1BpenphUHJvcHM+ID0gKHtcbiAgY29tcGFueUFyciA9IFtdLFxuICBtb2RlID0gXCJEZWZhdWx0XCJcbn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGxvZ28tcGl6emFgfVxuICAgID5cbiAgICAgIDxoMyBjbGFzc05hbWU9e2Ake21vZGUgPT09IFwiQ29tcGFjdFwiID8gXCJ0ZXh0LTJ4bFwiIDogXCJ0ZXh0LTR4bFwifSB0ZXh0LWNlbnRlciBtYi0xNmB9PlRydXN0ZWQgYnk8L2gzPlxuICAgICAgPE1hcnF1ZWVcbiAgICAgICAgZ3JhZGllbnRXaWR0aD1cIjBcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsZXggZmxleC1ub3dyYXAgdy1tYXggIHNwYWNlLXgtMTQgbGc6c3BhY2UteC0zMiBtZDpzcGFjZS14LTE2YH0+XG4gICAgICAgICAge2NvbXBhbnlBcnIubWFwKChjb21wYW55LCBpZCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e21vZGUgPT09IFwiRGVmYXVsdFwiID8gXCJoLTE0IGxnOmgtMjQgbWQ6aC0yMFwiIDogXCJoLTE0IGxnOmgtMTYgbWQ6aC0xMlwifVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7KGNvbXBhbnkuaW1nVXJsICYmIGNvbXBhbnkuaW1nVXJsICE9PSBcIlwiKSA/XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LWF1dG8gaC1mdWxsXCIgc3JjPXtjb21wYW55LmltZ1VybCA/IGNvbXBhbnkuaW1nVXJsIDogYGh0dHBzOi8vaS5wcmF2YXRhci5jYy8ke01hdGguY2VpbCgxMDAwICogTWF0aC5yYW5kb20oKSl9YH0+PC9pbWc+XG4gICAgICAgICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYmctYmxhY2tcIj48L2Rpdj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9NYXJxdWVlPlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=