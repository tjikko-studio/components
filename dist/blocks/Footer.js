"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _company_logo_placeholder = _interopRequireDefault(require("../../assets/images/company_logo_placeholder.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Footer = _ref => {
  var {
    footermenu = [],
    year,
    privacy
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pl-6 pt-6 lg:pt-9 md:pt-9 pb-6 lg:pb-7 md:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_company_logo_placeholder.default, {
    width: "210",
    height: "16",
    className: "text-gray-50"
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mx-6 bg-opacity-30 border-gray-500"
  }), /*#__PURE__*/_react.default.createElement("nav", {
    className: "px-6 pt-8 lg:flex md:grid md:grid-cols-2"
  }, footermenu.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("ul", {
      key: menuIndex,
      className: "flex-1 pb-12 lg:mb-0"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "text-gray-300 text-xs font-medium uppercase"
    }, menu.caption), menu.menuList.map((menuItem, itemIndex) => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: itemIndex,
        className: "text-gray-50 hover:text-brand-300 text-sm pt-3"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: menuItem.url
      }, menuItem.name));
    }));
  })), /*#__PURE__*/_react.default.createElement("nav", {
    className: "text-gray-50 text-sm flex flex-col-reverse md:flex-row pt-32 lg:pt-8 md:pt-3 px-6 pb-6 md:pb-4 lg:pb-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-1 flex-row-reverse md:flex-row pt-4 md:pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex justify-end md:justify-start"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xA9 ", year ? year : new Date().getFullYear())), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-1 space-x-2"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, privacy ? privacy : "Privacy")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, privacy ? privacy : "Terms")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1"
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-1 md:-ml-20 space-x-2"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "Facebook")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "YouTube")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "LinkedIn")))));
};

exports.Footer = Footer;