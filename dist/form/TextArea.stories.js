"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Success = exports.Validate = exports.Error = exports.Focused = exports.Text = exports.default = void 0;

var _TextArea = require("./TextArea");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/Forms/TextArea',
  component: _TextArea.TextArea,
  parameters: {
    componentSubtitle: 'The Forms/TextArea'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_TextArea.TextArea, args);

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  text: 'Text Area',
  placeholder: 'Placeholder',
  information: 'informations',
  error: 'Error Message',
  label: 'Label'
};
var Focused = Template.bind({});
exports.Focused = Focused;
Focused.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isFocussed: true
});
var Error = Template.bind({});
exports.Error = Error;
Error.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isError: true
});
var Validate = Template.bind({});
exports.Validate = Validate;
Validate.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isValidating: true
});
var Success = Template.bind({});
exports.Success = Success;
Success.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isSuccess: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  text: "",
  isDisabled: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9UZXh0QXJlYS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIlRleHRBcmVhIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiVGV4dCIsImJpbmQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpbmZvcm1hdGlvbiIsImVycm9yIiwibGFiZWwiLCJGb2N1c2VkIiwiaXNGb2N1c3NlZCIsIkVycm9yIiwiaXNFcnJvciIsIlZhbGlkYXRlIiwiaXNWYWxpZGF0aW5nIiwiU3VjY2VzcyIsImlzU3VjY2VzcyIsIkRpc2FibGVkIiwiaXNEaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSx1QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLGtCQUZFO0FBR2JDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxpQkFBaUIsRUFBRTtBQURUO0FBSEMsQzs7O0FBUWYsSUFBTUMsUUFBOEIsR0FBSUMsSUFBRCxpQkFBVSxvQkFBQyxrQkFBRCxFQUFjQSxJQUFkLENBQWpEOztBQUVPLElBQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFiOztBQUNQRCxJQUFJLENBQUNELElBQUwsR0FBWTtBQUNWRyxFQUFBQSxJQUFJLEVBQUUsV0FESTtBQUVWQyxFQUFBQSxXQUFXLEVBQUUsYUFGSDtBQUdWQyxFQUFBQSxXQUFXLEVBQUUsY0FISDtBQUlWQyxFQUFBQSxLQUFLLEVBQUUsZUFKRztBQUtWQyxFQUFBQSxLQUFLLEVBQUU7QUFMRyxDQUFaO0FBT08sSUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQTSxPQUFPLENBQUNSLElBQVIsbUNBQ0tDLElBQUksQ0FBQ0QsSUFEVjtBQUVFUyxFQUFBQSxVQUFVLEVBQUU7QUFGZDtBQUlPLElBQU1DLEtBQUssR0FBR1gsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFkOztBQUNQUSxLQUFLLENBQUNWLElBQU4sbUNBQ0tDLElBQUksQ0FBQ0QsSUFEVjtBQUVFVyxFQUFBQSxPQUFPLEVBQUU7QUFGWDtBQUlPLElBQU1DLFFBQVEsR0FBR2IsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUFUsUUFBUSxDQUFDWixJQUFULG1DQUNLQyxJQUFJLENBQUNELElBRFY7QUFFRWEsRUFBQUEsWUFBWSxFQUFFO0FBRmhCO0FBSU8sSUFBTUMsT0FBTyxHQUFHZixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQWSxPQUFPLENBQUNkLElBQVIsbUNBQ0tDLElBQUksQ0FBQ0QsSUFEVjtBQUVFZSxFQUFBQSxTQUFTLEVBQUU7QUFGYjtBQUlPLElBQU1DLFFBQVEsR0FBR2pCLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BjLFFBQVEsQ0FBQ2hCLElBQVQsbUNBQ0tDLElBQUksQ0FBQ0QsSUFEVjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsRUFGUjtBQUdFYyxFQUFBQSxVQUFVLEVBQUU7QUFIZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRBcmVhLCBUZXh0QXJlYVByb3BzIH0gZnJvbSAnLi9UZXh0QXJlYSdcbmltcG9ydCB7IFN0b3J5LCBNZXRhIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vRm9ybXMvVGV4dEFyZWEnLFxuICBjb21wb25lbnQ6IFRleHRBcmVhLFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgRm9ybXMvVGV4dEFyZWEnXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8VGV4dEFyZWFQcm9wcz4gPSAoYXJncykgPT4gPFRleHRBcmVhIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgVGV4dCA9IFRlbXBsYXRlLmJpbmQoe30pXG5UZXh0LmFyZ3MgPSB7XG4gIHRleHQ6ICdUZXh0IEFyZWEnLFxuICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgaW5mb3JtYXRpb246ICdpbmZvcm1hdGlvbnMnLFxuICBlcnJvcjogJ0Vycm9yIE1lc3NhZ2UnLFxuICBsYWJlbDogJ0xhYmVsJ1xufVxuZXhwb3J0IGNvbnN0IEZvY3VzZWQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRm9jdXNlZC5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzRm9jdXNzZWQ6IHRydWVcbn1cbmV4cG9ydCBjb25zdCBFcnJvciA9IFRlbXBsYXRlLmJpbmQoe30pXG5FcnJvci5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzRXJyb3I6IHRydWVcbn1cbmV4cG9ydCBjb25zdCBWYWxpZGF0ZSA9IFRlbXBsYXRlLmJpbmQoe30pXG5WYWxpZGF0ZS5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzVmFsaWRhdGluZzogdHJ1ZVxufVxuZXhwb3J0IGNvbnN0IFN1Y2Nlc3MgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuU3VjY2Vzcy5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzU3VjY2VzczogdHJ1ZVxufVxuZXhwb3J0IGNvbnN0IERpc2FibGVkID0gVGVtcGxhdGUuYmluZCh7fSlcbkRpc2FibGVkLmFyZ3MgPSB7XG4gIC4uLlRleHQuYXJncyxcbiAgdGV4dDogXCJcIixcbiAgaXNEaXNhYmxlZDogdHJ1ZVxufVxuIl19