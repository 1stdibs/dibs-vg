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
                { className: [this.props.className, 'dibsvg-svg dibsvg-heart-outlined'].join(' '), 'data-tn': 'heart-outlined', viewBox: '0 0 250 250' },
                React.createElement('path', { d: 'M29.2,129.3c-6.5-8.5-27.7-37.7-28.9-57.4C-0.9,51.8,4,35.7,15,24.1C30,8.1,51.4,6.3,59.8,6.3c1.3,0,2.2,0,2.8,0.1 c16.2,0.4,39.5,7.6,58.9,39.4l3.4,5.6l3.6-5.5c16.8-25.7,37.1-39,60.3-39.5c3,0,28.9-0.9,48,20.6c7.2,8.1,15.3,21.4,12.5,45.6 c-1.9,16.9-12.5,34.8-22.5,48.4c-11.8,16.1-90.2,110.3-101.9,124L29.2,129.3z M59.8,16c-7.2,0-25.6,1.2-37.8,14.7 C12.6,41.2,8.5,54,10,71.3C10.7,80.2,15,90,23.6,104c6.4,10.4,12.6,18.7,13.3,19.6l88,106.4l83.8-101c0,0,11.1-13.7,18.1-25.5 c6.2-10.5,12-22.5,13-31.3c1.7-15.7-1.6-29.1-10.2-38.6c-17.9-19.8-40-17.3-41-17.3C163,16.6,141.4,36,124.4,73.8 c-2.3-6.2-5.9-14.6-11-22.9C99.8,28.5,82.1,16.4,62.1,16.1l0,0C61.4,16,60.6,16,59.8,16z' })
            );
        }
    }]);

    return Component;
}(React.Component);

module.exports = Component;