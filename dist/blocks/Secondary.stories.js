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
    componentSubtitle: 'The Secondary'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Secondary.Secondary, args);

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
  className: "w-full"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1NlY29uZGFyeS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlNlY29uZGFyeSIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZVVybCIsImluZm8iLCJoZWFkIiwidGV4dCIsIldpZHRoQ29udHJvbCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSx5QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLG9CQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQUNELFFBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQUExQjtBQUFWLEtBREU7QUFFUkMsSUFBQUEsTUFBTSxFQUFFO0FBQUNGLE1BQUFBLE9BQU8sRUFBRTtBQUFDRCxRQUFBQSxJQUFJLEVBQUU7QUFBUDtBQUFWO0FBRkEsR0FIRztBQU9iSSxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVBDLEM7OztBQVlmLElBQU1DLFFBQStCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsb0JBQUQsRUFBZUEsSUFBZixDQUFsRDs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JQLEVBQUFBLElBQUksRUFBRSxTQURPO0FBRWJHLEVBQUFBLE1BQU0sRUFBRSxLQUZLO0FBR2JPLEVBQUFBLFFBQVEsRUFBRSxvQ0FIRztBQUliQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFLFNBREY7QUFFSkMsSUFBQUEsSUFBSSxFQUFFO0FBRkY7QUFKTyxDQUFmO0FBU08sSUFBTUMsWUFBWSxHQUFHUixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQXJCOztBQUNQSyxZQUFZLENBQUNQLElBQWI7QUFDRVEsRUFBQUEsU0FBUyxFQUFFO0FBRGIsR0FFS1AsT0FBTyxDQUFDRCxJQUZiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWNvbmRhcnksIFNlY29uZGFyeVByb3BzfSBmcm9tIFwiLi9TZWNvbmRhcnlcIlxuaW1wb3J0IHtTdG9yeSwgTWV0YX0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vYmxvY2tzL1NlY29uZGFyeScsXG4gIGNvbXBvbmVudDogU2Vjb25kYXJ5LFxuICBhcmdUeXBlczoge1xuICAgIHR5cGU6IHtjb250cm9sOiB7dHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiZGVmYXVsdFwiLCBcInZlcnRpY2FsXCJdfX0sXG4gICAgbWlycm9yOiB7Y29udHJvbDoge3R5cGU6IFwiYm9vbGVhblwifX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBTZWNvbmRhcnknXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8U2Vjb25kYXJ5UHJvcHM+ID0gKGFyZ3MpID0+IDxTZWNvbmRhcnkgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgdHlwZTogXCJkZWZhdWx0XCIsXG4gIG1pcnJvcjogZmFsc2UsXG4gIGltYWdlVXJsOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIixcbiAgaW5mbzoge1xuICAgIGhlYWQ6IFwiSGVhZGluZ1wiLFxuICAgIHRleHQ6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBOdWxsYW0gcXVpcyByaXN1cyBlZ2V0IHVybmEgbW9sbGlzIG9ybmFyZSB2ZWwgZXUgbGVvLlwiXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBXaWR0aENvbnRyb2wgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuV2lkdGhDb250cm9sLmFyZ3MgPSB7XG4gIGNsYXNzTmFtZTogXCJ3LWZ1bGxcIixcbiAgLi4uRGVmYXVsdC5hcmdzXG59XG4iXX0=