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
    }, props.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-4"
    }, props.text), props.cta_name && props.cta_link && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: props.cta_name,
      url: props.cta_link,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2twcmltYXJ5L1ByaW1hcnlCbG9jay50c3giXSwibmFtZXMiOlsiUHJpbWFyeUJsb2NrIiwidHlwZSIsIm1pcnJvciIsInByb3BzIiwiSW1hZ2UiLCJpbWFnZXVybCIsIlRlc3RJbWFnZSIsIlRleHQiLCJoZWFkIiwidGV4dCIsImN0YV9uYW1lIiwiY3RhX2xpbmsiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFlBQW1DLEdBQUcsUUFJN0M7QUFBQSxNQUo4QztBQUNoREMsSUFBQUEsSUFBSSxHQUFJLFVBRHdDO0FBRWhEQyxJQUFBQSxNQUFNLEdBQUc7QUFGdUMsR0FJOUM7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNISCxJQUFJLElBQUUsVUFBTixJQUFvQixZQURqQixtQ0FFSEEsSUFBSSxJQUFFLFVBQU4sSUFBb0IsTUFGakI7QUFEYixvQkFNSTtBQUNJLE1BQUEsR0FBRyxFQUFFRSxLQUFLLENBQUNFLFFBQU4sR0FBZUYsS0FBSyxDQUFDRSxRQUFyQixHQUE4QkMsY0FEdkM7QUFFSSxNQUFBLFNBQVMsZ0RBQ0hMLElBQUksSUFBRSxTQUFOLElBQW1CLFFBRGhCO0FBRmIsTUFOSixDQURKO0FBZUgsR0FoQkQ7O0FBaUJBLE1BQU1NLElBQUksR0FBRyxNQUFNO0FBQ2Ysd0JBQ0k7QUFDSSxNQUFBLFNBQVMsa0NBQ0hOLElBQUksSUFBRSxVQUFOLElBQW9CLGtDQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxTQUFTLHNDQUNIQSxJQUFJLElBQUUsVUFBTixJQUFvQixPQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxPQUlRRSxLQUFLLENBQUNLLElBSmQsQ0FMSixlQVlJO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxPQUlRTCxLQUFLLENBQUNNLElBSmQsQ0FaSixFQW9CU04sS0FBSyxDQUFDTyxRQUFOLElBQWtCUCxLQUFLLENBQUNRLFFBQXpCLGlCQUNBO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxvQkFFSSw2QkFBQyxjQUFEO0FBQ0ksTUFBQSxJQUFJLEVBQUlSLEtBQUssQ0FBQ08sUUFEbEI7QUFFSSxNQUFBLEdBQUcsRUFBSVAsS0FBSyxDQUFDUSxRQUZqQjtBQUdJLE1BQUEsSUFBSSxFQUFHLFNBSFg7QUFJSSxNQUFBLElBQUksRUFBRyxNQUpYO0FBS0ksTUFBQSxJQUFJLEVBQUc7QUFMWCxNQUZKLENBckJSLENBTEosQ0FESjtBQXlDSCxHQTFDRDs7QUEyQ0Esc0JBQ0ksaURBQ1FSLEtBRFI7QUFFSSxJQUFBLFNBQVMsOEJBQ0hGLElBQUksSUFBRSxTQUFOLElBQW1CLE1BRGhCLCtCQUVIQyxNQUFNLElBQUksa0JBRlAsK0JBR0hDLEtBQUssQ0FBQ1MsU0FBTixHQUFnQlQsS0FBSyxDQUFDUyxTQUF0QixHQUFnQyxFQUg3QjtBQUZiLE1BU1EsQ0FBQ1gsSUFBSSxJQUFFLFNBQU4sSUFBbUJBLElBQUksSUFBRSxVQUExQixrQkFDSSx5RUFDSSw2QkFBQyxLQUFELE9BREosZUFFSSw2QkFBQyxJQUFELE9BRkosQ0FWWixDQURKO0FBcUJILENBdEZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRlc3RJbWFnZSBmcm9tICcuL0JsYW5rLnBuZydcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbnMvQnV0dG9uJ1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpbWFyeUJsb2NrUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgLyoqXG4gICAgKiAgaW1hZ2UgdXJsIHRvIHNob3dcbiAgICAqL1xuICAgIGltYWdldXJsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdGV4dCBhbmQgYnV0dG9uIHRvIHNob3dcbiAgICAgKi9cbiAgICBoZWFkOiBzdHJpbmdcbiAgICB0ZXh0OiBzdHJpbmdcbiAgICBjdGFfbmFtZTogc3RyaW5nXG4gICAgY3RhX2xpbms6IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIEJsb2NrIHR5cGVcbiAgICAgKi9cbiAgICB0eXBlPzogXCJkZWZhdWx0XCIgfCBcInZlcnRpY2FsXCJcbiAgICAvKipcbiAgICAgKiBJcyBtaXJyb3JcbiAgICAgKi9cbiAgICBtaXJyb3I/OiBib29sZWFuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgUHJpbWFyeUJsb2NrOiBGQzxQcmltYXJ5QmxvY2tQcm9wcz4gPSAoe1xuICAgIHR5cGUgID0gXCJ2ZXJ0aWNhbFwiLFxuICAgIG1pcnJvciA9IFwiZmFsc2VcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIGNvbnN0IEltYWdlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcInB4LTEyIHB5LTZcIn1cbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cInZlcnRpY2FsXCIgJiYgXCJwYi04XCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdldXJsP3Byb3BzLmltYWdldXJsOlRlc3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcInctYXV0b1wifVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICR7dHlwZSE9XCJ2ZXJ0aWNhbFwiICYmIFwicGwtMTJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH0gPlxuICAgICAgICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTR4bCdcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLmhlYWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1iYXNlIHB0LTQnXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgKHByb3BzLmN0YV9uYW1lICYmIHByb3BzLmN0YV9saW5rKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0ge3Byb3BzLmN0YV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSB7cHJvcHMuY3RhX2xpbmt9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uID0gJ25vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSBcImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICR7dHlwZT09XCJkZWZhdWx0XCIgJiYgXCJmbGV4XCJ9XG4gICAgICAgICAgICAgICAgJHttaXJyb3IgJiYgXCJmbGV4LXJvdy1yZXZlcnNlXCJ9XG4gICAgICAgICAgICAgICAgJHtwcm9wcy5jbGFzc05hbWU/cHJvcHMuY2xhc3NOYW1lOlwiXCJ9XG4gICAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKHR5cGU9PVwiZGVmYXVsdFwiIHx8IHR5cGU9PVwidmVydGljYWxcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=