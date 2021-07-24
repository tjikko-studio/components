"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidthControl = exports.Default = exports.default = void 0;

var _PrimaryBlock = require("./PrimaryBlock");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/PrimaryBlock',
  component: _PrimaryBlock.PrimaryBlock,
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
    componentSubtitle: 'The PrimaryBlock'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_PrimaryBlock.PrimaryBlock, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "default",
  mirror: false,
  imageurl: "https://source.unsplash.com/random",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2twcmltYXJ5L1ByaW1hcnlCbG9jay5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlByaW1hcnlCbG9jayIsImFyZ1R5cGVzIiwidHlwZSIsImNvbnRyb2wiLCJvcHRpb25zIiwibWlycm9yIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJpbWFnZXVybCIsImluZm8iLCJoZWFkIiwidGV4dCIsImN0YSIsIm5hbWUiLCJ1cmwiLCJXaWR0aENvbnRyb2wiLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7ZUFHZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsNEJBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQywwQkFGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFFRCxRQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkUsUUFBQUEsT0FBTyxFQUFFLENBQUMsU0FBRCxFQUFZLFVBQVo7QUFBM0I7QUFBWCxLQURFO0FBRVJDLElBQUFBLE1BQU0sRUFBRTtBQUFFRixNQUFBQSxPQUFPLEVBQUU7QUFBRUQsUUFBQUEsSUFBSSxFQUFFO0FBQVI7QUFBWDtBQUZBLEdBSEc7QUFPYkksRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFQQyxDOzs7QUFZZixJQUFNQyxRQUFrQyxHQUFJQyxJQUFELGlCQUFVLG9CQUFDLDBCQUFELEVBQWtCQSxJQUFsQixDQUFyRDs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JQLEVBQUFBLElBQUksRUFBRSxTQURPO0FBRWJHLEVBQUFBLE1BQU0sRUFBRSxLQUZLO0FBR2JPLEVBQUFBLFFBQVEsRUFBRSxvQ0FIRztBQUliQyxFQUFBQSxJQUFJLEVBQUU7QUFDSkMsSUFBQUEsSUFBSSxFQUFFLFNBREY7QUFFSkMsSUFBQUEsSUFBSSxFQUFFLDZJQUZGO0FBR0pDLElBQUFBLEdBQUcsRUFBRTtBQUNIQyxNQUFBQSxJQUFJLEVBQUUsVUFESDtBQUVIQyxNQUFBQSxHQUFHLEVBQUU7QUFGRjtBQUhEO0FBSk8sQ0FBZjtBQWFPLElBQU1DLFlBQVksR0FBR1gsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFyQjs7QUFDUFEsWUFBWSxDQUFDVixJQUFiO0FBQ0VXLEVBQUFBLFNBQVMsRUFBRTtBQURiLEdBRUtWLE9BQU8sQ0FBQ0QsSUFGYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaW1hcnlCbG9jaywgUHJpbWFyeUJsb2NrUHJvcHMgfSBmcm9tIFwiLi9QcmltYXJ5QmxvY2tcIlxuaW1wb3J0IHsgU3RvcnksIE1ldGEgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9ibG9ja3MvUHJpbWFyeUJsb2NrJyxcbiAgY29tcG9uZW50OiBQcmltYXJ5QmxvY2ssXG4gIGFyZ1R5cGVzOiB7XG4gICAgdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImRlZmF1bHRcIiwgXCJ2ZXJ0aWNhbFwiXSB9fSxcbiAgICBtaXJyb3I6IHsgY29udHJvbDogeyB0eXBlOiBcImJvb2xlYW5cIn19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgUHJpbWFyeUJsb2NrJ1xuICB9XG59IGFzIE1ldGFcblxuY29uc3QgVGVtcGxhdGU6IFN0b3J5PFByaW1hcnlCbG9ja1Byb3BzPiA9IChhcmdzKSA9PiA8UHJpbWFyeUJsb2NrIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIHR5cGU6IFwiZGVmYXVsdFwiLFxuICBtaXJyb3I6IGZhbHNlLFxuICBpbWFnZXVybDogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tXCIsXG4gIGluZm86IHtcbiAgICBoZWFkOiBcIkhlYWRpbmdcIixcbiAgICB0ZXh0OiBcIkN1bSBzb2NpaXMgbmF0b3F1ZSBwZW5hdGlidXMgZXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcywgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gTnVsbGFtIHF1aXMgcmlzdXMgZWdldCB1cm5hIG1vbGxpcyBvcm5hcmUgdmVsIGV1IGxlby5cIixcbiAgICBjdGE6IHtcbiAgICAgIG5hbWU6ICdjdGEgdGV4dCcsXG4gICAgICB1cmw6IFwiL2N0YXRleHRcIlxuICAgIH1cbiAgfVxufVxuZXhwb3J0IGNvbnN0IFdpZHRoQ29udHJvbCA9IFRlbXBsYXRlLmJpbmQoe30pXG5XaWR0aENvbnRyb2wuYXJncyA9IHtcbiAgY2xhc3NOYW1lOiBcInctZnVsbFwiLFxuICAuLi5EZWZhdWx0LmFyZ3Ncbn1cblxuIl19