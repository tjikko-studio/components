"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuote = void 0;

var _react = _interopRequireDefault(require("react"));

var _image_back = _interopRequireDefault(require("./image_back.png"));

var _excluded = ["speech", "avatarUrl", "customerName"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BlockQuote = _ref => {
  var {
    speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    avatarUrl = _image_back.default,
    customerName = 'Maria Lopez, VP of Design at Meshery'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "flex flex-col space-y-6"
  }, props), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-lg text-center text-brand-900"
  }, "\u201C", speech, "\u201D"), /*#__PURE__*/_react.default.createElement("img", {
    className: "w-20 h-20 mx-auto rounded-full",
    src: avatarUrl ? avatarUrl : _image_back.default,
    alt: ""
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs text-center uppercase"
  }, customerName));
};

exports.BlockQuote = BlockQuote;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2txdW90ZS9CbG9ja1F1b3RlLnRzeCJdLCJuYW1lcyI6WyJCbG9ja1F1b3RlIiwic3BlZWNoIiwiYXZhdGFyVXJsIiwiSW1hZ2VCYWNrIiwiY3VzdG9tZXJOYW1lIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBaUJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFVBQStCLEdBQUcsUUFLekM7QUFBQSxNQUwwQztBQUM1Q0MsSUFBQUEsTUFBTSxHQUFHLDRGQURtQztBQUU1Q0MsSUFBQUEsU0FBUyxHQUFHQyxtQkFGZ0M7QUFHNUNDLElBQUFBLFlBQVksR0FBRztBQUg2QixHQUsxQztBQUFBLE1BRENDLEtBQ0Q7O0FBRUYsc0JBQ0k7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ1FBLEtBRFIsZ0JBR0k7QUFDSSxJQUFBLFNBQVM7QUFEYixlQUdJSixNQUhKLFdBSEosZUFPSTtBQUNJLElBQUEsU0FBUyxFQUFDLGdDQURkO0FBRUksSUFBQSxHQUFHLEVBQUdDLFNBQVMsR0FBQ0EsU0FBRCxHQUFXQyxtQkFGOUI7QUFHSSxJQUFBLEdBQUcsRUFBQztBQUhSLElBUEosZUFZSTtBQUFHLElBQUEsU0FBUztBQUFaLEtBQWlEQyxZQUFqRCxDQVpKLENBREo7QUFnQkgsQ0F2Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2VCYWNrIGZyb20gJy4vaW1hZ2VfYmFjay5wbmcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUXVvdGVQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogc3BlZWNoIHRvIGRpc3BsYXkgb24gQmxvY2tRdW90ZVxuICAgICAqL1xuICAgIHNwZWVjaD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIGF2YXRhciB0byBkaXNwbGF5IG9uIEJsb2NrUXVvdGVcbiAgICAgKi9cbiAgICBhdmF0YXJVcmw/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBjdXNvbXRlciBuYW1lIHRvIGRpc3BsYXkgb24gQmxvY2tRdW90ZVxuICAgICAqL1xuICAgIGN1c3RvbWVyTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCbG9ja1F1b3RlOiBGQzxCbG9ja1F1b3RlUHJvcHM+ID0gKHtcbiAgICBzcGVlY2ggPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQuJyxcbiAgICBhdmF0YXJVcmwgPSBJbWFnZUJhY2ssXG4gICAgY3VzdG9tZXJOYW1lID0gJ01hcmlhIExvcGV6LCBWUCBvZiBEZXNpZ24gYXQgTWVzaGVyeScsXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktNidcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb250LW5vcm1hbCB0ZXh0LWxnIHRleHQtY2VudGVyIHRleHQtYnJhbmQtOTAwYH1cblxuICAgICAgICAgICAgPuKAnHsgc3BlZWNoIH3igJ08L3A+XG4gICAgICAgICAgICA8aW1nIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMjAgaC0yMCBteC1hdXRvIHJvdW5kZWQtZnVsbFwiIFxuICAgICAgICAgICAgICAgIHNyYz17IGF2YXRhclVybD9hdmF0YXJVcmw6SW1hZ2VCYWNrIH0gXG4gICAgICAgICAgICAgICAgYWx0PVwiXCIgXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtgdGV4dC14cyB0ZXh0LWNlbnRlciB1cHBlcmNhc2VgfT57IGN1c3RvbWVyTmFtZSB9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=