"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = require("./BreadCrumb");

var _Input = require("../form/Input");

var _Button = require("../Button");

var _SP = require("../svg/SP");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Header = _ref => {
  var {
    breadcrumb = [],
    className,
    title,
    text,
    styles
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " flex flex-col\n                ".concat(className ? className : '', "\n            ")
  }, /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumblist: breadcrumb,
    styles: "fixed",
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl " // lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'

  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, styles.type === "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: styles.url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, styles.buttonText), styles.type === "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: styles.formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: styles.buttonText,
    forceDark: true,
    type: "primary",
    icon: "none",
    size: "large"
  })), styles.type === "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement(_SP.SP, {
    width: "48",
    height: "48"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: styles.url
  }, styles.caseText))));
};

exports.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzTmFtZSIsInRpdGxlIiwidGV4dCIsInN0eWxlcyIsInR5cGUiLCJ1cmwiLCJidXR0b25UZXh0IiwiZm9ybVBsYWNlaG9sZGVyIiwiY2FzZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQWlDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUF1QixHQUFHLFFBTWpDO0FBQUEsTUFOa0M7QUFDdENDLElBQUFBLFVBQVUsR0FBRyxFQUR5QjtBQUV0Q0MsSUFBQUEsU0FGc0M7QUFHdENDLElBQUFBLEtBSHNDO0FBSXRDQyxJQUFBQSxJQUpzQztBQUt0Q0MsSUFBQUE7QUFMc0MsR0FNbEM7QUFFSixzQkFDRTtBQUNFLElBQUEsU0FBUyw0Q0FDR0gsU0FBUyxHQUFHQSxTQUFILEdBQWUsRUFEM0I7QUFEWCxrQkFLRSw2QkFBQyxzQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFRCxVQURiO0FBRUUsSUFBQSxNQUFNLEVBQUMsT0FGVDtBQUdFLElBQUEsU0FBUyxFQUFDO0FBSFosSUFMRixlQVVFO0FBQ0UsSUFBQSxTQUFTLEVBQUMsNkJBRFosQ0FDeUM7O0FBRHpDLEtBR0dFLEtBSEgsQ0FWRixlQWVFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixLQUdHQyxJQUhILENBZkYsZUFvQkU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLEtBSUtDLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixTQUFqQixpQkFDRTtBQUNFLElBQUEsSUFBSSxFQUFFRCxNQUFNLENBQUNFLEdBRGY7QUFFRSxJQUFBLFNBQVMsRUFBQztBQUZaLEtBSUdGLE1BQU0sQ0FBQ0csVUFKVixDQUxOLEVBY0tILE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQixNQUFqQixpQkFDRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLGtCQUNFLDZCQUFDLFlBQUQ7QUFDRSxJQUFBLFdBQVcsRUFBRUQsTUFBTSxDQUFDSTtBQUR0QixJQURGLGVBSUUsNkJBQUMsY0FBRDtBQUNFLElBQUEsSUFBSSxFQUFFSixNQUFNLENBQUNHLFVBRGY7QUFFRSxJQUFBLFNBQVMsRUFBRSxJQUZiO0FBR0UsSUFBQSxJQUFJLEVBQUMsU0FIUDtBQUlFLElBQUEsSUFBSSxFQUFDLE1BSlA7QUFLRSxJQUFBLElBQUksRUFBQztBQUxQLElBSkYsQ0FmTixFQThCS0gsTUFBTSxDQUFDQyxJQUFQLEtBQWdCLE1BQWpCLGlCQUNFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRSw2QkFBQyxNQUFEO0FBQUksSUFBQSxLQUFLLEVBQUMsSUFBVjtBQUFlLElBQUEsTUFBTSxFQUFDO0FBQXRCLElBSEYsZUFJRTtBQUNFLElBQUEsU0FBUyxFQUFDLG1CQURaO0FBRUUsSUFBQSxJQUFJLEVBQUVELE1BQU0sQ0FBQ0U7QUFGZixLQUlHRixNQUFNLENBQUNLLFFBSlYsQ0FKRixDQS9CTixDQXBCRixDQURGO0FBb0VELENBNUVNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnJlYWRDcnVtYiwgQnJlYWRDcnVtYlR5cGV9IGZyb20gJy4vQnJlYWRDcnVtYidcbmltcG9ydCB7SW5wdXR9IGZyb20gJy4uL2Zvcm0vSW5wdXQnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0IHtTUH0gZnJvbSAnLi4vc3ZnL1NQJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlckZvb3RlclR5cGUge1xuICB0eXBlOiBcImRlZmF1bHRcIiB8IFwiZm9ybVwiIHwgXCJjYXNlXCJcbiAgYnV0dG9uVGV4dD86IHN0cmluZ1xuICBmb3JtUGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgY2FzZVRleHQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAvKipcbiAgICogSGVhZGVyIHR5cGUgYW5kIGluZm9ybWF0aW9uXG4gICAqL1xuICBzdHlsZXM6IEhlYWRlckZvb3RlclR5cGVcbiAgLyoqXG4gICAqIGJyZWFkY3J1bWJcbiAgICovXG4gIGJyZWFkY3J1bWI/OiBBcnJheTxCcmVhZENydW1iVHlwZT5cbiAgLyoqXG4gICAqIHRleHQgdG8gc2hvdyBhcyB0aXRsZVxuICAgKi9cbiAgdGl0bGU6IHN0cmluZ1xuICAvKipcbiAgICogdGV4dCB0byBzaG93XG4gICAqL1xuICB0ZXh0OiBzdHJpbmdcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgc3BhY2Utc2VwYXJhdGVkIGNsYXNzIG5hbWVzIHRvIGFwcGVuZFxuICAgKi9cbiAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRlcjogRkM8SGVhZGVyUHJvcHM+ID0gKHtcbiAgYnJlYWRjcnVtYiA9IFtdLFxuICBjbGFzc05hbWUsXG4gIHRpdGxlLFxuICB0ZXh0LFxuICBzdHlsZXNcbn0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YCBmbGV4IGZsZXgtY29sXG4gICAgICAgICAgICAgICAgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31cbiAgICAgICAgICAgIGB9XG4gICAgPlxuICAgICAgPEJyZWFkQ3J1bWJcbiAgICAgICAgY3J1bWJsaXN0PXticmVhZGNydW1ifVxuICAgICAgICBzdHlsZXM9XCJmaXhlZFwiXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MCBwYi0zXCJcbiAgICAgIC8+XG4gICAgICA8aDFcbiAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgZm9udFN0eWxlLTV4bCAnLy8gbGc6Zm9udFN0eWxlLTZ4bCBtZDpmb250U3R5bGUtNXhsIHNtOmZvbnRTdHlsZS01eGwnXG4gICAgICA+XG4gICAgICAgIHt0aXRsZX1cbiAgICAgIDwvaDE+XG4gICAgICA8cFxuICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MCB0ZXh0LWJhc2UgYnJlYWstd29yZHMgcHQtNCdcbiAgICAgID5cbiAgICAgICAge3RleHR9XG4gICAgICA8L3A+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0ncHQtNiBwYi00J1xuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgKHN0eWxlcy50eXBlID09PSBcImRlZmF1bHRcIikgJiYgKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17c3R5bGVzLnVybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1icmFuZC00MDAgcm91bmRlZC1sZyBweS00IHB4LTUgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtYnJhbmQtOTAwIGhvdmVyOmJnLWJyYW5kLTMwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3N0eWxlcy5idXR0b25UZXh0fVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgKHN0eWxlcy50eXBlID09PSBcImZvcm1cIikgJiYgKFxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3N0eWxlcy5mb3JtUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PXtzdHlsZXMuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICBmb3JjZURhcms9e3RydWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGljb249J25vbmUnXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAge1xuICAgICAgICAgIChzdHlsZXMudHlwZSA9PT0gXCJjYXNlXCIpICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFNQIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgLz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MCBtbC03J1xuICAgICAgICAgICAgICAgIGhyZWY9e3N0eWxlcy51cmx9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c3R5bGVzLmNhc2VUZXh0fVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=