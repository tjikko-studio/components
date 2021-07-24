"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextStyles = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["type"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var TextStyles = _ref => {
  var {
    type = "all"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "w-full\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-16\n                ".concat(type != "all" && type != "heading" && "display: hidden", "\n              ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-lg uppercase strong mb-6"
  }, "Headings : "), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-9xl"
  }, "Heading 9x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-9xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-8xl"
  }, "Heading 8x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-8xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-7xl"
  }, "Heading 7x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-7xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-6xl"
  }, "Heading 6x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-6xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-5xl"
  }, "Heading 5x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-5xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-4xl"
  }, "Heading 4x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-4xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-3xl"
  }, "Heading 3x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-3xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-2xl"
  }, "Heading 2x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-2xl'")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 p-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "fontStyle-xl"
  }, "Heading x"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className='fontStyle-xl'"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-16\n                ".concat(type != "all" && type != "body" && "display: hidden", "\n              ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-lg uppercase strong mb-6"
  }, "Body large : "), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-lg"
  }, "Body large"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-lg\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body uppercase strong"
  }, "Body large strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-lg strong\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-lg uppercase"
  }, "Body large uppercase"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-lg uppercase\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-lg uppercase strong"
  }, "Body Large uppercase strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-lg uppercase strong\""))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-16\n                ".concat(type != "all" && type != "body" && "display: hidden", "\n              ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body uppercase  mb-6"
  }, "Body : "), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body"
  }, "Body"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-body\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body strong"
  }, "Body strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-body strong\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body uppercase"
  }, "Body uppercase"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-body uppercase\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-body uppercase strong"
  }, "Body uppercase strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-body uppercase strong\""))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-16\n                ".concat(type != "all" && type != "body" && "display: hidden", "\n              ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-sm uppercase strong mb-6"
  }, "Body small : "), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-sm"
  }, "Body small"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-sm\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-sm strong"
  }, "Body small strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-sm strong\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-sm uppercase"
  }, "Body small uppercase"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-sm uppercase\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-sm uppercase strong"
  }, "Body small uppercase strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-sm uppercase strong\""))), /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-16\n                ".concat(type != "all" && type != "body" && "display: hidden", "\n              ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xs uppercase strong mb-6"
  }, "Body xsmall : "), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xs"
  }, "Body xsmall"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-xs\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xs strong"
  }, "Body xsmall strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-xs strong\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xs uppercase mb-6"
  }, "Body xsmall uppercase"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-xs uppercase\"")), /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-50 py-4 px-8 mb-4 rounded-2xl"
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xs uppercase strong"
  }, "Body xsmall uppercase strong"), /*#__PURE__*/_react.default.createElement("pre", {
    className: "inline-block px-2 py-1.5 mt-2 text-xs font-mono bg-gray-100 text-gray-600"
  }, "className=\"fontStyle-xs uppercase strong\""))));
};

