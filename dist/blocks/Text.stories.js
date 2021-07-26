"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _Text = require("./Text");

var _default = {
  title: 'Tjikko/blocks/Text',
  component: _Text.Text,
  argTypes: {// type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The Text block',
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

var Template = args => /*#__PURE__*/React.createElement(_Text.Text, args);

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  className: 'w-80 h-52',
  headerText: '01. HEADING',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvYmxvY2tzL1RleHQuc3Rvcmllcy50c3giXSwibmFtZXMiOlsidGl0bGUiLCJjb21wb25lbnQiLCJUZXh0IiwiYXJnVHlwZXMiLCJwYXJhbWV0ZXJzIiwiY29tcG9uZW50U3VidGl0bGUiLCJiYWNrZ3JvdW5kcyIsImRlZmF1bHQiLCJ2YWx1ZXMiLCJuYW1lIiwidmFsdWUiLCJUZW1wbGF0ZSIsImFyZ3MiLCJEZWZhdWx0IiwiYmluZCIsImNsYXNzTmFtZSIsImhlYWRlclRleHQiLCJwYXJhZ3JhcGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7ZUFHZTtBQUNiQSxFQUFBQSxLQUFLLEVBQUUsb0JBRE07QUFFYkMsRUFBQUEsU0FBUyxFQUFFQyxVQUZFO0FBR2JDLEVBQUFBLFFBQVEsRUFBRSxDQUNSO0FBRFEsR0FIRztBQU1iQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsaUJBQWlCLEVBQUUsZ0JBRFQ7QUFFVkMsSUFBQUEsV0FBVyxFQUFFO0FBQ1hDLE1BQUFBLE9BQU8sRUFBRSxpQkFERTtBQUVYQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTjtBQUNFQyxRQUFBQSxJQUFJLEVBQUUsaUJBRFI7QUFFRUMsUUFBQUEsS0FBSyxFQUFFO0FBRlQsT0FETTtBQUZHO0FBRkg7QUFOQyxDOzs7QUFvQmYsSUFBTUMsUUFBMEIsR0FBSUMsSUFBRCxpQkFBVSxvQkFBQyxVQUFELEVBQVVBLElBQVYsQ0FBN0M7O0FBRU8sSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNHLElBQVQsQ0FBYyxFQUFkLENBQWhCOztBQUNQRCxPQUFPLENBQUNELElBQVIsR0FBZTtBQUNiRyxFQUFBQSxTQUFTLEVBQUUsV0FERTtBQUViQyxFQUFBQSxVQUFVLEVBQUUsYUFGQztBQUdiQyxFQUFBQSxTQUFTLEVBQUU7QUFIRSxDQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0LCBUZXh0UHJvcHN9IGZyb20gXCIuL1RleHRcIlxuaW1wb3J0IHtTdG9yeSwgTWV0YX0gZnJvbSAnQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTAnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdGl0bGU6ICdUamlra28vYmxvY2tzL1RleHQnLFxuICBjb21wb25lbnQ6IFRleHQsXG4gIGFyZ1R5cGVzOiB7XG4gICAgLy8gdHlwZTogeyBjb250cm9sOiB7IHR5cGU6IFwic2VsZWN0XCIsIG9wdGlvbnM6IFtcImRlZmF1bHRcIiwgXCJoZWFkZXJcIiwgXCJidXR0b25cIiwgXCJzcGVjaWFsXCJdIH19LFxuICB9LFxuICBwYXJhbWV0ZXJzOiB7XG4gICAgY29tcG9uZW50U3VidGl0bGU6ICdUaGUgVGV4dCBibG9jaycsXG4gICAgYmFja2dyb3VuZHM6IHtcbiAgICAgIGRlZmF1bHQ6ICdkYXJrIGJhY2tncm91bmQnLFxuICAgICAgdmFsdWVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAnZGFyayBiYWNrZ3JvdW5kJyxcbiAgICAgICAgICB2YWx1ZTogJyMwMDAnLFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0sXG4gIH1cbn0gYXMgTWV0YVxuXG5jb25zdCBUZW1wbGF0ZTogU3Rvcnk8VGV4dFByb3BzPiA9IChhcmdzKSA9PiA8VGV4dCB7Li4uYXJnc30gLz5cblxuZXhwb3J0IGNvbnN0IERlZmF1bHQgPSBUZW1wbGF0ZS5iaW5kKHt9KVxuRGVmYXVsdC5hcmdzID0ge1xuICBjbGFzc05hbWU6ICd3LTgwIGgtNTInLFxuICBoZWFkZXJUZXh0OiAnMDEuIEhFQURJTkcnLFxuICBwYXJhZ3JhcGg6ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2lnIGVsaXQgZWQgZG8gZWx1c21vZCB0ZW1wb3IgaW5jaWRlZHVudCB1dCBsYWJvcnJlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEnXG59XG4iXX0=