"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Secondary = _ref => {
  var {
    type = 'vertical',
    imageUrl,
    info = {},
    mirror = 'false',
    className
  } = _ref;

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type === 'vertical' && 'pb-6', "\n        ")
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: imageUrl,
      className: "rounded-lg\n            ".concat(type === 'default' && 'w-auto', "\n          ")
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type != 'vertical' && 'flex justify-center', "\n        ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n              ".concat(type != 'vertical' && 'pl-12', "\n          ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, info.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, info.text)));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "\n        ".concat(type === 'default' && 'flex', "\n        ").concat(mirror && 'flex-row-reverse', "\n        ").concat(className ? className : '', "\n      ")
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Secondary = Secondary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1NlY29uZGFyeS50c3giXSwibmFtZXMiOlsiU2Vjb25kYXJ5IiwidHlwZSIsImltYWdlVXJsIiwiaW5mbyIsIm1pcnJvciIsImNsYXNzTmFtZSIsIkltYWdlIiwiVGV4dCIsImhlYWQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUE4QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBNkIsR0FBRyxRQU92QztBQUFBLE1BUHdDO0FBQzVDQyxJQUFBQSxJQUFJLEdBQUcsVUFEcUM7QUFFNUNDLElBQUFBLFFBRjRDO0FBRzVDQyxJQUFBQSxJQUFJLEdBQUcsRUFIcUM7QUFJNUNDLElBQUFBLE1BQU0sR0FBRyxPQUptQztBQUs1Q0MsSUFBQUE7QUFMNEMsR0FPeEM7O0FBQ0osTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDbEIsd0JBQ0U7QUFDRSxNQUFBLFNBQVMsd0JBQ0xMLElBQUksS0FBSyxVQUFULElBQXVCLE1BRGxCO0FBRFgsb0JBS0U7QUFDRSxNQUFBLEdBQUcsRUFBRUMsUUFEUDtBQUVFLE1BQUEsU0FBUyxvQ0FDTEQsSUFBSSxLQUFLLFNBQVQsSUFBc0IsUUFEakI7QUFGWCxNQUxGLENBREY7QUFjRCxHQWZEOztBQWdCQSxNQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNqQix3QkFDRTtBQUNFLE1BQUEsU0FBUyx3QkFDTE4sSUFBSSxJQUFJLFVBQVIsSUFBc0IscUJBRGpCO0FBRFgsb0JBS0U7QUFDRSxNQUFBLFNBQVMsNEJBQ0hBLElBQUksSUFBSSxVQUFSLElBQXNCLE9BRG5CO0FBRFgsb0JBS0U7QUFBSSxNQUFBLFNBQVMsRUFBQztBQUFkLE9BQStCRSxJQUFJLENBQUNLLElBQXBDLENBTEYsZUFNRTtBQUFHLE1BQUEsU0FBUyxFQUFDO0FBQWIsT0FBK0JMLElBQUksQ0FBQ00sSUFBcEMsQ0FORixDQUxGLENBREY7QUFnQkQsR0FqQkQ7O0FBa0JBLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLHNCQUNMUixJQUFJLEtBQUssU0FBVCxJQUFzQixNQURqQix1QkFFTEcsTUFBTSxJQUFJLGtCQUZMLHVCQUdMQyxTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUhuQjtBQURYLEtBT0csQ0FBQ0osSUFBSSxLQUFLLFNBQVQsSUFBc0JBLElBQUksS0FBSyxVQUFoQyxrQkFDQyx5RUFDRSw2QkFBQyxLQUFELE9BREYsZUFFRSw2QkFBQyxJQUFELE9BRkYsQ0FSSixDQURGO0FBZ0JELENBMURNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmV4cG9ydCBpbnRlcmZhY2UgQ1RBSW5mb1R5cGUge1xuICBoZWFkOiBzdHJpbmdcbiAgdGV4dDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vjb25kYXJ5UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogQmxvY2sgdHlwZVxuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICd2ZXJ0aWNhbCdcbiAgLyoqXG4gICAqICBpbWFnZSB1cmwgdG8gc2hvd1xuICAgKi9cbiAgaW1hZ2VVcmw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIHRleHQgYW5kIGJ1dHRvbiB0byBzaG93XG4gICAqL1xuICBpbmZvOiBDVEFJbmZvVHlwZVxuXG4gIC8qKlxuICAgKiBJcyBtaXJyb3JcbiAgICovXG4gIG1pcnJvcj86IGJvb2xlYW5cbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWVzIHRvIGFwcGVuZFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFNlY29uZGFyeTogRkM8U2Vjb25kYXJ5UHJvcHM+ID0gKHtcbiAgdHlwZSA9ICd2ZXJ0aWNhbCcsXG4gIGltYWdlVXJsLFxuICBpbmZvID0ge30sXG4gIG1pcnJvciA9ICdmYWxzZScsXG4gIGNsYXNzTmFtZSxcblxufSkgPT4ge1xuICBjb25zdCBJbWFnZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAke3R5cGUgPT09ICd2ZXJ0aWNhbCcgJiYgJ3BiLTYnfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Byb3VuZGVkLWxnXG4gICAgICAgICAgICAke3R5cGUgPT09ICdkZWZhdWx0JyAmJiAndy1hdXRvJ31cbiAgICAgICAgICBgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGNvbnN0IFRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgJHt0eXBlICE9ICd2ZXJ0aWNhbCcgJiYgJ2ZsZXgganVzdGlmeS1jZW50ZXInfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICR7dHlwZSAhPSAndmVydGljYWwnICYmICdwbC0xMid9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnRTdHlsZS00eGwnPntpbmZvLmhlYWR9PC9oMj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtYmFzZSBwdC0yJz57aW5mby50ZXh0fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgJHt0eXBlID09PSAnZGVmYXVsdCcgJiYgJ2ZsZXgnfVxuICAgICAgICAke21pcnJvciAmJiAnZmxleC1yb3ctcmV2ZXJzZSd9XG4gICAgICAgICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICBgfVxuICAgID5cbiAgICAgIHsodHlwZSA9PT0gJ2RlZmF1bHQnIHx8IHR5cGUgPT09ICd2ZXJ0aWNhbCcpICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICA8VGV4dCAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==