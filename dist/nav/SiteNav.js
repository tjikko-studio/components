"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SiteNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactMediaHook = require("react-media-hook");

var _outline = require("@heroicons/react/outline");

var _react2 = require("@headlessui/react");

var _Logo = require("../svg/Logo");

var _NavItem = require("./NavItem");

var _MobileMenu = require("./MobileMenu");

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
    className: "bg-gray-900 flex items-center justify-between md:justify-Start\n                ".concat(styles === "transWhite" && "bg-opacity-10", "\n                ").concat(className, "\n            ")
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "fontStyle-xl"
  }, "Hello"), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-7 lg:pt-10 lg:pb-9 lg:pl-10 sm:pl-6 pl-6 md:py-8 sm:pt-6 sm:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    width: large ? "269" : medium ? "215" : mobile ? "161" : "269",
    height: large ? "20" : medium ? "16" : mobile ? "12" : "20"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "hidden md:flex m-auto items-center"
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
    className: "hidden md:flex items-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demoButtonText), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "pl-6 lg:mr-11 sm:mr-9",
    styles: "default/white",
    caption: languageList.current ? languageList.current : "En",
    submenu: languageList.submenu
  })), /*#__PURE__*/_react.default.createElement(_react2.Disclosure, {
    as: "nav",
    className: "bg-transparent"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "md:hidden mr-4"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-transparent inline-flex items-center justify-center",
    onClick: () => setMobileExpand(!mobileExpand)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), mobileExpand ? /*#__PURE__*/_react.default.createElement(_outline.XIcon, {
    className: "text-gray-300 w-5 h-5"
  }) : /*#__PURE__*/_react.default.createElement(_outline.MenuIcon, {
    className: "h-5 w-5\n                                    ".concat(styles === "black" && "text-gray-300", "\n                                    ").concat(styles === "transWhite" && "text-gray-300", "\n                                ")
  }))))), mobileExpand ? /*#__PURE__*/_react.default.createElement(_MobileMenu.MobileMenu, {
    demoButtonText: demoButtonText,
    demoUrl: demoUrl,
    menuData: menuData,
    styles: styles,
    languageList: languageList
  }) : '');
};

