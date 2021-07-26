"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TertiaryBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _Blank = _interopRequireDefault(require("./Blank.png"));

var _excluded = ["type", "mirror"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var TertiaryBlock = _ref => {
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
      className: "fontStyle-2xl"
    }, props.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, props.text)));
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "default" && "flex", "\n                ").concat(mirror && "flex-row-reverse", "\n                ").concat(props.className ? props.className : "", "\n            ")
  }), (type == "default" || type == "vertical") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.TertiaryBlock = TertiaryBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2t0ZXJ0aWFyeS9UZXJ0aWFyeUJsb2NrLnRzeCJdLCJuYW1lcyI6WyJUZXJ0aWFyeUJsb2NrIiwidHlwZSIsIm1pcnJvciIsInByb3BzIiwiSW1hZ2UiLCJpbWFnZXVybCIsIlRlc3RJbWFnZSIsIlRleHQiLCJoZWFkIiwidGV4dCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsYUFBcUMsR0FBRyxRQUkvQztBQUFBLE1BSmdEO0FBQ2xEQyxJQUFBQSxJQUFJLEdBQUksVUFEMEM7QUFFbERDLElBQUFBLE1BQU0sR0FBRztBQUZ5QyxHQUloRDtBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDaEIsd0JBQ0k7QUFDSSxNQUFBLFNBQVMsa0NBQ0hILElBQUksSUFBRSxVQUFOLElBQW9CLE1BRGpCO0FBRGIsb0JBS0k7QUFDSSxNQUFBLEdBQUcsRUFBRUUsS0FBSyxDQUFDRSxRQUFOLEdBQWVGLEtBQUssQ0FBQ0UsUUFBckIsR0FBOEJDLGNBRHZDO0FBRUksTUFBQSxTQUFTLGdEQUNITCxJQUFJLElBQUUsU0FBTixJQUFtQixRQURoQjtBQUZiLE1BTEosQ0FESjtBQWNILEdBZkQ7O0FBZ0JBLE1BQU1NLElBQUksR0FBRyxNQUFNO0FBQ2Ysd0JBQ0k7QUFDSSxNQUFBLFNBQVMsa0NBQ0hOLElBQUksSUFBRSxVQUFOLElBQW9CLHFCQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxTQUFTLHNDQUNIQSxJQUFJLElBQUUsVUFBTixJQUFvQixPQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxPQUlRRSxLQUFLLENBQUNLLElBSmQsQ0FMSixlQVlJO0FBQ0ksTUFBQSxTQUFTLEVBQUM7QUFEZCxPQUlRTCxLQUFLLENBQUNNLElBSmQsQ0FaSixDQUxKLENBREo7QUE0QkgsR0E3QkQ7O0FBOEJBLHNCQUNJLGlEQUNRTixLQURSO0FBRUksSUFBQSxTQUFTLDhCQUNIRixJQUFJLElBQUUsU0FBTixJQUFtQixNQURoQiwrQkFFSEMsTUFBTSxJQUFJLGtCQUZQLCtCQUdIQyxLQUFLLENBQUNPLFNBQU4sR0FBZ0JQLEtBQUssQ0FBQ08sU0FBdEIsR0FBZ0MsRUFIN0I7QUFGYixNQVNRLENBQUNULElBQUksSUFBRSxTQUFOLElBQW1CQSxJQUFJLElBQUUsVUFBMUIsa0JBQ0kseUVBQ0ksNkJBQUMsS0FBRCxPQURKLGVBRUksNkJBQUMsSUFBRCxPQUZKLENBVlosQ0FESjtBQXFCSCxDQXhFTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUZXN0SW1hZ2UgZnJvbSAnLi9CbGFuay5wbmcnXG5cblxuZXhwb3J0IGludGVyZmFjZSBDVEFJbmZvVHlwZSB7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVydGlhcnlCbG9ja1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgIC8qKlxuICAgICogIGltYWdlIHVybCB0byBzaG93XG4gICAgKi9cbiAgICBpbWFnZXVybD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIHRleHQgYW5kIGJ1dHRvbiB0byBzaG93XG4gICAgICovXG4gICAgaGVhZDogc3RyaW5nXG4gICAgdGV4dDogc3RyaW5nXG4gICAgLyoqXG4gICAgICogQmxvY2sgdHlwZVxuICAgICAqL1xuICAgIHR5cGU/OiBcImRlZmF1bHRcIiB8IFwidmVydGljYWxcIlxuICAgIC8qKlxuICAgICAqIElzIG1pcnJvclxuICAgICAqL1xuICAgIG1pcnJvcj86IGJvb2xlYW5cbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUZXJ0aWFyeUJsb2NrOiBGQzxUZXJ0aWFyeUJsb2NrUHJvcHM+ID0gKHtcbiAgICB0eXBlICA9IFwidmVydGljYWxcIixcbiAgICBtaXJyb3IgPSBcImZhbHNlXCIsXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCBJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cInZlcnRpY2FsXCIgJiYgXCJwYi02XCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdldXJsP3Byb3BzLmltYWdldXJsOlRlc3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcInctYXV0b1wifVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcImZsZXgganVzdGlmeS1jZW50ZXJcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlIT1cInZlcnRpY2FsXCIgJiYgXCJwbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUtMnhsJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgcHQtMidcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcImZsZXhcIn1cbiAgICAgICAgICAgICAgICAke21pcnJvciAmJiBcImZsZXgtcm93LXJldmVyc2VcIn1cbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZT9wcm9wcy5jbGFzc05hbWU6XCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAodHlwZT09XCJkZWZhdWx0XCIgfHwgdHlwZT09XCJ2ZXJ0aWNhbFwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ==