"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _outline = require("@heroicons/react/outline");

var _react2 = require("@headlessui/react");

var _company_logo_placeholder = _interopRequireDefault(require("../../assets/images/company_logo_placeholder.svg"));

var _NavItem = require("./NavItem");

var _MobileMenu = require("./MobileMenu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SiteNav = _ref => {
  var {
    demoButtonText = "Free Demo",
    demoUrl = "#",
    menuData = [],
    styles = "black",
    languageList = {},
    className
  } = _ref;
  var [mobileExpand, setMobileExpand] = (0, _react.useState)(false);
  var large = (0, _reactMediaHook.useMediaPredicate)("(min-width: 1024px)");
  var medium = (0, _reactMediaHook.useMediaPredicate)("(max-width: 1023px)");
  var mobile = (0, _reactMediaHook.useMediaPredicate)("(max-width: 640px)");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900 flex items-center justify-between md:justify-Start h-16 lg:h-24 px-6 lg:px-10 ".concat(styles === "transWhite" && "bg-opacity-10", " ").concat(className)
  }, /*#__PURE__*/_react.default.createElement(_company_logo_placeholder.default, {
    width: "",
    height: "",
    className: "h-3 lg:h-4 text-gray-50 w-auto"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:flex m-auto items-center lg:space-x-6"
  }, menuData.map((menuitem, index) => {
    return /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
      key: index,
      link: menuitem.captionLink ? menuitem.captionLink : "",
      styles: "default/white",
      caption: menuitem.caption,
      submenu: menuitem.submenu,
      className: "mr-9"
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden lg:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demoButtonText), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "space-x-2",
    styles: "default/white",
    caption: languageList.current ? languageList.current : "En",
    submenu: languageList.submenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "lg:hidden"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
    className: "text-gray-300 w-5 h-5"
  }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
    className: "h-6 w-6 ".concat(styles === "black" && "text-gray-300", " ").concat(styles === "transWhite" && "text-gray-300")
  }))))), mobileExpand ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, {
    demoButtonText: demoButtonText,
    demoUrl: demoUrl,
    menuData: menuData,
    styles: styles,
    languageList: languageList
  }) : '');
};

