"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _Header = require("./Header");

var _reactMediaHook = require("react-media-hook");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Primary UI component for user interaction
 */
var BigHeader = _ref => {
  var {
    bgImage,
    bgVideo,
    headerInfo,
    className,
    bgtype
  } = _ref;
  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative\n                ".concat(className ? className : '', "\n            "),
    style: {
      backgroundImage: "url(".concat(bgImage, ")")
    }
  }, bgtype === "video" && desktop && /*#__PURE__*/_react.default.createElement("video", {
    id: "videoBG",
    poster: bgImage,
    autoPlay: true,
    muted: true,
    loop: true,
    className: "absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block"
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: bgVideo,
    type: "video/mp4"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12"
  }, /*#__PURE__*/_react.default.createElement(_Header.Header, _extends({}, headerInfo, {
    style: {
      backgroundColor: 'transparent'
    }
  }))));
};

exports.BigHeader = BigHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0JpZ0hlYWRlci50c3giXSwibmFtZXMiOlsiQmlnSGVhZGVyIiwiYmdJbWFnZSIsImJnVmlkZW8iLCJoZWFkZXJJbmZvIiwiY2xhc3NOYW1lIiwiYmd0eXBlIiwiZGVza3RvcCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsU0FBNkIsR0FBRyxRQU12QztBQUFBLE1BTndDO0FBQzVDQyxJQUFBQSxPQUQ0QztBQUU1Q0MsSUFBQUEsT0FGNEM7QUFHNUNDLElBQUFBLFVBSDRDO0FBSTVDQyxJQUFBQSxTQUo0QztBQUs1Q0MsSUFBQUE7QUFMNEMsR0FNeEM7QUFDSixNQUFNQyxPQUFPLEdBQUcsdUNBQWtCLG9CQUFsQixDQUFoQjtBQUVBLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLHVHQUNHRixTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUQzQixtQkFEWDtBQUlFLElBQUEsS0FBSyxFQUNIO0FBQ0VHLE1BQUFBLGVBQWUsZ0JBQVNOLE9BQVQ7QUFEakI7QUFMSixLQVlLSSxNQUFNLEtBQUssT0FBWCxJQUFzQkMsT0FBdkIsaUJBQ0U7QUFBTyxJQUFBLEVBQUUsRUFBQyxTQUFWO0FBQW9CLElBQUEsTUFBTSxFQUFFTCxPQUE1QjtBQUFxQyxJQUFBLFFBQVEsTUFBN0M7QUFBOEMsSUFBQSxLQUFLLE1BQW5EO0FBQW9ELElBQUEsSUFBSSxNQUF4RDtBQUF5RCxJQUFBLFNBQVMsRUFBQztBQUFuRSxrQkFDRTtBQUFRLElBQUEsR0FBRyxFQUFFQyxPQUFiO0FBQXNCLElBQUEsSUFBSSxFQUFDO0FBQTNCLElBREYsQ0FiTixlQW1CRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosSUFuQkYsZUFzQkU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLElBdEJGLGVBa0NFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRSw2QkFBQyxjQUFELGVBQ01DLFVBRE47QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFDSyxNQUFBQSxlQUFlLEVBQUU7QUFBbEI7QUFGVCxLQUhGLENBbENGLENBREY7QUE2Q0QsQ0F0RE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtIZWFkZXIsIEhlYWRlclByb3BzfSBmcm9tICcuL0hlYWRlcidcbmltcG9ydCB7dXNlTWVkaWFQcmVkaWNhdGV9IGZyb20gXCJyZWFjdC1tZWRpYS1ob29rXCJcblxuZXhwb3J0IGludGVyZmFjZSBCaWdIZWFkZXJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBpbWFnZSBvciB2aWRlb1xuICAgKi9cbiAgYmd0eXBlOiBcImltYWdlXCIgfCBcInZpZGVvXCJcbiAgLyoqXG4gICAqIGJhY2tncm91bmQgaW1hZ2UgdXJsIGluIGFzc2V0cyBmb2xkZXJcbiAgICovXG4gIGJnSW1hZ2U/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGJhY2tncm91bmQgdmlkZW8gdXJsIGluIGFzc2V0cyBmb2xkZXJcbiAgICovXG4gIGJnVmlkZW8/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGhlYWRlciB0ZXh0IGluZm9ybWF0aW9uXG4gICAqL1xuICBoZWFkZXJJbmZvOiBIZWFkZXJQcm9wc1xuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCaWdIZWFkZXI6IEZDPEJpZ0hlYWRlclByb3BzPiA9ICh7XG4gIGJnSW1hZ2UsXG4gIGJnVmlkZW8sXG4gIGhlYWRlckluZm8sXG4gIGNsYXNzTmFtZSxcbiAgYmd0eXBlXG59KSA9PiB7XG4gIGNvbnN0IGRlc2t0b3AgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtaW4td2lkdGg6IDY0MHB4KVwiKVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtgbWluLWgtNTY4IGxnOmgtOTB2aCBtZDpoLTkwdmggc206aC05MHZoIG92ZXJmbG93LWhpZGRlbiBiZy1jb3ZlciByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICR7Y2xhc3NOYW1lID8gY2xhc3NOYW1lIDogJyd9XG4gICAgICAgICAgICBgfVxuICAgICAgc3R5bGU9e1xuICAgICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmdJbWFnZX0pYCxcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgPlxuICAgICAge1xuICAgICAgICAoYmd0eXBlID09PSBcInZpZGVvXCIgJiYgZGVza3RvcCkgJiYgKFxuICAgICAgICAgIDx2aWRlbyBpZD1cInZpZGVvQkdcIiBwb3N0ZXI9e2JnSW1hZ2V9IGF1dG9QbGF5IG11dGVkIGxvb3AgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTAgdG9wLTAgbGVmdC0wIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsIGhpZGRlbiBzbTpibG9jayc+XG4gICAgICAgICAgICA8c291cmNlIHNyYz17YmdWaWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICB7LyogPHNvdXJjZSBzcmM9e2JnSW1hZ2V9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPiAqL31cbiAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICApXG4gICAgICB9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBoLTIvNiAtdG9wLTEvNiBsZWZ0LTAgdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTQwJ1xuICAgICAgLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTEwIGgtZnVsbCAtYm90dG9tLTEvNiBsZWZ0LTAgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTYwJ1xuICAgICAgLz5cbiAgICAgIHsvKlxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICB0b3A6IDEyMHB4O1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDAsIDAsIDApIDAlLCByZ2JhKDAsIDAsIDAsIDAuOCkgMTAwJSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IG1hdHJpeCgxLCAwLCAwLCAtMSwgMCwgMCk7ICovfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHotMjAgYm90dG9tLTAgbGVmdC0wIHAtNiBsZzpwLTEyIG1kOnAtMTIgc206cC0xMidcbiAgICAgID5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIHsuLi5oZWFkZXJJbmZvfVxuICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICApXG59XG4iXX0=