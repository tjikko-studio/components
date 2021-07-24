"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _SecondaryBlock = require("./SecondaryBlock");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/SecondaryBlock',
  component: _SecondaryBlock.SecondaryBlock,
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
    componentSubtitle: 'The SecondaryBlock'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SecondaryBlock.SecondaryBlock, args);

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
  className: "w-full"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzZWNvbmRhcnkvU2Vjb25kYXJ5QmxvY2suc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJTZWNvbmRhcnlCbG9jayIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZXVybCIsImluZm8iLCJoZWFkIiwidGV4dCIsIldpZHRoQ29udHJvbCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSw4QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLDhCQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQUVELFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQUEzQjtBQUFYLEtBREU7QUFFUkMsSUFBQUEsTUFBTSxFQUFFO0FBQUVGLE1BQUFBLE9BQU8sRUFBRTtBQUFFRCxRQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFYO0FBRkEsR0FIRztBQU9iSSxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVBDLEM7OztBQVlmLElBQU1DLFFBQW9DLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsOEJBQUQsRUFBb0JBLElBQXBCLENBQXZEOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYlAsRUFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYkcsRUFBQUEsTUFBTSxFQUFFLEtBRks7QUFHYk8sRUFBQUEsUUFBUSxFQUFFLG9DQUhHO0FBSWJDLEVBQUFBLElBQUksRUFBRTtBQUNKQyxJQUFBQSxJQUFJLEVBQUUsU0FERjtBQUVKQyxJQUFBQSxJQUFJLEVBQUU7QUFGRjtBQUpPLENBQWY7QUFTTyxJQUFNQyxZQUFZLEdBQUdSLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBckI7O0FBQ1BLLFlBQVksQ0FBQ1AsSUFBYjtBQUNFUSxFQUFBQSxTQUFTLEVBQUU7QUFEYixHQUVLUCxPQUFPLENBQUNELElBRmIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWNvbmRhcnlCbG9jaywgU2Vjb25kYXJ5QmxvY2tQcm9wcyB9IGZyb20gXCIuL1NlY29uZGFyeUJsb2NrXCJcbmltcG9ydCB7IFN0b3J5LCBNZXRhIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vYmxvY2tzL1NlY29uZGFyeUJsb2NrJyxcbiAgY29tcG9uZW50OiBTZWNvbmRhcnlCbG9jayxcbiAgYXJnVHlwZXM6IHtcbiAgICB0eXBlOiB7IGNvbnRyb2w6IHsgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiZGVmYXVsdFwiLCBcInZlcnRpY2FsXCJdIH19LFxuICAgIG1pcnJvcjogeyBjb250cm9sOiB7IHR5cGU6IFwiYm9vbGVhblwifX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBTZWNvbmRhcnlCbG9jaydcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxTZWNvbmRhcnlCbG9ja1Byb3BzPiA9IChhcmdzKSA9PiA8U2Vjb25kYXJ5QmxvY2sgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgdHlwZTogXCJkZWZhdWx0XCIsXG4gIG1pcnJvcjogZmFsc2UsXG4gIGltYWdldXJsOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIixcbiAgaW5mbzoge1xuICAgIGhlYWQ6IFwiSGVhZGluZ1wiLFxuICAgIHRleHQ6IFwiQ3VtIHNvY2lpcyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBOdWxsYW0gcXVpcyByaXN1cyBlZ2V0IHVybmEgbW9sbGlzIG9ybmFyZSB2ZWwgZXUgbGVvLlwiXG4gIH1cbn1cbmV4cG9ydCBjb25zdCBXaWR0aENvbnRyb2wgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuV2lkdGhDb250cm9sLmFyZ3MgPSB7XG4gIGNsYXNzTmFtZTogXCJ3LWZ1bGxcIixcbiAgLi4uRGVmYXVsdC5hcmdzXG59XG4iXX0=