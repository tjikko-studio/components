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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Input = props => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "flex flex-col gap-y-1 w-72"
  }, props.label && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-semibold flex flex-row justify-between dark:text-gray-300 ".concat(props.isDisabled && "text-gray-500 dark:text-gray-600")
  }, /*#__PURE__*/_react.default.createElement("p", null, props.label), props.isError && /*#__PURE__*/_react.default.createElement(_Error.ErrorIcon, {
    color: "text-red-600",
    darkColor: "dark:text-red-500"
  }), props.isValidating && /*#__PURE__*/_react.default.createElement(_Validating.ValidatingIcon, {
    color: "text-blue-600",
    darkColor: "dark:text-blue-500"
  }), props.isSuccess && /*#__PURE__*/_react.default.createElement(_Tick.TickIcon, {
    color: "text-green-600",
    darkColor: "dark:text-green-500"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-span-2"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "".concat(!props.isDisabled && "hover:border-gray-300 dark:border-gray-400", " bg-gray-50 dark:bg-gray-800 dark:text-white text-base h-12 max-h-12 py-3 px-4 rounded-lg border border-gray-200  ").concat(props.isDisabled && "dark:border-gray-500", " w-72 \n                    ").concat((0, _focusClasses.default)('outline-none ring-2 ring-brand-500 border-transparent', props.isFocussed), "\n                    ").concat(props.isError && "drop-shadow-sm outline-none ring-2 dark:ring-red-500 ring-red-600 border-transparent", "\n                    ").concat(props.isValidating && "drop-shadow-sm outline-none ring-2 dark:ring-blue-500 ring-blue-600 border-transparent", "\n                    ").concat(props.isSuccess && "drop-shadow-sm outline-none ring-2 dark:ring-green-500 ring-green-600 border-transparent"),
    defaultValue: props.text,
    placeholder: props.placeholder,
    disabled: props.isDisabled
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm ont-normal dark:text-gray-300 ".concat(props.isDisabled && "text-gray-500 dark:text-gray-600")
  }, props.information), props.isError && /*#__PURE__*/_react.default.createElement("div", {
    className: "text-sm font-normal text-red-700"
  }, props.error));
};

