"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var BreadCrumb = _ref => {
  var {
    crumbs = [],
    className
  } = _ref;
  var spanClasses = ['fontStyle-xl hover:text-brand-300 dark:hover:text-brand-300'];
  return /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: className
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap"
  }, crumbs.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: spanClasses.join(' '),
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: item.url
    }, item.name)), crumbs.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0JyZWFkQ3J1bWIudHN4Il0sIm5hbWVzIjpbIkJyZWFkQ3J1bWIiLCJjcnVtYnMiLCJjbGFzc05hbWUiLCJzcGFuQ2xhc3NlcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImpvaW4iLCJ1cmwiLCJuYW1lIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBK0IsR0FBRyxRQUd6QztBQUFBLE1BSDBDO0FBQzlDQyxJQUFBQSxNQUFNLEdBQUcsRUFEcUM7QUFFOUNDLElBQUFBO0FBRjhDLEdBRzFDO0FBRUosTUFBTUMsV0FBVyxHQUFHLENBQUMsNkRBQUQsQ0FBcEI7QUFFQSxzQkFDRTtBQUNFLGtCQUFXLFlBRGI7QUFFRSxJQUFBLFNBQVMsRUFBRUQ7QUFGYixrQkFJRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsS0FFSUQsTUFBTSxDQUFDRyxHQUFQLENBQVcsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQzFCLHdCQUNFO0FBQ0UsTUFBQSxHQUFHLEVBQUVBO0FBRFAsb0JBR0U7QUFDRSxNQUFBLFNBQVMsRUFBRUgsV0FBVyxDQUFDSSxJQUFaLENBQWlCLEdBQWpCLENBRGI7QUFFRSxNQUFBLEdBQUcsRUFBRUQ7QUFGUCxvQkFJRTtBQUNFLE1BQUEsSUFBSSxFQUFFRCxJQUFJLENBQUNHO0FBRGIsT0FJSUgsSUFBSSxDQUFDSSxJQUpULENBSkYsQ0FIRixFQWdCS1IsTUFBTSxDQUFDUyxNQUFQLEdBQWdCLENBQWhCLEdBQW9CSixLQUFyQixpQkFBK0I7QUFBTSxNQUFBLFNBQVMsRUFBQztBQUFoQixXQWhCbkMsQ0FERjtBQXFCRCxHQXRCRCxDQUZKLENBSkYsQ0FERjtBQWtDRCxDQXpDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJlYWRDcnVtYlR5cGUge1xuICBuYW1lOiBzdHJpbmdcbiAgdXJsOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogYnJlYWRjcnVtYiBkYXRhIGxpc3RcbiAgICovXG4gIGNydW1iczogQnJlYWRDcnVtYlR5cGVbXVxuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCcmVhZENydW1iOiBGQzxCcmVhZENydW1iUHJvcHM+ID0gKHtcbiAgY3J1bWJzID0gW10sXG4gIGNsYXNzTmFtZVxufSkgPT4ge1xuXG4gIGNvbnN0IHNwYW5DbGFzc2VzID0gWydmb250U3R5bGUteGwgaG92ZXI6dGV4dC1icmFuZC0zMDAgZGFyazpob3Zlcjp0ZXh0LWJyYW5kLTMwMCddXG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICA+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIGNydW1icy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3BhbkNsYXNzZXMuam9pbignICcpfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLnVybH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChjcnVtYnMubGVuZ3RoIC0gMSA+IGluZGV4KSAmJiA8c3BhbiBjbGFzc05hbWU9J3B4LTIuNSc+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19