"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoPizza = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFastMarquee = _interopRequireDefault(require("react-fast-marquee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var LogoPizza = _ref => {
  var {
    companyArr = [],
    mode = "Default"
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "logo-pizza"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "".concat(mode === "Compact" ? "text-2xl" : "text-4xl", " text-center mb-16")
  }, "Trusted by"), /*#__PURE__*/_react.default.createElement(_reactFastMarquee.default, {
    gradientWidth: "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-nowrap w-max  space-x-14 lg:space-x-32 md:space-x-16"
  }, companyArr.map((company, id) => /*#__PURE__*/_react.default.createElement("div", {
    key: id,
    className: mode === "Default" ? "h-14 lg:h-24 md:h-20" : "h-14 lg:h-16 md:h-12"
  }, company.imgUrl && company.imgUrl !== "" ? /*#__PURE__*/_react.default.createElement("img", {
    className: "w-auto h-full",
    src: company.imgUrl ? company.imgUrl : "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }) : /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full h-full bg-black"
  }))))));
};

exports.LogoPizza = LogoPizza;