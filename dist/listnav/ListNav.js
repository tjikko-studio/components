"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListNav = void 0;

var _react = _interopRequireDefault(require("react"));

var _PopUpNavItem = require("../popupnavitem/PopUpNavItem");

var _excluded = ["styles", "linkList"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var ListNav = _ref => {
  var {
    styles = "elevated",
    linkList = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  linkList = linkList == null || linkList == undefined ? [] : linkList;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "rounded-lg bg-gray-50 dark:bg-transparent px-3 py-2.5 w-max\n                ".concat(styles == "elevated" && "shadow-lg", "\n                ").concat(linkList.length > 1 && styles == "elevated" && "flex", "\n                ").concat(linkList.length > 1 && styles == "flat" && "grid grid-cols-2", "\n            "),
    style: {
      width: 'fit-content'
    }
  }, linkList.map((menu, index) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "m-1.5 w-max",
      key: index
    }, linkList.length > 1 && /*#__PURE__*/_react.default.createElement("div", {
      className: "font-semibold text-sm leading-5 uppercase px-3 py-2.5 dark:text-gray-100 text-gray-800"
    }, menu.groupcaption), menu.grouplist.map((menuItem, subIndex) => {
      return /*#__PURE__*/_react.default.createElement(_PopUpNavItem.PopUpNavItem, {
        caption: menuItem.name,
        type: menuItem.type ? menuItem.type : "default",
        key: subIndex,
        className: "px-3 py-2.5",
        href: menuItem.url
      });
    }));
  }));
};

