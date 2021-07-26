"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MobileMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavItem = require("./NavItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var MobileMenu = _ref => {
  var {
    demoButtonText = 'Free Demo',
    demoUrl = '#',
    menuData = [],
    styles = 'black',
    languageList = {}
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "bg-gray-900\n                ".concat(styles == 'transWhite' && 'bg-opacity-10', "\n            ")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex justify-between pb-5 pt-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-2"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    className: "py-3.5 px-3.5 uppercase bg-brand-400 rounded-lg tracking-wider leading-3 text-sm font-semibold"
  }, demoButtonText)), /*#__PURE__*/_react.default.createElement(_NavItem.NavItem, {
    className: "mr-7",
    styles: "default/white",
    caption: languageList.current ? languageList.current : 'En',
    submenu: languageList.submenu
  })), /*#__PURE__*/_react.default.createElement("hr", {
    className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
  }), menuData.map((menu, menuIndex) => {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: menuIndex
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "font-borda uppercase text-gray-50 text-lg tracking-widest pl-6 pt-6 "
    }, menu.submenu == null ? /*#__PURE__*/_react.default.createElement("a", {
      href: menu.captionLink
    }, menu.caption) : menu.caption), /*#__PURE__*/_react.default.createElement("div", null, menu.submenu == null ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null) : /*#__PURE__*/_react.default.createElement("div", {
      className: "grid grid-cols-2"
    }, menu.submenu.map((group, groupIndex) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: groupIndex
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "text-gray-100 font-semibold tracking-wider text-sm pl-6 pt-5"
      }, group.groupCaption), group.groups.map((item, itemIndex) => {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "px-6 pt-5 text-gray-100",
          key: itemIndex
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: "\n                                                                                ".concat(item.type == 'button' && 'text-brand-300 hover:text-brand-600', "\n                                                                            "),
          href: item.url
        }, item.name));
      }));
    }))), menuData.length - 1 > menuIndex && /*#__PURE__*/_react.default.createElement("hr", {
      className: "mx-2 bg-opacity-10 mt-6 text-gray-400"
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "pb-20"
  }));
};

