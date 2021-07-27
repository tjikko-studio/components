"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Active = exports.Default = exports.default = void 0;

var _PopUpNavItem = require("./PopUpNavItem");

var _default = {
  title: 'Tjikko/nav/PopUpNavItem',
  component: _PopUpNavItem.PopUpNavItem,
  argTypes: {
    type: {
      options: ['default', 'header', 'button', 'special'],
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_PopUpNavItem.PopUpNavItem, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  caption: 'Link'
};
var Active = Template.bind({});
exports.Active = Active;
Active.args = {
  isActive: true
};