exports.Input = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvZm9ybS9JbnB1dC50c3giXSwibmFtZXMiOlsiSW5wdXQiLCJwcm9wcyIsImxhYmVsIiwiaXNEaXNhYmxlZCIsImlzRXJyb3IiLCJpc1ZhbGlkYXRpbmciLCJpc1N1Y2Nlc3MiLCJpc0ZvY3Vzc2VkIiwidGV4dCIsInBsYWNlaG9sZGVyIiwiaW5mb3JtYXRpb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBOENBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLEtBQXFCLEdBQUlDLEtBQUQsSUFBVztBQUM1QyxzQkFDSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsS0FHTUEsS0FBSyxDQUFDQyxLQUFOLGlCQUNFO0FBQ0ksSUFBQSxTQUFTLG1GQUE2RUQsS0FBSyxDQUFDRSxVQUFOLElBQW9CLGtDQUFqRztBQURiLGtCQUdJLHdDQUNNRixLQUFLLENBQUNDLEtBRFosQ0FISixFQU1PRCxLQUFLLENBQUNHLE9BQVAsaUJBQW9CLDZCQUFDLGdCQUFEO0FBQVcsSUFBQSxLQUFLLEVBQUMsY0FBakI7QUFBZ0MsSUFBQSxTQUFTLEVBQUM7QUFBMUMsSUFOMUIsRUFPT0gsS0FBSyxDQUFDSSxZQUFQLGlCQUF3Qiw2QkFBQywwQkFBRDtBQUFnQixJQUFBLEtBQUssRUFBQyxlQUF0QjtBQUFzQyxJQUFBLFNBQVMsRUFBQztBQUFoRCxJQVA5QixFQVFPSixLQUFLLENBQUNLLFNBQVAsaUJBQXFCLDZCQUFDLGNBQUQ7QUFBVSxJQUFBLEtBQUssRUFBQyxnQkFBaEI7QUFBaUMsSUFBQSxTQUFTLEVBQUM7QUFBM0MsSUFSM0IsQ0FKUixlQWVJO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDSTtBQUNJLElBQUEsU0FBUyxZQUFNLENBQUNMLEtBQUssQ0FBQ0UsVUFBUCxJQUFxQiw0Q0FBM0IsK0hBQTZMRixLQUFLLENBQUNFLFVBQU4sSUFBb0Isc0JBQWpOLHlDQUNQLDJCQUFhLHVEQUFiLEVBQXNFRixLQUFLLENBQUNNLFVBQTVFLENBRE8sbUNBRVBOLEtBQUssQ0FBQ0csT0FBTixJQUFpQixzRkFGVixtQ0FHUEgsS0FBSyxDQUFDSSxZQUFOLElBQXNCLHdGQUhmLG1DQUlQSixLQUFLLENBQUNLLFNBQU4sSUFBbUIsMEZBSlosQ0FEYjtBQU1JLElBQUEsWUFBWSxFQUFFTCxLQUFLLENBQUNPLElBTnhCO0FBT0ksSUFBQSxXQUFXLEVBQUVQLEtBQUssQ0FBQ1EsV0FQdkI7QUFRSSxJQUFBLFFBQVEsRUFBRVIsS0FBSyxDQUFDRTtBQVJwQixJQURKLENBZkosZUEyQkk7QUFDSSxJQUFBLFNBQVMsa0RBQTRDRixLQUFLLENBQUNFLFVBQU4sSUFBb0Isa0NBQWhFO0FBRGIsS0FHTUYsS0FBSyxDQUFDUyxXQUhaLENBM0JKLEVBZ0NLVCxLQUFLLENBQUNHLE9BQU4saUJBQWtCO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFvREgsS0FBSyxDQUFDVSxLQUExRCxDQWhDdkIsQ0FESjtBQW9DSCxDQXJDTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEVycm9ySWNvbiB9IGZyb20gXCIuLi9zdmcvRXJyb3JcIlxuaW1wb3J0IHsgVmFsaWRhdGluZ0ljb24gfSBmcm9tIFwiLi4vc3ZnL1ZhbGlkYXRpbmdcIlxuaW1wb3J0IHsgVGlja0ljb24gfSBmcm9tIFwiLi4vc3ZnL1RpY2tcIlxuaW1wb3J0IGZvY3VzQ2xhc3NlcyBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2ZvY3VzQ2xhc3Nlc1wiXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW5wdXRQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxEaXZFbGVtZW50PiB7XG4gICAgLyoqXG4gICAgICogZm9jdXNzZWQgdHlwZVxuICAgICAqL1xuICAgIGlzRm9jdXNzZWQ/OiBib29sZWFuXG4gICAgLyoqXG4gICAgICogTGFiZWwgdGV4dFxuICAgICAqL1xuICAgIGxhYmVsPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogZmlsbGVkIHRleHRcbiAgICAgKi9cbiAgICB0ZXh0Pzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogcGxhY2Vob2xkZXIgdGV4dFxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogaW5mb3JtYXRpb24gdGV4dFxuICAgICAqL1xuICAgIGluZm9ybWF0aW9uPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogZXJyb3IgdGV4dFxuICAgICAqL1xuICAgIGVycm9yPzogc3RyaW5nXG4gICAgLyoqXG4gICAgICogZXJyb3JcbiAgICAgKi9cbiAgICBpc0Vycm9yPzogYm9vbGVhblxuICAgIC8qKlxuICAgICAqIGNoZWNraW5nLi4uXG4gICAgICovXG4gICAgaXNWYWxpZGF0aW5nPzogYm9vbGVhblxuICAgIC8qKlxuICAgICAqIHN1Y2Nlc3NcbiAgICAgKi9cbiAgICBpc1N1Y2Nlc3M/OiBib29sZWFuXG4gICAgLyoqXG4gICAgICogZGlzYWJsZWRcbiAgICAgKi9cbiAgICBpc0Rpc2FibGVkPzogYm9vbGVhblxuXG59XG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuIFxuZXhwb3J0IGNvbnN0IElucHV0OiBGQzxJbnB1dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLXktMSB3LTcyXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgeyBwcm9wcy5sYWJlbCAmJlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1zbSBmb250LXNlbWlib2xkIGZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGRhcms6dGV4dC1ncmF5LTMwMCAkeyBwcm9wcy5pc0Rpc2FibGVkICYmIFwidGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS02MDBcIn1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmxhYmVsIH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy5pc0Vycm9yICkgJiYgPEVycm9ySWNvbiBjb2xvcj1cInRleHQtcmVkLTYwMFwiIGRhcmtDb2xvcj1cImRhcms6dGV4dC1yZWQtNTAwXCIgLz59XG4gICAgICAgICAgICAgICAgICAgIHsgKHByb3BzLmlzVmFsaWRhdGluZykgJiYgPFZhbGlkYXRpbmdJY29uIGNvbG9yPVwidGV4dC1ibHVlLTYwMFwiIGRhcmtDb2xvcj1cImRhcms6dGV4dC1ibHVlLTUwMFwiIC8+fVxuICAgICAgICAgICAgICAgICAgICB7IChwcm9wcy5pc1N1Y2Nlc3MpICYmIDxUaWNrSWNvbiBjb2xvcj1cInRleHQtZ3JlZW4tNjAwXCIgZGFya0NvbG9yPVwiZGFyazp0ZXh0LWdyZWVuLTUwMFwiIC8+fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7ICFwcm9wcy5pc0Rpc2FibGVkICYmIFwiaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGRhcms6Ym9yZGVyLWdyYXktNDAwXCIgfSBiZy1ncmF5LTUwIGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIHRleHQtYmFzZSBoLTEyIG1heC1oLTEyIHB5LTMgcHgtNCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS0yMDAgICR7cHJvcHMuaXNEaXNhYmxlZCAmJiBcImRhcms6Ym9yZGVyLWdyYXktNTAwXCJ9IHctNzIgXG4gICAgICAgICAgICAgICAgICAgICR7Zm9jdXNDbGFzc2VzKCdvdXRsaW5lLW5vbmUgcmluZy0yIHJpbmctYnJhbmQtNTAwIGJvcmRlci10cmFuc3BhcmVudCcsIHByb3BzLmlzRm9jdXNzZWQpfVxuICAgICAgICAgICAgICAgICAgICAke3Byb3BzLmlzRXJyb3IgJiYgXCJkcm9wLXNoYWRvdy1zbSBvdXRsaW5lLW5vbmUgcmluZy0yIGRhcms6cmluZy1yZWQtNTAwIHJpbmctcmVkLTYwMCBib3JkZXItdHJhbnNwYXJlbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgJHtwcm9wcy5pc1ZhbGlkYXRpbmcgJiYgXCJkcm9wLXNoYWRvdy1zbSBvdXRsaW5lLW5vbmUgcmluZy0yIGRhcms6cmluZy1ibHVlLTUwMCByaW5nLWJsdWUtNjAwIGJvcmRlci10cmFuc3BhcmVudFwifVxuICAgICAgICAgICAgICAgICAgICAke3Byb3BzLmlzU3VjY2VzcyAmJiBcImRyb3Atc2hhZG93LXNtIG91dGxpbmUtbm9uZSByaW5nLTIgZGFyazpyaW5nLWdyZWVuLTUwMCByaW5nLWdyZWVuLTYwMCBib3JkZXItdHJhbnNwYXJlbnRcIn1gIH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtwcm9wcy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5pc0Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXNtIG9udC1ub3JtYWwgZGFyazp0ZXh0LWdyYXktMzAwICR7IHByb3BzLmlzRGlzYWJsZWQgJiYgXCJ0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTYwMFwifWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgeyBwcm9wcy5pbmZvcm1hdGlvbiB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtwcm9wcy5pc0Vycm9yICYmICg8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ub3JtYWwgdGV4dC1yZWQtNzAwXCI+eyBwcm9wcy5lcnJvciB9PC9kaXY+KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19