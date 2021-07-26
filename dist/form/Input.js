"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

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
  }, /*#__PURE__*/_react.default.createElement("p", null, label), isError && /*#__PURE__*/_react.default.createElement(_informationFill.default, {
    className: "text-red-600 dark:text-red-500"
  }), isValidating && /*#__PURE__*/_react.default.createElement(_loader2Fill.default, {
    className: "text-blue-600 dark:text-blue-500"
  }), isSuccess && /*#__PURE__*/_react.default.createElement(_checkboxCircleFill.default, {
    className: "text-green-600 dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(inputClasses.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text,
    placeholder: placeholder,
    disabled: isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm ont-normal dark:text-gray-300 ".concat(isDisabled && 'text-gray-500 dark:text-gray-600')
  }, information), isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, error));
};

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC50c3giXSwibmFtZXMiOlsiSW5wdXQiLCJsYWJlbCIsImlzRXJyb3IiLCJpc0Rpc2FibGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWNjZXNzIiwiaXNGb2N1c3NlZCIsInRleHQiLCJwbGFjZWhvbGRlciIsImluZm9ybWF0aW9uIiwiZXJyb3IiLCJsYWJlbENvbnRhaW5lckNsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBOENBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLEtBQXFCLEdBQUcsUUFXL0I7QUFBQSxNQVhnQztBQUNwQ0MsSUFBQUEsS0FEb0M7QUFFcENDLElBQUFBLE9BQU8sR0FBRyxLQUYwQjtBQUdwQ0MsSUFBQUEsVUFIb0M7QUFJcENDLElBQUFBLFlBSm9DO0FBS3BDQyxJQUFBQSxTQUxvQztBQU1wQ0MsSUFBQUEsVUFOb0M7QUFPcENDLElBQUFBLElBUG9DO0FBUXBDQyxJQUFBQSxXQVJvQztBQVNwQ0MsSUFBQUEsV0FUb0M7QUFVcENDLElBQUFBO0FBVm9DLEdBV2hDO0FBQ0osTUFBTUMscUJBQXFCLEdBQUcsQ0FBQyxTQUFELEVBQVksZUFBWixFQUE2QixNQUE3QixFQUFxQyxVQUFyQyxFQUFpRCxpQkFBakQsRUFBb0Usb0JBQXBFLENBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUMsWUFBRCxFQUFlLGtCQUFmLEVBQW1DLGlCQUFuQyxFQUFzRCxXQUF0RCxFQUFtRSxNQUFuRSxFQUEyRSxVQUEzRSxFQUF1RixNQUF2RixFQUErRixNQUEvRixFQUF1RyxZQUF2RyxFQUFxSCxRQUFySCxFQUErSCxpQkFBL0gsRUFBa0osTUFBbEosQ0FBckI7QUFDQSxtQ0FBbUJULFVBQW5CLEVBQStCUyxZQUEvQjs7QUFDQSxNQUFJVCxVQUFKLEVBQWdCO0FBQ2RRLElBQUFBLHFCQUFxQixDQUFDRSxJQUF0QixDQUEyQixlQUEzQixFQUE0QyxvQkFBNUM7QUFDRDs7QUFDRCxnQ0FBZ0JYLE9BQU8sSUFBSUUsWUFBWCxJQUEyQkMsU0FBM0MsRUFBc0RPLFlBQXREOztBQUNBLE1BQUlWLE9BQU8sSUFBSUUsWUFBWCxJQUEyQkMsU0FBL0IsRUFBMEM7QUFDeENPLElBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFBb0QsUUFBcEQsRUFBOEQsbUJBQTlELEVBQW1GLGNBQW5GLEVBQW1HLG9CQUFuRztBQUNEOztBQUNELHFDQUFxQlQsWUFBckIsRUFBbUNRLFlBQW5DO0FBQ0Esa0NBQWtCUCxTQUFsQixFQUE2Qk8sWUFBN0I7QUFFQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR1gsS0FBSyxpQkFDSjtBQUNBLElBQUEsU0FBUyxFQUFFVSxxQkFBcUIsQ0FBQ0csSUFBdEIsQ0FBMkIsR0FBM0I7QUFEWCxrQkFHQSx3Q0FDR2IsS0FESCxDQUhBLEVBTUVDLE9BQUQsaUJBQWEsNkJBQUMsd0JBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBQztBQUFyQixJQU5kLEVBT0VFLFlBQUQsaUJBQWtCLDZCQUFDLG9CQUFEO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLElBUG5CLEVBUUVDLFNBQUQsaUJBQWUsNkJBQUMsMkJBQUQ7QUFBVSxJQUFBLFNBQVMsRUFBQztBQUFwQixJQVJoQixDQUpKLGVBZUU7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLGtCQUNFO0FBQ0UsSUFBQSxTQUFTLFlBQUtPLFlBQVksQ0FBQ0UsSUFBYixDQUFrQixHQUFsQixDQUFMLGNBQStCLDJCQUFhLHVEQUFiLEVBQXNFUixVQUF0RSxDQUEvQixDQURYO0FBRUUsSUFBQSxZQUFZLEVBQUVDLElBRmhCO0FBR0UsSUFBQSxXQUFXLEVBQUVDLFdBSGY7QUFJRSxJQUFBLFFBQVEsRUFBRUw7QUFKWixJQURGLENBZkYsZUF1QkU7QUFDRSxJQUFBLFNBQVMsa0RBQTJDQSxVQUFVLElBQUksa0NBQXpEO0FBRFgsS0FHR00sV0FISCxDQXZCRixFQTRCR1AsT0FBTyxpQkFBSztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBbURRLEtBQW5ELENBNUJmLENBREY7QUFnQ0QsQ0F6RE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtGQywgSFRNTEF0dHJpYnV0ZXN9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEVycm9ySWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaW5mb3JtYXRpb24tZmlsbC5zdmcnXG5pbXBvcnQgVmFsaWRhdGluZ0ljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2xvYWRlci0yLWZpbGwuc3ZnJ1xuaW1wb3J0IFRpY2tJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jaGVja2JveC1jaXJjbGUtZmlsbC5zdmcnXG5pbXBvcnQgZm9jdXNDbGFzc2VzIGZyb20gJy4uLy4uL3V0aWxpdGllcy9mb2N1c0NsYXNzZXMnXG5pbXBvcnQgYWRkRGlzYWJsZWRDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZERpc2FibGVkQ2xhc3NlcydcbmltcG9ydCBhZGRFcnJvckNsYXNzZXMgZnJvbSAnLi4vLi4vc25pcHBldHMvYWRkRXJyb3JDbGFzc2VzJ1xuaW1wb3J0IGFkZFZhbGlkYXRpbmdDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZFZhbGlkYXRpbmdDbGFzc2VzJ1xuaW1wb3J0IGFkZFN1Y2Nlc3NDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZFN1Y2Nlc3NDbGFzc2VzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogZm9jdXNzZWQgdHlwZVxuICAgKi9cbiAgaXNGb2N1c3NlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIExhYmVsIHRleHRcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBmaWxsZWQgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogcGxhY2Vob2xkZXIgdGV4dFxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGluZm9ybWF0aW9uIHRleHRcbiAgICovXG4gIGluZm9ybWF0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBlcnJvciB0ZXh0XG4gICAqL1xuICBlcnJvcj86IHN0cmluZ1xuICAvKipcbiAgICogZXJyb3JcbiAgICovXG4gIGlzRXJyb3I/OiBib29sZWFuXG4gIC8qKlxuICAgKiBjaGVja2luZy4uLlxuICAgKi9cbiAgaXNWYWxpZGF0aW5nPzogYm9vbGVhblxuICAvKipcbiAgICogc3VjY2Vzc1xuICAgKi9cbiAgaXNTdWNjZXNzPzogYm9vbGVhblxuICAvKipcbiAgICogZGlzYWJsZWRcbiAgICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgSW5wdXQ6IEZDPElucHV0UHJvcHM+ID0gKHtcbiAgbGFiZWwsXG4gIGlzRXJyb3IgPSBmYWxzZSxcbiAgaXNEaXNhYmxlZCxcbiAgaXNWYWxpZGF0aW5nLFxuICBpc1N1Y2Nlc3MsXG4gIGlzRm9jdXNzZWQsXG4gIHRleHQsXG4gIHBsYWNlaG9sZGVyLFxuICBpbmZvcm1hdGlvbixcbiAgZXJyb3Jcbn0pID0+IHtcbiAgY29uc3QgbGFiZWxDb250YWluZXJDbGFzc2VzID0gWyd0ZXh0LXNtJywgJ2ZvbnQtc2VtaWJvbGQnLCAnZmxleCcsICdmbGV4LXJvdycsICdqdXN0aWZ5LWJldHdlZW4nLCAnZGFyazp0ZXh0LWdyYXktMzAwJ11cbiAgY29uc3QgaW5wdXRDbGFzc2VzID0gWydiZy1ncmF5LTUwJywgJ2Rhcms6YmctZ3JheS04MDAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ3RleHQtYmFzZScsICdoLTEyJywgJ21heC1oLTEyJywgJ3B5LTMnLCAncHgtNCcsICdyb3VuZGVkLWxnJywgJ2JvcmRlcicsICdib3JkZXItZ3JheS0yMDAnLCAndy03MiddXG4gIGFkZERpc2FibGVkQ2xhc3Nlcyhpc0Rpc2FibGVkLCBpbnB1dENsYXNzZXMpXG4gIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgbGFiZWxDb250YWluZXJDbGFzc2VzLnB1c2goJ3RleHQtZ3JheS01MDAnLCAnZGFyazp0ZXh0LWdyYXktNjAwJylcbiAgfVxuICBhZGRFcnJvckNsYXNzZXMoaXNFcnJvciB8fCBpc1ZhbGlkYXRpbmcgfHwgaXNTdWNjZXNzLCBpbnB1dENsYXNzZXMpXG4gIGlmIChpc0Vycm9yIHx8IGlzVmFsaWRhdGluZyB8fCBpc1N1Y2Nlc3MpIHtcbiAgICBpbnB1dENsYXNzZXMucHVzaCgnZHJvcC1zaGFkb3ctc20nLCAnb3V0bGluZS1ub25lJywgJ3JpbmctMicsICdkYXJrOnJpbmctcmVkLTUwMCcsICdyaW5nLXJlZC02MDAnLCAnYm9yZGVyLXRyYW5zcGFyZW50JylcbiAgfVxuICBhZGRWYWxpZGF0aW5nQ2xhc3Nlcyhpc1ZhbGlkYXRpbmcsIGlucHV0Q2xhc3NlcylcbiAgYWRkU3VjY2Vzc0NsYXNzZXMoaXNTdWNjZXNzLCBpbnB1dENsYXNzZXMpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLXktMSB3LTcyJ1xuICAgID5cbiAgICAgIHtsYWJlbCAmJlxuICAgICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17bGFiZWxDb250YWluZXJDbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgID5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L3A+XG4gICAgICAgIHsoaXNFcnJvcikgJiYgPEVycm9ySWNvbiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBkYXJrOnRleHQtcmVkLTUwMCcgLz59XG4gICAgICAgIHsoaXNWYWxpZGF0aW5nKSAmJiA8VmFsaWRhdGluZ0ljb24gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCcgLz59XG4gICAgICAgIHsoaXNTdWNjZXNzKSAmJiA8VGlja0ljb24gY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTYwMCBkYXJrOnRleHQtZ3JlZW4tNTAwJyAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNwYW4tMic+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5wdXRDbGFzc2VzLmpvaW4oJyAnKX0gJHtmb2N1c0NsYXNzZXMoJ291dGxpbmUtbm9uZSByaW5nLTIgcmluZy1icmFuZC01MDAgYm9yZGVyLXRyYW5zcGFyZW50JywgaXNGb2N1c3NlZCl9YH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gb250LW5vcm1hbCBkYXJrOnRleHQtZ3JheS0zMDAgJHtpc0Rpc2FibGVkICYmICd0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTYwMCd9YH1cbiAgICAgID5cbiAgICAgICAge2luZm9ybWF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgICB7aXNFcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9J3RleHQtc20gZm9udC1ub3JtYWwgdGV4dC1yZWQtNzAwJz57ZXJyb3J9PC9kaXY+KX1cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19