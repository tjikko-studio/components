"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Success = exports.Validate = exports.Error = exports.Focused = exports.Text = exports.default = void 0;

var _Input = require("./Input");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/Forms/Input',
  component: _Input.Input,
  parameters: {
    componentSubtitle: 'The Forms/Input'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_Input.Input, args);

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  text: 'Input Text',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIklucHV0IiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiVGV4dCIsImJpbmQiLCJ0ZXh0IiwicGxhY2Vob2xkZXIiLCJpbmZvcm1hdGlvbiIsImVycm9yIiwibGFiZWwiLCJGb2N1c2VkIiwiaXNGb2N1c3NlZCIsIkVycm9yIiwiaXNFcnJvciIsIlZhbGlkYXRlIiwiaXNWYWxpZGF0aW5nIiwiU3VjY2VzcyIsImlzU3VjY2VzcyIsIkRpc2FibGVkIiwiaXNEaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxvQkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLFlBRkU7QUFHYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFIQyxDOzs7QUFRZixJQUFNQyxRQUEyQixHQUFJQyxJQUFELGlCQUFVLG9CQUFDLFlBQUQsRUFBV0EsSUFBWCxDQUE5Qzs7QUFFTyxJQUFNQyxJQUFJLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBYjs7QUFDUEQsSUFBSSxDQUFDRCxJQUFMLEdBQVk7QUFDVkcsRUFBQUEsSUFBSSxFQUFFLFlBREk7QUFFVkMsRUFBQUEsV0FBVyxFQUFFLGFBRkg7QUFHVkMsRUFBQUEsV0FBVyxFQUFFLGNBSEg7QUFJVkMsRUFBQUEsS0FBSyxFQUFFLGVBSkc7QUFLVkMsRUFBQUEsS0FBSyxFQUFFO0FBTEcsQ0FBWjtBQVFPLElBQU1DLE9BQU8sR0FBR1QsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUE0sT0FBTyxDQUFDUixJQUFSLG1DQUNLQyxJQUFJLENBQUNELElBRFY7QUFFRVMsRUFBQUEsVUFBVSxFQUFFO0FBRmQ7QUFLTyxJQUFNQyxLQUFLLEdBQUdYLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBZDs7QUFDUFEsS0FBSyxDQUFDVixJQUFOLG1DQUNLQyxJQUFJLENBQUNELElBRFY7QUFFRVcsRUFBQUEsT0FBTyxFQUFFO0FBRlg7QUFJTyxJQUFNQyxRQUFRLEdBQUdiLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBakI7O0FBQ1BVLFFBQVEsQ0FBQ1osSUFBVCxtQ0FDS0MsSUFBSSxDQUFDRCxJQURWO0FBRUVhLEVBQUFBLFlBQVksRUFBRTtBQUZoQjtBQUlPLElBQU1DLE9BQU8sR0FBR2YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUFksT0FBTyxDQUFDZCxJQUFSLG1DQUNLQyxJQUFJLENBQUNELElBRFY7QUFFRWUsRUFBQUEsU0FBUyxFQUFFO0FBRmI7QUFJTyxJQUFNQyxRQUFRLEdBQUdqQixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCOztBQUNQYyxRQUFRLENBQUNoQixJQUFULG1DQUNLQyxJQUFJLENBQUNELElBRFY7QUFFRUcsRUFBQUEsSUFBSSxFQUFFLEVBRlI7QUFHRWMsRUFBQUEsVUFBVSxFQUFFO0FBSGQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgSW5wdXRQcm9wcyB9IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgeyBTdG9yeSwgTWV0YSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL0Zvcm1zL0lucHV0JyxcbiAgY29tcG9uZW50OiBJbnB1dCxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIEZvcm1zL0lucHV0JyxcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxJbnB1dFByb3BzPiA9IChhcmdzKSA9PiA8SW5wdXQgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gVGVtcGxhdGUuYmluZCh7fSlcblRleHQuYXJncyA9IHtcbiAgdGV4dDogJ0lucHV0IFRleHQnLFxuICBwbGFjZWhvbGRlcjogJ1BsYWNlaG9sZGVyJyxcbiAgaW5mb3JtYXRpb246ICdpbmZvcm1hdGlvbnMnLFxuICBlcnJvcjogJ0Vycm9yIE1lc3NhZ2UnLFxuICBsYWJlbDogJ0xhYmVsJyxcbn1cblxuZXhwb3J0IGNvbnN0IEZvY3VzZWQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRm9jdXNlZC5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzRm9jdXNzZWQ6IHRydWUsXG59XG5cbmV4cG9ydCBjb25zdCBFcnJvciA9IFRlbXBsYXRlLmJpbmQoe30pXG5FcnJvci5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzRXJyb3I6IHRydWVcbn1cbmV4cG9ydCBjb25zdCBWYWxpZGF0ZSA9IFRlbXBsYXRlLmJpbmQoe30pXG5WYWxpZGF0ZS5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzVmFsaWRhdGluZzogdHJ1ZVxufVxuZXhwb3J0IGNvbnN0IFN1Y2Nlc3MgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuU3VjY2Vzcy5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzU3VjY2VzczogdHJ1ZVxufVxuZXhwb3J0IGNvbnN0IERpc2FibGVkID0gVGVtcGxhdGUuYmluZCh7fSlcbkRpc2FibGVkLmFyZ3MgPSB7XG4gIC4uLlRleHQuYXJncyxcbiAgdGV4dDogXCJcIixcbiAgaXNEaXNhYmxlZDogdHJ1ZVxufVxuIl19