"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTA = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var CTA = _ref => {
  var {
    title = "",
    body = "",
    ctas = []
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full py-24 text-center bg-gray-900"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-4xl text-gray-50"
  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-lg text-gray-50 mt-4 leading-7 mb-7"
  }, body), /*#__PURE__*/_react.default.createElement("div", {
    className: "inline-flex space-x-4"
  }, ctas.map((cta, index) => /*#__PURE__*/_react.default.createElement(_Button.Button, {
    key: cta.link,
    text: cta.label,
    url: cta.link,
    type: index === 0 ? 'primary' : 'tertiary',
    icon: "none",
    size: "large"
  }))));
};

exports.CTA = CTA;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0NUQS50c3giXSwibmFtZXMiOlsiQ1RBIiwidGl0bGUiLCJib2R5IiwiY3RhcyIsIm1hcCIsImN0YSIsImluZGV4IiwibGluayIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBaUIsR0FBRyxRQUkzQjtBQUFBLE1BSjRCO0FBQ2hDQyxJQUFBQSxLQUFLLEdBQUcsRUFEd0I7QUFFaENDLElBQUFBLElBQUksR0FBRyxFQUZ5QjtBQUdoQ0MsSUFBQUEsSUFBSSxHQUFHO0FBSHlCLEdBSTVCO0FBQ0osc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUE2Q0YsS0FBN0MsQ0FERixlQUVFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixLQUEwREMsSUFBMUQsQ0FGRixlQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sa0JBQ1QsNkJBQUMsY0FBRDtBQUNFLElBQUEsR0FBRyxFQUFFRCxHQUFHLENBQUNFLElBRFg7QUFFRSxJQUFBLElBQUksRUFBRUYsR0FBRyxDQUFDRyxLQUZaO0FBR0UsSUFBQSxHQUFHLEVBQUVILEdBQUcsQ0FBQ0UsSUFIWDtBQUlFLElBQUEsSUFBSSxFQUFFRCxLQUFLLEtBQUssQ0FBVixHQUFjLFNBQWQsR0FBMEIsVUFKbEM7QUFLRSxJQUFBLElBQUksRUFBQyxNQUxQO0FBTUUsSUFBQSxJQUFJLEVBQUM7QUFOUCxJQURBLENBREYsQ0FIRixDQURGO0FBa0JELENBdkJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uJ1xuXG5leHBvcnQgaW50ZXJmYWNlIENUQVR5cGUge1xuICBsYWJlbD86IHN0cmluZ1xuICBsaW5rPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogQ2FwdGlvbiBzdHJpbmdcbiAgICovXG4gIHRpdGxlPzogc3RyaW5nXG4gIC8qKlxuICAgKiBEZXNjcmlwdGlvblxuICAgKi9cbiAgYm9keT86IHN0cmluZ1xuICAvKipcbiAgICogQWN0aW9uIGJ1dHRvbnMgLyBsaW5rc1xuICAgKi9cbiAgY3Rhcz86IEFycmF5PENUQVR5cGU+XG5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgQ1RBOiBGQzxDVEFQcm9wcz4gPSAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGJvZHkgPSBcIlwiLFxuICBjdGFzID0gW11cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweS0yNCB0ZXh0LWNlbnRlciBiZy1ncmF5LTkwMFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udFN0eWxlLTR4bCB0ZXh0LWdyYXktNTAnPnsgdGl0bGUgfTwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS01MCBtdC00IGxlYWRpbmctNyBtYi03XCI+eyBib2R5IH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubGluZS1mbGV4IHNwYWNlLXgtNFwiPlxuICAgICAgeyBjdGFzLm1hcCgoY3RhLCBpbmRleCkgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAga2V5PXtjdGEubGlua31cbiAgICAgICAgICB0ZXh0PXtjdGEubGFiZWx9XG4gICAgICAgICAgdXJsPXtjdGEubGlua31cbiAgICAgICAgICB0eXBlPXtpbmRleCA9PT0gMCA/ICdwcmltYXJ5JyA6ICd0ZXJ0aWFyeSd9XG4gICAgICAgICAgaWNvbj0nbm9uZSdcbiAgICAgICAgICBzaXplPSdsYXJnZSdcbiAgICAgICAgLz5cbiAgICAgICkpIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=