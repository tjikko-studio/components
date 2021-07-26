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
  head: "Heading",
  text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.",
  cta_name: 'cta text',
  cta_link: "/ctatext"
};
var WidthControl = Template.bind({});
exports.WidthControl = WidthControl;
WidthControl.args = _objectSpread({
  className: "w-full"
}, Default.args);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzZWNvbmRhcnkvU2Vjb25kYXJ5QmxvY2suc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJTZWNvbmRhcnlCbG9jayIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZXVybCIsImhlYWQiLCJ0ZXh0IiwiY3RhX25hbWUiLCJjdGFfbGluayIsIldpZHRoQ29udHJvbCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSw4QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLDhCQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQUVELFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksVUFBWjtBQUEzQjtBQUFYLEtBREU7QUFFUkMsSUFBQUEsTUFBTSxFQUFFO0FBQUVGLE1BQUFBLE9BQU8sRUFBRTtBQUFFRCxRQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFYO0FBRkEsR0FIRztBQU9iSSxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVBDLEM7OztBQVlmLElBQU1DLFFBQW9DLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsOEJBQUQsRUFBb0JBLElBQXBCLENBQXZEOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYlAsRUFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYkcsRUFBQUEsTUFBTSxFQUFFLEtBRks7QUFHYk8sRUFBQUEsUUFBUSxFQUFFLG9DQUhHO0FBSWJDLEVBQUFBLElBQUksRUFBRSxTQUpPO0FBS2JDLEVBQUFBLElBQUksRUFBRSw2SUFMTztBQU1iQyxFQUFBQSxRQUFRLEVBQUUsVUFORztBQU9iQyxFQUFBQSxRQUFRLEVBQUU7QUFQRyxDQUFmO0FBU08sSUFBTUMsWUFBWSxHQUFHVCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQXJCOztBQUNQTSxZQUFZLENBQUNSLElBQWI7QUFDRVMsRUFBQUEsU0FBUyxFQUFFO0FBRGIsR0FFS1IsT0FBTyxDQUFDRCxJQUZiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Vjb25kYXJ5QmxvY2ssIFNlY29uZGFyeUJsb2NrUHJvcHMgfSBmcm9tIFwiLi9TZWNvbmRhcnlCbG9ja1wiXG5pbXBvcnQgeyBTdG9yeSwgTWV0YSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL2Jsb2Nrcy9TZWNvbmRhcnlCbG9jaycsXG4gIGNvbXBvbmVudDogU2Vjb25kYXJ5QmxvY2ssXG4gIGFyZ1R5cGVzOiB7XG4gICAgdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImRlZmF1bHRcIiwgXCJ2ZXJ0aWNhbFwiXSB9fSxcbiAgICBtaXJyb3I6IHsgY29udHJvbDogeyB0eXBlOiBcImJvb2xlYW5cIn19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgU2Vjb25kYXJ5QmxvY2snXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8U2Vjb25kYXJ5QmxvY2tQcm9wcz4gPSAoYXJncykgPT4gPFNlY29uZGFyeUJsb2NrIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIHR5cGU6IFwiZGVmYXVsdFwiLFxuICBtaXJyb3I6IGZhbHNlLFxuICBpbWFnZXVybDogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCIsXG4gIGhlYWQ6IFwiSGVhZGluZ1wiLFxuICB0ZXh0OiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVsbGFtIHF1aXMgcmlzdXMgZWdldCB1cm5hIG1vbGxpcyBvcm5hcmUgdmVsIGV1IGxlby5cIiwgIFxuICBjdGFfbmFtZTogJ2N0YSB0ZXh0JyxcbiAgY3RhX2xpbms6IFwiL2N0YXRleHRcIlxufVxuZXhwb3J0IGNvbnN0IFdpZHRoQ29udHJvbCA9IFRlbXBsYXRlLmJpbmQoe30pXG5XaWR0aENvbnRyb2wuYXJncyA9IHtcbiAgY2xhc3NOYW1lOiBcInctZnVsbFwiLFxuICAuLi5EZWZhdWx0LmFyZ3Ncbn1cbiJdfQ==