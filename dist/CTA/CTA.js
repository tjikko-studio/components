"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTA = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../buttons/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var CTA = _ref => {
  var {
    ctas = [],
    caption = "",
    description = ""
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full py-24 text-center bg-gray-900"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-4xl text-gray-50"
  }, caption && caption !== "" ? caption : "We can also create any simulated realities"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-lg text-gray-50 mt-4 leading-7 mb-7"
  }, description && description !== "" ? description : "for any use case you may have in mind"), /*#__PURE__*/_react.default.createElement("div", {
    className: "inline-flex space-x-4"
  }, ctas.map((cta, index) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: cta.label,
    url: cta.link,
    type: index === 0 ? 'primary' : 'tertiary',
    icon: "none",
    size: "large"
  }))));
};

exports.CTA = CTA;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvQ1RBL0NUQS50c3giXSwibmFtZXMiOlsiQ1RBIiwiY3RhcyIsImNhcHRpb24iLCJkZXNjcmlwdGlvbiIsIm1hcCIsImN0YSIsImluZGV4IiwibGFiZWwiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFzQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBaUIsR0FBRyxRQUkzQjtBQUFBLE1BSjRCO0FBQ2hDQyxJQUFBQSxJQUFJLEdBQUcsRUFEeUI7QUFFaENDLElBQUFBLE9BQU8sR0FBRyxFQUZzQjtBQUdoQ0MsSUFBQUEsV0FBVyxHQUFHO0FBSGtCLEdBSTVCO0FBRUosc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUE2Q0QsT0FBTyxJQUFJQSxPQUFPLEtBQUssRUFBdkIsR0FBNEJBLE9BQTVCLEdBQXNDLDRDQUFuRixDQURGLGVBRUU7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQTBEQyxXQUFXLElBQUlBLFdBQVcsS0FBSyxFQUEvQixHQUFvQ0EsV0FBcEMsR0FBa0QsdUNBQTVHLENBRkYsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRUYsSUFBSSxDQUFDRyxHQUFMLENBQVMsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFOLGtCQUNULDZCQUFDLGNBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUQsR0FBRyxDQUFDRSxLQURaO0FBRUUsSUFBQSxHQUFHLEVBQUVGLEdBQUcsQ0FBQ0csSUFGWDtBQUdFLElBQUEsSUFBSSxFQUFFRixLQUFLLEtBQUssQ0FBVixHQUFjLFNBQWQsR0FBMEIsVUFIbEM7QUFJRSxJQUFBLElBQUksRUFBQyxNQUpQO0FBS0UsSUFBQSxJQUFJLEVBQUM7QUFMUCxJQURBLENBREYsQ0FIRixDQURGO0FBaUJELENBdkJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9ucy9CdXR0b24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBVHlwZSB7XG4gIGxhYmVsPzogc3RyaW5nXG4gIGxpbms/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDVEFQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBDVEEgZGF0YSBsaXN0XG4gICAqL1xuICBjdGFzPzogQXJyYXk8Q1RBVHlwZT5cbiAgLyoqXG4gICAqIENhcHRpb24gc3RyaW5nXG4gICAqL1xuICBjYXB0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBkZXNjcmlwdGlvbiBzdHJpbmdcbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IENUQTogRkM8Q1RBUHJvcHM+ID0gKHtcbiAgY3RhcyA9IFtdLFxuICBjYXB0aW9uID0gXCJcIixcbiAgZGVzY3JpcHRpb24gPSBcIlwiXG59KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS0yNCB0ZXh0LWNlbnRlciBiZy1ncmF5LTkwMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udFN0eWxlLTR4bCB0ZXh0LWdyYXktNTAnPnsgY2FwdGlvbiAmJiBjYXB0aW9uICE9PSBcIlwiID8gY2FwdGlvbiA6IFwiV2UgY2FuIGFsc28gY3JlYXRlIGFueSBzaW11bGF0ZWQgcmVhbGl0aWVzXCIgfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS01MCBtdC00IGxlYWRpbmctNyBtYi03XCI+eyBkZXNjcmlwdGlvbiAmJiBkZXNjcmlwdGlvbiAhPT0gXCJcIiA/IGRlc2NyaXB0aW9uIDogXCJmb3IgYW55IHVzZSBjYXNlIHlvdSBtYXkgaGF2ZSBpbiBtaW5kXCIgfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggc3BhY2UteC00XCI+XG4gICAgICB7IGN0YXMubWFwKChjdGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB0ZXh0PXtjdGEubGFiZWx9XG4gICAgICAgICAgdXJsPXtjdGEubGlua31cbiAgICAgICAgICB0eXBlPXtpbmRleCA9PT0gMCA/ICdwcmltYXJ5JyA6ICd0ZXJ0aWFyeSd9XG4gICAgICAgICAgaWNvbj0nbm9uZSdcbiAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgLz5cbiAgICAgICkpIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=