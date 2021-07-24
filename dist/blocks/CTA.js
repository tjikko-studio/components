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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0NUQS50c3giXSwibmFtZXMiOlsiQ1RBIiwidGl0bGUiLCJib2R5IiwiY3RhcyIsIm1hcCIsImN0YSIsImluZGV4IiwibGluayIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUF1QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsR0FBaUIsR0FBRyxRQUkzQjtBQUFBLE1BSjRCO0FBQ2hDQyxJQUFBQSxLQUFLLEdBQUcsRUFEd0I7QUFFaENDLElBQUFBLElBQUksR0FBRyxFQUZ5QjtBQUdoQ0MsSUFBQUEsSUFBSSxHQUFHO0FBSHlCLEdBSTVCO0FBQ0osc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUE2Q0YsS0FBN0MsQ0FERixlQUVFO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixLQUEwREMsSUFBMUQsQ0FGRixlQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sa0JBQ1QsNkJBQUMsY0FBRDtBQUNFLElBQUEsR0FBRyxFQUFFRCxHQUFHLENBQUNFLElBRFg7QUFFRSxJQUFBLElBQUksRUFBRUYsR0FBRyxDQUFDRyxLQUZaO0FBR0UsSUFBQSxHQUFHLEVBQUVILEdBQUcsQ0FBQ0UsSUFIWDtBQUlFLElBQUEsSUFBSSxFQUFFRCxLQUFLLEtBQUssQ0FBVixHQUFjLFNBQWQsR0FBMEIsVUFKbEM7QUFLRSxJQUFBLElBQUksRUFBQyxNQUxQO0FBTUUsSUFBQSxJQUFJLEVBQUM7QUFOUCxJQURBLENBREYsQ0FIRixDQURGO0FBa0JELENBdkJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9ucy9CdXR0b24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBVHlwZSB7XG4gIGxhYmVsPzogc3RyaW5nXG4gIGxpbms/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDVEFQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBDYXB0aW9uIHN0cmluZ1xuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIERlc2NyaXB0aW9uXG4gICAqL1xuICBib2R5Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBBY3Rpb24gYnV0dG9ucyAvIGxpbmtzXG4gICAqL1xuICBjdGFzPzogQXJyYXk8Q1RBVHlwZT5cblxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBDVEE6IEZDPENUQVByb3BzPiA9ICh7XG4gIHRpdGxlID0gXCJcIixcbiAgYm9keSA9IFwiXCIsXG4gIGN0YXMgPSBbXVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB5LTI0IHRleHQtY2VudGVyIGJnLWdyYXktOTAwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPSdmb250U3R5bGUtNHhsIHRleHQtZ3JheS01MCc+eyB0aXRsZSB9PC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTUwIG10LTQgbGVhZGluZy03IG1iLTdcIj57IGJvZHkgfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggc3BhY2UteC00XCI+XG4gICAgICB7IGN0YXMubWFwKChjdGEsIGluZGV4KSA9PiAoXG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBrZXk9e2N0YS5saW5rfVxuICAgICAgICAgIHRleHQ9e2N0YS5sYWJlbH1cbiAgICAgICAgICB1cmw9e2N0YS5saW5rfVxuICAgICAgICAgIHR5cGU9e2luZGV4ID09PSAwID8gJ3ByaW1hcnknIDogJ3RlcnRpYXJ5J31cbiAgICAgICAgICBpY29uPSdub25lJ1xuICAgICAgICAgIHNpemU9J2xhcmdlJ1xuICAgICAgICAvPlxuICAgICAgKSkgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==