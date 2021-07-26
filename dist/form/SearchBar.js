"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchBar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _searchLine = _interopRequireDefault(require("../../assets/icons/search-line.svg"));

var _focusClasses = _interopRequireDefault(require("../../utilities/focusClasses"));

var _addDisabledClasses = _interopRequireDefault(require("../../snippets/addDisabledClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Primary UI component for user interaction
 */
var SearchBar = _ref => {
  var {
    isDisabled,
    isFocussed,
    text,
    placeHolder
  } = _ref;
  var [autoFocus, setInputFocus] = (0, _react.useState)(false);
  var classes = ['w-72', 'flex', 'rounded-lg', 'items-center', 'overflow-hidden', 'pl-11', 'dark:bg-gray-800', 'dark:text-white', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200'];
  (0, _addDisabledClasses.default)(isDisabled, classes);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "relative",
    defaultValue: text
  }, /*#__PURE__*/_react.default.createElement("button", {
    disabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement(_searchLine.default, {
    color: "text-gray-600"
  })), /*#__PURE__*/_react.default.createElement("input", {
    disabled: isDisabled,
    className: "".concat(classes.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text,
    placeholder: placeHolder,
    onFocus: () => setInputFocus(true),
    onBlur: () => setInputFocus(false)
  }));
};

exports.SearchBar = SearchBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbIlNlYXJjaEJhciIsImlzRGlzYWJsZWQiLCJpc0ZvY3Vzc2VkIiwidGV4dCIsInBsYWNlSG9sZGVyIiwiYXV0b0ZvY3VzIiwic2V0SW5wdXRGb2N1cyIsImNsYXNzZXMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBcUJBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFNBQTZCLEdBQUcsUUFLdkM7QUFBQSxNQUx3QztBQUM1Q0MsSUFBQUEsVUFENEM7QUFFNUNDLElBQUFBLFVBRjRDO0FBRzVDQyxJQUFBQSxJQUg0QztBQUk1Q0MsSUFBQUE7QUFKNEMsR0FLeEM7QUFDSixNQUFNLENBQUNDLFNBQUQsRUFBWUMsYUFBWixJQUE2QixxQkFBUyxLQUFULENBQW5DO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsWUFBakIsRUFBK0IsY0FBL0IsRUFBK0MsaUJBQS9DLEVBQWtFLE9BQWxFLEVBQTJFLGtCQUEzRSxFQUErRixpQkFBL0YsRUFBa0gsV0FBbEgsRUFBK0gsTUFBL0gsRUFBdUksVUFBdkksRUFBbUosTUFBbkosRUFBMkosTUFBM0osRUFBbUssWUFBbkssRUFBaUwsUUFBakwsRUFBMkwsaUJBQTNMLENBQWhCO0FBQ0EsbUNBQW1CTixVQUFuQixFQUErQk0sT0FBL0I7QUFDQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDLFVBRFo7QUFFRSxJQUFBLFlBQVksRUFBRUo7QUFGaEIsa0JBSUU7QUFDRSxJQUFBLFFBQVEsRUFBRUY7QUFEWixrQkFHRSw2QkFBQyxtQkFBRDtBQUFZLElBQUEsS0FBSyxFQUFDO0FBQWxCLElBSEYsQ0FKRixlQVNFO0FBQ0UsSUFBQSxRQUFRLEVBQUVBLFVBRFo7QUFFRSxJQUFBLFNBQVMsWUFBS00sT0FBTyxDQUFDQyxJQUFSLENBQWEsR0FBYixDQUFMLGNBQTBCLDJCQUFhLHVEQUFiLEVBQXNFTixVQUF0RSxDQUExQixDQUZYO0FBR0UsSUFBQSxZQUFZLEVBQUVDLElBSGhCO0FBSUUsSUFBQSxXQUFXLEVBQUVDLFdBSmY7QUFLRSxJQUFBLE9BQU8sRUFBRSxNQUFNRSxhQUFhLENBQUMsSUFBRCxDQUw5QjtBQU1FLElBQUEsTUFBTSxFQUFFLE1BQU1BLGFBQWEsQ0FBQyxLQUFEO0FBTjdCLElBVEYsQ0FERjtBQXFCRCxDQTlCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlcywgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlYXJjaEljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL3NlYXJjaC1saW5lLnN2ZydcbmltcG9ydCBmb2N1c0NsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb2N1c0NsYXNzZXNcIlxuaW1wb3J0IGFkZERpc2FibGVkQ2xhc3NlcyBmcm9tIFwiLi4vLi4vc25pcHBldHMvYWRkRGlzYWJsZWRDbGFzc2VzXCJcblxuZXhwb3J0IGludGVyZmFjZSBTZWFyY2hCYXJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gIC8qKlxuICAgKiBmb2N1c3NlZCB0eXBlXG4gICAqL1xuICBpc0ZvY3Vzc2VkPzogYm9vbGVhblxuICAvKipcbiAgICogZmlsbGVkIHRleHRcbiAgICovXG4gIHRleHQ/OiBzdHJpbmdcbiAgLyoqXG4gICAqIHBsYWNlIGhvbGRlciBzdHJpbmdcbiAgICovXG4gIHBsYWNlSG9sZGVyPzogc3RyaW5nXG4gIC8qKlxuICAgKiBkaXNhYmxlZFxuICAgKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2VhcmNoQmFyOiBGQzxTZWFyY2hCYXJQcm9wcz4gPSAoe1xuICBpc0Rpc2FibGVkLFxuICBpc0ZvY3Vzc2VkLFxuICB0ZXh0LFxuICBwbGFjZUhvbGRlclxufSkgPT4ge1xuICBjb25zdCBbYXV0b0ZvY3VzLCBzZXRJbnB1dEZvY3VzXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBjbGFzc2VzID0gWyd3LTcyJywgJ2ZsZXgnLCAncm91bmRlZC1sZycsICdpdGVtcy1jZW50ZXInLCAnb3ZlcmZsb3ctaGlkZGVuJywgJ3BsLTExJywgJ2Rhcms6YmctZ3JheS04MDAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ3RleHQtYmFzZScsICdoLTEyJywgJ21heC1oLTEyJywgJ3B5LTMnLCAncHgtNCcsICdyb3VuZGVkLWxnJywgJ2JvcmRlcicsICdib3JkZXItZ3JheS0yMDAnXVxuICBhZGREaXNhYmxlZENsYXNzZXMoaXNEaXNhYmxlZCwgY2xhc3NlcylcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J3JlbGF0aXZlJ1xuICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxuICAgID5cbiAgICAgIDxidXR0b25cbiAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICA+XG4gICAgICAgIDxTZWFyY2hJY29uIGNvbG9yPVwidGV4dC1ncmF5LTYwMFwiIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmpvaW4oJyAnKX0gJHtmb2N1c0NsYXNzZXMoJ291dGxpbmUtbm9uZSByaW5nLTIgcmluZy1icmFuZC01MDAgYm9yZGVyLXRyYW5zcGFyZW50JywgaXNGb2N1c3NlZCl9YH1cbiAgICAgICAgZGVmYXVsdFZhbHVlPXt0ZXh0fVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2VIb2xkZXJ9XG4gICAgICAgIG9uRm9jdXM9eygpID0+IHNldElucHV0Rm9jdXModHJ1ZSl9XG4gICAgICAgIG9uQmx1cj17KCkgPT4gc2V0SW5wdXRGb2N1cyhmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cbiJdfQ==