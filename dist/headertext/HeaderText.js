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
    className: " flex flex-col\n                ".concat(props.className ? props.className : '', "\n            ")
  }), /*#__PURE__*/_react.default.createElement(_BreadCrumb.BreadCrumb, {
    crumblist: breadcrumb,
    styles: "fixed",
    className: "text-gray-50 pb-3"
  }), /*#__PURE__*/_react.default.createElement("h1", {
    className: "text-gray-50 fontStyle-5xl " // lg:fontStyle-6xl md:fontStyle-5xl sm:fontStyle-5xl'

  }, props.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-gray-50 text-base break-words pt-4"
  }, props.text), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-6 pb-4"
  }, props.styles.type == "default" && /*#__PURE__*/_react.default.createElement("a", {
    href: props.styles.url,
    className: "bg-brand-400 rounded-lg py-4 px-5 text-base font-semibold uppercase text-brand-900 hover:bg-brand-300"
  }, props.styles.buttonText), props.styles.type == "form" && /*#__PURE__*/_react.default.createElement("form", {
    className: "flex space-x-2"
  }, /*#__PURE__*/_react.default.createElement(_Input.Input, {
    placeholder: props.styles.formPlaceholder
  }), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    text: props.styles.buttonText,
    forceDark: "true",
    type: "primary",
    icon: "none",
    size: "large"
  })), props.styles.type == "case" && /*#__PURE__*/_react.default.createElement("div", {
    className: "flex items-center"
  }, /*#__PURE__*/_react.default.createElement(_SP.SP, {
    width: "48",
    height: "48"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 ml-7",
    href: props.styles.url
  }, props.styles.caseText))));
};

