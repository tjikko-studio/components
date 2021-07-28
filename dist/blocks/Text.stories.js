"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Text = require("./Text");

var _default = {
  title: 'Tjikko/blocks/Text',
  component: _Text.Text,
  argTypes: {// type: { options: ["default", "header", "button", "special"], control: { type: "select" }},
  },
  parameters: {
    componentSubtitle: 'The Text block',
    backgrounds: {
      default: 'dark background',
      values: [{
        name: 'dark background',
        value: '#000'
      }]
    }
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Text.Text, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  className: 'w-80 h-52',
  title: '01. HEADING',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
};
Default.parameters = {
  themes: {
    default: "Dark Mode"
  }
};