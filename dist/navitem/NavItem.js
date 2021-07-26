"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopUpNavItem = require("../popupnavitem/PopUpNavItem");

var _ArrowDown = require("../svg/ArrowDown");

var _ListNav = require("../listnav/ListNav");

var _excluded = ["caption", "link", "styles"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var NavItem = _ref => {
  var {
    caption = "Label",
    link = null,
    styles = "default/white"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var [mouseIn, setMouseIn] = (0, _react.useState)(false);
  var [mouseClick, setMouseClick] = (0, _react.useState)(false);
  var keys = [];

  try {
    keys = props.submenu === undefined || props.submenu === null ? [] : Object.keys(props.submenu);
  } catch (error) {
    console.log("sub menu structure error");
    keys = [];
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "w-max relative\n                ".concat(props.className ? props.className : "", "\n            "),
    style: {
      width: 'fit-content'
    },
    onMouseEnter: () => {
      setMouseIn(true);
      setMouseClick(true);
    },
    onMouseLeave: () => setMouseIn(false)
  }), /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
    onClick: () => setMouseClick(!mouseClick),
    type: styles == "default/white" ? "special" : "default",
    caption: caption,
    href: link,
    className: "flex items-center \n                    ".concat(mouseIn && styles == "default" ? "text-brand-600" : "", "\n                    ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", "\n                    ").concat(mouseIn && styles == "flat" ? "text-brand-100 dark:text-brand-300" : "", "\n                ")
  }, keys.length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2.5"
  }, /*#__PURE__*/_react.default.createElement(_ArrowDown.ArrowDown, {
    color: "\n                                ".concat(!mouseIn && styles == "default" ? "text-gray-800" : "", "\n                                ").concat(!mouseIn && styles == "default/white" ? "text-gray-100" : "", "\n                                ").concat(!mouseIn && styles == "flat" ? "text-gray-100 dark:text-gray-100" : "", "\n                                ").concat(mouseIn && styles == "default" ? "text-brand-600" : "", "\n                                ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", "\n                                ").concat(mouseIn && styles == "flat" ? "text-brand-300 dark:text-brand-300" : "", "\n                            "),
    darkColor: "text-gray-50"
  }))), mouseIn && mouseClick && keys.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute left-0 top-full pt-3.5 w-max"
  }, /*#__PURE__*/_react.default.createElement(_ListNav.ListNav, {
    styles: styles == "flat" ? "flat" : "elevated",
    linkList: props.submenu
  })));
};

