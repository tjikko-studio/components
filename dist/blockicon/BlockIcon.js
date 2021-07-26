"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

var _test_blockicon = _interopRequireDefault(require("../../assets/images/test_blockicon.png"));

var _excluded = ["type", "heading", "text"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BlockIcon = _ref => {
  var {
    type = "horizontal",
    heading = "Heading",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "horizontal" && "flex", "\n                ").concat(props.classNames ? props.classNames : "", "\n            ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                    ".concat(type == "vertical" && "py-2", "\n                    ").concat(type == "horizontal" && "px-6 pb-14", "\n                ")
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: props.imageurl ? props.imageurl : _test_blockicon.default,
    className: "w-14 h-14"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "\n                    ".concat(type == "vertical" && "mt-6", "\n                    ").concat(type == "horizontal" && "ml-6", "\n                "),
    style: {
      width: type == "horizontal" ? "310px" : "290px"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-2xl"
  }, heading && heading == "" ? heading : "Heading"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-base pt-2"
  }, text && text == "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua")));
};

exports.BlockIcon = BlockIcon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tpY29uL0Jsb2NrSWNvbi50c3giXSwibmFtZXMiOlsiQmxvY2tJY29uIiwidHlwZSIsImhlYWRpbmciLCJ0ZXh0IiwicHJvcHMiLCJkZXNrdG9wIiwiY2xhc3NOYW1lcyIsImltYWdldXJsIiwiVGVtcEltYWdlIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFJQTs7Ozs7Ozs7Ozs7O0FBc0JBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUcsUUFLdkM7QUFBQSxNQUx3QztBQUMxQ0MsSUFBQUEsSUFBSSxHQUFHLFlBRG1DO0FBRTFDQyxJQUFBQSxPQUFPLEdBQUcsU0FGZ0M7QUFHMUNDLElBQUFBLElBQUksR0FBRztBQUhtQyxHQUt4QztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsT0FBTyxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBaEI7QUFFQSxzQkFFSSxpREFDUUQsS0FEUjtBQUVJLElBQUEsU0FBUyw4QkFDSEgsSUFBSSxJQUFFLFlBQU4sSUFBc0IsTUFEbkIsK0JBRUhHLEtBQUssQ0FBQ0UsVUFBTixHQUFpQkYsS0FBSyxDQUFDRSxVQUF2QixHQUFrQyxFQUYvQjtBQUZiLG1CQU9JO0FBQ0ksSUFBQSxTQUFTLGtDQUNITCxJQUFJLElBQUUsVUFBTixJQUFvQixNQURqQixtQ0FFSEEsSUFBSSxJQUFFLFlBQU4sSUFBc0IsWUFGbkI7QUFEYixrQkFNSTtBQUNJLElBQUEsR0FBRyxFQUFFRyxLQUFLLENBQUNHLFFBQU4sR0FBZUgsS0FBSyxDQUFDRyxRQUFyQixHQUE4QkMsdUJBRHZDO0FBRUksSUFBQSxTQUFTO0FBRmIsSUFOSixDQVBKLGVBa0JJO0FBQ0ksSUFBQSxTQUFTLGtDQUNIUCxJQUFJLElBQUUsVUFBTixJQUFvQixNQURqQixtQ0FFSEEsSUFBSSxJQUFFLFlBQU4sSUFBc0IsTUFGbkIsdUJBRGI7QUFLSSxJQUFBLEtBQUssRUFDRDtBQUNJUSxNQUFBQSxLQUFLLEVBQUVSLElBQUksSUFBSSxZQUFSLEdBQXVCLE9BQXZCLEdBQWlDO0FBRDVDO0FBTlIsa0JBV0k7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLEtBSVFDLE9BQU8sSUFBSUEsT0FBTyxJQUFJLEVBQXRCLEdBQTJCQSxPQUEzQixHQUFxQyxTQUo3QyxDQVhKLGVBa0JJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxLQUlRQyxJQUFJLElBQUlBLElBQUksSUFBSSxFQUFoQixHQUFxQkEsSUFBckIsR0FBNEIsMEhBSnBDLENBbEJKLENBbEJKLENBRko7QUFnREgsQ0F4RE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBIZWFkZXJUZXh0LCBIZWFkZXJUZXh0UHJvcHMgfSBmcm9tICcuLi9oZWFkZXJ0ZXh0L0hlYWRlclRleHQnXG5pbXBvcnQgeyB1c2VNZWRpYVByZWRpY2F0ZSB9IGZyb20gXCJyZWFjdC1tZWRpYS1ob29rXCI7XG4vKlxuKiBJbiBwcm9kdWN0aW9uIG1vZGUsIHNob3cgZHluYW1pYyBpbWFnZSBhbmQgdmlkZW8gd2l0aCB1cmxcbiovXG5pbXBvcnQgVGVtcEltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvdGVzdF9ibG9ja2ljb24ucG5nJztcblxuZXhwb3J0IGludGVyZmFjZSBCbG9ja0ljb25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gICAvKipcbiAgICAqIHR5cGUgb2YgQmxvY2tJY29uIChcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIilcbiAgICAqL1xuICAgIHR5cGU/OiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIlxuICAgIC8qKlxuICAgICAqICBpbWFnZSB1cmwgdG8gc2hvd1xuICAgICAqL1xuICAgIGltYWdldXJsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogaGVhZGluZyB0ZXh0XG4gICAgICovXG4gICAgaGVhZGluZz86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIGNvbnRlbnQgdGV4dFxuICAgICAqL1xuICAgIHRleHQ/OiBzdHJpbmdcbiAgICBjbGFzc05hbWVzPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEJsb2NrSWNvbjogRkM8QmxvY2tJY29uUHJvcHM+ID0gKHtcbiAgICB0eXBlID0gXCJob3Jpem9udGFsXCIsXG4gICAgaGVhZGluZyA9IFwiSGVhZGluZ1wiLFxuICAgIHRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50LlwiLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG4gICAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1pbi13aWR0aDogNjQwcHgpXCIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICBcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgJHt0eXBlPT1cImhvcml6b250YWxcIiAmJiBcImZsZXhcIn1cbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZXM/cHJvcHMuY2xhc3NOYW1lczpcIlwifVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGU9PVwidmVydGljYWxcIiAmJiBcInB5LTJcIn1cbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cImhvcml6b250YWxcIiAmJiBcInB4LTYgcGItMTRcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuaW1hZ2V1cmw/cHJvcHMuaW1hZ2V1cmw6VGVtcEltYWdlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B3LTE0IGgtMTRgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cInZlcnRpY2FsXCIgJiYgXCJtdC02XCJ9XG4gICAgICAgICAgICAgICAgICAgICR7dHlwZT09XCJob3Jpem9udGFsXCIgJiYgXCJtbC02XCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0eXBlID09IFwiaG9yaXpvbnRhbFwiID8gXCIzMTBweFwiIDogXCIyOTBweFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTJ4bCdcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmcgJiYgaGVhZGluZyA9PSBcIlwiID8gaGVhZGluZyA6IFwiSGVhZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1iYXNlIHB0LTInXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ICYmIHRleHQgPT0gXCJcIiA/IHRleHQgOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQgZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19