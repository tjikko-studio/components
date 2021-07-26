"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextStyles = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var TextStyles = _ref => {
  var {
    type = "all",
    className = ''
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full ".concat(className)
  }, /*#__PURE__*/_react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvdGV4dHN0eWxlcy9UZXh0U3R5bGVzLnRzeCJdLCJuYW1lcyI6WyJUZXh0U3R5bGVzIiwidHlwZSIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBYUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBK0IsR0FBRyxRQUd6QztBQUFBLE1BSDBDO0FBQzlDQyxJQUFBQSxJQUFJLEdBQUcsS0FEdUM7QUFFOUNDLElBQUFBLFNBQVMsR0FBRztBQUZrQyxHQUcxQztBQUVKLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLG1CQUFZQSxTQUFaO0FBRFgsa0JBV0U7QUFDRSxJQUFBLFNBQVMsbUNBQ0VELElBQUksSUFBSSxLQUFSLElBQWlCQSxJQUFJLElBQUksU0FBMUIsSUFBd0MsaUJBRHpDO0FBRFgsa0JBS0U7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLG1CQUxGLGVBTUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFIRixlQUlFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixpQ0FKRixDQU5GLGVBZ0JFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsa0JBSEYsZUFJRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosaUNBSkYsQ0FoQkYsZUEwQkU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFIRixlQUlFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixpQ0FKRixDQTFCRixlQW9DRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUhGLGVBSUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGlDQUpGLENBcENGLGVBOENFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRTtBQUFJ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QUEsU0FBUyxFQUFDO0FBQWIsb0NBSEYsZUFJRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosbURBSkYsQ0F0Q0YsQ0EvUEYsQ0FERjtBQWtURCxDQXZUTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFN0eWxlc1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIHRleHQgdG8gZGlzcGxheSBmb3IgaGVhZGluZ1xuICAgKi9cbiAgdHlwZT86IFwiYWxsXCIgfCBcImhlYWRpbmdcIiB8IFwiYm9keVwiXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBUZXh0U3R5bGVzOiBGQzxUZXh0U3R5bGVzUHJvcHM+ID0gKHtcbiAgdHlwZSA9IFwiYWxsXCIsXG4gIGNsYXNzTmFtZSA9ICcnXG59KSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2B3LWZ1bGwgJHtjbGFzc05hbWV9YH1cbiAgICA+XG4gICAgICB7LypcbiAgICAgICAgPGg1IGNsYXNzTmFtZSA9IFwidGV4dC1ncmF5LTEwMCB0ZXh0LWxnIHRyYWNraW5nLXdpZGVyIHVwcGVyY2FzZSBmb250LXNlbWlib2xkXCI+e2hlYWRlclRleHR9PC9oNT5cbiAgICAgICAgPGhyIGNsYXNzTmFtZSA9IFwiYm9yZGVyLWJyYW5kLTYwMCBtdC00XCIvPlxuICAgICAgICA8cCBjbGFzc05hbWUgPSBcInRleHQtZ3JheS0xMDAgdGV4dC1iYXNlIG10LThcIj5cbiAgICAgICAgICB7cGFyYWdyYXBofVxuICAgICAgICA8L3A+XG4gICAgICAqL31cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtYi0xNlxuICAgICAgICAgICAgICAgICR7KHR5cGUgIT0gXCJhbGxcIiAmJiB0eXBlICE9IFwiaGVhZGluZ1wiKSAmJiBcImRpc3BsYXk6IGhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtbGcgdXBwZXJjYXNlIHN0cm9uZyBtYi02XCI+SGVhZGluZ3MgOiA8L3A+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTl4bFwiPkhlYWRpbmcgOXg8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS05eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTh4bFwiPkhlYWRpbmcgOHg8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS04eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTd4bFwiPkhlYWRpbmcgN3g8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS03eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTZ4bFwiPkhlYWRpbmcgNng8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS02eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTV4bFwiPkhlYWRpbmcgNXg8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS01eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTR4bFwiPkhlYWRpbmcgNHg8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS00eGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTN4bFwiPkhlYWRpbmcgM3g8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS0zeGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLTJ4bFwiPkhlYWRpbmcgMng8L2gxPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9J2ZvbnRTdHlsZS0yeGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhsXCI+SGVhZGluZyB4PC9oMT5cbiAgICAgICAgICA8cHJlXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgY2xhc3NOYW1lPSdmb250U3R5bGUteGwnXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItMTZcbiAgICAgICAgICAgICAgICAkeyh0eXBlICE9IFwiYWxsXCIgJiYgdHlwZSAhPSBcImJvZHlcIikgJiYgXCJkaXNwbGF5OiBoaWRkZW5cIn1cbiAgICAgICAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWxnIHVwcGVyY2FzZSBzdHJvbmcgbWItNlwiPkJvZHkgbGFyZ2UgOiA8L3A+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtbGdcIj5Cb2R5IGxhcmdlPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtbGdcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSB1cHBlcmNhc2Ugc3Ryb25nXCI+Qm9keSBsYXJnZSBzdHJvbmc8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyBzdHJvbmdcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtbGcgdXBwZXJjYXNlXCI+Qm9keSBsYXJnZSB1cHBlcmNhc2U8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2VcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWxnIHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IExhcmdlIHVwcGVyY2FzZSBzdHJvbmc8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1sZyB1cHBlcmNhc2Ugc3Ryb25nXCJcbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BtYi0xNlxuICAgICAgICAgICAgICAgICR7KHR5cGUgIT0gXCJhbGxcIiAmJiB0eXBlICE9IFwiYm9keVwiKSAmJiBcImRpc3BsYXk6IGhpZGRlblwifVxuICAgICAgICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSB1cHBlcmNhc2UgIG1iLTZcIj5Cb2R5IDogPC9wPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHlcIj5Cb2R5PC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keVwiXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5IHN0cm9uZ1wiPkJvZHkgc3Ryb25nPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSBzdHJvbmdcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUtYm9keSB1cHBlcmNhc2VcIj5Cb2R5IHVwcGVyY2FzZTwvcD5cbiAgICAgICAgICA8cHJlXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLWJvZHkgdXBwZXJjYXNlXCJcbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5IHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IHVwcGVyY2FzZSBzdHJvbmc8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1ib2R5IHVwcGVyY2FzZSBzdHJvbmdcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YG1iLTE2XG4gICAgICAgICAgICAgICAgJHsodHlwZSAhPSBcImFsbFwiICYmIHR5cGUgIT0gXCJib2R5XCIpICYmIFwiZGlzcGxheTogaGlkZGVuXCJ9XG4gICAgICAgICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1zbSB1cHBlcmNhc2Ugc3Ryb25nIG1iLTZcIj5Cb2R5IHNtYWxsIDogPC9wPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtXCI+Qm9keSBzbWFsbDwvcD5cbiAgICAgICAgICA8cHJlXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1ibG9jayBweC0yIHB5LTEuNSBtdC0yIHRleHQteHMgZm9udC1tb25vIGJnLWdyYXktMTAwIHRleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtXCJcbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHN0cm9uZ1wiPkJvZHkgc21hbGwgc3Ryb25nPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtc20gc3Ryb25nXCJcbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXNtIHVwcGVyY2FzZVwiPkJvZHkgc21hbGwgdXBwZXJjYXNlPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtc20gdXBwZXJjYXNlXCJcbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS1zbSB1cHBlcmNhc2Ugc3Ryb25nXCI+Qm9keSBzbWFsbCB1cHBlcmNhc2Ugc3Ryb25nPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUtc20gdXBwZXJjYXNlIHN0cm9uZ1wiXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbWItMTZcbiAgICAgICAgICAgICAgICAkeyh0eXBlICE9IFwiYWxsXCIgJiYgdHlwZSAhPSBcImJvZHlcIikgJiYgXCJkaXNwbGF5OiBoaWRkZW5cIn1cbiAgICAgICAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhzIHVwcGVyY2FzZSBzdHJvbmcgbWItNlwiPkJvZHkgeHNtYWxsIDogPC9wPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhzXCI+Qm9keSB4c21hbGw8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14c1wiXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYmctZ3JheS01MCBweS00IHB4LTggbWItNCByb3VuZGVkLTJ4bCdcbiAgICAgICAgPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14cyBzdHJvbmdcIj5Cb2R5IHhzbWFsbCBzdHJvbmc8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14cyBzdHJvbmdcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9J2JnLWdyYXktNTAgcHktNCBweC04IG1iLTQgcm91bmRlZC0yeGwnXG4gICAgICAgID5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250U3R5bGUteHMgdXBwZXJjYXNlIG1iLTZcIj5Cb2R5IHhzbWFsbCB1cHBlcmNhc2U8L3A+XG4gICAgICAgICAgPHByZVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2sgcHgtMiBweS0xLjUgbXQtMiB0ZXh0LXhzIGZvbnQtbW9ubyBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNjAwJz5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14cyB1cHBlcmNhc2VcIlxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTUwIHB5LTQgcHgtOCBtYi00IHJvdW5kZWQtMnhsJ1xuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udFN0eWxlLXhzIHVwcGVyY2FzZSBzdHJvbmdcIj5Cb2R5IHhzbWFsbCB1cHBlcmNhc2Ugc3Ryb25nPC9wPlxuICAgICAgICAgIDxwcmVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0naW5saW5lLWJsb2NrIHB4LTIgcHktMS41IG10LTIgdGV4dC14cyBmb250LW1vbm8gYmctZ3JheS0xMDAgdGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250U3R5bGUteHMgdXBwZXJjYXNlIHN0cm9uZ1wiXG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==