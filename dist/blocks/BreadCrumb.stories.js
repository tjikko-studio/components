"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _BreadCrumb = require("./BreadCrumb");

var _default = {
  title: 'Tjikko/blocks/BreadCrumb',
  component: _BreadCrumb.BreadCrumb,
  parameters: {
    componentSubtitle: 'The BreadCrumb'
  }
};
exports.default = _default;

var Template = _ref => {
  var {
    crumbs
  } = _ref;
  return /*#__PURE__*/React.createElement(_BreadCrumb.BreadCrumb, {
    crumbs: crumbs
  });
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  crumbs: [{
    name: 'breadcrumb',
    url: '/bread1'
  }, {
    name: 'breadcrumb',
    url: '/bread2'
  }, {
    name: 'breadcrumb',
    url: '/bread3'
  }]
};