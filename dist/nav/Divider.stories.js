"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Divider = require("./Divider");

var _default = {
  title: 'Tjikko/nav/Divider',
  component: _Divider.Divider,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The Divider'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Divider.Divider, args);

var Default = Template.bind({});
exports.Default = Default;