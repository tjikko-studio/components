"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _Secondary = require("./Secondary");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/Secondary',
  component: _Secondary.Secondary,
  argTypes: {
    type: {
      options: ['default', 'vertical'],
      control: {
        type: 'select'
      }
    },
    mirror: {
      control: {
        type: 'boolean'
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Secondary'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Secondary.Secondary, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: 'default',
  mirror: false,
  imageUrl: 'https://source.unsplash.com/random',
  head: 'Heading',
  text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.',
  cta_name: 'cta text',
  cta_url: 'https://perdu.com'
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: 'w-full'
}, Default.args);