"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BigHeader = require("./BigHeader");

var _default = {
  title: 'Tjikko/blocks/BigHeader',
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
  bgVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  headerInfo: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL0JpZ0hlYWRlci5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkJpZ0hlYWRlciIsImFyZ1R5cGVzIiwiYmd0eXBlIiwiY29udHJvbCIsInR5cGUiLCJvcHRpb25zIiwicGFyYW1ldGVycyIsImNvbXBvbmVudFN1YnRpdGxlIiwiVGVtcGxhdGUiLCJhcmdzIiwiRGVmYXVsdCIsImJpbmQiLCJiZ1ZpZGVvIiwiaGVhZGVySW5mbyIsInN0eWxlcyIsImJ1dHRvblRleHQiLCJmb3JtUGxhY2Vob2xkZXIiLCJjYXNlVGV4dCIsInVybCIsImJyZWFkY3J1bWIiLCJuYW1lIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSx5QkFETTtBQUViQyxFQUFBQSxTQUFTLEVBQUVDLG9CQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFO0FBQUNDLFFBQUFBLElBQUksRUFBRSxRQUFQO0FBQWlCQyxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVjtBQUExQjtBQUFWO0FBREEsR0FIRztBQU1iQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQU5DLEM7OztBQVdmLElBQU1DLFFBQStCLEdBQUlDLElBQUQsaUJBQVUsb0JBQUMsb0JBQUQsRUFBZUEsSUFBZixDQUFsRDs7QUFFTyxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0csSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0QsSUFBUixHQUFlO0FBQ2JQLEVBQUFBLE1BQU0sRUFBRSxPQURLO0FBRWJVLEVBQUFBLE9BQU8sRUFBRSxtRkFGSTtBQUdiQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsTUFBTSxFQUFFO0FBQ05WLE1BQUFBLElBQUksRUFBRSxTQURBO0FBRU5XLE1BQUFBLFVBQVUsRUFBRSxhQUZOO0FBR05DLE1BQUFBLGVBQWUsRUFBRSxZQUhYO0FBSU5DLE1BQUFBLFFBQVEsRUFBRSxrQkFKSjtBQUtOQyxNQUFBQSxHQUFHLEVBQUU7QUFMQyxLQURFO0FBUVZwQixJQUFBQSxLQUFLLEVBQUUsbURBUkc7QUFTVnFCLElBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VDLE1BQUFBLElBQUksRUFBRSxZQURSO0FBRUVGLE1BQUFBLEdBQUcsRUFBRTtBQUZQLEtBRFUsRUFLVjtBQUNFRSxNQUFBQSxJQUFJLEVBQUUsWUFEUjtBQUVFRixNQUFBQSxHQUFHLEVBQUU7QUFGUCxLQUxVLENBVEY7QUFtQlZHLElBQUFBLElBQUksRUFBRTtBQW5CSTtBQUhDLENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JpZ0hlYWRlciwgQmlnSGVhZGVyUHJvcHN9IGZyb20gXCIuL0JpZ0hlYWRlclwiXG5pbXBvcnQge1N0b3J5LCBNZXRhfSBmcm9tICdAc3Rvcnlib29rL3JlYWN0L3R5cGVzLTYtMCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0aXRsZTogJ1RqaWtrby9ibG9ja3MvQmlnSGVhZGVyJyxcbiAgY29tcG9uZW50OiBCaWdIZWFkZXIsXG4gIGFyZ1R5cGVzOiB7XG4gICAgYmd0eXBlOiB7Y29udHJvbDoge3R5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImltYWdlXCIsIFwidmlkZW9cIl19fSxcbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnVGhlIEJpZ0hlYWRlcidcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlOiBTdG9yeTxCaWdIZWFkZXJQcm9wcz4gPSAoYXJncykgPT4gPEJpZ0hlYWRlciB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICBiZ3R5cGU6IFwidmlkZW9cIixcbiAgYmdWaWRlbzogJ2h0dHA6Ly9jb21tb25kYXRhc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9ndHYtdmlkZW9zLWJ1Y2tldC9zYW1wbGUvQmlnQnVja0J1bm55Lm1wNCcsXG4gIGhlYWRlckluZm86IHtcbiAgICBzdHlsZXM6IHtcbiAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgYnV0dG9uVGV4dDogXCJCb29rIGEgZGVtb1wiLFxuICAgICAgZm9ybVBsYWNlaG9sZGVyOiBcIldvcmsgZW1haWxcIixcbiAgICAgIGNhc2VUZXh0OiBcIlNQIEFyY2hpdGVjdHV0ZXNcIixcbiAgICAgIHVybDogXCIvaGVhZGVydGV4dFwiLFxuICAgIH0sXG4gICAgdGl0bGU6IFwiUmVhbC10aW1lIDNEIGV4cGVyaWVuY2VzIGVuYWJsaW5nIGRlY2lzaW9uLW1ha2Vyc1wiLFxuICAgIGJyZWFkY3J1bWI6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJicmVhZGNydW1iXCIsXG4gICAgICAgIHVybDogXCIvYnJlYWQxXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiYnJlYWRjcnVtYlwiLFxuICAgICAgICB1cmw6IFwiL2JyZWFkMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICB0ZXh0OiBcIkRvbmVjIGlkIGVsaXQgbm9uIG1pIHBvcnRhIGdyYXZpZGEgYXQgZWdldCBtZXR1cy4gTWFlY2VuYXMgZmF1Y2lidXMgbW9sbGlzIGludGVyZHVtLiBBZW5lYW4gZXUgbGVvIHF1YW0uIFBlbGxlbnRlc3F1ZSBvcm5hcmUgc2VtIGxhY2luaWEgcXVhbSB2ZW5lbmF0aXMgdmVzdGlidWx1bS5cIlxuICB9XG59XG4iXX0=