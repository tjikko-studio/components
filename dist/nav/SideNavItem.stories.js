"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _SideNavItem = require("./SideNavItem");

var _default = {
  title: 'Tjikko/nav/SideNavItem',
  component: _SideNavItem.SideNavItem,
  argTypes: {
    type: {
      options: ["linkheader", "link", "header"],
      control: {
        type: "select"
      }
    },
    status: {
      options: ["default", "active", "hover"],
      control: {
        type: "select"
      }
    },
    spacer: {
      contro: {
        type: "boolean"
      }
    }
  },
  parameters: {
    componentSubtitle: 'The SideNavItem'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SideNavItem.SideNavItem, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "linkheader",
  status: "default",
  spacer: false,
  text: "Link Header"
};