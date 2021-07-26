"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = require("./BreadCrumb");

var _Input = require("../form/Input");

var _Button = require("../Button");

var _logo_placeholder_square = _interopRequireDefault(require("../../assets/images/logo_placeholder_square.svg"));

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
    type,
    url,
    buttonText,
    formPlaceholder,
    caseText
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: " flex flex-col ".concat(className ? className : '')
  }, /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumbs: breadcrumb,
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl " // lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'

  }, title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, type === "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, buttonText), type === "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: buttonText,
    forceDark: true,
    type: "primary",
    icon: "none",
    size: "large"
  })), type === "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center space-x-6"
  }, /*#__PURE__*/_react.default.createElement(_logo_placeholder_square.default, {
    width: "",
    height: "48",
    className: "w-auto"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: url
  }, caseText))));
};

exports.Header = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0hlYWRlci50c3giXSwibmFtZXMiOlsiSGVhZGVyIiwiYnJlYWRjcnVtYiIsImNsYXNzTmFtZSIsInRpdGxlIiwidGV4dCIsInR5cGUiLCJ1cmwiLCJidXR0b25UZXh0IiwiZm9ybVBsYWNlaG9sZGVyIiwiY2FzZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQTZCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUF1QixHQUFHLFFBVWpDO0FBQUEsTUFWa0M7QUFDdENDLElBQUFBLFVBQVUsR0FBRyxFQUR5QjtBQUV0Q0MsSUFBQUEsU0FGc0M7QUFHdENDLElBQUFBLEtBSHNDO0FBSXRDQyxJQUFBQSxJQUpzQztBQUt0Q0MsSUFBQUEsSUFMc0M7QUFNdENDLElBQUFBLEdBTnNDO0FBT3RDQyxJQUFBQSxVQVBzQztBQVF0Q0MsSUFBQUEsZUFSc0M7QUFTdENDLElBQUFBO0FBVHNDLEdBVWxDO0FBRUosc0JBQ0U7QUFDRSxJQUFBLFNBQVMsMkJBQW9CUCxTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUE1QztBQURYLGtCQUdFLDZCQUFDLHNCQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUVELFVBRFY7QUFFRSxJQUFBLFNBQVMsRUFBQztBQUZaLElBSEYsZUFPRTtBQUNFLElBQUEsU0FBUyxFQUFDLDZCQURaLENBQ3lDOztBQUR6QyxLQUdHRSxLQUhILENBUEYsZUFZRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR0MsSUFISCxDQVpGLGVBaUJFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixLQUlLQyxJQUFJLEtBQUssU0FBVixpQkFDRTtBQUNFLElBQUEsSUFBSSxFQUFFQyxHQURSO0FBRUUsSUFBQSxTQUFTLEVBQUM7QUFGWixLQUlHQyxVQUpILENBTE4sRUFjS0YsSUFBSSxLQUFLLE1BQVYsaUJBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixrQkFDRSw2QkFBQyxZQUFEO0FBQ0UsSUFBQSxXQUFXLEVBQUVHO0FBRGYsSUFERixlQUlFLDZCQUFDLGNBQUQ7QUFDRSxJQUFBLElBQUksRUFBRUQsVUFEUjtBQUVFLElBQUEsU0FBUyxFQUFFLElBRmI7QUFHRSxJQUFBLElBQUksRUFBQyxTQUhQO0FBSUUsSUFBQSxJQUFJLEVBQUMsTUFKUDtBQUtFLElBQUEsSUFBSSxFQUFDO0FBTFAsSUFKRixDQWZOLEVBOEJLRixJQUFJLEtBQUssTUFBVixpQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0UsNkJBQUMsZ0NBQUQ7QUFBWSxJQUFBLEtBQUssRUFBQyxFQUFsQjtBQUFxQixJQUFBLE1BQU0sRUFBQyxJQUE1QjtBQUFpQyxJQUFBLFNBQVMsRUFBQztBQUEzQyxJQUhGLGVBSUU7QUFDRSxJQUFBLFNBQVMsRUFBQyxtQkFEWjtBQUVFLElBQUEsSUFBSSxFQUFFQztBQUZSLEtBSUdHLFFBSkgsQ0FKRixDQS9CTixDQWpCRixDQURGO0FBaUVELENBN0VNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnJlYWRDcnVtYiwgQnJlYWRDcnVtYlR5cGV9IGZyb20gJy4vQnJlYWRDcnVtYidcbmltcG9ydCB7SW5wdXR9IGZyb20gJy4uL2Zvcm0vSW5wdXQnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vQnV0dG9uJ1xuaW1wb3J0IENsaWVudExvZ28gZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX3BsYWNlaG9sZGVyX3NxdWFyZS5zdmcnXG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVhZGVyUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAvKipcbiAgICogSGVhZGVyIHR5cGUgYW5kIGluZm9ybWF0aW9uXG4gICAqL1xuICB0eXBlOiBcImRlZmF1bHRcIiB8IFwiZm9ybVwiIHwgXCJjYXNlXCJcbiAgYnV0dG9uVGV4dD86IHN0cmluZ1xuICBmb3JtUGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgY2FzZVRleHQ/OiBzdHJpbmdcbiAgdXJsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBicmVhZGNydW1iXG4gICAqL1xuICBicmVhZGNydW1iPzogQnJlYWRDcnVtYlR5cGVbXVxuICAvKipcbiAgICogdGV4dCB0byBzaG93IGFzIHRpdGxlXG4gICAqL1xuICB0aXRsZTogc3RyaW5nXG4gIC8qKlxuICAgKiB0ZXh0IHRvIHNob3dcbiAgICovXG4gIHRleHQ6IHN0cmluZ1xuICAvKipcbiAgICogQWRkaXRpb25hbCBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYXBwZW5kXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgSGVhZGVyOiBGQzxIZWFkZXJQcm9wcz4gPSAoe1xuICBicmVhZGNydW1iID0gW10sXG4gIGNsYXNzTmFtZSxcbiAgdGl0bGUsXG4gIHRleHQsXG4gIHR5cGUsXG4gIHVybCxcbiAgYnV0dG9uVGV4dCxcbiAgZm9ybVBsYWNlaG9sZGVyLFxuICBjYXNlVGV4dFxufSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgIGZsZXggZmxleC1jb2wgJHtjbGFzc05hbWUgPyBjbGFzc05hbWUgOiAnJ31gfVxuICAgID5cbiAgICAgIDxCcmVhZENydW1iXG4gICAgICAgIGNydW1icz17YnJlYWRjcnVtYn1cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHBiLTNcIlxuICAgICAgLz5cbiAgICAgIDxoMVxuICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MCBmb250U3R5bGUtNXhsICcvLyBsZzpmb250U3R5bGUtNnhsIG1kOmZvbnRTdHlsZS01eGwgc206Zm9udFN0eWxlLTV4bCdcbiAgICAgID5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9oMT5cbiAgICAgIDxwXG4gICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIHRleHQtYmFzZSBicmVhay13b3JkcyBwdC00J1xuICAgICAgPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPSdwdC02IHBiLTQnXG4gICAgICA+XG4gICAgICAgIHtcbiAgICAgICAgICAodHlwZSA9PT0gXCJkZWZhdWx0XCIpICYmIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1icmFuZC00MDAgcm91bmRlZC1sZyBweS00IHB4LTUgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtYnJhbmQtOTAwIGhvdmVyOmJnLWJyYW5kLTMwMCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICAodHlwZSA9PT0gXCJmb3JtXCIpICYmIChcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtmb3JtUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PXtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgIGZvcmNlRGFyaz17dHJ1ZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgaWNvbj0nbm9uZSdcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICB7XG4gICAgICAgICAgKHR5cGUgPT09IFwiY2FzZVwiKSAmJiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC02J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2xpZW50TG9nbyB3aWR0aD0nJyBoZWlnaHQ9JzQ4JyBjbGFzc05hbWU9J3ctYXV0bycgLz5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS01MCBtbC03J1xuICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjYXNlVGV4dH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19