exports.TextStyles = TextStyles;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGV4dHN0eWxlcy9UZXh0U3R5bGVzLnRzeCJdLCJuYW1lcyI6WyJUZXh0U3R5bGVzIiwidHlwZSIsInByb3BzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFVBQStCLEdBQUcsUUFHekM7QUFBQSxNQUgwQztBQUM1Q0MsSUFBQUEsSUFBSSxHQUFDO0FBRHVDLEdBRzFDO0FBQUEsTUFEQ0MsS0FDRDs7QUFFRixzQkFDSSxpREFDUUEsS0FEUjtBQUVJLElBQUEsU0FBUyxvQ0FDSEEsS0FBSyxDQUFDQyxTQUFOLEdBQWdCRCxLQUFLLENBQUNDLFNBQXRCLEdBQWdDLEVBRDdCO0FBRmIsbUJBWUk7QUFDRSxJQUFBLFNBQVMsbUNBQ0hGLElBQUksSUFBSSxLQUFSLElBQWlCQSxJQUFJLElBQUksU0FBMUIsSUFBd0MsaUJBRHBDO0FBRFgsa0JBS0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLG1CQUxGLGVBTUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFIRixlQUlFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixpQ0FKRixDQU5GLGVBZ0JFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBSEYsZUFJRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosaUNBSkYsQ0FoQkYsZUEwQkU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFIRixlQUlFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixpQ0FKRixDQTFCRixlQW9DRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUhGLGVBSUU7QUFDRSxJQUFBLFNBQVMs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QztBQURaLDRDQUpGLENBNUJGLGVBc0NFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsb0NBSEYsZUFJRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosbURBSkYsQ0F0Q0YsQ0FoUUosQ0FESjtBQW1USCxDQXhUTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0U3R5bGVzUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIHRleHQgdG8gZGlzcGxheSBmb3IgaGVhZGluZ1xuICAgICAqL1xuICAgIHR5cGU/OiBcImFsbFwiIHwgXCJoZWFkaW5nXCIgfCBcImJvZHlcIlxuICAgXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRTdHlsZXM6IEZDPFRleHRTdHlsZXNQcm9wcz4gPSAoe1xuICAgIHR5cGU9XCJhbGxcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctZnVsbFxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTonJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHsvKiA8aDUgY2xhc3NOYW1lID0gXCJ0ZXh0LWdyYXktMTAwIHRleHQtbGcgdHJhY2tpbmctd2lkZXIgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGRcIj57aGVhZGVyVGV4dH08L2g1PlxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZSA9IFwiYm9yZGVyLWJyYW5kLTYwMCBtdC00XCIvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lID0gXCJ0ZXh0LWdyYXktMTAwIHRleHQtYmFzZSBtdC04XCI+XG4gICAgICAgICAgICAgICAge3BhcmFncmFwaH1cbiAgICAgICAgICAgIDwvcD4gKi99XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWItMTZcbiAgICAgICAgICAgICAgICAkeyAodHlwZSAhPSBcImFsbFwiICYmIHR5cGUgIT0gXCJoZWFkaW5nXCIpICYmIFwiZGlzcGxheTogaGlkZGVuXCJ9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2Ugc3Ryb25nIG1iLTZcIj5IZWFkaW5ncyA6IDwvcD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBwLTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250U3R5bGUtOXhsXCI+SGVhZGluZyA5eDwvaDE+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUtOXhsJ1xuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTh4bFwiPkhlYWRpbmcgOHg8L2gxPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTh4bCdcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHAtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnRTdHlsZS03eGxcIj5IZWFkaW5nIDd4PC9oMT5cbiAgICAgICAgICAgICAgICA8cHJlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS03eGwnXG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBwLTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250U3R5bGUtNnhsXCI+SGVhZGluZyA2eDwvaDE+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUtNnhsJ1xuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTV4bFwiPkhlYWRpbmcgNXg8L2gxPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTV4bCdcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHAtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnRTdHlsZS00eGxcIj5IZWFkaW5nIDR4PC9oMT5cbiAgICAgICAgICAgICAgICA8cHJlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS00eGwnXG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBwLTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250U3R5bGUtM3hsXCI+SGVhZGluZyAzeDwvaDE+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUtM3hsJ1xuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTJ4bFwiPkhlYWRpbmcgMng8L2gxPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZm9udFN0eWxlLTJ4bCdcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBwLTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14bFwiPkhlYWRpbmcgeDwvaDE+XG4gICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUteGwnXG4gICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYi0xNlxuICAgICAgICAgICAgICAgICR7ICh0eXBlICE9IFwiYWxsXCIgJiYgdHlwZSAhPSBcImJvZHlcIikgJiYgXCJkaXNwbGF5OiBoaWRkZW5cIn1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWxnIHVwcGVyY2FzZSBzdHJvbmcgbWItNlwiPkJvZHkgbGFyZ2UgOiA8L3A+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtbGdcIj5Cb2R5IGxhcmdlPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZ1wiXG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5IHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IGxhcmdlIHN0cm9uZzwvcD5cbiAgICAgICAgICAgICAgICA8cHJlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtbGcgc3Ryb25nXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWxnIHVwcGVyY2FzZVwiPkJvZHkgbGFyZ2UgdXBwZXJjYXNlPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2VcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2Ugc3Ryb25nXCI+Qm9keSBMYXJnZSB1cHBlcmNhc2Ugc3Ryb25nPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2Ugc3Ryb25nXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTE2XG4gICAgICAgICAgICAgICAgJHsgKHR5cGUgIT0gXCJhbGxcIiAmJiB0eXBlICE9IFwiYm9keVwiKSAmJiBcImRpc3BsYXk6IGhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSB1cHBlcmNhc2UgIG1iLTZcIj5Cb2R5IDogPC9wPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHlcIj5Cb2R5PC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5XCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHkgc3Ryb25nXCI+Qm9keSBzdHJvbmc8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHkgc3Ryb25nXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHkgdXBwZXJjYXNlXCI+Qm9keSB1cHBlcmNhc2U8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHkgdXBwZXJjYXNlXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSB1cHBlcmNhc2Ugc3Ryb25nXCI+Qm9keSB1cHBlcmNhc2Ugc3Ryb25nPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5IHVwcGVyY2FzZSBzdHJvbmdcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTE2XG4gICAgICAgICAgICAgICAgJHsgKHR5cGUgIT0gXCJhbGxcIiAmJiB0eXBlICE9IFwiYm9keVwiKSAmJiBcImRpc3BsYXk6IGhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtc20gdXBwZXJjYXNlIHN0cm9uZyBtYi02XCI+Qm9keSBzbWFsbCA6IDwvcD5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1zbVwiPkJvZHkgc21hbGw8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHN0cm9uZ1wiPkJvZHkgc21hbGwgc3Ryb25nPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1zbSBzdHJvbmdcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtc20gdXBwZXJjYXNlXCI+Qm9keSBzbWFsbCB1cHBlcmNhc2U8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IHNtYWxsIHVwcGVyY2FzZSBzdHJvbmc8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHVwcGVyY2FzZSBzdHJvbmdcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1iLTE2XG4gICAgICAgICAgICAgICAgJHsgKHR5cGUgIT0gXCJhbGxcIiAmJiB0eXBlICE9IFwiYm9keVwiKSAmJiBcImRpc3BsYXk6IGhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUteHMgdXBwZXJjYXNlIHN0cm9uZyBtYi02XCI+Qm9keSB4c21hbGwgOiA8L3A+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUteHNcIj5Cb2R5IHhzbWFsbDwvcD5cbiAgICAgICAgICAgICAgICA8cHJlXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUteHNcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUteHMgc3Ryb25nXCI+Qm9keSB4c21hbGwgc3Ryb25nPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14cyBzdHJvbmdcIlxuICAgICAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUteHMgdXBwZXJjYXNlIG1iLTZcIj5Cb2R5IHhzbWFsbCB1cHBlcmNhc2U8L3A+XG4gICAgICAgICAgICAgICAgPHByZVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhzIHVwcGVyY2FzZVwiXG4gICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhzIHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IHhzbWFsbCB1cHBlcmNhc2Ugc3Ryb25nPC9wPlxuICAgICAgICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14cyB1cHBlcmNhc2Ugc3Ryb25nXCJcbiAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdfQ==