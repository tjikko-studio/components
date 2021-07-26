"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _FAQ = require("./FAQ");

var _default = {
  title: 'Tjikko/blocks/FAQ',
  component: _FAQ.FAQ,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The FAQ'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_FAQ.FAQ, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
  answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
};