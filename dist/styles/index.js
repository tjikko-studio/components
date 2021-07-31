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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9pbmRleC50c3giXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInBsdWdpbiIsIndpdGhPcHRpb25zIiwiYXJncyIsIm9wdGlvbnMiLCJ0aGVtZSIsInRleHRPcHRpb25zIiwic2l6ZU9wdGlvbnMiLCJjb2xvcnNPcHRpb25zIiwiZGFya01vZGUiLCJwdXJnZSIsImNvbnRlbnQiLCJyZWplY3RlZCIsInByaW50UmVqZWN0ZWQiLCJleHRlbmQiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLGdCQUFPQyxXQUFQLENBQ2YsWUFBVztBQUNULFNBQU8sVUFBVUMsSUFBVixFQUFnQjtBQUNyQiw2QkFBY0EsSUFBZDtBQUNELEdBRkQ7QUFHRCxDQUxjLEVBTWYsVUFBVUMsT0FBVixFQUFtQjtBQUNqQixNQUFNQyxLQUFLLGlEQUFPQyxpQkFBUCxHQUF1QkMsa0JBQXZCLEdBQXVDQyxxQkFBdkMsQ0FBWDs7QUFDQSxTQUFPO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxPQURMO0FBRUxDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUCw0Q0FETyxDQURKO0FBSUxQLE1BQUFBLE9BQU8sRUFBRTtBQUNQUSxRQUFBQSxRQUFRLEVBQUUsSUFESDtBQUVQQyxRQUFBQSxhQUFhLEVBQUU7QUFGUjtBQUpKLEtBRkY7QUFXTFIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xTLE1BQUFBLE1BQU0sRUFBRVQ7QUFESCxLQVhGO0FBY0xVLElBQUFBLFFBQVEsRUFBRTtBQUNSRCxNQUFBQSxNQUFNLEVBQUVDO0FBREE7QUFkTCxHQUFQO0FBa0JELENBMUJjLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBsdWdpbiBmcm9tICd0YWlsd2luZGNzcy9wbHVnaW4nXG5pbXBvcnQgeyBfIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHRleHRPcHRpb25zLCB0ZXh0RnVuY3Rpb25zIH0gZnJvbSAnLi90ZXh0JztcbmltcG9ydCB7IHNpemVPcHRpb25zIH0gZnJvbSAnLi9zaXplcyc7XG5pbXBvcnQgeyBjb2xvcnNPcHRpb25zIH0gZnJvbSAnLi9jb2xvcnMnO1xuaW1wb3J0IHsgdmFyaWFudHMgfSBmcm9tICcuL3ZhcmlhbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBwbHVnaW4ud2l0aE9wdGlvbnMoXG4gIGZ1bmN0aW9uICgpe1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJncykge1xuICAgICAgdGV4dEZ1bmN0aW9ucyhhcmdzKTtcbiAgICB9XG4gIH0sXG4gIGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgY29uc3QgdGhlbWUgPSB7Li4udGV4dE9wdGlvbnMsIC4uLnNpemVPcHRpb25zLCAuLi5jb2xvcnNPcHRpb25zfTtcbiAgICByZXR1cm4ge1xuICAgICAgZGFya01vZGU6ICdjbGFzcycsXG4gICAgICBwdXJnZToge1xuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgJy4vc3Rvcmllcy9jb21wb25lbnRzLyoqLyouQChqc3xqc3h8dHN8dHN4KScsXG4gICAgICAgIF0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICByZWplY3RlZDogdHJ1ZSxcbiAgICAgICAgICBwcmludFJlamVjdGVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHRoZW1lOiB7XG4gICAgICAgIGV4dGVuZDogdGhlbWVcbiAgICAgIH0sXG4gICAgICB2YXJpYW50czoge1xuICAgICAgICBleHRlbmQ6IHZhcmlhbnRzXG4gICAgICB9XG4gICAgfSBcbiAgfVxuKVxuXG5cbiJdfQ==