"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BigHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderText = require("../headertext/HeaderText");

var _reactMediaHook = require("react-media-hook");

var _bg_bigheader = _interopRequireDefault(require("../../assets/images/bg_bigheader.jpg"));

var _bunny = _interopRequireDefault(require("../../assets/images/bunny.mp4"));

var _excluded = ["bgImage"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var BigHeader = _ref => {
  var {
    bgImage = "../images"
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  var desktop = (0, _reactMediaHook.useMediaPredicate)("(min-width: 640px)");
  return /*#__PURE__*/_react.default.createElement("header", _extends({}, props, {
    className: "min-h-568 lg:h-90vh md:h-90vh sm:h-90vh overflow-hidden bg-cover relative\n                ".concat(props.className ? props.className : '', "\n            "),
    style: {
      //backgroundImage: 'url(https://source.unsplash.com/random)'
      backgroundImage: "url(".concat(_bg_bigheader.default, ")")
    }
  }), props.bgtype == "video" && desktop && /*#__PURE__*/_react.default.createElement("video", {
    id: "videoBG",
    poster: _bg_bigheader.default,
    autoPlay: true,
    muted: true,
    loop: true,
    className: "absolute z-0 top-0 left-0 object-cover w-full h-full hidden sm:block"
  }, /*#__PURE__*/_react.default.createElement("source", {
    src: _bunny.default,
    type: "video/mp4"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-2/6 -top-1/6 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent opacity-40"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-10 h-full -bottom-1/6 left-0 w-full bg-gradient-to-t from-gray-900 to-transparent opacity-60"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute z-20 bottom-0 left-0 p-6 lg:p-12 md:p-12 sm:p-12"
  }, /*#__PURE__*/_react.default.createElement(_HeaderText.HeaderText, _extends({}, props.headerinfo, {
    style: {
      backgroundColor: 'transparent'
    }
  }))));
};

exports.BigHeader = BigHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmlnaGVhZGVyL0JpZ0hlYWRlci50c3giXSwibmFtZXMiOlsiQmlnSGVhZGVyIiwiYmdJbWFnZSIsInByb3BzIiwiZGVza3RvcCIsImNsYXNzTmFtZSIsImJhY2tncm91bmRJbWFnZSIsImJnVGVzdEltYWdlIiwiYmd0eXBlIiwiYmdUZXN0VmlkZW8iLCJoZWFkZXJpbmZvIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBSUE7O0FBQ0E7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxTQUE2QixHQUFHLFFBR3ZDO0FBQUEsTUFId0M7QUFDMUNDLElBQUFBLE9BQU8sR0FBQztBQURrQyxHQUd4QztBQUFBLE1BRENDLEtBQ0Q7O0FBQ0YsTUFBTUMsT0FBTyxHQUFHLHVDQUFrQixvQkFBbEIsQ0FBaEI7QUFFQSxzQkFDSSxvREFDUUQsS0FEUjtBQUVJLElBQUEsU0FBUyx1R0FDSEEsS0FBSyxDQUFDRSxTQUFOLEdBQWdCRixLQUFLLENBQUNFLFNBQXRCLEdBQWdDLEVBRDdCLG1CQUZiO0FBS0ksSUFBQSxLQUFLLEVBQ0Q7QUFDSTtBQUNBQyxNQUFBQSxlQUFlLGdCQUFTQyxxQkFBVDtBQUZuQjtBQU5SLE1BY1NKLEtBQUssQ0FBQ0ssTUFBTixJQUFnQixPQUFoQixJQUEyQkosT0FBNUIsaUJBQ0k7QUFBTyxJQUFBLEVBQUUsRUFBQyxTQUFWO0FBQW9CLElBQUEsTUFBTSxFQUFFRyxxQkFBNUI7QUFBeUMsSUFBQSxRQUFRLE1BQWpEO0FBQWtELElBQUEsS0FBSyxNQUF2RDtBQUF3RCxJQUFBLElBQUksTUFBNUQ7QUFBNkQsSUFBQSxTQUFTLEVBQUM7QUFBdkUsa0JBQ0k7QUFBUSxJQUFBLEdBQUcsRUFBRUUsY0FBYjtBQUEwQixJQUFBLElBQUksRUFBQztBQUEvQixJQURKLENBZlosZUFxQkk7QUFDSSxJQUFBLFNBQVMsRUFBQztBQURkLElBckJKLGVBd0JJO0FBQ0ksSUFBQSxTQUFTLEVBQUM7QUFEZCxJQXhCSixlQW9DSTtBQUNJLElBQUEsU0FBUyxFQUFDO0FBRGQsa0JBR0ksNkJBQUMsc0JBQUQsZUFDUU4sS0FBSyxDQUFDTyxVQURkO0FBRUksSUFBQSxLQUFLLEVBQUU7QUFBQ0MsTUFBQUEsZUFBZSxFQUFDO0FBQWpCO0FBRlgsS0FISixDQXBDSixDQURKO0FBK0NILENBckRNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCBIVE1MQXR0cmlidXRlcywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSGVhZGVyVGV4dCwgSGVhZGVyVGV4dFByb3BzIH0gZnJvbSAnLi4vaGVhZGVydGV4dC9IZWFkZXJUZXh0J1xuaW1wb3J0IHsgdXNlTWVkaWFQcmVkaWNhdGUgfSBmcm9tIFwicmVhY3QtbWVkaWEtaG9va1wiO1xuLypcbiogSW4gcHJvZHVjdGlvbiBtb2RlLCBzaG93IGR5bmFtaWMgaW1hZ2UgYW5kIHZpZGVvIHdpdGggdXJsXG4qL1xuaW1wb3J0IGJnVGVzdEltYWdlIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmdfYmlnaGVhZGVyLmpwZydcbmltcG9ydCBiZ1Rlc3RWaWRlbyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2J1bm55Lm1wNCdcblxuZXhwb3J0IGludGVyZmFjZSBCaWdIZWFkZXJQcm9wcyBleHRlbmRzIEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gICAvKipcbiAgICAqIGJhY2tncm91bmQgaW1hZ2Ugb3IgdmlkZW8gdXJsIGluIGFzc2V0cyBmb2xkZXJcbiAgICAqL1xuICAgIGJnSW1hZ2U/OiBzdHJpbmdcbiAgICAvKipcbiAgICAgKiBpbWFnZSBvciB2aWRlb1xuICAgICAqL1xuICAgIGJndHlwZTogXCJpbWFnZVwiIHwgXCJ2aWRlb1wiXG4gICAgLyoqXG4gICAgICogaGVhZGVyIHRleHQgaW5mb3JtYXRpb25cbiAgICAgKi9cbiAgICBoZWFkZXJpbmZvOiBIZWFkZXJUZXh0UHJvcHNcblxuICAgIGNsYXNzTmFtZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIFByaW1hcnkgVUkgY29tcG9uZW50IGZvciB1c2VyIGludGVyYWN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBCaWdIZWFkZXI6IEZDPEJpZ0hlYWRlclByb3BzPiA9ICh7XG4gICAgYmdJbWFnZT1cIi4uL2ltYWdlc1wiLFxuICAgIC4uLnByb3BzXG59KSA9PiB7XG4gICAgY29uc3QgZGVza3RvcCA9IHVzZU1lZGlhUHJlZGljYXRlKFwiKG1pbi13aWR0aDogNjQwcHgpXCIpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyXG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BtaW4taC01NjggbGc6aC05MHZoIG1kOmgtOTB2aCBzbTpoLTkwdmggb3ZlcmZsb3ctaGlkZGVuIGJnLWNvdmVyIHJlbGF0aXZlXG4gICAgICAgICAgICAgICAgJHtwcm9wcy5jbGFzc05hbWU/cHJvcHMuY2xhc3NOYW1lOicnfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20pJ1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZ1Rlc3RJbWFnZX0pYCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgXG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAocHJvcHMuYmd0eXBlID09IFwidmlkZW9cIiAmJiBkZXNrdG9wICkgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dmlkZW8gaWQ9XCJ2aWRlb0JHXCIgcG9zdGVyPXtiZ1Rlc3RJbWFnZX0gYXV0b1BsYXkgbXV0ZWQgbG9vcCBjbGFzc05hbWU9J2Fic29sdXRlIHotMCB0b3AtMCBsZWZ0LTAgb2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGwgaGlkZGVuIHNtOmJsb2NrJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtiZ1Rlc3RWaWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHNvdXJjZSBzcmM9e2JnSW1hZ2V9IHR5cGU9XCJ2aWRlby9tcDRcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgei0xMCBoLTIvNiAtdG9wLTEvNiBsZWZ0LTAgdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTQwJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSB6LTEwIGgtZnVsbCAtYm90dG9tLTEvNiBsZWZ0LTAgdy1mdWxsIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ncmF5LTkwMCB0by10cmFuc3BhcmVudCBvcGFjaXR5LTYwJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgdG9wOiAxMjBweDtcblxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjgpIDEwMCUpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBtYXRyaXgoMSwgMCwgMCwgLTEsIDAsIDApOyAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIHotMjAgYm90dG9tLTAgbGVmdC0wIHAtNiBsZzpwLTEyIG1kOnAtMTIgc206cC0xMidcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGVyVGV4dCBcbiAgICAgICAgICAgICAgICAgICAgey4uLnByb3BzLmhlYWRlcmluZm99IFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjondHJhbnNwYXJlbnQnfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgIClcbn1cbiJdfQ==