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
                { className: [this.props.className, 'dibsvg-svg dibsvg-location-pin'].join(' '), 'data-tn': 'location-pin', viewBox: '0 0 250 250' },
                React.createElement('path', { fill: 'none', d: 'M124.1,10.8C103.5,10.8,82.7,21,67,38.6c-18.1,20.4-26.7,48-23.4,75.5c6.2,52.4,66,108.3,80.5,121.1c15.4-13.4,77-69.9,80.5-120.9c2-29.6-7.8-58.2-26.8-78.5C162.6,19.7,143.6,10.8,124.1,10.8z M123.8,141.5c-22.2,0-40.3-18.1-40.3-40.3s18.1-40.3,40.3-40.3s40.3,18.1,40.3,40.3S146.1,141.5,123.8,141.5z' }),
                React.createElement('path', { fill: 'none', d: 'M123.8,71.8c-16.2,0-29.3,13.2-29.3,29.3s13.2,29.3,29.3,29.3s29.3-13.2,29.3-29.3S140,71.8,123.8,71.8z' }),
                React.createElement('path', { d: 'M185.8,28.4C168.6,10,146.6-0.2,124.1-0.2c-23.8,0-47.6,11.5-65.3,31.5C38.5,54.1,29,84.7,32.7,115.4c3.2,26.8,18.9,57.1,46.8,90c10.8,12.8,21.3,23.3,28.2,29.8C121.1,248,122,248,124.1,248c1.3,0,2.5-0.4,3.5-1.2c3.4-2.8,83.8-68.8,88-131.6C217.7,82.6,206.9,50.9,185.8,28.4z M204.5,114.4c-3.4,51-65,107.5-80.5,120.9c-14.5-12.9-74.3-68.7-80.5-121.1C40.3,86.6,48.8,59,67,38.6c15.7-17.6,36.5-27.8,57.1-27.8c19.5,0,38.5,8.9,53.7,25.1C196.8,56.2,206.5,84.9,204.5,114.4z' }),
                React.createElement('path', { d: 'M123.8,60.8c-22.2,0-40.3,18.1-40.3,40.3s18.1,40.3,40.3,40.3s40.3-18.1,40.3-40.3S146.1,60.8,123.8,60.8z M123.8,130.5c-16.2,0-29.3-13.2-29.3-29.3s13.2-29.3,29.3-29.3s29.3,13.2,29.3,29.3S140,130.5,123.8,130.5z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;