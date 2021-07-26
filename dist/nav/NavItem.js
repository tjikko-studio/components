"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _PopUpNavItem = require("./PopUpNavItem");

var _ArrowDown = require("../svg/ArrowDown");

var _ListNav = require("./ListNav");

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
    className: "flex items-center\n                    ".concat(mouseIn && styles == "default" ? "text-brand-600" : "", "\n                    ").concat(mouseIn && styles == "default/white" ? "text-brand-300" : "", "\n                    ").concat(mouseIn && styles == "flat" ? "text-brand-100 dark:text-brand-300" : "", "\n                ")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L05hdkl0ZW0udHN4Il0sIm5hbWVzIjpbIk5hdkl0ZW0iLCJjYXB0aW9uIiwibGluayIsInN0eWxlcyIsInByb3BzIiwibW91c2VJbiIsInNldE1vdXNlSW4iLCJtb3VzZUNsaWNrIiwic2V0TW91c2VDbGljayIsImtleXMiLCJzdWJtZW51IiwidW5kZWZpbmVkIiwiT2JqZWN0IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NOYW1lIiwid2lkdGgiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsT0FBeUIsR0FBRyxRQUtuQztBQUFBLE1BTG9DO0FBQ3hDQyxJQUFBQSxPQUFPLEdBQUcsT0FEOEI7QUFFeENDLElBQUFBLElBQUksR0FBRyxJQUZpQztBQUd4Q0MsSUFBQUEsTUFBTSxHQUFHO0FBSCtCLEdBS3BDO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNLENBQUNDLE9BQUQsRUFBVUMsVUFBVixJQUF3QixxQkFBUyxLQUFULENBQTlCO0FBQ0EsTUFBTSxDQUFDQyxVQUFELEVBQWFDLGFBQWIsSUFBOEIscUJBQVMsS0FBVCxDQUFwQztBQUNBLE1BQUlDLElBQUksR0FBRyxFQUFYOztBQUNBLE1BQUk7QUFDRkEsSUFBQUEsSUFBSSxHQUFJTCxLQUFLLENBQUNNLE9BQU4sS0FBa0JDLFNBQWxCLElBQStCUCxLQUFLLENBQUNNLE9BQU4sS0FBa0IsSUFBbEQsR0FBMEQsRUFBMUQsR0FBK0RFLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZTCxLQUFLLENBQUNNLE9BQWxCLENBQXRFO0FBQ0QsR0FGRCxDQUVFLE9BQU9HLEtBQVAsRUFBYztBQUNkQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBTixJQUFBQSxJQUFJLEdBQUcsRUFBUDtBQUNEOztBQUNELHNCQUNFLGlEQUNNTCxLQUROO0FBRUUsSUFBQSxTQUFTLDRDQUNHQSxLQUFLLENBQUNZLFNBQU4sR0FBa0JaLEtBQUssQ0FBQ1ksU0FBeEIsR0FBb0MsRUFEdkMsbUJBRlg7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUU7QUFBUixLQUxUO0FBTUUsSUFBQSxZQUFZLEVBQUUsTUFBTTtBQUFDWCxNQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQWtCRSxNQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiO0FBQW9CLEtBTjdEO0FBT0UsSUFBQSxZQUFZLEVBQUUsTUFBTUYsVUFBVSxDQUFDLEtBQUQ7QUFQaEMsbUJBU0UsNkJBQUMsMEJBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRSxNQUFNRSxhQUFhLENBQUMsQ0FBQ0QsVUFBRixDQUQ5QjtBQUVFLElBQUEsSUFBSSxFQUFHSixNQUFNLElBQUksZUFBWCxHQUE4QixTQUE5QixHQUEwQyxTQUZsRDtBQUdFLElBQUEsT0FBTyxFQUFFRixPQUhYO0FBSUUsSUFBQSxJQUFJLEVBQUVDLElBSlI7QUFLRSxJQUFBLFNBQVMsbURBQ0tHLE9BQU8sSUFBSUYsTUFBTSxJQUFJLFNBQXJCLEdBQWlDLGdCQUFqQyxHQUFvRCxFQUR6RCxtQ0FFS0UsT0FBTyxJQUFJRixNQUFNLElBQUksZUFBckIsR0FBdUMsZ0JBQXZDLEdBQTBELEVBRi9ELG1DQUdLRSxPQUFPLElBQUlGLE1BQU0sSUFBSSxNQUFyQixHQUE4QixvQ0FBOUIsR0FBcUUsRUFIMUU7QUFMWCxLQVdJTSxJQUFJLENBQUNTLE1BQUwsR0FBYyxDQUFmLGlCQUNDO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsa0JBQ0UsNkJBQUMsb0JBQUQ7QUFDRSxJQUFBLEtBQUssOENBQ2UsQ0FBQ2IsT0FBRCxJQUFZRixNQUFNLElBQUksU0FBdEIsR0FBa0MsZUFBbEMsR0FBb0QsRUFEbkUsK0NBRWUsQ0FBQ0UsT0FBRCxJQUFZRixNQUFNLElBQUksZUFBdEIsR0FBd0MsZUFBeEMsR0FBMEQsRUFGekUsK0NBR2UsQ0FBQ0UsT0FBRCxJQUFZRixNQUFNLElBQUksTUFBdEIsR0FBK0Isa0NBQS9CLEdBQW9FLEVBSG5GLCtDQUllRSxPQUFPLElBQUlGLE1BQU0sSUFBSSxTQUFyQixHQUFpQyxnQkFBakMsR0FBb0QsRUFKbkUsK0NBS2VFLE9BQU8sSUFBSUYsTUFBTSxJQUFJLGVBQXJCLEdBQXVDLGdCQUF2QyxHQUEwRCxFQUx6RSwrQ0FNZUUsT0FBTyxJQUFJRixNQUFNLElBQUksTUFBckIsR0FBOEIsb0NBQTlCLEdBQXFFLEVBTnBGLG1DQURQO0FBU0UsSUFBQSxTQUFTLEVBQUM7QUFUWixJQURGLENBWkosQ0FURixFQXFDSUUsT0FBTyxJQUFJRSxVQUFaLElBQTRCRSxJQUFJLENBQUNTLE1BQUwsR0FBYyxDQUExQyxpQkFDQztBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0UsNkJBQUMsZ0JBQUQ7QUFBUyxJQUFBLE1BQU0sRUFBRWYsTUFBTSxJQUFJLE1BQVYsR0FBbUIsTUFBbkIsR0FBNEIsVUFBN0M7QUFBeUQsSUFBQSxRQUFRLEVBQUVDLEtBQUssQ0FBQ007QUFBekUsSUFIRixDQXRDSixDQURGO0FBZ0RELENBL0RNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1BvcFVwTmF2SXRlbX0gZnJvbSAnLi9Qb3BVcE5hdkl0ZW0nXG5pbXBvcnQge0Fycm93RG93bn0gZnJvbSAnLi4vc3ZnL0Fycm93RG93bidcbmltcG9ydCB7TGlzdE5hdiwgTWVudVR5cGV9IGZyb20gJy4vTGlzdE5hdidcblxuZXhwb3J0IGludGVyZmFjZSBOYXZJdGVtUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogc2V0IG5hdiBpdGVtIHR5cGVcbiAgICovXG4gIHN0eWxlczogXCJkZWZhdWx0XCIgfCBcImRlZmF1bHQvd2hpdGVcIiB8IFwiZmxhdFwiXG4gIC8qKlxuICAgKiB0ZXh0IHRvIHNob3cgYXMgbWVudVxuICAgKi9cbiAgY2FwdGlvbjogc3RyaW5nXG4gIC8qKlxuICAgKiB1cmwgdG8gZ28gd2hlbiBtZW51IGNsaWNrZWRcbiAgICovXG4gIGxpbms/OiBzdHJpbmcgfCBudWxsXG4gIC8qKlxuICAgKiBzdWIgbWVudSBqc29uIG9iamVjdCBzYW1lIGFzIGxpc3QgbmF2XG4gICAqL1xuICBzdWJtZW51PzogQXJyYXk8TWVudVR5cGU+XG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IE5hdkl0ZW06IEZDPE5hdkl0ZW1Qcm9wcz4gPSAoe1xuICBjYXB0aW9uID0gXCJMYWJlbFwiLFxuICBsaW5rID0gbnVsbCxcbiAgc3R5bGVzID0gXCJkZWZhdWx0L3doaXRlXCIsXG4gIC4uLnByb3BzXG59KSA9PiB7XG4gIGNvbnN0IFttb3VzZUluLCBzZXRNb3VzZUluXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbW91c2VDbGljaywgc2V0TW91c2VDbGlja10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IGtleXMgPSBbXVxuICB0cnkge1xuICAgIGtleXMgPSAocHJvcHMuc3VibWVudSA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLnN1Ym1lbnUgPT09IG51bGwpID8gW10gOiBPYmplY3Qua2V5cyhwcm9wcy5zdWJtZW51KVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwic3ViIG1lbnUgc3RydWN0dXJlIGVycm9yXCIpXG4gICAga2V5cyA9IFtdXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB7Li4ucHJvcHN9XG4gICAgICBjbGFzc05hbWU9e2B3LW1heCByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICR7cHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lIDogXCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICBzdHlsZT17e3dpZHRoOiAnZml0LWNvbnRlbnQnfX1cbiAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge3NldE1vdXNlSW4odHJ1ZSk7IHNldE1vdXNlQ2xpY2sodHJ1ZSl9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRNb3VzZUluKGZhbHNlKX1cbiAgICA+XG4gICAgICA8UG9wVXBOYXZJdGVtXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vdXNlQ2xpY2soIW1vdXNlQ2xpY2spfVxuICAgICAgICB0eXBlPXsoc3R5bGVzID09IFwiZGVmYXVsdC93aGl0ZVwiKSA/IFwic3BlY2lhbFwiIDogXCJkZWZhdWx0XCJ9XG4gICAgICAgIGNhcHRpb249e2NhcHRpb259XG4gICAgICAgIGhyZWY9e2xpbmt9XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICR7bW91c2VJbiAmJiBzdHlsZXMgPT0gXCJkZWZhdWx0XCIgPyBcInRleHQtYnJhbmQtNjAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAke21vdXNlSW4gJiYgc3R5bGVzID09IFwiZGVmYXVsdC93aGl0ZVwiID8gXCJ0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgJHttb3VzZUluICYmIHN0eWxlcyA9PSBcImZsYXRcIiA/IFwidGV4dC1icmFuZC0xMDAgZGFyazp0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICB7KGtleXMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbWwtMi41Jz5cbiAgICAgICAgICAgIDxBcnJvd0Rvd25cbiAgICAgICAgICAgICAgY29sb3I9e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHshbW91c2VJbiAmJiBzdHlsZXMgPT0gXCJkZWZhdWx0XCIgPyBcInRleHQtZ3JheS04MDBcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IW1vdXNlSW4gJiYgc3R5bGVzID09IFwiZGVmYXVsdC93aGl0ZVwiID8gXCJ0ZXh0LWdyYXktMTAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyFtb3VzZUluICYmIHN0eWxlcyA9PSBcImZsYXRcIiA/IFwidGV4dC1ncmF5LTEwMCBkYXJrOnRleHQtZ3JheS0xMDBcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bW91c2VJbiAmJiBzdHlsZXMgPT0gXCJkZWZhdWx0XCIgPyBcInRleHQtYnJhbmQtNjAwXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21vdXNlSW4gJiYgc3R5bGVzID09IFwiZGVmYXVsdC93aGl0ZVwiID8gXCJ0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttb3VzZUluICYmIHN0eWxlcyA9PSBcImZsYXRcIiA/IFwidGV4dC1icmFuZC0zMDAgZGFyazp0ZXh0LWJyYW5kLTMwMFwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICBkYXJrQ29sb3I9XCJ0ZXh0LWdyYXktNTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9Qb3BVcE5hdkl0ZW0+XG4gICAgICB7KG1vdXNlSW4gJiYgbW91c2VDbGljaykgJiYgKGtleXMubGVuZ3RoID4gMCkgJiYgKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTAgdG9wLWZ1bGwgcHQtMy41IHctbWF4J1xuICAgICAgICA+XG4gICAgICAgICAgPExpc3ROYXYgc3R5bGVzPXtzdHlsZXMgPT0gXCJmbGF0XCIgPyBcImZsYXRcIiA6IFwiZWxldmF0ZWRcIn0gbGlua0xpc3Q9e3Byb3BzLnN1Ym1lbnV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=