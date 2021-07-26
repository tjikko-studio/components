"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextArea = void 0;

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
    className: "text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ".concat(isDisabled && "text-gray-500 dark:text-gray-600")
  }, /*#__PURE__*/_react.default.createElement("p", null, label), isError && label && /*#__PURE__*/_react.default.createElement(_Error.ErrorIcon, {
    color: "text-red-600",
    darkColor: "dark:text-red-500"
  }), isValidating && label && /*#__PURE__*/_react.default.createElement(_Validating.ValidatingIcon, {
    color: "text-blue-600",
    darkColor: "dark:text-blue-500"
  }), isSuccess && label && /*#__PURE__*/_react.default.createElement(_Tick.TickIcon, {
    color: "text-green-600",
    darkColor: "dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    className: "".concat(textareaClasses.join(' '), " ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', isFocussed)),
    defaultValue: text,
    placeholder: placeholder,
    disabled: isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal dark:text-gray-300 ".concat(isDisabled && "text-gray-500 dark:text-gray-600", " ")
  }, information), isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, error));
};

exports.TextArea = TextArea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9UZXh0QXJlYS50c3giXSwibmFtZXMiOlsiVGV4dEFyZWEiLCJpc0Rpc2FibGVkIiwiaXNFcnJvciIsImlzVmFsaWRhdGluZyIsImlzU3VjY2VzcyIsImxhYmVsIiwiaXNGb2N1c3NlZCIsInRleHQiLCJwbGFjZWhvbGRlciIsImluZm9ybWF0aW9uIiwiZXJyb3IiLCJ0ZXh0YXJlYUNsYXNzZXMiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQTJCLEdBQUcsUUFXckM7QUFBQSxNQVhzQztBQUMxQ0MsSUFBQUEsVUFEMEM7QUFFMUNDLElBQUFBLE9BRjBDO0FBRzFDQyxJQUFBQSxZQUgwQztBQUkxQ0MsSUFBQUEsU0FKMEM7QUFLMUNDLElBQUFBLEtBTDBDO0FBTTFDQyxJQUFBQSxVQU4wQztBQU8xQ0MsSUFBQUEsSUFQMEM7QUFRMUNDLElBQUFBLFdBUjBDO0FBUzFDQyxJQUFBQSxXQVQwQztBQVUxQ0MsSUFBQUE7QUFWMEMsR0FXdEM7QUFDSixNQUFNQyxlQUFlLEdBQUcsQ0FBQyxrQkFBRCxFQUFxQixpQkFBckIsRUFBd0MsV0FBeEMsRUFBcUQsTUFBckQsRUFBNkQsTUFBN0QsRUFBcUUsWUFBckUsRUFBbUYsUUFBbkYsRUFBNkYsaUJBQTdGLEVBQWdILE1BQWhILENBQXhCO0FBQ0EsbUNBQW1CVixVQUFuQixFQUErQlUsZUFBL0I7QUFDQSxnQ0FBZ0JULE9BQWhCLEVBQXlCUyxlQUF6QjtBQUNBLHFDQUFxQlIsWUFBckIsRUFBbUNRLGVBQW5DOztBQUNBLE1BQUlSLFlBQUosRUFBa0I7QUFDaEJRLElBQUFBLGVBQWUsQ0FBQ0MsSUFBaEIsQ0FBcUIsZ0JBQXJCLEVBQXVDLGNBQXZDLEVBQXVELFFBQXZELEVBQWlFLG9CQUFqRTtBQUNEOztBQUNELGtDQUFrQlIsU0FBbEIsRUFBNkJPLGVBQTdCOztBQUNBLE1BQUlQLFNBQUosRUFBZTtBQUNiTyxJQUFBQSxlQUFlLENBQUNDLElBQWhCLENBQXFCLGdCQUFyQixFQUF1QyxjQUF2QyxFQUF1RCxRQUF2RCxFQUFpRSxvQkFBakU7QUFDRDs7QUFDRCxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR1AsS0FBSyxpQkFDSjtBQUNBLElBQUEsU0FBUyxtRkFBNEVKLFVBQVUsSUFBSSxrQ0FBMUY7QUFEVCxrQkFHQSx3Q0FDR0ksS0FESCxDQUhBLEVBTUlILE9BQU8sSUFBSUcsS0FBWixpQkFBc0IsNkJBQUMsZ0JBQUQ7QUFBVyxJQUFBLEtBQUssRUFBQyxjQUFqQjtBQUFnQyxJQUFBLFNBQVMsRUFBQztBQUExQyxJQU56QixFQU9JRixZQUFZLElBQUlFLEtBQWpCLGlCQUEyQiw2QkFBQywwQkFBRDtBQUFnQixJQUFBLEtBQUssRUFBQyxlQUF0QjtBQUFzQyxJQUFBLFNBQVMsRUFBQztBQUFoRCxJQVA5QixFQVFJRCxTQUFTLElBQUlDLEtBQWQsaUJBQXdCLDZCQUFDLGNBQUQ7QUFBVSxJQUFBLEtBQUssRUFBQyxnQkFBaEI7QUFBaUMsSUFBQSxTQUFTLEVBQUM7QUFBM0MsSUFSM0IsQ0FKSixlQWVFO0FBQ0UsSUFBQSxTQUFTLEVBQUM7QUFEWixrQkFHRTtBQUNFLElBQUEsU0FBUyxZQUFLTSxlQUFlLENBQUNFLElBQWhCLENBQXFCLEdBQXJCLENBQUwsY0FBa0MsMkJBQWEsdURBQWIsRUFBc0VQLFVBQXRFLENBQWxDLENBRFg7QUFFRSxJQUFBLFlBQVksRUFBRUMsSUFGaEI7QUFHRSxJQUFBLFdBQVcsRUFBRUMsV0FIZjtBQUlFLElBQUEsUUFBUSxFQUFFUDtBQUpaLElBSEYsQ0FmRixlQXlCRTtBQUNFLElBQUEsU0FBUyxtREFBNENBLFVBQVUsSUFBSSxrQ0FBMUQ7QUFEWCxLQUdHUSxXQUhILENBekJGLEVBOEJHUCxPQUFPLGlCQUFLO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFtRFEsS0FBbkQsQ0E5QmYsQ0FERjtBQWtDRCxDQXpETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge0Vycm9ySWNvbn0gZnJvbSBcIi4uL3N2Zy9FcnJvclwiXG5pbXBvcnQge1ZhbGlkYXRpbmdJY29ufSBmcm9tIFwiLi4vc3ZnL1ZhbGlkYXRpbmdcIlxuaW1wb3J0IHtUaWNrSWNvbn0gZnJvbSBcIi4uL3N2Zy9UaWNrXCJcbmltcG9ydCBmb2N1c0NsYXNzZXMgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9mb2N1c0NsYXNzZXNcIlxuaW1wb3J0IGFkZERpc2FibGVkQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGREaXNhYmxlZENsYXNzZXMnXG5pbXBvcnQgYWRkRXJyb3JDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZEVycm9yQ2xhc3NlcydcbmltcG9ydCBhZGRWYWxpZGF0aW5nQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGRWYWxpZGF0aW5nQ2xhc3NlcydcbmltcG9ydCBhZGRTdWNjZXNzQ2xhc3NlcyBmcm9tICcuLi8uLi9zbmlwcGV0cy9hZGRTdWNjZXNzQ2xhc3NlcydcblxuZXhwb3J0IGludGVyZmFjZSBUZXh0QXJlYVByb3BzIGV4dGVuZHMgSFRNTEF0dHJpYnV0ZXM8SFRNTERpdkVsZW1lbnQ+IHtcbiAgLyoqXG4gICAqIGZvY3Vzc2VkIHR5cGVcbiAgICovXG4gIGlzRm9jdXNzZWQ/OiBib29sZWFuXG4gIC8qKlxuICAgICogTGFiZWwgdGV4dFxuICAgICovXG4gIGxhYmVsPzogc3RyaW5nXG4gIC8qKlxuICAgICogZmlsbGVkIHRleHRcbiAgICAqL1xuICB0ZXh0Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBwbGFjZWhvbGRlciB0ZXh0XG4gICAqL1xuICBwbGFjZWhvbGRlcj86IHN0cmluZ1xuICAvKipcbiAgICAqIGluZm9ybWF0aW9uIHRleHRcbiAgICAqL1xuICBpbmZvcm1hdGlvbj86IHN0cmluZ1xuICAvKipcbiAgICAqIGVycm9yIHRleHRcbiAgICAqL1xuICBlcnJvcj86IHN0cmluZ1xuICAvKipcbiAgICAqIGVycm9yXG4gICAgKi9cbiAgaXNFcnJvcj86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBjaGVja2luZy4uLlxuICAgICovXG4gIGlzVmFsaWRhdGluZz86IGJvb2xlYW5cbiAgLyoqXG4gICAgKiBzdWNjZXNzXG4gICAgKi9cbiAgaXNTdWNjZXNzPzogYm9vbGVhblxuICAvKipcbiAgICAqIGRpc2FibGVkXG4gICAgKi9cbiAgaXNEaXNhYmxlZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgVGV4dEFyZWE6IEZDPFRleHRBcmVhUHJvcHM+ID0gKHtcbiAgaXNEaXNhYmxlZCxcbiAgaXNFcnJvcixcbiAgaXNWYWxpZGF0aW5nLFxuICBpc1N1Y2Nlc3MsXG4gIGxhYmVsLFxuICBpc0ZvY3Vzc2VkLFxuICB0ZXh0LFxuICBwbGFjZWhvbGRlcixcbiAgaW5mb3JtYXRpb24sXG4gIGVycm9yXG59KSA9PiB7XG4gIGNvbnN0IHRleHRhcmVhQ2xhc3NlcyA9IFsnZGFyazpiZy1ncmF5LTgwMCcsICdkYXJrOnRleHQtd2hpdGUnLCAndGV4dC1iYXNlJywgJ3B5LTMnLCAncHgtNCcsICdyb3VuZGVkLWxnJywgJ2JvcmRlcicsICdib3JkZXItZ3JheS0yMDAnLCAndy03MiddXG4gIGFkZERpc2FibGVkQ2xhc3Nlcyhpc0Rpc2FibGVkLCB0ZXh0YXJlYUNsYXNzZXMpXG4gIGFkZEVycm9yQ2xhc3Nlcyhpc0Vycm9yLCB0ZXh0YXJlYUNsYXNzZXMpXG4gIGFkZFZhbGlkYXRpbmdDbGFzc2VzKGlzVmFsaWRhdGluZywgdGV4dGFyZWFDbGFzc2VzKVxuICBpZiAoaXNWYWxpZGF0aW5nKSB7XG4gICAgdGV4dGFyZWFDbGFzc2VzLnB1c2goJ2Ryb3Atc2hhZG93LXNtJywgJ291dGxpbmUtbm9uZScsICdyaW5nLTInLCAnYm9yZGVyLXRyYW5zcGFyZW50JylcbiAgfVxuICBhZGRTdWNjZXNzQ2xhc3Nlcyhpc1N1Y2Nlc3MsIHRleHRhcmVhQ2xhc3NlcylcbiAgaWYgKGlzU3VjY2Vzcykge1xuICAgIHRleHRhcmVhQ2xhc3Nlcy5wdXNoKCdkcm9wLXNoYWRvdy1zbScsICdvdXRsaW5lLW5vbmUnLCAncmluZy0yJywgJ2JvcmRlci10cmFuc3BhcmVudCcpXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC15LTEgdy03MlwiXG4gICAgPlxuICAgICAge2xhYmVsICYmXG4gICAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LXNlbWlib2xkIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1ncmF5LTMwMCAke2lzRGlzYWJsZWQgJiYgXCJ0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTYwMFwifWB9XG4gICAgICA+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9wPlxuICAgICAgICAgIHsoaXNFcnJvciAmJiBsYWJlbCkgJiYgPEVycm9ySWNvbiBjb2xvcj1cInRleHQtcmVkLTYwMFwiIGRhcmtDb2xvcj1cImRhcms6dGV4dC1yZWQtNTAwXCIgLz59XG4gICAgICAgICAgeyhpc1ZhbGlkYXRpbmcgJiYgbGFiZWwpICYmIDxWYWxpZGF0aW5nSWNvbiBjb2xvcj1cInRleHQtYmx1ZS02MDBcIiBkYXJrQ29sb3I9XCJkYXJrOnRleHQtYmx1ZS01MDBcIiAvPn1cbiAgICAgICAgICB7KGlzU3VjY2VzcyAmJiBsYWJlbCkgJiYgPFRpY2tJY29uIGNvbG9yPVwidGV4dC1ncmVlbi02MDBcIiBkYXJrQ29sb3I9XCJkYXJrOnRleHQtZ3JlZW4tNTAwXCIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCJcbiAgICAgID5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHt0ZXh0YXJlYUNsYXNzZXMuam9pbignICcpfSAke2ZvY3VzQ2xhc3Nlcygnb3V0bGluZS1ub25lIHJpbmctMiByaW5nLWJyYW5kLTUwMCBib3JkZXItdHJhbnNwYXJlbnQnLCBpc0ZvY3Vzc2VkKX1gfVxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGV4dH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LW5vcm1hbCBkYXJrOnRleHQtZ3JheS0zMDAgJHtpc0Rpc2FibGVkICYmIFwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS02MDBcIn0gYH1cbiAgICAgID5cbiAgICAgICAge2luZm9ybWF0aW9ufVxuICAgICAgPC9kaXY+XG4gICAgICB7aXNFcnJvciAmJiAoPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbm9ybWFsIHRleHQtcmVkLTcwMFwiPntlcnJvcn08L2Rpdj4pfVxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=