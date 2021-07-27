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
    className: "mb-16\n                ".concat(type !== "all" && type !== "heading" && "display: hidden", "\n              ")
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
    className: "mb-16\n                ".concat(type !== "all" && type !== "body" && "display: hidden", "\n              ")
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
    className: "mb-16\n                ".concat(type !== "all" && type !== "body" && "display: hidden", "\n              ")
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
    className: "mb-16\n                ".concat(type !== "all" && type !== "body" && "display: hidden", "\n              ")
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
    className: "mb-16\n                ".concat(type !== "all" && type !== "body" && "display: hidden", "\n              ")
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