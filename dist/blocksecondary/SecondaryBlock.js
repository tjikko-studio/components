"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _Blank = _interopRequireDefault(require("./Blank.png"));

var _Button = require("../buttons/Button");

var _excluded = ["type", "mirror"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var SecondaryBlock = _ref => {
  var {
    type = "vertical",
    mirror = "false"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                    ".concat(type == "vertical" && "pb-6", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: props.imageurl ? props.imageurl : _Blank.default,
      className: "rounded-lg\n                        ".concat(type == "default" && "w-auto", "\n                    ")
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                    ".concat(type != "vertical" && "flex justify-center", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                        ".concat(type != "vertical" && "pl-12", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, props.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, props.text), props.cta_name && props.cta_link && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: props.cta_name,
      url: props.cta_link,
      type: "tertiary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "default" && "flex", "\n                ").concat(mirror && "flex-row-reverse", "\n                ").concat(props.className ? props.className : "", "\n            ")
  }), (type == "default" || type == "vertical") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.SecondaryBlock = SecondaryBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzZWNvbmRhcnkvU2Vjb25kYXJ5QmxvY2sudHN4Il0sIm5hbWVzIjpbIlNlY29uZGFyeUJsb2NrIiwidHlwZSIsIm1pcnJvciIsInByb3BzIiwiSW1hZ2UiLCJpbWFnZXVybCIsIlRlc3RJbWFnZSIsIlRleHQiLCJoZWFkIiwidGV4dCIsImN0YV9uYW1lIiwiY3RhX2xpbmsiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGNBQXVDLEdBQUcsUUFJakQ7QUFBQSxNQUprRDtBQUNwREMsSUFBQUEsSUFBSSxHQUFJLFVBRDRDO0FBRXBEQyxJQUFBQSxNQUFNLEdBQUc7QUFGMkMsR0FJbEQ7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNISCxJQUFJLElBQUUsVUFBTixJQUFvQixNQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxHQUFHLEVBQUVFLEtBQUssQ0FBQ0UsUUFBTixHQUFlRixLQUFLLENBQUNFLFFBQXJCLEdBQThCQyxjQUR2QztBQUVJLE1BQUEsU0FBUyxnREFDSEwsSUFBSSxJQUFFLFNBQU4sSUFBbUIsUUFEaEI7QUFGYixNQUxKLENBREo7QUFjSCxHQWZEOztBQWdCQSxNQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNmLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNITixJQUFJLElBQUUsVUFBTixJQUFvQixxQkFEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxzQ0FDSEEsSUFBSSxJQUFFLFVBQU4sSUFBb0IsT0FEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUUUsS0FBSyxDQUFDSyxJQUpkLENBTEosZUFZSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUUwsS0FBSyxDQUFDTSxJQUpkLENBWkosRUFvQlNOLEtBQUssQ0FBQ08sUUFBTixJQUFrQlAsS0FBSyxDQUFDUSxRQUF6QixpQkFDQTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsb0JBRUksNkJBQUMsY0FBRDtBQUNJLE1BQUEsSUFBSSxFQUFJUixLQUFLLENBQUNPLFFBRGxCO0FBRUksTUFBQSxHQUFHLEVBQUlQLEtBQUssQ0FBQ1EsUUFGakI7QUFHSSxNQUFBLElBQUksRUFBRyxVQUhYO0FBSUksTUFBQSxJQUFJLEVBQUcsTUFKWDtBQUtJLE1BQUEsSUFBSSxFQUFHO0FBTFgsTUFGSixDQXJCUixDQUxKLENBREo7QUF5Q0gsR0ExQ0Q7O0FBMkNBLHNCQUNJLGlEQUNRUixLQURSO0FBRUksSUFBQSxTQUFTLDhCQUNIRixJQUFJLElBQUUsU0FBTixJQUFtQixNQURoQiwrQkFFSEMsTUFBTSxJQUFJLGtCQUZQLCtCQUdIQyxLQUFLLENBQUNTLFNBQU4sR0FBZ0JULEtBQUssQ0FBQ1MsU0FBdEIsR0FBZ0MsRUFIN0I7QUFGYixNQVNRLENBQUNYLElBQUksSUFBRSxTQUFOLElBQW1CQSxJQUFJLElBQUUsVUFBMUIsa0JBQ0kseUVBQ0ksNkJBQUMsS0FBRCxPQURKLGVBRUksNkJBQUMsSUFBRCxPQUZKLENBVlosQ0FESjtBQXFCSCxDQXJGTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0SW1hZ2UgZnJvbSAnLi9CbGFuay5wbmcnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b25zL0J1dHRvbidcblxuZXhwb3J0IGludGVyZmFjZSBTZWNvbmRhcnlCbG9ja1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgIC8qKlxuICAgICogIGltYWdlIHVybCB0byBzaG93XG4gICAgKi9cbiAgICBpbWFnZXVybD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIHRleHQgYW5kIGJ1dHRvbiB0byBzaG93XG4gICAgICovXG4gICAgaGVhZDogc3RyaW5nXG4gICAgdGV4dDogc3RyaW5nXG4gICAgY3RhX25hbWU6IHN0cmluZ1xuICAgIGN0YV9saW5rOiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBCbG9jayB0eXBlXG4gICAgICovXG4gICAgdHlwZT86IFwiZGVmYXVsdFwiIHwgXCJ2ZXJ0aWNhbFwiXG4gICAgLyoqXG4gICAgICogSXMgbWlycm9yXG4gICAgICovXG4gICAgbWlycm9yPzogYm9vbGVhblxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJsb2NrOiBGQzxTZWNvbmRhcnlCbG9ja1Byb3BzPiA9ICh7XG4gICAgdHlwZSAgPSBcInZlcnRpY2FsXCIsXG4gICAgbWlycm9yID0gXCJmYWxzZVwiLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG4gICAgY29uc3QgSW1hZ2UgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgICAgICR7dHlwZT09XCJ2ZXJ0aWNhbFwiICYmIFwicGItNlwifVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9wcy5pbWFnZXVybD9wcm9wcy5pbWFnZXVybDpUZXN0SW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQtbGdcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dHlwZT09XCJkZWZhdWx0XCIgJiYgXCJ3LWF1dG9cIn1cbiAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgY29uc3QgVGV4dCA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlIT1cInZlcnRpY2FsXCIgJiYgXCJmbGV4IGp1c3RpZnktY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dHlwZSE9XCJ2ZXJ0aWNhbFwiICYmIFwicGwtMTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH0gPlxuICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTR4bCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1iYXNlIHB0LTInXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmN0YV9uYW1lICYmIHByb3BzLmN0YV9saW5rKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0ge3Byb3BzLmN0YV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB7cHJvcHMuY3RhX2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbiA9ICdub25lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gXCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAke3R5cGU9PVwiZGVmYXVsdFwiICYmIFwiZmxleFwifVxuICAgICAgICAgICAgICAgICR7bWlycm9yICYmIFwiZmxleC1yb3ctcmV2ZXJzZVwifVxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTpcIlwifVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICh0eXBlPT1cImRlZmF1bHRcIiB8fCB0eXBlPT1cInZlcnRpY2FsXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgLz5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19