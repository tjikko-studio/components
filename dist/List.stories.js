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