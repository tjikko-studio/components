"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactMediaHook = require("react-media-hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Icon = _ref => {
  var {
    type = "horizontal",
    heading = "Heading",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    imageUrl
  } = _ref;
  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'horizontal' ? 'flex' : ''
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'horizontal' ? 'px-6 pb-14' : 'py-2'
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: imageUrl,
    className: "w-14 h-14"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: type === 'horizontal' ? 'ml-6' : 'mt-6',
    style: {
      width: type === "horizontal" ? "310px" : "290px"
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "fontStyle-2xl"
  }, heading && heading === "" ? heading : "Heading"), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-base pt-2"
  }, text && text === "" ? text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit ed do eiusmod tempor incididunt ut labore et dolore magna aliqua")));
};

exports.Icon = Icon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0ljb24udHN4Il0sIm5hbWVzIjpbIkljb24iLCJ0eXBlIiwiaGVhZGluZyIsInRleHQiLCJpbWFnZVVybCIsImRlc2t0b3AiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBeUJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLElBQW1CLEdBQUcsUUFLN0I7QUFBQSxNQUw4QjtBQUNsQ0MsSUFBQUEsSUFBSSxHQUFHLFlBRDJCO0FBRWxDQyxJQUFBQSxPQUFPLEdBQUcsU0FGd0I7QUFHbENDLElBQUFBLElBQUksR0FBRyw0RkFIMkI7QUFJbENDLElBQUFBO0FBSmtDLEdBSzlCO0FBQ0osTUFBTUMsT0FBTyxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBaEI7QUFFQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFFSixJQUFJLEtBQUssWUFBVCxHQUF3QixNQUF4QixHQUFpQztBQUQ5QyxrQkFHRTtBQUNFLElBQUEsU0FBUyxFQUFFQSxJQUFJLEtBQUssWUFBVCxHQUF3QixZQUF4QixHQUF1QztBQURwRCxrQkFHRTtBQUNFLElBQUEsR0FBRyxFQUFFRyxRQURQO0FBRUUsSUFBQSxTQUFTO0FBRlgsSUFIRixDQUhGLGVBV0U7QUFDRSxJQUFBLFNBQVMsRUFBRUgsSUFBSSxLQUFLLFlBQVQsR0FBd0IsTUFBeEIsR0FBaUMsTUFEOUM7QUFFRSxJQUFBLEtBQUssRUFDSDtBQUNFSyxNQUFBQSxLQUFLLEVBQUVMLElBQUksS0FBSyxZQUFULEdBQXdCLE9BQXhCLEdBQWtDO0FBRDNDO0FBSEosa0JBUUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLEtBSUlDLE9BQU8sSUFBSUEsT0FBTyxLQUFLLEVBQXZCLEdBQTRCQSxPQUE1QixHQUFzQyxTQUoxQyxDQVJGLGVBZUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLEtBSUlDLElBQUksSUFBSUEsSUFBSSxLQUFLLEVBQWpCLEdBQXNCQSxJQUF0QixHQUE2QiwwSEFKakMsQ0FmRixDQVhGLENBREY7QUFxQ0QsQ0E3Q00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VNZWRpYVByZWRpY2F0ZX0gZnJvbSBcInJlYWN0LW1lZGlhLWhvb2tcIlxuLypcbiogSW4gcHJvZHVjdGlvbiBtb2RlLCBzaG93IGR5bmFtaWMgaW1hZ2UgYW5kIHZpZGVvIHdpdGggdXJsXG4qL1xuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKlxuICAgKiB0eXBlIG9mIEljb24gKFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiKVxuICAgKi9cbiAgdHlwZT86IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiXG4gIC8qKlxuICAgKiAgaW1hZ2UgdXJsIHRvIHNob3dcbiAgICovXG4gIGltYWdlVXJsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBoZWFkaW5nIHRleHRcbiAgICovXG4gIGhlYWRpbmc/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGNvbnRlbnQgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICBjbGFzc05hbWVzPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEljb246IEZDPEljb25Qcm9wcz4gPSAoe1xuICB0eXBlID0gXCJob3Jpem9udGFsXCIsXG4gIGhlYWRpbmcgPSBcIkhlYWRpbmdcIixcbiAgdGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQuXCIsXG4gIGltYWdlVXJsXG59KSA9PiB7XG4gIGNvbnN0IGRlc2t0b3AgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtaW4td2lkdGg6IDY0MHB4KVwiKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXt0eXBlID09PSAnaG9yaXpvbnRhbCcgPyAnZmxleCcgOiAnJ31cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dHlwZSA9PT0gJ2hvcml6b250YWwnID8gJ3B4LTYgcGItMTQnIDogJ3B5LTInfVxuICAgICAgPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtpbWFnZVVybH1cbiAgICAgICAgICBjbGFzc05hbWU9e2B3LTE0IGgtMTRgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dHlwZSA9PT0gJ2hvcml6b250YWwnID8gJ21sLTYnIDogJ210LTYnfVxuICAgICAgICBzdHlsZT17XG4gICAgICAgICAge1xuICAgICAgICAgICAgd2lkdGg6IHR5cGUgPT09IFwiaG9yaXpvbnRhbFwiID8gXCIzMTBweFwiIDogXCIyOTBweFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIDxoMlxuICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTJ4bCdcbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRpbmcgJiYgaGVhZGluZyA9PT0gXCJcIiA/IGhlYWRpbmcgOiBcIkhlYWRpbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPHBcbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtYmFzZSBwdC0yJ1xuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dCAmJiB0ZXh0ID09PSBcIlwiID8gdGV4dCA6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhXCJcbiAgICAgICAgICB9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=