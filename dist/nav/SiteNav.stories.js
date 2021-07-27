"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transparent = exports.Default = exports.default = void 0;

var _SiteNav = require("./SiteNav");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/nav/SiteNav',
  component: _SiteNav.SiteNav,
  parameters: {
    componentSubtitle: 'The Buttons SiteNav',
    argTypes: {
      backgrounds: {
        control: {
          disable: true
        }
      }
    },
    backgrounds: {
      default: 'light',
      values: [{
        name: 'light',
        value: '#fff'
      }, {
        name: 'dark',
        value: '#000'
      }]
    }
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SiteNav.SiteNav, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: "opaque",
  languageList: {
    current: "En",
    subMenu: [{
      groupCaption: null,
      groups: [{
        name: "De",
        url: "/de"
      }, {
        name: "Afr",
        url: "/afr"
      }]
    }]
  },
  menuData: [{
    caption: "Why SmartPixel",
    subMenu: [{
      groupCaption: null,
      groups: [{
        name: "Features",
        url: "/features"
      }, {
        name: "Customer Success Stories",
        url: "/customer"
      }, {
        name: "Quality and reliability",
        url: "/quality"
      }, {
        name: "Contact Sales team",
        url: "/contact",
        type: "button"
      }]
    }]
  }, {
    caption: "Solutions",
    subMenu: [{
      groupCaption: "BY INDUSTRY",
      groups: [{
        name: "Real estate",
        url: "/real"
      }, {
        name: "Others",
        url: "/others"
      }]
    }, {
      groupCaption: "BY USE CASE",
      groups: [{
        name: "Sales Office",
        url: "/sale"
      }, {
        name: "Presentation",
        url: "/presentation"
      }, {
        name: "Remote",
        url: "/remote"
      }, {
        name: "Contact Sales team",
        url: "/contact",
        type: "button"
      }]
    }]
  }, {
    caption: "Portfolio",
    captionLink: "/portfolio"
  }]
};
var transparent = Template.bind({});
exports.transparent = transparent;
transparent.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  styles: "transparent"
});
transparent.parameters = {
  backgrounds: {
    default: 'dark'
  }
};