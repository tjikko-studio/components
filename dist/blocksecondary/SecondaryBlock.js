"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecondaryBlock = void 0;

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
    }, props.info.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, props.info.text)));
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "\n                ".concat(type == "default" && "flex", "\n                ").concat(mirror && "flex-row-reverse", "\n                ").concat(props.className ? props.className : "", "\n            ")
  }), (type == "default" || type == "vertical") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.SecondaryBlock = SecondaryBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzZWNvbmRhcnkvU2Vjb25kYXJ5QmxvY2sudHN4Il0sIm5hbWVzIjpbIlNlY29uZGFyeUJsb2NrIiwidHlwZSIsIm1pcnJvciIsInByb3BzIiwiSW1hZ2UiLCJpbWFnZXVybCIsIlRlc3RJbWFnZSIsIlRleHQiLCJpbmZvIiwiaGVhZCIsInRleHQiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBNkJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGNBQXVDLEdBQUcsUUFJakQ7QUFBQSxNQUprRDtBQUNwREMsSUFBQUEsSUFBSSxHQUFJLFVBRDRDO0FBRXBEQyxJQUFBQSxNQUFNLEdBQUc7QUFGMkMsR0FJbEQ7QUFBQSxNQURDQyxLQUNEOztBQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2hCLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNISCxJQUFJLElBQUUsVUFBTixJQUFvQixNQURqQjtBQURiLG9CQUtJO0FBQ0ksTUFBQSxHQUFHLEVBQUVFLEtBQUssQ0FBQ0UsUUFBTixHQUFlRixLQUFLLENBQUNFLFFBQXJCLEdBQThCQyxjQUR2QztBQUVJLE1BQUEsU0FBUyxnREFDSEwsSUFBSSxJQUFFLFNBQU4sSUFBbUIsUUFEaEI7QUFGYixNQUxKLENBREo7QUFjSCxHQWZEOztBQWdCQSxNQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNmLHdCQUNJO0FBQ0ksTUFBQSxTQUFTLGtDQUNITixJQUFJLElBQUUsVUFBTixJQUFvQixxQkFEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxzQ0FDSEEsSUFBSSxJQUFFLFVBQU4sSUFBb0IsT0FEakI7QUFEYixvQkFLSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUUUsS0FBSyxDQUFDSyxJQUFOLENBQVdDLElBSm5CLENBTEosZUFZSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FJUU4sS0FBSyxDQUFDSyxJQUFOLENBQVdFLElBSm5CLENBWkosQ0FMSixDQURKO0FBNEJILEdBN0JEOztBQThCQSxzQkFDSSxpREFDUVAsS0FEUjtBQUVJLElBQUEsU0FBUyw4QkFDSEYsSUFBSSxJQUFFLFNBQU4sSUFBbUIsTUFEaEIsK0JBRUhDLE1BQU0sSUFBSSxrQkFGUCwrQkFHSEMsS0FBSyxDQUFDUSxTQUFOLEdBQWdCUixLQUFLLENBQUNRLFNBQXRCLEdBQWdDLEVBSDdCO0FBRmIsTUFTUSxDQUFDVixJQUFJLElBQUUsU0FBTixJQUFtQkEsSUFBSSxJQUFFLFVBQTFCLGtCQUNJLHlFQUNJLDZCQUFDLEtBQUQsT0FESixlQUVJLDZCQUFDLElBQUQsT0FGSixDQVZaLENBREo7QUFxQkgsQ0F4RU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVGVzdEltYWdlIGZyb20gJy4vQmxhbmsucG5nJ1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBSW5mb1R5cGUge1xuICAgIGhlYWQ6IHN0cmluZ1xuICAgIHRleHQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlY29uZGFyeUJsb2NrUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgLyoqXG4gICAgKiAgaW1hZ2UgdXJsIHRvIHNob3dcbiAgICAqL1xuICAgIGltYWdldXJsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdGV4dCBhbmQgYnV0dG9uIHRvIHNob3dcbiAgICAgKi9cbiAgICBpbmZvOiBDVEFJbmZvVHlwZVxuICAgIC8qKlxuICAgICAqIEJsb2NrIHR5cGVcbiAgICAgKi9cbiAgICB0eXBlPzogXCJkZWZhdWx0XCIgfCBcInZlcnRpY2FsXCJcbiAgICAvKipcbiAgICAgKiBJcyBtaXJyb3JcbiAgICAgKi9cbiAgICBtaXJyb3I/OiBib29sZWFuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5QmxvY2s6IEZDPFNlY29uZGFyeUJsb2NrUHJvcHM+ID0gKHtcbiAgICB0eXBlICA9IFwidmVydGljYWxcIixcbiAgICBtaXJyb3IgPSBcImZhbHNlXCIsXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBjb25zdCBJbWFnZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cInZlcnRpY2FsXCIgJiYgXCJwYi02XCJ9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmltYWdldXJsP3Byb3BzLmltYWdldXJsOlRlc3RJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZ1xuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlPT1cImRlZmF1bHRcIiAmJiBcInctYXV0b1wifVxuICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAke3R5cGUhPVwidmVydGljYWxcIiAmJiBcImZsZXgganVzdGlmeS1jZW50ZXJcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICAgICAgICAgJHt0eXBlIT1cInZlcnRpY2FsXCIgJiYgXCJwbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUtNHhsJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5mby5oZWFkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmFzZSBwdC0yJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5mby50ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICR7dHlwZT09XCJkZWZhdWx0XCIgJiYgXCJmbGV4XCJ9XG4gICAgICAgICAgICAgICAgJHttaXJyb3IgJiYgXCJmbGV4LXJvdy1yZXZlcnNlXCJ9XG4gICAgICAgICAgICAgICAgJHtwcm9wcy5jbGFzc05hbWU/cHJvcHMuY2xhc3NOYW1lOlwiXCJ9XG4gICAgICAgICAgICBgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgKHR5cGU9PVwiZGVmYXVsdFwiIHx8IHR5cGU9PVwidmVydGljYWxcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=