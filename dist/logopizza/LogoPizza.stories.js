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
  title: 'Tjikko/LogoPizza',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbG9nb3BpenphL0xvZ29QaXp6YS5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkxvZ29QaXp6YSIsImFyZ1R5cGVzIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJjb21wYW55QXJyIiwiaW1nVXJsIiwiaHJlZiIsIm1vZGUiLCJDb21wYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7O2VBR2U7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLGtCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsb0JBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFLEVBSEc7QUFLYkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLGlCQUFpQixFQUFFO0FBRFQ7QUFMQyxDOzs7QUFVZixJQUFNQyxRQUErQixHQUFJQyxJQUFELGlCQUFVLG9CQUFDLG9CQUFELEVBQWVBLElBQWYsQ0FBbEQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNYRyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUFFQyxJQUFBQSxNQUFNLEVBQUUsMkJBQVY7QUFBdUNDLElBQUFBLElBQUksRUFBRTtBQUE3QyxHQURRLEVBRVI7QUFBRUQsSUFBQUEsTUFBTSxFQUFFLDJCQUFWO0FBQXVDQyxJQUFBQSxJQUFJLEVBQUU7QUFBN0MsR0FGUSxFQUdSO0FBQUVELElBQUFBLE1BQU0sRUFBRSwyQkFBVjtBQUF1Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQTdDLEdBSFEsRUFJUjtBQUFFRCxJQUFBQSxNQUFNLEVBQUUsMkJBQVY7QUFBdUNDLElBQUFBLElBQUksRUFBRTtBQUE3QyxHQUpRLEVBS1I7QUFBRUQsSUFBQUEsTUFBTSxFQUFFLDJCQUFWO0FBQXVDQyxJQUFBQSxJQUFJLEVBQUU7QUFBN0MsR0FMUSxFQU1SO0FBQUVELElBQUFBLE1BQU0sRUFBRSwyQkFBVjtBQUF1Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQTdDLEdBTlEsRUFPUjtBQUFFRCxJQUFBQSxNQUFNLEVBQUUsMkJBQVY7QUFBdUNDLElBQUFBLElBQUksRUFBRTtBQUE3QyxHQVBRLEVBUVI7QUFBRUQsSUFBQUEsTUFBTSxFQUFFLDJCQUFWO0FBQXVDQyxJQUFBQSxJQUFJLEVBQUU7QUFBN0MsR0FSUSxDQVNSO0FBVFEsR0FERDtBQVlYQyxFQUFBQSxJQUFJLEVBQUU7QUFaSyxDQUFmO0FBZU8sSUFBTUMsT0FBTyxHQUFHUixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQSyxPQUFPLENBQUNQLElBQVIsbUNBQ09DLE9BQU8sQ0FBQ0QsSUFEZjtBQUVJTSxFQUFBQSxJQUFJLEVBQUU7QUFGViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvZ29QaXp6YSwgTG9nb1BpenphUHJvcHMgfSBmcm9tIFwiLi9Mb2dvUGl6emFcIlxuaW1wb3J0IHsgU3RvcnksIE1ldGEgfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9Mb2dvUGl6emEnLFxuICBjb21wb25lbnQ6IExvZ29QaXp6YSxcbiAgYXJnVHlwZXM6IHtcbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIExvZ29QaXp6YSdcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxMb2dvUGl6emFQcm9wcz4gPSAoYXJncykgPT4gPExvZ29QaXp6YSB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICAgIGNvbXBhbnlBcnI6IFtcbiAgICAgICAgeyBpbWdVcmw6IFwiLi9pbWFnZXMvdGVzdF9sb2dvXzAxLnBuZ1wiLCBocmVmOiBcIiNcIiB9LFxuICAgICAgICB7IGltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDIucG5nXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgICAgIHsgaW1nVXJsOiBcIi4vaW1hZ2VzL3Rlc3RfbG9nb18wMy5wbmdcIiwgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgeyBpbWdVcmw6IFwiLi9pbWFnZXMvdGVzdF9sb2dvXzA0LnBuZ1wiLCBocmVmOiBcIiNcIiB9LFxuICAgICAgICB7IGltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDUucG5nXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgICAgIHsgaW1nVXJsOiBcIi4vaW1hZ2VzL3Rlc3RfbG9nb18wNi5wbmdcIiwgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgeyBpbWdVcmw6IFwiLi9pbWFnZXMvdGVzdF9sb2dvXzA3LnBuZ1wiLCBocmVmOiBcIiNcIiB9LFxuICAgICAgICB7IGltZ1VybDogXCIuL2ltYWdlcy90ZXN0X2xvZ29fMDgucG5nXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgICAgIC8veyBpbWdVcmw6IFwiLi4vLi4vYXNzZXRzL2ltYWdlcy90ZXN0X2xvZ29fMDkucG5nXCIsIGhyZWY6IFwiI1wiIH0sXG4gICAgXSxcbiAgICBtb2RlOiBcIkRlZmF1bHRcIlxufVxuXG5leHBvcnQgY29uc3QgQ29tcGFjdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5Db21wYWN0LmFyZ3MgPSB7XG4gICAgLi4uRGVmYXVsdC5hcmdzLFxuICAgIG1vZGU6IFwiQ29tcGFjdFwiXG59Il19