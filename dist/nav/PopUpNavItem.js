"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopUpNavItem = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var PopUpNavItem = _ref => {
  var {
    caption = 'Link',
    type = 'default',
    href = '#',
    isActive = false,
    children
  } = _ref;
  var classes = ['flex', 'items-center'];

  switch (type) {
    case 'special':
      classes.push('px-3', 'py-2.5', 'fontStyle-bold', 'text-gray-100');

      if (isActive) {
        classes.push('text-brand-300', 'dark:text-brand-300');
      } else {
        classes.push('hover:text-brand-300', 'dark:text-gray-100', 'dark:hover:text-brand-300');
      }

      break;

    case 'header':
      classes.push('uppercase', 'px-3', 'py-2.5', 'font-semibold', 'tracking-wider', 'text-gray-800', 'text-sm', 'dark:text-gray-100');
      break;

    case 'button':
      classes.push('px-3', 'py-3.5', 'tracking-wider', 'text-xs', 'font-semibold');

      if (isActive) {
        classes.push('text-brand-700', 'dark:text-brand-100');
      } else {
        classes.push('text-brand-600', 'hover:text-brand-700', 'dark:text-brand-300', 'dark:hover:text-brand-100');
      }

      break;

    case 'default':
    default:
      classes.push('px-3', 'py-2.5', 'text-sm');

      if (isActive) {
        classes.push('text-brand-600', 'dark:text-brand-300');
      } else {
        classes.push('text-gray-800', 'hover:text-brand-600', 'dark:text-gray-100', 'dark:hover:text-brand-300');
      }

      break;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.join(' '),
    style: {
      width: 'fit-content'
    }
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: href
  }, caption), children ? children : '');
};

