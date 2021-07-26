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