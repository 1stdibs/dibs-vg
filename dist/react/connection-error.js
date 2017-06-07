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
                { className: [this.props.className, 'dibsvg-svg dibsvg-connection-error'].join(' '), 'data-tn': 'connection-error', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M247.3,73.2c-13.8-8-27.9-14.6-42.3-19.8l43.5-43.5c2.1-2.1,2.1-5.6,0-7.8c-2.1-2.1-5.6-2.1-7.8,0l-47.4,47.4c-12.9-3.9-26-6.7-39.3-8.3c-25.7-3.1-51.9-1.8-77.8,3.9C32,54.8,4.1,73.6,2.9,74.4c-2.5,1.7-3.2,5.1-1.4,7.6c1.1,1.6,2.8,2.4,4.6,2.4c1.1,0,2.2-0.3,3.1-1C9.4,83.3,36.8,64.9,79,55.8c24.7-5.4,49.6-6.6,74-3.6c10.6,1.3,21,3.4,31.4,6.2l-39.8,39.8c-21-2.4-39.7-0.4-54.3,2.9c-31.5,7.1-51.4,20.8-52.2,21.4c-2.5,1.7-3.1,5.2-1.3,7.7c1.1,1.5,2.8,2.3,4.5,2.3c1.1,0,2.2-0.3,3.2-1c0.2-0.1,19.3-13.2,48.7-19.7c14-3.1,27.8-4.2,41.4-3.5L1.6,241.1c-2.1,2.1-2.1,5.6,0,7.8c1.1,1.1,2.5,1.6,3.9,1.6s2.8-0.5,3.9-1.6l65.5-65.5c0.4,0.1,0.7,0.1,1.1,0.1c1.1,0,2.1-0.3,3.1-0.9c0.1-0.1,11.3-7.4,28.3-11c22.5-4.8,44-1.2,64,10.7c2.6,1.6,6,0.7,7.6-1.9c1.6-2.6,0.7-6-1.9-7.5c-28.2-16.7-54.9-15.7-72.4-11.9c-3.6,0.8-6.9,1.7-10,2.7l54-54c19.8,3,39.1,10.1,57.8,21.3c2.6,1.6,6,0.7,7.6-1.9c1.6-2.6,0.7-6-1.9-7.5c-18.8-11.2-37.1-17.8-54.2-21.2L196.3,62c15.4,5.2,30.6,12,45.4,20.7c2.6,1.5,6,0.7,7.6-2C250.8,78.1,249.9,74.7,247.3,73.2z' }),
                React.createElement('ellipse', { cx: '124.2', cy: '225', rx: '10.1', ry: '10' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;