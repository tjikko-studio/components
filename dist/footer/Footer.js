"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _Logo = require("../svg/Logo");

var _excluded = ["footermenu"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Footer = _ref => {
  var {
    footermenu = []
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pl-6 pt-6 lg:pt-9 md:pt-9 pb-6 lg:pb-7 md:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_Logo.Logo, {
    width: "210",
    height: "16"
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mx-6 bg-opacity-30 border-gray-500"
  }), /*#__PURE__*/_react.default.createElement("nav", {
    className: "px-6 pt-8 lg:flex md:grid md:grid-cols-2"
  }, footermenu.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("ul", {
      key: menuIndex,
      className: "flex-1 pb-12 lg:mb-0"
    }, /*#__PURE__*/_react.default.createElement("li", {
      className: "text-gray-300 text-xs font-medium uppercase"
    }, menu.caption), menu.menuList.map((menuItem, itemIndex) => {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: itemIndex,
        className: "text-gray-50 hover:text-brand-300 text-sm pt-3"
      }, /*#__PURE__*/_react.default.createElement("a", {
        href: menuItem.url
      }, menuItem.name));
    }));
  })), /*#__PURE__*/_react.default.createElement("nav", {
    className: "text-gray-50 text-sm flex flex-col-reverse md:flex-row pt-32 lg:pt-8 md:pt-3 px-6 pb-6 md:pb-4 lg:pb-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-1 flex-row-reverse md:flex-row pt-4 md:pt-0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex justify-end md:justify-start"
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xA9 ", props.year ? props.year : new Date().getFullYear())), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-1 space-x-2"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, props.privacy ? props.privacy : "Privacy")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, props.privacy ? props.privacy : "Terms")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1"
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-1 md:-ml-20 space-x-2"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "Facebook")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "YouTube")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "Twitter")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "text-gray-50 hover:text-brand-300",
    href: ""
  }, "LinkedIn")))));
};

