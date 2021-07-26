"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Compact = exports.Default = exports.default = void 0;

var _LogoPizza = require("./LogoPizza");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/LogoPizza',
  component: _LogoPizza.LogoPizza,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The LogoPizza'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_LogoPizza.LogoPizza, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  companyArr: [{
    imgUrl: "./images/test_logo_01.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_02.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_03.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_04.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_05.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_06.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_07.png",
    href: "#"
  }, {
    imgUrl: "./images/test_logo_08.png",
    href: "#"
  } //{ imgUrl: "../../assets/images/test_logo_09.png", href: "#" },
  ],
  mode: "Default"
};
var Compact = Template.bind({});
exports.Compact = Compact;
Compact.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  mode: "Compact"
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0xvZ29QaXp6YS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkxvZ29QaXp6YSIsImFyZ1R5cGVzIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJjb21wYW55QXJyIiwiaW1nVXJsIiwiaHJlZiIsIm1vZGUiLCJDb21wYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBR2U7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLHlCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsb0JBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFLEVBSEc7QUFLYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFMQyxDOzs7QUFVZixJQUFNQyxRQUErQixHQUFJQyxJQUFELGlCQUFVLG9CQUFDLG9CQUFELEVBQWVBLElBQWYsQ0FBbEQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiRyxFQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUFDQyxJQUFBQSxNQUFNLEVBQUUsMkJBQVQ7QUFBc0NDLElBQUFBLElBQUksRUFBRTtBQUE1QyxHQURVLEVBRVY7QUFBQ0QsSUFBQUEsTUFBTSxFQUFFLDJCQUFUO0FBQXNDQyxJQUFBQSxJQUFJLEVBQUU7QUFBNUMsR0FGVSxFQUdWO0FBQUNELElBQUFBLE1BQU0sRUFBRSwyQkFBVDtBQUFzQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQTVDLEdBSFUsRUFJVjtBQUFDRCxJQUFBQSxNQUFNLEVBQUUsMkJBQVQ7QUFBc0NDLElBQUFBLElBQUksRUFBRTtBQUE1QyxHQUpVLEVBS1Y7QUFBQ0QsSUFBQUEsTUFBTSxFQUFFLDJCQUFUO0FBQXNDQyxJQUFBQSxJQUFJLEVBQUU7QUFBNUMsR0FMVSxFQU1WO0FBQUNELElBQUFBLE1BQU0sRUFBRSwyQkFBVDtBQUFzQ0MsSUFBQUEsSUFBSSxFQUFFO0FBQTVDLEdBTlUsRUFPVjtBQUFDRCxJQUFBQSxNQUFNLEVBQUUsMkJBQVQ7QUFBc0NDLElBQUFBLElBQUksRUFBRTtBQUE1QyxHQVBVLEVBUVY7QUFBQ0QsSUFBQUEsTUFBTSxFQUFFLDJCQUFUO0FBQXNDQyxJQUFBQSxJQUFJLEVBQUU7QUFBNUMsR0FSVSxDQVNWO0FBVFUsR0FEQztBQVliQyxFQUFBQSxJQUFJLEVBQUU7QUFaTyxDQUFmO0FBZU8sSUFBTUMsT0FBTyxHQUFHUixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQSyxPQUFPLENBQUNQLElBQVIsbUNBQ0tDLE9BQU8sQ0FBQ0QsSUFEYjtBQUVFTSxFQUFBQSxJQUFJLEVBQUU7QUFGUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nb1BpenphLCBMb2dvUGl6emFQcm9wc30gZnJvbSBcIi4vTG9nb1BpenphXCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL2Jsb2Nrcy9Mb2dvUGl6emEnLFxuICBjb21wb25lbnQ6IExvZ29QaXp6YSxcbiAgYXJnVHlwZXM6IHtcbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIExvZ29QaXp6YSdcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxMb2dvUGl6emFQcm9wcz4gPSAoYXJncykgPT4gPExvZ29QaXp6YSB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICBjb21wYW55QXJyOiBbXG4gICAge2ltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDEucG5nXCIsIGhyZWY6IFwiI1wifSxcbiAgICB7aW1nVXJsOiBcIi4vaW1hZ2VzL3Rlc3RfbG9nb18wMi5wbmdcIiwgaHJlZjogXCIjXCJ9LFxuICAgIHtpbWdVcmw6IFwiLi9pbWFnZXMvdGVzdF9sb2dvXzAzLnBuZ1wiLCBocmVmOiBcIiNcIn0sXG4gICAge2ltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDQucG5nXCIsIGhyZWY6IFwiI1wifSxcbiAgICB7aW1nVXJsOiBcIi4vaW1hZ2VzL3Rlc3RfbG9nb18wNS5wbmdcIiwgaHJlZjogXCIjXCJ9LFxuICAgIHtpbWdVcmw6IFwiLi9pbWFnZXMvdGVzdF9sb2dvXzA2LnBuZ1wiLCBocmVmOiBcIiNcIn0sXG4gICAge2ltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDcucG5nXCIsIGhyZWY6IFwiI1wifSxcbiAgICB7aW1nVXJsOiBcIi4vaW1hZ2VzL3Rlc3RfbG9nb18wOC5wbmdcIiwgaHJlZjogXCIjXCJ9LFxuICAgIC8veyBpbWdVcmw6IFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXN0X2xvZ29fMDkucG5nXCIsIGhyZWY6IFwiI1wiIH0sXG4gIF0sXG4gIG1vZGU6IFwiRGVmYXVsdFwiXG59XG5cbmV4cG9ydCBjb25zdCBDb21wYWN0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkNvbXBhY3QuYXJncyA9IHtcbiAgLi4uRGVmYXVsdC5hcmdzLFxuICBtb2RlOiBcIkNvbXBhY3RcIlxufVxuIl19