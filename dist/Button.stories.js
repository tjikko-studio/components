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
      options: ["primary", "tertiary"],
      control: {
        type: "select"
      }
    },
    size: {
      options: ["small", "default", "large"],
      control: {
        type: "select"
      }
    },
    forceDark: {
      control: {
        type: "boolean"
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
  type: "primary",
  text: 'LABEL',
  url: '',
  icon: 'none',
  size: "default",
  forceDark: false
};