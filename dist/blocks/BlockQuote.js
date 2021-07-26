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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0Jsb2NrUXVvdGUudHN4Il0sIm5hbWVzIjpbIkJsb2NrUXVvdGUiLCJzcGVlY2giLCJhdmF0YXJVcmwiLCJhdmF0YXJBbHQiLCJjdXN0b21lck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQXFCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxVQUErQixHQUFHLFFBS3pDO0FBQUEsTUFMMEM7QUFDNUNDLElBQUFBLE1BQU0sR0FBRyw0RkFEbUM7QUFFNUNDLElBQUFBLFNBQVMsR0FBRyxFQUZnQztBQUc1Q0MsSUFBQUEsU0FBUyxHQUFHLEVBSGdDO0FBSTVDQyxJQUFBQSxZQUFZLEdBQUc7QUFKNkIsR0FLMUM7QUFFRixzQkFDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBRUk7QUFDSSxJQUFBLFNBQVM7QUFEYixlQUdHSCxNQUhILFdBRkosZUFNSTtBQUNJLElBQUEsU0FBUyxFQUFDLGdDQURkO0FBRUksSUFBQSxHQUFHLEVBQUVDLFNBRlQ7QUFHSSxJQUFBLEdBQUcsRUFBRUM7QUFIVCxJQU5KLGVBV0k7QUFBRyxJQUFBLFNBQVM7QUFBWixLQUFnREMsWUFBaEQsQ0FYSixDQURKO0FBZUgsQ0F0Qk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2NrUXVvdGVQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogc3BlZWNoIHRvIGRpc3BsYXkgb24gQmxvY2tRdW90ZVxuICAgICAqL1xuICAgIHNwZWVjaD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIGF2YXRhciB0byBkaXNwbGF5IG9uIEJsb2NrUXVvdGVcbiAgICAgKi9cbiAgICBhdmF0YXJVcmw/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBhbHRlcm5hdGUgc3RyaW5nIGZvciBhdmF0YXJcbiAgICAgKi9cbiAgICBhdmF0YXJBbHQ/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBjdXNvbXRlciBuYW1lIHRvIGRpc3BsYXkgb24gQmxvY2tRdW90ZVxuICAgICAqL1xuICAgIGN1c3RvbWVyTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCbG9ja1F1b3RlOiBGQzxCbG9ja1F1b3RlUHJvcHM+ID0gKHtcbiAgICBzcGVlY2ggPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQuJyxcbiAgICBhdmF0YXJVcmwgPSAnJyxcbiAgICBhdmF0YXJBbHQgPSAnJyxcbiAgICBjdXN0b21lck5hbWUgPSAnTWFyaWEgTG9wZXosIFZQIG9mIERlc2lnbiBhdCBNZXNoZXJ5J1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgc3BhY2UteS02J1xuICAgICAgICA+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvbnQtbm9ybWFsIHRleHQtbGcgdGV4dC1jZW50ZXIgdGV4dC1icmFuZC05MDBgfVxuXG4gICAgICAgICAgICA+4oCce3NwZWVjaH3igJ08L3A+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBoLTIwIG14LWF1dG8gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgICBzcmM9e2F2YXRhclVybH1cbiAgICAgICAgICAgICAgICBhbHQ9e2F2YXRhckFsdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LXhzIHRleHQtY2VudGVyIHVwcGVyY2FzZWB9PntjdXN0b21lck5hbWV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=