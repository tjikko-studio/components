"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _SideNav = require("./SideNav");

var _default = {
  title: 'Tjikko/nav/SideNav',
  component: _SideNav.SideNav,
  argTypes: {},
  parameters: {
    componentSubtitle: 'The SideNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_SideNav.SideNav, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  navObj: [{
    type: "linkheader",
    status: "active",
    text: "All",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "header",
    status: "default",
    text: "Use case",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Event",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Sales office",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Presentation",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Remote",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "header",
    status: "default",
    text: "Industry",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Residential",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Commercial",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Engineering",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }, {
    type: "link",
    status: "default",
    text: "Mix",
    url: "https://i.pravatar.cc/".concat(Math.ceil(1000 * Math.random()))
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1NpZGVOYXYuc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJTaWRlTmF2IiwiYXJnVHlwZXMiLCJwYXJhbWV0ZXJzIiwiY29tcG9uZW50U3VidGl0bGUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCIsIm5hdk9iaiIsInR5cGUiLCJzdGF0dXMiLCJ0ZXh0IiwidXJsIiwiTWF0aCIsImNlaWwiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFHZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsb0JBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQyxnQkFGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUUsRUFIRztBQUtiQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQUxDLEM7OztBQVVmLElBQU1DLFFBQTZCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsZ0JBQUQsRUFBYUEsSUFBYixDQUFoRDs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JHLEVBQUFBLE1BQU0sRUFBRSxDQUNOO0FBQ0VDLElBQUFBLElBQUksRUFBRSxZQURSO0FBRUVDLElBQUFBLE1BQU0sRUFBRSxRQUZWO0FBR0VDLElBQUFBLElBQUksRUFBRSxLQUhSO0FBSUVDLElBQUFBLEdBQUcsa0NBQTJCQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFPRCxJQUFJLENBQUNFLE1BQUwsRUFBakIsQ0FBM0I7QUFKTCxHQURNLEVBT047QUFDRU4sSUFBQUEsSUFBSSxFQUFFLFFBRFI7QUFFRUMsSUFBQUEsTUFBTSxFQUFFLFNBRlY7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLFVBSFI7QUFJRUMsSUFBQUEsR0FBRyxrQ0FBMkJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE9BQU9ELElBQUksQ0FBQ0UsTUFBTCxFQUFqQixDQUEzQjtBQUpMLEdBUE0sRUFhTjtBQUNFTixJQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFQyxJQUFBQSxNQUFNLEVBQUUsU0FGVjtBQUdFQyxJQUFBQSxJQUFJLEVBQUUsT0FIUjtBQUlFQyxJQUFBQSxHQUFHLGtDQUEyQkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQTNCO0FBSkwsR0FiTSxFQW1CTjtBQUNFTixJQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFQyxJQUFBQSxNQUFNLEVBQUUsU0FGVjtBQUdFQyxJQUFBQSxJQUFJLEVBQUUsY0FIUjtBQUlFQyxJQUFBQSxHQUFHLGtDQUEyQkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQTNCO0FBSkwsR0FuQk0sRUF5Qk47QUFDRU4sSUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUMsSUFBQUEsTUFBTSxFQUFFLFNBRlY7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLGNBSFI7QUFJRUMsSUFBQUEsR0FBRyxrQ0FBMkJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE9BQU9ELElBQUksQ0FBQ0UsTUFBTCxFQUFqQixDQUEzQjtBQUpMLEdBekJNLEVBK0JOO0FBQ0VOLElBQUFBLElBQUksRUFBRSxNQURSO0FBRUVDLElBQUFBLE1BQU0sRUFBRSxTQUZWO0FBR0VDLElBQUFBLElBQUksRUFBRSxRQUhSO0FBSUVDLElBQUFBLEdBQUcsa0NBQTJCQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFPRCxJQUFJLENBQUNFLE1BQUwsRUFBakIsQ0FBM0I7QUFKTCxHQS9CTSxFQXFDTjtBQUNFTixJQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxJQUFBQSxNQUFNLEVBQUUsU0FGVjtBQUdFQyxJQUFBQSxJQUFJLEVBQUUsVUFIUjtBQUlFQyxJQUFBQSxHQUFHLGtDQUEyQkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQTNCO0FBSkwsR0FyQ00sRUEyQ047QUFDRU4sSUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUMsSUFBQUEsTUFBTSxFQUFFLFNBRlY7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLGFBSFI7QUFJRUMsSUFBQUEsR0FBRyxrQ0FBMkJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE9BQU9ELElBQUksQ0FBQ0UsTUFBTCxFQUFqQixDQUEzQjtBQUpMLEdBM0NNLEVBaUROO0FBQ0VOLElBQUFBLElBQUksRUFBRSxNQURSO0FBRUVDLElBQUFBLE1BQU0sRUFBRSxTQUZWO0FBR0VDLElBQUFBLElBQUksRUFBRSxZQUhSO0FBSUVDLElBQUFBLEdBQUcsa0NBQTJCQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxPQUFPRCxJQUFJLENBQUNFLE1BQUwsRUFBakIsQ0FBM0I7QUFKTCxHQWpETSxFQXVETjtBQUNFTixJQUFBQSxJQUFJLEVBQUUsTUFEUjtBQUVFQyxJQUFBQSxNQUFNLEVBQUUsU0FGVjtBQUdFQyxJQUFBQSxJQUFJLEVBQUUsYUFIUjtBQUlFQyxJQUFBQSxHQUFHLGtDQUEyQkMsSUFBSSxDQUFDQyxJQUFMLENBQVUsT0FBT0QsSUFBSSxDQUFDRSxNQUFMLEVBQWpCLENBQTNCO0FBSkwsR0F2RE0sRUE2RE47QUFDRU4sSUFBQUEsSUFBSSxFQUFFLE1BRFI7QUFFRUMsSUFBQUEsTUFBTSxFQUFFLFNBRlY7QUFHRUMsSUFBQUEsSUFBSSxFQUFFLEtBSFI7QUFJRUMsSUFBQUEsR0FBRyxrQ0FBMkJDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE9BQU9ELElBQUksQ0FBQ0UsTUFBTCxFQUFqQixDQUEzQjtBQUpMLEdBN0RNO0FBREssQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2lkZU5hdiwgU2lkZU5hdlByb3BzfSBmcm9tIFwiLi9TaWRlTmF2XCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL25hdi9TaWRlTmF2JyxcbiAgY29tcG9uZW50OiBTaWRlTmF2LFxuICBhcmdUeXBlczoge1xuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgU2lkZU5hdidcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxTaWRlTmF2UHJvcHM+ID0gKGFyZ3MpID0+IDxTaWRlTmF2IHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIG5hdk9iajogW1xuICAgIHtcbiAgICAgIHR5cGU6IFwibGlua2hlYWRlclwiLFxuICAgICAgc3RhdHVzOiBcImFjdGl2ZVwiLFxuICAgICAgdGV4dDogXCJBbGxcIixcbiAgICAgIHVybDogYGh0dHBzOi8vaS5wcmF2YXRhci5jYy8ke01hdGguY2VpbCgxMDAwICogTWF0aC5yYW5kb20oKSl9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwiaGVhZGVyXCIsXG4gICAgICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICAgICAgdGV4dDogXCJVc2UgY2FzZVwiLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9pLnByYXZhdGFyLmNjLyR7TWF0aC5jZWlsKDEwMDAgKiBNYXRoLnJhbmRvbSgpKX1gLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICAgICAgdGV4dDogXCJFdmVudFwiLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9pLnByYXZhdGFyLmNjLyR7TWF0aC5jZWlsKDEwMDAgKiBNYXRoLnJhbmRvbSgpKX1gLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJsaW5rXCIsXG4gICAgICBzdGF0dXM6IFwiZGVmYXVsdFwiLFxuICAgICAgdGV4dDogXCJTYWxlcyBvZmZpY2VcIixcbiAgICAgIHVybDogYGh0dHBzOi8vaS5wcmF2YXRhci5jYy8ke01hdGguY2VpbCgxMDAwICogTWF0aC5yYW5kb20oKSl9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwibGlua1wiLFxuICAgICAgc3RhdHVzOiBcImRlZmF1bHRcIixcbiAgICAgIHRleHQ6IFwiUHJlc2VudGF0aW9uXCIsXG4gICAgICB1cmw6IGBodHRwczovL2kucHJhdmF0YXIuY2MvJHtNYXRoLmNlaWwoMTAwMCAqIE1hdGgucmFuZG9tKCkpfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gICAgICB0ZXh0OiBcIlJlbW90ZVwiLFxuICAgICAgdXJsOiBgaHR0cHM6Ly9pLnByYXZhdGFyLmNjLyR7TWF0aC5jZWlsKDEwMDAgKiBNYXRoLnJhbmRvbSgpKX1gLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogXCJoZWFkZXJcIixcbiAgICAgIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gICAgICB0ZXh0OiBcIkluZHVzdHJ5XCIsXG4gICAgICB1cmw6IGBodHRwczovL2kucHJhdmF0YXIuY2MvJHtNYXRoLmNlaWwoMTAwMCAqIE1hdGgucmFuZG9tKCkpfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gICAgICB0ZXh0OiBcIlJlc2lkZW50aWFsXCIsXG4gICAgICB1cmw6IGBodHRwczovL2kucHJhdmF0YXIuY2MvJHtNYXRoLmNlaWwoMTAwMCAqIE1hdGgucmFuZG9tKCkpfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiBcImxpbmtcIixcbiAgICAgIHN0YXR1czogXCJkZWZhdWx0XCIsXG4gICAgICB0ZXh0OiBcIkNvbW1lcmNpYWxcIixcbiAgICAgIHVybDogYGh0dHBzOi8vaS5wcmF2YXRhci5jYy8ke01hdGguY2VpbCgxMDAwICogTWF0aC5yYW5kb20oKSl9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwibGlua1wiLFxuICAgICAgc3RhdHVzOiBcImRlZmF1bHRcIixcbiAgICAgIHRleHQ6IFwiRW5naW5lZXJpbmdcIixcbiAgICAgIHVybDogYGh0dHBzOi8vaS5wcmF2YXRhci5jYy8ke01hdGguY2VpbCgxMDAwICogTWF0aC5yYW5kb20oKSl9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IFwibGlua1wiLFxuICAgICAgc3RhdHVzOiBcImRlZmF1bHRcIixcbiAgICAgIHRleHQ6IFwiTWl4XCIsXG4gICAgICB1cmw6IGBodHRwczovL2kucHJhdmF0YXIuY2MvJHtNYXRoLmNlaWwoMTAwMCAqIE1hdGgucmFuZG9tKCkpfWAsXG4gICAgfVxuICBdXG59XG4iXX0=