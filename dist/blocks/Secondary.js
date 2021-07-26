"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Secondary = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = require("../Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Secondary = _ref => {
  var {
    type = 'vertical',
    imageUrl,
    head,
    text,
    cta_name,
    cta_url,
    mirror = 'false',
    className
  } = _ref;

  var Image = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: type === 'vertical' && 'pb-6'
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: imageUrl,
      className: "rounded-lg ".concat(type === 'default' && 'w-auto')
    }));
  };

  var Text = () => {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "\n          ".concat(type != 'vertical' && 'flex justify-center', "\n        ")
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "\n              ".concat(type != 'vertical' && 'pl-12', "\n          ")
    }, /*#__PURE__*/_react.default.createElement("h2", {
      className: "fontStyle-4xl"
    }, head), /*#__PURE__*/_react.default.createElement("p", {
      className: "text-base pt-2"
    }, text), cta_name && cta_url && /*#__PURE__*/_react.default.createElement("div", {
      className: "pt-6"
    }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
      text: cta_name,
      url: cta_url,
      type: "tertiary",
      icon: "none",
      size: "large"
    }))));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "\n        ".concat(type === 'default' && 'flex', "\n        ").concat(mirror && 'flex-row-reverse', "\n        ").concat(className ? className : '', "\n      ")
  }, (type === 'default' || type === 'vertical') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Image, null), /*#__PURE__*/_react.default.createElement(Text, null)));
};

