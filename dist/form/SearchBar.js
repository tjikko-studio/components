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
  var classes = ['w-72', 'flex', 'rounded-lg', 'items-center', 'overflow-hidden', 'pl-11', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'bg-gray-50', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-100', 'border-gray-300', 'dark:border-gray-600'];
  (0, _addDisabledClasses.default)(isDisabled, classes);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-gray-900 dark:text-gray-50 relative",
    defaultValue: text
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "absolute top-1/2 -mt-2 ml-4",
    disabled: isDisabled
  }, /*#__PURE__*/_react.default.createElement(_searchLine.default, {
    className: "w-4 h-4"
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