"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _Primary = require("./Primary");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/Primary',
  component: _Primary.Primary,
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
    componentSubtitle: 'The Primary block'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Primary.Primary, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "default",
  mirror: false,
  imageUrl: "https://source.unsplash.com/random",
  info: {
    head: "Heading",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.",
    cta: {
      name: 'cta text',
      url: "/ctatext"
    }
  }
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: "w-full"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1ByaW1hcnkuc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJQcmltYXJ5IiwiYXJnVHlwZXMiLCJ0eXBlIiwiY29udHJvbCIsIm9wdGlvbnMiLCJtaXJyb3IiLCJwYXJhbWV0ZXJzIiwiY29tcG9uZW50U3VidGl0bGUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCIsImltYWdlVXJsIiwiaW5mbyIsImhlYWQiLCJ0ZXh0IiwiY3RhIiwibmFtZSIsInVybCIsIldpZHRoQ29udHJvbCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSx1QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLGdCQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQUNELFFBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQUExQjtBQUFWLEtBREU7QUFFUkMsSUFBQUEsTUFBTSxFQUFFO0FBQUNGLE1BQUFBLE9BQU8sRUFBRTtBQUFDRCxRQUFBQSxJQUFJLEVBQUU7QUFBUDtBQUFWO0FBRkEsR0FIRztBQU9iSSxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVBDLEM7OztBQVlmLElBQU1DLFFBQTZCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsZ0JBQUQsRUFBYUEsSUFBYixDQUFoRDs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JQLEVBQUFBLElBQUksRUFBRSxTQURPO0FBRWJHLEVBQUFBLE1BQU0sRUFBRSxLQUZLO0FBR2JPLEVBQUFBLFFBQVEsRUFBRSxvQ0FIRztBQUliQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFLFNBREY7QUFFSkMsSUFBQUEsSUFBSSxFQUFFLDZJQUZGO0FBR0pDLElBQUFBLEdBQUcsRUFBRTtBQUNIQyxNQUFBQSxJQUFJLEVBQUUsVUFESDtBQUVIQyxNQUFBQSxHQUFHLEVBQUU7QUFGRjtBQUhEO0FBSk8sQ0FBZjtBQWFPLElBQU1DLFlBQVksR0FBR1gsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFyQjs7QUFDUFEsWUFBWSxDQUFDVixJQUFiO0FBQ0VXLEVBQUFBLFNBQVMsRUFBRTtBQURiLEdBRUtWLE9BQU8sQ0FBQ0QsSUFGYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UHJpbWFyeSwgUHJpbWFyeVByb3BzfSBmcm9tIFwiLi9QcmltYXJ5XCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL2Jsb2Nrcy9QcmltYXJ5JyxcbiAgY29tcG9uZW50OiBQcmltYXJ5LFxuICBhcmdUeXBlczoge1xuICAgIHR5cGU6IHtjb250cm9sOiB7dHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiZGVmYXVsdFwiLCBcInZlcnRpY2FsXCJdfX0sXG4gICAgbWlycm9yOiB7Y29udHJvbDoge3R5cGU6IFwiYm9vbGVhblwifX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBQcmltYXJ5IGJsb2NrJ1xuICB9XG59IGFzIE1ldGFcblxuY29uc3QgVGVtcGxhdGU6IFN0b3J5PFByaW1hcnlQcm9wcz4gPSAoYXJncykgPT4gPFByaW1hcnkgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgdHlwZTogXCJkZWZhdWx0XCIsXG4gIG1pcnJvcjogZmFsc2UsXG4gIGltYWdlVXJsOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIixcbiAgaW5mbzoge1xuICAgIGhlYWQ6IFwiSGVhZGluZ1wiLFxuICAgIHRleHQ6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBOdWxsYW0gcXVpcyByaXN1cyBlZ2V0IHVybmEgbW9sbGlzIG9ybmFyZSB2ZWwgZXUgbGVvLlwiLFxuICAgIGN0YToge1xuICAgICAgbmFtZTogJ2N0YSB0ZXh0JyxcbiAgICAgIHVybDogXCIvY3RhdGV4dFwiXG4gICAgfVxuICB9XG59XG5leHBvcnQgY29uc3QgV2lkdGhDb250cm9sID0gVGVtcGxhdGUuYmluZCh7fSlcbldpZHRoQ29udHJvbC5hcmdzID0ge1xuICBjbGFzc05hbWU6IFwidy1mdWxsXCIsXG4gIC4uLkRlZmF1bHQuYXJnc1xufVxuIl19