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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9UZXh0QXJlYS50c3giXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJpc0Rpc2FibGVkIiwiaXNFcnJvciIsImlzVmFsaWRhdGluZyIsImlzU3VjY2VzcyIsImxhYmVsIiwiaXNGb2N1c3NlZCIsInRleHQiLCJwbGFjZWhvbGRlciIsImluZm9ybWF0aW9uIiwiZXJyb3IiLCJ0ZXh0YXJlYUNsYXNzZXMiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQTJCLEdBQUcsUUFXckM7QUFBQSxNQVhzQztBQUMxQ0MsSUFBQUEsVUFEMEM7QUFFMUNDLElBQUFBLE9BRjBDO0FBRzFDQyxJQUFBQSxZQUgwQztBQUkxQ0MsSUFBQUEsU0FKMEM7QUFLMUNDLElBQUFBLEtBTDBDO0FBTTFDQyxJQUFBQSxVQU4wQztBQU8xQ0MsSUFBQUEsSUFQMEM7QUFRMUNDLElBQUFBLFdBUjBDO0FBUzFDQyxJQUFBQSxXQVQwQztBQVUxQ0MsSUFBQUE7QUFWMEMsR0FXdEM7QUFDSixNQUFNQyxlQUFlLEdBQUcsQ0FBQyxrQkFBRCxFQUFxQixpQkFBckIsRUFBd0MsV0FBeEMsRUFBcUQsTUFBckQsRUFBNkQsTUFBN0QsRUFBcUUsWUFBckUsRUFBbUYsUUFBbkYsRUFBNkYsaUJBQTdGLEVBQWdILE1BQWhILENBQXhCO0FBQ0EsbUNBQW1CVixVQUFuQixFQUErQlUsZUFBL0I7QUFDQSxnQ0FBZ0JULE9BQWhCLEVBQXlCUyxlQUF6QjtBQUNBLHFDQUFxQlIsWUFBckIsRUFBbUNRLGVBQW5DOztBQUNBLE1BQUlSLFlBQUosRUFBa0I7QUFDaEJRLElBQUFBLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsZ0JBQXJCLEVBQXVDLGNBQXZDLEVBQXVELFFBQXZELEVBQWlFLG9CQUFqRTtBQUNEOztBQUNELGtDQUFrQlIsU0FBbEIsRUFBNkJPLGVBQTdCOztBQUNBLE1BQUlQLFNBQUosRUFBZTtBQUNiTyxJQUFBQSxlQUFlLENBQUNDLElBQWhCLENBQXFCLGdCQUFyQixFQUF1QyxjQUF2QyxFQUF1RCxRQUF2RCxFQUFpRSxvQkFBakU7QUFDRDs7QUFDRCxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR1AsS0FBSyxpQkFDSjtBQUNBLElBQUEsU0FBUyxtRkFBNEVKLFVBQVUsSUFBSSxrQ0FBMUY7QUFEVCxrQkFHQSx3Q0FDR0ksS0FESCxDQUhBLEVBTUVILE9BQUQsaUJBQWEsNkJBQUMsd0JBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBQztBQUFyQixJQU5kLEVBT0VDLFlBQUQsaUJBQWtCLDZCQUFDLG9CQUFEO0FBQWdCLElBQUEsU0FBUyxFQUFDO0FBQTFCLElBUG5CLEVBUUVDLFNBQUQsaUJBQWUsNkJBQUMsMkJBQUQ7QUFBVSxJQUFBLFNBQVMsRUFBQztBQUFwQixJQVJoQixDQUpKLGVBZUU7QUFDRSxJQUFBLFNBQVMsRUFBQztBQURaLGtCQUdFO0FBQ0UsSUFBQSxTQUFTLFlBQUtPLGVBQWUsQ0FBQ0UsSUFBaEIsQ0FBcUIsR0FBckIsQ0FBTCxjQUFrQywyQkFBYSx1REFBYixFQUFzRVAsVUFBdEUsQ0FBbEMsQ0FEWDtBQUVFLElBQUEsWUFBWSxFQUFFQyxJQUZoQjtBQUdFLElBQUEsV0FBVyxFQUFFQyxXQUhmO0FBSUUsSUFBQSxRQUFRLEVBQUVQO0FBSlosSUFIRixDQWZGLGVBeUJFO0FBQ0UsSUFBQSxTQUFTLG1EQUE0Q0EsVUFBVSxJQUFJLGtDQUExRDtBQURYLEtBR0dRLFdBSEgsQ0F6QkYsRUE4QkdQLE9BQU8saUJBQUs7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQW1EUSxLQUFuRCxDQTlCZixDQURGO0FBa0NELENBekRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFcnJvckljb24gZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2luZm9ybWF0aW9uLWZpbGwuc3ZnJ1xuaW1wb3J0IFZhbGlkYXRpbmdJY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9sb2FkZXItMi1maWxsLnN2ZydcbmltcG9ydCBUaWNrSWNvbiBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvY2hlY2tib3gtY2lyY2xlLWZpbGwuc3ZnJ1xuaW1wb3J0IGZvY3VzQ2xhc3NlcyBmcm9tICcuLi8uLi91dGlsaXRpZXMvZm9jdXNDbGFzc2VzJ1xuaW1wb3J0IGFkZERpc2FibGVkQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGREaXNhYmxlZENsYXNzZXMnXG5pbXBvcnQgYWRkRXJyb3JDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZEVycm9yQ2xhc3NlcydcbmltcG9ydCBhZGRWYWxpZGF0aW5nQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGRWYWxpZGF0aW5nQ2xhc3NlcydcbmltcG9ydCBhZGRTdWNjZXNzQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGRTdWNjZXNzQ2xhc3NlcydcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0QXJlYVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIGZvY3Vzc2VkIHR5cGVcbiAgICovXG4gIGlzRm9jdXNzZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgICogTGFiZWwgdGV4dFxuICAgICovXG4gIGxhYmVsPzogc3RyaW5nXG4gIC8qKlxuICAgICogZmlsbGVkIHRleHRcbiAgICAqL1xuICB0ZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlciB0ZXh0XG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICAqIGluZm9ybWF0aW9uIHRleHRcbiAgICAqL1xuICBpbmZvcm1hdGlvbj86IHN0cmluZ1xuICAvKipcbiAgICAqIGVycm9yIHRleHRcbiAgICAqL1xuICBlcnJvcj86IHN0cmluZ1xuICAvKipcbiAgICAqIGVycm9yXG4gICAgKi9cbiAgaXNFcnJvcj86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBjaGVja2luZy4uLlxuICAgICovXG4gIGlzVmFsaWRhdGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBzdWNjZXNzXG4gICAgKi9cbiAgaXNTdWNjZXNzPzogYm9vbGVhblxuICAvKipcbiAgICAqIGRpc2FibGVkXG4gICAgKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgVGV4dEFyZWE6IEZDPFRleHRBcmVhUHJvcHM+ID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgaXNFcnJvcixcbiAgaXNWYWxpZGF0aW5nLFxuICBpc1N1Y2Nlc3MsXG4gIGxhYmVsLFxuICBpc0ZvY3Vzc2VkLFxuICB0ZXh0LFxuICBwbGFjZWhvbGRlcixcbiAgaW5mb3JtYXRpb24sXG4gIGVycm9yXG59KSA9PiB7XG4gIGNvbnN0IHRleHRhcmVhQ2xhc3NlcyA9IFsnZGFyazpiZy1ncmF5LTgwMCcsICdkYXJrOnRleHQtd2hpdGUnLCAndGV4dC1iYXNlJywgJ3B5LTMnLCAncHgtNCcsICdyb3VuZGVkLWxnJywgJ2JvcmRlcicsICdib3JkZXItZ3JheS0yMDAnLCAndy03MiddXG4gIGFkZERpc2FibGVkQ2xhc3Nlcyhpc0Rpc2FibGVkLCB0ZXh0YXJlYUNsYXNzZXMpXG4gIGFkZEVycm9yQ2xhc3Nlcyhpc0Vycm9yLCB0ZXh0YXJlYUNsYXNzZXMpXG4gIGFkZFZhbGlkYXRpbmdDbGFzc2VzKGlzVmFsaWRhdGluZywgdGV4dGFyZWFDbGFzc2VzKVxuICBpZiAoaXNWYWxpZGF0aW5nKSB7XG4gICAgdGV4dGFyZWFDbGFzc2VzLnB1c2goJ2Ryb3Atc2hhZG93LXNtJywgJ291dGxpbmUtbm9uZScsICdyaW5nLTInLCAnYm9yZGVyLXRyYW5zcGFyZW50JylcbiAgfVxuICBhZGRTdWNjZXNzQ2xhc3Nlcyhpc1N1Y2Nlc3MsIHRleHRhcmVhQ2xhc3NlcylcbiAgaWYgKGlzU3VjY2Vzcykge1xuICAgIHRleHRhcmVhQ2xhc3Nlcy5wdXNoKCdkcm9wLXNoYWRvdy1zbScsICdvdXRsaW5lLW5vbmUnLCAncmluZy0yJywgJ2JvcmRlci10cmFuc3BhcmVudCcpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLXktMSB3LTcyJ1xuICAgID5cbiAgICAgIHtsYWJlbCAmJlxuICAgICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gZm9udC1zZW1pYm9sZCBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBkYXJrOnRleHQtZ3JheS0zMDAgJHtpc0Rpc2FibGVkICYmICd0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTYwMCd9YH1cbiAgICAgID5cbiAgICAgICAgPHA+XG4gICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L3A+XG4gICAgICAgIHsoaXNFcnJvcikgJiYgPEVycm9ySWNvbiBjbGFzc05hbWU9J3RleHQtcmVkLTYwMCBkYXJrOnRleHQtcmVkLTUwMCcgLz59XG4gICAgICAgIHsoaXNWYWxpZGF0aW5nKSAmJiA8VmFsaWRhdGluZ0ljb24gY2xhc3NOYW1lPSd0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1ibHVlLTUwMCcgLz59XG4gICAgICAgIHsoaXNTdWNjZXNzKSAmJiA8VGlja0ljb24gY2xhc3NOYW1lPSd0ZXh0LWdyZWVuLTYwMCBkYXJrOnRleHQtZ3JlZW4tNTAwJyAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT0nY29sLXNwYW4tMidcbiAgICAgID5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHt0ZXh0YXJlYUNsYXNzZXMuam9pbignICcpfSAke2ZvY3VzQ2xhc3Nlcygnb3V0bGluZS1ub25lIHJpbmctMiByaW5nLWJyYW5kLTUwMCBib3JkZXItdHJhbnNwYXJlbnQnLCBpc0ZvY3Vzc2VkKX1gfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LW5vcm1hbCBkYXJrOnRleHQtZ3JheS0zMDAgJHtpc0Rpc2FibGVkICYmICd0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTYwMCd9IGB9XG4gICAgICA+XG4gICAgICAgIHtpbmZvcm1hdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgICAge2lzRXJyb3IgJiYgKDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbm9ybWFsIHRleHQtcmVkLTcwMCc+e2Vycm9yfTwvZGl2Pil9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==