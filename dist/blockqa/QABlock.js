"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QABlock = void 0;

var _react = _interopRequireDefault(require("react"));

var _excluded = ["answer"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var QABlock = _ref => {
  var {
    answer = ""
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    className: "text-gray-900\n                ".concat(props.className ? props.className : "", "\n            ")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "font-semibold text-lg leading-7"
  }, props.question), /*#__PURE__*/_react.default.createElement("div", {
    className: "pt-2 text-base leading-6"
  }, answer));
};

exports.QABlock = QABlock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2txYS9RQUJsb2NrLnRzeCJdLCJuYW1lcyI6WyJRQUJsb2NrIiwiYW5zd2VyIiwicHJvcHMiLCJjbGFzc05hbWUiLCJxdWVzdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFnQkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsT0FBeUIsR0FBRyxRQUduQztBQUFBLE1BSG9DO0FBQ3RDQyxJQUFBQSxNQUFNLEdBQUc7QUFENkIsR0FHcEM7QUFBQSxNQURDQyxLQUNEOztBQUNGLHNCQUNJLGlEQUNRQSxLQURSO0FBRUksSUFBQSxTQUFTLDJDQUNIQSxLQUFLLENBQUNDLFNBQU4sR0FBZ0JELEtBQUssQ0FBQ0MsU0FBdEIsR0FBZ0MsRUFEN0I7QUFGYixtQkFNSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsS0FJUUQsS0FBSyxDQUFDRSxRQUpkLENBTkosZUFhSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsS0FJUUgsTUFKUixDQWJKLENBREo7QUF1QkgsQ0EzQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIEhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUUFCbG9ja1Byb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgICAvKipcbiAgICAgKiB0ZXh0IHRvIHNob3cgYXMgcXVlc3Rpb25cbiAgICAgKi9cbiAgICBxdWVzdGlvbjogc3RyaW5nXG4gICAgLyoqXG4gICAgICogdGV4dCB0byBzaG93IGFzIGFuc3dlclxuICAgICAqL1xuICAgIGFuc3dlcj86IHN0cmluZ1xuXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nXG59XG5cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgUUFCbG9jazogRkM8UUFCbG9ja1Byb3BzPiA9ICh7XG4gICAgYW5zd2VyID0gXCJcIixcbiAgICAuLi5wcm9wc1xufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtZ3JheS05MDBcbiAgICAgICAgICAgICAgICAke3Byb3BzLmNsYXNzTmFtZT9wcm9wcy5jbGFzc05hbWU6XCJcIn1cbiAgICAgICAgICAgIGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtbGcgbGVhZGluZy03XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHQtMiB0ZXh0LWJhc2UgbGVhZGluZy02XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0=