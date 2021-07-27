"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalDark = exports.Vertical = exports.HorizontalDark = exports.Horizontal = exports.default = void 0;

var _Divider = require("./Divider");

var _default = {
  title: 'Tjikko/nav/Divider',
  component: _Divider.Divider,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The Divider'
  },
  decorators: [Story => /*#__PURE__*/React.createElement("div", {
    className: "max-w-screen-sm h-96"
  }, /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Story, null))]
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Divider.Divider, args);

var Horizontal = Template.bind({});
exports.Horizontal = Horizontal;
Horizontal.args = {
  direction: "horizontal"
};
var HorizontalDark = Template.bind({});
exports.HorizontalDark = HorizontalDark;
HorizontalDark.args = {
  direction: "horizontal",
  dark: true
};
HorizontalDark.parameters = {
  themes: {
    default: "Dark Mode"
  }
};
var Vertical = Template.bind({});
exports.Vertical = Vertical;
Vertical.args = {
  direction: "vertical"
};
var VerticalDark = Template.bind({});
exports.VerticalDark = VerticalDark;
VerticalDark.args = {
  direction: "vertical",
  dark: true
};
VerticalDark.parameters = {
  themes: {
    default: "Dark Mode"
  }
};