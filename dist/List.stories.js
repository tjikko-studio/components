"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CTAList = exports.FAQList = exports.default = void 0;

var _List = require("./List");

var _FAQ = require("./blocks/FAQ");

var _CTA = require("./blocks/CTA");

var _default = {
  title: 'Tjikko/List',
  component: _List.List,
  argTypes: {},
  parameters: {
    componentSubtitle: 'List'
  }
};
exports.default = _default;

var Template = _ref => {
  var {
    Component,
    items
  } = _ref;
  return /*#__PURE__*/React.createElement(_List.List, {
    Component: Component,
    items: items
  });
};

var FAQList = Template.bind({});
exports.FAQList = FAQList;
FAQList.args = {
  Component: _FAQ.FAQ,
  items: [{
    question: "Quite a long question  aenean lacinia bibendum nulla sed consectetur maecenas sed diam eget risus.",
    answer: "Quite a long answer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.  Vestibulum id ligula porta felis euismod semper. Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui."
  }, {
    question: "Question 2",
    answer: "Answer 2"
  }]
};
var CTAList = Template.bind({});
exports.CTAList = CTAList;
CTAList.args = {
  Component: _CTA.CTA,
  items: [{
    title: 'CTA title',
    body: 'CTA body',
    ctas: [{
      label: 'link label',
      link: 'https://perdu.com'
    }]
  }, {
    title: 'Second CTA',
    body: 'Description',
    ctas: [{
      label: 'Call To Action',
      link: 'https://perdu.com'
    }]
  }]
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvTGlzdC5zdG9yaWVzLnRzeCJdLCJuYW1lcyI6WyJ0aXRsZSIsImNvbXBvbmVudCIsIkxpc3QiLCJhcmdUeXBlcyIsInBhcmFtZXRlcnMiLCJjb21wb25lbnRTdWJ0aXRsZSIsIlRlbXBsYXRlIiwiQ29tcG9uZW50IiwiaXRlbXMiLCJGQVFMaXN0IiwiYmluZCIsImFyZ3MiLCJGQVEiLCJxdWVzdGlvbiIsImFuc3dlciIsIkNUQUxpc3QiLCJDVEEiLCJib2R5IiwiY3RhcyIsImxhYmVsIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztlQUdlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxhQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsVUFGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUUsRUFIRztBQU1iQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUU7QUFEVDtBQU5DLEM7OztBQVdmLElBQU1DLFFBQVEsR0FBRztBQUFBLE1BQUM7QUFBQ0MsSUFBQUEsU0FBRDtBQUFZQyxJQUFBQTtBQUFaLEdBQUQ7QUFBQSxzQkFBd0Isb0JBQUMsVUFBRDtBQUFNLElBQUEsU0FBUyxFQUFFRCxTQUFqQjtBQUE0QixJQUFBLEtBQUssRUFBRUM7QUFBbkMsSUFBeEI7QUFBQSxDQUFqQjs7QUFFTyxJQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjLEVBQWQsQ0FBaEI7O0FBQ1BELE9BQU8sQ0FBQ0UsSUFBUixHQUFlO0FBQ2JKLEVBQUFBLFNBQVMsRUFBRUssUUFERTtBQUViSixFQUFBQSxLQUFLLEVBQUUsQ0FBQztBQUNOSyxJQUFBQSxRQUFRLEVBQUUsb0dBREo7QUFFTkMsSUFBQUEsTUFBTSxFQUFFO0FBRkYsR0FBRCxFQUdKO0FBQ0RELElBQUFBLFFBQVEsRUFBRSxZQURUO0FBRURDLElBQUFBLE1BQU0sRUFBRTtBQUZQLEdBSEk7QUFGTSxDQUFmO0FBV08sSUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNJLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQSyxPQUFPLENBQUNKLElBQVIsR0FBZTtBQUNiSixFQUFBQSxTQUFTLEVBQUVTLFFBREU7QUFFYlIsRUFBQUEsS0FBSyxFQUFFLENBQUM7QUFDTlIsSUFBQUEsS0FBSyxFQUFFLFdBREQ7QUFFTmlCLElBQUFBLElBQUksRUFBRSxVQUZBO0FBR05DLElBQUFBLElBQUksRUFBRSxDQUFDO0FBQ0xDLE1BQUFBLEtBQUssRUFBRSxZQURGO0FBRUxDLE1BQUFBLElBQUksRUFBRTtBQUZELEtBQUQ7QUFIQSxHQUFELEVBT0o7QUFDRHBCLElBQUFBLEtBQUssRUFBRSxZQUROO0FBRURpQixJQUFBQSxJQUFJLEVBQUUsYUFGTDtBQUdEQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUNMQyxNQUFBQSxLQUFLLEVBQUUsZ0JBREY7QUFFTEMsTUFBQUEsSUFBSSxFQUFFO0FBRkQsS0FBRDtBQUhMLEdBUEk7QUFGTSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMaXN0fSBmcm9tICcuL0xpc3QnXG5pbXBvcnQge0ZBUSwgRkFRUHJvcHN9IGZyb20gXCIuL2Jsb2Nrcy9GQVFcIlxuaW1wb3J0IHtDVEEsIENUQVByb3BzfSBmcm9tIFwiLi9ibG9ja3MvQ1RBXCJcbmltcG9ydCB7U3RvcnksIE1ldGF9IGZyb20gJ0BzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRpdGxlOiAnVGppa2tvL0xpc3QnLFxuICBjb21wb25lbnQ6IExpc3QsXG4gIGFyZ1R5cGVzOiB7XG5cbiAgfSxcbiAgcGFyYW1ldGVyczoge1xuICAgIGNvbXBvbmVudFN1YnRpdGxlOiAnTGlzdCdcbiAgfVxufSBhcyBNZXRhXG5cbmNvbnN0IFRlbXBsYXRlID0gKHtDb21wb25lbnQsIGl0ZW1zfSkgPT4gPExpc3QgQ29tcG9uZW50PXtDb21wb25lbnR9IGl0ZW1zPXtpdGVtc30gLz5cblxuZXhwb3J0IGNvbnN0IEZBUUxpc3QgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRkFRTGlzdC5hcmdzID0ge1xuICBDb21wb25lbnQ6IEZBUSxcbiAgaXRlbXM6IFt7XG4gICAgcXVlc3Rpb246IFwiUXVpdGUgYSBsb25nIHF1ZXN0aW9uICBhZW5lYW4gbGFjaW5pYSBiaWJlbmR1bSBudWxsYSBzZWQgY29uc2VjdGV0dXIgbWFlY2VuYXMgc2VkIGRpYW0gZWdldCByaXN1cy5cIixcbiAgICBhbnN3ZXI6IFwiUXVpdGUgYSBsb25nIGFuc3dlciBwb3N1ZXJlIGVyYXQgYSBhbnRlIHZlbmVuYXRpcyBkYXBpYnVzIHBvc3VlcmUgdmVsaXQgYWxpcXVldC4gTnVsbGEgdml0YWUgZWxpdCBsaWJlcm8sIGEgcGhhcmV0cmEgYXVndWUuIFZpdmFtdXMgc2FnaXR0aXMgbGFjdXMgdmVsIGF1Z3VlIGxhb3JlZXQgcnV0cnVtIGZhdWNpYnVzIGRvbG9yIGF1Y3Rvci4gQ3VyYWJpdHVyIGJsYW5kaXQgdGVtcHVzIHBvcnR0aXRvci4gIFZlc3RpYnVsdW0gaWQgbGlndWxhIHBvcnRhIGZlbGlzIGV1aXNtb2Qgc2VtcGVyLiBEb25lYyBzZWQgb2RpbyBkdWkuIE51bGxhIHZpdGFlIGVsaXQgbGliZXJvLCBhIHBoYXJldHJhIGF1Z3VlLiBEb25lYyBzZWQgb2RpbyBkdWkuXCJcbiAgfSwge1xuICAgIHF1ZXN0aW9uOiBcIlF1ZXN0aW9uIDJcIixcbiAgICBhbnN3ZXI6IFwiQW5zd2VyIDJcIlxuICB9XVxufVxuXG5leHBvcnQgY29uc3QgQ1RBTGlzdCA9IFRlbXBsYXRlLmJpbmQoe30pXG5DVEFMaXN0LmFyZ3MgPSB7XG4gIENvbXBvbmVudDogQ1RBLFxuICBpdGVtczogW3tcbiAgICB0aXRsZTogJ0NUQSB0aXRsZScsXG4gICAgYm9keTogJ0NUQSBib2R5JyxcbiAgICBjdGFzOiBbe1xuICAgICAgbGFiZWw6ICdsaW5rIGxhYmVsJyxcbiAgICAgIGxpbms6ICdodHRwczovL3BlcmR1LmNvbSdcbiAgICB9XVxuICB9LCB7XG4gICAgdGl0bGU6ICdTZWNvbmQgQ1RBJyxcbiAgICBib2R5OiAnRGVzY3JpcHRpb24nLFxuICAgIGN0YXM6IFt7XG4gICAgICBsYWJlbDogJ0NhbGwgVG8gQWN0aW9uJyxcbiAgICAgIGxpbms6ICdodHRwczovL3BlcmR1LmNvbSdcbiAgICB9XVxuICB9XVxufVxuIl19