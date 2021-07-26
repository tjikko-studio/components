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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC50c3giXSwibmFtZXMiOlsiSW5wdXQiLCJsYWJlbCIsImlzRXJyb3IiLCJpc0Rpc2FibGVkIiwiaXNWYWxpZGF0aW5nIiwiaXNTdWNjZXNzIiwiaXNGb2N1c3NlZCIsInRleHQiLCJwbGFjZWhvbGRlciIsImluZm9ybWF0aW9uIiwiZXJyb3IiLCJsYWJlbENvbnRhaW5lckNsYXNzZXMiLCJpbnB1dENsYXNzZXMiLCJwdXNoIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBOENBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQXFCLEdBQUcsUUFXL0I7QUFBQSxNQVhnQztBQUNwQ0MsSUFBQUEsS0FEb0M7QUFFcENDLElBQUFBLE9BQU8sR0FBRyxLQUYwQjtBQUdwQ0MsSUFBQUEsVUFIb0M7QUFJcENDLElBQUFBLFlBSm9DO0FBS3BDQyxJQUFBQSxTQUxvQztBQU1wQ0MsSUFBQUEsVUFOb0M7QUFPcENDLElBQUFBLElBUG9DO0FBUXBDQyxJQUFBQSxXQVJvQztBQVNwQ0MsSUFBQUEsV0FUb0M7QUFVcENDLElBQUFBO0FBVm9DLEdBV2hDO0FBQ0osTUFBTUMscUJBQXFCLEdBQUcsQ0FBQyxTQUFELEVBQVksZUFBWixFQUE2QixNQUE3QixFQUFxQyxVQUFyQyxFQUFpRCxpQkFBakQsRUFBb0Usb0JBQXBFLENBQTlCO0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQUMsWUFBRCxFQUFlLGtCQUFmLEVBQW1DLGlCQUFuQyxFQUFzRCxXQUF0RCxFQUFtRSxNQUFuRSxFQUEyRSxVQUEzRSxFQUF1RixNQUF2RixFQUErRixNQUEvRixFQUF1RyxZQUF2RyxFQUFxSCxRQUFySCxFQUErSCxpQkFBL0gsRUFBa0osTUFBbEosQ0FBckI7QUFDQSxtQ0FBbUJULFVBQW5CLEVBQStCUyxZQUEvQjs7QUFDQSxNQUFJVCxVQUFKLEVBQWdCO0FBQ2RRLElBQUFBLHFCQUFxQixDQUFDRSxJQUF0QixDQUEyQixlQUEzQixFQUE0QyxvQkFBNUM7QUFDRDs7QUFDRCxnQ0FBZ0JYLE9BQU8sSUFBSUUsWUFBWCxJQUEyQkMsU0FBM0MsRUFBc0RPLFlBQXREOztBQUNBLE1BQUlWLE9BQU8sSUFBSUUsWUFBWCxJQUEyQkMsU0FBL0IsRUFBMEM7QUFDeENPLElBQUFBLFlBQVksQ0FBQ0MsSUFBYixDQUFrQixnQkFBbEIsRUFBb0MsY0FBcEMsRUFBb0QsUUFBcEQsRUFBOEQsbUJBQTlELEVBQW1GLGNBQW5GLEVBQW1HLG9CQUFuRztBQUNEOztBQUNELHFDQUFxQlQsWUFBckIsRUFBbUNRLFlBQW5DO0FBQ0Esa0NBQWtCUCxTQUFsQixFQUE2Qk8sWUFBN0I7QUFFQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFDO0FBRFosS0FHR1gsS0FBSyxpQkFDSjtBQUNBLElBQUEsU0FBUyxFQUFFVSxxQkFBcUIsQ0FBQ0csSUFBdEIsQ0FBMkIsR0FBM0I7QUFEWCxrQkFHQSx3Q0FDR2IsS0FESCxDQUhBLEVBTUlDLE9BQUQsaUJBQWEsNkJBQUMsZ0JBQUQ7QUFBVyxJQUFBLEtBQUssRUFBQyxjQUFqQjtBQUFnQyxJQUFBLFNBQVMsRUFBQztBQUExQyxJQU5oQixFQU9JRSxZQUFELGlCQUFrQiw2QkFBQywwQkFBRDtBQUFnQixJQUFBLEtBQUssRUFBQyxlQUF0QjtBQUFzQyxJQUFBLFNBQVMsRUFBQztBQUFoRCxJQVByQixFQVFJQyxTQUFELGlCQUFlLDZCQUFDLGNBQUQ7QUFBVSxJQUFBLEtBQUssRUFBQyxnQkFBaEI7QUFBaUMsSUFBQSxTQUFTLEVBQUM7QUFBM0MsSUFSbEIsQ0FKSixlQWVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUNFLElBQUEsU0FBUyxZQUFLTyxZQUFZLENBQUNFLElBQWIsQ0FBa0IsR0FBbEIsQ0FBTCxjQUErQiwyQkFBYSx1REFBYixFQUFzRVIsVUFBdEUsQ0FBL0IsQ0FEWDtBQUVFLElBQUEsWUFBWSxFQUFFQyxJQUZoQjtBQUdFLElBQUEsV0FBVyxFQUFFQyxXQUhmO0FBSUUsSUFBQSxRQUFRLEVBQUVMO0FBSlosSUFERixDQWZGLGVBdUJFO0FBQ0UsSUFBQSxTQUFTLGtEQUEyQ0EsVUFBVSxJQUFJLGtDQUF6RDtBQURYLEtBR0dNLFdBSEgsQ0F2QkYsRUE0QkdQLE9BQU8saUJBQUs7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQW1EUSxLQUFuRCxDQTVCZixDQURGO0FBZ0NELENBekRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7RXJyb3JJY29ufSBmcm9tIFwiLi4vc3ZnL0Vycm9yXCJcbmltcG9ydCB7VmFsaWRhdGluZ0ljb259IGZyb20gXCIuLi9zdmcvVmFsaWRhdGluZ1wiXG5pbXBvcnQge1RpY2tJY29ufSBmcm9tIFwiLi4vc3ZnL1RpY2tcIlxuaW1wb3J0IGZvY3VzQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZvY3VzQ2xhc3Nlc1wiXG5pbXBvcnQgYWRkRGlzYWJsZWRDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZERpc2FibGVkQ2xhc3NlcydcbmltcG9ydCBhZGRFcnJvckNsYXNzZXMgZnJvbSAnLi4vLi4vc25pcHBldHMvYWRkRXJyb3JDbGFzc2VzJ1xuaW1wb3J0IGFkZFZhbGlkYXRpbmdDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZFZhbGlkYXRpbmdDbGFzc2VzJ1xuaW1wb3J0IGFkZFN1Y2Nlc3NDbGFzc2VzIGZyb20gJy4uLy4uL3NuaXBwZXRzL2FkZFN1Y2Nlc3NDbGFzc2VzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIElucHV0UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogZm9jdXNzZWQgdHlwZVxuICAgKi9cbiAgaXNGb2N1c3NlZD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIExhYmVsIHRleHRcbiAgICovXG4gIGxhYmVsPzogc3RyaW5nXG4gIC8qKlxuICAgKiBmaWxsZWQgdGV4dFxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogcGxhY2Vob2xkZXIgdGV4dFxuICAgKi9cbiAgcGxhY2Vob2xkZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGluZm9ybWF0aW9uIHRleHRcbiAgICovXG4gIGluZm9ybWF0aW9uPzogc3RyaW5nXG4gIC8qKlxuICAgKiBlcnJvciB0ZXh0XG4gICAqL1xuICBlcnJvcj86IHN0cmluZ1xuICAvKipcbiAgICogZXJyb3JcbiAgICovXG4gIGlzRXJyb3I/OiBib29sZWFuXG4gIC8qKlxuICAgKiBjaGVja2luZy4uLlxuICAgKi9cbiAgaXNWYWxpZGF0aW5nPzogYm9vbGVhblxuICAvKipcbiAgICogc3VjY2Vzc1xuICAgKi9cbiAgaXNTdWNjZXNzPzogYm9vbGVhblxuICAvKipcbiAgICogZGlzYWJsZWRcbiAgICovXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuXG5cbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5cbmV4cG9ydCBjb25zdCBJbnB1dDogRkM8SW5wdXRQcm9wcz4gPSAoe1xuICBsYWJlbCxcbiAgaXNFcnJvciA9IGZhbHNlLFxuICBpc0Rpc2FibGVkLFxuICBpc1ZhbGlkYXRpbmcsXG4gIGlzU3VjY2VzcyxcbiAgaXNGb2N1c3NlZCxcbiAgdGV4dCxcbiAgcGxhY2Vob2xkZXIsXG4gIGluZm9ybWF0aW9uLFxuICBlcnJvclxufSkgPT4ge1xuICBjb25zdCBsYWJlbENvbnRhaW5lckNsYXNzZXMgPSBbJ3RleHQtc20nLCAnZm9udC1zZW1pYm9sZCcsICdmbGV4JywgJ2ZsZXgtcm93JywgJ2p1c3RpZnktYmV0d2VlbicsICdkYXJrOnRleHQtZ3JheS0zMDAnXVxuICBjb25zdCBpbnB1dENsYXNzZXMgPSBbJ2JnLWdyYXktNTAnLCAnZGFyazpiZy1ncmF5LTgwMCcsICdkYXJrOnRleHQtd2hpdGUnLCAndGV4dC1iYXNlJywgJ2gtMTInLCAnbWF4LWgtMTInLCAncHktMycsICdweC00JywgJ3JvdW5kZWQtbGcnLCAnYm9yZGVyJywgJ2JvcmRlci1ncmF5LTIwMCcsICd3LTcyJ11cbiAgYWRkRGlzYWJsZWRDbGFzc2VzKGlzRGlzYWJsZWQsIGlucHV0Q2xhc3NlcylcbiAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICBsYWJlbENvbnRhaW5lckNsYXNzZXMucHVzaCgndGV4dC1ncmF5LTUwMCcsICdkYXJrOnRleHQtZ3JheS02MDAnKVxuICB9XG4gIGFkZEVycm9yQ2xhc3Nlcyhpc0Vycm9yIHx8IGlzVmFsaWRhdGluZyB8fCBpc1N1Y2Nlc3MsIGlucHV0Q2xhc3NlcylcbiAgaWYgKGlzRXJyb3IgfHwgaXNWYWxpZGF0aW5nIHx8IGlzU3VjY2Vzcykge1xuICAgIGlucHV0Q2xhc3Nlcy5wdXNoKCdkcm9wLXNoYWRvdy1zbScsICdvdXRsaW5lLW5vbmUnLCAncmluZy0yJywgJ2Rhcms6cmluZy1yZWQtNTAwJywgJ3JpbmctcmVkLTYwMCcsICdib3JkZXItdHJhbnNwYXJlbnQnKVxuICB9XG4gIGFkZFZhbGlkYXRpbmdDbGFzc2VzKGlzVmFsaWRhdGluZywgaW5wdXRDbGFzc2VzKVxuICBhZGRTdWNjZXNzQ2xhc3Nlcyhpc1N1Y2Nlc3MsIGlucHV0Q2xhc3NlcylcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktMSB3LTcyXCJcbiAgICA+XG4gICAgICB7bGFiZWwgJiZcbiAgICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2xhYmVsQ29udGFpbmVyQ2xhc3Nlcy5qb2luKCcgJyl9XG4gICAgICA+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9wPlxuICAgICAgICAgIHsoaXNFcnJvcikgJiYgPEVycm9ySWNvbiBjb2xvcj1cInRleHQtcmVkLTYwMFwiIGRhcmtDb2xvcj1cImRhcms6dGV4dC1yZWQtNTAwXCIgLz59XG4gICAgICAgICAgeyhpc1ZhbGlkYXRpbmcpICYmIDxWYWxpZGF0aW5nSWNvbiBjb2xvcj1cInRleHQtYmx1ZS02MDBcIiBkYXJrQ29sb3I9XCJkYXJrOnRleHQtYmx1ZS01MDBcIiAvPn1cbiAgICAgICAgICB7KGlzU3VjY2VzcykgJiYgPFRpY2tJY29uIGNvbG9yPVwidGV4dC1ncmVlbi02MDBcIiBkYXJrQ29sb3I9XCJkYXJrOnRleHQtZ3JlZW4tNTAwXCIgLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW5wdXRDbGFzc2VzLmpvaW4oJyAnKX0gJHtmb2N1c0NsYXNzZXMoJ291dGxpbmUtbm9uZSByaW5nLTIgcmluZy1icmFuZC01MDAgYm9yZGVyLXRyYW5zcGFyZW50JywgaXNGb2N1c3NlZCl9YH1cbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RleHR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQtc20gb250LW5vcm1hbCBkYXJrOnRleHQtZ3JheS0zMDAgJHtpc0Rpc2FibGVkICYmIFwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS02MDBcIn1gfVxuICAgICAgPlxuICAgICAgICB7aW5mb3JtYXRpb259XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc0Vycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1yZWQtNzAwXCI+e2Vycm9yfTwvZGl2Pil9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==