exports.PopUpNavItem = PopUpNavItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbmF2L1BvcFVwTmF2SXRlbS50c3giXSwibmFtZXMiOlsiUG9wVXBOYXZJdGVtIiwiY2FwdGlvbiIsInR5cGUiLCJocmVmIiwiaXNBY3RpdmUiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJwdXNoIiwiam9pbiIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsWUFBbUMsR0FBRyxRQU03QztBQUFBLE1BTjhDO0FBQ2xEQyxJQUFBQSxPQUFPLEdBQUcsTUFEd0M7QUFFbERDLElBQUFBLElBQUksR0FBRyxTQUYyQztBQUdsREMsSUFBQUEsSUFBSSxHQUFHLEdBSDJDO0FBSWxEQyxJQUFBQSxRQUFRLEdBQUcsS0FKdUM7QUFLbERDLElBQUFBO0FBTGtELEdBTTlDO0FBQ0osTUFBTUMsT0FBTyxHQUFHLENBQUMsTUFBRCxFQUFTLGNBQVQsQ0FBaEI7O0FBQ0EsVUFBUUosSUFBUjtBQUNFLFNBQUssU0FBTDtBQUNFSSxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxNQUFiLEVBQXFCLFFBQXJCLEVBQStCLGdCQUEvQixFQUFpRCxlQUFqRDs7QUFDQSxVQUFJSCxRQUFKLEVBQWM7QUFDWkUsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsZ0JBQWIsRUFBK0IscUJBQS9CO0FBQ0QsT0FGRCxNQUVPO0FBQ0xELFFBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLHNCQUFiLEVBQXFDLG9CQUFyQyxFQUEyRCwyQkFBM0Q7QUFDRDs7QUFFRDs7QUFDRixTQUFLLFFBQUw7QUFDRUQsTUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsV0FBYixFQUEwQixNQUExQixFQUFrQyxRQUFsQyxFQUE0QyxlQUE1QyxFQUE2RCxnQkFBN0QsRUFBK0UsZUFBL0UsRUFBZ0csU0FBaEcsRUFBMkcsb0JBQTNHO0FBQ0E7O0FBQ0YsU0FBSyxRQUFMO0FBQ0VELE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLE1BQWIsRUFBcUIsUUFBckIsRUFBK0IsZ0JBQS9CLEVBQWlELFNBQWpELEVBQTRELGVBQTVEOztBQUNBLFVBQUlILFFBQUosRUFBYztBQUNaRSxRQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxnQkFBYixFQUErQixxQkFBL0I7QUFDRCxPQUZELE1BRU87QUFDTEQsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsZ0JBQWIsRUFBK0Isc0JBQS9CLEVBQXVELHFCQUF2RCxFQUE4RSwyQkFBOUU7QUFDRDs7QUFDRDs7QUFDRixTQUFLLFNBQUw7QUFDQTtBQUNFRCxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxNQUFiLEVBQXFCLFFBQXJCLEVBQStCLFNBQS9COztBQUNBLFVBQUlILFFBQUosRUFBYztBQUNaRSxRQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYSxnQkFBYixFQUErQixxQkFBL0I7QUFDRCxPQUZELE1BRU87QUFDTEQsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsZUFBYixFQUE4QixzQkFBOUIsRUFBc0Qsb0JBQXRELEVBQTRFLDJCQUE1RTtBQUNEOztBQUNEO0FBN0JKOztBQStCQSxzQkFDRTtBQUNFLElBQUEsU0FBUyxFQUFFRCxPQUFPLENBQUNFLElBQVIsQ0FBYSxHQUFiLENBRGI7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFDQyxNQUFBQSxLQUFLLEVBQUU7QUFBUjtBQUZULGtCQUlFO0FBQUcsSUFBQSxJQUFJLEVBQUVOO0FBQVQsS0FDR0YsT0FESCxDQUpGLEVBUUlJLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEVBUjFCLENBREY7QUFhRCxDQXBETSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZDLCBIVE1MQXR0cmlidXRlc30gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9wVXBOYXZJdGVtUHJvcHMgZXh0ZW5kcyBIVE1MQXR0cmlidXRlczxIVE1MRWxlbWVudD4ge1xuICAvKipcbiAgICogcG9wIHVwIHR5cGVcbiAgICovXG4gIHR5cGU6ICdkZWZhdWx0JyB8ICdoZWFkZXInIHwgJ2J1dHRvbicgfCAnc3BlY2lhbCdcbiAgLyoqXG4gICAqIGZsYWcgdG8gY2hlY2sgcG9wIHVwIGl0ZW0gaXMgYWN0aXZlXG4gICAqL1xuICBpc0FjdGl2ZT86IGJvb2xlYW5cbiAgLyoqXG4gICAqIHRleHQgdG8gc2hvd1xuICAgKi9cbiAgY2FwdGlvbjogc3RyaW5nXG4gIC8qKlxuICAgKiB1cmwgdG8gc2hvd1xuICAgKi9cbiAgaHJlZj86IHN0cmluZ1xuICAvKipcbiAgICogY2hpbGQgbm9kZVxuICAgKi9cbiAgY2hpbGRyZW4/OiBSZWFjdC5SZWFjdE5vZGVcbn1cblxuLyoqXG4gKiBQcmltYXJ5IFVJIGNvbXBvbmVudCBmb3IgdXNlciBpbnRlcmFjdGlvblxuICovXG5leHBvcnQgY29uc3QgUG9wVXBOYXZJdGVtOiBGQzxQb3BVcE5hdkl0ZW1Qcm9wcz4gPSAoe1xuICBjYXB0aW9uID0gJ0xpbmsnLFxuICB0eXBlID0gJ2RlZmF1bHQnLFxuICBocmVmID0gJyMnLFxuICBpc0FjdGl2ZSA9IGZhbHNlLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gWydmbGV4JywgJ2l0ZW1zLWNlbnRlciddXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3NwZWNpYWwnOlxuICAgICAgY2xhc3Nlcy5wdXNoKCdweC0zJywgJ3B5LTIuNScsICdmb250U3R5bGUtYm9sZCcsICd0ZXh0LWdyYXktMTAwJylcbiAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICBjbGFzc2VzLnB1c2goJ3RleHQtYnJhbmQtMzAwJywgJ2Rhcms6dGV4dC1icmFuZC0zMDAnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCdob3Zlcjp0ZXh0LWJyYW5kLTMwMCcsICdkYXJrOnRleHQtZ3JheS0xMDAnLCAnZGFyazpob3Zlcjp0ZXh0LWJyYW5kLTMwMCcpXG4gICAgICB9XG5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnaGVhZGVyJzpcbiAgICAgIGNsYXNzZXMucHVzaCgndXBwZXJjYXNlJywgJ3B4LTMnLCAncHktMi41JywgJ2ZvbnQtc2VtaWJvbGQnLCAndHJhY2tpbmctd2lkZXInLCAndGV4dC1ncmF5LTgwMCcsICd0ZXh0LXNtJywgJ2Rhcms6dGV4dC1ncmF5LTEwMCcpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICBjbGFzc2VzLnB1c2goJ3B4LTMnLCAncHktMy41JywgJ3RyYWNraW5nLXdpZGVyJywgJ3RleHQteHMnLCAnZm9udC1zZW1pYm9sZCcpXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCd0ZXh0LWJyYW5kLTcwMCcsICdkYXJrOnRleHQtYnJhbmQtMTAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgndGV4dC1icmFuZC02MDAnLCAnaG92ZXI6dGV4dC1icmFuZC03MDAnLCAnZGFyazp0ZXh0LWJyYW5kLTMwMCcsICdkYXJrOmhvdmVyOnRleHQtYnJhbmQtMTAwJylcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzZXMucHVzaCgncHgtMycsICdweS0yLjUnLCAndGV4dC1zbScpXG4gICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKCd0ZXh0LWJyYW5kLTYwMCcsICdkYXJrOnRleHQtYnJhbmQtMzAwJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsYXNzZXMucHVzaCgndGV4dC1ncmF5LTgwMCcsICdob3Zlcjp0ZXh0LWJyYW5kLTYwMCcsICdkYXJrOnRleHQtZ3JheS0xMDAnLCAnZGFyazpob3Zlcjp0ZXh0LWJyYW5kLTMwMCcpXG4gICAgICB9XG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmpvaW4oJyAnKX1cbiAgICAgIHN0eWxlPXt7d2lkdGg6ICdmaXQtY29udGVudCd9fVxuICAgID5cbiAgICAgIDxhIGhyZWY9e2hyZWZ9PlxuICAgICAgICB7Y2FwdGlvbn1cbiAgICAgIDwvYT5cbiAgICAgIHtcbiAgICAgICAgY2hpbGRyZW4gPyBjaGlsZHJlbiA6ICcnXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ==