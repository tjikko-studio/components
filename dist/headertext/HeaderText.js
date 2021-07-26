"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderText = void 0;

var _react = _interopRequireDefault(require("react"));

var _BreadCrumb = require("../breadcrumb/BreadCrumb");

var _Input = require("../form/Input");

var _Button = require("../buttons/Button");

var _SP = require("../svg/SP");

var _excluded = ["breadcrumb"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var HeaderText = _ref => {
  var {
    breadcrumb = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "flex flex-col dark\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumblist: breadcrumb,
    styles: "fixed",
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl "
  }, props.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, props.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, props.type == "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: props.url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, props.buttonText), props.type == "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: props.formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: props.buttonText,
    forceDark: "true",
    type: "primary",
    icon: "none",
    size: "large"
  })), props.type == "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement(_SP.SP, {
    width: "48",
    height: "48"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: props.url
  }, props.caseText))));
};

exports.HeaderText = HeaderText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVydGV4dC9IZWFkZXJUZXh0LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXJUZXh0IiwiYnJlYWRjcnVtYiIsInByb3BzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ0ZXh0IiwidHlwZSIsInVybCIsImJ1dHRvblRleHQiLCJmb3JtUGxhY2Vob2xkZXIiLCJjYXNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBK0IsR0FBRyxRQUd6QztBQUFBLE1BSDBDO0FBQzVDQyxJQUFBQSxVQUFVLEdBQUM7QUFEaUMsR0FHMUM7QUFBQSxNQURDQyxLQUNEOztBQUVGLHNCQUNJLGlEQUNRQSxLQURSO0FBRUksSUFBQSxTQUFTLGdEQUNIQSxLQUFLLENBQUNDLFNBQU4sR0FBZ0JELEtBQUssQ0FBQ0MsU0FBdEIsR0FBZ0MsRUFEN0I7QUFGYixtQkFNSSw2QkFBQyxzQkFBRDtBQUNJLElBQUEsU0FBUyxFQUFFRixVQURmO0FBRUksSUFBQSxNQUFNLEVBQUMsT0FGWDtBQUdJLElBQUEsU0FBUyxFQUFDO0FBSGQsSUFOSixlQVdJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxLQUdNQyxLQUFLLENBQUNFLEtBSFosQ0FYSixlQWdCSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsS0FHTUYsS0FBSyxDQUFDRyxJQUhaLENBaEJKLGVBcUJJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxLQUlTSCxLQUFLLENBQUNJLElBQU4sSUFBWSxTQUFiLGlCQUNJO0FBQ0ksSUFBQSxJQUFJLEVBQUVKLEtBQUssQ0FBQ0ssR0FEaEI7QUFFSSxJQUFBLFNBQVMsRUFBQztBQUZkLEtBSU1MLEtBQUssQ0FBQ00sVUFKWixDQUxaLEVBY1NOLEtBQUssQ0FBQ0ksSUFBTixJQUFZLE1BQWIsaUJBQ0k7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixrQkFDSSw2QkFBQyxZQUFEO0FBQ0ksSUFBQSxXQUFXLEVBQUVKLEtBQUssQ0FBQ087QUFEdkIsSUFESixlQUlJLDZCQUFDLGNBQUQ7QUFDSSxJQUFBLElBQUksRUFBSVAsS0FBSyxDQUFDTSxVQURsQjtBQUVJLElBQUEsU0FBUyxFQUFHLE1BRmhCO0FBR0ksSUFBQSxJQUFJLEVBQUcsU0FIWDtBQUlJLElBQUEsSUFBSSxFQUFHLE1BSlg7QUFLSSxJQUFBLElBQUksRUFBRztBQUxYLElBSkosQ0FmWixFQThCU04sS0FBSyxDQUFDSSxJQUFOLElBQVksTUFBYixpQkFDSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsa0JBR0ksNkJBQUMsTUFBRDtBQUFJLElBQUEsS0FBSyxFQUFDLElBQVY7QUFBZSxJQUFBLE1BQU0sRUFBQztBQUF0QixJQUhKLGVBSUk7QUFDSSxJQUFBLFNBQVMsRUFBQyxtQkFEZDtBQUVJLElBQUEsSUFBSSxFQUFHSixLQUFLLENBQUNLO0FBRmpCLEtBSU1MLEtBQUssQ0FBQ1EsUUFKWixDQUpKLENBL0JaLENBckJKLENBREo7QUFxRUgsQ0ExRU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCcmVhZENydW1iLCBCcmVhZENydW1iVHlwZSB9IGZyb20gJy4uL2JyZWFkY3J1bWIvQnJlYWRDcnVtYidcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vZm9ybS9JbnB1dCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2J1dHRvbnMvQnV0dG9uJ1xuaW1wb3J0IHsgU1AgfSBmcm9tICcuLi9zdmcvU1AnXG5cblxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJUZXh0UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIEhlYWRlciB0eXBlIGFuZCBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHR5cGU6IFwiZGVmYXVsdFwiIHwgXCJmb3JtXCIgfCBcImNhc2VcIlxuICAgIGJ1dHRvblRleHQ/OiBzdHJpbmdcbiAgICBmb3JtUGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgICBjYXNlVGV4dD86IHN0cmluZ1xuICAgIHVybD86IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIGJyZWFkY3J1bWJcbiAgICAgKi9cbiAgICBicmVhZGNydW1iPzogQXJyYXk8QnJlYWRDcnVtYlR5cGU+XG4gICAgLyoqXG4gICAgICogdGV4dCB0byBzaG93IGFzIHRpdGxlXG4gICAgICovXG4gICAgdGl0bGU6IHN0cmluZ1xuICAgIC8qKlxuICAgICAqIHRleHQgdG8gc2hvd1xuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZ1xuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEhlYWRlclRleHQ6IEZDPEhlYWRlclRleHRQcm9wcz4gPSAoe1xuICAgIGJyZWFkY3J1bWI9W10sXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgZGFya1xuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTonJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCcmVhZENydW1iIFxuICAgICAgICAgICAgICAgIGNydW1ibGlzdD17YnJlYWRjcnVtYn1cbiAgICAgICAgICAgICAgICBzdHlsZXM9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHBiLTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGZvbnRTdHlsZS01eGwgJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgcHJvcHMudGl0bGUgfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgdGV4dC1iYXNlIGJyZWFrLXdvcmRzIHB0LTQnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B0LTYgcGItNCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy50eXBlPT1cImRlZmF1bHRcIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1icmFuZC00MDAgcm91bmRlZC1sZyBweS00IHB4LTUgdGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQgdXBwZXJjYXNlIHRleHQtYnJhbmQtOTAwIGhvdmVyOmJnLWJyYW5kLTMwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmJ1dHRvblRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnR5cGU9PVwiZm9ybVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLmZvcm1QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB7cHJvcHMuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VEYXJrID0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAocHJvcHMudHlwZT09XCJjYXNlXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTUCB3aWR0aD0nNDgnIGhlaWdodD0nNDgnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgbWwtNydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17IHByb3BzLnVybCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmNhc2VUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=