exports.Footer = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci50c3giXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVybWVudSIsInByb3BzIiwibWFwIiwibWVudSIsIm1lbnVJbmRleCIsImNhcHRpb24iLCJtZW51TGlzdCIsIm1lbnVJdGVtIiwiaXRlbUluZGV4IiwidXJsIiwibmFtZSIsInllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwcml2YWN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBdUIsR0FBRyxRQUdqQztBQUFBLE1BSGtDO0FBQ3BDQyxJQUFBQSxVQUFVLEdBQUc7QUFEdUIsR0FHbEM7QUFBQSxNQURDQyxLQUNEOztBQUVGLHNCQUNJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxrQkFHSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsa0JBR0ksNkJBQUMsVUFBRDtBQUFNLElBQUEsS0FBSyxFQUFDLEtBQVo7QUFBa0IsSUFBQSxNQUFNLEVBQUM7QUFBekIsSUFISixDQUhKLGVBUUk7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLElBUkosZUFXSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsS0FJUUQsVUFBVSxDQUFDRSxHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxTQUFQLEtBQXFCO0FBQ2hDLHdCQUNJO0FBQ0ksTUFBQSxHQUFHLEVBQUVBLFNBRFQ7QUFFSSxNQUFBLFNBQVM7QUFGYixvQkFJSTtBQUNJLE1BQUEsU0FBUyxFQUFDO0FBRGQsT0FHTUQsSUFBSSxDQUFDRSxPQUhYLENBSkosRUFVUUYsSUFBSSxDQUFDRyxRQUFMLENBQWNKLEdBQWQsQ0FBa0IsQ0FBQ0ssUUFBRCxFQUFXQyxTQUFYLEtBQXlCO0FBQ3ZDLDBCQUNJO0FBQ0ksUUFBQSxHQUFHLEVBQUVBLFNBRFQ7QUFFSSxRQUFBLFNBQVMsRUFBQztBQUZkLHNCQUlJO0FBQ0ksUUFBQSxJQUFJLEVBQUVELFFBQVEsQ0FBQ0U7QUFEbkIsU0FJUUYsUUFBUSxDQUFDRyxJQUpqQixDQUpKLENBREo7QUFjSCxLQWZELENBVlIsQ0FESjtBQThCSCxHQS9CRCxDQUpSLENBWEosZUFpREk7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLGtCQUdJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQTBELG9EQUFVVCxLQUFLLENBQUNVLElBQU4sR0FBV1YsS0FBSyxDQUFDVSxJQUFqQixHQUFzQixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFBaEMsQ0FBMUQsQ0FESixlQUVJO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxrQkFDSSxzREFDSTtBQUFHLElBQUEsSUFBSSxFQUFDLEdBQVI7QUFBWSxJQUFBLFNBQVMsRUFBQztBQUF0QixLQUNNWixLQUFLLENBQUNhLE9BQU4sR0FBY2IsS0FBSyxDQUFDYSxPQUFwQixHQUE0QixTQURsQyxDQURKLENBREosZUFNSSw2Q0FOSixlQU9JLHNEQUNJO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUFZLElBQUEsU0FBUyxFQUFDO0FBQXRCLEtBQ01iLEtBQUssQ0FBQ2EsT0FBTixHQUFjYixLQUFLLENBQUNhLE9BQXBCLEdBQTRCLE9BRGxDLENBREosQ0FQSixDQUZKLENBSEosZUFtQkk7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBbkJKLGVBb0JJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxrQkFHSSxzREFDSTtBQUFHLElBQUEsU0FBUyxFQUFDLG1DQUFiO0FBQWlELElBQUEsSUFBSSxFQUFDO0FBQXRELGdCQURKLENBSEosZUFRSSw2Q0FSSixlQVNJLHNEQUNJO0FBQUcsSUFBQSxTQUFTLEVBQUMsbUNBQWI7QUFBaUQsSUFBQSxJQUFJLEVBQUM7QUFBdEQsZUFESixDQVRKLGVBY0ksNkNBZEosZUFlSSxzREFDSTtBQUFHLElBQUEsU0FBUyxFQUFDLG1DQUFiO0FBQWlELElBQUEsSUFBSSxFQUFDO0FBQXRELGVBREosQ0FmSixlQW9CSSw2Q0FwQkosZUFxQkksc0RBQ0k7QUFBRyxJQUFBLFNBQVMsRUFBQyxtQ0FBYjtBQUFpRCxJQUFBLElBQUksRUFBQztBQUF0RCxnQkFESixDQXJCSixDQXBCSixDQWpESixDQURKO0FBb0dILENBekdNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUG9wVXBOYXZJdGVtIH0gZnJvbSAnLi4vcG9wdXBuYXZpdGVtL1BvcFVwTmF2SXRlbSdcbmltcG9ydCB7IExvZ28gfSBmcm9tICcuLi9zdmcvTG9nbydcblxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJNZW51SXRlbSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgdXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJEYXRhVHlwZSB7XG4gICAgY2FwdGlvbjogc3RyaW5nXG4gICAgbWVudUxpc3Q6IEFycmF5PEZvb3Rlck1lbnVJdGVtPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlclByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTEVsZW1lbnQ+IHtcbiAgICAvKipcbiAgICAgKiBmb290ZXIgbWVudSBkYXRhXG4gICAgICovXG4gICAgZm9vdGVybWVudT86IEFycmF5PEZvb3RlckRhdGFUeXBlPlxuICAgIC8qKlxuICAgICAqIHllYXIgdG8gc2hvdyBvbiBib3R0b21cbiAgICAgKi9cbiAgICB5ZWFyPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogcHJpdmFjeSBwb2xpY3kgdGV4dFxuICAgICAqL1xuICAgIHByaXZhY3k/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgRm9vdGVyOiBGQzxGb290ZXJQcm9wcz4gPSAoe1xuICAgIGZvb3Rlcm1lbnUgPSBbXSxcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGZvb3RlclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTgwMCdcbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncGwtNiBwdC02IGxnOnB0LTkgbWQ6cHQtOSBwYi02IGxnOnBiLTcgbWQ6cGItNydcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TG9nbyB3aWR0aD1cIjIxMFwiIGhlaWdodD1cIjE2XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdteC02IGJnLW9wYWNpdHktMzAgYm9yZGVyLWdyYXktNTAwJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxuYXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTYgcHQtOCBsZzpmbGV4IG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTInXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb290ZXJtZW51Lm1hcCgobWVudSwgbWVudUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21lbnVJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHBiLTEyIGxnOm1iLTBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS0zMDAgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbWVudS5jYXB0aW9uIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudS5tZW51TGlzdC5tYXAoKG1lbnVJdGVtLCBpdGVtSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbUluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgaG92ZXI6dGV4dC1icmFuZC0zMDAgdGV4dC1zbSBwdC0zJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e21lbnVJdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8bmF2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQtc20gZmxleCBmbGV4LWNvbC1yZXZlcnNlIG1kOmZsZXgtcm93IHB0LTMyIGxnOnB0LTggbWQ6cHQtMyBweC02IHBiLTYgbWQ6cGItNCBsZzpwYi02XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LTEgZmxleC1yb3ctcmV2ZXJzZSBtZDpmbGV4LXJvdyBwdC00IG1kOnB0LTAnPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC0xIGZsZXgganVzdGlmeS1lbmQgbWQ6anVzdGlmeS1zdGFydCc+PHNwYW4+wqkgeyBwcm9wcy55ZWFyP3Byb3BzLnllYXI6bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIH08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZsZXggZmxleC0xIHNwYWNlLXgtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgcHJvcHMucHJpdmFjeT9wcm9wcy5wcml2YWN5OlwiUHJpdmFjeVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPi08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MCBob3Zlcjp0ZXh0LWJyYW5kLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLnByaXZhY3k/cHJvcHMucHJpdmFjeTpcIlRlcm1zXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtMSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBmbGV4LTEgbWQ6LW1sLTIwIHNwYWNlLXgtMidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwJyBocmVmPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4tPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgaG92ZXI6dGV4dC1icmFuZC0zMDAnIGhyZWY9Jyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91VHViZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+LTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwJyBocmVmPScnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR3aXR0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPi08L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtZ3JheS01MCBob3Zlcjp0ZXh0LWJyYW5kLTMwMCcgaHJlZj0nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMaW5rZWRJblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgKVxufVxuIl19