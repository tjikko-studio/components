"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Icon = require("./Icon");

var _default = {
  title: 'Tjikko/blocks/Icon',
  component: _Icon.Icon,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Icon'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Icon.Icon, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "horizontal",
  imageUrl: "https://via.placeholder.com/56x56",
  heading: "Heading",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
};