exports.HeaderText = HeaderText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVydGV4dC9IZWFkZXJUZXh0LnRzeCJdLCJuYW1lcyI6WyJIZWFkZXJUZXh0IiwiYnJlYWRjcnVtYiIsInByb3BzIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJ0ZXh0Iiwic3R5bGVzIiwidHlwZSIsInVybCIsImJ1dHRvblRleHQiLCJmb3JtUGxhY2Vob2xkZXIiLCJjYXNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUErQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBK0IsR0FBRyxRQUd6QztBQUFBLE1BSDBDO0FBQzVDQyxJQUFBQSxVQUFVLEdBQUM7QUFEaUMsR0FHMUM7QUFBQSxNQURDQyxLQUNEOztBQUVGLHNCQUNJLGlEQUNRQSxLQURSO0FBRUksSUFBQSxTQUFTLDRDQUNIQSxLQUFLLENBQUNDLFNBQU4sR0FBZ0JELEtBQUssQ0FBQ0MsU0FBdEIsR0FBZ0MsRUFEN0I7QUFGYixtQkFNSSw2QkFBQyxzQkFBRDtBQUNJLElBQUEsU0FBUyxFQUFFRixVQURmO0FBRUksSUFBQSxNQUFNLEVBQUMsT0FGWDtBQUdJLElBQUEsU0FBUyxFQUFDO0FBSGQsSUFOSixlQVdJO0FBQ0ksSUFBQSxTQUFTLEVBQUMsNkJBRGQsQ0FDMkM7O0FBRDNDLEtBR01DLEtBQUssQ0FBQ0UsS0FIWixDQVhKLGVBZ0JJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxLQUdNRixLQUFLLENBQUNHLElBSFosQ0FoQkosZUFxQkk7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLEtBSVNILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLElBQW1CLFNBQXBCLGlCQUNJO0FBQ0ksSUFBQSxJQUFJLEVBQUVMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRSxHQUR2QjtBQUVJLElBQUEsU0FBUyxFQUFDO0FBRmQsS0FJTU4sS0FBSyxDQUFDSSxNQUFOLENBQWFHLFVBSm5CLENBTFosRUFjU1AsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsSUFBbUIsTUFBcEIsaUJBQ0k7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixrQkFDSSw2QkFBQyxZQUFEO0FBQ0ksSUFBQSxXQUFXLEVBQUVMLEtBQUssQ0FBQ0ksTUFBTixDQUFhSTtBQUQ5QixJQURKLGVBSUksNkJBQUMsY0FBRDtBQUNJLElBQUEsSUFBSSxFQUFJUixLQUFLLENBQUNJLE1BQU4sQ0FBYUcsVUFEekI7QUFFSSxJQUFBLFNBQVMsRUFBRyxNQUZoQjtBQUdJLElBQUEsSUFBSSxFQUFHLFNBSFg7QUFJSSxJQUFBLElBQUksRUFBRyxNQUpYO0FBS0ksSUFBQSxJQUFJLEVBQUc7QUFMWCxJQUpKLENBZlosRUE4QlNQLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLElBQW1CLE1BQXBCLGlCQUNJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxrQkFHSSw2QkFBQyxNQUFEO0FBQUksSUFBQSxLQUFLLEVBQUMsSUFBVjtBQUFlLElBQUEsTUFBTSxFQUFDO0FBQXRCLElBSEosZUFJSTtBQUNJLElBQUEsU0FBUyxFQUFDLG1CQURkO0FBRUksSUFBQSxJQUFJLEVBQUdMLEtBQUssQ0FBQ0ksTUFBTixDQUFhRTtBQUZ4QixLQUlNTixLQUFLLENBQUNJLE1BQU4sQ0FBYUssUUFKbkIsQ0FKSixDQS9CWixDQXJCSixDQURKO0FBcUVILENBMUVNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnJlYWRDcnVtYiwgQnJlYWRDcnVtYlR5cGUgfSBmcm9tICcuLi9icmVhZGNydW1iL0JyZWFkQ3J1bWInXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2Zvcm0vSW5wdXQnXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9idXR0b25zL0J1dHRvbidcbmltcG9ydCB7IFNQIH0gZnJvbSAnLi4vc3ZnL1NQJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlclRleHRGb290ZXJUeXBlIHtcbiAgICB0eXBlOiBcImRlZmF1bHRcIiB8IFwiZm9ybVwiIHwgXCJjYXNlXCJcbiAgICBidXR0b25UZXh0Pzogc3RyaW5nXG4gICAgZm9ybVBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAgY2FzZVRleHQ/OiBzdHJpbmdcbiAgICB1cmw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBIZWFkZXJUZXh0UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAgIC8qKlxuICAgICAqIEhlYWRlciB0eXBlIGFuZCBpbmZvcm1hdGlvblxuICAgICAqL1xuICAgIHN0eWxlczogSGVhZGVyVGV4dEZvb3RlclR5cGVcbiAgICAvKipcbiAgICAgKiBicmVhZGNydW1iXG4gICAgICovXG4gICAgYnJlYWRjcnVtYj86IEFycmF5PEJyZWFkQ3J1bWJUeXBlPlxuICAgIC8qKlxuICAgICAqIHRleHQgdG8gc2hvdyBhcyB0aXRsZVxuICAgICAqL1xuICAgIHRpdGxlOiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiB0ZXh0IHRvIHNob3dcbiAgICAgKi9cbiAgICB0ZXh0OiBzdHJpbmdcblxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBIZWFkZXJUZXh0OiBGQzxIZWFkZXJUZXh0UHJvcHM+ID0gKHtcbiAgICBicmVhZGNydW1iPVtdLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2AgZmxleCBmbGV4LWNvbFxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lP3Byb3BzLmNsYXNzTmFtZTonJ31cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCcmVhZENydW1iIFxuICAgICAgICAgICAgICAgIGNydW1ibGlzdD17YnJlYWRjcnVtYn1cbiAgICAgICAgICAgICAgICBzdHlsZXM9XCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHBiLTNcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxoMVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGZvbnRTdHlsZS01eGwgJy8vIGxnOmZvbnRTdHlsZS02eGwgbWQ6Zm9udFN0eWxlLTV4bCBzbTpmb250U3R5bGUtNXhsJ1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHsgcHJvcHMudGl0bGUgfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgdGV4dC1iYXNlIGJyZWFrLXdvcmRzIHB0LTQnXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy50ZXh0IH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B0LTYgcGItNCdcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIChwcm9wcy5zdHlsZXMudHlwZT09XCJkZWZhdWx0XCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMuc3R5bGVzLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJyYW5kLTQwMCByb3VuZGVkLWxnIHB5LTQgcHgtNSB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdGV4dC1icmFuZC05MDAgaG92ZXI6YmctYnJhbmQtMzAwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuc3R5bGVzLmJ1dHRvblRleHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgKHByb3BzLnN0eWxlcy50eXBlPT1cImZvcm1cIikgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5zdHlsZXMuZm9ybVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHtwcm9wcy5zdHlsZXMuYnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VEYXJrID0gXCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSAnbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IFwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAocHJvcHMuc3R5bGVzLnR5cGU9PVwiY2FzZVwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U1Agd2lkdGg9JzQ4JyBoZWlnaHQ9JzQ4JyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIG1sLTcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eyBwcm9wcy5zdHlsZXMudXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuc3R5bGVzLmNhc2VUZXh0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=