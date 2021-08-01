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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9pbmRleC50c3giXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInBsdWdpbiIsIndpdGhPcHRpb25zIiwiYXJncyIsIm9wdGlvbnMiLCJ0aGVtZSIsInRleHRPcHRpb25zIiwic2l6ZU9wdGlvbnMiLCJjb2xvcnNPcHRpb25zIiwiZGFya01vZGUiLCJwdXJnZSIsImNvbnRlbnQiLCJyZWplY3RlZCIsInByaW50UmVqZWN0ZWQiLCJleHRlbmQiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLGdCQUFPQyxXQUFQLENBQ2YsWUFBVztBQUNULFNBQU8sVUFBVUMsSUFBVixFQUFnQjtBQUNyQiw2QkFBY0EsSUFBZDtBQUNELEdBRkQ7QUFHRCxDQUxjLEVBTWYsVUFBVUMsT0FBVixFQUFtQjtBQUNqQixNQUFNQyxLQUFLLGlEQUFPQyxpQkFBUCxHQUF1QkMsa0JBQXZCLEdBQXVDQyxxQkFBdkMsQ0FBWDs7QUFDQSxTQUFPO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxPQURMO0FBRUxDLElBQUFBLEtBQUssRUFBRTtBQUNMQyxNQUFBQSxPQUFPLEVBQUUsQ0FDUCw0Q0FETyxDQURKO0FBSUxQLE1BQUFBLE9BQU8sRUFBRTtBQUNQUSxRQUFBQSxRQUFRLEVBQUUsSUFESDtBQUVQQyxRQUFBQSxhQUFhLEVBQUU7QUFGUjtBQUpKLEtBRkY7QUFXTFIsSUFBQUEsS0FBSyxFQUFFO0FBQ0xTLE1BQUFBLE1BQU0sRUFBRVQ7QUFESCxLQVhGO0FBY0xVLElBQUFBLFFBQVEsRUFBRTtBQUNSRCxNQUFBQSxNQUFNLEVBQUVDO0FBREE7QUFkTCxHQUFQO0FBa0JELENBMUJjLENBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBsdWdpbiBmcm9tICd0YWlsd2luZGNzcy9wbHVnaW4nXG5pbXBvcnQgeyB0ZXh0T3B0aW9ucywgdGV4dEZ1bmN0aW9ucyB9IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgeyBzaXplT3B0aW9ucyB9IGZyb20gJy4vc2l6ZXMnO1xuaW1wb3J0IHsgY29sb3JzT3B0aW9ucyB9IGZyb20gJy4vY29sb3JzJztcbmltcG9ydCB7IHZhcmlhbnRzIH0gZnJvbSAnLi92YXJpYW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gcGx1Z2luLndpdGhPcHRpb25zKFxuICBmdW5jdGlvbiAoKXtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIHRleHRGdW5jdGlvbnMoYXJncyk7XG4gICAgfVxuICB9LFxuICBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGNvbnN0IHRoZW1lID0gey4uLnRleHRPcHRpb25zLCAuLi5zaXplT3B0aW9ucywgLi4uY29sb3JzT3B0aW9uc307XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhcmtNb2RlOiAnY2xhc3MnLFxuICAgICAgcHVyZ2U6IHtcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICcuL3N0b3JpZXMvY29tcG9uZW50cy8qKi8qLkAoanN8anN4fHRzfHRzeCknLFxuICAgICAgICBdLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcmVqZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgcHJpbnRSZWplY3RlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aGVtZToge1xuICAgICAgICBleHRlbmQ6IHRoZW1lXG4gICAgICB9LFxuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgZXh0ZW5kOiB2YXJpYW50c1xuICAgICAgfVxuICAgIH0gXG4gIH1cbilcblxuXG4iXX0=