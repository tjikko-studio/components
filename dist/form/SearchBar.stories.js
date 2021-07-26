"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Disabled = exports.Focused = exports.Text = exports.default = void 0;

var _SearchBar = require("./SearchBar");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/Forms/SearchBar',
  component: _SearchBar.SearchBar,
  parameters: {
    componentSubtitle: 'The Forms/SearchBar'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SearchBar.SearchBar, args);

var Text = Template.bind({});
exports.Text = Text;
Text.args = {
  text: 'Search',
  placeHolder: 'Search'
};
var Focused = Template.bind({});
exports.Focused = Focused;
Focused.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  isFocussed: true
});
var Disabled = Template.bind({});
exports.Disabled = Disabled;
Disabled.args = _objectSpread(_objectSpread({}, Text.args), {}, {
  text: '',
  isDisabled: true
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWFyY2hCYXIuc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJTZWFyY2hCYXIiLCJwYXJhbWV0ZXJzIiwiY29tcG9uZW50U3VidGl0bGUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJUZXh0IiwiYmluZCIsInRleHQiLCJwbGFjZUhvbGRlciIsIkZvY3VzZWQiLCJpc0ZvY3Vzc2VkIiwiRGlzYWJsZWQiLCJpc0Rpc2FibGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBR2U7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLHdCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsb0JBRkU7QUFHYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFIQyxDOzs7QUFRZixJQUFNQyxRQUErQixHQUFJQyxJQUFELGlCQUFVLG9CQUFDLG9CQUFELEVBQWVBLElBQWYsQ0FBbEQ7O0FBRU8sSUFBTUMsSUFBSSxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWI7O0FBQ1BELElBQUksQ0FBQ0QsSUFBTCxHQUFZO0FBQ1ZHLEVBQUFBLElBQUksRUFBRSxRQURJO0FBRVZDLEVBQUFBLFdBQVcsRUFBRTtBQUZILENBQVo7QUFJTyxJQUFNQyxPQUFPLEdBQUdOLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BHLE9BQU8sQ0FBQ0wsSUFBUixtQ0FDS0MsSUFBSSxDQUFDRCxJQURWO0FBRUVNLEVBQUFBLFVBQVUsRUFBRTtBQUZkO0FBSU8sSUFBTUMsUUFBUSxHQUFHUixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWpCOztBQUNQSyxRQUFRLENBQUNQLElBQVQsbUNBQ0tDLElBQUksQ0FBQ0QsSUFEVjtBQUVFRyxFQUFBQSxJQUFJLEVBQUUsRUFGUjtBQUdFSyxFQUFBQSxVQUFVLEVBQUU7QUFIZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaEJhciwgU2VhcmNoQmFyUHJvcHMgfSBmcm9tICcuL1NlYXJjaEJhcidcbmltcG9ydCB7IFN0b3J5LCBNZXRhIH0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vRm9ybXMvU2VhcmNoQmFyJyxcbiAgY29tcG9uZW50OiBTZWFyY2hCYXIsXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBGb3Jtcy9TZWFyY2hCYXInXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8U2VhcmNoQmFyUHJvcHM+ID0gKGFyZ3MpID0+IDxTZWFyY2hCYXIgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gVGVtcGxhdGUuYmluZCh7fSlcblRleHQuYXJncyA9IHtcbiAgdGV4dDogJ1NlYXJjaCcsXG4gIHBsYWNlSG9sZGVyOiAnU2VhcmNoJ1xufVxuZXhwb3J0IGNvbnN0IEZvY3VzZWQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRm9jdXNlZC5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIGlzRm9jdXNzZWQ6IHRydWVcbn1cbmV4cG9ydCBjb25zdCBEaXNhYmxlZCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EaXNhYmxlZC5hcmdzID0ge1xuICAuLi5UZXh0LmFyZ3MsXG4gIHRleHQ6ICcnLFxuICBpc0Rpc2FibGVkOiB0cnVlXG59XG4iXX0=