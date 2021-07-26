"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _CTA = require("./CTA");

var _default = {
  title: 'Tjikko/blocks/CTA',
  component: _CTA.CTA,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The CTA'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_CTA.CTA, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  title: 'Title or Caption',
  body: 'Body or Description of the proposed action',
  ctas: [{
    label: 'Call To Action',
    link: '#'
  }]
};