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
                { className: [this.props.className, 'dibsvg-svg dibsvg-pineapple'].join(' '), 'data-tn': 'pineapple', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M188.5,105.1c-5-12.8-15.7-29.2-38-37.2l30.6-35.6l-26.8,8.3L170.3,11l-25.9,16l9-26L125,29.8L95.2-0.4l8.9,25.6L79.3,8.1l17,33.5l-27.6-8.4l29.1,34.6c-4.2,1.6-12.4,5.3-20.7,12.4c-10.7,9.3-23.6,26.3-24.1,55.1V182l0,0.1c0,1.4,0.4,13.4,2,18.7c4.2,14.4,19.1,47.9,67.2,48c0.5,0,2,0.1,4.2,0.1c0,0,0,0,0,0c7.2,0,21.4-1,35-7.6c17.3-8.4,28-22.7,31.7-42.6c0.4-2.2,0.8-11.2,1-13.9l0-51.8C194,131.9,194.1,119.3,188.5,105.1z M179.8,191.8l5.1-5.1c-0.2,3.9-0.4,7.9-0.6,9.7L179.8,191.8zM123.5,239.4l-21.1-21.1l21.2-21.2l21,21.2L123.5,239.4z M115.2,239.5c-10.8-0.9-19.4-3.7-26.3-7.7l9.3-9.3L115.2,239.5z M63,195.4c-0.4-2.6-0.7-5.9-0.9-9l4.9,4.9L63,195.4z M62,134.9l4.5,4.5l-4.5,4.5v-8.5C62,135.3,62,135.1,62,134.9z M171.9,140.5l-21.6,21.6l-22.9-23l21.7-21.9L171.9,140.5z M153.3,113l18.8-19c9.4,12.1,12,26.2,12.7,33.7l-8.6,8.6L153.3,113z M146,166.4l-22.3,22.2l-22.8-22.9l22.1-22.3L146,166.4z M123.1,134.8l-21.6-21.7l22.1-21.9l21.3,21.7L123.1,134.8z M118.8,139.1l-22.1,22.3L75,139.5l22.3-22.1L118.8,139.1z M70.8,135.2l-8.2-8.2c1.7-13.9,6.7-24.2,12.6-31.8L93,113.1L70.8,135.2z M62,177.8v-25.4l8.7-8.7l21.8,21.9L71.3,187L62,177.8z M96.7,169.9l22.7,22.9L98.2,214l-22.7-22.8L96.7,169.9z M127.9,192.8l22.3-22.2l21.1,21.2L149,214L127.9,192.8zM154.5,166.4l21.6-21.6l8.9,9.1v24.2l-9.5,9.4L154.5,166.4z M185,145.3l-4.7-4.8l4.7-4.7V145.3z M168.1,89.4l-19.1,19.2L127.8,87l12.9-12.8c1.3,0.4,2.1,0.6,2.1,0.6l0.3,0.1C154.1,78.1,162.2,83.3,168.1,89.4z M123.6,82.7l-9.7-9.9c3.2-0.5,6.5-0.8,9.8-0.8c3.7,0,7.1,0.3,9.9,0.7L123.6,82.7z M104.8,15L125,35.5l18.9-19.2l-4.8,13.9l-14.7,9l-14.8-10.2L104.8,15z M95.4,26.5l28.9,19.9l30.1-18.6L146,43.2L124,50l-19.7-6L95.4,26.5z M124,57.3l25-7.8l0.3,0.2l0.2-0.3l10.4-3.2l-16.7,19.4c-3.6-1-10.7-2.6-19.5-2.6c-6.4,0-12.7,0.8-18.7,2.5L89.3,46.8L124,57.3z M103.1,75.5l0.3-0.1c1.2-0.4,2.4-0.8,3.6-1.1L119.4,87l-22.1,21.9L79.1,90.7C90,79.3,102.2,75.8,103.1,75.5z M64.8,202.1l6.5-6.5L94,218.3l-10.2,10.2C73.4,220.8,67.8,210.5,64.8,202.1z M131.6,239.8l17.3-17.3l10,10c-0.5,0.3-1,0.5-1.5,0.8C148.1,237.8,138.5,239.3,131.6,239.8z M164.2,229.4l-11-11.1l22.3-22.3l7.2,7.3C179.5,214.5,173.3,223.2,164.2,229.4z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;