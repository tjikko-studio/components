"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoURL = exports.Default = exports.default = void 0;

var _HeaderText = require("./HeaderText");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/HeaderText',
  component: _HeaderText.HeaderText,
  argTypes: {// type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The HeaderText',
    backgrounds: {
      default: 'dark background',
      values: [{
        name: 'dark background',
        value: '#000'
      }]
    }
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_HeaderText.HeaderText, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: {
    type: "default",
    buttonText: "Book a demo",
    formPlaceholder: "Work email",
    caseText: "SP Architectutes",
    url: "/headertext"
  },
  title: "Some amazing title",
  breadcrumb: [{
    name: "breadcrumb",
    url: "/bread1"
  }, {
    name: "breadcrumb",
    url: "/bread2"
  }, {
    name: "breadcrumb",
    url: "/bread3"
  }],
  text: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
};
var NoURL = Template.bind({});
exports.NoURL = NoURL;
NoURL.args = _objectSpread(_objectSpread({}, Default.args), {}, {
  styles: _objectSpread(_objectSpread({}, Default.args.styles), {}, {
    url: null
  })
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaGVhZGVydGV4dC9IZWFkZXJUZXh0LnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiSGVhZGVyVGV4dCIsImFyZ1R5cGVzIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiYmFja2dyb3VuZHMiLCJkZWZhdWx0IiwidmFsdWVzIiwibmFtZSIsInZhbHVlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJzdHlsZXMiLCJ0eXBlIiwiYnV0dG9uVGV4dCIsImZvcm1QbGFjZWhvbGRlciIsImNhc2VUZXh0IiwidXJsIiwiYnJlYWRjcnVtYiIsInRleHQiLCJOb1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxtQkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLHNCQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRSxDQUNSO0FBRFEsR0FIRztBQU1iQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUUsZ0JBRFQ7QUFFVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSxpQkFERTtBQUVYQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFBQSxJQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBQUEsS0FBSyxFQUFFO0FBRlQsT0FETTtBQUZHO0FBRkg7QUFOQyxDOzs7QUFvQmYsSUFBTUMsUUFBZ0MsR0FBSUMsSUFBRCxpQkFBVSxvQkFBQyxzQkFBRCxFQUFnQkEsSUFBaEIsQ0FBbkQ7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiRyxFQUFBQSxNQUFNLEVBQUU7QUFDTkMsSUFBQUEsSUFBSSxFQUFFLFNBREE7QUFFTkMsSUFBQUEsVUFBVSxFQUFFLGFBRk47QUFHTkMsSUFBQUEsZUFBZSxFQUFFLFlBSFg7QUFJTkMsSUFBQUEsUUFBUSxFQUFFLGtCQUpKO0FBS05DLElBQUFBLEdBQUcsRUFBRTtBQUxDLEdBREs7QUFRYnBCLEVBQUFBLEtBQUssRUFBRSxvQkFSTTtBQVNicUIsRUFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRVosSUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRVcsSUFBQUEsR0FBRyxFQUFFO0FBRlAsR0FEVSxFQUtWO0FBQ0VYLElBQUFBLElBQUksRUFBRSxZQURSO0FBRUVXLElBQUFBLEdBQUcsRUFBRTtBQUZQLEdBTFUsRUFTVjtBQUNFWCxJQUFBQSxJQUFJLEVBQUUsWUFEUjtBQUVFVyxJQUFBQSxHQUFHLEVBQUU7QUFGUCxHQVRVLENBVEM7QUF1QmJFLEVBQUFBLElBQUksRUFBRTtBQXZCTyxDQUFmO0FBMEJPLElBQU1DLEtBQUssR0FBR1osUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFkOztBQUNQUyxLQUFLLENBQUNYLElBQU4sbUNBQ0tDLE9BQU8sQ0FBQ0QsSUFEYjtBQUVFRyxFQUFBQSxNQUFNLGtDQUNERixPQUFPLENBQUNELElBQVIsQ0FBYUcsTUFEWjtBQUVKSyxJQUFBQSxHQUFHLEVBQUU7QUFGRDtBQUZSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyVGV4dCwgSGVhZGVyVGV4dFByb3BzIH0gZnJvbSBcIi4vSGVhZGVyVGV4dFwiXG5pbXBvcnQgeyBTdG9yeSwgTWV0YSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL0hlYWRlclRleHQnLFxuICBjb21wb25lbnQ6IEhlYWRlclRleHQsXG4gIGFyZ1R5cGVzOiB7XG4gICAgLy8gdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImRlZmF1bHRcIiwgXCJoZWFkZXJcIiwgXCJidXR0b25cIiwgXCJzcGVjaWFsXCJdIH19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgSGVhZGVyVGV4dCcsXG4gICAgYmFja2dyb3VuZHM6IHtcbiAgICAgIGRlZmF1bHQ6ICdkYXJrIGJhY2tncm91bmQnLFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZGFyayBiYWNrZ3JvdW5kJyxcbiAgICAgICAgICB2YWx1ZTogJyMwMDAnLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0sXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8SGVhZGVyVGV4dFByb3BzPiA9IChhcmdzKSA9PiA8SGVhZGVyVGV4dCB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICBzdHlsZXM6IHtcbiAgICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICBidXR0b25UZXh0OiBcIkJvb2sgYSBkZW1vXCIsXG4gICAgZm9ybVBsYWNlaG9sZGVyOiBcIldvcmsgZW1haWxcIixcbiAgICBjYXNlVGV4dDogXCJTUCBBcmNoaXRlY3R1dGVzXCIsXG4gICAgdXJsOiBcIi9oZWFkZXJ0ZXh0XCIsXG4gIH0sXG4gIHRpdGxlOiBcIlNvbWUgYW1hemluZyB0aXRsZVwiLFxuICBicmVhZGNydW1iOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJicmVhZGNydW1iXCIsXG4gICAgICB1cmw6IFwiL2JyZWFkMVwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJyZWFkY3J1bWJcIixcbiAgICAgIHVybDogXCIvYnJlYWQyXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiYnJlYWRjcnVtYlwiLFxuICAgICAgdXJsOiBcIi9icmVhZDNcIlxuICAgIH1cbiAgXSxcbiAgdGV4dDogXCJEb25lYyBpZCBlbGl0IG5vbiBtaSBwb3J0YSBncmF2aWRhIGF0IGVnZXQgbWV0dXMuIE1hZWNlbmFzIGZhdWNpYnVzIG1vbGxpcyBpbnRlcmR1bS4gQWVuZWFuIGV1IGxlbyBxdWFtLiBQZWxsZW50ZXNxdWUgb3JuYXJlIHNlbSBsYWNpbmlhIHF1YW0gdmVuZW5hdGlzIHZlc3RpYnVsdW0uXCJcbn1cblxuZXhwb3J0IGNvbnN0IE5vVVJMID0gVGVtcGxhdGUuYmluZCh7fSlcbk5vVVJMLmFyZ3MgPSB7XG4gIC4uLkRlZmF1bHQuYXJncyxcbiAgc3R5bGVzOiB7XG4gICAgLi4uRGVmYXVsdC5hcmdzLnN0eWxlcyxcbiAgICB1cmw6IG51bGxcbiAgfVxufSJdfQ==