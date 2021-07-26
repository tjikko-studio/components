"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _Tertiary = require("./Tertiary");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/Tertiary',
  component: _Tertiary.Tertiary,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["default", "vertical"]
      }
    },
    mirror: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Tertiary'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Tertiary.Tertiary, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "default",
  mirror: false,
  imageUrl: "https://source.unsplash.com/random",
  info: {
    head: "Heading",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo."
  }
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: "w-80"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1RlcnRpYXJ5LnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGVydGlhcnkiLCJhcmdUeXBlcyIsInR5cGUiLCJjb250cm9sIiwib3B0aW9ucyIsIm1pcnJvciIsInBhcmFtZXRlcnMiLCJjb21wb25lbnRTdWJ0aXRsZSIsIlRlbXBsYXRlIiwiYXJncyIsIkRlZmF1bHQiLCJiaW5kIiwiaW1hZ2VVcmwiLCJpbmZvIiwiaGVhZCIsInRleHQiLCJXaWR0aENvbnRyb2wiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFHZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsd0JBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQyxrQkFGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQUNDLE1BQUFBLE9BQU8sRUFBRTtBQUFDRCxRQUFBQSxJQUFJLEVBQUUsUUFBUDtBQUFpQkUsUUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLFVBQVo7QUFBMUI7QUFBVixLQURFO0FBRVJDLElBQUFBLE1BQU0sRUFBRTtBQUFDRixNQUFBQSxPQUFPLEVBQUU7QUFBQ0QsUUFBQUEsSUFBSSxFQUFFO0FBQVA7QUFBVjtBQUZBLEdBSEc7QUFPYkksRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFQQyxDOzs7QUFZZixJQUFNQyxRQUE4QixHQUFJQyxJQUFELGlCQUFVLG9CQUFDLGtCQUFELEVBQWNBLElBQWQsQ0FBakQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiUCxFQUFBQSxJQUFJLEVBQUUsU0FETztBQUViRyxFQUFBQSxNQUFNLEVBQUUsS0FGSztBQUdiTyxFQUFBQSxRQUFRLEVBQUUsb0NBSEc7QUFJYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLElBQUksRUFBRSxTQURGO0FBRUpDLElBQUFBLElBQUksRUFBRTtBQUZGO0FBSk8sQ0FBZjtBQVNPLElBQU1DLFlBQVksR0FBR1IsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFyQjs7QUFDUEssWUFBWSxDQUFDUCxJQUFiO0FBQ0VRLEVBQUFBLFNBQVMsRUFBRTtBQURiLEdBRUtQLE9BQU8sQ0FBQ0QsSUFGYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGVydGlhcnksIFRlcnRpYXJ5UHJvcHN9IGZyb20gXCIuL1RlcnRpYXJ5XCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL2Jsb2Nrcy9UZXJ0aWFyeScsXG4gIGNvbXBvbmVudDogVGVydGlhcnksXG4gIGFyZ1R5cGVzOiB7XG4gICAgdHlwZToge2NvbnRyb2w6IHt0eXBlOiBcInNlbGVjdFwiLCBvcHRpb25zOiBbXCJkZWZhdWx0XCIsIFwidmVydGljYWxcIl19fSxcbiAgICBtaXJyb3I6IHtjb250cm9sOiB7dHlwZTogXCJib29sZWFuXCJ9fSxcbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIFRlcnRpYXJ5J1xuICB9XG59IGFzIE1ldGFcblxuY29uc3QgVGVtcGxhdGU6IFN0b3J5PFRlcnRpYXJ5UHJvcHM+ID0gKGFyZ3MpID0+IDxUZXJ0aWFyeSB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICB0eXBlOiBcImRlZmF1bHRcIixcbiAgbWlycm9yOiBmYWxzZSxcbiAgaW1hZ2VVcmw6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbVwiLFxuICBpbmZvOiB7XG4gICAgaGVhZDogXCJIZWFkaW5nXCIsXG4gICAgdGV4dDogXCJDdW0gc29jaWlzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIE51bGxhbSBxdWlzIHJpc3VzIGVnZXQgdXJuYSBtb2xsaXMgb3JuYXJlIHZlbCBldSBsZW8uXCJcbiAgfVxufVxuZXhwb3J0IGNvbnN0IFdpZHRoQ29udHJvbCA9IFRlbXBsYXRlLmJpbmQoe30pXG5XaWR0aENvbnRyb2wuYXJncyA9IHtcbiAgY2xhc3NOYW1lOiBcInctODBcIixcbiAgLi4uRGVmYXVsdC5hcmdzXG59XG4iXX0=