exports.ListNav = ListNav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbGlzdG5hdi9MaXN0TmF2LnRzeCJdLCJuYW1lcyI6WyJMaXN0TmF2Iiwic3R5bGVzIiwibGlua0xpc3QiLCJwcm9wcyIsInVuZGVmaW5lZCIsImxlbmd0aCIsIndpZHRoIiwibWFwIiwibWVudSIsImluZGV4IiwiZ3JvdXBjYXB0aW9uIiwiZ3JvdXBsaXN0IiwibWVudUl0ZW0iLCJzdWJJbmRleCIsIm5hbWUiLCJ0eXBlIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsT0FBeUIsR0FBRyxRQUluQztBQUFBLE1BSm9DO0FBQ3RDQyxJQUFBQSxNQUFNLEdBQUMsVUFEK0I7QUFFdENDLElBQUFBLFFBQVEsR0FBRztBQUYyQixHQUlwQztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0ZELEVBQUFBLFFBQVEsR0FBSUEsUUFBUSxJQUFJLElBQVosSUFBb0JBLFFBQVEsSUFBSUUsU0FBakMsR0FBOEMsRUFBOUMsR0FBbURGLFFBQTlEO0FBQ0Esc0JBQ0k7QUFDSSxJQUFBLFNBQVMseUZBQ0RELE1BQU0sSUFBSSxVQUFYLElBQTBCLFdBRHhCLCtCQUVEQyxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkIsSUFBMEJKLE1BQU0sSUFBSSxVQUFwQyxJQUFtRCxNQUZqRCwrQkFHREMsUUFBUSxDQUFDRyxNQUFULEdBQWtCLENBQW5CLElBQTBCSixNQUFNLElBQUksTUFBcEMsSUFBK0Msa0JBSDdDLG1CQURiO0FBTUksSUFBQSxLQUFLLEVBQUU7QUFBQ0ssTUFBQUEsS0FBSyxFQUFFO0FBQVI7QUFOWCxLQVNRSixRQUFRLENBQUNLLEdBQVQsQ0FBYSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDMUIsd0JBQU87QUFBSyxNQUFBLFNBQVMsRUFBQyxhQUFmO0FBQTZCLE1BQUEsR0FBRyxFQUFFQTtBQUFsQyxPQUVFUCxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkIsaUJBQ0k7QUFDSSxNQUFBLFNBQVM7QUFEYixPQUdNRyxJQUFJLENBQUNFLFlBSFgsQ0FITCxFQVdDRixJQUFJLENBQUNHLFNBQUwsQ0FBZUosR0FBZixDQUFtQixDQUFDSyxRQUFELEVBQVdDLFFBQVgsS0FBd0I7QUFDdkMsMEJBQVEsNkJBQUMsMEJBQUQ7QUFBZSxRQUFBLE9BQU8sRUFBRUQsUUFBUSxDQUFDRSxJQUFqQztBQUF1QyxRQUFBLElBQUksRUFBRUYsUUFBUSxDQUFDRyxJQUFULEdBQWNILFFBQVEsQ0FBQ0csSUFBdkIsR0FBNEIsU0FBekU7QUFBb0YsUUFBQSxHQUFHLEVBQUVGLFFBQXpGO0FBQW1HLFFBQUEsU0FBUyxFQUFDLGFBQTdHO0FBQTJILFFBQUEsSUFBSSxFQUFFRCxRQUFRLENBQUNJO0FBQTFJLFFBQVI7QUFDSCxLQUZELENBWEQsQ0FBUDtBQWdCSCxHQWpCRCxDQVRSLENBREo7QUErQkgsQ0FyQ00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQb3BVcE5hdkl0ZW0sIFBvcFVwTmF2SXRlbVByb3BzIH0gZnJvbSAnLi4vcG9wdXBuYXZpdGVtL1BvcFVwTmF2SXRlbSdcblxuZXhwb3J0IGludGVyZmFjZSBNZW51SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbiAgICB0eXBlPzogXCJkZWZhdWx0XCIgfCBcImhlYWRlclwiIHwgXCJidXR0b25cIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lbnVUeXBlIHtcbiAgICBncm91cGNhcHRpb246IHN0cmluZ1xuICAgIGdyb3VwbGlzdDpBcnJheTxNZW51SXRlbT5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMaXN0TmF2UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAgIFxuICAgIC8qKlxuICAgICAqIHN0eWxlXG4gICAgICovXG4gICAgc3R5bGVzOiBcImVsZXZhdGVkXCIgfCBcImZsYXRcIlxuICAgIC8qKlxuICAgICAqIElmIGRhdGEgY29udGFpbnMgb25lLCBpdCB3aWxsIGJlIHNpbmdsZS4gSWYgZGF0YSBjb250YWlucyBtb3JlIHRoYW4gb25lLCBpdCB3aWxsIGJlIG11bHRpLiBBdCB0aGlzIHRpbWUsIGxhc3QgZWxlbWVudCB3aWxsIGJlIHRlcnRpYXJ5ICBidXR0b24uXG4gICAgICovXG4gICAgbGlua0xpc3Q6IEFycmF5PE1lbnVUeXBlPlxufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBMaXN0TmF2OiBGQzxMaXN0TmF2UHJvcHM+ID0gKHtcbiAgICBzdHlsZXM9XCJlbGV2YXRlZFwiLFxuICAgIGxpbmtMaXN0ID0gW10sXG4gICAgLi4ucHJvcHNcbn0pID0+IHtcbiAgICBsaW5rTGlzdCA9IChsaW5rTGlzdCA9PSBudWxsIHx8IGxpbmtMaXN0ID09IHVuZGVmaW5lZCkgPyBbXSA6IGxpbmtMaXN0XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyBiZy1ncmF5LTUwIGRhcms6YmctdHJhbnNwYXJlbnQgcHgtMyBweS0yLjUgdy1tYXhcbiAgICAgICAgICAgICAgICAkeyAoc3R5bGVzID09IFwiZWxldmF0ZWRcIikgJiYgXCJzaGFkb3ctbGdcIiB9XG4gICAgICAgICAgICAgICAgJHsgKGxpbmtMaXN0Lmxlbmd0aCA+IDEpICYmIChzdHlsZXMgPT0gXCJlbGV2YXRlZFwiKSAmJiBcImZsZXhcIiB9XG4gICAgICAgICAgICAgICAgJHsgKGxpbmtMaXN0Lmxlbmd0aCA+IDEpICYmIChzdHlsZXMgPT0gXCJmbGF0XCIpICYmIFwiZ3JpZCBncmlkLWNvbHMtMlwiIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICBzdHlsZT17e3dpZHRoOiAnZml0LWNvbnRlbnQnfX1cbiAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpbmtMaXN0Lm1hcCgobWVudSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwibS0xLjUgdy1tYXhcIiBrZXk9e2luZGV4fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxpbmtMaXN0Lmxlbmd0aCA+IDEpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9udC1zZW1pYm9sZCB0ZXh0LXNtIGxlYWRpbmctNSB1cHBlcmNhc2UgcHgtMyBweS0yLjUgZGFyazp0ZXh0LWdyYXktMTAwIHRleHQtZ3JheS04MDBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG1lbnUuZ3JvdXBjYXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnUuZ3JvdXBsaXN0Lm1hcCgobWVudUl0ZW0sIHN1YkluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPFBvcFVwTmF2SXRlbSAgY2FwdGlvbj17bWVudUl0ZW0ubmFtZX0gdHlwZT17bWVudUl0ZW0udHlwZT9tZW51SXRlbS50eXBlOlwiZGVmYXVsdFwifSBrZXk9e3N1YkluZGV4fSBjbGFzc05hbWU9J3B4LTMgcHktMi41JyBocmVmPXttZW51SXRlbS51cmx9ID48L1BvcFVwTmF2SXRlbT4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19