exports.SiteNav = SiteNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1NpdGVOYXYudHN4Il0sIm5hbWVzIjpbIlNpdGVOYXYiLCJkZW1vQnV0dG9uVGV4dCIsImRlbW9VcmwiLCJtZW51RGF0YSIsInN0eWxlcyIsImxhbmd1YWdlTGlzdCIsImNsYXNzTmFtZSIsIm1vYmlsZUV4cGFuZCIsInNldE1vYmlsZUV4cGFuZCIsImxhcmdlIiwibWVkaXVtIiwibW9iaWxlIiwibWFwIiwibWVudWl0ZW0iLCJpbmRleCIsImNhcHRpb25MaW5rIiwiY2FwdGlvbiIsInN1Ym1lbnUiLCJjdXJyZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQXdDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUF5QixHQUFHLFFBT25DO0FBQUEsTUFQb0M7QUFDeENDLElBQUFBLGNBQWMsR0FBRyxXQUR1QjtBQUV4Q0MsSUFBQUEsT0FBTyxHQUFHLEdBRjhCO0FBR3hDQyxJQUFBQSxRQUFRLEdBQUcsRUFINkI7QUFJeENDLElBQUFBLE1BQU0sR0FBRyxPQUorQjtBQUt4Q0MsSUFBQUEsWUFBWSxHQUFHLEVBTHlCO0FBTXhDQyxJQUFBQTtBQU53QyxHQU9wQztBQUNKLE1BQU0sQ0FBQ0MsWUFBRCxFQUFlQyxlQUFmLElBQWtDLHFCQUFTLEtBQVQsQ0FBeEM7QUFDQSxNQUFNQyxLQUFLLEdBQUcsdUNBQWtCLHFCQUFsQixDQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLHVDQUFrQixxQkFBbEIsQ0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyx1Q0FBa0Isb0JBQWxCLENBQWY7QUFDQSxzQkFDRSx5RUFDRTtBQUNFLElBQUEsU0FBUyw0RkFDRVAsTUFBTSxLQUFLLFlBQVosSUFBNkIsZUFEOUIsK0JBRUNFLFNBRkQ7QUFEWCxrQkFNRTtBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsYUFORixlQU9FO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRSw2QkFBQyxVQUFEO0FBQ0UsSUFBQSxLQUFLLEVBQUVHLEtBQUssR0FBRyxLQUFILEdBQVdDLE1BQU0sR0FBRyxLQUFILEdBQVdDLE1BQU0sR0FBRyxLQUFILEdBQVcsS0FEM0Q7QUFFRSxJQUFBLE1BQU0sRUFBRUYsS0FBSyxHQUFHLElBQUgsR0FBVUMsTUFBTSxHQUFHLElBQUgsR0FBVUMsTUFBTSxHQUFHLElBQUgsR0FBVTtBQUZ6RCxJQUhGLENBUEYsZUFlRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FJSVIsUUFBUSxDQUFDUyxHQUFULENBQWEsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEtBQXFCO0FBQ2hDLHdCQUNFLDZCQUFDLGdCQUFEO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLEtBRFA7QUFFRSxNQUFBLElBQUksRUFBRUQsUUFBUSxDQUFDRSxXQUFULEdBQXVCRixRQUFRLENBQUNFLFdBQWhDLEdBQThDLEVBRnREO0FBR0UsTUFBQSxNQUFNLEVBQUMsZUFIVDtBQUlFLE1BQUEsT0FBTyxFQUFFRixRQUFRLENBQUNHLE9BSnBCO0FBS0UsTUFBQSxPQUFPLEVBQUVILFFBQVEsQ0FBQ0ksT0FMcEI7QUFNRSxNQUFBLFNBQVMsRUFBQztBQU5aLE1BREY7QUFVRCxHQVhELENBSkosQ0FmRixlQWlDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFDRSxJQUFBLElBQUksRUFBRWYsT0FEUjtBQUVFLElBQUEsU0FBUyxFQUFDO0FBRlosS0FJR0QsY0FKSCxDQUhGLGVBU0UsNkJBQUMsZ0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyx1QkFEWjtBQUVFLElBQUEsTUFBTSxFQUFDLGVBRlQ7QUFHRSxJQUFBLE9BQU8sRUFBRUksWUFBWSxDQUFDYSxPQUFiLEdBQXVCYixZQUFZLENBQUNhLE9BQXBDLEdBQThDLElBSHpEO0FBSUUsSUFBQSxPQUFPLEVBQUViLFlBQVksQ0FBQ1k7QUFKeEIsSUFURixDQWpDRixlQWlERSw2QkFBQyxrQkFBRDtBQUFZLElBQUEsRUFBRSxFQUFDLEtBQWY7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDLHdEQURaO0FBRUUsSUFBQSxPQUFPLEVBQUUsTUFBTVQsZUFBZSxDQUFDLENBQUNELFlBQUY7QUFGaEMsa0JBSUU7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixzQkFKRixFQUtHQSxZQUFZLGdCQUNYLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLElBRFcsZ0JBS1gsNkJBQUMsaUJBQUQ7QUFDRSxJQUFBLFNBQVMseURBQ1dILE1BQU0sS0FBSyxPQUFYLElBQXNCLGVBRGpDLG1EQUVXQSxNQUFNLEtBQUssWUFBWCxJQUEyQixlQUZ0QztBQURYLElBVkosQ0FERixDQUhGLENBakRGLENBREYsRUEyRUdHLFlBQVksZ0JBQ1gsNkJBQUMsc0JBQUQ7QUFDRSxJQUFBLGNBQWMsRUFBRU4sY0FEbEI7QUFFRSxJQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLElBQUEsUUFBUSxFQUFFQyxRQUhaO0FBSUUsSUFBQSxNQUFNLEVBQUVDLE1BSlY7QUFLRSxJQUFBLFlBQVksRUFBRUM7QUFMaEIsSUFEVyxHQVFULEVBbkZOLENBREY7QUF1RkQsQ0FuR00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlTWVkaWFQcmVkaWNhdGV9IGZyb20gXCJyZWFjdC1tZWRpYS1ob29rXCJcbmltcG9ydCB7TWVudUljb24sIFhJY29ufSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQge0Rpc2Nsb3N1cmUsIE1lbnUsIFRyYW5zaXRpb259IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IHtMb2dvfSBmcm9tICcuLi9zdmcvTG9nbydcbmltcG9ydCB7TmF2SXRlbX0gZnJvbSAnLi9OYXZJdGVtJ1xuaW1wb3J0IHtNb2JpbGVNZW51fSBmcm9tICcuL01vYmlsZU1lbnUnXG5pbXBvcnQge01lbnVUeXBlfSBmcm9tICcuL0xpc3ROYXYnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VUeXBlIHtcbiAgY3VycmVudD86IHN0cmluZyB8IG51bGxcbiAgc3VibWVudT86IEFycmF5PE1lbnVUeXBlPlxufVxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbVR5cGUge1xuICBjYXB0aW9uOiBzdHJpbmdcbiAgY2FwdGlvbkxpbms/OiBzdHJpbmdcbiAgc3VibWVudT86IEFycmF5PE1lbnVUeXBlPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpdGVOYXZQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBtZW51IGpzb24gZGF0YSBzYW1lIGFzIE5hdkl0ZW1cbiAgICovXG4gIG1lbnVEYXRhOiBBcnJheTxNZW51SXRlbVR5cGU+XG4gIC8qKlxuICAgKiBkZW1vIGJ1dHRvbiB0ZXh0XG4gICAqL1xuICBkZW1vQnV0dG9uVGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogdXJsIHRvIGdvIHdoZW4gY2xpY2sgZGVtbyBidXR0b25cbiAgICovXG4gIGRlbW9Vcmw/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGxhbmd1YWdlIGxpc3RcbiAgICovXG4gIGxhbmd1YWdlTGlzdD86IExhbmd1YWdlVHlwZVxuICAvKipcbiAgICogbmF2IGJhY2tncm91bmQgY29sb3Igc3R5bGVcbiAgICovXG4gIHN0eWxlczogXCJibGFja1wiIHwgXCJ0cmFuc1doaXRlXCJcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWVzIHRvIGFwcGVuZFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IFNpdGVOYXY6IEZDPFNpdGVOYXZQcm9wcz4gPSAoe1xuICBkZW1vQnV0dG9uVGV4dCA9IFwiRnJlZSBEZW1vXCIsXG4gIGRlbW9VcmwgPSBcIiNcIixcbiAgbWVudURhdGEgPSBbXSxcbiAgc3R5bGVzID0gXCJibGFja1wiLFxuICBsYW5ndWFnZUxpc3QgPSB7fSxcbiAgY2xhc3NOYW1lXG59KSA9PiB7XG4gIGNvbnN0IFttb2JpbGVFeHBhbmQsIHNldE1vYmlsZUV4cGFuZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbGFyZ2UgPSB1c2VNZWRpYVByZWRpY2F0ZShcIihtaW4td2lkdGg6IDEwMjRweClcIilcbiAgY29uc3QgbWVkaXVtID0gdXNlTWVkaWFQcmVkaWNhdGUoXCIobWF4LXdpZHRoOiAxMDIzcHgpXCIpXG4gIGNvbnN0IG1vYmlsZSA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1heC13aWR0aDogNjQwcHgpXCIpXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgYmctZ3JheS05MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG1kOmp1c3RpZnktU3RhcnRcbiAgICAgICAgICAgICAgICAkeyhzdHlsZXMgPT09IFwidHJhbnNXaGl0ZVwiKSAmJiBcImJnLW9wYWNpdHktMTBcIn1cbiAgICAgICAgICAgICAgICAke2NsYXNzTmFtZX1cbiAgICAgICAgICAgIGB9XG4gICAgICA+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnRTdHlsZS14bFwiPkhlbGxvPC9wPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwicHQtNiBwYi03IGxnOnB0LTEwIGxnOnBiLTkgbGc6cGwtMTAgc206cGwtNiBwbC02IG1kOnB5LTggc206cHQtNiBzbTpwYi03XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxMb2dvXG4gICAgICAgICAgICB3aWR0aD17bGFyZ2UgPyBcIjI2OVwiIDogbWVkaXVtID8gXCIyMTVcIiA6IG1vYmlsZSA/IFwiMTYxXCIgOiBcIjI2OVwifVxuICAgICAgICAgICAgaGVpZ2h0PXtsYXJnZSA/IFwiMjBcIiA6IG1lZGl1bSA/IFwiMTZcIiA6IG1vYmlsZSA/IFwiMTJcIiA6IFwiMjBcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IG0tYXV0byBpdGVtcy1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVudURhdGEubWFwKChtZW51aXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TmF2SXRlbVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGxpbms9e21lbnVpdGVtLmNhcHRpb25MaW5rID8gbWVudWl0ZW0uY2FwdGlvbkxpbmsgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgc3R5bGVzPVwiZGVmYXVsdC93aGl0ZVwiXG4gICAgICAgICAgICAgICAgICBjYXB0aW9uPXttZW51aXRlbS5jYXB0aW9ufVxuICAgICAgICAgICAgICAgICAgc3VibWVudT17bWVudWl0ZW0uc3VibWVudX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTlcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlbiBtZDpmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17ZGVtb1VybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTMuNSBweC0zLjUgdXBwZXJjYXNlIGJnLWJyYW5kLTQwMCByb3VuZGVkLWxnIHRyYWNraW5nLXdpZGVyIGxlYWRpbmctMyB0ZXh0LXNtIGZvbnQtc2VtaWJvbGRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZW1vQnV0dG9uVGV4dH1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncGwtNiBsZzptci0xMSBzbTptci05J1xuICAgICAgICAgICAgc3R5bGVzPVwiZGVmYXVsdC93aGl0ZVwiXG4gICAgICAgICAgICBjYXB0aW9uPXtsYW5ndWFnZUxpc3QuY3VycmVudCA/IGxhbmd1YWdlTGlzdC5jdXJyZW50IDogXCJFblwifVxuICAgICAgICAgICAgc3VibWVudT17bGFuZ3VhZ2VMaXN0LnN1Ym1lbnV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxEaXNjbG9zdXJlIGFzPVwibmF2XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy10cmFuc3BhcmVudFwiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBtci00XCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZUV4cGFuZCghbW9iaWxlRXhwYW5kKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICB7bW9iaWxlRXhwYW5kID8gKFxuICAgICAgICAgICAgICAgIDxYSWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCB3LTUgaC01XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxNZW51SWNvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC01IHctNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtzdHlsZXMgPT09IFwiYmxhY2tcIiAmJiBcInRleHQtZ3JheS0zMDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7c3R5bGVzID09PSBcInRyYW5zV2hpdGVcIiAmJiBcInRleHQtZ3JheS0zMDBcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRGlzY2xvc3VyZT5cbiAgICAgIDwvZGl2PlxuICAgICAge21vYmlsZUV4cGFuZCA/IChcbiAgICAgICAgPE1vYmlsZU1lbnVcbiAgICAgICAgICBkZW1vQnV0dG9uVGV4dD17ZGVtb0J1dHRvblRleHR9XG4gICAgICAgICAgZGVtb1VybD17ZGVtb1VybH1cbiAgICAgICAgICBtZW51RGF0YT17bWVudURhdGF9XG4gICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgbGFuZ3VhZ2VMaXN0PXtsYW5ndWFnZUxpc3R9XG4gICAgICAgIC8+XG4gICAgICApIDogJyd9XG4gICAgPC8+XG4gIClcbn1cbiJdfQ==