exports.NavItem = NavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2aXRlbS9OYXZJdGVtLnRzeCJdLCJuYW1lcyI6WyJOYXZJdGVtIiwiY2FwdGlvbiIsImxpbmsiLCJzdHlsZXMiLCJwcm9wcyIsIm1vdXNlSW4iLCJzZXRNb3VzZUluIiwibW91c2VDbGljayIsInNldE1vdXNlQ2xpY2siLCJrZXlzIiwic3VibWVudSIsInVuZGVmaW5lZCIsIk9iamVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsYXNzTmFtZSIsIndpZHRoIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBMEJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE9BQXlCLEdBQUcsUUFLbkM7QUFBQSxNQUxvQztBQUN0Q0MsSUFBQUEsT0FBTyxHQUFHLE9BRDRCO0FBRXRDQyxJQUFBQSxJQUFJLEdBQUcsSUFGK0I7QUFHdENDLElBQUFBLE1BQU0sR0FBRztBQUg2QixHQUtwQztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTSxDQUFDQyxPQUFELEVBQVVDLFVBQVYsSUFBd0IscUJBQVMsS0FBVCxDQUE5QjtBQUNBLE1BQU0sQ0FBQ0MsVUFBRCxFQUFhQyxhQUFiLElBQThCLHFCQUFTLEtBQVQsQ0FBcEM7QUFDQSxNQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxNQUFHO0FBQ0NBLElBQUFBLElBQUksR0FBSUwsS0FBSyxDQUFDTSxPQUFOLEtBQWtCQyxTQUFsQixJQUErQlAsS0FBSyxDQUFDTSxPQUFOLEtBQWtCLElBQWxELEdBQTBELEVBQTFELEdBQStERSxNQUFNLENBQUNILElBQVAsQ0FBWUwsS0FBSyxDQUFDTSxPQUFsQixDQUF0RTtBQUNILEdBRkQsQ0FFQyxPQUFNRyxLQUFOLEVBQVk7QUFDVEMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7QUFDQU4sSUFBQUEsSUFBSSxHQUFHLEVBQVA7QUFDSDs7QUFDRCxzQkFDSSxpREFDUUwsS0FEUjtBQUVJLElBQUEsU0FBUyw0Q0FDSEEsS0FBSyxDQUFDWSxTQUFOLEdBQWtCWixLQUFLLENBQUNZLFNBQXhCLEdBQW9DLEVBRGpDLG1CQUZiO0FBS0ksSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsS0FBSyxFQUFFO0FBQVIsS0FMWDtBQU1JLElBQUEsWUFBWSxFQUFFLE1BQU07QUFBQ1gsTUFBQUEsVUFBVSxDQUFDLElBQUQsQ0FBVjtBQUFrQkUsTUFBQUEsYUFBYSxDQUFDLElBQUQsQ0FBYjtBQUFxQixLQU5oRTtBQU9JLElBQUEsWUFBWSxFQUFFLE1BQU1GLFVBQVUsQ0FBQyxLQUFEO0FBUGxDLG1CQVNJLDZCQUFDLDBCQUFEO0FBQ0ksSUFBQSxPQUFPLEVBQUUsTUFBTUUsYUFBYSxDQUFDLENBQUNELFVBQUYsQ0FEaEM7QUFFSSxJQUFBLElBQUksRUFBSUosTUFBTSxJQUFFLGVBQVQsR0FBNkIsU0FBN0IsR0FBeUMsU0FGcEQ7QUFHSSxJQUFBLE9BQU8sRUFBR0YsT0FIZDtBQUlJLElBQUEsSUFBSSxFQUFFQyxJQUpWO0FBS0ksSUFBQSxTQUFTLG9EQUNGRyxPQUFPLElBQUlGLE1BQU0sSUFBRSxTQUFuQixHQUErQixnQkFBL0IsR0FBa0QsRUFEaEQsbUNBRUZFLE9BQU8sSUFBSUYsTUFBTSxJQUFFLGVBQW5CLEdBQXFDLGdCQUFyQyxHQUF3RCxFQUZ0RCxtQ0FHRkUsT0FBTyxJQUFJRixNQUFNLElBQUUsTUFBbkIsR0FBNEIsb0NBQTVCLEdBQW1FLEVBSGpFO0FBTGIsS0FXS00sSUFBSSxDQUFDUyxNQUFMLEdBQWMsQ0FBZixpQkFDSTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLGtCQUNJLDZCQUFDLG9CQUFEO0FBQ0ksSUFBQSxLQUFLLDhDQUNFLENBQUNiLE9BQUQsSUFBWUYsTUFBTSxJQUFFLFNBQXBCLEdBQWdDLGVBQWhDLEdBQWtELEVBRHBELCtDQUVFLENBQUNFLE9BQUQsSUFBWUYsTUFBTSxJQUFFLGVBQXBCLEdBQXNDLGVBQXRDLEdBQXdELEVBRjFELCtDQUdFLENBQUNFLE9BQUQsSUFBWUYsTUFBTSxJQUFFLE1BQXBCLEdBQTZCLGtDQUE3QixHQUFrRSxFQUhwRSwrQ0FJRUUsT0FBTyxJQUFJRixNQUFNLElBQUUsU0FBbkIsR0FBK0IsZ0JBQS9CLEdBQWtELEVBSnBELCtDQUtFRSxPQUFPLElBQUlGLE1BQU0sSUFBRSxlQUFuQixHQUFxQyxnQkFBckMsR0FBd0QsRUFMMUQsK0NBTUVFLE9BQU8sSUFBSUYsTUFBTSxJQUFFLE1BQW5CLEdBQTRCLG9DQUE1QixHQUFtRSxFQU5yRSxtQ0FEVDtBQVNJLElBQUEsU0FBUyxFQUFDO0FBVGQsSUFESixDQVpSLENBVEosRUFxQ09FLE9BQU8sSUFBSUUsVUFBWixJQUE0QkUsSUFBSSxDQUFDUyxNQUFMLEdBQWMsQ0FBMUMsaUJBQ007QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLGtCQUdJLDZCQUFDLGdCQUFEO0FBQVMsSUFBQSxNQUFNLEVBQUVmLE1BQU0sSUFBSSxNQUFWLEdBQW1CLE1BQW5CLEdBQTRCLFVBQTdDO0FBQXlELElBQUEsUUFBUSxFQUFHQyxLQUFLLENBQUNNO0FBQTFFLElBSEosQ0F0Q1osQ0FESjtBQWdESCxDQS9ETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQb3BVcE5hdkl0ZW0gfSBmcm9tICcuLi9wb3B1cG5hdml0ZW0vUG9wVXBOYXZJdGVtJ1xuaW1wb3J0IHsgQXJyb3dEb3duIH0gZnJvbSAnLi4vc3ZnL0Fycm93RG93bidcbmltcG9ydCB7IExpc3ROYXYsIE1lbnVUeXBlIH0gZnJvbSAnLi4vbGlzdG5hdi9MaXN0TmF2J1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdkl0ZW1Qcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogc2V0IG5hdiBpdGVtIHR5cGVcbiAgICAgKi9cbiAgICBzdHlsZXM6IFwiZGVmYXVsdFwiIHwgXCJkZWZhdWx0L3doaXRlXCIgfCBcImZsYXRcIlxuICAgIC8qKlxuICAgICAqIHRleHQgdG8gc2hvdyBhcyBtZW51XG4gICAgICovXG4gICAgY2FwdGlvbjogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdXJsIHRvIGdvIHdoZW4gbWVudSBjbGlja2VkXG4gICAgICovXG4gICAgbGluaz86IHN0cmluZyB8IG51bGxcbiAgICAvKipcbiAgICAgKiBzdWIgbWVudSBqc29uIG9iamVjdCBzYW1lIGFzIGxpc3QgbmF2XG4gICAgICovXG4gICAgc3VibWVudT86IEFycmF5PE1lbnVUeXBlPlxuICAgIC8qKlxuICAgICAqIGNsYXNzIG5hbWVzIGZyb20gcGFyZW50XG4gICAgICovXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgTmF2SXRlbTogRkM8TmF2SXRlbVByb3BzPiA9ICh7XG4gICAgY2FwdGlvbiA9IFwiTGFiZWxcIixcbiAgICBsaW5rID0gbnVsbCxcbiAgICBzdHlsZXMgPSBcImRlZmF1bHQvd2hpdGVcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIGNvbnN0IFttb3VzZUluLCBzZXRNb3VzZUluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbW91c2VDbGljaywgc2V0TW91c2VDbGlja10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgbGV0IGtleXMgPSBbXVxuICAgIHRyeXtcbiAgICAgICAga2V5cyA9IChwcm9wcy5zdWJtZW51ID09PSB1bmRlZmluZWQgfHwgcHJvcHMuc3VibWVudSA9PT0gbnVsbCkgPyBbXSA6IE9iamVjdC5rZXlzKHByb3BzLnN1Ym1lbnUpXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdWIgbWVudSBzdHJ1Y3R1cmUgZXJyb3JcIilcbiAgICAgICAga2V5cyA9IFtdXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LW1heCByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogXCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnZml0LWNvbnRlbnQnfX0gXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRNb3VzZUluKHRydWUpOyBzZXRNb3VzZUNsaWNrKHRydWUpIH0gIH0gXG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldE1vdXNlSW4oZmFsc2UpIH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFBvcFVwTmF2SXRlbSBcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb3VzZUNsaWNrKCFtb3VzZUNsaWNrKX1cbiAgICAgICAgICAgICAgICB0eXBlPXsgKHN0eWxlcz09XCJkZWZhdWx0L3doaXRlXCIpICA/IFwic3BlY2lhbFwiIDogXCJkZWZhdWx0XCJ9XG4gICAgICAgICAgICAgICAgY2FwdGlvbj17IGNhcHRpb24gfSBcbiAgICAgICAgICAgICAgICBocmVmPXtsaW5rfSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciBcbiAgICAgICAgICAgICAgICAgICAgJHsgbW91c2VJbiAmJiBzdHlsZXM9PVwiZGVmYXVsdFwiID8gXCJ0ZXh0LWJyYW5kLTYwMFwiIDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICR7IG1vdXNlSW4gJiYgc3R5bGVzPT1cImRlZmF1bHQvd2hpdGVcIiA/IFwidGV4dC1icmFuZC0zMDBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAkeyBtb3VzZUluICYmIHN0eWxlcz09XCJmbGF0XCIgPyBcInRleHQtYnJhbmQtMTAwIGRhcms6dGV4dC1icmFuZC0zMDBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICB7ICAgKGtleXMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTIuNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QXJyb3dEb3duIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7ICFtb3VzZUluICYmIHN0eWxlcz09XCJkZWZhdWx0XCIgPyBcInRleHQtZ3JheS04MDBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyAhbW91c2VJbiAmJiBzdHlsZXM9PVwiZGVmYXVsdC93aGl0ZVwiID8gXCJ0ZXh0LWdyYXktMTAwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgIW1vdXNlSW4gJiYgc3R5bGVzPT1cImZsYXRcIiA/IFwidGV4dC1ncmF5LTEwMCBkYXJrOnRleHQtZ3JheS0xMDBcIiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyBtb3VzZUluICYmIHN0eWxlcz09XCJkZWZhdWx0XCIgPyBcInRleHQtYnJhbmQtNjAwXCIgOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHsgbW91c2VJbiAmJiBzdHlsZXM9PVwiZGVmYXVsdC93aGl0ZVwiID8gXCJ0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IG1vdXNlSW4gJiYgc3R5bGVzPT1cImZsYXRcIiA/IFwidGV4dC1icmFuZC0zMDAgZGFyazp0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFya0NvbG9yPVwidGV4dC1ncmF5LTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BvcFVwTmF2SXRlbT5cbiAgICAgICAgICAgIHsgKG1vdXNlSW4gJiYgbW91c2VDbGljaykgJiYgKGtleXMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgcHQtMy41IHctbWF4J1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdE5hdiBzdHlsZXM9e3N0eWxlcyA9PSBcImZsYXRcIiA/IFwiZmxhdFwiIDogXCJlbGV2YXRlZFwifSBsaW5rTGlzdD17IHByb3BzLnN1Ym1lbnUgfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ==