"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _react = _interopRequireDefault(require("react"));

var _Error = require("../svg/Error");

var _Validating = require("../svg/Validating");

var _Tick = require("../svg/Tick");

var _focusClasses = _interopRequireDefault(require("../../utilities/focusClasses"));

var _addDisabledClasses = _interopRequireDefault(require("../../snippets/addDisabledClasses"));

var _addErrorClasses = _interopRequireDefault(require("../../snippets/addErrorClasses"));

var _addValidatingClasses = _interopRequireDefault(require("../../snippets/addValidatingClasses"));

var _addSuccessClasses = _interopRequireDefault(require("../../snippets/addSuccessClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Input = _ref => {
  var {
    label,
    isError = false,
    isDisabled,
    isValidating,
    isSuccess,
    isFocussed,
    text,
    placeholder,
    information,
    error
  } = _ref;
  var labelContainerClasses = ['text-sm', 'font-semibold', 'flex', 'flex-row', 'justify-between', 'dark:text-gray-300'];
  var inputClasses = ['bg-gray-50', 'dark:bg-gray-800', 'dark:text-white', 'text-base', 'h-12', 'max-h-12', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200', 'w-72'];
  (0, _addDisabledClasses.default)(isDisabled, inputClasses);

  if (isDisabled) {
    labelContainerClasses.push('text-gray-500', 'dark:text-gray-600');
  }

  (0, _addErrorClasses.default)(isError || isValidating || isSuccess, inputClasses);

  if (isError || isValidating || isSuccess) {
    inputClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'dark:ring-red-500', 'ring-red-600', 'border-transparent');
  }

  (0, _addValidatingClasses.default)(isValidating, inputClasses);
  (0, _addSuccessClasses.default)(isSuccess, inputClasses);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-y-1 w-72"
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    className: labelContainerClasses.join(' ')
  }, /*#__PURE__*/_react.default.createElement("p", null, label), isError && /*#__PURE__*/_react.default.createElement(_Error.ErrorIcon, {
    color: "text-red-600",
    darkColor: "dark:text-red-500"
  }), isValidating && /*#__PURE__*/_react.default.createElement(_Validating.ValidatingIcon, {
    color: "text-blue-600",
    darkColor: "dark:text-blue-500"
  }), isSuccess && /*#__PURE__*/_react.default.createElement(_Tick.TickIcon, {
    color: "text-green-600",
    darkColor: "dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(inputClasses.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text,
    placeholder: placeholder,
    disabled: isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm ont-normal dark:text-gray-300 ".concat(isDisabled && "text-gray-500 dark:text-gray-600")
  }, information), isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, error));
};

exports.Input = Input;