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
    className: "min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative ".concat(className ? className : ''),
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