"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FAQ = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var FAQ = _ref => {
  var {
    question,
    answer = "",
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-900 ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "font-semibold text-lg leading-7"
  }, question), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-2 text-base leading-6"
  }, answer));
};

exports.FAQ = FAQ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0ZBUS50c3giXSwibmFtZXMiOlsiRkFRIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxHQUFpQixHQUFHLFFBSTNCO0FBQUEsTUFKNEI7QUFDaENDLElBQUFBLFFBRGdDO0FBRWhDQyxJQUFBQSxNQUFNLEdBQUcsRUFGdUI7QUFHaENDLElBQUFBO0FBSGdDLEdBSTVCO0FBQ0osc0JBQ0U7QUFDRSxJQUFBLFNBQVMsMEJBQW1CQSxTQUFuQjtBQURYLGtCQUdFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixLQUdHRixRQUhILENBSEYsZUFRRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR0MsTUFISCxDQVJGLENBREY7QUFnQkQsQ0FyQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgRkFRUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogdGV4dCB0byBzaG93IGFzIHF1ZXN0aW9uXG4gICAqL1xuICBxdWVzdGlvbjogc3RyaW5nXG4gIC8qKlxuICAgKiB0ZXh0IHRvIHNob3cgYXMgYW5zd2VyXG4gICAqL1xuICBhbnN3ZXI/OiBzdHJpbmdcblxuICAvKipcbiAgICogQWRkaXRpb25hbCBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYXBwZW5kXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBGQVE6IEZDPEZBUVByb3BzPiA9ICh7XG4gIHF1ZXN0aW9uLFxuICBhbnN3ZXIgPSBcIlwiLFxuICBjbGFzc05hbWVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2B0ZXh0LWdyYXktOTAwICR7Y2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgdGV4dC1sZyBsZWFkaW5nLTcnXG4gICAgICA+XG4gICAgICAgIHtxdWVzdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J3B0LTIgdGV4dC1iYXNlIGxlYWRpbmctNidcbiAgICAgID5cbiAgICAgICAge2Fuc3dlcn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=