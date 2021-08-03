"use strict";

var _plugin = _interopRequireDefault(require("tailwindcss/plugin"));

var _text = require("./text");

var _sizes = require("./sizes");

var _colors = require("./colors");

var _variants = require("./variants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

module.exports = _plugin.default.withOptions(function () {
  return function (args) {
    (0, _text.textFunctions)(args);
  };
}, function (options) {
  var theme = _objectSpread(_objectSpread(_objectSpread({}, _text.textOptions), _sizes.sizeOptions), _colors.colorsOptions);

  return {
    darkMode: 'class',
    purge: {
      content: ['./stories/components/**/*.@(js|jsx|ts|tsx)'],
      options: {
        rejected: true,
        printRejected: true
      }
    },
    theme: {
      extend: theme
    },
    variants: {
      extend: _variants.variants
    }
  };
});