exports.MobileMenu = MobileMenu;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L01vYmlsZU1lbnUudHN4Il0sIm5hbWVzIjpbIk1vYmlsZU1lbnUiLCJkZW1vQnV0dG9uVGV4dCIsImRlbW9VcmwiLCJtZW51RGF0YSIsInN0eWxlcyIsImxhbmd1YWdlTGlzdCIsImN1cnJlbnQiLCJzdWJtZW51IiwibWFwIiwibWVudSIsIm1lbnVJbmRleCIsImNhcHRpb25MaW5rIiwiY2FwdGlvbiIsImdyb3VwIiwiZ3JvdXBJbmRleCIsImdyb3VwQ2FwdGlvbiIsImdyb3VwcyIsIml0ZW0iLCJpdGVtSW5kZXgiLCJ0eXBlIiwidXJsIiwibmFtZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBNEIsR0FBRyxRQU10QztBQUFBLE1BTnVDO0FBQzNDQyxJQUFBQSxjQUFjLEdBQUcsV0FEMEI7QUFFM0NDLElBQUFBLE9BQU8sR0FBRyxHQUZpQztBQUczQ0MsSUFBQUEsUUFBUSxHQUFHLEVBSGdDO0FBSTNDQyxJQUFBQSxNQUFNLEdBQUcsT0FKa0M7QUFLM0NDLElBQUFBLFlBQVksR0FBRztBQUw0QixHQU12QztBQUNKLHNCQUNFO0FBQ0UsSUFBQSxTQUFTLHlDQUNHRCxNQUFNLElBQUksWUFBVixJQUEwQixlQUQ3QjtBQURYLGtCQUtFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixrQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0U7QUFDRSxJQUFBLElBQUksRUFBRUYsT0FEUjtBQUVFLElBQUEsU0FBUyxFQUFDO0FBRlosS0FJR0QsY0FKSCxDQURGLENBREYsZUFTRSw2QkFBQyxnQkFBRDtBQUNFLElBQUEsU0FBUyxFQUFDLE1BRFo7QUFFRSxJQUFBLE1BQU0sRUFBQyxlQUZUO0FBR0UsSUFBQSxPQUFPLEVBQ0xJLFlBQVksQ0FBQ0MsT0FBYixHQUF1QkQsWUFBWSxDQUFDQyxPQUFwQyxHQUE4QyxJQUpsRDtBQU1FLElBQUEsT0FBTyxFQUFFRCxZQUFZLENBQUNFO0FBTnhCLElBVEYsQ0FMRixlQXVCRTtBQUFJLElBQUEsU0FBUyxFQUFDO0FBQWQsSUF2QkYsRUF5QkdKLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLENBQUNDLElBQUQsRUFBT0MsU0FBUCxLQUFxQjtBQUNqQyx3QkFDRTtBQUFLLE1BQUEsR0FBRyxFQUFFQTtBQUFWLG9CQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHRCxJQUFJLENBQUNGLE9BQUwsSUFBZ0IsSUFBaEIsZ0JBQ0M7QUFBRyxNQUFBLElBQUksRUFBRUUsSUFBSSxDQUFDRTtBQUFkLE9BQTRCRixJQUFJLENBQUNHLE9BQWpDLENBREQsR0FHQ0gsSUFBSSxDQUFDRyxPQUpULENBREYsZUFRRSwwQ0FDR0gsSUFBSSxDQUFDRixPQUFMLElBQWdCLElBQWhCLGdCQUNDLDJEQURELGdCQUdDO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNHRSxJQUFJLENBQUNGLE9BQUwsQ0FBYUMsR0FBYixDQUFpQixDQUFDSyxLQUFELEVBQVFDLFVBQVIsS0FBdUI7QUFDdkMsMEJBQ0U7QUFBSyxRQUFBLEdBQUcsRUFBRUE7QUFBVixzQkFDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsU0FDR0QsS0FBSyxDQUFDRSxZQURULENBREYsRUFJR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFSLEdBQWIsQ0FBaUIsQ0FBQ1MsSUFBRCxFQUFPQyxTQUFQLEtBQXFCO0FBQ3JDLDRCQUNFO0FBQ0UsVUFBQSxTQUFTLEVBQUMseUJBRFo7QUFFRSxVQUFBLEdBQUcsRUFBRUE7QUFGUCx3QkFJRTtBQUNFLFVBQUEsU0FBUyw4RkFDeUNELElBQUksQ0FBQ0UsSUFBTCxJQUNoRCxRQURnRCxJQUVoRCxxQ0FITyxtRkFEWDtBQU9FLFVBQUEsSUFBSSxFQUFFRixJQUFJLENBQUNHO0FBUGIsV0FTR0gsSUFBSSxDQUFDSSxJQVRSLENBSkYsQ0FERjtBQWtCRCxPQW5CQSxDQUpILENBREY7QUEyQkQsS0E1QkEsQ0FESCxDQUpKLENBUkYsRUE2Q0dsQixRQUFRLENBQUNtQixNQUFULEdBQWtCLENBQWxCLEdBQXNCWixTQUF0QixpQkFDQztBQUFJLE1BQUEsU0FBUyxFQUFDO0FBQWQsTUE5Q0osQ0FERjtBQW1ERCxHQXBEQSxDQXpCSCxlQThFRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUE5RUYsQ0FERjtBQWtGRCxDQXpGTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnXG5pbXBvcnQge1NpdGVOYXZQcm9wc30gZnJvbSAnLi9TaXRlTmF2J1xuaW1wb3J0IHtOYXZJdGVtfSBmcm9tICcuL05hdkl0ZW0nXG5cbi8qKlxuICogUHJpbWFyeSBVSSBjb21wb25lbnQgZm9yIHVzZXIgaW50ZXJhY3Rpb25cbiAqL1xuZXhwb3J0IGNvbnN0IE1vYmlsZU1lbnU6IEZDPFNpdGVOYXZQcm9wcz4gPSAoe1xuICBkZW1vQnV0dG9uVGV4dCA9ICdGcmVlIERlbW8nLFxuICBkZW1vVXJsID0gJyMnLFxuICBtZW51RGF0YSA9IFtdLFxuICBzdHlsZXMgPSAnYmxhY2snLFxuICBsYW5ndWFnZUxpc3QgPSB7fVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGJnLWdyYXktOTAwXG4gICAgICAgICAgICAgICAgJHtzdHlsZXMgPT0gJ3RyYW5zV2hpdGUnICYmICdiZy1vcGFjaXR5LTEwJ31cbiAgICAgICAgICAgIGB9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIHBiLTUgcHQtNic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0yJz5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17ZGVtb1VybH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMy41IHB4LTMuNSB1cHBlcmNhc2UgYmctYnJhbmQtNDAwIHJvdW5kZWQtbGcgdHJhY2tpbmctd2lkZXIgbGVhZGluZy0zIHRleHQtc20gZm9udC1zZW1pYm9sZCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGVtb0J1dHRvblRleHR9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE5hdkl0ZW1cbiAgICAgICAgICBjbGFzc05hbWU9J21yLTcnXG4gICAgICAgICAgc3R5bGVzPSdkZWZhdWx0L3doaXRlJ1xuICAgICAgICAgIGNhcHRpb249e1xuICAgICAgICAgICAgbGFuZ3VhZ2VMaXN0LmN1cnJlbnQgPyBsYW5ndWFnZUxpc3QuY3VycmVudCA6ICdFbidcbiAgICAgICAgICB9XG4gICAgICAgICAgc3VibWVudT17bGFuZ3VhZ2VMaXN0LnN1Ym1lbnV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBjbGFzc05hbWU9J214LTIgYmctb3BhY2l0eS0xMCBtdC02IHRleHQtZ3JheS00MDAnIC8+XG5cbiAgICAgIHttZW51RGF0YS5tYXAoKG1lbnUsIG1lbnVJbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXttZW51SW5kZXh9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZvbnQtYm9yZGEgdXBwZXJjYXNlIHRleHQtZ3JheS01MCB0ZXh0LWxnIHRyYWNraW5nLXdpZGVzdCBwbC02IHB0LTYgJz5cbiAgICAgICAgICAgICAge21lbnUuc3VibWVudSA9PSBudWxsID8gKFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e21lbnUuY2FwdGlvbkxpbmt9PnttZW51LmNhcHRpb259PC9hPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIG1lbnUuY2FwdGlvblxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7bWVudS5zdWJtZW51ID09IG51bGwgPyAoXG4gICAgICAgICAgICAgICAgPD48Lz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtMic+XG4gICAgICAgICAgICAgICAgICB7bWVudS5zdWJtZW51Lm1hcCgoZ3JvdXAsIGdyb3VwSW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Z3JvdXBJbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1ncmF5LTEwMCBmb250LXNlbWlib2xkIHRyYWNraW5nLXdpZGVyIHRleHQtc20gcGwtNiBwdC01Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLmdyb3VwQ2FwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge2dyb3VwLmdyb3Vwcy5tYXAoKGl0ZW0sIGl0ZW1JbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNiBwdC01IHRleHQtZ3JheS0xMDAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1JbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtpdGVtLnR5cGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnV0dG9uJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWJyYW5kLTMwMCBob3Zlcjp0ZXh0LWJyYW5kLTYwMCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17aXRlbS51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge21lbnVEYXRhLmxlbmd0aCAtIDEgPiBtZW51SW5kZXggJiYgKFxuICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdteC0yIGJnLW9wYWNpdHktMTAgbXQtNiB0ZXh0LWdyYXktNDAwJyAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItMjAnPjwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXX0=