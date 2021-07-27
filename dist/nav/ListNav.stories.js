"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiData = exports.SingleData = exports.default = void 0;

var _ListNav = require("./ListNav");

var _default = {
  title: 'Tjikko/nav/ListNav',
  component: _ListNav.ListNav,
  argTypes: {
    styles: {
      options: ['flat', 'elevated'],
      control: {
        type: 'select'
      }
    }
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
};
exports.default = _default;

var Template = args => /*#__PURE__*/React.createElement(_ListNav.ListNav, args);

var SingleData = Template.bind({});
exports.SingleData = SingleData;
SingleData.args = {
  linkList: [{
    groupCaption: 'Group 01',
    groups: [{
      name: 'Link 01',
      url: '/linkURL'
    }, {
      name: 'Link 02',
      url: '/linkURL'
    }, {
      name: 'Link 03',
      url: '/linkURL',
      type: 'button'
    }]
  }]
};
var MultiData = Template.bind({});
exports.MultiData = MultiData;
MultiData.args = {
  linkList: [{
    groupCaption: 'Group 01',
    groups: [{
      name: 'Link 01',
      url: '/linkURL'
    }, {
      name: 'Link 02',
      url: '/linkURL'
    }, {
      name: 'Link 03',
      url: '/linkURL',
      type: 'button'
    }]
  }, {
    groupCaption: 'Group 02',
    groups: [{
      name: 'Link 01',
      url: '/linkURL'
    }, {
      name: 'Link 02',
      url: '/linkURL'
    }, {
      name: 'Link 03',
      url: '/linkURL'
    }]
  }, {
    groupCaption: 'Group 03',
    groups: [{
      name: 'Link 01',
      url: '/linkURL'
    }, {
      name: 'Link 02',
      url: '/linkURL'
    }, {
      name: 'Link 03',
      url: '/linkURL'
    }]
  }]
};