"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Text = _ref => {
  var {
    headerText = '',
    paragraph = '',
    className
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "p-6 ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "text-gray-100 text-lg tracking-wider uppercase font-semibold"
  }, headerText), /*#__PURE__*/_react.default.createElement("hr", {
    className: "border-brand-600 mt-4"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-100 text-base mt-8"
  }, paragraph));
};

exports.Text = Text;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1RleHQudHN4Il0sIm5hbWVzIjpbIlRleHQiLCJoZWFkZXJUZXh0IiwicGFyYWdyYXBoIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsSUFBbUIsR0FBRyxRQUk3QjtBQUFBLE1BSjhCO0FBQ2xDQyxJQUFBQSxVQUFVLEdBQUcsRUFEcUI7QUFFbENDLElBQUFBLFNBQVMsR0FBRyxFQUZzQjtBQUdsQ0MsSUFBQUE7QUFIa0MsR0FJOUI7QUFFSixzQkFDRTtBQUNFLElBQUEsU0FBUyxnQkFBU0EsU0FBVDtBQURYLGtCQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUE4RUYsVUFBOUUsQ0FIRixlQUlFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxJQUpGLGVBS0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLEtBQ0dDLFNBREgsQ0FMRixDQURGO0FBV0QsQ0FqQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiB0ZXh0IHRvIGRpc3BsYXkgZm9yIGhlYWRpbmdcbiAgICovXG4gIGhlYWRlclRleHQ6IHN0cmluZ1xuICAvKipcbiAgICogdGV4dCB0byBkaXNwbGF5IGZvciBwYXJhZ3JhcGhcbiAgICovXG4gIHBhcmFncmFwaDogc3RyaW5nXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHQ6IEZDPFRleHRQcm9wcz4gPSAoe1xuICBoZWFkZXJUZXh0ID0gJycsXG4gIHBhcmFncmFwaCA9ICcnLFxuICBjbGFzc05hbWVcbn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YHAtNiAke2NsYXNzTmFtZX1gfVxuICAgID5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIHRleHQtbGcgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj57aGVhZGVyVGV4dH08L2g1PlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImJvcmRlci1icmFuZC02MDAgbXQtNFwiIC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMTAwIHRleHQtYmFzZSBtdC04XCI+XG4gICAgICAgIHtwYXJhZ3JhcGh9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==