exports.SiteNav = SiteNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1NpdGVOYXYudHN4Il0sIm5hbWVzIjpbIlNpdGVOYXYiLCJkZW1vQnV0dG9uVGV4dCIsImRlbW9VcmwiLCJtZW51RGF0YSIsInN0eWxlcyIsImxhbmd1YWdlTGlzdCIsImNsYXNzTmFtZSIsIm1vYmlsZUV4cGFuZCIsInNldE1vYmlsZUV4cGFuZCIsImxhcmdlIiwibWVkaXVtIiwibW9iaWxlIiwibWFwIiwibWVudWl0ZW0iLCJpbmRleCIsImNhcHRpb25MaW5rIiwiY2FwdGlvbiIsInN1Ym1lbnUiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBd0NBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQXlCLEdBQUcsUUFPbkM7QUFBQSxNQVBvQztBQUN4Q0MsSUFBQUEsY0FBYyxHQUFHLFdBRHVCO0FBRXhDQyxJQUFBQSxPQUFPLEdBQUcsR0FGOEI7QUFHeENDLElBQUFBLFFBQVEsR0FBRyxFQUg2QjtBQUl4Q0MsSUFBQUEsTUFBTSxHQUFHLE9BSitCO0FBS3hDQyxJQUFBQSxZQUFZLEdBQUcsRUFMeUI7QUFNeENDLElBQUFBO0FBTndDLEdBT3BDO0FBQ0osTUFBTSxDQUFDQyxZQUFELEVBQWVDLGVBQWYsSUFBa0MscUJBQVMsS0FBVCxDQUF4QztBQUNBLE1BQU1DLEtBQUssR0FBRyx1Q0FBa0IscUJBQWxCLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsdUNBQWtCLHFCQUFsQixDQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBZjtBQUNBLHNCQUNFLHlFQUNFO0FBQ0UsSUFBQSxTQUFTLHNHQUFnR1AsTUFBTSxLQUFLLFlBQVosSUFBNkIsZUFBNUgsY0FBK0lFLFNBQS9JO0FBRFgsa0JBR0UsNkJBQUMsaUNBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxFQURSO0FBQ1csSUFBQSxNQUFNLEVBQUMsRUFEbEI7QUFFRSxJQUFBLFNBQVMsRUFBQztBQUZaLElBSEYsZUFPRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FJSUgsUUFBUSxDQUFDUyxHQUFULENBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEtBQXFCO0FBQ2hDLHdCQUNFLDZCQUFDLGdCQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxNQUFBLElBQUksRUFBRUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNFLFdBQWhDLEdBQThDLEVBRnREO0FBR0UsTUFBQSxNQUFNLEVBQUMsZUFIVDtBQUlFLE1BQUEsT0FBTyxFQUFFRixRQUFRLENBQUNHLE9BSnBCO0FBS0UsTUFBQSxPQUFPLEVBQUVILFFBQVEsQ0FBQ0ksT0FMcEI7QUFNRSxNQUFBLFNBQVMsRUFBQztBQU5aLE1BREY7QUFVRCxHQVhELENBSkosQ0FQRixlQXlCRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFDRSxJQUFBLElBQUksRUFBRWYsT0FEUjtBQUVFLElBQUEsU0FBUyxFQUFDO0FBRlosS0FJR0QsY0FKSCxDQUhGLGVBU0UsNkJBQUMsZ0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyxXQURaO0FBRUUsSUFBQSxNQUFNLEVBQUMsZUFGVDtBQUdFLElBQUEsT0FBTyxFQUFFSSxZQUFZLENBQUNhLE9BQWIsR0FBdUJiLFlBQVksQ0FBQ2EsT0FBcEMsR0FBOEMsSUFIekQ7QUFJRSxJQUFBLE9BQU8sRUFBRWIsWUFBWSxDQUFDWTtBQUp4QixJQVRGLENBekJGLGVBeUNFLDZCQUFDLGtCQUFEO0FBQVksSUFBQSxFQUFFLEVBQUMsS0FBZjtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsd0RBRFo7QUFFRSxJQUFBLE9BQU8sRUFBRSxNQUFNVCxlQUFlLENBQUMsQ0FBQ0QsWUFBRjtBQUZoQyxrQkFJRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLHNCQUpGLEVBS0dBLFlBQVksZ0JBQ1gsNkJBQUMsY0FBRDtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosSUFEVyxnQkFLWCw2QkFBQyxpQkFBRDtBQUNJLElBQUEsU0FBUyxvQkFBYUgsTUFBTSxLQUFLLE9BQVgsSUFBc0IsZUFBbkMsY0FBc0RBLE1BQU0sS0FBSyxZQUFYLElBQTJCLGVBQWpGO0FBRGIsSUFWSixDQURGLENBSEYsQ0F6Q0YsQ0FERixFQWdFR0csWUFBWSxnQkFDWCw2QkFBQyxzQkFBRDtBQUNFLElBQUEsY0FBYyxFQUFFTixjQURsQjtBQUVFLElBQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsSUFBQSxRQUFRLEVBQUVDLFFBSFo7QUFJRSxJQUFBLE1BQU0sRUFBRUMsTUFKVjtBQUtFLElBQUEsWUFBWSxFQUFFQztBQUxoQixJQURXLEdBUVQsRUF4RU4sQ0FERjtBQTRFRCxDQXhGTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlcywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VNZWRpYVByZWRpY2F0ZX0gZnJvbSBcInJlYWN0LW1lZGlhLWhvb2tcIlxuaW1wb3J0IHtNZW51SWNvbiwgWEljb259IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCB7RGlzY2xvc3VyZSwgTWVudSwgVHJhbnNpdGlvbn0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgQ29tcGFueUxvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jb21wYW55X2xvZ29fcGxhY2Vob2xkZXIuc3ZnJ1xuaW1wb3J0IHtOYXZJdGVtfSBmcm9tICcuL05hdkl0ZW0nXG5pbXBvcnQge01vYmlsZU1lbnV9IGZyb20gJy4vTW9iaWxlTWVudSdcbmltcG9ydCB7TWVudVR5cGV9IGZyb20gJy4vTGlzdE5hdidcblxuZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVR5cGUge1xuICBjdXJyZW50Pzogc3RyaW5nIHwgbnVsbFxuICBzdWJtZW51PzogTWVudVR5cGVbXVxufVxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbVR5cGUge1xuICBjYXB0aW9uOiBzdHJpbmdcbiAgY2FwdGlvbkxpbms/OiBzdHJpbmdcbiAgc3VibWVudT86IE1lbnVUeXBlW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaXRlTmF2UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogbWVudSBqc29uIGRhdGEgc2FtZSBhcyBOYXZJdGVtXG4gICAqL1xuICBtZW51RGF0YTogTWVudUl0ZW1UeXBlW11cbiAgLyoqXG4gICAqIGRlbW8gYnV0dG9uIHRleHRcbiAgICovXG4gIGRlbW9CdXR0b25UZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiB1cmwgdG8gZ28gd2hlbiBjbGljayBkZW1vIGJ1dHRvblxuICAgKi9cbiAgZGVtb1VybD86IHN0cmluZ1xuICAvKipcbiAgICogbGFuZ3VhZ2UgbGlzdFxuICAgKi9cbiAgbGFuZ3VhZ2VMaXN0PzogTGFuZ3VhZ2VUeXBlXG4gIC8qKlxuICAgKiBuYXYgYmFja2dyb3VuZCBjb2xvciBzdHlsZVxuICAgKi9cbiAgc3R5bGVzOiBcImJsYWNrXCIgfCBcInRyYW5zV2hpdGVcIlxuICAvKipcbiAgICogQWRkaXRpb25hbCBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYXBwZW5kXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2l0ZU5hdjogRkM8U2l0ZU5hdlByb3BzPiA9ICh7XG4gIGRlbW9CdXR0b25UZXh0ID0gXCJGcmVlIERlbW9cIixcbiAgZGVtb1VybCA9IFwiI1wiLFxuICBtZW51RGF0YSA9IFtdLFxuICBzdHlsZXMgPSBcImJsYWNrXCIsXG4gIGxhbmd1YWdlTGlzdCA9IHt9LFxuICBjbGFzc05hbWVcbn0pID0+IHtcbiAgY29uc3QgW21vYmlsZUV4cGFuZCwgc2V0TW9iaWxlRXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsYXJnZSA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1pbi13aWR0aDogMTAyNHB4KVwiKVxuICBjb25zdCBtZWRpdW0gPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtYXgtd2lkdGg6IDEwMjNweClcIilcbiAgY29uc3QgbW9iaWxlID0gdXNlTWVkaWFQcmVkaWNhdGUoXCIobWF4LXdpZHRoOiA2NDBweClcIilcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2BiZy1ncmF5LTkwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1TdGFydCBoLTE2IGxnOmgtMjQgcHgtNiBsZzpweC0xMCAkeyhzdHlsZXMgPT09IFwidHJhbnNXaGl0ZVwiKSAmJiBcImJnLW9wYWNpdHktMTBcIn0gJHtjbGFzc05hbWV9YH1cbiAgICAgID5cbiAgICAgICAgPENvbXBhbnlMb2dvXG4gICAgICAgICAgd2lkdGg9JycgaGVpZ2h0PScnXG4gICAgICAgICAgY2xhc3NOYW1lPSdoLTMgbGc6aC00IHRleHQtZ3JheS01MCB3LWF1dG8nXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gbGc6ZmxleCBtLWF1dG8gaXRlbXMtY2VudGVyIGxnOnNwYWNlLXgtNlwiXG4gICAgICAgID5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZW51RGF0YS5tYXAoKG1lbnVpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxOYXZJdGVtXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgbGluaz17bWVudWl0ZW0uY2FwdGlvbkxpbmsgPyBtZW51aXRlbS5jYXB0aW9uTGluayA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICBzdHlsZXM9XCJkZWZhdWx0L3doaXRlXCJcbiAgICAgICAgICAgICAgICAgIGNhcHRpb249e21lbnVpdGVtLmNhcHRpb259XG4gICAgICAgICAgICAgICAgICBzdWJtZW51PXttZW51aXRlbS5zdWJtZW51fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItOVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmZsZXggaXRlbXMtY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXtkZW1vVXJsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMy41IHB4LTMuNSB1cHBlcmNhc2UgYmctYnJhbmQtNDAwIHJvdW5kZWQtbGcgdHJhY2tpbmctd2lkZXIgbGVhZGluZy0zIHRleHQtc20gZm9udC1zZW1pYm9sZFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2RlbW9CdXR0b25UZXh0fVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzcGFjZS14LTInXG4gICAgICAgICAgICBzdHlsZXM9XCJkZWZhdWx0L3doaXRlXCJcbiAgICAgICAgICAgIGNhcHRpb249e2xhbmd1YWdlTGlzdC5jdXJyZW50ID8gbGFuZ3VhZ2VMaXN0LmN1cnJlbnQgOiBcIkVuXCJ9XG4gICAgICAgICAgICBzdWJtZW51PXtsYW5ndWFnZUxpc3Quc3VibWVudX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERpc2Nsb3N1cmUgYXM9XCJuYXZcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6aGlkZGVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZUV4cGFuZCghbW9iaWxlRXhwYW5kKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICB7bW9iaWxlRXhwYW5kID8gKFxuICAgICAgICAgICAgICAgIDxYSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51SWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTYgdy02ICR7c3R5bGVzID09PSBcImJsYWNrXCIgJiYgXCJ0ZXh0LWdyYXktMzAwXCJ9ICR7c3R5bGVzID09PSBcInRyYW5zV2hpdGVcIiAmJiBcInRleHQtZ3JheS0zMDBcIn1gfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EaXNjbG9zdXJlPlxuICAgICAgPC9kaXY+XG4gICAgICB7bW9iaWxlRXhwYW5kID8gKFxuICAgICAgICA8TW9iaWxlTWVudVxuICAgICAgICAgIGRlbW9CdXR0b25UZXh0PXtkZW1vQnV0dG9uVGV4dH1cbiAgICAgICAgICBkZW1vVXJsPXtkZW1vVXJsfVxuICAgICAgICAgIG1lbnVEYXRhPXttZW51RGF0YX1cbiAgICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgICBsYW5ndWFnZUxpc3Q9e2xhbmd1YWdlTGlzdH1cbiAgICAgICAgLz5cbiAgICAgICkgOiAnJ31cbiAgICA8Lz5cbiAgKVxufVxuIl19