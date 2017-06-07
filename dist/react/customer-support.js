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
                { className: [this.props.className, 'dibsvg-svg dibsvg-customer-support'].join(' '), 'data-tn': 'customer-support', viewBox: '0 0 518 518' },
                React.createElement('path', { d: 'M518.6,270.8h-44.4c-1.4-9.6-5.4-26-16.1-40.4c-0.5-0.6-11-14.2-27.5-20.2c13.1-8.4,21.8-23.1,21.8-39.8c0-26.1-21.2-47.3-47.3-47.3s-47.3,21.2-47.3,47.3c0,16.5,8.5,31,21.3,39.5c-9.9,3.1-20.9,9-29.7,20.5c-9.2-19.3-22.4-31.7-33.9-39.4c-8.1-5.4-16.2-9-23-11.4c20.8-11.7,34.9-33.9,34.9-59.4c0-37.5-30.5-68.1-68.1-68.1c-37.5,0-68.1,30.5-68.1,68.1c0,25.1,13.7,47.1,34,58.9c-24.1,7.3-42.9,24.2-55.2,49.8c-0.2,0.4-0.3,0.7-0.5,1.1c-8.7-11.2-19.6-17.1-29.4-20.1c12.8-8.5,21.3-23,21.3-39.5c0-26.1-21.2-47.3-47.3-47.3c-26.1,0-47.3,21.2-47.3,47.3c0,16.7,8.7,31.5,21.9,39.9c-17.2,6.1-26.1,17.9-27.7,20.2c-10,12.5-14.2,30.2-15.8,40.3H0v14.4h31.2v170.4H487V285.2h31.5V270.8zM405,137.6c18.1,0,32.9,14.8,32.9,32.9s-14.8,32.9-32.9,32.9s-32.9-14.8-32.9-32.9S386.9,137.6,405,137.6z M389,222.3c7.6-1.5,27-0.8,32,0.2c15,3,25.5,16.5,25.6,16.6c8.1,10.9,11.5,23.5,13,31.7h-99.2c-0.9-8.6-2.5-16.4-4.5-23.5C364.3,230.4,378.4,224.4,389,222.3z M205.7,120.3c0-29.6,24.1-53.7,53.7-53.7c29.6,0,53.7,24.1,53.7,53.7S288.9,174,259.3,174C229.7,174,205.7,149.9,205.7,120.3z M249.2,189.5l0.8-0.1c0,0,4.8-0.8,11.3-0.8c3.8,0,7.5,0.3,10.9,0.8l0.4,0.1c0.2,0,17.7,2,35.5,13.9c21.7,14.6,34.4,37.3,37.9,67.4H172.1c1.3-8.3,4.3-21.9,10.9-35.6C196.8,206.5,219,191.2,249.2,189.5zM114.2,137.6c18.1,0,32.9,14.8,32.9,32.9s-14.8,32.9-32.9,32.9s-32.9-14.8-32.9-32.9S96,137.6,114.2,137.6z M72.5,239.3l0.4-0.6c0.3-0.5,8.4-12.3,25.6-16.3c4.4-1,23.7-1.7,31.8-0.1c10.4,2,24.3,8,32.8,24.4c-3.1,9.8-4.7,18.4-5.5,24.1H59.9C61.5,261.9,65.1,248.4,72.5,239.3z M472.6,441.2h-427V285.9h427V441.2z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;