"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockQuote = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var BlockQuote = _ref => {
  var {
    speech = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    avatarUrl = '',
    avatarAlt = '',
    customerName = 'Maria Lopez, VP of Design at Meshery'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col space-y-6"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "font-normal text-lg text-center text-brand-900"
  }, "\u201C", speech, "\u201D"), /*#__PURE__*/_react.default.createElement("img", {
    className: "w-20 h-20 mx-auto rounded-full",
    src: avatarUrl,
    alt: avatarAlt
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-xs text-center uppercase"
  }, customerName));
};

exports.BlockQuote = BlockQuote;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0Jsb2NrUXVvdGUudHN4Il0sIm5hbWVzIjpbIkJsb2NrUXVvdGUiLCJzcGVlY2giLCJhdmF0YXJVcmwiLCJhdmF0YXJBbHQiLCJjdXN0b21lck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUErQixHQUFHLFFBS3pDO0FBQUEsTUFMMEM7QUFDOUNDLElBQUFBLE1BQU0sR0FBRyw0RkFEcUM7QUFFOUNDLElBQUFBLFNBQVMsR0FBRyxFQUZrQztBQUc5Q0MsSUFBQUEsU0FBUyxHQUFHLEVBSGtDO0FBSTlDQyxJQUFBQSxZQUFZLEdBQUc7QUFKK0IsR0FLMUM7QUFFSixzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBRUU7QUFDRSxJQUFBLFNBQVM7QUFEWCxlQUdHSCxNQUhILFdBRkYsZUFNRTtBQUNFLElBQUEsU0FBUyxFQUFDLGdDQURaO0FBRUUsSUFBQSxHQUFHLEVBQUVDLFNBRlA7QUFHRSxJQUFBLEdBQUcsRUFBRUM7QUFIUCxJQU5GLGVBV0U7QUFBRyxJQUFBLFNBQVM7QUFBWixLQUFnREMsWUFBaEQsQ0FYRixDQURGO0FBZUQsQ0F0Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUXVvdGVQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBzcGVlY2ggdG8gZGlzcGxheSBvbiBCbG9ja1F1b3RlXG4gICAqL1xuICBzcGVlY2g/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGF2YXRhciB0byBkaXNwbGF5IG9uIEJsb2NrUXVvdGVcbiAgICovXG4gIGF2YXRhclVybD86IHN0cmluZ1xuICAvKipcbiAgICogYWx0ZXJuYXRlIHN0cmluZyBmb3IgYXZhdGFyXG4gICAqL1xuICBhdmF0YXJBbHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGN1c29tdGVyIG5hbWUgdG8gZGlzcGxheSBvbiBCbG9ja1F1b3RlXG4gICAqL1xuICBjdXN0b21lck5hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgQmxvY2tRdW90ZTogRkM8QmxvY2tRdW90ZVByb3BzPiA9ICh7XG4gIHNwZWVjaCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudC4nLFxuICBhdmF0YXJVcmwgPSAnJyxcbiAgYXZhdGFyQWx0ID0gJycsXG4gIGN1c3RvbWVyTmFtZSA9ICdNYXJpYSBMb3BleiwgVlAgb2YgRGVzaWduIGF0IE1lc2hlcnknXG59KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBzcGFjZS15LTYnXG4gICAgPlxuICAgICAgPHBcbiAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1ub3JtYWwgdGV4dC1sZyB0ZXh0LWNlbnRlciB0ZXh0LWJyYW5kLTkwMGB9XG5cbiAgICAgID7igJx7c3BlZWNofeKAnTwvcD5cbiAgICAgIDxpbWdcbiAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIG14LWF1dG8gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgc3JjPXthdmF0YXJVcmx9XG4gICAgICAgIGFsdD17YXZhdGFyQWx0fVxuICAgICAgLz5cbiAgICAgIDxwIGNsYXNzTmFtZT17YHRleHQteHMgdGV4dC1jZW50ZXIgdXBwZXJjYXNlYH0+e2N1c3RvbWVyTmFtZX08L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==