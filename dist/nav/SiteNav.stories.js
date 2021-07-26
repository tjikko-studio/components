"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _SiteNav = require("./SiteNav");

var _default = {
  title: 'Tjikko/nav/SiteNav',
  component: _SiteNav.SiteNav,
  argTypes: {
    styles: {
      control: {
        type: "select",
        options: ["black", "transWhite"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons SiteNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SiteNav.SiteNav, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: "black",
  languageList: {
    current: "En",
    submenu: [{
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
    submenu: [{
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
    submenu: [{
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
    captionLink: "/portfolio",
    submenu: null
  }]
};