exports.Secondary = Secondary;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1NlY29uZGFyeS50c3giXSwibmFtZXMiOlsiU2Vjb25kYXJ5IiwidHlwZSIsImltYWdlVXJsIiwiaGVhZCIsInRleHQiLCJjdGFfbmFtZSIsImN0YV91cmwiLCJtaXJyb3IiLCJjbGFzc05hbWUiLCJJbWFnZSIsIlRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQTBCQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUE2QixHQUFHLFFBVXZDO0FBQUEsTUFWd0M7QUFDNUNDLElBQUFBLElBQUksR0FBRyxVQURxQztBQUU1Q0MsSUFBQUEsUUFGNEM7QUFHNUNDLElBQUFBLElBSDRDO0FBSTVDQyxJQUFBQSxJQUo0QztBQUs1Q0MsSUFBQUEsUUFMNEM7QUFNNUNDLElBQUFBLE9BTjRDO0FBTzVDQyxJQUFBQSxNQUFNLEdBQUcsT0FQbUM7QUFRNUNDLElBQUFBO0FBUjRDLEdBVXhDOztBQUNKLE1BQU1DLEtBQUssR0FBRyxNQUFNO0FBQ2xCLHdCQUNFO0FBQ0UsTUFBQSxTQUFTLEVBQUVSLElBQUksS0FBSyxVQUFULElBQXVCO0FBRHBDLG9CQUdFO0FBQ0UsTUFBQSxHQUFHLEVBQUVDLFFBRFA7QUFFRSxNQUFBLFNBQVMsdUJBQWdCRCxJQUFJLEtBQUssU0FBVCxJQUFzQixRQUF0QztBQUZYLE1BSEYsQ0FERjtBQVVELEdBWEQ7O0FBWUEsTUFBTVMsSUFBSSxHQUFHLE1BQU07QUFDakIsd0JBQ0U7QUFDRSxNQUFBLFNBQVMsd0JBQ0xULElBQUksSUFBSSxVQUFSLElBQXNCLHFCQURqQjtBQURYLG9CQUtFO0FBQ0UsTUFBQSxTQUFTLDRCQUNIQSxJQUFJLElBQUksVUFBUixJQUFzQixPQURuQjtBQURYLG9CQUtFO0FBQUksTUFBQSxTQUFTLEVBQUM7QUFBZCxPQUErQkUsSUFBL0IsQ0FMRixlQU1FO0FBQUcsTUFBQSxTQUFTLEVBQUM7QUFBYixPQUErQkMsSUFBL0IsQ0FORixFQVFLQyxRQUFRLElBQUlDLE9BQWIsaUJBQ0E7QUFDRSxNQUFBLFNBQVMsRUFBQztBQURaLG9CQUVFLDZCQUFDLGNBQUQ7QUFDRSxNQUFBLElBQUksRUFBRUQsUUFEUjtBQUVFLE1BQUEsR0FBRyxFQUFFQyxPQUZQO0FBR0UsTUFBQSxJQUFJLEVBQUMsVUFIUDtBQUlFLE1BQUEsSUFBSSxFQUFDLE1BSlA7QUFLRSxNQUFBLElBQUksRUFBQztBQUxQLE1BRkYsQ0FUSixDQUxGLENBREY7QUE2QkQsR0E5QkQ7O0FBK0JBLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLHNCQUNMTCxJQUFJLEtBQUssU0FBVCxJQUFzQixNQURqQix1QkFFTE0sTUFBTSxJQUFJLGtCQUZMLHVCQUdMQyxTQUFTLEdBQUdBLFNBQUgsR0FBZSxFQUhuQjtBQURYLEtBT0csQ0FBQ1AsSUFBSSxLQUFLLFNBQVQsSUFBc0JBLElBQUksS0FBSyxVQUFoQyxrQkFDQyx5RUFDRSw2QkFBQyxLQUFELE9BREYsZUFFRSw2QkFBQyxJQUFELE9BRkYsQ0FSSixDQURGO0FBZ0JELENBdEVNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7RkMsIEhUTUxBdHRyaWJ1dGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vjb25kYXJ5UHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRGl2RWxlbWVudD4ge1xuICAvKipcbiAgICogQmxvY2sgdHlwZVxuICAgKi9cbiAgdHlwZT86ICdkZWZhdWx0JyB8ICd2ZXJ0aWNhbCdcbiAgLyoqXG4gICAqICBpbWFnZSB1cmwgdG8gc2hvd1xuICAgKi9cbiAgaW1hZ2VVcmw/OiBzdHJpbmdcbiAgaGVhZD86IHN0cmluZ1xuICB0ZXh0Pzogc3RyaW5nXG4gIGN0YV9uYW1lOiBzdHJpbmdcbiAgY3RhX3VybDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIElzIG1pcnJvclxuICAgKi9cbiAgbWlycm9yPzogYm9vbGVhblxuICAvKipcbiAgICogQWRkaXRpb25hbCBzcGFjZS1zZXBhcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYXBwZW5kXG4gICAqL1xuICBjbGFzc05hbWU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgU2Vjb25kYXJ5OiBGQzxTZWNvbmRhcnlQcm9wcz4gPSAoe1xuICB0eXBlID0gJ3ZlcnRpY2FsJyxcbiAgaW1hZ2VVcmwsXG4gIGhlYWQsXG4gIHRleHQsXG4gIGN0YV9uYW1lLFxuICBjdGFfdXJsLFxuICBtaXJyb3IgPSAnZmFsc2UnLFxuICBjbGFzc05hbWUsXG5cbn0pID0+IHtcbiAgY29uc3QgSW1hZ2UgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXt0eXBlID09PSAndmVydGljYWwnICYmICdwYi02J31cbiAgICAgID5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17aW1hZ2VVcmx9XG4gICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC1sZyAke3R5cGUgPT09ICdkZWZhdWx0JyAmJiAndy1hdXRvJ31gfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIGNvbnN0IFRleHQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgJHt0eXBlICE9ICd2ZXJ0aWNhbCcgJiYgJ2ZsZXgganVzdGlmeS1jZW50ZXInfVxuICAgICAgICBgfVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICR7dHlwZSAhPSAndmVydGljYWwnICYmICdwbC0xMid9XG4gICAgICAgICAgYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnRTdHlsZS00eGwnPntoZWFkfTwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWJhc2UgcHQtMic+e3RleHR9PC9wPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIChjdGFfbmFtZSAmJiBjdGFfdXJsKSAmJlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PXtjdGFfbmFtZX1cbiAgICAgICAgICAgICAgICB1cmw9e2N0YV91cmx9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRlcnRpYXJ5XCJcbiAgICAgICAgICAgICAgICBpY29uPSdub25lJ1xuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgXG4gICAgICAgICR7dHlwZSA9PT0gJ2RlZmF1bHQnICYmICdmbGV4J31cbiAgICAgICAgJHttaXJyb3IgJiYgJ2ZsZXgtcm93LXJldmVyc2UnfVxuICAgICAgICAke2NsYXNzTmFtZSA/IGNsYXNzTmFtZSA6ICcnfVxuICAgICAgYH1cbiAgICA+XG4gICAgICB7KHR5cGUgPT09ICdkZWZhdWx0JyB8fCB0eXBlID09PSAndmVydGljYWwnKSAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPEltYWdlIC8+XG4gICAgICAgICAgPFRleHQgLz5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=