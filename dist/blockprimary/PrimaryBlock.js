"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryBlock = void 0;

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
var PrimaryBlock = _ref => {
  var {
    type = "vertical",
    mirror = "false"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                    ".concat(type != "vertical" && "px-12 py-6", "\n                    ").concat(type == "vertical" && "pb-8", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: props.imageurl ? props.imageurl : _Blank.default,
      className: "rounded-lg\n                        ".concat(type == "default" && "w-auto", "\n                    ")
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                    ".concat(type != "vertical" && "flex items-center justify-center", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n                        ".concat(type != "vertical" && "pl-12", "\n                ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, props.info.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-4"
    }, props.info.text), props.info.cta && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: props.info.cta.name,
      url: props.info.cta.url,
      type: "primary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "default" && "flex", "\n                ").concat(mirror && "flex-row-reverse", "\n                ").concat(props.className ? props.className : "", "\n            ")
  }), (type == "default" || type == "vertical") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.PrimaryBlock = PrimaryBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2twcmltYXJ5L1ByaW1hcnlCbG9jay50c3giXSwibmFtZXMiOlsiUHJpbWFyeUJsb2NrIiwidHlwZSIsIm1pcnJvciIsInByb3BzIiwiSW1hZ2UiLCJpbWFnZXVybCIsIlRlc3RJbWFnZSIsIlRleHQiLCJpbmZvIiwiaGVhZCIsInRleHQiLCJjdGEiLCJuYW1lIiwidXJsIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztBQWtDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxZQUFtQyxHQUFHLFFBSTdDO0FBQUEsTUFKOEM7QUFDaERDLElBQUFBLElBQUksR0FBSSxVQUR3QztBQUVoREMsSUFBQUEsTUFBTSxHQUFHO0FBRnVDLEdBSTlDO0FBQUEsTUFEQ0MsS0FDRDs7QUFDRixNQUFNQyxLQUFLLEdBQUcsTUFBTTtBQUNoQix3QkFDSTtBQUNJLE1BQUEsU0FBUyxrQ0FDSEgsSUFBSSxJQUFFLFVBQU4sSUFBb0IsWUFEakIsbUNBRUhBLElBQUksSUFBRSxVQUFOLElBQW9CLE1BRmpCO0FBRGIsb0JBTUk7QUFDSSxNQUFBLEdBQUcsRUFBRUUsS0FBSyxDQUFDRSxRQUFOLEdBQWVGLEtBQUssQ0FBQ0UsUUFBckIsR0FBOEJDLGNBRHZDO0FBRUksTUFBQSxTQUFTLGdEQUNITCxJQUFJLElBQUUsU0FBTixJQUFtQixRQURoQjtBQUZiLE1BTkosQ0FESjtBQWVILEdBaEJEOztBQWlCQSxNQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNmLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNITixJQUFJLElBQUUsVUFBTixJQUFvQixrQ0FEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxzQ0FDSEEsSUFBSSxJQUFFLFVBQU4sSUFBb0IsT0FEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUUUsS0FBSyxDQUFDSyxJQUFOLENBQVdDLElBSm5CLENBTEosZUFZSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUU4sS0FBSyxDQUFDSyxJQUFOLENBQVdFLElBSm5CLENBWkosRUFvQlFQLEtBQUssQ0FBQ0ssSUFBTixDQUFXRyxHQUFYLGlCQUNBO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxvQkFFSSw2QkFBQyxjQUFEO0FBQ0ksTUFBQSxJQUFJLEVBQUlSLEtBQUssQ0FBQ0ssSUFBTixDQUFXRyxHQUFYLENBQWVDLElBRDNCO0FBRUksTUFBQSxHQUFHLEVBQUlULEtBQUssQ0FBQ0ssSUFBTixDQUFXRyxHQUFYLENBQWVFLEdBRjFCO0FBR0ksTUFBQSxJQUFJLEVBQUcsU0FIWDtBQUlJLE1BQUEsSUFBSSxFQUFHLE1BSlg7QUFLSSxNQUFBLElBQUksRUFBRztBQUxYLE1BRkosQ0FyQlIsQ0FMSixDQURKO0FBeUNILEdBMUNEOztBQTJDQSxzQkFDSSxpREFDUVYsS0FEUjtBQUVJLElBQUEsU0FBUyw4QkFDSEYsSUFBSSxJQUFFLFNBQU4sSUFBbUIsTUFEaEIsK0JBRUhDLE1BQU0sSUFBSSxrQkFGUCwrQkFHSEMsS0FBSyxDQUFDVyxTQUFOLEdBQWdCWCxLQUFLLENBQUNXLFNBQXRCLEdBQWdDLEVBSDdCO0FBRmIsTUFTUSxDQUFDYixJQUFJLElBQUUsU0FBTixJQUFtQkEsSUFBSSxJQUFFLFVBQTFCLGtCQUNJLHlFQUNJLDZCQUFDLEtBQUQsT0FESixlQUVJLDZCQUFDLElBQUQsT0FGSixDQVZaLENBREo7QUFxQkgsQ0F0Rk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGVzdEltYWdlIGZyb20gJy4vQmxhbmsucG5nJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9ucy9CdXR0b24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBVHlwZSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDVEFJbmZvVHlwZSB7XG4gICAgaGVhZDogc3RyaW5nXG4gICAgdGV4dDogc3RyaW5nXG4gICAgY3RhOiBDVEFUeXBlXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbWFyeUJsb2NrUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgLyoqXG4gICAgKiAgaW1hZ2UgdXJsIHRvIHNob3dcbiAgICAqL1xuICAgIGltYWdldXJsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdGV4dCBhbmQgYnV0dG9uIHRvIHNob3dcbiAgICAgKi9cbiAgICBpbmZvOiBDVEFJbmZvVHlwZVxuICAgIC8qKlxuICAgICAqIEJsb2NrIHR5cGVcbiAgICAgKi9cbiAgICB0eXBlPzogXCJkZWZhdWx0XCIgfCBcInZlcnRpY2FsXCJcbiAgICAvKipcbiAgICAgKiBJcyBtaXJyb3JcbiAgICAgKi9cbiAgICBtaXJyb3I/OiBib29sZWFuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgUHJpbWFyeUJsb2NrOiBGQzxQcmltYXJ5QmxvY2tQcm9wcz4gPSAoe1xuICAgIHR5cGUgID0gXCJ2ZXJ0aWNhbFwiLFxuICAgIG1pcnJvciA9IFwiZmFsc2VcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIGNvbnN0IEltYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcInB4LTEyIHB5LTZcIn1cbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cInZlcnRpY2FsXCIgJiYgXCJwYi04XCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdldXJsP3Byb3BzLmltYWdldXJsOlRlc3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcInctYXV0b1wifVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dHlwZSE9XCJ2ZXJ0aWNhbFwiICYmIFwicGwtMTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH0gPlxuICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTR4bCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmluZm8uaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgcHQtNCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmluZm8udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmluZm8uY3RhICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB7cHJvcHMuaW5mby5jdGEubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0ge3Byb3BzLmluZm8uY3RhLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcImZsZXhcIn1cbiAgICAgICAgICAgICAgICAke21pcnJvciAmJiBcImZsZXgtcm93LXJldmVyc2VcIn1cbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZT9wcm9wcy5jbGFzc05hbWU6XCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAodHlwZT09XCJkZWZhdWx0XCIgfHwgdHlwZT09XCJ2ZXJ0aWNhbFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ==