"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoURL = exports.Default = exports.default = void 0;

var _Header = require("./Header");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  title: 'Tjikko/blocks/Header',
  component: _Header.Header,
  argTypes: {// type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The Header',
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

var Template = args => /*#__PURE__*/React.createElement(_Header.Header, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  styles: {
    type: "default",
    buttonText: "Book a demo",
    formPlaceholder: "Work email",
    caseText: "SP Architectutes",
    url: "/Header"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0hlYWRlci5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkhlYWRlciIsImFyZ1R5cGVzIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiYmFja2dyb3VuZHMiLCJkZWZhdWx0IiwidmFsdWVzIiwibmFtZSIsInZhbHVlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJzdHlsZXMiLCJ0eXBlIiwiYnV0dG9uVGV4dCIsImZvcm1QbGFjZWhvbGRlciIsImNhc2VUZXh0IiwidXJsIiwiYnJlYWRjcnVtYiIsInRleHQiLCJOb1VSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7OztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxzQkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLGNBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFEUSxHQUhHO0FBTWJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxpQkFBaUIsRUFBRSxZQURUO0FBRVZDLElBQUFBLFdBQVcsRUFBRTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsaUJBREU7QUFFWEMsTUFBQUEsTUFBTSxFQUFFLENBQ047QUFDRUMsUUFBQUEsSUFBSSxFQUFFLGlCQURSO0FBRUVDLFFBQUFBLEtBQUssRUFBRTtBQUZULE9BRE07QUFGRztBQUZIO0FBTkMsQzs7O0FBb0JmLElBQU1DLFFBQTRCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsY0FBRCxFQUFZQSxJQUFaLENBQS9DOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYkcsRUFBQUEsTUFBTSxFQUFFO0FBQ05DLElBQUFBLElBQUksRUFBRSxTQURBO0FBRU5DLElBQUFBLFVBQVUsRUFBRSxhQUZOO0FBR05DLElBQUFBLGVBQWUsRUFBRSxZQUhYO0FBSU5DLElBQUFBLFFBQVEsRUFBRSxrQkFKSjtBQUtOQyxJQUFBQSxHQUFHLEVBQUU7QUFMQyxHQURLO0FBUWJwQixFQUFBQSxLQUFLLEVBQUUsb0JBUk07QUFTYnFCLEVBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VaLElBQUFBLElBQUksRUFBRSxZQURSO0FBRUVXLElBQUFBLEdBQUcsRUFBRTtBQUZQLEdBRFUsRUFLVjtBQUNFWCxJQUFBQSxJQUFJLEVBQUUsWUFEUjtBQUVFVyxJQUFBQSxHQUFHLEVBQUU7QUFGUCxHQUxVLEVBU1Y7QUFDRVgsSUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRVcsSUFBQUEsR0FBRyxFQUFFO0FBRlAsR0FUVSxDQVRDO0FBdUJiRSxFQUFBQSxJQUFJLEVBQUU7QUF2Qk8sQ0FBZjtBQTBCTyxJQUFNQyxLQUFLLEdBQUdaLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBZDs7QUFDUFMsS0FBSyxDQUFDWCxJQUFOLG1DQUNLQyxPQUFPLENBQUNELElBRGI7QUFFRUcsRUFBQUEsTUFBTSxrQ0FDREYsT0FBTyxDQUFDRCxJQUFSLENBQWFHLE1BRFo7QUFFSkssSUFBQUEsR0FBRyxFQUFFO0FBRkQ7QUFGUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SGVhZGVyLCBIZWFkZXJQcm9wc30gZnJvbSBcIi4vSGVhZGVyXCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL2Jsb2Nrcy9IZWFkZXInLFxuICBjb21wb25lbnQ6IEhlYWRlcixcbiAgYXJnVHlwZXM6IHtcbiAgICAvLyB0eXBlOiB7IGNvbnRyb2w6IHsgdHlwZTogXCJzZWxlY3RcIiwgb3B0aW9uczogW1wiZGVmYXVsdFwiLCBcImhlYWRlclwiLCBcImJ1dHRvblwiLCBcInNwZWNpYWxcIl0gfX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBIZWFkZXInLFxuICAgIGJhY2tncm91bmRzOiB7XG4gICAgICBkZWZhdWx0OiAnZGFyayBiYWNrZ3JvdW5kJyxcbiAgICAgIHZhbHVlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2RhcmsgYmFja2dyb3VuZCcsXG4gICAgICAgICAgdmFsdWU6ICcjMDAwJyxcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICB9LFxuICB9XG59IGFzIE1ldGFcblxuY29uc3QgVGVtcGxhdGU6IFN0b3J5PEhlYWRlclByb3BzPiA9IChhcmdzKSA9PiA8SGVhZGVyIHsuLi5hcmdzfSAvPlxuXG5leHBvcnQgY29uc3QgRGVmYXVsdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5EZWZhdWx0LmFyZ3MgPSB7XG4gIHN0eWxlczoge1xuICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgIGJ1dHRvblRleHQ6IFwiQm9vayBhIGRlbW9cIixcbiAgICBmb3JtUGxhY2Vob2xkZXI6IFwiV29yayBlbWFpbFwiLFxuICAgIGNhc2VUZXh0OiBcIlNQIEFyY2hpdGVjdHV0ZXNcIixcbiAgICB1cmw6IFwiL0hlYWRlclwiLFxuICB9LFxuICB0aXRsZTogXCJTb21lIGFtYXppbmcgdGl0bGVcIixcbiAgYnJlYWRjcnVtYjogW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiYnJlYWRjcnVtYlwiLFxuICAgICAgdXJsOiBcIi9icmVhZDFcIlxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJicmVhZGNydW1iXCIsXG4gICAgICB1cmw6IFwiL2JyZWFkMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJyZWFkY3J1bWJcIixcbiAgICAgIHVybDogXCIvYnJlYWQzXCJcbiAgICB9XG4gIF0sXG4gIHRleHQ6IFwiRG9uZWMgaWQgZWxpdCBub24gbWkgcG9ydGEgZ3JhdmlkYSBhdCBlZ2V0IG1ldHVzLiBNYWVjZW5hcyBmYXVjaWJ1cyBtb2xsaXMgaW50ZXJkdW0uIEFlbmVhbiBldSBsZW8gcXVhbS4gUGVsbGVudGVzcXVlIG9ybmFyZSBzZW0gbGFjaW5pYSBxdWFtIHZlbmVuYXRpcyB2ZXN0aWJ1bHVtLlwiXG59XG5cbmV4cG9ydCBjb25zdCBOb1VSTCA9IFRlbXBsYXRlLmJpbmQoe30pXG5Ob1VSTC5hcmdzID0ge1xuICAuLi5EZWZhdWx0LmFyZ3MsXG4gIHN0eWxlczoge1xuICAgIC4uLkRlZmF1bHQuYXJncy5zdHlsZXMsXG4gICAgdXJsOiBudWxsXG4gIH1cbn1cbiJdfQ==