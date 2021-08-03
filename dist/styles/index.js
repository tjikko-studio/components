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
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (args) {
    (0, _text.textFunctions)(args);
  };
}, function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3N0eWxlcy9pbmRleC50c3giXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInBsdWdpbiIsIndpdGhPcHRpb25zIiwib3B0aW9ucyIsImFyZ3MiLCJ0aGVtZSIsInRleHRPcHRpb25zIiwic2l6ZU9wdGlvbnMiLCJjb2xvcnNPcHRpb25zIiwiZGFya01vZGUiLCJwdXJnZSIsImNvbnRlbnQiLCJyZWplY3RlZCIsInByaW50UmVqZWN0ZWQiLCJleHRlbmQiLCJ2YXJpYW50cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7OztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLGdCQUFPQyxXQUFQLENBQ2YsWUFBdUI7QUFBQSxNQUFiQyxPQUFhLHVFQUFILEVBQUc7QUFDckIsU0FBTyxVQUFVQyxJQUFWLEVBQWdCO0FBQ3JCLDZCQUFjQSxJQUFkO0FBQ0QsR0FGRDtBQUdELENBTGMsRUFNZixZQUF3QjtBQUFBLE1BQWRELE9BQWMsdUVBQUosRUFBSTs7QUFDdEIsTUFBTUUsS0FBSyxpREFBT0MsaUJBQVAsR0FBdUJDLGtCQUF2QixHQUF1Q0MscUJBQXZDLENBQVg7O0FBQ0EsU0FBTztBQUNMQyxJQUFBQSxRQUFRLEVBQUUsT0FETDtBQUVMQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsT0FBTyxFQUFFLENBQ1AsNENBRE8sQ0FESjtBQUlMUixNQUFBQSxPQUFPLEVBQUU7QUFDUFMsUUFBQUEsUUFBUSxFQUFFLElBREg7QUFFUEMsUUFBQUEsYUFBYSxFQUFFO0FBRlI7QUFKSixLQUZGO0FBV0xSLElBQUFBLEtBQUssRUFBRTtBQUNMUyxNQUFBQSxNQUFNLEVBQUVUO0FBREgsS0FYRjtBQWNMVSxJQUFBQSxRQUFRLEVBQUU7QUFDUkQsTUFBQUEsTUFBTSxFQUFFQztBQURBO0FBZEwsR0FBUDtBQWtCRCxDQTFCYyxDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwbHVnaW4gZnJvbSAndGFpbHdpbmRjc3MvcGx1Z2luJ1xuaW1wb3J0IHsgdGV4dE9wdGlvbnMsIHRleHRGdW5jdGlvbnMgfSBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHsgc2l6ZU9wdGlvbnMgfSBmcm9tICcuL3NpemVzJztcbmltcG9ydCB7IGNvbG9yc09wdGlvbnMgfSBmcm9tICcuL2NvbG9ycyc7XG5pbXBvcnQgeyB2YXJpYW50cyB9IGZyb20gJy4vdmFyaWFudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHBsdWdpbi53aXRoT3B0aW9ucyhcbiAgZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICB0ZXh0RnVuY3Rpb25zKGFyZ3MpO1xuICAgIH1cbiAgfSxcbiAgZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IHRoZW1lID0gey4uLnRleHRPcHRpb25zLCAuLi5zaXplT3B0aW9ucywgLi4uY29sb3JzT3B0aW9uc307XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhcmtNb2RlOiAnY2xhc3MnLFxuICAgICAgcHVyZ2U6IHtcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICcuL3N0b3JpZXMvY29tcG9uZW50cy8qKi8qLkAoanN8anN4fHRzfHRzeCknLFxuICAgICAgICBdLFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgcmVqZWN0ZWQ6IHRydWUsXG4gICAgICAgICAgcHJpbnRSZWplY3RlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB0aGVtZToge1xuICAgICAgICBleHRlbmQ6IHRoZW1lXG4gICAgICB9LFxuICAgICAgdmFyaWFudHM6IHtcbiAgICAgICAgZXh0ZW5kOiB2YXJpYW50c1xuICAgICAgfVxuICAgIH0gXG4gIH1cbilcbiJdfQ==