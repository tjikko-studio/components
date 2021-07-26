"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Icon = require("./Icon");

var _default = {
  title: 'Tjikko/blocks/Icon',
  component: _Icon.Icon,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Icon'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Icon.Icon, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "horizontal",
  imageUrl: "https://via.placeholder.com/56x56",
  heading: "Heading",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0ljb24uc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJJY29uIiwiYXJnVHlwZXMiLCJ0eXBlIiwiY29udHJvbCIsIm9wdGlvbnMiLCJwYXJhbWV0ZXJzIiwiY29tcG9uZW50U3VidGl0bGUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCIsImltYWdlVXJsIiwiaGVhZGluZyIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFHZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsb0JBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQyxVQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUU7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQUNELFFBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxZQUFELEVBQWUsVUFBZjtBQUExQjtBQUFWO0FBREUsR0FIRztBQU1iQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQU5DLEM7OztBQVdmLElBQU1DLFFBQTBCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsVUFBRCxFQUFVQSxJQUFWLENBQTdDOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYk4sRUFBQUEsSUFBSSxFQUFFLFlBRE87QUFFYlMsRUFBQUEsUUFBUSxFQUFFLG1DQUZHO0FBR2JDLEVBQUFBLE9BQU8sRUFBRSxTQUhJO0FBSWJDLEVBQUFBLElBQUksRUFBRTtBQUpPLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ljb24sIEljb25Qcm9wc30gZnJvbSBcIi4vSWNvblwiXG5pbXBvcnQge1N0b3J5LCBNZXRhfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9ibG9ja3MvSWNvbicsXG4gIGNvbXBvbmVudDogSWNvbixcbiAgYXJnVHlwZXM6IHtcbiAgICB0eXBlOiB7Y29udHJvbDoge3R5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXX19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgSWNvbidcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxJY29uUHJvcHM+ID0gKGFyZ3MpID0+IDxJY29uIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIHR5cGU6IFwiaG9yaXpvbnRhbFwiLFxuICBpbWFnZVVybDogXCJodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vNTZ4NTZcIixcbiAgaGVhZGluZzogXCJIZWFkaW5nXCIsXG4gIHRleHQ6IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQuXCIsXG59XG4iXX0=