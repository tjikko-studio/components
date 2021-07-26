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
    styles = "responsive",
    crumblist = [],
    className
  } = _ref;
  var spanClasses = ['fontStyle-xl'];

  if (styles === 'responsive') {
    spanClasses.push('hover:text-brand-300');
  }

  return /*#__PURE__*/_react.default.createElement("nav", {
    "aria-label": "Breadcrumb",
    className: className
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "flex flex-wrap"
  }, crumblist.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: spanClasses.join(' '),
      key: index
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: styles === 'responsive' ? item.url : undefined
    }, item.name)), crumblist.length - 1 > index && /*#__PURE__*/_react.default.createElement("span", {
      className: "px-2.5"
    }, "/"));
  })));
};

exports.BreadCrumb = BreadCrumb;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0JyZWFkQ3J1bWIudHN4Il0sIm5hbWVzIjpbIkJyZWFkQ3J1bWIiLCJzdHlsZXMiLCJjcnVtYmxpc3QiLCJjbGFzc05hbWUiLCJzcGFuQ2xhc3NlcyIsInB1c2giLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJqb2luIiwidXJsIiwidW5kZWZpbmVkIiwibmFtZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFVBQStCLEdBQUcsUUFJekM7QUFBQSxNQUowQztBQUM5Q0MsSUFBQUEsTUFBTSxHQUFHLFlBRHFDO0FBRTlDQyxJQUFBQSxTQUFTLEdBQUcsRUFGa0M7QUFHOUNDLElBQUFBO0FBSDhDLEdBSTFDO0FBRUosTUFBTUMsV0FBVyxHQUFHLENBQUMsY0FBRCxDQUFwQjs7QUFDQSxNQUFJSCxNQUFNLEtBQUssWUFBZixFQUE2QjtBQUMzQkcsSUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLHNCQUFqQjtBQUNEOztBQUVELHNCQUNFO0FBQ0Usa0JBQVcsWUFEYjtBQUVFLElBQUEsU0FBUyxFQUFFRjtBQUZiLGtCQUlFO0FBQUksSUFBQSxTQUFTLEVBQUM7QUFBZCxLQUVJRCxTQUFTLENBQUNJLEdBQVYsQ0FBYyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDN0Isd0JBQ0U7QUFDRSxNQUFBLEdBQUcsRUFBRUE7QUFEUCxvQkFHRTtBQUNFLE1BQUEsU0FBUyxFQUFFSixXQUFXLENBQUNLLElBQVosQ0FBaUIsR0FBakIsQ0FEYjtBQUVFLE1BQUEsR0FBRyxFQUFFRDtBQUZQLG9CQUlFO0FBQ0UsTUFBQSxJQUFJLEVBQUlQLE1BQU0sS0FBSyxZQUFaLEdBQTRCTSxJQUFJLENBQUNHLEdBQWpDLEdBQXVDQztBQURoRCxPQUlJSixJQUFJLENBQUNLLElBSlQsQ0FKRixDQUhGLEVBZ0JLVixTQUFTLENBQUNXLE1BQVYsR0FBbUIsQ0FBbkIsR0FBdUJMLEtBQXhCLGlCQUFrQztBQUFNLE1BQUEsU0FBUyxFQUFDO0FBQWhCLFdBaEJ0QyxDQURGO0FBcUJELEdBdEJELENBRkosQ0FKRixDQURGO0FBa0NELENBN0NNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGludGVyZmFjZSBCcmVhZENydW1iVHlwZSB7XG4gIG5hbWU6IHN0cmluZ1xuICB1cmw6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFkQ3J1bWJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBmaXhlZDogbm8gbGluaywgbm8gY2xpY2tcbiAgICogcmVzcG9uc2l2ZTogbGluaywgY2xpY2thYmxlIGFuZCBob3ZlclxuICAgKi9cbiAgc3R5bGVzPzogXCJmaXhlZFwiIHwgXCJyZXNwb25zaXZlXCJcbiAgLyoqXG4gICAqIGJyZWFkY3J1bWIgZGF0YSBsaXN0XG4gICAqL1xuICBjcnVtYmxpc3Q6IEFycmF5PEJyZWFkQ3J1bWJUeXBlPlxuXG4gIC8qKlxuICAgKiBBZGRpdGlvbmFsIHNwYWNlLXNlcGFyYXRlZCBjbGFzcyBuYW1lcyB0byBhcHBlbmRcbiAgICovXG4gIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCcmVhZENydW1iOiBGQzxCcmVhZENydW1iUHJvcHM+ID0gKHtcbiAgc3R5bGVzID0gXCJyZXNwb25zaXZlXCIsXG4gIGNydW1ibGlzdCA9IFtdLFxuICBjbGFzc05hbWVcbn0pID0+IHtcblxuICBjb25zdCBzcGFuQ2xhc3NlcyA9IFsnZm9udFN0eWxlLXhsJ11cbiAgaWYgKHN0eWxlcyA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgc3BhbkNsYXNzZXMucHVzaCgnaG92ZXI6dGV4dC1icmFuZC0zMDAnKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2XG4gICAgICBhcmlhLWxhYmVsPVwiQnJlYWRjcnVtYlwiXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICA+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAge1xuICAgICAgICAgIGNydW1ibGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3BhbkNsYXNzZXMuam9pbignICcpfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXsoKHN0eWxlcyA9PT0gJ3Jlc3BvbnNpdmUnKSA/IGl0ZW0udXJsIDogdW5kZWZpbmVkKX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIChjcnVtYmxpc3QubGVuZ3RoIC0gMSA+IGluZGV4KSAmJiA8c3BhbiBjbGFzc05hbWU9J3B4LTIuNSc+Lzwvc3Bhbj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKVxufVxuIl19