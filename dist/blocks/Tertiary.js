"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tertiary = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Tertiary = _ref => {
  var {
    type = 'vertical',
    mirror = false,
    imageUrl,
    info,
    className = ''
  } = _ref;

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type === 'vertical' ? 'pb-6' : ''
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: imageUrl,
      className: "rounded-lg".concat(type === 'default' ? ' w-auto' : '')
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'flex justify-center' : ''
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: type !== 'vertical' ? 'pl-12' : ''
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-2xl"
    }, info.head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, info.text)));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(type === 'default' ? 'flex' : '').concat(mirror ? ' flex-row-reverse' : '', " ").concat(className)
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Tertiary = Tertiary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1RlcnRpYXJ5LnRzeCJdLCJuYW1lcyI6WyJUZXJ0aWFyeSIsInR5cGUiLCJtaXJyb3IiLCJpbWFnZVVybCIsImluZm8iLCJjbGFzc05hbWUiLCJJbWFnZSIsIlRleHQiLCJoZWFkIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBZ0NBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQTJCLEdBQUcsUUFNckM7QUFBQSxNQU5zQztBQUMxQ0MsSUFBQUEsSUFBSSxHQUFHLFVBRG1DO0FBRTFDQyxJQUFBQSxNQUFNLEdBQUcsS0FGaUM7QUFHMUNDLElBQUFBLFFBSDBDO0FBSTFDQyxJQUFBQSxJQUowQztBQUsxQ0MsSUFBQUEsU0FBUyxHQUFHO0FBTDhCLEdBTXRDOztBQUNKLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLHdCQUNFO0FBQ0UsTUFBQSxTQUFTLEVBQUdMLElBQUksS0FBSyxVQUFULEdBQXNCLE1BQXRCLEdBQStCO0FBRDdDLG9CQUdFO0FBQ0UsTUFBQSxHQUFHLEVBQUVFLFFBRFA7QUFFRSxNQUFBLFNBQVMsc0JBQWVGLElBQUksS0FBSyxTQUFULEdBQXFCLFNBQXJCLEdBQWlDLEVBQWhEO0FBRlgsTUFIRixDQURGO0FBVUQsR0FYRDs7QUFZQSxNQUFNTSxJQUFJLEdBQUcsTUFBTTtBQUNqQix3QkFDRTtBQUNFLE1BQUEsU0FBUyxFQUFFTixJQUFJLEtBQUssVUFBVCxHQUFzQixxQkFBdEIsR0FBOEM7QUFEM0Qsb0JBR0U7QUFDRSxNQUFBLFNBQVMsRUFBRUEsSUFBSSxLQUFLLFVBQVQsR0FBc0IsT0FBdEIsR0FBZ0M7QUFEN0Msb0JBR0U7QUFDRSxNQUFBLFNBQVMsRUFBQztBQURaLE9BSUlHLElBQUksQ0FBQ0ksSUFKVCxDQUhGLGVBVUU7QUFDRSxNQUFBLFNBQVMsRUFBQztBQURaLE9BSUlKLElBQUksQ0FBQ0ssSUFKVCxDQVZGLENBSEYsQ0FERjtBQXdCRCxHQXpCRDs7QUEyQkEsc0JBQ0U7QUFDRSxJQUFBLFNBQVMsWUFBS1IsSUFBSSxLQUFLLFNBQVQsR0FBcUIsTUFBckIsR0FBOEIsRUFBbkMsU0FBd0NDLE1BQU0sR0FBRyxtQkFBSCxHQUF5QixFQUF2RSxjQUE2RUcsU0FBN0U7QUFEWCxLQUlJLENBQUNKLElBQUksS0FBSyxTQUFULElBQXNCQSxJQUFJLEtBQUssVUFBaEMsa0JBQ0UseUVBQ0UsNkJBQUMsS0FBRCxPQURGLGVBRUUsNkJBQUMsSUFBRCxPQUZGLENBTE4sQ0FERjtBQWNELENBNURNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBDVEFJbmZvVHlwZSB7XG4gIGhlYWQ6IHN0cmluZ1xuICB0ZXh0OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXJ0aWFyeVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIEJsb2NrIHR5cGVcbiAgICovXG4gIHR5cGU/OiBcImRlZmF1bHRcIiB8IFwidmVydGljYWxcIlxuICAvKipcbiAgICogSXMgbWlycm9yXG4gICAqL1xuICBtaXJyb3I/OiBib29sZWFuXG4gIC8qKlxuICAgKlxuICAgKiAgaW1hZ2UgdXJsIHRvIHNob3dcbiAgICovXG4gIGltYWdlVXJsPzogc3RyaW5nXG4gIC8qKlxuICAgKiB0ZXh0IGFuZCBidXR0b24gdG8gc2hvd1xuICAgKi9cbiAgaW5mbzogQ1RBSW5mb1R5cGVcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWVzIHRvIGFwcGVuZFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgVGVydGlhcnk6IEZDPFRlcnRpYXJ5UHJvcHM+ID0gKHtcbiAgdHlwZSA9ICd2ZXJ0aWNhbCcsXG4gIG1pcnJvciA9IGZhbHNlLFxuICBpbWFnZVVybCxcbiAgaW5mbyxcbiAgY2xhc3NOYW1lID0gJydcbn0pID0+IHtcbiAgY29uc3QgSW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXsodHlwZSA9PT0gJ3ZlcnRpY2FsJyA/ICdwYi02JyA6ICcnKX1cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyR7dHlwZSA9PT0gJ2RlZmF1bHQnID8gJyB3LWF1dG8nIDogJyd9YH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuICBjb25zdCBUZXh0ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dHlwZSAhPT0gJ3ZlcnRpY2FsJyA/ICdmbGV4IGp1c3RpZnktY2VudGVyJyA6ICcnfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXt0eXBlICE9PSAndmVydGljYWwnID8gJ3BsLTEyJyA6ICcnfVxuICAgICAgICA+XG4gICAgICAgICAgPGgyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS0yeGwnXG4gICAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBpbmZvLmhlYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmFzZSBwdC0yJ1xuICAgICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaW5mby50ZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgJHt0eXBlID09PSAnZGVmYXVsdCcgPyAnZmxleCcgOiAnJ30ke21pcnJvciA/ICcgZmxleC1yb3ctcmV2ZXJzZScgOiAnJ30gJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICB7XG4gICAgICAgICh0eXBlID09PSAnZGVmYXVsdCcgfHwgdHlwZSA9PT0gJ3ZlcnRpY2FsJykgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8SW1hZ2UgLz5cbiAgICAgICAgICAgIDxUZXh0IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19