"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoURL = exports.Default = exports.default = void 0;

var _Header = require("./Header");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/Header',
  component: _Header.Header,
  argTypes: {
    type: {
      options: ['default', 'form', 'case'],
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Header',
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

var Template = args => /*#__PURE__*/React.createElement(_Header.Header, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: 'default',
  buttonText: 'Book a demo',
  formPlaceholder: 'Work email',
  caseText: 'SP Architectutes',
  url: '/Header',
  title: 'Some amazing title',
  breadcrumb: [{
    name: 'breadcrumb',
    url: '/bread1'
  }, {
    name: 'breadcrumb',
    url: '/bread2'
  }, {
    name: 'breadcrumb',
    url: '/bread3'
  }],
  text: 'Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
};
Default.parameters = {
  themes: {
    default: "Dark Mode"
  }
};
var NoURL = Template.bind({});
exports.NoURL = NoURL;
NoURL.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  styles: _objectSpread(_objectSpread({}, Default.args.styles), {}, {
    url: null
  })
});
NoURL.parameters = _objectSpread({}, Default.parameters);