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
      options: ["image", "video"],
      control: {
        type: "select"
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