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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2t0ZXJ0aWFyeS9UZXJ0aWFyeUJsb2NrLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiVGVydGlhcnlCbG9jayIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZXVybCIsImluZm8iLCJoZWFkIiwidGV4dCIsIldpZHRoQ29udHJvbCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSw2QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLDRCQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQUVELFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQUEzQjtBQUFYLEtBREU7QUFFUkMsSUFBQUEsTUFBTSxFQUFFO0FBQUVGLE1BQUFBLE9BQU8sRUFBRTtBQUFFRCxRQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFYO0FBRkEsR0FIRztBQU9iSSxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVBDLEM7OztBQVlmLElBQU1DLFFBQW1DLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsNEJBQUQsRUFBbUJBLElBQW5CLENBQXREOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYlAsRUFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYkcsRUFBQUEsTUFBTSxFQUFFLEtBRks7QUFHYk8sRUFBQUEsUUFBUSxFQUFFLG9DQUhHO0FBSWJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxJQUFJLEVBQUUsU0FERjtBQUVKQyxJQUFBQSxJQUFJLEVBQUU7QUFGRjtBQUpPLENBQWY7QUFTTyxJQUFNQyxZQUFZLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBckI7O0FBQ1BLLFlBQVksQ0FBQ1AsSUFBYjtBQUNFUSxFQUFBQSxTQUFTLEVBQUU7QUFEYixHQUVLUCxPQUFPLENBQUNELElBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXJ0aWFyeUJsb2NrLCBUZXJ0aWFyeUJsb2NrUHJvcHMgfSBmcm9tIFwiLi9UZXJ0aWFyeUJsb2NrXCJcbmltcG9ydCB7IFN0b3J5LCBNZXRhIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vYmxvY2tzL1RlcnRpYXJ5QmxvY2snLFxuICBjb21wb25lbnQ6IFRlcnRpYXJ5QmxvY2ssXG4gIGFyZ1R5cGVzOiB7XG4gICAgdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImRlZmF1bHRcIiwgXCJ2ZXJ0aWNhbFwiXSB9fSxcbiAgICBtaXJyb3I6IHsgY29udHJvbDogeyB0eXBlOiBcImJvb2xlYW5cIn19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgVGVydGlhcnlCbG9jaydcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxUZXJ0aWFyeUJsb2NrUHJvcHM+ID0gKGFyZ3MpID0+IDxUZXJ0aWFyeUJsb2NrIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIHR5cGU6IFwiZGVmYXVsdFwiLFxuICBtaXJyb3I6IGZhbHNlLFxuICBpbWFnZXVybDogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCIsXG4gIGluZm86IHtcbiAgICBoZWFkOiBcIkhlYWRpbmdcIixcbiAgICB0ZXh0OiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVsbGFtIHF1aXMgcmlzdXMgZWdldCB1cm5hIG1vbGxpcyBvcm5hcmUgdmVsIGV1IGxlby5cIlxuICB9XG59XG5leHBvcnQgY29uc3QgV2lkdGhDb250cm9sID0gVGVtcGxhdGUuYmluZCh7fSlcbldpZHRoQ29udHJvbC5hcmdzID0ge1xuICBjbGFzc05hbWU6IFwidy04MFwiLFxuICAuLi5EZWZhdWx0LmFyZ3Ncbn1cbiJdfQ==