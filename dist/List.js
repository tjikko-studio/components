"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var List = _ref => {
  var {
    items = [],
    Component
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, items.map(props => {
    return /*#__PURE__*/_react.default.createElement(Component, _extends({
      key: JSON.stringify(props)
    }, props));
  }));
};

exports.List = List;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvTGlzdC50c3giXSwibmFtZXMiOlsiTGlzdCIsIml0ZW1zIiwiQ29tcG9uZW50IiwibWFwIiwicHJvcHMiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7OztBQUVPLElBQU1BLElBQUksR0FBRyxRQUdkO0FBQUEsTUFIZTtBQUNuQkMsSUFBQUEsS0FBSyxHQUFHLEVBRFc7QUFFbkJDLElBQUFBO0FBRm1CLEdBR2Y7QUFDSixzQkFDRSw0REFDR0QsS0FBSyxDQUFDRSxHQUFOLENBQVdDLEtBQUQsSUFBVztBQUNwQix3QkFDRSw2QkFBQyxTQUFEO0FBQVcsTUFBQSxHQUFHLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixLQUFmO0FBQWhCLE9BQTJDQSxLQUEzQyxFQURGO0FBR0QsR0FKQSxDQURILENBREY7QUFTRCxDQWJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgTGlzdCA9ICh7XG4gIGl0ZW1zID0gW10sXG4gIENvbXBvbmVudFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7aXRlbXMubWFwKChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxDb21wb25lbnQga2V5PXtKU09OLnN0cmluZ2lmeShwcm9wcyl9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgPC8+XG4gIClcbn1cbiJdfQ==