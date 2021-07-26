"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _TertiaryBlock = require("./TertiaryBlock");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/TertiaryBlock',
  component: _TertiaryBlock.TertiaryBlock,
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
    componentSubtitle: 'The TertiaryBlock'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_TertiaryBlock.TertiaryBlock, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "default",
  mirror: false,
  imageurl: "https://source.unsplash.com/random",
  head: "Heading",
  text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo."
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: "w-80"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2t0ZXJ0aWFyeS9UZXJ0aWFyeUJsb2NrLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGVydGlhcnlCbG9jayIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZXVybCIsImhlYWQiLCJ0ZXh0IiwiV2lkdGhDb250cm9sIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBR2U7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLDZCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsNEJBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUQsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JFLFFBQUFBLE9BQU8sRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaO0FBQTNCO0FBQVgsS0FERTtBQUVSQyxJQUFBQSxNQUFNLEVBQUU7QUFBRUYsTUFBQUEsT0FBTyxFQUFFO0FBQUVELFFBQUFBLElBQUksRUFBRTtBQUFSO0FBQVg7QUFGQSxHQUhHO0FBT2JJLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxpQkFBaUIsRUFBRTtBQURUO0FBUEMsQzs7O0FBWWYsSUFBTUMsUUFBbUMsR0FBSUMsSUFBRCxpQkFBVSxvQkFBQyw0QkFBRCxFQUFtQkEsSUFBbkIsQ0FBdEQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiUCxFQUFBQSxJQUFJLEVBQUUsU0FETztBQUViRyxFQUFBQSxNQUFNLEVBQUUsS0FGSztBQUdiTyxFQUFBQSxRQUFRLEVBQUUsb0NBSEc7QUFJYkMsRUFBQUEsSUFBSSxFQUFFLFNBSk87QUFLYkMsRUFBQUEsSUFBSSxFQUFFO0FBTE8sQ0FBZjtBQU9PLElBQU1DLFlBQVksR0FBR1AsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFyQjs7QUFDUEksWUFBWSxDQUFDTixJQUFiO0FBQ0VPLEVBQUFBLFNBQVMsRUFBRTtBQURiLEdBRUtOLE9BQU8sQ0FBQ0QsSUFGYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRlcnRpYXJ5QmxvY2ssIFRlcnRpYXJ5QmxvY2tQcm9wcyB9IGZyb20gXCIuL1RlcnRpYXJ5QmxvY2tcIlxuaW1wb3J0IHsgU3RvcnksIE1ldGEgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9ibG9ja3MvVGVydGlhcnlCbG9jaycsXG4gIGNvbXBvbmVudDogVGVydGlhcnlCbG9jayxcbiAgYXJnVHlwZXM6IHtcbiAgICB0eXBlOiB7IGNvbnRyb2w6IHsgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiZGVmYXVsdFwiLCBcInZlcnRpY2FsXCJdIH19LFxuICAgIG1pcnJvcjogeyBjb250cm9sOiB7IHR5cGU6IFwiYm9vbGVhblwifX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBUZXJ0aWFyeUJsb2NrJ1xuICB9XG59IGFzIE1ldGFcblxuY29uc3QgVGVtcGxhdGU6IFN0b3J5PFRlcnRpYXJ5QmxvY2tQcm9wcz4gPSAoYXJncykgPT4gPFRlcnRpYXJ5QmxvY2sgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgdHlwZTogXCJkZWZhdWx0XCIsXG4gIG1pcnJvcjogZmFsc2UsXG4gIGltYWdldXJsOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIixcbiAgaGVhZDogXCJIZWFkaW5nXCIsXG4gIHRleHQ6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBOdWxsYW0gcXVpcyByaXN1cyBlZ2V0IHVybmEgbW9sbGlzIG9ybmFyZSB2ZWwgZXUgbGVvLlwiXG59XG5leHBvcnQgY29uc3QgV2lkdGhDb250cm9sID0gVGVtcGxhdGUuYmluZCh7fSlcbldpZHRoQ29udHJvbC5hcmdzID0ge1xuICBjbGFzc05hbWU6IFwidy04MFwiLFxuICAuLi5EZWZhdWx0LmFyZ3Ncbn1cbiJdfQ==