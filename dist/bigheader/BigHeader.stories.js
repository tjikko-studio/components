"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BigHeader = require("./BigHeader");

var _default = {
  title: 'Tjikko/BigHeader',
  component: _BigHeader.BigHeader,
  argTypes: {
    bgtype: {
      control: {
        type: "select",
        options: ["image", "video"]
      }
    }
  },
  parameters: {
    componentSubtitle: 'The BigHeader'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_BigHeader.BigHeader, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  bgtype: "video",
  headerinfo: {
    styles: {
      type: "default",
      buttonText: "Book a demo",
      formPlaceholder: "Work email",
      caseText: "SP Architectutes",
      url: "/headertext"
    },
    title: "Real-time 3D experiences enabling decision-makers",
    breadcrumb: [{
      name: "breadcrumb",
      url: "/bread1"
    }, {
      name: "breadcrumb",
      url: "/bread2"
    }],
    text: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmlnaGVhZGVyL0JpZ0hlYWRlci5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkJpZ0hlYWRlciIsImFyZ1R5cGVzIiwiYmd0eXBlIiwiY29udHJvbCIsInR5cGUiLCJvcHRpb25zIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJoZWFkZXJpbmZvIiwic3R5bGVzIiwiYnV0dG9uVGV4dCIsImZvcm1QbGFjZWhvbGRlciIsImNhc2VUZXh0IiwidXJsIiwiYnJlYWRjcnVtYiIsIm5hbWUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O2VBR2U7QUFDYkEsRUFBQUEsS0FBSyxFQUFFLGtCQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsb0JBRkU7QUFHYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLFFBQUFBLE9BQU8sRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWO0FBQTNCO0FBQVg7QUFEQSxHQUhHO0FBTWJDLEVBQUFBLFVBQVUsRUFBRTtBQUNWQyxJQUFBQSxpQkFBaUIsRUFBRTtBQURUO0FBTkMsQzs7O0FBV2YsSUFBTUMsUUFBK0IsR0FBSUMsSUFBRCxpQkFBVSxvQkFBQyxvQkFBRCxFQUFlQSxJQUFmLENBQWxEOztBQUVPLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFoQjs7QUFDUEQsT0FBTyxDQUFDRCxJQUFSLEdBQWU7QUFDYlAsRUFBQUEsTUFBTSxFQUFFLE9BREs7QUFFYlUsRUFBQUEsVUFBVSxFQUFFO0FBQ1ZDLElBQUFBLE1BQU0sRUFBRTtBQUNOVCxNQUFBQSxJQUFJLEVBQUUsU0FEQTtBQUVOVSxNQUFBQSxVQUFVLEVBQUUsYUFGTjtBQUdOQyxNQUFBQSxlQUFlLEVBQUUsWUFIWDtBQUlOQyxNQUFBQSxRQUFRLEVBQUUsa0JBSko7QUFLTkMsTUFBQUEsR0FBRyxFQUFFO0FBTEMsS0FERTtBQVFWbkIsSUFBQUEsS0FBSyxFQUFFLG1EQVJHO0FBU1ZvQixJQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFQyxNQUFBQSxJQUFJLEVBQUUsWUFEUjtBQUVFRixNQUFBQSxHQUFHLEVBQUU7QUFGUCxLQURVLEVBS1Y7QUFDRUUsTUFBQUEsSUFBSSxFQUFFLFlBRFI7QUFFRUYsTUFBQUEsR0FBRyxFQUFFO0FBRlAsS0FMVSxDQVRGO0FBbUJWRyxJQUFBQSxJQUFJLEVBQUU7QUFuQkk7QUFGQyxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmlnSGVhZGVyLCBCaWdIZWFkZXJQcm9wcyB9IGZyb20gXCIuL0JpZ0hlYWRlclwiXG5pbXBvcnQgeyBTdG9yeSwgTWV0YSB9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL0JpZ0hlYWRlcicsXG4gIGNvbXBvbmVudDogQmlnSGVhZGVyLFxuICBhcmdUeXBlczoge1xuICAgIGJndHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImltYWdlXCIsIFwidmlkZW9cIl0gfX0sXG4gIH0sXG4gIHBhcmFtZXRlcnM6IHtcbiAgICBjb21wb25lbnRTdWJ0aXRsZTogJ1RoZSBCaWdIZWFkZXInXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8QmlnSGVhZGVyUHJvcHM+ID0gKGFyZ3MpID0+IDxCaWdIZWFkZXIgey4uLmFyZ3N9IC8+XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0ID0gVGVtcGxhdGUuYmluZCh7fSlcbkRlZmF1bHQuYXJncyA9IHtcbiAgYmd0eXBlOiBcInZpZGVvXCIsXG4gIGhlYWRlcmluZm86IHtcbiAgICBzdHlsZXM6IHtcbiAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgYnV0dG9uVGV4dDogXCJCb29rIGEgZGVtb1wiLFxuICAgICAgZm9ybVBsYWNlaG9sZGVyOiBcIldvcmsgZW1haWxcIixcbiAgICAgIGNhc2VUZXh0OiBcIlNQIEFyY2hpdGVjdHV0ZXNcIixcbiAgICAgIHVybDogXCIvaGVhZGVydGV4dFwiLFxuICAgIH0sXG4gICAgdGl0bGU6IFwiUmVhbC10aW1lIDNEIGV4cGVyaWVuY2VzIGVuYWJsaW5nIGRlY2lzaW9uLW1ha2Vyc1wiLFxuICAgIGJyZWFkY3J1bWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJicmVhZGNydW1iXCIsXG4gICAgICAgIHVybDogXCIvYnJlYWQxXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiYnJlYWRjcnVtYlwiLFxuICAgICAgICB1cmw6IFwiL2JyZWFkMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICB0ZXh0OiBcIkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgZmF1Y2lidXMgbW9sbGlzIGludGVyZHVtLiBBZW5lYW4gZXUgbGVvIHF1YW0uIFBlbGxlbnRlc3F1ZSBvcm5hcmUgc2VtIGxhY2luaWEgcXVhbSB2ZW5lbmF0aXMgdmVzdGlidWx1bS5cIlxuICB9XG59XG5cblxuIl19