"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiData = exports.SingleData = exports.None = exports.default = void 0;

var _NavItem = require("./NavItem");

var _default = {
  title: 'Tjikko/nav/NavItem',
  component: _NavItem.NavItem,
  argTypes: {
    styles: {
      options: ["default", "default/white", "flat"],
      control: {
        type: "select"
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons NavItem'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_NavItem.NavItem, args);

var None = Template.bind({});
exports.None = None;
None.args = {
  styles: "default",
  subMenu: null
};
var SingleData = Template.bind({});
exports.SingleData = SingleData;
SingleData.args = {
  subMenu: [{
    groupCaption: "Group 01",
    groups: [{
      name: "Link 01",
      url: "/linkURL",
      type: "link"
    }, {
      name: "Link 02",
      url: "/linkURL",
      type: "button"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "button"
    }]
  }]
};
var MultiData = Template.bind({});
exports.MultiData = MultiData;
MultiData.args = {
  subMenu: [{
    groupCaption: "Group 01",
    groups: [{
      name: "Link 01",
      url: "/linkURL",
      type: "link"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "button"
    }]
  }, {
    groupCaption: "Group 02",
    groups: [{
      name: "Link 01",
      url: "/linkURL",
      type: "link"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL",
      type: "link"
    }]
  }, {
    groupCaption: "Group 03",
    groups: [{
      name: "Link 01",
      url: "/linkURL",
      type: "button"
    }, {
      name: "Link 02",
      url: "/linkURL"
    }, {
      name: "Link 03",
      url: "/linkURL"
    }]
  }]
};