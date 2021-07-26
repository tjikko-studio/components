"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopUpNavItem = require("./PopUpNavItem");

var _arrowDownSLine = _interopRequireDefault(require("../../assets/icons/arrow-down-s-line.svg"));

var _ListNav = require("./ListNav");

var _excluded = ["caption", "link", "styles"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    className: "flex items-center ".concat(mouseIn && styles == "default" ? "text-brand-600" : "", " ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", " ").concat(mouseIn && styles == "flat" ? "text-brand-100 dark:text-brand-300" : "")
  }, keys.length > 0 && /*#__PURE__*/_react.default.createElement("span", {
    className: "ml-2.5"
  }, /*#__PURE__*/_react.default.createElement(_arrowDownSLine.default, {
    width: "18",
    height: "18"
  }))), mouseIn && mouseClick && keys.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute left-0 top-full pt-3.5 w-max"
  }, /*#__PURE__*/_react.default.createElement(_ListNav.ListNav, {
    styles: styles == "flat" ? "flat" : "elevated",
    linkList: props.submenu
  })));
};

exports.NavItem = NavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0udHN4Il0sIm5hbWVzIjpbIk5hdkl0ZW0iLCJjYXB0aW9uIiwibGluayIsInN0eWxlcyIsInByb3BzIiwibW91c2VJbiIsInNldE1vdXNlSW4iLCJtb3VzZUNsaWNrIiwic2V0TW91c2VDbGljayIsImtleXMiLCJzdWJtZW51IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxPQUF5QixHQUFHLFFBS25DO0FBQUEsTUFMb0M7QUFDeENDLElBQUFBLE9BQU8sR0FBRyxPQUQ4QjtBQUV4Q0MsSUFBQUEsSUFBSSxHQUFHLElBRmlDO0FBR3hDQyxJQUFBQSxNQUFNLEdBQUc7QUFIK0IsR0FLcEM7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU0sQ0FBQ0MsT0FBRCxFQUFVQyxVQUFWLElBQXdCLHFCQUFTLEtBQVQsQ0FBOUI7QUFDQSxNQUFNLENBQUNDLFVBQUQsRUFBYUMsYUFBYixJQUE4QixxQkFBUyxLQUFULENBQXBDO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsTUFBSTtBQUNGQSxJQUFBQSxJQUFJLEdBQUlMLEtBQUssQ0FBQ00sT0FBTixLQUFrQkMsU0FBbEIsSUFBK0JQLEtBQUssQ0FBQ00sT0FBTixLQUFrQixJQUFsRCxHQUEwRCxFQUExRCxHQUErREUsTUFBTSxDQUFDSCxJQUFQLENBQVlMLEtBQUssQ0FBQ00sT0FBbEIsQ0FBdEU7QUFDRCxHQUZELENBRUUsT0FBT0csS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0FOLElBQUFBLElBQUksR0FBRyxFQUFQO0FBQ0Q7O0FBQ0Qsc0JBQ0UsaURBQ01MLEtBRE47QUFFRSxJQUFBLFNBQVMsNENBQ0dBLEtBQUssQ0FBQ1ksU0FBTixHQUFrQlosS0FBSyxDQUFDWSxTQUF4QixHQUFvQyxFQUR2QyxtQkFGWDtBQUtFLElBQUEsS0FBSyxFQUFFO0FBQUNDLE1BQUFBLEtBQUssRUFBRTtBQUFSLEtBTFQ7QUFNRSxJQUFBLFlBQVksRUFBRSxNQUFNO0FBQUNYLE1BQUFBLFVBQVUsQ0FBQyxJQUFELENBQVY7QUFBa0JFLE1BQUFBLGFBQWEsQ0FBQyxJQUFELENBQWI7QUFBb0IsS0FON0Q7QUFPRSxJQUFBLFlBQVksRUFBRSxNQUFNRixVQUFVLENBQUMsS0FBRDtBQVBoQyxtQkFTRSw2QkFBQywwQkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFLE1BQU1FLGFBQWEsQ0FBQyxDQUFDRCxVQUFGLENBRDlCO0FBRUUsSUFBQSxJQUFJLEVBQUdKLE1BQU0sSUFBSSxlQUFYLEdBQThCLFNBQTlCLEdBQTBDLFNBRmxEO0FBR0UsSUFBQSxPQUFPLEVBQUVGLE9BSFg7QUFJRSxJQUFBLElBQUksRUFBRUMsSUFKUjtBQUtFLElBQUEsU0FBUyw4QkFBdUJHLE9BQU8sSUFBSUYsTUFBTSxJQUFJLFNBQXJCLEdBQWlDLGdCQUFqQyxHQUFvRCxFQUEzRSxjQUFpRkUsT0FBTyxJQUFJRixNQUFNLElBQUksZUFBckIsR0FBdUMsZ0JBQXZDLEdBQTBELEVBQTNJLGNBQWlKRSxPQUFPLElBQUlGLE1BQU0sSUFBSSxNQUFyQixHQUE4QixvQ0FBOUIsR0FBcUUsRUFBdE47QUFMWCxLQU9JTSxJQUFJLENBQUNTLE1BQUwsR0FBYyxDQUFmLGlCQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsa0JBQ0UsNkJBQUMsdUJBQUQ7QUFDRSxJQUFBLEtBQUssRUFBQyxJQURSO0FBRUUsSUFBQSxNQUFNLEVBQUM7QUFGVCxJQURGLENBUkosQ0FURixFQTBCSWIsT0FBTyxJQUFJRSxVQUFaLElBQTRCRSxJQUFJLENBQUNTLE1BQUwsR0FBYyxDQUExQyxpQkFDQztBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0UsNkJBQUMsZ0JBQUQ7QUFBUyxJQUFBLE1BQU0sRUFBRWYsTUFBTSxJQUFJLE1BQVYsR0FBbUIsTUFBbkIsR0FBNEIsVUFBN0M7QUFBeUQsSUFBQSxRQUFRLEVBQUVDLEtBQUssQ0FBQ007QUFBekUsSUFIRixDQTNCSixDQURGO0FBcUNELENBcERNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BvcFVwTmF2SXRlbX0gZnJvbSAnLi9Qb3BVcE5hdkl0ZW0nXG5pbXBvcnQgQXJyb3dEb3duIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy1kb3duLXMtbGluZS5zdmcnXG5pbXBvcnQge0xpc3ROYXYsIE1lbnVUeXBlfSBmcm9tICcuL0xpc3ROYXYnXG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2SXRlbVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIHNldCBuYXYgaXRlbSB0eXBlXG4gICAqL1xuICBzdHlsZXM6IFwiZGVmYXVsdFwiIHwgXCJkZWZhdWx0L3doaXRlXCIgfCBcImZsYXRcIlxuICAvKipcbiAgICogdGV4dCB0byBzaG93IGFzIG1lbnVcbiAgICovXG4gIGNhcHRpb246IHN0cmluZ1xuICAvKipcbiAgICogdXJsIHRvIGdvIHdoZW4gbWVudSBjbGlja2VkXG4gICAqL1xuICBsaW5rPzogc3RyaW5nXG4gIC8qKlxuICAgKiBzdWIgbWVudSBqc29uIG9iamVjdCBzYW1lIGFzIGxpc3QgbmF2XG4gICAqL1xuICBzdWJtZW51PzogTWVudVR5cGVbXVxuICAvKipcbiAgICogQWRkaXRpb25hbCBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYXBwZW5kXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcblxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBOYXZJdGVtOiBGQzxOYXZJdGVtUHJvcHM+ID0gKHtcbiAgY2FwdGlvbiA9IFwiTGFiZWxcIixcbiAgbGluayA9IG51bGwsXG4gIHN0eWxlcyA9IFwiZGVmYXVsdC93aGl0ZVwiLFxuICAuLi5wcm9wc1xufSkgPT4ge1xuICBjb25zdCBbbW91c2VJbiwgc2V0TW91c2VJbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW21vdXNlQ2xpY2ssIHNldE1vdXNlQ2xpY2tdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGxldCBrZXlzID0gW11cbiAgdHJ5IHtcbiAgICBrZXlzID0gKHByb3BzLnN1Ym1lbnUgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5zdWJtZW51ID09PSBudWxsKSA/IFtdIDogT2JqZWN0LmtleXMocHJvcHMuc3VibWVudSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcInN1YiBtZW51IHN0cnVjdHVyZSBlcnJvclwiKVxuICAgIGtleXMgPSBbXVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLnByb3BzfVxuICAgICAgY2xhc3NOYW1lPXtgdy1tYXggcmVsYXRpdmVcbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZSA/IHByb3BzLmNsYXNzTmFtZSA6IFwiXCJ9XG4gICAgICAgICAgICBgfVxuICAgICAgc3R5bGU9e3t3aWR0aDogJ2ZpdC1jb250ZW50J319XG4gICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtzZXRNb3VzZUluKHRydWUpOyBzZXRNb3VzZUNsaWNrKHRydWUpfX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0TW91c2VJbihmYWxzZSl9XG4gICAgPlxuICAgICAgPFBvcFVwTmF2SXRlbVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb3VzZUNsaWNrKCFtb3VzZUNsaWNrKX1cbiAgICAgICAgdHlwZT17KHN0eWxlcyA9PSBcImRlZmF1bHQvd2hpdGVcIikgPyBcInNwZWNpYWxcIiA6IFwiZGVmYXVsdFwifVxuICAgICAgICBjYXB0aW9uPXtjYXB0aW9ufVxuICAgICAgICBocmVmPXtsaW5rfVxuICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGl0ZW1zLWNlbnRlciAke21vdXNlSW4gJiYgc3R5bGVzID09IFwiZGVmYXVsdFwiID8gXCJ0ZXh0LWJyYW5kLTYwMFwiIDogXCJcIn0gJHttb3VzZUluICYmIHN0eWxlcyA9PSBcImRlZmF1bHQvd2hpdGVcIiA/IFwidGV4dC1icmFuZC0zMDBcIiA6IFwiXCJ9ICR7bW91c2VJbiAmJiBzdHlsZXMgPT0gXCJmbGF0XCIgPyBcInRleHQtYnJhbmQtMTAwIGRhcms6dGV4dC1icmFuZC0zMDBcIiA6IFwiXCJ9YH1cbiAgICAgID5cbiAgICAgICAgeyhrZXlzLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTIuNSc+XG4gICAgICAgICAgICA8QXJyb3dEb3duXG4gICAgICAgICAgICAgIHdpZHRoPScxOCdcbiAgICAgICAgICAgICAgaGVpZ2h0PScxOCdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvUG9wVXBOYXZJdGVtPlxuICAgICAgeyhtb3VzZUluICYmIG1vdXNlQ2xpY2spICYmIChrZXlzLmxlbmd0aCA+IDApICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0wIHRvcC1mdWxsIHB0LTMuNSB3LW1heCdcbiAgICAgICAgPlxuICAgICAgICAgIDxMaXN0TmF2IHN0eWxlcz17c3R5bGVzID09IFwiZmxhdFwiID8gXCJmbGF0XCIgOiBcImVsZXZhdGVkXCJ9IGxpbmtMaXN0PXtwcm9wcy5zdWJtZW51fSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19