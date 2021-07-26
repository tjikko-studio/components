"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

var _react = _interopRequireDefault(require("react"));

var _informationFill = _interopRequireDefault(require("../../assets/icons/information-fill.svg"));

var _loader2Fill = _interopRequireDefault(require("../../assets/icons/loader-2-fill.svg"));

var _checkboxCircleFill = _interopRequireDefault(require("../../assets/icons/checkbox-circle-fill.svg"));

var _focusClasses = _interopRequireDefault(require("../../utilities/focusClasses"));

var _addDisabledClasses = _interopRequireDefault(require("../../snippets/addDisabledClasses"));

var _addErrorClasses = _interopRequireDefault(require("../../snippets/addErrorClasses"));

var _addValidatingClasses = _interopRequireDefault(require("../../snippets/addValidatingClasses"));

var _addSuccessClasses = _interopRequireDefault(require("../../snippets/addSuccessClasses"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var TextArea = _ref => {
  var {
    isDisabled,
    isError,
    isValidating,
    isSuccess,
    label,
    isFocussed,
    text,
    placeholder,
    information,
    error
  } = _ref;
  var textareaClasses = ['dark:bg-gray-800', 'dark:text-white', 'text-base', 'py-3', 'px-4', 'rounded-lg', 'border', 'border-gray-200', 'w-72'];
  (0, _addDisabledClasses.default)(isDisabled, textareaClasses);
  (0, _addErrorClasses.default)(isError, textareaClasses);
  (0, _addValidatingClasses.default)(isValidating, textareaClasses);

  if (isValidating) {
    textareaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent');
  }

  (0, _addSuccessClasses.default)(isSuccess, textareaClasses);

  if (isSuccess) {
    textareaClasses.push('drop-shadow-sm', 'outline-none', 'ring-2', 'border-transparent');
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-y-1 w-72"
  }, label && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ".concat(isDisabled && 'text-gray-500 dark:text-gray-600')
  }, /*#__PURE__*/_react.default.createElement("p", null, label), isError && /*#__PURE__*/_react.default.createElement(_informationFill.default, {
    className: "text-red-600 dark:text-red-500"
  }), isValidating && /*#__PURE__*/_react.default.createElement(_loader2Fill.default, {
    className: "text-blue-600 dark:text-blue-500"
  }), isSuccess && /*#__PURE__*/_react.default.createElement(_checkboxCircleFill.default, {
    className: "text-green-600 dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "".concat(textareaClasses.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text,
    placeholder: placeholder,
    disabled: isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal dark:text-gray-300 ".concat(isDisabled && 'text-gray-500 dark:text-gray-600', " ")
  }, information), isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, error));
};

exports.TextArea = TextArea;