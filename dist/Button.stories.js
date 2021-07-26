"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Button = require("./Button");

var _default = {
  title: 'Tjikko/Buttons',
  component: _Button.Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "tertiary"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["small", "default", "large"]
      }
    },
    forceDark: {
      control: {
        type: "boolean"
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Button.Button, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  type: "primary",
  text: 'LABEL',
  url: '',
  icon: 'none',
  size: "default",
  forceDark: false
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvQnV0dG9uLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiQnV0dG9uIiwiYXJnVHlwZXMiLCJ0eXBlIiwiY29udHJvbCIsIm9wdGlvbnMiLCJzaXplIiwiZm9yY2VEYXJrIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJ0ZXh0IiwidXJsIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxnQkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLGNBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLElBQUksRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUQsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JFLFFBQUFBLE9BQU8sRUFBRSxDQUFDLFNBQUQsRUFBWSxVQUFaO0FBQTNCO0FBQVgsS0FERTtBQUVSQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUYsTUFBQUEsT0FBTyxFQUFFO0FBQUVELFFBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCRSxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixPQUFyQjtBQUEzQjtBQUFYLEtBRkU7QUFHUkUsSUFBQUEsU0FBUyxFQUFFO0FBQUVILE1BQUFBLE9BQU8sRUFBRTtBQUFFRCxRQUFBQSxJQUFJLEVBQUU7QUFBUjtBQUFYO0FBSEgsR0FIRztBQVFiSyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQVJDLEM7OztBQWFmLElBQU1DLFFBQTRCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsY0FBRCxFQUFZQSxJQUFaLENBQS9DOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYlIsRUFBQUEsSUFBSSxFQUFFLFNBRE87QUFFYlcsRUFBQUEsSUFBSSxFQUFFLE9BRk87QUFHYkMsRUFBQUEsR0FBRyxFQUFFLEVBSFE7QUFJYkMsRUFBQUEsSUFBSSxFQUFFLE1BSk87QUFLYlYsRUFBQUEsSUFBSSxFQUFFLFNBTE87QUFNYkMsRUFBQUEsU0FBUyxFQUFFO0FBTkUsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uUHJvcHMgfSBmcm9tIFwiLi9CdXR0b25cIlxuaW1wb3J0IHsgU3RvcnksIE1ldGEgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9CdXR0b25zJyxcbiAgY29tcG9uZW50OiBCdXR0b24sXG4gIGFyZ1R5cGVzOiB7XG4gICAgdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcInByaW1hcnlcIiwgXCJ0ZXJ0aWFyeVwiXSB9fSxcbiAgICBzaXplOiB7IGNvbnRyb2w6IHsgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wic21hbGxcIiwgXCJkZWZhdWx0XCIsIFwibGFyZ2VcIl0gfX0sXG4gICAgZm9yY2VEYXJrOiB7IGNvbnRyb2w6IHsgdHlwZTogXCJib29sZWFuXCIgfX1cbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIEJ1dHRvbnMnXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8QnV0dG9uUHJvcHM+ID0gKGFyZ3MpID0+IDxCdXR0b24gey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgdHlwZTogXCJwcmltYXJ5XCIsXG4gIHRleHQ6ICdMQUJFTCcsXG4gIHVybDogJycsXG4gIGljb246ICdub25lJyxcbiAgc2l6ZTogXCJkZWZhdWx0XCIsXG4gIGZvcmNlRGFyazogZmFsc2Vcbn0iXX0=