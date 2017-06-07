'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        _classCallCheck(this, Component);

        return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).apply(this, arguments));
    }

    _createClass(Component, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'svg',
                { className: [this.props.className, 'dibsvg-svg dibsvg-congratulations'].join(' '), 'data-tn': 'congratulations', viewBox: '0 0 250 250' },
                React.createElement('circle', { cx: '60.8', cy: '95.6', r: '4.1' }),
                React.createElement('circle', { cx: '54.8', cy: '110.9', r: '4.1' }),
                React.createElement('circle', { cx: '78.4', cy: '147.1', r: '4.1' }),
                React.createElement('circle', { cx: '192.8', cy: '91.9', r: '4.1' }),
                React.createElement('circle', { cx: '153.4', cy: '75.8', r: '4.1' }),
                React.createElement('circle', { cx: '194.5', cy: '111.7', r: '4.1' }),
                React.createElement('path', { d: 'M235.6,198.5l-22.7,6.9l-16.9-55.6c0.9-0.4,1.6-0.7,2.1-1c24.5-13.3,23.5-37.3,19.6-48.2l-36.7-100L118,19.9l5.6,23.4L62.1,26.9l-32.8,98.2l-0.1,0.2c-8.9,32.2,11.6,46,20.8,50.4c0.4,0.2,0.8,0.4,1.2,0.5l-14.9,56l-22.9-6.1l-2.3,8.7l54.5,14.5l2.3-8.7l-22.9-6.1l15-56.1c0.9,0.2,1.8,0.2,2.3,0.3c1,0.1,2,0.1,3,0.1c25.7,0,36.8-20.1,39-30.7l20.6-99.6l17.1,72l0.1,0.2c8.2,28,28.1,32.1,39.2,32.1c1.6,0,3.3-0.1,5-0.3c0.4,0,0.9-0.1,1.3-0.2l16.8,55.5l-22.7,6.9l2.6,8.6l54-16.4L235.6,198.5zM95.4,146.4c-0.2,1-5.3,23.5-30.2,23.5c-0.8,0-1.6,0-2.5-0.1c-1.5-0.1-6.6-1.1-8.9-2.2c-20.7-9.9-18.9-29.1-16-39.8l17.4-52c2.5-0.7,9.2-1.7,16.5,5.3c0.2,0.1,11.8,10.8,26,10.8c3,0,6.1-0.5,9.2-1.6L95.4,146.4z M108.5,83.2c-6.4,3.7-13.7,3.9-21.6,0.6c-6.5-2.7-11-6.9-11-6.9c-7-6.8-13.9-7.8-18.5-7.4L68,37.8l47.3,12.6L108.5,83.2z M175.5,11.8l11.5,31.5c-3.5,6.5-9.6,10.5-18,11.9c-7,1.1-13,0-13,0c-9.5-2-15.9,0.7-19.7,3.5L128.7,26L175.5,11.8z M185.2,143.8c-1.3,0.1-2.7,0.2-4,0.2c-19,0-27.1-13.9-30.6-25.6L138,65.1c1.7-1.9,6.9-6.3,16.9-4.2c0.2,0.1,22.9,4.4,34.8-10.7l19.6,53.5c0.4,1,8.4,24.2-15.4,37.2C192.6,141.7,187.7,143.5,185.2,143.8z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;