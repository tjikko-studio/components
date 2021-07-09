"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Button = require("./Button");

var _default = {
  title: 'Tjikko/Buttons',
  component: _Button.Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "tertiary"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Button.Button, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "tertiary",
  text: 'LABEL',
  icon: 'none',
  size: "small"
};