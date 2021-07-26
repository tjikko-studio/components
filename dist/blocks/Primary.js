"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Primary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Primary = _ref => {
  var {
    type = 'vertical',
    mirror = false,
    imageUrl = '',
    info = {}
  } = _ref;

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type != "vertical" && "flex items-center justify-center", "\n        ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n            ".concat(type != "vertical" && "pl-12", "\n        ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, info.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-4"
    }, info.text), info.cta && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: info.cta.name,
      url: info.cta.url,
      type: "primary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(type === 'default' ? 'flex' : '').concat(mirror ? ' flex-row-reverse' : '')
  }, (type === "default" || type === "vertical") && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, imageUrl && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(type === 'vertical' ? 'pb-8' : 'px-12 py-6')
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    className: "rounded-lg".concat(type === 'default' ? ' w-auto' : '')
  })), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Primary = Primary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1ByaW1hcnkudHN4Il0sIm5hbWVzIjpbIlByaW1hcnkiLCJ0eXBlIiwibWlycm9yIiwiaW1hZ2VVcmwiLCJpbmZvIiwiVGV4dCIsImhlYWQiLCJ0ZXh0IiwiY3RhIiwibmFtZSIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBcUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQXlCLEdBQUcsUUFLbkM7QUFBQSxNQUxvQztBQUN4Q0MsSUFBQUEsSUFBSSxHQUFHLFVBRGlDO0FBRXhDQyxJQUFBQSxNQUFNLEdBQUcsS0FGK0I7QUFHeENDLElBQUFBLFFBQVEsR0FBRyxFQUg2QjtBQUl4Q0MsSUFBQUEsSUFBSSxHQUFHO0FBSmlDLEdBS3BDOztBQUNKLE1BQU1DLElBQUksR0FBRyxNQUFNO0FBQ2pCLHdCQUNFO0FBQ0UsTUFBQSxTQUFTLHdCQUNMSixJQUFJLElBQUksVUFBUixJQUFzQixrQ0FEakI7QUFEWCxvQkFLRTtBQUNFLE1BQUEsU0FBUywwQkFDTEEsSUFBSSxJQUFJLFVBQVIsSUFBc0IsT0FEakI7QUFEWCxvQkFLRTtBQUNFLE1BQUEsU0FBUyxFQUFDO0FBRFosT0FJSUcsSUFBSSxDQUFDRSxJQUpULENBTEYsZUFZRTtBQUNFLE1BQUEsU0FBUyxFQUFDO0FBRFosT0FJSUYsSUFBSSxDQUFDRyxJQUpULENBWkYsRUFvQklILElBQUksQ0FBQ0ksR0FBTCxpQkFDQTtBQUNFLE1BQUEsU0FBUyxFQUFDO0FBRFosb0JBRUUsNkJBQUMsY0FBRDtBQUNFLE1BQUEsSUFBSSxFQUFFSixJQUFJLENBQUNJLEdBQUwsQ0FBU0MsSUFEakI7QUFFRSxNQUFBLEdBQUcsRUFBRUwsSUFBSSxDQUFDSSxHQUFMLENBQVNFLEdBRmhCO0FBR0UsTUFBQSxJQUFJLEVBQUMsU0FIUDtBQUlFLE1BQUEsSUFBSSxFQUFDLE1BSlA7QUFLRSxNQUFBLElBQUksRUFBQztBQUxQLE1BRkYsQ0FyQkosQ0FMRixDQURGO0FBeUNELEdBMUNEOztBQTJDQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxZQUFLVCxJQUFJLEtBQUssU0FBVCxHQUFxQixNQUFyQixHQUE4QixFQUFuQyxTQUF3Q0MsTUFBTSxHQUFHLG1CQUFILEdBQXlCLEVBQXZFO0FBRFgsS0FJSSxDQUFDRCxJQUFJLEtBQUssU0FBVCxJQUFzQkEsSUFBSSxLQUFLLFVBQWhDLGtCQUNFLDREQUNHRSxRQUFRLGlCQUNQO0FBQ0UsSUFBQSxTQUFTLFlBQUtGLElBQUksS0FBSyxVQUFULEdBQXNCLE1BQXRCLEdBQStCLFlBQXBDO0FBRFgsa0JBR0U7QUFDRSxJQUFBLEdBQUcsRUFBRUUsUUFEUDtBQUVFLElBQUEsU0FBUyxzQkFBZUYsSUFBSSxLQUFLLFNBQVQsR0FBcUIsU0FBckIsR0FBaUMsRUFBaEQ7QUFGWCxJQUhGLENBRkosZUFXRSw2QkFBQyxJQUFELE9BWEYsQ0FMTixDQURGO0FBdUJELENBeEVNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL0J1dHRvbidcblxuZXhwb3J0IGludGVyZmFjZSBDVEFUeXBlIHtcbiAgbmFtZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ1RBSW5mb1R5cGUge1xuICBoZWFkOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG4gIGN0YTogQ1RBVHlwZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaW1hcnlQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAqICBpbWFnZSB1cmwgdG8gc2hvd1xuICAqL1xuICBpbWFnZVVybDogc3RyaW5nXG4gIC8qKlxuICAgKiB0ZXh0IGFuZCBidXR0b24gdG8gc2hvd1xuICAgKi9cbiAgaW5mbzogQ1RBSW5mb1R5cGVcbiAgLyoqXG4gICAqIEJsb2NrIHR5cGVcbiAgICovXG4gIHR5cGU/OiBcImRlZmF1bHRcIiB8IFwidmVydGljYWxcIlxuICAvKipcbiAgICogSXMgbWlycm9yXG4gICAqL1xuICBtaXJyb3I/OiBib29sZWFuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFByaW1hcnk6IEZDPFByaW1hcnlQcm9wcz4gPSAoe1xuICB0eXBlID0gJ3ZlcnRpY2FsJyxcbiAgbWlycm9yID0gZmFsc2UsXG4gIGltYWdlVXJsID0gJycsXG4gIGluZm8gPSB7fVxufSkgPT4ge1xuICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YFxuICAgICAgICAgICR7dHlwZSAhPSBcInZlcnRpY2FsXCIgJiYgXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwifVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAke3R5cGUgIT0gXCJ2ZXJ0aWNhbFwiICYmIFwicGwtMTJcIlxuICAgICAgICAgICAgfVxuICAgICAgICBgfSA+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS00eGwnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmZvLmhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmFzZSBwdC00J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5mby50ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGluZm8uY3RhICYmXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9e2luZm8uY3RhLm5hbWV9XG4gICAgICAgICAgICAgICAgdXJsPXtpbmZvLmN0YS51cmx9XG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGljb249J25vbmUnXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3R5cGUgPT09ICdkZWZhdWx0JyA/ICdmbGV4JyA6ICcnfSR7bWlycm9yID8gJyBmbGV4LXJvdy1yZXZlcnNlJyA6ICcnfWB9XG4gICAgPlxuICAgICAge1xuICAgICAgICAodHlwZSA9PT0gXCJkZWZhdWx0XCIgfHwgdHlwZSA9PT0gXCJ2ZXJ0aWNhbFwiKSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpbWFnZVVybCAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3R5cGUgPT09ICd2ZXJ0aWNhbCcgPyAncGItOCcgOiAncHgtMTIgcHktNid9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWxnJHt0eXBlID09PSAnZGVmYXVsdCcgPyAnIHctYXV0bycgOiAnJ31gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxUZXh0IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19