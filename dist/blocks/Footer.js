"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _company_logo_placeholder = _interopRequireDefault(require("../../../assets/images/company_logo_placeholder.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Footer = _ref => {
  var {
    footermenu = [],
    year,
    privacy
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("footer", {
    className: "bg-gray-800"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "pl-6 pt-6 lg:pt-9 md:pt-9 pb-6 lg:pb-7 md:pb-7"
  }, /*#__PURE__*/_react.default.createElement(_company_logo_placeholder.default, {
    width: "210",
    height: "16",
    className: "text-gray-50"
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
  }, /*#__PURE__*/_react.default.createElement("span", null, "\xA9 ", year ? year : new Date().getFullYear())), /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-1 space-x-2"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, privacy ? privacy : "Privacy")), /*#__PURE__*/_react.default.createElement("li", null, "-"), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "text-gray-50 hover:text-brand-300"
  }, privacy ? privacy : "Terms")))), /*#__PURE__*/_react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0Zvb3Rlci50c3giXSwibmFtZXMiOlsiRm9vdGVyIiwiZm9vdGVybWVudSIsInllYXIiLCJwcml2YWN5IiwibWFwIiwibWVudSIsIm1lbnVJbmRleCIsImNhcHRpb24iLCJtZW51TGlzdCIsIm1lbnVJdGVtIiwiaXRlbUluZGV4IiwidXJsIiwibmFtZSIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBMkJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQXVCLEdBQUcsUUFJakM7QUFBQSxNQUprQztBQUN0Q0MsSUFBQUEsVUFBVSxHQUFHLEVBRHlCO0FBRXRDQyxJQUFBQSxJQUZzQztBQUd0Q0MsSUFBQUE7QUFIc0MsR0FJbEM7QUFFSixzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFLDZCQUFDLGlDQUFEO0FBQWEsSUFBQSxLQUFLLEVBQUMsS0FBbkI7QUFBeUIsSUFBQSxNQUFNLEVBQUMsSUFBaEM7QUFBcUMsSUFBQSxTQUFTLEVBQUM7QUFBL0MsSUFIRixDQUhGLGVBUUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLElBUkYsZUFXRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FJSUYsVUFBVSxDQUFDRyxHQUFYLENBQWUsQ0FBQ0MsSUFBRCxFQUFPQyxTQUFQLEtBQXFCO0FBQ2xDLHdCQUNFO0FBQ0UsTUFBQSxHQUFHLEVBQUVBLFNBRFA7QUFFRSxNQUFBLFNBQVM7QUFGWCxvQkFJRTtBQUNFLE1BQUEsU0FBUyxFQUFDO0FBRFosT0FHR0QsSUFBSSxDQUFDRSxPQUhSLENBSkYsRUFVSUYsSUFBSSxDQUFDRyxRQUFMLENBQWNKLEdBQWQsQ0FBa0IsQ0FBQ0ssUUFBRCxFQUFXQyxTQUFYLEtBQXlCO0FBQ3pDLDBCQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLFNBRFA7QUFFRSxRQUFBLFNBQVMsRUFBQztBQUZaLHNCQUlFO0FBQ0UsUUFBQSxJQUFJLEVBQUVELFFBQVEsQ0FBQ0U7QUFEakIsU0FJSUYsUUFBUSxDQUFDRyxJQUpiLENBSkYsQ0FERjtBQWNELEtBZkQsQ0FWSixDQURGO0FBOEJELEdBL0JELENBSkosQ0FYRixlQWlERTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosa0JBR0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFBMEQsb0RBQVNWLElBQUksR0FBR0EsSUFBSCxHQUFVLElBQUlXLElBQUosR0FBV0MsV0FBWCxFQUF2QixDQUExRCxDQURGLGVBRUU7QUFBSSxJQUFBLFNBQVMsRUFBQztBQUFkLGtCQUNFLHNEQUNFO0FBQUcsSUFBQSxJQUFJLEVBQUMsR0FBUjtBQUFZLElBQUEsU0FBUyxFQUFDO0FBQXRCLEtBQ0dYLE9BQU8sR0FBR0EsT0FBSCxHQUFhLFNBRHZCLENBREYsQ0FERixlQU1FLDZDQU5GLGVBT0Usc0RBQ0U7QUFBRyxJQUFBLElBQUksRUFBQyxHQUFSO0FBQVksSUFBQSxTQUFTLEVBQUM7QUFBdEIsS0FDR0EsT0FBTyxHQUFHQSxPQUFILEdBQWEsT0FEdkIsQ0FERixDQVBGLENBRkYsQ0FIRixlQW1CRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFuQkYsZUFvQkU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFLHNEQUNFO0FBQUcsSUFBQSxTQUFTLEVBQUMsbUNBQWI7QUFBaUQsSUFBQSxJQUFJLEVBQUM7QUFBdEQsZ0JBREYsQ0FIRixlQVFFLDZDQVJGLGVBU0Usc0RBQ0U7QUFBRyxJQUFBLFNBQVMsRUFBQyxtQ0FBYjtBQUFpRCxJQUFBLElBQUksRUFBQztBQUF0RCxlQURGLENBVEYsZUFjRSw2Q0FkRixlQWVFLHNEQUNFO0FBQUcsSUFBQSxTQUFTLEVBQUMsbUNBQWI7QUFBaUQsSUFBQSxJQUFJLEVBQUM7QUFBdEQsZUFERixDQWZGLGVBb0JFLDZDQXBCRixlQXFCRSxzREFDRTtBQUFHLElBQUEsU0FBUyxFQUFDLG1DQUFiO0FBQWlELElBQUEsSUFBSSxFQUFDO0FBQXRELGdCQURGLENBckJGLENBcEJGLENBakRGLENBREY7QUFvR0QsQ0ExR00iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQb3BVcE5hdkl0ZW19IGZyb20gJy4uL25hdi9Qb3BVcE5hdkl0ZW0nXG5pbXBvcnQgQ29tcGFueUxvZ28gZnJvbSAnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jb21wYW55X2xvZ29fcGxhY2Vob2xkZXIuc3ZnJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvb3Rlck1lbnVJdGVtIHtcbiAgbmFtZTogc3RyaW5nXG4gIHVybDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyRGF0YVR5cGUge1xuICBjYXB0aW9uOiBzdHJpbmdcbiAgbWVudUxpc3Q6IEZvb3Rlck1lbnVJdGVtW11cbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb290ZXJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBmb290ZXIgbWVudSBkYXRhXG4gICAqL1xuICBmb290ZXJtZW51PzogRm9vdGVyRGF0YVR5cGVbXVxuICAvKipcbiAgICogeWVhciB0byBzaG93IG9uIGJvdHRvbVxuICAgKi9cbiAgeWVhcj86IHN0cmluZ1xuICAvKipcbiAgICogcHJpdmFjeSBwb2xpY3kgdGV4dFxuICAgKi9cbiAgcHJpdmFjeT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBGb290ZXI6IEZDPEZvb3RlclByb3BzPiA9ICh7XG4gIGZvb3Rlcm1lbnUgPSBbXSxcbiAgeWVhcixcbiAgcHJpdmFjeVxufSkgPT4ge1xuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlclxuICAgICAgY2xhc3NOYW1lPSdiZy1ncmF5LTgwMCdcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0ncGwtNiBwdC02IGxnOnB0LTkgbWQ6cHQtOSBwYi02IGxnOnBiLTcgbWQ6cGItNydcbiAgICAgID5cbiAgICAgICAgPENvbXBhbnlMb2dvIHdpZHRoPScyMTAnIGhlaWdodD0nMTYnIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwJyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8aHJcbiAgICAgICAgY2xhc3NOYW1lPSdteC02IGJnLW9wYWNpdHktMzAgYm9yZGVyLWdyYXktNTAwJ1xuICAgICAgLz5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPSdweC02IHB0LTggbGc6ZmxleCBtZDpncmlkIG1kOmdyaWQtY29scy0yJ1xuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgZm9vdGVybWVudS5tYXAoKG1lbnUsIG1lbnVJbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAga2V5PXttZW51SW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleC0xIHBiLTEyIGxnOm1iLTBgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RleHQtZ3JheS0zMDAgdGV4dC14cyBmb250LW1lZGl1bSB1cHBlcmNhc2UnXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge21lbnUuY2FwdGlvbn1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lbnUubWVudUxpc3QubWFwKChtZW51SXRlbSwgaXRlbUluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwIHRleHQtc20gcHQtMydcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXttZW51SXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L25hdj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIHRleHQtc20gZmxleCBmbGV4LWNvbC1yZXZlcnNlIG1kOmZsZXgtcm93IHB0LTMyIGxnOnB0LTggbWQ6cHQtMyBweC02IHBiLTYgbWQ6cGItNCBsZzpwYi02XCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIGZsZXgtcm93LXJldmVyc2UgbWQ6ZmxleC1yb3cgcHQtNCBtZDpwdC0wJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC0xIGZsZXgganVzdGlmeS1lbmQgbWQ6anVzdGlmeS1zdGFydCc+PHNwYW4+wqkge3llYXIgPyB5ZWFyIDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBzcGFjZS14LTInPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAgaG92ZXI6dGV4dC1icmFuZC0zMDBcIj5cbiAgICAgICAgICAgICAgICB7cHJpdmFjeSA/IHByaXZhY3kgOiBcIlByaXZhY3lcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT4tPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nIycgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwXCI+XG4gICAgICAgICAgICAgICAge3ByaXZhY3kgPyBwcml2YWN5IDogXCJUZXJtc1wifVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleC0xJz48L2Rpdj5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBtZDotbWwtMjAgc3BhY2UteC0yJ1xuICAgICAgICA+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgaG92ZXI6dGV4dC1icmFuZC0zMDAnIGhyZWY9Jyc+XG4gICAgICAgICAgICAgIEZhY2Vib29rXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+LTwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSd0ZXh0LWdyYXktNTAgaG92ZXI6dGV4dC1icmFuZC0zMDAnIGhyZWY9Jyc+XG4gICAgICAgICAgICAgIFlvdVR1YmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT4tPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J3RleHQtZ3JheS01MCBob3Zlcjp0ZXh0LWJyYW5kLTMwMCcgaHJlZj0nJz5cbiAgICAgICAgICAgICAgVHdpdHRlclxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPi08L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtYnJhbmQtMzAwJyBocmVmPScnPlxuICAgICAgICAgICAgICBMaW5rZWRJblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuIl19