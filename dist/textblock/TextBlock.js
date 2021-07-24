"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextBlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["headerText", "paragraph"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var TextBlock = _ref => {
  var {
    headerText = '',
    paragraph = ''
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "p-6\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-gray-100 text-lg tracking-wider uppercase font-semibold"
  }, headerText), /*#__PURE__*/_react.default.createElement("hr", {
    className: "border-brand-600 mt-4"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-100 text-base mt-8"
  }, paragraph));
};

exports.TextBlock = TextBlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGV4dGJsb2NrL1RleHRCbG9jay50c3giXSwibmFtZXMiOlsiVGV4dEJsb2NrIiwiaGVhZGVyVGV4dCIsInBhcmFncmFwaCIsInByb3BzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUE2QixHQUFHLFFBSXZDO0FBQUEsTUFKd0M7QUFDM0NDLElBQUFBLFVBQVUsR0FBRyxFQUQ4QjtBQUUzQ0MsSUFBQUEsU0FBUyxHQUFHO0FBRitCLEdBSXhDO0FBQUEsTUFEQ0MsS0FDRDs7QUFFRixzQkFDSSxpREFDUUEsS0FEUjtBQUVJLElBQUEsU0FBUyxpQ0FDSEEsS0FBSyxDQUFDQyxTQUFOLEdBQWdCRCxLQUFLLENBQUNDLFNBQXRCLEdBQWdDLEVBRDdCO0FBRmIsbUJBTUk7QUFBSSxJQUFBLFNBQVMsRUFBRztBQUFoQixLQUFnRkgsVUFBaEYsQ0FOSixlQU9JO0FBQUksSUFBQSxTQUFTLEVBQUc7QUFBaEIsSUFQSixlQVFJO0FBQUcsSUFBQSxTQUFTLEVBQUc7QUFBZixLQUNLQyxTQURMLENBUkosQ0FESjtBQWNILENBcEJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRCbG9ja1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgICAvKipcbiAgICAgKiB0ZXh0IHRvIGRpc3BsYXkgZm9yIGhlYWRpbmdcbiAgICAgKi9cbiAgICBoZWFkZXJUZXh0OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiB0ZXh0IHRvIGRpc3BsYXkgZm9yIHBhcmFncmFwaFxuICAgICAqL1xuICAgIHBhcmFncmFwaDogc3RyaW5nXG5cbiAgICBjbGFzc05hbWU/OiBzdHJpbmdcbiAgIFxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0QmxvY2s6IEZDPFRleHRCbG9ja1Byb3BzPiA9ICh7XG4gICBoZWFkZXJUZXh0ID0gJycsXG4gICBwYXJhZ3JhcGggPSAnJyxcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNlxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTonJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWUgPSBcInRleHQtZ3JheS0xMDAgdGV4dC1sZyB0cmFja2luZy13aWRlciB1cHBlcmNhc2UgZm9udC1zZW1pYm9sZFwiPntoZWFkZXJUZXh0fTwvaDU+XG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lID0gXCJib3JkZXItYnJhbmQtNjAwIG10LTRcIi8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWUgPSBcInRleHQtZ3JheS0xMDAgdGV4dC1iYXNlIG10LThcIj5cbiAgICAgICAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il19